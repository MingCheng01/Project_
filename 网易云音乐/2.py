from Spider_Toolkit import spidertools
js=spidertools.open_js('1.js')
import requests


def get_song():
    url = f'https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=""'
    e = '010001'
    f = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    g = '0CoJUm6Qyw8W8jud'
    data = '{"ids":"[430685732]","level":"standard","encodeType":"aac","csrf_token":""}'
    params=js.call('main_',data, e, f, g)
    params = {
        "params": params['encText'],
        "encSecKey": params['encSecKey']
    }

    re = requests.post(url=url, params=params, verify=False)
    return re.json()

print(get_song())
