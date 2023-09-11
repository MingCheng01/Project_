import random
import time

from Spider_Toolkit import spidertools
import requests
import ddddocr
js=spidertools.open_js('1.js')
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.geetest.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}

def get_img():
    callback_="geetest_"+str(round(time.time()*1000))
    url = "https://gcaptcha4.geetest.com/load"
    params = {
        "captcha_id": "24f56dc13c40dc4a02fd0318567caef5",
        "challenge": "0c8f2f73-9cd1-494d-81f2-7d82e1bfe373",
        "client_type": "web",
        "risk_type": "slide",
        "lang": "zh",
        "callback": callback_
    }
    response = requests.get(url, headers=headers, params=params).text.replace(callback_,'')[1:-1].replace('false','False').replace('true','True')
    return eval(response),callback_

def get_locus(bg,fg):
    spidertools.donwload_byte_function(url='https://static.geetest.com/'+fg,name='fg',type_='png')
    spidertools.donwload_byte_function(url='https://static.geetest.com/'+bg,name='bg',type_='png')
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('fg.png', 'rb') as f:
        target_bytes = f.read()
    with open('bg.png', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    return int(res['target'][0])

def submit_(w,callback,lot_number,payload,process_token):
    url = "https://gcaptcha4.geetest.com/verify"
    params = {
        "callback": callback,
        "captcha_id": '24f56dc13c40dc4a02fd0318567caef5',
        "client_type": "web",
        "lot_number": lot_number,
        "risk_type": "slide",
        "payload": payload,
        "process_token": process_token,
        "payload_protocol": "1",
        "pt": "1",
        "w": w
    }
    response = requests.get(url, headers=headers, params=params)
    print(response.text)
    print(response)

if __name__ == '__main__':
    data,callback_=get_img()
    print('==================================================================================')
    lot_number=data['data']['lot_number']
    fg=data['data']['slice']
    bg=data['data']['bg']
    datetime=data['data']['pow_detail']['datetime']
    payload=data['data']['payload']
    process_token=data['data']['process_token']
    print('获取图片成功,解析参数为:')
    print('callback_:',callback_)
    print('lot_number:',lot_number)
    print('fg:',fg)
    print('bg:',bg)
    print('datetime:',datetime)
    print('payload:',payload)
    print('process_token:',process_token)
    print('==================================================================================')
    print('进行图片轨迹识别')
    locus=get_locus(bg,fg)
    print('识别结束,轨迹长度为:',locus)
    print('==================================================================================')
    print('将参数给予js实现加密')
    w=js.call('main_',locus, random.randint(750,1500), lot_number, datetime)
    print('w为:',w)
    print('==================================================================================')
    print('提交,结果为:')
    submit_(w,callback_,lot_number,payload,process_token)