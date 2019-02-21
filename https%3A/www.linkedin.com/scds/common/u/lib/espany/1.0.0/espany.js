/*
Espany
(c) 2014 LinkedIn Corp.  All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

(function(win) {

  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // JSON-RPC version required for all verison 2.0 messages.
  var JSON_RPC_VERSION = '2.0',

    // The 'message' event string.
    MESSAGE_EVENT = 'message',

    // An internal method that reports all available methods that may be called remotely.
    DISCOVER_EXTENSION = 'rpc.discover',

    // An origin of the consumer, passed to the provider via URL parameter.
    ORIGIN_PARAM = 'e_origin',

    // A unique channel id set in the consumer, passed to the provider via URL parameter.
    CHANNEL_PARAM = 'e_channel',

    // Regular expression to determine if a string begins with 'http(s)'.
    HTTP_REGEX = /^https?:\/\//,

    // A reference to the central communicaiton manager.
    manager,

    /**
     * This singleton is a collection of utility methods provided to
     * make life easier in general. They are available to all components.
     */
    Util = {

      /**
       * A utility method to bind a function to a context.
       * @param  {Function} func    The function to bind.
       * @param  {Object} context   The context to bind it to.
       * @return {Function}         The bound function.
       */
      bind: function(func, context) {
        return function() {
          func.apply(context, arguments);
        };
      },

      /**
       * Reports whether or not the passed object is an array.
       * @param  {*}  obj The object you whish to inspect.
       * @return {Boolean}     Is the object an array?
       */
      isArray: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },

      /**
       * A helper function to grab the window's query string and convert it into a friendly object.
       * @return {Object} The window's query string in key-value format.
       */
      getQueryParams: function() {

        var pairs = win.location.search.slice(1).split('&'),
            params = {},
            param,
            pair;

        function xssSanitize(text) {
          return text.replace(/[\x00'"<\\]/g, '\uFFFD');
        }

        while (pairs.length) {
          pair = pairs.pop();
          if (pair) {
            param = pair.split('=');
            if (param.length > 1) {
              params[decodeURIComponent(param[0])] = xssSanitize(decodeURIComponent(param[1]));
            }
          }
        }

        return params;
      }

    };

  // Configure event listener methods based on browser capabilities.
  // Standard support.
  if (win.addEventListener) {
    Util.addListener = function(el, evt, fn) {
        el.addEventListener(evt, fn, false);
    };
  }

  // Old IE support.
  else if (win.attachEvent) {
    Util.addListener = function(el, evt, fn) {
      el.attachEvent('on' + evt, fn);
    };
  }


  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * The Manager is responsible for keeping track of communication nodes
   * and requests on a single document, as well as listening for and
   * processing messages.
   * @constructor
   */
  function Manager() {

    // A map of all the communication nodes.
    this.nodes = {};

    // A map of requests currently being processed.
    this.requests = {};

    // Begin listening for message events.
    Util.addListener(win, MESSAGE_EVENT, Util.bind(this.receiveMessage, this));
  }

  Manager.prototype = {

    /**
     * Creates a new communication node with provided options
     * and adds it to the nodes map.
     * @param {Object} options A map of node options.
     * @return {Node} A node communication object.
     */
    addNode: function(options) {
      var node = new Node(options);
      this.nodes[node.channel] = node;
      return node;
    },

    /**
     * Creates a new procedure request and adds it to the requests
     * map, providing access to it's callbacks to be invoked later.
     * @param {String} method The remote method to invoke.
     * @param {*} params Arguments to invoke the method with.
     * @return {Request} A request object.
     */
    addRequest: function(method, params) {
      var request = new Request(method, params);
      this.requests[request.id] = request;
      return request;
    },

    /**
     * Removes the given node from the nodes map and destroys it.
     * @param  {Node} node The node object to remove.
     */
    removeNode: function(node) {
      delete this.nodes[node.channel];
      node.destroy();
    },

    /**
     * We expect a JSON-RPC compliant message. Parse it as JSON but `try` (ha!) to fail nicely.
     * Breaking this out as a separate method to minimize try catch deoptimization
     * @param  {String} message the message from post message
     * @return {Object} the object found in msg or null if pasre failed
     * @private
     */
    _parseJSONMessage: function(msg) {
      // be nice to those who are using postmessage but are not sending JSON-RPC data
      try {
        return JSON.parse(msg);
      } catch(e) {
        return null;
      }
    },
    /**
     * This method is fired on the 'message' event. It will properly route the data
     * based on it's contents (request, result, or error).
     * @param  {Object} evt A 'message' event.
     */
    receiveMessage: function(evt) {

      var data,
          node;

      data = this._parseJSONMessage(evt.data);
      if (data) {
        node = this.nodes[data.channel];
      } else {
        return;
      }
      console.log('[Message Received @ ' + node.channel + ']', evt, data);

      // Process the message only if it's from the same channel and remote origin.
      if (node && evt.origin === node.remoteOrigin) {

        // Process the request method!
        if (data.method) {
          this.processMessage(node, data);
        }

        // Else, it must be result data. Process the request and remove it.
        else {
          this.requests[data.id].process(data);
          delete this.requests[data.id];
        }
      }
    },

    /**
     * Calls the provided request method and configures callbacks used to respond.
     * @param  {Object} data The request object that was created using _buildRequestPayload.
     */
    processMessage: function(node, data) {

      console.log('---> Request:', data);

      // Grab a reference to the method requested.
      var method = node.methods[data.method],

          // Build callbacks to potentially be used within the method.
          success = node.buildCallback(this._buildResultPayload, data.id),
          error = node.buildCallback(this._buildErrorPayload, data.id),

          // The arguments to pass to the method.
          params = data.params,

          // The method's returned result.
          result;

      // Convert params to an array so we can add callbacks and apply.
      params = Util.isArray(params) ? params : [params];
      result = method.apply(node, params.concat(success, error));

      // If there's an immediate result, send the response.
      // Otherwise, a response may be generated via callback or not applicable
      // (the case of notifications).
      if (result) {
        success(result);
      }
    },

    /**
     * Creates a response message to be sent to the consumer.
     * @param  {*} result The calculated result data.
     * @param  {Number} id     The original request's id.
     * @return {Object}        The built payload.
     */
    _buildResultPayload: function(result, id) {
      return {
        result: result,
        id: id
      };
    },

    /**
     * Creates an error message to be sent to the consumer.
     * @param  {String} error The error description.
     * @param  {Number} id    The original request's id.
     * @return {Object}       The built payload.
     */
    _buildErrorPayload: function(error, id) {
      return {
        error: {
          // Internal server error code from the spec.
          code: -32099,
          message: error
        },
        id: id
      };
    }

  };


  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * The core communication object used to determine it's remote counterpart
   * and send messages. Nodes are configured via proxy objects so they are not
   * exposed to the user.
   * @constructor
   * @param {Object} options
   *        A map of configuration options.
   * @param {String} options.remote
   *        Path to a remote document to load. Used only in parent documents.
   * @param {String|Number} options.channel
   *        A unique identifier for a pair of communication nodes. If this is
   *        not provided, a randomized identifier will be generated.
   * @param {Function} options.ready
   *        A function to invoke when the node has fully initialized.
   *        Only necessary on consumer nodes as they must wait for providers
   *        to load before remotely invoking their methods.
   * @param {Object} options.methods
   *        A map of methods available to be invoked remotely, keyed by name.
   *        These methods may return values or employ the use of 'success' and
   *        'error' callback methods that can be optionally passed in.
   * @param {Object} options.container
   *        A map of container element attributes to be applied, keyed by name.
   *        The most common usage is to style the container via 'style' and
   *        'className', however any valid DOM attributes (id, name, etc.) could
   *        be used. Note that including a 'container' option will automatically
   *        override all the element defaults, make the communication container
   *        visible. In this case, append it to the DOM using Proxy#container().
   *        Used only in parent documents.
   */
  function Node(options) {

    var queryParams = Util.getQueryParams(),
        remote;

    // If no options are passed, default to an empty object.
    // But, seriously, none of this will work without options.
    options = options || {};

    // Cache the remote option as it is referenced multiple times.
    remote = options.remote;

    // Set a unique channel id to help identify the communication components.
    // If a specific channel is not passed, try locating it in the query string.
    // As a last resort, generate one using the current timestamp.
    this.channel = options.channel || queryParams[CHANNEL_PARAM] || 'e_' + new Date().getTime();

    // If this is the consumer, the container property contains a reference to
    // the provider iframed document.
    this.container = remote ? new Container(this.channel, remote, options.container) : null;

    // This will be either an iframe's contentWindow (if this is the consumer)
    // or the parent window (if this is the provider), which is set immediately.
    // The communication iframe's window may not be available yet (for instance,
    // if options were passed to manually place the container) so an attempt
    // to set this will happen in _buildReady.
    if (!remote) {
      this.remoteWindow = win.parent;
    }

    // A communication remote (a URL to the provider) is either supplied by
    // the options object (set in the consumer) or in the URL parameters
    // (to be set in the provider).
    this.remoteOrigin = this._getRemoteOrigin(remote) || queryParams[ORIGIN_PARAM];

    // Set methods, defaulting to an empty object.
    this.methods = options.methods || {};

    // Set a special discovery method that returns available methods to call.
    this.methods[DISCOVER_EXTENSION] = this._buildReady(options.ready);

    // If this is the provider (checked by the existence of a container object
    // as providers do not have a container), send the discovery notification.
    // If this is the parent (consumer), we'll wait until the child is ready before sending the discovery.
    // This is sent even if the provider doesn't have any methods (in this case it is
    // technically a consumer), as it will notify the other node of it's ready state.
    if (!this.container) {
      this._sendDiscovery();
    }
  }

  Node.prototype = {

    /**
     * Sends a message to the remote Espany component using postMessage.
     * Appends the JSON-RPC version string to the message to satisfy the spec.
     * @param  {Object} payload A message formatted using one of the 'payload' methods.
     */
    send: function(payload) {

      var self = this;

      // Set the JSON-RPC property per the 2.0 spec.
      payload.jsonrpc = JSON_RPC_VERSION;

      // Set the channel so the proper Espany node received the message.
      // Note that 'channel' is not in the spec but I don't see anything discouraging
      // the use of custom properties.
      payload.channel = self.channel;

      // Post the payload to the remote window, expecting the set remote origin.
      // postMessage is synchronous in IE8 so we can force async using setTimeout.
      win.setTimeout(function() {
        self.remoteWindow.postMessage(JSON.stringify(payload), self.remoteOrigin);
      }, 10);
    },

    /**
     * Removes the communication container (provider) from the document and stops
     * listening for the 'message' event.
     */
    destroy: function() {
      if (this.container) {
        this.container.destroy();
        this.container = null;
      }
    },

    /**
     * Creates a callback for use in remote methods, sending data back to the consumer.
     * @param  {Function} method The payload-generating method to invoke.
     * @param  {String} id     The request id related to the callback.
     * @return {Function}      A method generated to send the payload.
     */
    buildCallback: function(method, id) {
      var self = this;
      return function() {
        self.send(method(arguments[0], id));
      };
    },

    /**
     * Creates a method will be called when the discovery method is invoked.
     * If this is the parent and the remoteWindow hasn't been set yet,
     * the callback invocation will be delayed until remoteWindow is set.
     * @param  {Function} callback The method to be called on ready.
     */
    _buildReady: function(callback) {

      var self = this;

      return function() {

        var container = self.container,
            el = container && container.el;

        // If this is the parent (a container exists) and remoteWindow
        // has not been set, try a few differet ways to set it.
        if (!self.remoteWindow && container) {
          console.log('remoteWindow not set. Attempting to set.');
          self.remoteWindow = el.contentWindow;

          // If it's still not set, the container's iframe must still be loading.
          // Listen for onload and then attempt to set remoteWindow again.
          if (!self.remoteWindow) {
            console.log('remoteWindow _still_ not set. Listening for container load.');
            Util.addListener(el, 'load', function() {
              self.remoteWindow = el.contentWindow;
              callback.apply(self, arguments);
            });
            return;
          }
        }

        // Otherwise, just invoke the callback.
        callback.apply(self, arguments);
      };
    },

    /**
     * Send the internal 'rpc.discovery' method, informing the remote component of the
     * available methods that can be called.
     */
    _sendDiscovery: function() {
      var request = new Request(DISCOVER_EXTENSION, [this._getMethodNames()], true);
      this.send(request.payload);
    },

    /**
     * Collects all the available methods that can be called remotely.
     * @return {Array} A list of available methods.
     */
    _getMethodNames: function() {

      var methods = this.methods,
          methodNames = [],
          method;

      for (method in methods) {
        methodNames.push(method);
      }

      return methodNames;
    },

    /**
     * Finds the remote origin:
     * For the consumer, this should be passed in via options.remote.
     * For the provider, this will be automatically included in the URL.
     * @param  {String} url The remote document remote URL.
     * @return {String}     The origin.
     */
    _getRemoteOrigin: function(url) {

      var segments;

      // If a URL string was passed, parse the origin and return it.
      if (url && typeof url === 'string') {
        segments = url.split('/');
        return segments[0] + '//' + segments[2];
      }
      return '';
    }

  };


  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * A communication iframe container pointing to a remote document (the provider).
   * If attributes are passed, they will be applied to the iframe and, in this case, the iframe
   * will need to be manually placed on the page using a reference stored in proxy.container().
   * Otherwise, the iframe will be hidden from view.
   * @constructor
   * @param  {String} id A unique identifier for the container.
   * @param  {String} url The remote document URL.
   * @param  {Object} [attributes] Attributes that should be added to the container.
   */
  function Container(id, url, attributes) {

    // Cached reference to the document object.
    var doc = win.document,

        // Create an iframe and reference it in an attribute.
        el = this.el = doc.createElement('iframe');

    // Continue building out the container only if a URL was passed and contains a protocol.
    if (url && url.match(HTTP_REGEX)) {

      // Set the iframe's default id and name. These can be overridden via attributes.
      el.name = el.id = id;

      // Build the iframe's source.
      el.src = this.buildFrameSrc(url);

      // If attributes are passed, attach them to the container.
      // Note that the container is now in manual mode; you'll need to append it yourself.
      if (attributes) {
        this.setAttributes(attributes);
        console.log('[Manual Container Mode] \'container\' option was set. Remember to append to the DOM using .container()');
      }

      // Otherwise, set the container defaults to hide it and then append it to the body.
      else {
        this.setDefaults();
        doc.getElementsByTagName('body')[0].appendChild(el);
      }
    }
  }

  Container.prototype = {

    /**
     * Removes the communication iframe from the document and
     * sets the reference to null.
     */
    destroy: function() {
      var el = this.el;
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      this.el = null;
    },

    /**
     * Loops through the passed attributes map, setting each one on the
     * communication iframe. These are commonly styling attributes such as
     * 'style' and 'className', although any attributes commonly found on
     * DOM elements are valid.
     * @param {Object} attributes A map of attributes and their values to set.
     */
    setAttributes: function(attributes) {
      var el = this.el,
          attribute;
      for (attribute in attributes) {
        if (attribute === 'style') {
          el.style.cssText = attributes[attribute];
        }
        else {
          el[attribute] = attributes[attribute];
        }
      }
    },

    /**
     * Sets default styling to the communication iframe, hiding it from view.
     */
    setDefaults: function() {
      var style = this.el.style;
      style.visibility = 'hidden';
      style.width = '1px';
      style.height = '1px';
      style.position = 'absolute';
      style.left = '-999px';
      style.top = '0';
    },

    /**
     * The remote document loaded in the iframe needs a reference to the consumer
     * (document that opened the iframe) to enable communication, passed via a
     * URL parameter. Here we properly append the parameter, taking care not to
     * mangle any other queries.
     * @param  {String} remote URL to the provider/server.
     * @return {String}        The URL extended with our parameter.
     */
    buildFrameSrc: function(url) {

      // Determine this document's origin to pass to the provider/server.
      // Break apart the remote URL to properly insert our communication param.
      var loc = win.location,
          origin = loc.origin ? loc.origin : loc.protocol + '//' + loc.host,
          originParam = ORIGIN_PARAM + '=' + origin,
          hashParts = url.split('#'),
          queryParts = hashParts[0].split('?');

      // If the remote URL has a query, append our param to the end.
      // Else, create a query string with our param.
      url = (queryParts[1] ? queryParts.join('?') + '&' : queryParts[0] + '?') + originParam;

      // Append the channel id so both Espany nodes can identify each other.
      // At this point, the channel id is the container's id, so grab it from there.
      url += '&' + CHANNEL_PARAM + '=' + this.el.id;

      // If the remote URL has a hash, append it.
      if (hashParts[1]) {
        url += ('#' + hashParts[1]);
      }

      return url;
    }

  };


  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Represents a remote procedure request preserved locally, containing callbacks
   * to be invoked when fulfulled. Callback methods can be simply added by
   * chaining them to a method invocation:
   *
   * var espany = new Espany({remote: 'path/to/remote'});
   * espany
   *   .myMethod() // returns a request object
   *   .result(function(data) {
   *     // do something with the result
   *   })
   *   .error(function(data) {
   *     // handle an error
   *   });
   *
   * @constructor
   * @param  {String}  method         The method the consumer wishes to invoke.
   * @param  {*}  params              The parameters the method should be invoked with.
   * @param  {Boolean} isNotification This message won't generate an id or response.
   */
  function Request(method, params, isNotification) {

    var payload = {
      method: method
    };

    // Params are optional.
    if (params) {
      payload.params = params;
    }

    // Non-notification requests need ids per the spec. Also, they match up the response
    // to fire the proper result/error callbacks.
    if (!isNotification) {
      this.id = payload.id = this._generateId();
    }

    // The exposed payload to be sent by a communication node.
    this.payload = payload;
  }

  Request.prototype = {

    /**
     * When a request response is received, this method is called and routs
     * the return data to the appropriate callback if one is set.
     * @param  {Object} data The response data returned from the remote call.
     */
    process: function(data) {
      if (data.result && this._resultCallback) {
        this._resultCallback(data.result);
      }
      else if (data.error && this._errorCallback) {
        this._errorCallback(data.error);
      }
    },

    /**
     * Sets a method to be called on request success.
     * @param  {Function} callback The method to be called.
     * @return {Request}           Reference to the Request instance.
     */
    result: function(callback) {
      this._resultCallback = callback;
      return this;
    },

    /**
     * Sets a method to be called on request error.
     * @param  {Function} callback The method to be called.
     * @return {Request}           Reference to the Request instance.
     */
    error: function(callback) {
      this._errorCallback = callback;
      return this;
    },

    /**
     * Generates a request id by incrementing an enclosed number variable.
     * @return {Number} A request id.
     */
    _generateId: (function() {
      var id = 0;
      return function() {
        return ++id;
      };
    }())

  };


  /*
  Espany
  (c) 2014 LinkedIn Corp.  All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS
  IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
  express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * This is Espany's public interface which proxies requests to the manager
   * and wrapped node for processing. When the discovery payload is received,
   * callable remote methods are created and attached to the Proxy object
   * to serve as the remote API.
   * @constructor
   * @param {Object} options A map of options used to configure Espany.
   *                         See the complete list in node.js.
   */
  function Proxy(options) {

    var self = this,
        ready = options.ready,
        node;

    /**
     * Called on ready, this method digests the available remote methods
     * and creates local methods to invoke them. Once these methods are
     * configured, this Proxy object will send it's callable methods to
     * it's remote counterpart if applicable.
     * @param  {String[]} methods A list of remote method names as strings.
     */
    function discover(methods) {

      var len = methods.length;

      /**
       * Creates a local proxy to a remote method that sends arguments appropriately
       * and sets up success and error callbacks.
       * @param  {String} method The remote method name.
       * @return {Function}      The local request object that you can chain callbacks to.
       */
      function buildMethod(method) {

        return function() {

          // Create a new request and send the payload off. But first,
          // convert the arguments to an array so we can send them via postMessage.
          var request = manager.addRequest(method, [].slice.call(arguments));

          // Send off the request.
          node.send(request.payload);

          // Return the request object to chain result and error callbacks.
          return request;
        };
      }

      // Loop through all the method names and build local methods for each.
      while (len--) {
        self[methods[len]] = buildMethod(methods[len]);
      }

      // If this is the consumer and has methods, send a discovery request.
      if (options.methods && node.container) {
        node._sendDiscovery();
      }
    }

    // Instantiate a manager if one does not exist.
    if (!manager) {
      manager = new Manager();
    }

    // If a ready method was included in the passed options, wrap it in a new
    // ready method that also calls discover.
    if (ready) {
      options.ready = function(methods) {
        discover(methods);
        ready();
      };
    }

    // Else, set discover as the ready method.
    else {
      options.ready = discover;
    }

    // Node contains all the transport code and is not exposed to the user.
    node = manager.addNode(options);

    /**
     * One of two public API methods that are not user defined, $destroy removes
     * the communication container and does some general cleanup.
     */
    this.$destroy = function() {
      manager.removeNode(node);
    };

    /**
     * The other public API method returns the communication container.
     * (Applicable in the parent document only).
     * @return {DOMElement} The communication iframe.
     */
    this.$container = function() {
      return node.container && node.container.el;
    };

    this.VERSION = '0.3.1';
  }


  win.Espany = Proxy;

}(window));
