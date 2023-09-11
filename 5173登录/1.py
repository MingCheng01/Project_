import hashlib
def hex_md5(s):
    m = hashlib.md5()
    m.update(str(s).encode("utf-8"))
    return m.hexdigest()
a='wpx5s1'
p='123'
p = hex_md5(hex_md5(p)[8:8 + 16] + a)
print(p)