;
function __setCookie(_0x5d484a, _0x5d4c69, _0x5bc9e3) {
  var _0x961f75 = _0x5bc9e3;
  var _0x619f4f = new Date();
  _0x619f4f.setTime(_0x619f4f.getTime() + _0x961f75 * 24 * 60 * 60 * 1000);
  document.cookie = _0x5d484a + "=" + escape(_0x5d4c69) + ";expires=" + _0x619f4f.toGMTString() + ";path=/";
}
function setCookie2(_0xefc86c, _0x35f030) {
  return __setCookie(_0xefc86c, _0x35f030, 30);
}
function __getCookie(_0x5d6f46) {
  var _0x34fe3e,
    _0x229672 = new RegExp("(^| )" + _0x5d6f46 + "=([^;]*)(;|$)");
  if (_0x34fe3e = document.cookie.match(_0x229672)) {
    return _0x34fe3e[2];
  } else {
    return null;
  }
}
function getCookie2(_0x80d847) {
  return __getCookie(_0x80d847);
}
(function () {
  var _0x5bd7a6 = 0;
  if (navigator.platform.match(/(Windows|win32|win64)/i)) {
    _0x5bd7a6 += 1;
  }
  if (navigator.maxTouchPoints < 3) {
    _0x5bd7a6 += 1;
  }
  var _0x3af42a = parseInt(new Date().getTime() / 1000) >> 17 + _0x5bd7a6;
  var _0x2c0722 = (_0x3af42a * 21 + 154) * (_0x3af42a % 64 + 13) * (_0x3af42a % 32 + 34) * (_0x3af42a % 16 + 87) * (_0x3af42a % 8 + 65) + 751;
  (function (_0x196a65, _0x5bd6af, _0x38dc28) {
    var _0x6824e3 = new Date();
    _0x6824e3.setTime(_0x6824e3.getTime() + _0x38dc28 * 24 * 60 * 60 * 1000);
    document.cookie = _0x196a65 + "=" + escape(_0x5bd6af) + ";expires=" + _0x6824e3.toGMTString() + ";path=/";
  })("m2t", _0x2c0722, 7);
})();
function ipchk_getplay(_0x2b5157) {
  const _0x2be30a = _0x2b5157.match(/^ipchk:(.+)/);
  if (_0x2be30a) {
    $("#ipchk_getplay").html(_0x2b5157);
    $("#ipchk_getplay").removeAttr("hidden");
    return true;
  }
  return false;
}
function playUrl(_0x2d55c4, _0x5c7162, _0x6bcb0c) {
  var _0x10544c = function (_0x689647) {
    var _0x2792a6,
      _0x2949c8 = new RegExp("(^| |;)" + _0x689647 + "=([^;]*)");
    if (_0x2792a6 = document.cookie.match(_0x2949c8)) {
      return _0x2792a6[2];
    } else {
      return null;
    }
  };
  var _0x211ddc = function (_0x12aa9b, _0xbc7427, _0x2b9712) {
    var _0x29a41f = new Date();
    _0x29a41f.setTime(_0x29a41f.getTime() + _0x2b9712 * 24 * 60 * 60 * 1000);
    document.cookie = _0x12aa9b + "=" + escape(_0xbc7427) + ";expires=" + _0x29a41f.toGMTString() + ";path=/";
  };
  (function () {
    var _0x564495 = parseInt(_0x10544c("t1") / 1000);
    var _0x5a5bf4 = _0x564495 >> 5;
    var _0x100370 = "" + ((_0x5a5bf4 * (_0x5a5bf4 % 256 + 1) + 35236) * (_0x5a5bf4 % 128 + 1) * (_0x5a5bf4 % 16 + 1) + _0x5a5bf4);
    _0x211ddc("k2", _0x100370, 7);
    var _0x36c6e4 = "";
    for (;;) {
      var _0x36c6e4 = "" + parseInt(new Date().getTime());
      var _0x3f1b59 = _0x36c6e4.slice(_0x36c6e4.length - 3);
      var _0x532e75 = _0x100370.slice(_0x100370.length - 1);
      if (_0x3f1b59.indexOf(_0x532e75) >= 0) {
        break;
      }
    }
    _0x211ddc("t2", _0x36c6e4, 7);
  })();
  $.get(_0x5c7162, function (_0x5f0ee5, _0xf6f90) {
    if (_0x5f0ee5.indexOf("not verified") >= 0) {
      if (_0x6bcb0c < 3) {
        return playUrl(_0x2d55c4, _0x5c7162, _0x6bcb0c + 1);
      } else {
        return false;
      }
    }
    if (ipchk_getplay(_0x5f0ee5)) {
      return false;
    }
    var _0xc6b4e6 = JSON.parse(function (_0x1d70f8) {
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
    }(_0x5f0ee5));
    var _0x2e779f = _0xc6b4e6.purl;
    var _0x5cd6dc = _0xc6b4e6.vurl;
    var _0x41746d = _0xc6b4e6.inv;
    if (_0x5cd6dc && _0x41746d != "1") {
      document.getElementById(_0x2d55c4).src = _0x2e779f + _0x5cd6dc;
      return true;
    } else {
      if (_0x6bcb0c < 3) {
        setTimeout(function () {
          return playUrl(_0x2d55c4, _0x5c7162, _0x6bcb0c + 1);
        }, 4000);
      } else {
        document.getElementById(_0x2d55c4).src = _0x2e779f + _0x5cd6dc;
      }
    }
  });
  return false;
}
function setPlayFrm(_0x17d66e) {
  const _0x2e5e87 = window.location.href.replace(/^.+?\/(\d+)-(\d+)-(\d+).*$/, "/playurl?aid=$1&playindex=$2&epindex=$3&r=" + Math.random());
  playUrl(_0x17d66e, _0x2e5e87, 0);
}
;
_0xodX = "jsjiami.com.v6";