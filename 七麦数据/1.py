import requests
from Spider_Toolkit import spidertools
js=spidertools.open_js('1.js')
headers = {
    "authority": "api.qimai.cn",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "origin": "https://www.qimai.cn",
    "pragma": "no-cache",
    "referer": "https://www.qimai.cn/",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Microsoft",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183"
}
cookies = {
    "qm_check": "A1sdRUIQChtxen8pI0dAOTQ+GRdzfX0QZlkBAwgGUC03HBd1QlhAXFEGFUcsEQsfVkMBdAgBFE4WOVI3SFkKRmgHbwkcFHxWIlZZUVtWF1RaVVpbFgJHVktYVElWBRsCEkQ^%^3D",
    "gr_user_id": "28580d4d-d808-4f10-9d12-ec245025d910",
    "Hm_lvt_ff3eefaf44c797b33945945d0de0e370": "1690440228,1690450183,1690507336",
    "PHPSESSID": "48hn4918if4r2iek2032tshnar",
    "ada35577182650f1_gr_session_id": "4bc86292-fc3e-4e95-a0fd-e7361ed09c40",
    "ada35577182650f1_gr_session_id_sent_vst": "4bc86292-fc3e-4e95-a0fd-e7361ed09c40",
    "syncd": "1101",
    "Hm_lpvt_ff3eefaf44c797b33945945d0de0e370": "1690507672",
    "synct": "1690507674.377"
}
url = "https://api.qimai.cn/rank/indexPlus/brand_id/0"
a=['all', 'cn', 'iphone', '36', '2023-07-28', 1]
params = {
    "analysis": js.call('main_',a,'0'),
    "brand": a[0],
    "country": a[1],
    "device": a[2],
    "genre": a[3],
    "date": a[4],
    "page": a[5]
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)