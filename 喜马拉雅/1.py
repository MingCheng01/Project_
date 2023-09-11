import requests
import time
import ddddocr
import random
import base64
from Spider_Toolkit import spidertools
from Cryptodome.PublicKey import RSA
from Cryptodome.Cipher import PKCS1_v1_5

headers = {
    "authority": "mobile.ximalaya.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://www.ximalaya.com",
    "pragma": "no-cache",
    "referer": "https://www.ximalaya.com/",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58"
}
cookie = {
    "_xmLog": "h5&9b8201dd-614d-4da7-8dd8-732b68bb5562&process.env.sdkVersion",
    "xm-page-viewid": "ximalaya-web",
    "impl": "www.ximalaya.com.login",
    "x_xmly_traffic": "utm_source^%^253A^%^2526utm_medium^%^253A^%^2526utm_campaign^%^253A^%^2526utm_content^%^253A^%^2526utm_term^%^253A^%^2526utm_from^%^253A"
}
params = {
    "bpId": "139",
    "sessionId": "xm_ljhzz4pzupca8h"
}

# 滑块
def getImgLeft(t):
    return -12 * 0.8 + (t + 10) * (380 - 84.8 + 24 * 0.8) / (380 - 40)
def getSliderLeft(t):
    return int(round(getImgLeft(t) / 0.8 + 44))
def get_img():
    res = requests.get(
        url='https://mobile.ximalaya.com/captcha-web/check/slide/get?bpId=139&sessionId=xm_ljxurrv125lvxs')
    res = res.json()
    spidertools.donwload_byte_function(url=res['data']['fgUrl'], name='fg', type_='png')
    spidertools.donwload_byte_function(url=res['data']['bgUrl'], name='bg', type_='jpg')
def get_locus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('fg.png', 'rb') as f:
        target_bytes = f.read()
    with open('bg.jpg', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    x_locus = int((res["target"][0]) * 0.8 + 10)
    print('x的位移距离为:', x_locus)
    return x_locus
def onMoveEnd(x):
    captchaText = str(getSliderLeft(x)) + "," + str(1)
    return captchaText
def submit_(captchaText):
    json = {
        "bpId": 139,
        "sessionId": "xm_ljxurrv125lvxs",
        "type": "slider",
        "captchaText": captchaText,
        "startX": random.randint(540, 570),
        "startY": random.randint(360, 380),
        "startTime": int(round(time.time() * 1000)) - random.randint(2000, 4000)
    }
    res = requests.post("https://mobile.ximalaya.com/captcha-web/valid/slider",
                        headers=headers,
                        cookies=cookie,
                        json=json)
    return res.json()


# 登录
def get_nonce(res):
    cookie['fds_otp'] = res["token"]
    res = requests.get("https://passport.ximalaya.com/web/nonce/" + str(round(time.time() * 1000)),
                     headers=headers,
                     params=params,
                     cookies=cookie)
    return res.json()['nonce']

def encrypt_password(pwd):
    public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVhaR3Or7suUlwHUl2Ly36uVmboZ3+HhovogDjLgRE9CbaUokS2eqGaVFfbxAUxFThNDuXq/fBD+SdUgppmcZrIw4HMMP4AtE2qJJQH/KxPWmbXH7Lv+9CisNtPYOlvWJ/GHRqf9x3TBKjjeJ2CjuVxlPBDX63+Ecil2JR9klVawIDAQAB"
    rsa_key = RSA.import_key(base64.b64decode(public_key))
    cipher = PKCS1_v1_5.new(rsa_key)
    encrypted_password = base64.b64encode(cipher.encrypt(pwd.encode(encoding="utf-8")))
    return encrypted_password.decode()

def login_(u,p):
    js=spidertools.open_js('1.js')
    while True:
        get_img()
        x = get_locus()
        captchaText = onMoveEnd(x)
        res = submit_(captchaText)
        if 'user input captcha error' in res:
            print('error，重试：', res)
            time.sleep(3)
        else:
            print(res)
            break
    nonce=get_nonce(res)
    json = {
        "account": u,
        "password": encrypt_password(p),
        "nonce": nonce,
        "signature": js.call("main_", u, p, nonce),
        "rememberMe": False
    }
    res = requests.post("https://passport.ximalaya.com/web/login/pwd/v1",
                            headers=headers,
                            json=json,
                            cookies=cookie)
    print(res.text)
    print(res)


if __name__ == '__main__':
    login_('123','123123')
