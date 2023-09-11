import requests
from Spider_Toolkit import spidertools
js=spidertools.open_js('1.js')

def login_(u,p):
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "http://www.pigai.org",
        "Pragma": "no-cache",
        "Referer": "http://www.pigai.org/",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67"
    }
    cookies = {
        "old": "2012",
        "isPrize": "0",
        "PHPSESSID": "7mi1gfa8dcto5puoqnlceemvr0",
        "Hm_lvt_3f46f9c09663bf0ac2abdeeb95c7e516": "1688536330,1688543304",
        "Hm_lpvt_3f46f9c09663bf0ac2abdeeb95c7e516": "1688543304"
    }
    url = "http://www.pigai.org/index.php"
    params = {
        "a": "login"
    }
    data = {
        "username": u,
        "password": "",
        "checkhash": "",
        "password_encrypt":js.call('encrypt',p)
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data, verify=False,allow_redirects=False)
    print(response.cookies.get_dict())
    print(response)


if __name__ == '__main__':
    login_(u='18253393787',p='wmc20020822')