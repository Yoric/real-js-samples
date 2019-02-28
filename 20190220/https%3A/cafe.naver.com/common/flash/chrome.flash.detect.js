/* Naver flash detector for chrome - v1.0.1 */
(function(runDetector) {
    "use strict";

    var CHROME_VERSION = 55;

    var version = navigator.userAgent.match(/chrome\/(\d+)/i);
    var script;
    var container;

    if (!version) {
        return;
    }

    script = document.querySelector('[data-flash-detector-for-chrome]')

    if (!script) {
        return;
    }

    container = document.querySelector('[data-flash-detector-container]');

    if (Number(version[1]) >= CHROME_VERSION) {
        runDetector(container, script);
    } else {
        if (container) {
            container.parentNode.removeChild(container);
        }

        script.parentNode.removeChild(script);
    }
    
})(function(container, script) {
    var DETECTOR_CSS = 'data-flash-detector-css';
    var CLOSE_CALLBACK = '__destroyFlashDetector';

    var message = {
        "detail-link": "https://help.naver.com/support/alias/cafe/commonness.naver",
        "detail-label": "자세히 보기",
        "comment": "원활한 사용을 위해 왼쪽 아이콘 클릭 후 팝업창이 뜨면 플래시 실행 '허용' 버튼을 클릭해주세요."
    };

    var initContainer = function() {
        createCSS();

        if (!container) {
            container = createContainer(getTag());
        }

        initDetector();

        container.style.position = 'fixed';
        container.style.bottom = '-1000px';
        container.style.display = 'block';

        timerID = setTimeout(function() {
            if (this.classList) {
                this.style.position = '';
                this.style.bottom = '';
                this.style.display = '';
                this.classList.add('activated-detector');
            }
        }.bind(container), getDelay());
    };

    var initDetector = function() {
        var area = findElement('data-flash-area');

        if (area) {
            area.innerHTML = getFlashObject();
        }
    };

    var createCSS = function() {
        var element = document.querySelector('[' + DETECTOR_CSS + ']');

        if (element) {
            return;
        }

        element = document.createElement('link');
        element.setAttribute('rel', 'stylesheet');
        element.setAttribute('href', getFilePath('css'));
        element.setAttribute(DETECTOR_CSS, '');

        document.body.appendChild(element);
    };

    var createContainer = function(tag) {
        var element = document.createElement('div');

        element.classList.add('Flash_det_wrap');
        element.setAttribute('data-flash-detector-container', '');
        element.style.display = 'none';
        element.innerHTML = tag;

        document.body.appendChild(element);

        return element;
    };

    var getTag = function() {
        var tag = [
            '<span class="Flash_det_play_area" data-flash-area>flash detector</span>',
            '<span class="Flash_det_text">{{comment}}</span>',
            '<span class="Flash_det_nosee_area">',
                '<a href="{{detail-link}}" target="_blank" class="Flash_det_see">{{detail-label}}</a>',
                '<button class="Flash_det_close" onclick="__destroyFlashDetector()" type="button" aria-label="close">',
                    '<img width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NWU5NTNmZC1kZjA5LTA2NGEtOWVkMS1hNmU5YjU4MzNjNTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk4MzZDNzFBNEMyMTFFNjhDM0VGRjY1M0E5ODE4RjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzk4MzZDNzBBNEMyMTFFNjhDM0VGRjY1M0E5ODE4RjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM2E1N2JkMC04ZTlkLTU0NGUtOWY0Ny1mZmVkNzMxOGRhODEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZWQwMmRjZS1hNGMxLTExZTYtOGM0NC04NWZmZjNkNWFjMmYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ll0f6AAAAlElEQVR42rTTWQ6AIAxF0XLj/pfCFjEmxqBSWkvlj+kE6KPUWpuIFMltjRNtmehhcnay8Ov2dIOr+O1JeUxG8VedGCz6ig+Lj7LYi6uJYrLJwqcxxTiRhpvZx3HdJ+76UJuzQD3u+qXIT42PkXJHkUCkXDjBnJo40ZxaOEHUxFlApziLqIqTgA5xktAXTiJ6w3cBBgAPdys4w+hB+AAAAABJRU5ErkJggg==">',
                '</button>',
            '</span>'
        ].join('\n');

        return tag.replace(/\{\{\s*([a-z-_]+)\s*\}\}/gi, function(tag, key) {
            return script.getAttribute('data-' + key) || message[key] || '';
        });
    };

    var getFlashObject = function() {
        return [
            '<embed',
                'src="' + getFilePath('swf') + '"',
                'wmode="direct"',
                'bgcolor="#ffffff"',
                'quality="low"',
                'width="100%"',
                'height="100%"',
                'align="middle"',
                'flashvars="destroyDetector=' + CLOSE_CALLBACK + '"',
                'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                'pluginspage="http://www.macromedia.com/go/getflashplayer"',
                'type="application/x-shockwave-flash"',
            '/>'
        ].join(' ');
    };
    
    var getFilePath = function(type) {
        return "/common/flash/naver.flash.detector.swf";
    };
      var getDelay = function() {
        return Number(script.getAttribute('data-delay')) || 1500;
    };

    var findElement = function(name) {
        return container.querySelector('[' + name + ']');
    };

    var removeElement = function(element) {
        var parent = element.parentNode;

        if (parent && typeof parent.removeChild === 'function') {
            parent.removeChild(element);
        }
    };

    var timerID;


    window[CLOSE_CALLBACK] = function() {
        var css = document.querySelector('[' + DETECTOR_CSS + ']');
        var closeBtn = findElement('onclick*="' + CLOSE_CALLBACK + '"');

        clearInterval(timerID);

        if (closeBtn) {
            closeBtn.onclick = null;
        }

        removeElement(css);
        removeElement(script);
        removeElement(container);

        container = null;
        script = null;

        delete window[CLOSE_CALLBACK];

        return false;
    };


    initContainer();
    
});