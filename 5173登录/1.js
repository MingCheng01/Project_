const crypto=require('crypto-js')
a='wpx5s1'
c='123'
function main_(a,c){
    return crypto.MD5(crypto.MD5(c).toString().substr(8, 16)+ a).toString()
}

console.log(main_(a, c));

// c = hex_md5(hex_md5(c).substr(8, 16) + a)