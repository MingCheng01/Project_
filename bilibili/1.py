import time
import requests
from Spider_Toolkit import spidertools

js = spidertools.open_js('1.js')
cookies = {
    'buvid3': 'F792C583-2810-1220-FAEE-9A0B36B0D44E46438infoc',
    'b_nut': '1693480246',
    'CURRENT_FNVAL': '4048',
    '_uuid': '2310235D7-B44C-F5D7-3BF5-F29F661C316F51425infoc',
    'buvid_fp': 'e3fb12901a02b45540de45b766d568ae',
    'rpdid': '0zbfvUb6yR|13hQx5mwW|2C|3w1QBFzJ',
    'header_theme_version': 'CLOSE',
    'home_feed_column': '5',
    'browser_resolution': '1463-751',
    'bp_video_offset_92951007': '836982632284684375',
    'SESSDATA': 'c8d08420%2C1709267176%2C371a8%2A91hLaspRLp8MEp-fhQ8dlqB_ItApYwpSS7upjyfChTYRyUiFB_IzypSCXpvEpIT4jTWXbTUAAAUQA',
    'bili_jct': '9b6a19acc4d05b68ae7f461f39a283c4',
    'DedeUserID': '387193381',
    'DedeUserID__ckMd5': '39144e60acb615f5',
    'bili_ticket': 'eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxNDMsImlhdCI6MTY5Mzc4Njk0MywicGx0IjotMX0.0yHnmjsmSD7NeGBi9GDn7CRh-ANk6c_ASQrk8Gy19Ic',
    'bili_ticket_expires': '1694046143',
    'buvid4': '3AC0BC51-EFB8-5534-F387-1F20F513B73389741-023062612-v%2F4T3i3ePwa9TG%2FO%2FzaX4w%3D%3D',
    'hit-new-style-dyn': '1',
    'hit-dyn-v2': '1',
    'PVID': '1',
    'bsource': 'search_bing',
    'sid': '8cpibh16',
    'bp_video_offset_387193381': '837481260807880774',
    'b_lsid': '11975FDB_18A6322CE4A',
    'innersign': '0',
}
headers = {
    'authority': 'api.bilibili.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    # 'cookie': 'buvid3=F792C583-2810-1220-FAEE-9A0B36B0D44E46438infoc; b_nut=1693480246; CURRENT_FNVAL=4048; _uuid=2310235D7-B44C-F5D7-3BF5-F29F661C316F51425infoc; buvid_fp=e3fb12901a02b45540de45b766d568ae; rpdid=0zbfvUb6yR|13hQx5mwW|2C|3w1QBFzJ; header_theme_version=CLOSE; home_feed_column=5; browser_resolution=1463-751; bp_video_offset_92951007=836982632284684375; SESSDATA=c8d08420%2C1709267176%2C371a8%2A91hLaspRLp8MEp-fhQ8dlqB_ItApYwpSS7upjyfChTYRyUiFB_IzypSCXpvEpIT4jTWXbTUAAAUQA; bili_jct=9b6a19acc4d05b68ae7f461f39a283c4; DedeUserID=387193381; DedeUserID__ckMd5=39144e60acb615f5; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxNDMsImlhdCI6MTY5Mzc4Njk0MywicGx0IjotMX0.0yHnmjsmSD7NeGBi9GDn7CRh-ANk6c_ASQrk8Gy19Ic; bili_ticket_expires=1694046143; buvid4=3AC0BC51-EFB8-5534-F387-1F20F513B73389741-023062612-v%2F4T3i3ePwa9TG%2FO%2FzaX4w%3D%3D; hit-new-style-dyn=1; hit-dyn-v2=1; PVID=1; bsource=search_bing; sid=8cpibh16; bp_video_offset_387193381=837481260807880774; b_lsid=11975FDB_18A6322CE4A; innersign=0',
    'origin': 'https://www.bilibili.com',
    'pragma': 'no-cache',
    'referer': 'https://www.bilibili.com/',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',
}


def get_():
    url = "https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd"
    Xe = round(time.time())
    page = '1'
    params = {
        "web_location": "1430650",
        "y_num": "5",
        "fresh_type": "3",
        "feed_version": "V8",
        "fresh_idx_1h": "1",
        "fetch_row": "1",
        "fresh_idx": "1",
        "brush": "0",
        "homepage_ver": "1",
        "ps": "10",
        "last_y_num": "5",
        "screen": "1463-751",
        "seo_info": "",
        "last_showlist": "av_320497118,av_275536455,av_447913137,av_617195384,av_617003188,ad_5614,av_n_957529375,av_n_317633388,av_n_447677392,av_n_999924000",
        "uniq_id": "1233952935841",
        "w_rid": js.call('main_', str(page), str(Xe)),
        "wts": str(Xe)
    }
    print(params)
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)


get_()