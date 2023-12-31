import json
import time

import execjs
from curl_cffi import requests


def get_data(json_data, url, sepUrl):
    timestamp = str(int(time.time()))
    headers = {
        'Content-Type': 'application/json',
        'token': '',
    }
    data = json.dumps(json_data, ensure_ascii=False, separators=(',', ':'))
    x_ = execjs.compile(open('1.js', 'r', encoding='utf-8').read()) \
        .call('setHeader', 'POST', sepUrl, data, timestamp)
    headers.update(x_)
    response = requests.post(url, headers=headers,
                             data=data, impersonate='chrome110')
    print(response.json())


if __name__ == '__main__':
    set1 = {
        'json_data': {
            'data': {
                'zoneId': '4932265882383941446',
            },
            'cityId': '701',
            'userClassId': 1,
            'userDisplayClass': 0,
            'addressId': '',
            'deviceType': 3,
        },
        'url': 'https://www.yijiupi.com/v54/ProductCategory/ListCategoryTree',
        'sepUrl': '/v54/ProductCategory/ListCategoryTree'
    }
    # get_data(**set1)
    set2 = {
        'json_data': {
            'cityId': '701',
            'userClassId': 1,
            'userDisplayClass': 0,
            'addressId': '',
            'deviceType': 3,
        },
        'url': 'https://www.yijiupi.com/v54/PurchaseChannel/List',
        'sepUrl': '/v54/PurchaseChannel/List'
    }
    # get_data(**set2)
    set3 = {
        'json_data': {
            'data': {
                'sonCategoryId': '',
                'brandId': '',
                'firstCategoryId': '',
                'searchKey': '国台国酱',
                'specialAreaId': '',
                'categoryIds': [],
                'brandIds': [],
                'labelId': None,
                'isAscending': '',
                'searchModes': [
                    2,
                ],
                'sort': 0,
                'shopId': '',
                'currentPage': 1,
                'pageSize': 60,
                'filterSpecialArea': False,
                'searchSource': 1,
                'warehouseIds': [],
                'searchKeyNotCorrect': False,
                'couponTemplateId': '',
                'channelId': '',
            },
            'cityId': '701',
            'userClassId': 1,
            'userDisplayClass': 0,
            'addressId': '',
            'deviceType': 3,
        },
        'url': 'https://www.yijiupi.com/v54/ProductCategory/ListProductCategory',
        'sepUrl': '/v54/ProductCategory/ListProductCategory'
    }
    get_data(**set3)