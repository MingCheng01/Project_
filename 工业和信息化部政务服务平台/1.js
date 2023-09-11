var CryptoJS = require('crypto-js');


var hash = {
    'md5': function(a){return CryptoJS.MD5(a).toString()},
    'sha1': function(a){return CryptoJS.SHA1(a).toString()},
    'sha256': function(a){return CryptoJS.SHA256(a).toString()}
}


var _0x2228a0 = {
    "mLZyz" : function(_0x435347, _0x8098d) {
        return _0x435347 < _0x8098d;
    },
    "DRnYs" : function(_0x4573a2, _0x3855be) {
        return _0x4573a2 === _0x3855be;
    },
    "ZJMqu" : function(_0x3af043, _0x1dbbb7) {
        return _0x3af043 - _0x1dbbb7;
    },
};


function cookies(_0x60274b){
    var _0x34d7a8 = new Date();
    function _0x14e035(_0x56cbce, _0x5e5712) {
    var _0x2d0a43 = _0x60274b['chars']['length'];
    for (var _0x212ce4 = 0x0; _0x212ce4 < _0x2d0a43; _0x212ce4++) {
        for (var _0x8164 = 0x0; _0x2228a0["mLZyz"](_0x8164, _0x2d0a43); _0x8164++) {
            var _0x2a7ea9 = _0x5e5712[0] + _0x60274b["chars"]["substr"](_0x212ce4, 1) + _0x60274b["chars"]["substr"](_0x8164, 1) + _0x5e5712[1];
            if (hash[_0x60274b['ha']](_0x2a7ea9) === _0x56cbce) {
                return [_0x2a7ea9, _0x2228a0["ZJMqu"](new Date(), _0x34d7a8)];
            }
        }
    }
    }
    var _0x732635 = _0x14e035(_0x60274b['ct'], _0x60274b['bts']);
    return {'__jsl_clearance_s' : _0x732635[0]};
}