const CryptoJS= require('crypto-js')

const key = CryptoJS.enc.Utf8.parse("20171109124536982017110912453698");

const iv = CryptoJS.enc.Utf8.parse('2017110912453698'); //ʮ��λʮ����������Ϊ��Կƫ����

function encrypt(word){
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  return encrypted.ciphertext.toString().toUpperCase();
}




console.log(encrypt('123123'));