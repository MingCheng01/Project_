import time
import requests
import re
import ddddocr
ocr=ddddocr.DdddOcr()
from Spider_Toolkit import spidertools
import execjs
js=spidertools.open_js('1.js')
def get_sessionId():
    url='https://ptlogin.4399.com/ptlogin/loginFrame.do?postLoginHandler=default&redirectUrl=&displayMode=popup&css=&bizId=&appId=www_home&gameId=&username=2905641183&externalLogin=qq&password=&mainDivId=popup_login_div&autoLogin=true&includeFcmInfo=false&qrLogin=true&userNameLabel=4399%E7%94%A8%E6%88%B7%E5%90%8D&userNameTip=%E8%AF%B7%E8%BE%93%E5%85%A54399%E7%94%A8%E6%88%B7%E5%90%8D&welcomeTip=%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%88%B04399&level=0&regLevel=4&v='+str(round(time.time()*1000))
    res=requests.get(url=url).text
    sessionId=re.findall('name="sessionId" value="(.*?)"',res)[0]
    return sessionId

def login_(u,p):
    id=get_sessionId()
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://ptlogin.4399.com",
        "Pragma": "no-cache",
        "Referer": "https://ptlogin.4399.com/ptlogin/loginFrame.do?postLoginHandler=default&redirectUrl=&displayMode=popup&css=&bizId=&appId=www_home&gameId=&username=2905641183&externalLogin=qq&password=&mainDivId=popup_login_div&autoLogin=true&includeFcmInfo=false&qrLogin=true&userNameLabel=4399^%^E7^%^94^%^A8^%^E6^%^88^%^B7^%^E5^%^90^%^8D&userNameTip=^%^E8^%^AF^%^B7^%^E8^%^BE^%^93^%^E5^%^85^%^A54399^%^E7^%^94^%^A8^%^E6^%^88^%^B7^%^E5^%^90^%^8D&welcomeTip=^%^E6^%^AC^%^A2^%^E8^%^BF^%^8E^%^E5^%^9B^%^9E^%^E5^%^88^%^B04399&level=0&regLevel=4&v=1688457275854",
        "Sec-Fetch-Dest": "iframe",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^"
    }
    cookies = {
        "home4399": "yes",
        "_gprp_c": "^\\^^^",
        "Puser": "2905641183",
        "Pnick": "0",
        "Qnick": "",
        "ptusertype": "www_home.4399_login",
        "USESSIONID": "7d48cbaa-8cd1-4ce9-b732-7ed371828673",
        "Hm_lvt_334aca66d28b3b338a76075366b2b9e8": "1688113651,1688433312,1688452642",
        "Hm_lpvt_334aca66d28b3b338a76075366b2b9e8": "1688455883",
        "phlogact": "l128476"
    }
    url = "https://ptlogin.4399.com/ptlogin/login.do"
    params = {
        "v": "1"
    }
    data = {
        "loginFrom": "uframe",
        "postLoginHandler": "default",
        "layoutSelfAdapting": "true",
        "externalLogin": "qq",
        "displayMode": "popup",
        "layout": "vertical",
        "bizId": "",
        "appId": "www_home",
        "gameId": "",
        "css": "",
        "redirectUrl": "",
        "sessionId": id,
        "mainDivId": "popup_login_div",
        "includeFcmInfo": "false",
        "level": "0",
        "regLevel": "4",
        "userNameLabel": "4399^%^E7^%^94^%^A8^%^E6^%^88^%^B7^%^E5^%^90^%^8D",
        "userNameTip": "^%^E8^%^AF^%^B7^%^E8^%^BE^%^93^%^E5^%^85^%^A54399^%^E7^%^94^%^A8^%^E6^%^88^%^B7^%^E5^%^90^%^8D",
        "welcomeTip": "^%^E6^%^AC^%^A2^%^E8^%^BF^%^8E^%^E5^%^9B^%^9E^%^E5^%^88^%^B04399",
        "sec": "1",
        "password": js.call('encryptAES',p),
        "username": u,
        "inputCaptcha": get_code(id),
        "autoLogin": "on"
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

    print(response.text)
    print(response)

def get_code(id):
    url='https://ptlogin.4399.com/ptlogin/captcha.do?captchaId='+id+'&xx=1'
    spidertools.donwload_byte_function(url=url,type_='jpg',name='code')
    with open('code.jpg','rb') as f:
        img=f.read()
    code=ocr.classification(img)
    return code


if __name__ == '__main__':
    login_(u="2905641183",p='wang123456')