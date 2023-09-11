const jsdom = require('jsdom')
const {JSDOM} = jsdom
const dom = new JSDOM('<!doctype html><p> hello </p>')
window = dom.window
document = window.document
navigator = window.navigator
e = window

function v(e, t, n, r, a) {
    var o = "fangcheck_" + (parseInt(1e4 * Math.random()) + (new Date).valueOf());
    window[o] = function (e) {
        a(e),
        void 0 === f && (f = window),
            f[o] = void 0;
        try {
            delete f[o]
        } catch (e) {
        }
    }
        ,
        r.callback = o,
        console.log(r)
}
var E = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-:@~*,.()[]/|";
m = {
    "apiserver": "recaptcha.fang.com/",
    "protocol": "https://",
    "typePath": "/?c=index&a=getType",
    "static_servers": "static.soufunimg.com",
    "static_path": "https://static.soufunimg.com/common_m/m_recaptcha/",
    "gt": "35c3d8dffffd310ca05d87cea3b52786",
    "challenge": "8a6634bf39b7a701d922447647bcbc6b",
    "mode": "embed",
    "imgWidth": 290,
    "imgHeight": 200,
    "code": "100",
    "message": "successed",
    "path": {
        "codeDrag": "/?c=index&a=codeDrag",
        "createImg": "/?c=index&a=createImg",
        "codeImgVerfied": "/?c=index&a=codeImgVerfied",
        "reset": "/?c=index&a=reset",
        "jigsaw": "/?c=index&a=jigsaw"
    },
    "theme": "default",
    "clickLimit": 1,
    "url": {
        "clickBg": "",
        "imgfile": "img/",
        "cssfile": "css/jigsawpc.1.0.0.css",
        "img": "https://static.soufunimg.com/common_m/m_recaptcha/img/",
        "css": "https://static.soufunimg.com/common_m/m_recaptcha/css/jigsawpc.1.0.0.css"
    },
    "picurl": "f3c06ffe.jpg",
    "picurl_s": "fabca5fd.png"
}
l = [
    {
        "x": 0,
        "y": 469,
        "t": 1685349386808,
        "e": "mousedown"
    },
    {
        "x": 0,
        "y": 470,
        "t": 1685349386808,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 470,
        "t": 1685349386811,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 471,
        "t": 1685349386815,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 471,
        "t": 1685349386818,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 471,
        "t": 1685349386870,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 471,
        "t": 1685349386873,
        "e": "mousemove"
    },
    {
        "x": 0,
        "y": 471,
        "t": 1685349386875,
        "e": "mousemove"
    },
    {
        "x": 1,
        "y": 471,
        "t": 1685349386878,
        "e": "mousemove"
    },
    {
        "x": 1,
        "y": 471,
        "t": 1685349386880,
        "e": "mousemove"
    },
    {
        "x": 2,
        "y": 471,
        "t": 1685349386882,
        "e": "mousemove"
    },
    {
        "x": 2,
        "y": 471,
        "t": 1685349386885,
        "e": "mousemove"
    },
    {
        "x": 3,
        "y": 471,
        "t": 1685349386886,
        "e": "mousemove"
    },
    {
        "x": 3,
        "y": 471,
        "t": 1685349386888,
        "e": "mousemove"
    },
    {
        "x": 4,
        "y": 471,
        "t": 1685349386890,
        "e": "mousemove"
    },
    {
        "x": 5,
        "y": 471,
        "t": 1685349386891,
        "e": "mousemove"
    },
    {
        "x": 5,
        "y": 471,
        "t": 1685349386893,
        "e": "mousemove"
    },
    {
        "x": 6,
        "y": 471,
        "t": 1685349386893,
        "e": "mousemove"
    },
    {
        "x": 6,
        "y": 471,
        "t": 1685349386896,
        "e": "mousemove"
    },
    {
        "x": 7,
        "y": 471,
        "t": 1685349386898,
        "e": "mousemove"
    },
    {
        "x": 7,
        "y": 471,
        "t": 1685349386899,
        "e": "mousemove"
    },
    {
        "x": 8,
        "y": 471,
        "t": 1685349386901,
        "e": "mouseup"
    }
]
var x = {
    compress: function (e) {
        return x.baseCompress(e, 16, function (e) {
            t = String.fromCharCode
            return x.toChart16(t(e))
        })
    },
    baseCompress: function (e, t, n) {
        if (null === e)
            return "";
        for (var r, a, o, i, s = {}, c = {}, l = "", d = 2, u = 3, g = 2, h = [], f = 0, v = 0, m = 0; m < e.length; m += 1)
            if (o = e.charAt(m),
            Object.prototype.hasOwnProperty.call(s, o) || (s[o] = u++,
                c[o] = !0),
                i = l + o,
                Object.prototype.hasOwnProperty.call(s, i))
                l = i;
            else {
                if (Object.prototype.hasOwnProperty.call(c, l)) {
                    if (l.charCodeAt(0) < 256) {
                        for (r = 0; r < g; r++)
                            f <<= 1,
                                v === t - 1 ? (v = 0,
                                    h.push(n(f)),
                                    f = 0) : v++;
                        for (a = l.charCodeAt(0),
                                 r = 0; r < 8; r++)
                            f = f << 1 | 1 & a,
                                v === t - 1 ? (v = 0,
                                    h.push(n(f)),
                                    f = 0) : v++,
                                a >>= 1
                    } else {
                        for (a = 1,
                                 r = 0; r < g; r++)
                            f = f << 1 | a,
                                v === t - 1 ? (v = 0,
                                    h.push(n(f)),
                                    f = 0) : v++,
                                a = 0;
                        for (a = l.charCodeAt(0),
                                 r = 0; r < 16; r++)
                            f = f << 1 | 1 & a,
                                v === t - 1 ? (v = 0,
                                    h.push(n(f)),
                                    f = 0) : v++,
                                a >>= 1
                    }
                    0 === --d && (d = Math.pow(2, g),
                        g++),
                        delete c[l]
                } else
                    for (a = s[l],
                             r = 0; r < g; r++)
                        f = f << 1 | 1 & a,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a >>= 1;
                0 === --d && (d = Math.pow(2, g),
                    g++),
                    s[i] = u++,
                    l = String(o)
            }
        if ("" !== l) {
            if (Object.prototype.hasOwnProperty.call(c, l)) {
                if (l.charCodeAt(0) < 256) {
                    for (r = 0; r < g; r++)
                        f <<= 1,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++;
                    for (a = l.charCodeAt(0),
                             r = 0; r < 8; r++)
                        f = f << 1 | 1 & a,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a >>= 1
                } else {
                    for (a = 1,
                             r = 0; r < g; r++)
                        f = f << 1 | a,
                            v == t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a = 0;
                    for (a = l.charCodeAt(0),
                             r = 0; r < 16; r++)
                        f = f << 1 | 1 & a,
                            v == t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a >>= 1
                }
                0 === --d && (d = Math.pow(2, g),
                    g++),
                    delete c[l]
            } else
                for (a = s[l],
                         r = 0; r < g; r++)
                    f = f << 1 | 1 & a,
                        v == t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++,
                        a >>= 1;
            0 == --d && (d = Math.pow(2, g),
                g++)
        }
        for (a = 2,
                 r = 0; r < g; r++)
            f = f << 1 | 1 & a,
                v == t - 1 ? (v = 0,
                    h.push(n(f)),
                    f = 0) : v++,
                a >>= 1;
        for (; ;) {
            if (f <<= 1,
            v === t - 1) {
                h.push(n(f));
                break
            }
            v++
        }
        return h.join("")
    },
    toChart16: function (e) {
        for (var t = "", n = e.length, r = 0; r < n; r++) {
            var a = e.charCodeAt(r).toString(16)
                , o = a.length;
            if (o < 4) {
                for (var i = 4 - o, s = "", c = 0; c < i; c++)
                    s += "0";
                a = s + a
            } else
                4 < o && console.log("More than four", a);
            t += a
        }
        return t
    }
}

