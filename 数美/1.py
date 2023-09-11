import time
import requests
import ddddocr
import random
from Spider_Toolkit import spidertools

js = spidertools.open_js('1.js')
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Origin": "https://console.ishumei.com",
    "Pragma": "no-cache",
    "Referer": "https://console.ishumei.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}


def get_img():
    print(round(time.time() * 1000))
    callback = "sm_" + str(round(time.time() * 1000))
    url = "https://captcha1.fengkongcloud.cn/ca/v1/register"
    params = {
        "sdkver": "1.1.3",
        "callback": callback,
        "data": {},
        "rversion": "1.0.4",
        "model": "slide",
        "lang": "zh-cn",
        "captchaUuid": "202308040806465XAWpydY4mHtByMpb3",
        "channel": "DEFAULT",
        "appId": "default",
        "organization": "d6tpAY1oV0Kv5jRSgxQr"
    }
    response = requests.get(url, headers=headers, params=params).text.replace('true', 'True').replace('false', 'False')[
               :-1]
    response = eval(response.replace(callback + '(', ''))
    print(response)
    requestId = response['requestId']
    bg = response['detail']['bg']
    fg = response['detail']['fg']
    k = response['detail']['k']
    rid = response['detail']['rid']
    spidertools.donwload_byte_function(url='https://castatic.fengkongcloud.cn' + bg, name='bg', type_='jpg')
    spidertools.donwload_byte_function(url='https://castatic.fengkongcloud.cn' + fg, name='fg', type_='png')
    print(f'requestId => {requestId}\nbg => {bg}\nfg => {fg}\nk => {k}\nrid => {rid}')
    return requestId, k, rid, callback


def get_locus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('fg.png', 'rb') as f:
        target_bytes = f.read()
    with open('bg.jpg', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    x = int(res['target'][0] / 2)
    print(x)
    locus = []
    locus.append([0, 0, 0])
    max_x = x + random.randint(10, 30)
    real_x = x
    Slider_y = 0
    start_time = 0
    Slider_x = 0
    range_ = random.randint(50, 100)
    print('预计数组长度：{}'.format(range_))
    for i in range(range_):
        x_random = random.randint(3, 5)
        start_time += random.randint(80, 160)
        if i % random.randint(3, 5) == 0:
            if random.randint(0, 3) < 1:
                Slider_y -= 1
            else:
                Slider_y += 1
        if Slider_x >= max_x:
            max_x = real_x
            Slider_x = Slider_x - x_random
            if Slider_x <= max_x:
                locus.append([max_x, Slider_y, start_time])
                print('实际数组长度：{}'.format(i))
                break
        else:
            Slider_x += x_random

        locus.append([Slider_x, Slider_y, start_time])

    print('移动距离：{}'.format(x))
    print('路径0：{} 路径-1：{} 长度：{}'.format(locus[0], locus[-1], len(locus)))
    return x, locus, locus[-1][-1]


def submit(rid, callback, x, locus, time_):
    data = js.call('main_', x, time_, locus)
    url = "https://captcha1.fengkongcloud.cn/ca/v2/fverify"
    params = {
        "hd": data['hd'],
        "sdkver": "1.1.3",
        "jn": data['jn'],
        "xc": data['xc'],
        "ee": data['ee'],
        "us": data['us'],
        "ma": data['ma'],
        "ostype": "web",
        "act.os": "web_pc",
        "protocol": "179",
        "captchaUuid": "202308040806465XAWpydY4mHtByMpb3",
        "jv": data['jv'],
        "rj": data['rj'],
        "rversion": "1.0.4",
        "organization": "d6tpAY1oV0Kv5jRSgxQr",
        "ml": data['ml'],
        "xy": data['xy'],
        "ra": data['ra'],
        "rid": rid,
        "qu": data['qu'],
        "callback": callback
    }
    response = requests.get(url, headers=headers, params=params)
    print(response.text)
    print(response)


if __name__ == '__main__':
    for i in range(10):
        requestId, k, rid, callback = get_img()
        x, locus, time_ = get_locus()
        # print(x, locus, time_)
        submit(rid, callback, x, locus, time_)
