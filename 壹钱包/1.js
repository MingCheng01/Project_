const crypto = require("crypto-js")
var r = function () {
    var e = (new Date).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (n) {
            var t = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
                ("x" === n ? t : 7 & t | 8).toString(16)
        }
    ))
};
var a = function () {
    var e, n = "09FB84B1-D90E-4C14-84DB-DEE924A87B51", t = "reqTime", r = arguments, a = r[0] || {},
        i = r.length > 1 ? r[1] : n, s = [];
    for (var c in a)
        if (a.hasOwnProperty(c)) {
            if (c === t) {
                e = a[c];
                continue
            }
            s.push(c)
        }
    s.sort();
    var u = "";
    if (e) {
        for (var _ in s)
            if (s.hasOwnProperty(_)) {
                var l = s[_]
                    , d = 0 === a[l] ? "0" : a[l] ? a[l].toString() : "";
                u += d + e.toString()
            }
        u += i;
        var p = crypto.SHA1(u)
        return p.toString()
    }
};

function main_(page_,time_) {
    E = {
        "authType": "SHA1_1",
        "coordinate": "168.49679,28.82855",
        "custString": "1.36",
        "machineNo": "864375028810514",
        "msgVersion": "3.6.1",
        "platform": "ios",
        "reqAppId": "ios_app_wanlitong",
        "screenSize": "960*480",
        "sceneId": "1009",
        "picAttr": "280_280",
        "pageNo": page_,
        "goodsIdList": "[]",
        "reqtranceno": r(),
        "yqbToken": "",
        "reqTime": time_,
        "repositoryId": "1681",
        "mallModeId": "STANDARD",
        "sourceAppId": "M",
        "mediumId": "YQB",
        "reqChannelFlag": "YQB_M"
    }
    E['sign']=a(E)
    return E
}
