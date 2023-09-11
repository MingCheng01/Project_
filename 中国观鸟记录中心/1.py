import requests
import execjs
with open('1.js','r') as f:
    data=f.read()
js=execjs.compile(data)
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "http://www.birdreport.cn",
    "Pragma": "no-cache",
    "Referer": "http://www.birdreport.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "requestId": "384ec6bf910ac94a9b9b31d9f2720768",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sign": "7de1fddaa762b4764fcb909c4069ba89",
    "timestamp": "1684492505000"
}
url = "https://api.birdreport.cn/front/activity/search"
data = {
    "UHS2/q0ZLPSOy5+FzJAInM73Zfko69r/vWoE26r7M6+e8dqEptFxKs1oBeXtQ38huFmcQqfUkrSHrKeG3vvwKHKACpSQt84GxkwmWDectPyCRFsHvkDTMw4ssiYrVMNn07sUIp02A4K6enTDNKnJiPJYjFquLejNybeCVVOl9vY": ""
}
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)