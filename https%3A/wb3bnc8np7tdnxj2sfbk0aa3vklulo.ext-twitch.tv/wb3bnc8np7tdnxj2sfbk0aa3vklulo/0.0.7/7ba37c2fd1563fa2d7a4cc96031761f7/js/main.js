/*global $,window,setTimeout*/


(function () {

    var channelId = null;
    var latestFollow = null;
    var startTime = null;
    var firstCall = true;

    var FOLLOW_TIMEOUT = 30000;

    var $latestFollowers = $('.latest-followers');
    var $train = $('.train');

    var setFollowsTimeout = function () {
        setTimeout(function () {
            getFollows(channelId)
        }, FOLLOW_TIMEOUT);
    };

    var clean = function () {
        var $printedFollowers = $('.latest-followers__follower');
        var printedFollowersCount = $printedFollowers.length;
        if (printedFollowersCount > 100) {
            while (printedFollowersCount > 100) {
                $($('.latest-followers__follower')[printedFollowersCount]).remove();
                printedFollowersCount -= 1;
            }
        }
    };

    var printFollower = function (follower, delay) {
        delay = typeof delay !== 'undefined' ? delay + 300 : '0.5s';
        var imgUrl = follower.profile_image_url !== '' ? follower.profile_image_url : 'img/placeholder.png';
        var $thisFollower = $('<div class="latest-followers__follower" style="transition-delay: ' + delay + 'ms, 0s"><img class="latest-followers__image" src="' + imgUrl + '">' + follower.display_name + '</div>');
        $latestFollowers.prepend($thisFollower);

        setTimeout(function () {
            $thisFollower.addClass('latest-followers__follower--visible');
        }, 1);
    };

    var getUsers = function (users) {
        var idString = '';
        var i = 0;
        var usersLength = users.length;

        for (i; i < usersLength; i += 1) {
            idString += '&id=' + users[i].from_id;
        }
        $.ajax({
            url: 'https://api.twitch.tv/helix/users?' + idString,
            type: 'GET',
            headers: {
                'Client-ID': 'wb3bnc8np7tdnxj2sfbk0aa3vklulo',
            },
            success: function (data) {
                var j = 0;
                var dataLength = data.data.length;
                for (j; j < dataLength; j += 1) {
                    printFollower(data.data[j], 0.1 * (dataLength - j));
                }

                clean();

                setFollowsTimeout();
            }
        });
    };

    var getFollows = function (channelId) {
        var cacheBuster = new Date().getTime();

        $.ajax({
            url: 'https://api.twitch.tv/helix/users/follows?first=100&to_id=' + channelId + '&cacheBuster=' + cacheBuster,
            type: 'GET',
            headers: {
                'Client-ID': 'wb3bnc8np7tdnxj2sfbk0aa3vklulo',
            },
            success: function (data) {
                var newFollows = [];
                var train = 0;

                if (latestFollow === null) {
                    latestFollow = {
                        from_id: data.data[0].from_id,
                        followed_at: data.data[0].followed_at
                    };
                }
                var latestDate = new Date(latestFollow.followed_at).getTime();

                var i = 0;
                var dataLength = data.data.length;

                var since = firstCall === true ? startTime : latestDate;

                for (i; i < dataLength; i += 1) {
                    var thisFollowDate = new Date(data.data[i].followed_at).getTime();

                    if (thisFollowDate > since && i < 100) {
                        newFollows.push(data.data[i]);

                        if (i === 0) {
                            latestFollow = {
                                from_id: data.data[0].from_id,
                                followed_at: data.data[0].followed_at
                            };
                        }
                    }

                    if (thisFollowDate > startTime) {
                        train += 1;
                    }
                }

                if (newFollows.length > 0) {
                    getUsers(newFollows);
                } else {
                    setFollowsTimeout();
                }
                firstCall = false;

                train = train === 100 ? '100+' : train;
                if (train !== $train.attr('data-train')) {
                    $train.addClass('train--counting')
                    setTimeout(function () {
                        $train.attr('data-train', train);
                        $train.removeClass('train--counting');
                    }, 600);
                }
            }
        });
    };

    window.Twitch.ext.onAuthorized(function (auth) {
        channelId = auth.channelId;

        $.ajax({
            url: 'https://api.twitch.tv/helix/streams?user_id=' + channelId,
            type: 'GET',
            headers: {
                'Client-ID': 'wb3bnc8np7tdnxj2sfbk0aa3vklulo',
            },
            success: function (data) {
                if (data.data.length > 0) {
                    startTime = new Date(data.data[0].started_at).getTime();
                } else {
                    startTime = new Date().getTime();
                }
                getFollows(channelId);
            }
        });
    });
})();
