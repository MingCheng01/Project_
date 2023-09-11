import re
import requests
import execjs

with open('decrypt.js', 'r', encoding='utf-8') as file:
    result = file.read()
js=execjs.compile(result)

portal_sign=js.call('sign')

headers = {
    "Accept": "application/json, text/plain, */*",
    'Accept-Encoding': 'gzip, deflate, br',
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    'Host': 'ggzyfw.fujian.gov.cn',
    "Origin": "https://ggzyfw.fujian.gov.cn",
    "portal-sign": portal_sign[0],
    "Pragma": "no-cache",
    "Referer": "https://ggzyfw.fujian.gov.cn/business/list/",
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
    "sec-ch-ua-mobile": "?0",
    'sec-ch-ua-platform': '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
}

url = "https://ggzyfw.fujian.gov.cn/FwPortalApi/Trade/TradeInfo"

response = requests.post(url, headers=headers, data=str(portal_sign[1]))
print(response.text)
r=re.findall('"Data": "(.*?)",',response.text)[0].replace('\n','')
print(type(r))
#修改过D:\Apps\Work\Python3.10\Lib\subprocess.py的761行
data=js.call('jiemi',r)
print(data)


