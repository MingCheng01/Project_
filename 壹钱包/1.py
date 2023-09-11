import time

import execjs
import requests

with open('1.js','r') as f:js=execjs.compile(f.read())
headers = {
    "authority": "mapi.wanlitong.com",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "machineno": "f2db58d35371c8d67e9ba59cba6db533",
    "origin": "https://m.yqb.com",
    "pragma": "no-cache",
    "referer": "https://m.yqb.com/",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
}
url = "https://mapi.wanlitong.com/mobileapi/m2s/product/intellRecommendProdList.json"
data=js.call('main_',1,round(time.time()*1000))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)