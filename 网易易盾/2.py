import time
import urllib
from urllib import parse
import requests
import ddddocr
from Spider_Toolkit import spidertools

js = spidertools.open_js('1.js')
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://dun.163.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
cookies = {
    "_ga": "GA.1.2ed3c45bb85ef.02ce8d72c67386d473e6",
    "timing_user_id": "time_nuKyskVEcq",
    "_ntes_nnid": "812b884e3a9144009ad1445b5c9345cb,1689034507229",
    "_ntes_nuid": "812b884e3a9144009ad1445b5c9345cb",
    "hb_MA-93D5-9AD06EA4329A_source": "cn.bing.com",
    "__root_domain_v": ".163.com",
    "_qddaz": "QD.205689641165134",
    "mp_versions_hubble_jsSDK": "DATracker.globals.1.6.14",
    "Hm_lvt_4671c5d502135636b837050ec6d716ce": "1689641164,1689642854,1689644791,1690341437",
    "Hm_lpvt_4671c5d502135636b837050ec6d716ce": "1690349916"
}


def get_img():
    url = "https://c.dun.163.com/api/v3/get"
    params = {
        "referer": "https^%^3A^%^2F^%^2Fdun.163.com^%^2Ftrial^%^2Fsense",
        "zoneId": "CN31",
        "acToken": "",
        "id": "5a0e2d04ffa44caba3f740e6a8b0fa84",
        "fp": js.call('main_fp'),
        "https": "true",
        "type": "undefined",
        "version": "2.22.1",
        "dpr": "1.75",
        "dev": "1",
        "cb": js.call('main_cb'),
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "lang": "zh-CN",
        "sdkVersion": "undefined",
        "iv": "1",
        "width": "301",
        "audio": "false",
        "sizeType": "10",
        "smsVersion": "v3",
        "token": "88f3c066aeb247ce8915e040a25224e4",
        "callback": "__JSONP_22h7nwp_7"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).text.replace('__JSONP_22h7nwp_7(',
                                                                                               '').replace(');', '')
    response = eval(response)
    bg = response['data']['bg'][0]
    fg = response['data']['front'][0]
    token = response['data']['token']
    #print('bg: {}\nfg: {}\ntoken: {}'.format(bg, fg, token))
    spidertools.donwload_byte_function(url=bg, headers=headers, name='bg', type_='jpg')
    spidertools.donwload_byte_function(url=fg, headers=headers, name='fg', type_='jpg')
    return token


def get_locus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('fg.jpg', 'rb') as f:
        target_bytes = f.read()
    with open('bg.jpg', 'rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    res = int(res['target'][0] / 1.064)
    #print('轨迹长度:', res)
    return res


def submit(token, x):
    txt=js.call('main_data',token,x)['data']
    new_txt = urllib.parse.quote(txt)
    url = "https://c.dun.163.com/api/v3/check?"
    url+='referer=https%3A%2F%2Fdun.163.com%2Ftrial%2Fsense&' \
         'zoneId=CN31&' \
         'id=5a0e2d04ffa44caba3f740e6a8b0fa84&' \
         'token='+token+'&' \
         'acToken=undefined&' \
         'data='+new_txt+'&' \
         'width=301&' \
         'type=2&' \
         'version=2.22.1&' \
         'cb='+js.call('main_cb')+'&' \
         'extraData=&' \
         'bf=0&' \
         'runEnv=10&' \
         'sdkVersion=undefined&' \
         'iv=1&' \
         'callback=__JSONP_1x3ws9v_11'
    response = requests.get(url, headers=headers, cookies=cookies)
    return response.text


if __name__ == '__main__':
    count=0
    for i in range(10):
        token = get_img()
        x = get_locus()
        res=submit(token, x)
        if 'true' in res:
            count+=1
            print('成功')
        else:
            print('失败')
        # time.sleep(3)
    print(count)