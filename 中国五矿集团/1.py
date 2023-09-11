import requests
import execjs

with open('loder.js','r') as f:
    data=f.read()

js=execjs.compile(data)


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
cookies = {
    "__jsluid_s": "0b9a1cd1caab8733fefbabd048215157",
    "SUNWAY-ESCM-COOKIE": "f0213b05-447b-4a1c-8c9d-cf090b4ab4d3"
}
url = "https://ec.minmetals.com.cn/open/homepage/public"
response = requests.post(url, headers=headers, cookies=cookies)

s=js.call('parse',response.text)

cookies = {
    "__jsluid_s": "0b9a1cd1caab8733fefbabd048215157",
    "SUNWAY-ESCM-COOKIE": "f0213b05-447b-4a1c-8c9d-cf090b4ab4d3"
}

url = "https://ec.minmetals.com.cn/open/home/purchase-info/"
data = {'param':s}
print(data)
response = requests.post(url, headers=headers, params=data,cookies=cookies)

print(response.text)
# print(response)
