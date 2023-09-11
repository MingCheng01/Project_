const crypto=require('crypto')
const cryptojs=require('crypto-js')
function p(e) {
    return crypto.createHash("md5").update(e.toString()).digest("hex")
}
const time = (new Date).getTime()
function sign(e, t) {
    return p(`client=${"fanyideskweb"}&mysticTime=${time}&product=${"webfanyi"}&key=${"fsdsogkndfokasodnaso"}`)
}
function main_(){
    a=sign("fsdsogkndfokasodnaso")
    return {a, time}
}



//-----------------------------------------------------------------------------------------

t='Z21kD9ZK1ke6ugku2ccWu-MeDWh3z252xRTQv-wZ6jddVo3tJLe7gIXz4PyxGl73nSfLAADyElSjjvrYdCvEP4pfohVVEX1DxoI0yhm36ytQNvu-WLU94qULZQ72aml6JKK7ArS9fJXAcsG7ufBIE0gd6fbnhFcsGmdXspZe-8whVFbRB_8Fc9JlMHh8DDXnskDhGfEscN_rfi-A-AHB3F9Vets82vIYpkGNaJOft_JA-m5cGEjo-UNRDDpkTz_NIAvo5PbATpkh7PSna2tHcE6Hou9GBtPLB67vjScwplB96-zqZKXJJEzU5HGF0oPDY_weAkXArzXyGLBPXFCnn_IWJDkGD4vqBQQAh2n52f48GD_cb-PSCT_8b-ESsKUI9NJa11XsdaUZxAc8TzrYnXwdcQbtl_kZGKhS6_rCtuNEBouA_lvM2CbS7TTtV2U4zVmJKpp-c6nt3yZePK3Av01GWn1pH_3sZbaPEx8DUjSbdp4i4iK-Mj4p2HPoph67DR7B9MFETYku_28SgP9xsKRRvFH4aHBHESWX4FDbwaU='

var o = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
var n = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'
function decrypt_data(t) {
    const a = crypto.createHash('md5').update(o).digest()
    , r = crypto.createHash('md5').update(n).digest()
    , i = crypto.createDecipheriv("aes-128-cbc", a, r);
    let s = i.update(t, "base64", "utf-8");
    return s += i.final("utf-8"),
    s
}
console.log(decrypt_data(t));
