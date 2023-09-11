import base64
import codecs
import math
import random
import requests
from Crypto.Cipher import AES


def get_song():
    url = f'https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=""'
    e = '010001'
    f = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    g = '0CoJUm6Qyw8W8jud'
    msg = '{"ids":"[430685732]","level":"standard","encodeType":"aac","csrf_token":""}'
    encText, encSecKey = get_params(msg, e, f, g)
    params = {
        "params": encText,
        "encSecKey": encSecKey
    }
    res = requests.post(url=url, params=params)
    return res.json()

def generate_str(lenght):
    str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    res = ''
    for i in range(lenght):
        index = random.random() * len(str)
        index = math.floor(index)
        res = res + str[index]
    return res


def AES_encrypt( text, key):
    iv = '0102030405060708'.encode('utf-8')
    text = text.encode('utf-8')
    pad = 16 - len(text) % 16
    text = text + (pad * chr(pad)).encode('utf-8')
    key = key.encode('utf-8')
    encryptor = AES.new(key, AES.MODE_CBC, iv)
    encrypt_text = encryptor.encrypt(text)
    encrypt_text = base64.b64encode(encrypt_text)
    return encrypt_text.decode('utf-8')

def RSA_encrypt( str, key, f):
    str = str[::-1]
    str = bytes(str, 'utf-8')
    sec_key = int(codecs.encode(str, encoding='hex'), 16) ** int(key, 16) % int(f, 16)
    return format(sec_key, 'x').zfill(256)

def get_params( d, e, f, g):
    i = generate_str(16)
    encText = AES_encrypt(d, g)
    params = AES_encrypt(encText, i)
    encSecKey = RSA_encrypt(i, e, f)
    return params, encSecKey


print(get_song())
