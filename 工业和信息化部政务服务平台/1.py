import execjs
import requests
import re
import json
session = requests.session()
with open('1.js','r') as f:
    js_=execjs.compile(f.read())

def get_cookies():
    headers = {
        "authority": "beian.miit.gov.cn",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://beian.miit.gov.cn/",
        "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69"
    }
    url = "https://beian.miit.gov.cn/"
    response = session.get(url, headers=headers)
    return response


res = get_cookies()
js_code = re.findall(r'cookie=(.*?);location.', res.text)[0]
session.cookies.set('__jsl_clearance_s',execjs.eval(js_code).split(';')[0].replace('__jsl_clearance_s=',''))
res=get_cookies()
go=re.findall(r';go\((.*?)\)</script>', res.text)[0]
jsl=js_.call('cookies',json.loads(go))
session.cookies.set('__jsl_clearance_s',jsl['__jsl_clearance_s'])
res=get_cookies()
print(res.text)

