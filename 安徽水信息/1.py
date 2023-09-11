from Spider_Toolkit import spidertools

js=spidertools.open_js('1.js')


import requests


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "http://yc.wswj.net",
    "Pragma": "no-cache",
    "Referer": "http://yc.wswj.net/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58"
}
url = "http://61.191.22.196:5566/AHSXX/service/PublicBusinessHandler.ashx"
data = js.call('Build_the_request')
response = requests.post(url, headers=headers, data=data, verify=False)

print(response.text)
print(response)