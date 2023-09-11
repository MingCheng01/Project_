import time
import base64
import ddddocr
import requests
from Spider_Toolkit import spidertools

js = spidertools.open_js('1.js')
headers = {
    "authority": "www.iyunduo.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "origin": "https://www.iyunduo.com",
    "pragma": "no-cache",
    "referer": "https://www.iyunduo.com/login",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "JSESSIONID": "C3ADEEE20D6BEB06A7DFF41B8B267C2D"
}


def get_img():
    url = "https://www.iyunduo.com/prod-api/captcha/get"
    data = {"captchaType": "blockPuzzle", "clientUid": "slider-599e70d5-7f28-4434-8da9-57588f8d8653",
            "ts": int(round(time.time() * 1000))}
    response = requests.post(url, headers=headers, cookies=cookies, json=data).json()
    key = response['repData']['secretKey']
    bg = response['repData']['originalImageBase64']
    fg = response['repData']['jigsawImageBase64']
    with open('bg.jpg', 'wb') as f:
        f.write(base64.b64decode(bg))
    with open('fg.jpg', 'wb') as f:
        f.write(base64.b64decode(fg))
    token = response['repData']['token']
    return key, token


def get_locus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('fg.jpg', 'rb') as f:
        target_bytes = f.read()
    with open('bg.jpg', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    res = round(res['target'][0] / 0.86, 2) - 20
    print(res)
    return res


def submit(token, x, key):
    point = js.call('main_', x, key)
    url = "https://www.iyunduo.com/prod-api/captcha/check"
    data = {
        "captchaType": "blockPuzzle",
        "pointJson": point,
        "token": token
    }
    response = requests.post(url, headers=headers, cookies=cookies, json=data)
    print(response.text)


def login_(x, token, key):
    url = "https://www.iyunduo.com/prod-api/login"
    data = {"username": "123",
            "password": "123",
            "captchaVerification": js.call('main_login', x, token, key)
            }
    print(data)
    response = requests.post(url, headers=headers, cookies=cookies, json=data)

    print(response.text)


if __name__ == '__main__':
    key, token = get_img()
    x = get_locus()
    submit(token, x, key)
    login_(x, token, key)
