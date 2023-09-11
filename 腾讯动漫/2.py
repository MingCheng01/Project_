import re

d='''<script>
        window["no"+"nce"] = "d1da4cba3" + (+eval("1/2 + 5/2")).toString() + "37" + (+eval("4 + !!!1")).toString() + "4395da357e" + (+eval("1 * (!window.Array) + 1")).toString() + (+eval("parseInt(7/3)")).toString() + "0f7" + (+eval("!1")).toString() + "a5b";
    </script>'''

print(re.findall(r'window(.*?);', d))