(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var e = "dmca-badge";
        var t = "refurl";
        if (!document.getElementsByClassName) {
            document.getElementsByClassName = function (e) {
                var t = document.getElementsByTagName("a"), n = [], r = 0, i;
                while (i = t[r++]) {
                    i.className == e ? n[n.length] = i : null
                }
                return n
            }
        }
        var n = document.getElementsByClassName(e);
        if (n[0].getAttribute("href").indexOf("refurl") < 0) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.href = i.href + (i.href.indexOf("?") === -1 ? "?" : "&") + t + "=" + document.location
            }
        }
    }, false)
}
)()