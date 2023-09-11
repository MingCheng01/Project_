(function () {
  var _0x15159f = "5f3651b7";
  function _0x2b01e7(_0x12f758, _0xda9b8e) {
    var _0x3bf069 = atob(_0x12f758);
    for (var _0x19fa71, _0x300ace = [], _0x18815b = 0, _0xe5da02 = "", _0x1d31f3 = 0; 256 > _0x1d31f3; _0x1d31f3++) {
      _0x300ace[_0x1d31f3] = _0x1d31f3;
    }
    for (_0x1d31f3 = 0; 256 > _0x1d31f3; _0x1d31f3++) {
      (_0x18815b = (_0x18815b + _0x300ace[_0x1d31f3] + _0xda9b8e["charCodeAt"](_0x1d31f3 % _0xda9b8e["length"])) % 256, _0x19fa71 = _0x300ace[_0x1d31f3], _0x300ace[_0x1d31f3] = _0x300ace[_0x18815b], _0x300ace[_0x18815b] = _0x19fa71)
    }
    for (b = _0x18815b = _0x1d31f3 = 0; b < _0x3bf069["length"]; b++) {
      _0x1d31f3 = (_0x1d31f3 + 1) % 256, _0x18815b = (_0x18815b + _0x300ace[_0x1d31f3]) % 256, _0x19fa71 = _0x300ace[_0x1d31f3], _0x300ace[_0x1d31f3] = _0x300ace[_0x18815b], _0x300ace[_0x18815b] = _0x19fa71, _0xe5da02 += String["fromCharCode"](_0x3bf069["charCodeAt"](b) ^ _0x300ace[(_0x300ace[_0x1d31f3] + _0x300ace[_0x18815b]) % 256]);
    }
    return _0xe5da02;
  }
  Object.defineProperty(JSON, "decrypt", {
    "value": function (_0x395610) {
      var _0x36346e = _0x2b01e7(_0x395610, _0x15159f);
      return this["parse"](_0x36346e);
    }
  });
})();

var videoUrl = JSON.decrypt("vxdcHi7sN+EEZ2OHFeZMq9Kn7cRXl//d2BKzyvaU+o/LcJbUM18KLZLHAKLXoyRXK0fntPaXq+8KOk8o2WhSdxoBgeb5g4AVdOSyUvNAk9xBSU+UG7TnnnwAVrPTH58yzVkJ7qlg+w+F9Q9y62RZaJ3zSklgXzuXju25an33nF4YROLAydLh4qgJmDLnnrEdrMpNOBKXz9lQPzYE3A6nuG1os/5juaFae1389EndbuyAXxI4zE3SB5FR1qN9Obz1Tllo3MdidIT9SlGK811llZpD65/iI1oL5mKHkTT/XY0OxgBRocbZ95IV5KZobwGm3/ClbthfSkqIXXEWVDsQIcSWZ4am2jhWUD07K+2+MiN7KVSI0fnkBhaX");

console.log(videoUrl)
