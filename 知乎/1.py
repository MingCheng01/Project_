import requests
import execjs
import time
with open('1.js','r',encoding='utf-8') as f:
    js=execjs.compile(f.read())

def get_(session_token,page,aid):
    cookies = {
        '_zap': 'ee6ef14e-c5db-4965-9499-ff61ae08fadb',
        'd_c0': 'AHDUm7hmVhePTqW74j14BG9W5f_8EaKANok=|1693715281',
        '__snaker__id': 'YHfO18AkA71dogA5',
        'gdxidpyhxdE': 'AtoxXxauZER%2BG%2B8eBvz7rd6jVfgsmgOKWsHkBSKmB1HJ0K6MERGC8bQa4KV25iRoS0WNu0IDE%5CO0quIMHrjJWlV8fdERZ4URp%2BG2o%2FuLOsMTwH%2FGR3SzaVSoJAMp2mBMw2iiGGXXuw88Wsdhv%5CLttHWfYK7G1yLAoXeCxOqaECbMPa%2BI%3A1693716315598',
        'YD00517437729195%3AWM_NI': 'io73ueHk3Q3l8UNtBtqJdgNI0b5YfI3fNGmz%2B95fEKopZ%2B0Q0qgoKARvEtKzyX3J1zrqeRTmhvBm8ZgXSjrzXccEZ5yeSzAFc72kZpaWFyAf71JguxvVxUIiXNqs9ihCVm0%3D',
        'YD00517437729195%3AWM_NIKE': '9ca17ae2e6ffcda170e2e6ee97d854b59cbbd8d153e98e8eb7d55e869e8b86c43981ba89aae16db0bf8d9bb52af0fea7c3b92aabb1f9d4f86f8cb5fdb2b268fc8b8295c180b396ac88cd43f4befbbae543f1ba82a8f072e9e7fb87c841adb096ccb35bf4afa990ca4b92aa8b95ca72bb88fdabb472b2afabb3d767acaa8e8ebb52a5889d8bf1729cbdada6d93fbbbb9d9bc44ea1e9fe8cd97ca3898a9ac46ef5ef8688f874b68ab8b6cc639c92bf94bc63ac9d9a8eb337e2a3',
        'YD00517437729195%3AWM_TID': 'ipGeWCwk4eRAEQQBVEbAlgSvBn%2Flj7C1',
        'q_c1': '4348cc824cc0490d94bb144e4a13e3e2|1693715480000|1693715480000',
        'captcha_session_v2': '2|1:0|10:1693715557|18:captcha_session_v2|88:ZHpFWEdCSzV1YWZlaGk3WDhUSHdIYmpZQTV0Z29vNUVOWGx3ZHFiTXF5ekdLTUFkbU9RTTFWYnN5Q2M2TVo3UQ==|c7e6930044deee267ffc8256c8d30c21cdf05d24d80898c559fcc120aeec50b1',
        'captcha_ticket_v2': '2|1:0|10:1693715560|17:captcha_ticket_v2|704:eyJ2YWxpZGF0ZSI6IkNOMzFfNTVNTnhSZjFpdVlzX3hxMG5MRk5jLXZjVWFESUdKN3FYcmlWcG0yRFhXelJWWE1qSmFDODh1LkRDU3p6ZVpwWm9IUk9vdXZBbGc4aUVWMnU4aGdmdi1qd0l5eTBPSk9QY0lxeGZKN0hQZ0xoMTZKRzJuZVZqczI5RldOVHV0T1Z0S1hzWjhfb2ZneGp2TXdBa3NRU2FLcjVhUVJoTGlYeExRZ21hTjUuamFPeWhoV25vLnBvX0NiVnVGRmd1Z2haZFRwenF3WjkwbXJCVFlwbUQ3bm1IOHJCMDVQbnV5dUZKZWdpTE5fUVcyeG5lcHVqNGJfNjg2UnI0aDVvaDJiNzJLWlZyZnY3bWVKSWcuTnRueWhhUXlWLTY3VjYwT0hBamouS0ROWUg3bk9kNWt3a2F4cmNHZzZVWDhGWTBBanhXa2Q4NEdxdlVNY3dlMFN2LmxBSEpuWGpILS5BWVFmSWpCN21Jcll2d1lNRExpVDd3bVBpOURXdFh1bXpoQTRKd0JCeWpubzJaVEliaFpkb1NRbEhpQVpnbGwtY1ZIVnJ6ZWh1RkhvYWs5QXM2dVU4eHBKZjYxVzFLVkd5YXkyV1ZKZGx1bmk0VHp4ZHdoMFdVbTd6Ym1HSi5rTmZXWnZGTXZMTXprcUFCTm5mV19ZSEtrVGV2bzdvVVhyMyJ9|906b6f9e9d976d518d13c6a86ae81f25e47a6d6b813c0f3db6afb2c0ea5d335b',
        'z_c0': '2|1:0|10:1693786949|4:z_c0|92:Mi4xVXBSQUxnQUFBQUFBY05TYnVHWldGeVlBQUFCZ0FsVk5hRnJoWlFBLVh4LTFTR21PNGFqblk0cUxjLVBjVWVZaXBn|ca1424e31925f475169a85c8124a8ae2fd4c1df4d92abc64f64ff45e1ad877e1',
        '_xsrf': 'rzebquZotRAaPHPp0de1mViWLRuhM1NK',
        'Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49': '1693109110,1693715281,1693786948,1693795031',
        'SESSIONID': 'Ojw47roilYUkcjBStf7H6tWyXXizMT30kO8qGeVzY2m',
        'JOID': 'Wl0dAkvOu1L_OHp1H8dui1usqnMIjNwsygcFF3-q7wqdWhg6QRf9r5I9enEX8tEYlJVQAhpjnUozUlBd1ocjZVg=',
        'osd': 'W1EQBU_Pt1_4PHt5EsBqilehrXcJgNErzgYJGniu7gaQXRw7TRr6q5Mxd3YT890Vk5FRDhdkmUs_X1dZ14suYlw=',
        'Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49': '1693795035',
        'KLBRSID': '975d56862ba86eb589d21e89c8d1e74e|1693795062|1693795031',
        'tst': 'r',
    }
    headers = {
        'authority': 'www.zhihu.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        # 'cookie': '_zap=ee6ef14e-c5db-4965-9499-ff61ae08fadb; d_c0=AHDUm7hmVhePTqW74j14BG9W5f_8EaKANok=|1693715281; __snaker__id=YHfO18AkA71dogA5; gdxidpyhxdE=AtoxXxauZER%2BG%2B8eBvz7rd6jVfgsmgOKWsHkBSKmB1HJ0K6MERGC8bQa4KV25iRoS0WNu0IDE%5CO0quIMHrjJWlV8fdERZ4URp%2BG2o%2FuLOsMTwH%2FGR3SzaVSoJAMp2mBMw2iiGGXXuw88Wsdhv%5CLttHWfYK7G1yLAoXeCxOqaECbMPa%2BI%3A1693716315598; YD00517437729195%3AWM_NI=io73ueHk3Q3l8UNtBtqJdgNI0b5YfI3fNGmz%2B95fEKopZ%2B0Q0qgoKARvEtKzyX3J1zrqeRTmhvBm8ZgXSjrzXccEZ5yeSzAFc72kZpaWFyAf71JguxvVxUIiXNqs9ihCVm0%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee97d854b59cbbd8d153e98e8eb7d55e869e8b86c43981ba89aae16db0bf8d9bb52af0fea7c3b92aabb1f9d4f86f8cb5fdb2b268fc8b8295c180b396ac88cd43f4befbbae543f1ba82a8f072e9e7fb87c841adb096ccb35bf4afa990ca4b92aa8b95ca72bb88fdabb472b2afabb3d767acaa8e8ebb52a5889d8bf1729cbdada6d93fbbbb9d9bc44ea1e9fe8cd97ca3898a9ac46ef5ef8688f874b68ab8b6cc639c92bf94bc63ac9d9a8eb337e2a3; YD00517437729195%3AWM_TID=ipGeWCwk4eRAEQQBVEbAlgSvBn%2Flj7C1; q_c1=4348cc824cc0490d94bb144e4a13e3e2|1693715480000|1693715480000; captcha_session_v2=2|1:0|10:1693715557|18:captcha_session_v2|88:ZHpFWEdCSzV1YWZlaGk3WDhUSHdIYmpZQTV0Z29vNUVOWGx3ZHFiTXF5ekdLTUFkbU9RTTFWYnN5Q2M2TVo3UQ==|c7e6930044deee267ffc8256c8d30c21cdf05d24d80898c559fcc120aeec50b1; captcha_ticket_v2=2|1:0|10:1693715560|17:captcha_ticket_v2|704:eyJ2YWxpZGF0ZSI6IkNOMzFfNTVNTnhSZjFpdVlzX3hxMG5MRk5jLXZjVWFESUdKN3FYcmlWcG0yRFhXelJWWE1qSmFDODh1LkRDU3p6ZVpwWm9IUk9vdXZBbGc4aUVWMnU4aGdmdi1qd0l5eTBPSk9QY0lxeGZKN0hQZ0xoMTZKRzJuZVZqczI5RldOVHV0T1Z0S1hzWjhfb2ZneGp2TXdBa3NRU2FLcjVhUVJoTGlYeExRZ21hTjUuamFPeWhoV25vLnBvX0NiVnVGRmd1Z2haZFRwenF3WjkwbXJCVFlwbUQ3bm1IOHJCMDVQbnV5dUZKZWdpTE5fUVcyeG5lcHVqNGJfNjg2UnI0aDVvaDJiNzJLWlZyZnY3bWVKSWcuTnRueWhhUXlWLTY3VjYwT0hBamouS0ROWUg3bk9kNWt3a2F4cmNHZzZVWDhGWTBBanhXa2Q4NEdxdlVNY3dlMFN2LmxBSEpuWGpILS5BWVFmSWpCN21Jcll2d1lNRExpVDd3bVBpOURXdFh1bXpoQTRKd0JCeWpubzJaVEliaFpkb1NRbEhpQVpnbGwtY1ZIVnJ6ZWh1RkhvYWs5QXM2dVU4eHBKZjYxVzFLVkd5YXkyV1ZKZGx1bmk0VHp4ZHdoMFdVbTd6Ym1HSi5rTmZXWnZGTXZMTXprcUFCTm5mV19ZSEtrVGV2bzdvVVhyMyJ9|906b6f9e9d976d518d13c6a86ae81f25e47a6d6b813c0f3db6afb2c0ea5d335b; z_c0=2|1:0|10:1693786949|4:z_c0|92:Mi4xVXBSQUxnQUFBQUFBY05TYnVHWldGeVlBQUFCZ0FsVk5hRnJoWlFBLVh4LTFTR21PNGFqblk0cUxjLVBjVWVZaXBn|ca1424e31925f475169a85c8124a8ae2fd4c1df4d92abc64f64ff45e1ad877e1; _xsrf=rzebquZotRAaPHPp0de1mViWLRuhM1NK; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1693109110,1693715281,1693786948,1693795031; SESSIONID=Ojw47roilYUkcjBStf7H6tWyXXizMT30kO8qGeVzY2m; JOID=Wl0dAkvOu1L_OHp1H8dui1usqnMIjNwsygcFF3-q7wqdWhg6QRf9r5I9enEX8tEYlJVQAhpjnUozUlBd1ocjZVg=; osd=W1EQBU_Pt1_4PHt5EsBqilehrXcJgNErzgYJGniu7gaQXRw7TRr6q5Mxd3YT890Vk5FRDhdkmUs_X1dZ14suYlw=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1693795035; KLBRSID=975d56862ba86eb589d21e89c8d1e74e|1693795062|1693795031; tst=r',
        'pragma': 'no-cache',
        'referer': 'https://www.zhihu.com/',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'x-ab-param': '',
        'x-ab-pb': 'CgInBxIBAA==',
        'x-api-version': '3.0.53',
        'x-requested-with': 'fetch',
        'x-zse-93': '101_3_3.0',
        'x-zse-96': js.call('main_', page, aid, session_token)
    }

    params = {
        'action': 'down',
        'ad_interval': '-10',
        'after_id': aid,
        'desktop': 'true',
        'page_number':page,
        'session_token': session_token,
    }

    response = requests.get('https://www.zhihu.com/api/v3/feed/topstory/recommend', params=params, cookies=cookies,
                            headers=headers)
    print(response.text)
    print(response)

get_('b8fbaaff542c7b557679b4bcc8ac3451','3','11')