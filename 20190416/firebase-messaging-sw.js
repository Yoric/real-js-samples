importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '635839491665'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    payload.data.data = JSON.parse(JSON.stringify(payload.data));
    return self.registration.showNotification(payload.data.title, payload.data);
});

self.addEventListener('notificationclick', function (event) {

    event.notification.close();

    if (event.notification.data && event.notification.data.click_action) {

        const url = event.notification.data.click_action;

        event.waitUntil(clients.matchAll({
            type: "window",
            includeUncontrolled: true,
        }).then(function (windowClients) {
            for (let i = 0; i < windowClients.length; i++) {
                let client = windowClients[i];
                if (client.url === url && "focus" in client) return client.focus()
            }
            return clients.openWindow ? clients.openWindow(url) : 0;
        }));
    }
});