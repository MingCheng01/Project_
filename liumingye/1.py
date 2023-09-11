import re
import requests
from Spider_Toolkit import spidertools

headers = {
    "authority": "api.liumingye.cn",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://tools.liumingye.cn",
    "pragma": "no-cache",
    "sec-ch-ua": '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69"
}
js = spidertools.open_js('1.js')

def get_song_list(text, page):
    url = "https://api.liumingye.cn/m/api/search"
    data = js.call('main_', text, page)
    response = requests.post(url, headers=headers, json=data)
    print(response.text)
    print(response)


def get_song(id, quality):
    print('正在获取{},品质:{}的链接'.format(id, quality))
    data = js.call('main__', id, quality)
    url = 'https://api.liumingye.cn/m/api/link?id={}&quality={}&_t={}&token={}'.format(id, quality, data['_t'],
                                                                                       data['token'])
    response = requests.get(url, headers=headers)
    print('获取结束\n')
    return response.text


def get_lanzou(response):
    print('正在解析蓝奏云链接-参数部分...')
    url = 'https://m.lanzouy.com' + re.findall('src="(.*?)"', response)[1]
    response = requests.get(url).text
    action = re.findall("'action':'(.*?)'", response)[1]
    signs = re.findall("ajaxdata = '(.*?)'", response)[0]
    sign = re.findall("'sign':'(.*?)'", response)[0]
    websign = re.findall("ws_sign = '(.*?)'", response)[0]
    websignkey = re.findall("wsk_sign = '(.*?)'", response)[0]
    ves = re.findall("'ves':(.*?) }", response)[0]
    print('解析结束,参数为:')
    print('action:{}\nsigns:{}\nsign:{}\nwebsign:{}\nwebsignkey:{}\nves:{}\n'.format(action, signs, sign, websign, websignkey, ves))
    return action, signs, sign, websign, websignkey, ves


def download(action, signs, sign, websign, websignkey, ves):
    print('正在获取直链接')
    headers = {
        "Accept": "application/json, text/javascript, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://m.lanzouy.com",
        "Pragma": "no-cache",
        "Referer": "https://m.lanzouy.com/fn?AGYHbQpuUDBWOAptUTNUZ1swDzsFfFAmBjwHMFc9Vm8CO1YyC2QEYANtUTEGZ116ASwObgU4B3ZRPwNiXG5VPwBlBykKalAwVlMKMFFI",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.79",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^"
    }
    cookies = {
        "codelen": "1",
        "pc_ad1": "1"
    }
    url = "https://m.lanzouy.com/ajaxm.php"
    data = {
        "action": action,
        "signs": signs,
        "sign": sign,
        "websign": websign,
        "websignkey": websignkey,
        "ves": ves
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    url = response['dom'] + '/file/' + response['url']
    print('直链为:',url,'\n')
    print('正在准备下载')
    spidertools.donwload_byte_function(url=url, name='1', type_='flac', headers=headers)
    print('下载完毕')


#print(get_song_list('奢香夫人', 1))
res = get_song('kQvL', 2000)
# action, signs, sign, websign, websignkey, ves = get_lanzou(res)
# url = download(action, signs, sign, websign, websignkey, ves)
