import re
from Spider_Toolkit import spidertools
import requests
from lxml import etree
js=spidertools.open_js('1.js')

def get_number_of_episodes(url):
    res=requests.get(url).text
    html=etree.HTML(res)
    episodes_=html.xpath(r'//*[@id="playlist1"]/ul/li/a/@href')
    episodes=['https://www.vdm8.com/'+u for u in episodes_]
    return episodes

def get_video_url(url):
    res=requests.get(url).text
    url=re.findall('"url":"(.*?)"',res)[1]
    url='https://danmu.yhdmjx.com/m3u8.php?url='+url
    res=requests.get(url).text
    data=re.findall('getVideoInfo\("(.*?)"\)',res)[0]
    token=re.findall('bt_token = "(.*?)"',res)[0]
    return js.call('main_',data,token)

if __name__ == '__main__':
    url_list=get_number_of_episodes('https://www.vdm8.com/video/1307.html')
    for i in range(len(url_list)):
        print('正在下载第{}集'.format(i+1))
        spidertools.donwload_byte_function(url=get_video_url(url_list[i]),type_='mp4',name=str(i+1),path_='./进击的巨人/')
