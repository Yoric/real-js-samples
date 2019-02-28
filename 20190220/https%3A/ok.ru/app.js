(function () {
    'use strict';

    self.addEventListener('push', onPush);
    self.addEventListener('notificationclick', onNotificationClick);
    self.addEventListener('pushsubscriptionchange', onSubscriptionChange);

    /**
     * Handle push notification from server
     *
     * @param {*} event
     */
    function onPush(event) {
        var promise = self.clients.matchAll({type: "window"})
            .then(function (clientsList) {
                if (!event.data) {
                    log({
                        actionType: 'receive',
                        failure: true
                    });
                    return clientsList;
                }

                try {
                    var msg = event.data.json();
                } catch (e) {
                    console.error(e);
                    log({
                        actionType: 'parse',
                        failure: true
                    });
                    return clientsList;
                }

                log({
                    actionType: 'receive',
                    messageType: msg.type,
                    userId: msg.userId
                });

                if (clientsList.length > 0) {
                    log({
                        actionType: 'skip',
                        messageType: msg.type,
                        userId: msg.userId
                    });
                    return clientsList;
                }

                log({
                    actionType: 'show',
                    messageType: msg.type,
                    userId: msg.userId
                });

                return self.registration.showNotification(msg.title || 'ok.ru', {
                    body: msg.body,
                    icon: msg.icon || '/res/i/html5_notif_icon.png',
                    tag: msg.tag || 'webpush',
                    data: {
                        userId: msg.userId,
                        url: msg.url,
                        type: msg.type
                    }
                });
            }, console.error);

        event.waitUntil(promise);
    }

    /**
     * Handle user's click on notification
     *
     * @param event
     */
    function onNotificationClick(event) {
        event.notification.close();

        var promise = self.clients.matchAll({type: "window"})
            .then(function (clientsList) {
                var msg = event.notification.data;

                log({
                    actionType: 'click',
                    messageType: msg.type,
                    userId: msg ? msg.userId : undefined
                });

                for (var i = 0; i < clientsList.length; i++) {
                    var client = clientsList[i];
                    if ('focus' in client) {
                        return client.focus();
                    }
                }

                if (self.clients.openWindow && msg) {
                    self.clients.openWindow(msg.url || '/');
                }
            }, console.error);

        event.waitUntil(promise);
    }

    /**
     */
    function onSubscriptionChange() {
        log({ actionType: 'expired' });
    }

    /**
     * Log event into DWH
     *
     * @param params
     */
    function log(params) {
        fetch('/web-api/webpush/log', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        });
    }
})();