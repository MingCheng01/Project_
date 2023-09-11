const Crypto_js = require('crypto-js')

function y(e) {
    console.log(t)
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "XwKsGlMcdPMEhR1B"
        , i = Crypto_js.enc.Utf8.parse(t)
        , o = Crypto_js.enc.Utf8.parse(e)
        , r = Crypto_js.AES.encrypt(o, i, {
        mode: Crypto_js.mode.ECB,
        padding: Crypto_js.pad.Pkcs7
    });
    return r.toString()
}

function main_(x, secretKey) {
    return y(JSON.stringify({x: x, y: 5}), secretKey)
}

function main_login(x,backToken,secretKey) {
    return y(backToken + "---" + JSON.stringify({x: x, y: 5}), secretKey)
}