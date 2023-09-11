import re
import execjs
import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://sqfb.zjsq.net.cn:8089/",
    "Sec-Fetch-Dest": "iframe",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
url = "https://sqfb.zjsq.net.cn:8089/nuxtsyq/new/monitorTable"
params = {
    "areaFlag": "1",
    "sss": "浙江省",
    "ssx": "",
    "ly": "",
    "zl": "RR,ZZ,ZQ,DD,TT,PP",
    "sklx": "",
    "sfcj": "0",
    "bxdj": "1,2,3,4,5",
    "flag": "",
    "level": "",
    "zlxz": "sy"
}
response = requests.get(url, headers=headers, params=params,verify=False)
a=re.findall(r'<script>(.*?)</script>',response.text)[-1]
a=a.replace('window.__NUXT__','main_')+'function get_data(){return (main_.data[0].ResultTable)}'
b=execjs.compile(a)
data=b.call('get_data')
with open('1.txt', 'w',encoding='utf-8') as f:
    f.write(str(data))