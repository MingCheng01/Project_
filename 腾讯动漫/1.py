from Spider_Toolkit import spidertools
import requests
from lxml import etree
import re

headers = {
    "authority": "otheve.beacon.qq.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "cookie": "RK=eAf8CMr8ys; ptcz=bd592cc9c24deb73a1b02316cc2df8f00b7739f119bab42b9f4b64fda83c1fe0; pgv_pvid=8420095980; eas_sid=r1Z6e8Q8V1p754v9G4P1w7q186; ac_wx_user=; tgw_l7_route=5b32be57d6d016fdba4b7c263d0c10eb; _qpsvr_localtk=0.7337515084735884",
    "pragma": "no-cache",
    "referer": "https://ac.qq.com/",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
    "content-type": "text/plain;charset=UTF-8",
    "origin": "https://ac.qq.com",
    "access-control-request-headers": "content-type",
    "access-control-request-method": "POST",
    "Accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "",
    "Sec-Fetch-Dest": "image",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
    "x-requested-with": "XMLHttpRequest",
    "Upgrade-Insecure-Requests": "1"
}

def get_chapter(url):
    response = requests.get(url, headers=headers)
    html = etree.HTML(response.text)
    url_ = html.xpath('//*[@id="chapter"]/div[2]/ol[1]/li/p/span/a/@href')[:20]
    url_list = ['https://ac.qq.com' + i for i in url_]
    return url_list


def get_param(url):
    response = requests.get(url, headers=headers).text
    Data = re.findall(r"var DATA = '(.*?)'", response)[0]
    nonce = re.findall(r'window\[(.*?);', response)[1].split('=')
    #"no"+"nce"] = "d1da4cba3" + (+eval("1/2 + 5/2")).toString()a==123
    if len(nonce) == 2:
        nonce = nonce[1]
    else:
        nonce = '='.join(nonce[1:])
    return Data, 'nonce=' + nonce


def donwload_(url, num):
    for i in range(len(url)):
        print(url[i]['url'],'下载中')
        spidertools.donwload_byte_function(url[i]['url'], type_='jpg', name=str(i), path_='./' + str(num) + '/')


if __name__ == '__main__':
    js = spidertools.open_js('1.js')
    url_list = get_chapter('https://ac.qq.com/Comic/comicInfo/id/646239')
    for i in range(len(url_list)):
        print(url_list[i])
        Data, nonce = get_param(url_list[i])
        img = js.call('main_', Data, nonce)['picture']
        print(img)
        donwload_(img, i)
