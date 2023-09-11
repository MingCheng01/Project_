import execjs

with open('sign.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
js = ''.join(lines)
js_context = execjs.get().compile(js)
ret = js_context.call('get_sign', *[
        '13666666666',
        'b2fb430c18d4607a286d3fd3885db732',
        '000000cabf2f4f37bbb10c358b865c4s',
        '1X_RK3ag_IKlW15iHhSywQ==',
        '2cc051e0c885a08dd046f1a789cffa72eddfc266f663cb2ded1ac08a6102bfe9',
        '1686646512',
])
print(ret)