import time
import requests
from Spider_Toolkit import spidertools
import ddddocr
import random
js = spidertools.open_js('2.js')
def get_img():
    headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        'Cache-Control': 'no-cache',
        'Cookie': "_gid=GA1.2.1936183360.1688641633; MEIQIA_TRACK_ID=2SCDOFGe3gbtVpSRgFhJBYUn0DD; MEIQIA_VISIT_ID=2SCDO9weccRgjh0tbcOqnL5PkcL; Hm_lvt_70eec7aeabdef9224878ecbafcc9bf6a=1688726142,1688777490,1688786484,1688857655; __wksid=n-545091CCEA224FBEB938FF240EE73077; _ga_ESVMH6YSPX=GS1.1.1688870494.11.0.1688870494.0.0.0; Hm_lpvt_70eec7aeabdef9224878ecbafcc9bf6a=1688870495; _ga=GA1.2.1932149139.1688641633",
        "Pragma": "no-cache",
        "Referer": "https://www.yunpian.com/",
        "Sec-Ch-Ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "Windows",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67"
    }
    params = js.call('get_url')
    params = (
        ('cb', params['cb']),
        ('i', params['i']),
        ('k', params['k']),
        ('captchaId', '974cd565f11545b6a5006d10dc324281')
    )
    url = "https://captcha.yunpian.com/v1/jsonp/captcha/get"
    response = requests.get(url, headers=headers, params=params).text.replace('ypjsonp(', '').replace('false',
                                                                                                      'False').replace('true', 'True')[:-1]
    response = eval(response)
    spidertools.donwload_byte_function(url=response['data']['bg'], name='bg')
    spidertools.donwload_byte_function(url=response['data']['front'], name='ft')
    return response['data']['token']

def get_locus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('ft.png', 'rb') as f:
        target_bytes = f.read()
    with open('bg.jpg', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)

    locus = []
    x = int(res['target'][0] / 1.45)
    Slider_x = random.randint(865, 885)
    Slider_y = random.randint(1955, 1975)
    start_time = random.randint(120, 200)
    locus.append([Slider_x, Slider_y, start_time])
    max_x = Slider_x + x + random.randint(10, 30)
    real_x = Slider_x + x

    def cut(locus):
        len_locus = len(locus)
        if len_locus <= 50:
            return locus
        start = [locus[0]]
        end = locus[-1]
        i = len_locus // 50
        if i < 2:
            return locus
        for r in range(1, len_locus, i):
            start.append(locus[r])
        start.append(end)
        return start

    range_ = random.randint(300, 451)
    print('预计数组长度：{}'.format(range_))
    for i in range(range_):
        x_random = random.randint(0, 1)
        start_time += 1
        if i % 10 == 0:
            if random.randint(0, 1) == 1 and Slider_y < 1975:
                Slider_y += 1
            else:
                Slider_y -= 1
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
    locus = cut(locus)

    print('移动距离：{}'.format(x))
    print('路径0：{} 路径-1：{} 切割后长度：{}'.format(locus[0], locus[-1], len(locus)))
    return x, locus

def submit_(params, token):
    headers = {
        "authority": "captcha.yunpian.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://www.yunpian.com/",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67"
    }
    cookies = {
        "_gid": "GA1.2.1936183360.1688641633",
        "MEIQIA_TRACK_ID": "2SCDOFGe3gbtVpSRgFhJBYUn0DD",
        "MEIQIA_VISIT_ID": "2SCDO9weccRgjh0tbcOqnL5PkcL",
        "Hm_lvt_70eec7aeabdef9224878ecbafcc9bf6a": "1688726142,1688777490,1688786484,1688857655",
        "__wksid": "n-545091CCEA224FBEB938FF240EE73077",
        "_ga_ESVMH6YSPX": "GS1.1.1688859680.10.1.1688860536.0.0.0",
        "Hm_lpvt_70eec7aeabdef9224878ecbafcc9bf6a": "1688860539",
        "_ga": "GA1.2.1932149139.1688641633"
    }
    url = "https://captcha.yunpian.com/v1/jsonp/captcha/verify"
    params = (
        ('cb', params['cb']),
        ('i', params['i']),
        ('k', params['k']),
        ('token', token),
        ('captchaId', '974cd565f11545b6a5006d10dc324281'),
    )
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    return response.text

if __name__ == '__main__':
    while True:
        token = get_img()
        print('token：', token)
        x, locus = get_locus()
        params = js.call('submit_verify', locus, x)
        res = submit_(params, token)
        if 'ok' in res:
            print(res)
            break
        else:
            print(res)
            time.sleep(5)
