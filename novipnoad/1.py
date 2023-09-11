s='''<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" oncontextmenu="return false">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="dns-prefetch" href="//enc-vod.oss-internal.novipnoad.net/" />
<link rel="dns-prefetch" href="//media.oss-internal.novipnoad.net/" />
<link rel="dns-prefetch" href="//danmaku.oss-internal.novipnoad.net/" />
<link rel="dns-prefetch" href="//open.novipnoad.net/" />
<title>NO视频</title>
<style type="text/css">
*{font-family:"PingFang SC",Arial,"Microsoft Yahei";}
html,body,#loading,#player,#error{padding:0;margin:0;width:100%;height:100%;color:#aaa;background-color:black;}
#loading{background:url(/image/load.gif) 50% 50% no-repeat;transform:scale(0.8)}
#error{background:url(/image/bg_404.png) 50% 50% no-repeat;}
#errotl{padding-top:90px;}
#errotl a{color:#fff;text-decoration:blink;}
.failed{background:url(/image/sad.png) 50% 50% no-repeat !important;}
@media(max-width:768px){#error,.failed{background-size:30%!important;}#errotl{padding-top:25px;}}
</style>
<script type="text/javascript" src="/js/jquery.min.js?v=3.3.1_0619"></script>
</head>
<body style="overflow:hidden;">
<div id="loading" align="center"></div>
<div id="player" style="display:none;"></div>
<div id="error" align="center" style="display:none;"></div>
<script type="text/javascript">
/*-- 关闭loading动画，childNode中可调用 --*/
function showthis() {
    $('#loading').hide();
	$('#player').show();
}

/*-- 加载播放器 --*/
function player() {
    __()
    // 请求参数
    const player = '/v1/player.php';
    //
    var params = [];
    params['id'] = 'ali-1688628750';
    params['danmakuId'] = '';
    params['fansub'] = '';
    params['device'] = '28e1a12a44242d9e64b38ea3';
    params['disable_danmaku'] = '';
    params['refuse_danmaku'] = '';
    var qs = [];
    for (var key in params) {
        if (params[key]) {
            qs.push(key + '=' + params[key]);
        }
    }
    //
    const url = player + '?' + qs.join('&');
    // 加载播放页框架
    document.getElementById('player').innerHTML = '<iframe src="' + url + '" width="100%" height="100%" allowTransparency="true" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>';
    // 外部播放页显示Loading动画
    if (url.indexOf('player.php') == -1) {
        setTimeout(function () {
            $('#loading').hide();
            $('#player').show();
        }, 2500);
    }
}

/*-- 是否启用地区限制 --*/
const regionLock = 0; // 1：启用，0：关闭
const regions = '';
//
if (regionLock === 0 || !regions) {
    player()
} else {
    $.getScript('//open.novipnoad.net/api/geoip.js').then(function () {
        var customRule = ipLocation.region && (ipLocation.region.match(eval('/' + regions + '/i')) != null);
        if (!customRule) {
            player() // pass
        } else {
            setTimeout(function () {
                $('#loading').hide();
                $('#error').addClass('failed');
                $('#error').html('<div id="errotl">此视频无法在您所在的国家/地区播放！</div>');
                $('#error').fadeIn('slow');
            }, 1500)
        }
    })
}

/*-- 浏览器完整性检查 --*/
function __(){
    var _0xc10e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe13c(d,e,f){var g=_0xc10e[2][_0xc10e[1]](_0xc10e[0]);var h=g[_0xc10e[3]](0,e);var i=g[_0xc10e[3]](0,f);var j=d[_0xc10e[1]](_0xc10e[0])[_0xc10e[10]]()[_0xc10e[9]](function(a,b,c){if(h[_0xc10e[4]](b)!==-1)return a+=h[_0xc10e[4]](b)*(Math[_0xc10e[8]](e,c))},0);var k=_0xc10e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc10e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe13c(s,e,10)-t)}return decodeURIComponent(escape(r))}("ksmRkmmRkmCRkAsRkkARksmRCdRkkTRkATRkkTRkkTRkmmRkkARkmCRmdARkkdRkkARkksRkAARkACRkATRCdRkkTRkATRkkdRmsTRkkdRkATRkmdRdCRddRksARkmsRkATRkssRddRCsRmsdRmdARmTsRmTkRCdRkkTRkkdRkksRkmmRkmCRkACRkmmRkAdRkssRdCRksdRkAkRkmsRkATRkssRmmsRddRmmmRmAARmmkRkAmRkAmRkATRmAmRmmARmACRmmmRkAkRmACRmAdRkAkRmAdRmAmRkAmRkAmRkAmRkATRkAkRmACRmAARkAsRmmmRkAdRkAdRmAmRmAdRmACRmAkRmAARmmmRkAARmACRmAARmmmRmmkRkAdRmmmRddRCsRkksRkATRkAdRmmsRddRCCRkmdRkkARksARkmmRkATRCCRmAmRmATRmAmRmATRmACRmAmRCdRkmARkkdRkmdRkmTRddRCsRkmmRkkmRmmsRddRmAsRmmkRCdRmmARmAdRCdRmAmRmACRmAsRCdRmACRmAmRddRCsRkkdRkmmRkmdRkATRmmsRddRmAmRmACRmmmRmmkRmATRmmmRmmkRmAARmAdRmmkRddRkTARCARCARmmTR",38,"AmksTdCRM",1,7,39))
}
</script>
</body>
</html>'''


import re

print(re.findall('\("(.*?)\)\)',s)[0].split(','))