
function decode(_0x1d70f8) {
    if (_0x1d70f8.indexOf("{") < 0) {
        var _0x1020e5 = "";
        const _0x3218fa = _0x1d70f8.length;
        for (var _0x14508c = 0; _0x14508c < _0x3218fa; _0x14508c += 2) {
            var _0x2b5229 = parseInt(_0x1d70f8[_0x14508c] + _0x1d70f8[_0x14508c + 1], 16);
            _0x2b5229 = (_0x2b5229 + 1048576 - 1561 - (_0x3218fa / 2 - 1 - _0x14508c / 2)) % 256;
            _0x1020e5 = String.fromCharCode(_0x2b5229) + _0x1020e5;
        }
        _0x1d70f8 = _0x1020e5;
    }
    return _0x1d70f8;
}
url='20c4d1c2d9c0130a04bcc5bacf0bc801c10af6f4fdf7d3beb0bfbfebbabfb8e9e5e1bab2b0b1c3aea0aaacaaa8a8a7a4a5b8a395dcddd09a9dcfd7d1d3d4d491dcdcc7c68dcec6d2a18c7e9e897b968778c5c1c4c3b66f866db6bbbdbd68716680aeb3b575706d6cb0966a75aaa29d736264a9a0935d9f91a48b9598568c98949751435a418a8f918b3c94'
playurl = JSON.parse(decode(url));

console.log(playurl)

a='https://www.dm530w.org/play/20137-1-21.html'.replace(/^.+?\/(\d+)-(\d+)-(\d+).*$/, "/playurl?aid=$1&playindex=$2&epindex=$3&r=" + Math.random())
console.log(a)
