import pywasm


def get_sign():
    vm = pywasm.load("./105431905475.wasm")
    # 执行加密
    sign = vm.exec("encrypt", ['{"domain":"jx.jsonplayer.com","url":"https://v.qq.com/x/cover/mzc0020027yzd9e/u004666xmlf.html","referrer":"jx.jsonplayer.com","s":0,"f":0}'])
    print(sign)
get_sign()