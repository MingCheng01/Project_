import requests
import execjs

with open('mcode.js', 'r', encoding='utf-8') as file:
    result = file.read()
js=execjs.compile(result)



headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "http://webapi.cninfo.com.cn",
    "Pragma": "no-cache",
    "Referer": "http://webapi.cninfo.com.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "X-Requested-With": "XMLHttpRequest",
    "mcode": js.call('main_')
}
cookies = {
    "JSESSIONID": "3C4A1F47406A57CD2DD1F478EB385376"
}
url = "http://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007"
data = {
    "tdate": "2023-04-21",
    "market": "SZE"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)

print(response.text)
print(response)