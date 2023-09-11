import requests
import execjs
with open('1.js','r') as f:
    data=f.read()
js=execjs.compile(data)
v=js.call('main_')
print(v)
headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "http://www.iwencai.com",
    "Pragma": "no-cache",
    "Referer": "http://www.iwencai.com/unifiedmobile/?q=5g",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69",
    "X-Requested-With": "XMLHttpRequest",
    "hexin-v": v
}
cookies = {
    "other_uid": "ths_mobile_iwencai_9eet1us338tjuv23ywzillorcgkex5wj",
    "ta_random_userid": "4pui7r28wd",
    "cid": "1313ea0f181431b63338d00c48b938791682390270",
    "v": v
}
url = "http://www.iwencai.com/gateway/urp/v7/landing/getDataList"
data = {
    "query": "5g",
    "urp_sort_index": "",
    "urp_sort_way": "desc",
    "condition": "^%^5B^%^7B^%^22indexName^%^22^%^3A^%^22^%^E6^%^89^%^80^%^E5^%^B1^%^9E^%^E6^%^A6^%^82^%^E5^%^BF^%^B5^%^22^%^2C^%^22indexProperties^%^22^%^3A^%^5B^%^22^%^E6^%^A6^%^82^%^E5^%^BF^%^B5id 300843^%^22^%^2C^%^22^%^E5^%^8C^%^85^%^E5^%^90^%^AB5g^%^22^%^5D^%^2C^%^22source^%^22^%^3A^%^22new_parser^%^22^%^2C^%^22type^%^22^%^3A^%^22index^%^22^%^2C^%^22indexPropertiesMap^%^22^%^3A^%^7B^%^22^%^E6^%^A6^%^82^%^E5^%^BF^%^B5id^%^22^%^3A^%^22300843^%^22^%^2C^%^22^%^E5^%^8C^%^85^%^E5^%^90^%^AB^%^22^%^3A^%^225g^%^22^%^7D^%^2C^%^22reportType^%^22^%^3A^%^22null^%^22^%^2C^%^22chunkedResult^%^22^%^3A^%^225g^%^22^%^2C^%^22valueType^%^22^%^3A^%^22_^%^E6^%^89^%^80^%^E5^%^B1^%^9E^%^E6^%^A6^%^82^%^E5^%^BF^%^B5^%^22^%^2C^%^22domain^%^22^%^3A^%^22abs_^%^E8^%^82^%^A1^%^E7^%^A5^%^A8^%^E9^%^A2^%^86^%^E5^%^9F^%^9F^%^22^%^2C^%^22uiText^%^22^%^3A^%^22^%^E6^%^89^%^80^%^E5^%^B1^%^9E^%^E6^%^A6^%^82^%^E5^%^BF^%^B5^%^E6^%^98^%^AF5g^%^22^%^2C^%^22sonSize^%^22^%^3A0^%^2C^%^22queryText^%^22^%^3A^%^22^%^E6^%^89^%^80^%^E5^%^B1^%^9E^%^E6^%^A6^%^82^%^E5^%^BF^%^B5^%^E6^%^98^%^AF5g^%^22^%^2C^%^22relatedSize^%^22^%^3A0^%^2C^%^22tag^%^22^%^3A^%^22^%^E6^%^89^%^80^%^E5^%^B1^%^9E^%^E6^%^A6^%^82^%^E5^%^BF^%^B5^%^22^%^7D^%^5D",
    "codelist": "",
    "is_cache": "1",
    "perpage": "30",
    "logid": "70c14d3ce94d4ee9aaf2bb7eed86cf01",
    "page": "1",
    "ret": "json_all",
    "sessionid": "34653c5d5ea46e78c740017bc2b07feb",
    "throughFirst": "",
    "iwc_token": "0ac9571316823902918087036",
    "urp_use_sort": "1",
    "user_id": "ths_mobile_iwencai_9eet1us338tjuv23ywzillorcgkex5wj",
    "uuids^%^5B0^%^5D": "30457",
    "query_type": "stock",
    "comp_id": "6652209",
    "business_cat": "soniu",
    "uuid": "30457"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)
r=response.text#.encode("utf-8").decode("unicode_escape")
print(r)