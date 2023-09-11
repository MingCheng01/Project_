import requests
from Spider_Toolkit import spidertools
js=spidertools.open_js('1.js')
headers = {
    "authority": "u.youdiansoft.cn",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://u.youdiansoft.cn",
    "pragma": "no-cache",
    "referer": "https://u.youdiansoft.cn/?url=http://www.youdiancms.com",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58"
}
url = "https://u.youdiansoft.cn/api/index.php/Public/login"
params = {
    "XDEBUG_SESSION_START": "ECLIPSE_DBGP"
}
data = js.call('main_','123','123')
response = requests.post(url, headers=headers, params=params, data=data)

print(response.text)
print(response)