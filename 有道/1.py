import execjs
import requests
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='gb18030')
dc='apple'
with open('1.js','r') as f:
    data=f.read()

js=execjs.compile(data)

js_data=js.call('main_')
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://fanyi.youdao.com",
    "Pragma": "no-cache",
    "Referer": "https://fanyi.youdao.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "OUTFOX_SEARCH_USER_ID_NCOO": "1510639942.9777515",
    "OUTFOX_SEARCH_USER_ID": "-1967286012@112.53.74.84"
}
url = "https://dict.youdao.com/webtranslate"
data = {
    "i": dc,
    "from": "auto",
    "to": "",
    "dictResult": "true",
    "keyid": "webfanyi",
    "sign": js_data['a'],
    "client": "fanyideskweb",
    "product": "webfanyi",
    "appVersion": "1.0.0",
    "vendor": "web",
    "pointParam": "client,mysticTime,product",
    "mysticTime": js_data['time'],
    "keyfrom": "fanyi.web"
}

response = requests.post(url, headers=headers, cookies=cookies, data=data)
response.encoding='utf-8'
print(response.text)
js_parser=js.call('decrypt_data',response.text)

print(js_parser)