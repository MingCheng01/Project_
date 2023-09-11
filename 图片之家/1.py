import requests

headers = {
    "authority": "www.tupianzj.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.tupianzj.com/bizhi/",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^110^^, ^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69"
}

url = "https://www.tupianzj.com/bizhi/meishi/"
cookie_=requests.get(url)
cookie=cookie_.cookies.get_dict()
print(cookie)
cookies = {
    "t": cookie['token'],
    "r": str(int(cookie['secret'])-100)
}
response = requests.get(url, headers=headers, cookies=cookies)
response.encoding=response.apparent_encoding
print(response.text)
print(response)