import requests
import execjs

with open('1.js', 'r', encoding='utf-8') as file:
    result = file.read()
js=execjs.compile(result)

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://jzsc.mohurd.gov.cn/data/company",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "accessToken": "",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "timeout": "30000"
}
url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list"
params = {
    "pg": "1",
    "pgsz": "15",
    "total": "450"
}
response = requests.get(url, headers=headers, params=params)
print(js.call('h',response.text))
