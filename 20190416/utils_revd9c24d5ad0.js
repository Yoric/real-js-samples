define(["require","exports","util/helpers"],function(a,b,c){"use strict";function d(a){return function(b){c.extend(b,a),b.__super__=a.prototype}}function e(a){return function(b){a=a||{},a.defaultOptions=c.extend(!0,{},b.prototype.defaultOptions,a.defaultOptions),a.deferred=c.extend(!0,{},b.prototype.deferred,a.deferred),a.events=c.extend(!0,{},b.prototype.events,a.events),a.defaults=c.extend(!0,{},b.prototype.defaults,a.defaults),a.templates=c.extend(!0,{},b.prototype.templates,a.templates),a.elements=c.extend(!0,{},b.prototype.elements,a.elements),a.vars=c.extend(!0,{},b.prototype.vars,a.vars),c.extend(b.prototype,a)}}Object.defineProperty(b,"__esModule",{value:!0}),b.extend=d,b.meta=e});