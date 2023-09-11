import execjs
import requests
import json
with open('1.js','r') as f:
    js=execjs.compile(f.read())
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Authorization": "Bearer",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://kip.ipzan.com",
    "Pragma": "no-cache",
    "Referer": "https://kip.ipzan.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
url = "https://service.ipzan.com/users-login"
data = json.dumps({"account":js.call('main_',18253393787 ,'wang123456'),"source": "ipzan-home-one"})
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)
