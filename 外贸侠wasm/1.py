import pywasm
#https://www.waimaoxia.net/login
vm = pywasm.load("./main.wasm") # 加载wasm文件
result = vm.exec('encode',[1,2])
print(result)