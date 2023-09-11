const CryptoJS = require("crypto-js");
const sha256=require('crypto-js/hmac-sha256')
s = '{"keyword":"中国","pageNum":1,"type":-1,"pageSize":15}'

function main_(s) {
    _ = CryptoJS.enc.Base64.stringify(CryptoJS.MD5(s))
    t = 'POST'
    n = 'https://gdtv-api.gdtv.cn/api/search/v1/news'
    d = 1686022567504//(new Date).getTime()
    var m = "".concat(t, "\n").concat(n, "\n").concat(d, "\n").concat(_);
    return CryptoJS.enc.Base64.stringify(sha256(m,"dfkcY1c3sfuw0Cii9DWjOUO3iQy2hqlDxyvDXd1oVMxwYAJSgeB6phO8eW1dfuwX"))
}

console.log(main_(s));
