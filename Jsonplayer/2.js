function i1IliilI(iiii1lII) {

    var IIIli1I = document["createElement"]("canvas")
        , lI1IiIIl = IIIli1I["getContext"]("2d")
        , lllIiI1l = iiii1lII;
    lI1IiIIl["textBaseline"] = "top",
        lI1IiIIl["font"] = "14px 'Arial'",
        lI1IiIIl["textBaseline"] = "tencent",
        lI1IiIIl["fillStyle"] = "#f60",
        lI1IiIIl["fillRect"](125, 1, 62, 20),
        lI1IiIIl["fillStyle"] = "#069",
        lI1IiIIl["fillText"](lllIiI1l, 2, 15),
        lI1IiIIl["fillStyle"] = "rgba(102, 204, 0, 0.7)",
        lI1IiIIl["fillText"](lllIiI1l, 4, 17);
    var i111Ili1 = IIIli1I["toDataURL"]()["replace"]("data:image/png;base64,", "")
        , lIlI1l1 = atob(i111Ili1)["slice"](-16, -12) + ""
        , Ill1iII = "";
    for (var il1111l = 0; il1111l < lIlI1l1["length"]; il1111l++) {
        if ("FDcDw" === "RZnms") {
            var iIiiI1il = "";
            return iIiiI1il += "<meta content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\" id=\"viewport\" name=\"viewport\">",
                iIiiI1il += "<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/>",
                iIiiI1il += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=11\" />",
                iIiiI1il += "<meta http-equiv=\"Access-Control-Allow-Origin\" content=\"*\">",
                iIiiI1il += "<meta name=\"referrer\" content=\"never\" />",
                iIiiI1il += "<title></title>",
                iIiiI1il += "<link rel=\"dns-prefetch\" href=\"https://img.huxiucdn.com\">",
                iIiiI1il += "<link rel=\"dns-prefetch\" href=\"https://cdn.staticfile.org\">",
                iIiiI1il += "<link rel=\"shortcut icon\" href=\"https://img.huxiucdn.com/article/content/202307/13/105608612042.ico\" type=\"image/x-icon\" id=\"favicon\">",
                iIiiI1il;
        } else {
            var IIiIIlll = lIlI1l1["charCodeAt"](il1111l)["toString"](16);
            Ill1iII += IIiIIlll["length"] < 2 ? "0" + IIiIIlll : IIiIIlll;
        }
    }
    return Ill1iII;

}

console.log(i1IliilI())