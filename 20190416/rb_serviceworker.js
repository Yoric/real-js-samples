!function(self) {
    var VERSION = '3';
    var dStat;

    async function asyncDelay(ms) {
        return await new Promise(function (resolve, reject) {
            setTimeout(resolve, ms);
        });
    }

    async function asyncTimeout(ms, func) {
        return await Promise.race([asyncDelay(ms), func()]);
    }

    self.addEventListener('notificationclick', function (event) {

        var target = null;

        if (event.action) {
            if (event.action == 'action1' && event.notification.data.action1)
                target = event.notification.data.action1;
            else if (event.notification.data.action2)
                target = event.notification.data.action2;
        }

        if (!target)
            target = event.notification.data.action;

        if (!event.notification.data.extra)
            event.notification.data.extra = {};

        if (!event.notification.data.token)
            event.notification.data.token = -1;


        event.waitUntil(
            (async function f() {
                    try {
                        const response = await clients.openWindow(target);
                        await setStat(
                            {
                                msg: event.notification.data.id,
                                token: event.notification.data.token,
                                event: 'click',
                                extra: event.notification.data.extra,
                                tryNumber: 0

                            }, 0);
                    }
                    catch (error) {
                        await setStat(
                            {
                                msg: event.notification.data.id,
                                token: event.notification.data.token,
                                event: 'error-click',
                                extra: event.notification.data.extra,
                                tryNumber: 0,
                                error: error.toString()
                            });
                    }
                }
            )());

        event.notification.close();
    });

    self.addEventListener('push', async function (event) {
        const options = event.data.json();
        if (typeof options.data.options.data.extra === "string")
            options.data.options.data.extra = JSON.parse(options.data.options.data.extra);

        dStat = options.data.dStat || [];

        let sleep = 0;
        event.waitUntil(
            (async function() {
                try {
                    let notifications = await self.registration.getNotifications();
                    sleep = notifications.length;
                } catch (e) {}

                await asyncDelay(sleep * 10000);

                try {

                    let value = await asyncTimeout(10000, async function () {
                        var urlGet = options.data.dSelect || false;
                        if (urlGet) {
                            try {
                                let response = await fetch("https://" + urlGet + "/push-get", {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        msg: options.data.options.data.id,
                                        token: options.data.options.data.token,
                                        extra: options.data.options.data.extra,
                                        version: VERSION
                                    })
                                });

                                let data = await response.json();
                                if (!data) {
                                    return options;
                                } else {
                                    return {
                                        data: {
                                            title: data.title,
                                            options: {
                                                body: data.body,
                                                icon: data.icon,
                                                image: data.image,
                                                requireInteraction: true,
                                                actions: data.actions || [
                                                    {
                                                        action: '',
                                                        title: 'Подробнее'
                                                    }
                                                ],
                                                data: {
                                                    action: data.action,
                                                    extra: data.extra,
                                                    id: options.data.options.data.id,
                                                    token: options.data.options.data.token,
                                                }
                                            }
                                        }
                                    };
                                }

                            } catch (error) {
                                return options;
                            }
                        }
                        return options;
                    });

                    value = value || options;

                    if (!value.data.options.image || value.data.options.image == undefined)
                        value.data.options.image = value.data.options.icon;

                    await self.registration.showNotification(value.data.title, value.data.options);

                    await setStat({
                        msg: options.data.options.data.id,
                        event: 'view',
                        token: options.data.options.data.token,
                        extra: options.data.options.data.extra,
                        version: VERSION,
                        tryNumber: 0
                    });
                } catch (error) {
                    await setStat({
                        msg: options.data.options.data.id,
                        event: 'error-view',
                        token: options.data.options.data.token,
                        extra: options.data.options.data.extra,
                        version: VERSION,
                        tryNumber: 0,
                        error: error.toString()
                    }, 0);
                }


            })()
        )
    });

    self.addEventListener('install', function (event) {
        self.skipWaiting();
    });

    async function setStat(body) {

        var statDomain = dStat[body.tryNumber % dStat.length] || 'stat.realpush.network';

        var url = "https://" + statDomain + "/push-stat";

        let value = await asyncTimeout(10000, async function () {
            try {
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)

                });

                if (response.status != 200)
                    return false;
                else
                    return true;
            }
            catch (e) {
                return false
            }
        });

        if (!value) {
            if (body.tryNumber < 10) {
                body.tryNumber++;
                await setStat(body);
            }
        }
    }
}(self)