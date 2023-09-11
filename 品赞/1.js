var table = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]

function UTF16ToUTF8(e) {
    for (var t = [], n = e.length, i = 0; i < n; i++) {
        var r, o, s = e.charCodeAt(i);
        0 < s && s <= 127 ? t.push(e.charAt(i)) : 128 <= s && s <= 2047 ? (r = 192 | s >> 6 & 31,
            o = 128 | 63 & s,
            t.push(String.fromCharCode(r), String.fromCharCode(o))) : 2048 <= s && s <= 65535 && (r = 224 | s >> 12 & 15,
            o = 128 | s >> 6 & 63,
            s = 128 | 63 & s,
            t.push(String.fromCharCode(r), String.fromCharCode(o), String.fromCharCode(s)))
    }
    return t.join("")
}

function UTF8ToUTF16(e) {
    for (var t = [], n = e.length, i = 0, i = 0; i < n; i++) {
        var r, o, s = e.charCodeAt(i);
        0 == (s >> 7 & 255) ? t.push(e.charAt(i)) : 6 == (s >> 5 & 255) ? (o = (31 & s) << 6 | 63 & (r = e.charCodeAt(++i)),
            t.push(Sting.fromCharCode(o))) : 14 == (s >> 4 & 255) && (o = (255 & (s << 4 | (r = e.charCodeAt(++i)) >> 2 & 15)) << 8 | ((3 & r) << 6 | 63 & e.charCodeAt(++i)),
            t.push(String.fromCharCode(o)))
    }
    return t.join("")
}

function encode(e) {
    if (!e)
        return "";
    for (var t = UTF16ToUTF8(e), n = 0, i = t.length, r = []; n < i;) {
        var o = 255 & t.charCodeAt(n++);
        if (r.push(table[o >> 2]),
        n == i) {
            r.push(table[(3 & o) << 4]),
                r.push("==");
            break
        }
        var s = t.charCodeAt(n++);
        if (n == i) {
            r.push(table[(3 & o) << 4 | s >> 4 & 15]),
                r.push(table[(15 & s) << 2]),
                r.push("=");
            break
        }
        var a = t.charCodeAt(n++);
        r.push(table[(3 & o) << 4 | s >> 4 & 15]),
            r.push(table[(15 & s) << 2 | (192 & a) >> 6]),
            r.push(table[63 & a])
    }
    return r.join("")
}
function main_(phone,pwd) {
    for (var e = encode("".concat(phone, "QWERIPZAN1290QWER").concat(pwd)), t = "", s = 0; s < 80; s++)
        t += Math.random().toString(16).slice(2);
    e = "".concat(t.slice(0, 100)).concat(e.slice(0, 8)).concat(t.slice(100, 200)).concat(e.slice(8, 20)).concat(t.slice(200, 300)).concat(e.slice(20)).concat(t.slice(300, 400));
    return e
}