function L(e) {
    return void 0 === e
}

v(m, ['recaptcha.fang.com/'], '/?c=index&a=codeDrag', {
    start: l[0].t,
    end: l[l.length - 1].t,
    i: x.compress(function (e) {
        var u = window
            , g = u;
        void 0 === g.wd && (g.wd = 0);
        var n = function () {
            var e = window
                , t = e.screen
                , n = e.document
                , a = e.navigator
                , r = n.documentElement
                , o = {}
                , i = r.textContent || r.innerText;
            o.textLength = i.length;
            var s = r.innerHTML;
            return o.HTMLLength = s.length,
                o.documentMode = n.documentMode || n.compatMode,
                o.browserLanguage = a.language || a.userLanguage,
                o.browserLanguages = a.languages && a.languages.join(","),
                o.systemLanguage = e.systemLanguage,
                o.devicePixelRatio = e.devicePixelRatio,
                o.colorDepth = t.colorDepth,
                o.userAgent = a.userAgent,
                o.cookieEnabled = a.cookieEnabled ? 1 : 0,
                o.netEnabled = a.onLine ? 1 : 0,
                o.innerWidth = e.innerWidth,
                o.innerHeight = e.innerHeight,
                o.outerWidth = e.outerWidth,
                o.outerHeight = e.outerHeight,
                o.screenWidth = t.width,
                o.screenHeight = t.height,
                o.screenAvailWidth = t.availWidth,
                o.screenAvailHeight = t.availHeight,
                o.screenLeft = t.left || e.screenLeft,
                o.screenTop = t.top || e.screenTop,
                o.screenAvailLeft = t.availLeft,
                o.screenAvailTop = t.availTop,
                o.localStorageEnabled = 1,
                o.sessionStorageEnabled = 1,
                o.indexedDBEnabled = e.indexedDB ? 1 : 0,
                o.CPUClass = a.cpuClass,
                o.platform = a.platform,
                o.doNotTrack = a.doNotTrack ? 1 : 0,
                o.timezone = (new Date).getTimezoneOffset() / 60,
                o.plugins = function () {
                    if (!a.plugins)
                        return T;
                    for (var e = [], t = 0, n = a.plugins.length; t < n; t += 1) {
                        var r = a.plugins[t];
                        e.push(r.name.replace(/\s/g, "")),
                            e.push(r.filename.replace(/\s/g, ""))
                    }
                    return e.join(",")
                }(),
                o.maxTouchPoints = L(a.maxTouchPoints) ? L(a.msMaxTouchPoints) ? 0 : a.msMaxTouchPoints : a.maxTouchPoints,
                o.flashEnabled = -1,
                o.javaEnabled = function () {
                    try {
                        return L(a.javaEnabled) ? T : 1
                    } catch (e) {
                        return T
                    }
                }(),
                o.hardwareConcurrency = a.hardwareConcurrency,
                o['webdriver'] = "",
                o
        }();
        n.performanceTiming = function () {
            if (L(u.performance))
                return g.wd;
            for (var e = {
                "connectStart": 1685346894134,
                "navigationStart": 1685346894133,
                "secureConnectionStart": 0,
                "fetchStart": 1685346894134,
                "domContentLoadedEventStart": 1685346894971,
                "responseStart": 1685346894193,
                "domInteractive": 1685346894971,
                "domainLookupEnd": 1685346894134,
                "responseEnd": 1685346894214,
                "redirectStart": 0,
                "requestStart": 1685346894142,
                "unloadEventEnd": 1685346894218,
                "unloadEventStart": 1685346894218,
                "domLoading": 1685346894221,
                "domComplete": 1685346897047,
                "domainLookupStart": 1685346894134,
                "loadEventStart": 1685346897047,
                "domContentLoadedEventEnd": 1685346894992,
                "loadEventEnd": 1685346897047,
                "redirectEnd": 0,
                "connectEnd": 1685346894134
            }, t = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart"], n = ["responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint"], r = [], a = 1, o = t.length; a < o; a += 1) {
                var i = e[t[a]];
                if (0 === i)
                    r.push(g.wd);
                else
                    for (var s = a - 1; 0 <= s; --s) {
                        var c = e[t[s]];
                        if (0 !== c) {
                            r.push(i - c);
                            break
                        }
                    }
            }
            var l = e[t[t.length - 1]];
            for (a = 0,
                     o = n.length; a < o; a += 1) {
                var d = e[n[a]];
                0 === d || L(d) ? r.push(g.wd) : r.push(d - l)
            }
            return r.join(",")
        }(),
            n.timestamp = (new Date).getTime(),
            n.cwidth = e;
        var r = [];
        return ["textLength", "HTMLLength", "documentMode"].concat('webdriver').concat(["screenLeft", "screenTop", "screenAvailLeft", "screenAvailTop", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "browserLanguage", "browserLanguages", "systemLanguage", "devicePixelRatio", "colorDepth", "userAgent", "cookieEnabled", "netEnabled", "screenWidth", "screenHeight", "screenAvailWidth", "screenAvailHeight", "localStorageEnabled", "sessionStorageEnabled", "indexedDBEnabled", "CPUClass", "platform", "doNotTrack", "timezone", "canvas2DFP", "canvas3DFP", "plugins", "maxTouchPoints", "flashEnabled", "javaEnabled", "hardwareConcurrency", "jsFonts", "timestamp", "performanceTiming", "cwidth"]).map(function (e) {
            var t = n[e];
            r.push(void 0 === t ? -1 : t)
        }),
            encodeURIComponent(r.join("!!"))
    }(300)),

    t: function (e) {
        function g(e, t) {
            for (var n = e.toString(2), r = "", a = n.length + 1; a <= t; a += 1)
                r += "0";
            return r + n
        }

        function d(e, t) {
            for (var n = [], r = 0, a = e.length; r < a; r += 1)
                n.push(t(e[r]));
            return n
        }

        function u(e, t) {
            var n = function (e) {
                for (var t = (e = d(e, function (e) {
                    return e = Math.min(32767, e),
                        e = Math.max(-32767, e)
                })).length, n = 0, r = []; n < t;) {
                    for (var a = 1, o = e[n], i = Math.abs(o); !(t <= n + a) && e[n + a] === o && !(127 <= i || 127 <= a);)
                        a += 1;
                    1 < a ? r.push((o < 0 ? 49152 : 32768) | a << 7 | i) : r.push(o),
                        n += a
                }
                return r
            }(e)
                , a = []
                , o = [];
            d(n, function (e) {
                var t, n, r = Math.ceil((t = Math.abs(e) + 1,
                    n = 16,
                    0 === t ? 0 : Math.log(t) / Math.log(n)));
                0 === r && (r = 1),
                    a.push(g(r - 1, 2)),
                    o.push(g(Math.abs(e), 4 * r))
            });
            var r, i, s = a.join(""), c = o.join(""), l = t ? d((r = function (e) {
                return 0 !== e && e >> 15 != 1
            }
                ,
                i = [],
                d(n, function (e) {
                    r(e) && i.push(e)
                }),
                i), function (e) {
                return e < 0 ? "1" : "0"
            }).join("") : "";
            return g(32768 | n.length, 16) + s + c + l
        }

        var h = {
            mousemove: 0,
            mousedown: 1,
            mouseup: 2,
            scroll: 3,
            focus: 4,
            blur: 5,
            unload: 6,
            unknown: 7
        };
        return function (e) {
            for (var t = [], n = [], r = [], a = [], o = 0, i = e.length; o < i; o += 1) {
                var s = e[o]
                    , c = s.length;
                t.push(s[0]),
                    n.push(2 === c ? s[1] : s[2]),
                3 === c && (r.push(Math.round(s[1][0])),
                    a.push(Math.round(s[1][1])))
            }
            var l = function (e) {
                for (var t = [], n = e.length, r = 0; r < n;) {
                    for (var a = e[r], o = 0; !(16 <= o);) {
                        var i = r + o + 1;
                        if (n <= i)
                            break;
                        if (e[i] !== a)
                            break;
                        o += 1
                    }
                    r = r + 1 + o;
                    var s = h[a];
                    0 !== o ? (t.push(8 | s),
                        t.push(o - 1)) : t.push(s)
                }
                for (var c = g(32768 | n, 16), l = "", d = 0, u = t.length; d < u; d += 1)
                    l += g(t[d], 4);
                return c + l
            }(t) + u(n, !1) + u(r, !0) + u(a, !0)
                , d = l.length;
            return d % 6 != 0 && (l += g(0, 6 - d % 6)),
                function (e) {
                    for (var t = "", n = e.length / 6, r = 0; r < n; r += 1)
                        t += E.charAt(window.parseInt(e.slice(6 * r, 6 * (r + 1)), 2));
                    return t
                }(l)
        }(e)
    }(e),
    gt: m.gt,
    challenge: m.challenge

})
console.log(v);