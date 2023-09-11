const crypto = require('crypto-js');
var r = {
    "c": "BE45D593014E4A4EB4449737660876CE",
    "b": "A8909931867B0425",
    "d": "3637CB36B2E54A72A7002978D0506CDF",
}

function jiemi(t) {
    var e = crypto.enc.Utf8.parse(r["c"])
        , n = crypto.enc.Utf8.parse(r["b"])
        , a = crypto.AES.decrypt(t, e, {
        iv: n,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    });
    return a.toString(crypto.enc.Utf8)
}


e = Object.assign({}, undefined)

function d(t) {
    for (var e in t)
        "" !== t[e] && void 0 !== t[e] || delete t[e];
    var n = r["d"] + l(t);
    return crypto.MD5(n).toString().toLocaleLowerCase()
}

function l(t) {
    for (var e = Object.keys(t).sort(u), n = "", a = 0; a < e.length; a++)
        if (void 0 !== t[e[a]])
            if (t[e[a]] && t[e[a]] instanceof Object || t[e[a]] instanceof Array) {
                var i = JSON.stringify(t[e[a]]);
                n += e[a] + i
            } else
                n += e[a] + t[e[a]];
    return n
}

function u(t, e) {
    return t.toString().toUpperCase() > e.toString().toUpperCase() ? 1 : t.toString().toUpperCase() == e.toString().toUpperCase() ? 0 : -1
}


function sign(page = 1, GGTYPE = "1", KIND = "GCJS", timeType = '6') {
    t = {
        "pageNo": 1,
        "pageSize": 20,
        "total": 3753,
        "AREACODE": "",
        "M_PROJECT_TYPE": "",
        "KIND": "GCJS",
        "GGTYPE": "1",
        "PROTYPE": "",
        "timeType": "6",
        "BeginTime": "2022-10-24 00:00:00",
        "EndTime": "2023-04-24 23:59:59",
        "createTime": [],
        "ts": new Date().getTime()
    }

    var a=new Array(d(t),t)
    return a
}