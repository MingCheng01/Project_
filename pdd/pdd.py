from Spider_Toolkit import spidertools
import requests
js = spidertools.open_js('1.js')

headers = {
    "authority": "mobile.yangkeduo.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://mobile.yangkeduo.com/?page_id=10002_1689941276438_kujw851qha&is_back=1&bsch_is_search_mall=&bsch_show_active_page=",
    "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82"
}
cookies = {
    "api_uid": "CksEZmS6a/CpLwBywb0dAg==",
    "_nano_fp": "XpEJlpUql0Uxn5XJXT_R4YM15IfslT0mBOog0ovD",
    "webp": "1",
    "jrpl": "0fyrFRw8ueYOqqS9Lvy4sc459gmTgEOn",
    "njrpl": "0fyrFRw8ueYOqqS9Lvy4sc459gmTgEOn",
    "dilx": "FHZyEZcv2~SEVkO7Z3MmF",
    "pdd_vds": "gaLLNOOnGOoEaNGoOiONOmOtoIPmymPQEPOiLmLEnaEOLnGONOnyEPPoayQO"
}
url = "https://mobile.yangkeduo.com/proxy/api/api/alexa/cells/hub/v3"
a=js.call('main_')
params = {
    "pdduid": "0",
    "is_back": "1",
    "platform": "H5",
    "page_sn": "10002",
    "page_id": "index_list.html",
    "engine_version": "3.0",
    "offset": "20",
    "count": "20",
    "list_id": "uq73puyjnp",
    "anti_content": a
}
print(a)
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)
