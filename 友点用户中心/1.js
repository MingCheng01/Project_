function getNonceStr() {
    for (var e = 16, t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length, c = "", o = 0; o < e; o++)
        c += t.charAt(Math.floor(Math.random() * n));
    var a = c + (new Date).getTime();
    return a
}
function md5() {
    this._state = new Int32Array(4),
        this._buffer = new ArrayBuffer(68),
        this._buffer8 = new Uint8Array(this._buffer, 0, 68),
        this._buffer32 = new Uint32Array(this._buffer, 0, 17),
        this.start()
}
md5.hashStr = function (e, t) {
    return void 0 === t && (t = !1),
        this.onePassHasher.start().appendStr(e).end(t)
}
md5.hashAsciiStr = function (e, t) {
    return void 0 === t && (t = !1),
        this.onePassHasher.start().appendAsciiStr(e).end(t)
}
md5._hex = function (t) {
    var n, r, o, i, a = md5.hexChars, l = md5.hexOut;
    for (i = 0; i < 4; i += 1)
        for (r = 8 * i,
                 n = t[i],
                 o = 0; o < 8; o += 2)
            l[r + 1 + o] = a.charAt(15 & n),
                n >>>= 4,
                l[r + 0 + o] = a.charAt(15 & n),
                n >>>= 4;
    return l.join("")
}
md5._md5cycle = function (e, t) {
    var n = e[0]
        , r = e[1]
        , o = e[2]
        , i = e[3];
    n += (r & o | ~r & i) + t[0] - 680876936 | 0,
        n = (n << 7 | n >>> 25) + r | 0,
        i += (n & r | ~n & o) + t[1] - 389564586 | 0,
        i = (i << 12 | i >>> 20) + n | 0,
        o += (i & n | ~i & r) + t[2] + 606105819 | 0,
        o = (o << 17 | o >>> 15) + i | 0,
        r += (o & i | ~o & n) + t[3] - 1044525330 | 0,
        r = (r << 22 | r >>> 10) + o | 0,
        n += (r & o | ~r & i) + t[4] - 176418897 | 0,
        n = (n << 7 | n >>> 25) + r | 0,
        i += (n & r | ~n & o) + t[5] + 1200080426 | 0,
        i = (i << 12 | i >>> 20) + n | 0,
        o += (i & n | ~i & r) + t[6] - 1473231341 | 0,
        o = (o << 17 | o >>> 15) + i | 0,
        r += (o & i | ~o & n) + t[7] - 45705983 | 0,
        r = (r << 22 | r >>> 10) + o | 0,
        n += (r & o | ~r & i) + t[8] + 1770035416 | 0,
        n = (n << 7 | n >>> 25) + r | 0,
        i += (n & r | ~n & o) + t[9] - 1958414417 | 0,
        i = (i << 12 | i >>> 20) + n | 0,
        o += (i & n | ~i & r) + t[10] - 42063 | 0,
        o = (o << 17 | o >>> 15) + i | 0,
        r += (o & i | ~o & n) + t[11] - 1990404162 | 0,
        r = (r << 22 | r >>> 10) + o | 0,
        n += (r & o | ~r & i) + t[12] + 1804603682 | 0,
        n = (n << 7 | n >>> 25) + r | 0,
        i += (n & r | ~n & o) + t[13] - 40341101 | 0,
        i = (i << 12 | i >>> 20) + n | 0,
        o += (i & n | ~i & r) + t[14] - 1502002290 | 0,
        o = (o << 17 | o >>> 15) + i | 0,
        r += (o & i | ~o & n) + t[15] + 1236535329 | 0,
        r = (r << 22 | r >>> 10) + o | 0,
        n += (r & i | o & ~i) + t[1] - 165796510 | 0,
        n = (n << 5 | n >>> 27) + r | 0,
        i += (n & o | r & ~o) + t[6] - 1069501632 | 0,
        i = (i << 9 | i >>> 23) + n | 0,
        o += (i & r | n & ~r) + t[11] + 643717713 | 0,
        o = (o << 14 | o >>> 18) + i | 0,
        r += (o & n | i & ~n) + t[0] - 373897302 | 0,
        r = (r << 20 | r >>> 12) + o | 0,
        n += (r & i | o & ~i) + t[5] - 701558691 | 0,
        n = (n << 5 | n >>> 27) + r | 0,
        i += (n & o | r & ~o) + t[10] + 38016083 | 0,
        i = (i << 9 | i >>> 23) + n | 0,
        o += (i & r | n & ~r) + t[15] - 660478335 | 0,
        o = (o << 14 | o >>> 18) + i | 0,
        r += (o & n | i & ~n) + t[4] - 405537848 | 0,
        r = (r << 20 | r >>> 12) + o | 0,
        n += (r & i | o & ~i) + t[9] + 568446438 | 0,
        n = (n << 5 | n >>> 27) + r | 0,
        i += (n & o | r & ~o) + t[14] - 1019803690 | 0,
        i = (i << 9 | i >>> 23) + n | 0,
        o += (i & r | n & ~r) + t[3] - 187363961 | 0,
        o = (o << 14 | o >>> 18) + i | 0,
        r += (o & n | i & ~n) + t[8] + 1163531501 | 0,
        r = (r << 20 | r >>> 12) + o | 0,
        n += (r & i | o & ~i) + t[13] - 1444681467 | 0,
        n = (n << 5 | n >>> 27) + r | 0,
        i += (n & o | r & ~o) + t[2] - 51403784 | 0,
        i = (i << 9 | i >>> 23) + n | 0,
        o += (i & r | n & ~r) + t[7] + 1735328473 | 0,
        o = (o << 14 | o >>> 18) + i | 0,
        r += (o & n | i & ~n) + t[12] - 1926607734 | 0,
        r = (r << 20 | r >>> 12) + o | 0,
        n += (r ^ o ^ i) + t[5] - 378558 | 0,
        n = (n << 4 | n >>> 28) + r | 0,
        i += (n ^ r ^ o) + t[8] - 2022574463 | 0,
        i = (i << 11 | i >>> 21) + n | 0,
        o += (i ^ n ^ r) + t[11] + 1839030562 | 0,
        o = (o << 16 | o >>> 16) + i | 0,
        r += (o ^ i ^ n) + t[14] - 35309556 | 0,
        r = (r << 23 | r >>> 9) + o | 0,
        n += (r ^ o ^ i) + t[1] - 1530992060 | 0,
        n = (n << 4 | n >>> 28) + r | 0,
        i += (n ^ r ^ o) + t[4] + 1272893353 | 0,
        i = (i << 11 | i >>> 21) + n | 0,
        o += (i ^ n ^ r) + t[7] - 155497632 | 0,
        o = (o << 16 | o >>> 16) + i | 0,
        r += (o ^ i ^ n) + t[10] - 1094730640 | 0,
        r = (r << 23 | r >>> 9) + o | 0,
        n += (r ^ o ^ i) + t[13] + 681279174 | 0,
        n = (n << 4 | n >>> 28) + r | 0,
        i += (n ^ r ^ o) + t[0] - 358537222 | 0,
        i = (i << 11 | i >>> 21) + n | 0,
        o += (i ^ n ^ r) + t[3] - 722521979 | 0,
        o = (o << 16 | o >>> 16) + i | 0,
        r += (o ^ i ^ n) + t[6] + 76029189 | 0,
        r = (r << 23 | r >>> 9) + o | 0,
        n += (r ^ o ^ i) + t[9] - 640364487 | 0,
        n = (n << 4 | n >>> 28) + r | 0,
        i += (n ^ r ^ o) + t[12] - 421815835 | 0,
        i = (i << 11 | i >>> 21) + n | 0,
        o += (i ^ n ^ r) + t[15] + 530742520 | 0,
        o = (o << 16 | o >>> 16) + i | 0,
        r += (o ^ i ^ n) + t[2] - 995338651 | 0,
        r = (r << 23 | r >>> 9) + o | 0,
        n += (o ^ (r | ~i)) + t[0] - 198630844 | 0,
        n = (n << 6 | n >>> 26) + r | 0,
        i += (r ^ (n | ~o)) + t[7] + 1126891415 | 0,
        i = (i << 10 | i >>> 22) + n | 0,
        o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0,
    o = (o << 15 | o >>> 17) + i | 0,
    r += (i ^ (o | ~n)) + t[5] - 57434055 | 0,
    r = (r << 21 | r >>> 11) + o | 0,
    n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0,
    n = (n << 6 | n >>> 26) + r | 0,
    i += (r ^ (n | ~o)) + t[3] - 1894986606 | 0,
    i = (i << 10 | i >>> 22) + n | 0,
    o += (n ^ (i | ~r)) + t[10] - 1051523 | 0,
    o = (o << 15 | o >>> 17) + i | 0,
    r += (i ^ (o | ~n)) + t[1] - 2054922799 | 0,
    r = (r << 21 | r >>> 11) + o | 0,
    n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0,
    n = (n << 6 | n >>> 26) + r | 0,
    i += (r ^ (n | ~o)) + t[15] - 30611744 | 0,
    i = (i << 10 | i >>> 22) + n | 0,
    o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0,
    o = (o << 15 | o >>> 17) + i | 0,
    r += (i ^ (o | ~n)) + t[13] + 1309151649 | 0,
    r = (r << 21 | r >>> 11) + o | 0,
    n += (o ^ (r | ~i)) + t[4] - 145523070 | 0,
    n = (n << 6 | n >>> 26) + r | 0,
    i += (r ^ (n | ~o)) + t[11] - 1120210379 | 0,
    i = (i << 10 | i >>> 22) + n | 0,
    o += (n ^ (i | ~r)) + t[2] + 718787259 | 0,
    o = (o << 15 | o >>> 17) + i | 0,
    r += (i ^ (o | ~n)) + t[9] - 343485551 | 0,
    r = (r << 21 | r >>> 11) + o | 0,
    e[0] = n + e[0] | 0,
    e[1] = r + e[1] | 0,
    e[2] = o + e[2] | 0,
    e[3] = i + e[3] | 0
}
md5.prototype.start = function () {
    return this._dataLength = 0,
        this._bufferLength = 0,
        this._state.set(md5.stateIdentity),
        this
}
md5.prototype.appendStr = function (t) {
    var n, r, o = this._buffer8, i = this._buffer32, a = this._bufferLength;
    for (r = 0; r < t.length; r += 1) {
        if (n = t.charCodeAt(r),
        n < 128)
            o[a++] = n;
        else if (n < 2048)
            o[a++] = 192 + (n >>> 6),
                o[a++] = 63 & n | 128;
        else if (n < 55296 || n > 56319)
            o[a++] = 224 + (n >>> 12),
                o[a++] = n >>> 6 & 63 | 128,
                o[a++] = 63 & n | 128;
        else {
            if (n = 1024 * (n - 55296) + (t.charCodeAt(++r) - 56320) + 65536,
            n > 1114111)
                throw new Error("Unicode standard supports code points up to U+10FFFF");
            o[a++] = 240 + (n >>> 18),
                o[a++] = n >>> 12 & 63 | 128,
                o[a++] = n >>> 6 & 63 | 128,
                o[a++] = 63 & n | 128
        }
        a >= 64 && (this._dataLength += 64,
            md5._md5cycle(this._state, i),
            a -= 64,
            i[0] = i[16])
    }
    return this._bufferLength = a,
        this
}
md5.prototype.appendAsciiStr = function (t) {
    for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, a = 0; ;) {
        n = Math.min(t.length - a, 64 - i);
        while (n--)
            r[i++] = t.charCodeAt(a++);
        if (i < 64)
            break;
        this._dataLength += 64,
            md5._md5cycle(this._state, o),
            i = 0
    }
    return this._bufferLength = i,
        this
}
md5.prototype.appendByteArray = function (t) {
    for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, a = 0; ;) {
        n = Math.min(t.length - a, 64 - i);
        while (n--)
            r[i++] = t[a++];
        if (i < 64)
            break;
        this._dataLength += 64,
            md5._md5cycle(this._state, o),
            i = 0
    }
    return this._bufferLength = i,
        this
}
md5.prototype.getState = function () {
    var e = this
        , t = e._state;
    return {
        buffer: String.fromCharCode.apply(null, e._buffer8),
        buflen: e._bufferLength,
        length: e._dataLength,
        state: [t[0], t[1], t[2], t[3]]
    }
}
md5.prototype.setState = function (e) {
    var t, n = e.buffer, r = e.state, o = this._state;
    for (this._dataLength = e.length,
             this._bufferLength = e.buflen,
             o[0] = r[0],
             o[1] = r[1],
             o[2] = r[2],
             o[3] = r[3],
             t = 0; t < n.length; t += 1)
        this._buffer8[t] = n.charCodeAt(t)
}
md5.prototype.end = function (t) {
    void 0 === t && (t = !1);
    var n, r = this._bufferLength, o = this._buffer8, i = this._buffer32, a = 1 + (r >> 2);
    if (this._dataLength += r,
        o[r] = 128,
        o[r + 1] = o[r + 2] = o[r + 3] = 0,
        i.set(md5.buffer32Identity.subarray(a), a),
    r > 55 && (md5._md5cycle(this._state, i),
        i.set(md5.buffer32Identity)),
        n = 8 * this._dataLength,
    n <= 4294967295)
        i[14] = n;
    else {
        var l = n.toString(16).match(/(.*?)(.{0,8})$/);
        if (null === l)
            return;
        var s = parseInt(l[2], 16)
            , c = parseInt(l[1], 16) || 0;
        i[14] = s,
            i[15] = c
    }
    return md5._md5cycle(this._state, i),
        t ? this._state : md5._hex(this._state)
}
md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
md5.hexChars = "0123456789abcdef",
md5.hexOut = [],
md5.onePassHasher = new md5

function getSign(e) {
    var t = {};
    for (var n in e)
        "" !== e[n] && null !== e[n] && (t[n] = e[n]);
    for (var c = Object.keys(t).sort(), o = "", a = 0; a < c.length; a++)
        a > 0 && (o += "&"),
            o += c[a] + "=" + t[c[a]];
    var r = 'kqXFEhElTxW7RmgV33gSMT6F5KiIi7r9';
    r = function (e) {
        var t = 7;
        return e.substr(0, t) + "8" + e.substr(t + 1)
    }(r);
    var l = o + r
        , i = md5.hashStr(l).toString();
    return i
}
function main_(UserMobile, UserPassword, ip) {
    e = {
        "UserMobile": "123",
        "UserPassword": "123",
        "SceneStr": "1-0-y8rDTTfNZBPcIMkFmG4S-112.53.74.84",//+ip
        "LoginType": "1",
        "SmsCode": "",
        "l": "cn",
        "ClientType": "1",
        "AppID": "84037726",
        "Timestamp": Date.now()/1000,
        "Token": "",
        "NonceStr": getNonceStr()
    }
    e["Sign"] = getSign(e)
    return e
}
// 1687945210165
//
// 1687944700
// console.log(Date.now())