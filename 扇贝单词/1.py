import pandas
import requests
from Spider_Toolkit import spidertools

js = spidertools.open_js('1.js')

en = []
cn = []


def get_data():
    headers = {
        "authority": "apiv3.shanbay.com",
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "origin": "https://web.shanbay.com",
        "pragma": "no-cache",
        "referer": "https://web.shanbay.com/",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Microsoft",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
        "x-csrftoken": "9be078def7384204d305b610f750350b"
    }
    cookies = {
        "_ga": "GA1.2.1465131041.1688620400",
        "sajssdk_2015_cross_new_user": "1",
        "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUxODQ4NDIzLCJleHAiOjE2ODk0ODQ3NTAsImV4cF92MiI6MTY4OTQ4NDc1MCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJQaG9uZV85OWU5OWVmOTI5MDZlNTBjIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJmMGE1NjU0MjFiYmIxMWVlYTRmNmUyZWFkMDc3YWU0MyJ9.bLCOf0LD28rZly7nCS3modZeONCu1YObUGWusaI2KDQ",
        "csrftoken": "9be078def7384204d305b610f750350b",
        "sensorsdata2015jssdkcross": "^%^7B^%^22distinct_id^%^22^%^3A^%^22gmhrvg^%^22^%^2C^%^22first_id^%^22^%^3A^%^22189299e7bbaa6e-0298c44965aa-7e56547f-1204049-189299e7bbb1a18^%^22^%^2C^%^22props^%^22^%^3A^%^7B^%^22^%^24latest_traffic_source_type^%^22^%^3A^%^22^%^E8^%^87^%^AA^%^E7^%^84^%^B6^%^E6^%^90^%^9C^%^E7^%^B4^%^A2^%^E6^%^B5^%^81^%^E9^%^87^%^8F^%^22^%^2C^%^22^%^24latest_search_keyword^%^22^%^3A^%^22^%^E6^%^9C^%^AA^%^E5^%^8F^%^96^%^E5^%^88^%^B0^%^E5^%^80^%^BC^%^22^%^2C^%^22^%^24latest_referrer^%^22^%^3A^%^22https^%^3A^%^2F^%^2Fcn.bing.com^%^2F^%^22^%^2C^%^22^%^24latest_utm_source^%^22^%^3A^%^22web_codetime^%^22^%^2C^%^22^%^24latest_utm_medium^%^22^%^3A^%^22shanbay_nav^%^22^%^7D^%^2C^%^22^%^24device_id^%^22^%^3A^%^22189299e7bbaa6e-0298c44965aa-7e56547f-1204049-189299e7bbb1a18^%^22^%^7D"
    }
    url = "https://apiv3.shanbay.com/wordsapp/user_material_books/odcxi/learning/words/unlearned_items"
    for i in range(615):
        params = {
            "ipp": "10",
            "page": str(i)
        }
        response = requests.get(url, headers=headers, cookies=cookies, params=params)
        save_data(js.call('main_', eval(response.text)['data']))
        print('第{}页ok'.format(i))
    df= pandas.DataFrame({'en': en, 'cn': cn})
    df.to_excel('./单词.xlsx',header=False,index=False)

def save_data(json):
    for i in json:
        en.append(i['vocab_with_senses']['word'])
        cn.append(i['vocab_with_senses']['senses'][0]['definition_cn'])



if __name__ == '__main__':
    get_data()
