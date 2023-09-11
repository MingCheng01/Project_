import time
import requests
from Spider_Toolkit import spidertools
js=spidertools.open_js('1.js')
headers = {
    "authority": "mon.zijieapi.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.toutiao.com/",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
    "upgrade-insecure-requests": "1",
    "content-type": "application/json",
    "origin": "https://www.toutiao.com",
    "access-control-request-headers": "content-type",
    "access-control-request-method": "POST",
    "Referer": "",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
}
cookies = {
    "msToken": "VQvnqAjMrz3lTcZvMX9SVbNoqj9q27jdmLdcNm3zYeN4IFsmWHZqU-618A4hsketk4y98KyVTQrvmTUepKE6RdL_d3TbAsuS2MGL1mEW",
    "__ac_signature": "_02B4Z6wo00f01eVEFQAAAIDCsMaentyCTdHlZBGAAB2Dbd",
    "tt_webid": "7255225987360097851",
    "ttcid": "a03e8cb8296f490582ae6a42a301f6f380",
    "local_city_cache": "^%^E6^%^B7^%^84^%^E5^%^8D^%^9A",
    "csrftoken": "2c15b6eae94d7ad6fc2d2eda9433da12",
    "_ga": "GA1.1.4811667.1691369494",
    "s_v_web_id": "verify_ll05q67m_obZEdt93_N2bq_45cH_9qJa_WB2EOLcTXlMK",
    "_S_WIN_WH": "1463_751",
    "_S_DPR": "1.75",
    "_S_IPAD": "0",
    "ttwid": "1^%^7C43ghBhoVhbfzhdjswnGloxyjGmFRLGwpt7p5D_R5Ei0^%^7C1691386587^%^7C983266663f3225848b298ac95674be9dd3ceeddb36791ba79832d6d53184d2a6",
    "_ga_QEHZPBE5HH": "GS1.1.1691386587.2.0.1691386587.0.0.0",
    "tt_scid": "DWgbAfWe645aa1XyPoqakJ5pyuEwZZkrFth17k8yNee3z07Zrk3.POyLUSiS3wC05e08"
}
url = "https://www.toutiao.com/api/pc/list/feed"
time_=str(round(time.time()))
params = {
    "channel_id": "0",
    "max_behot_time": time_,
    "offset": "0",
    "category": "pc_profile_recommend",
    "aid": "24",
    "app_name": "toutiao_web",
    "_signature": js.call('get_signature',"https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time="+time_+"&offset=0&category=pc_profile_recommend&aid=24&app_name=toutiao_web")
}

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text.replace('\\',''))
print(str(round(time.time())))