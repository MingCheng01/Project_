function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ""
}
var token = getCookie("token");
var secret = parseInt(getCookie("secret"));
if (token == "" || secret == "") {
    setTimeout("location=location; ", 3000)
} else {
    var random = secret - 100;
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "secret=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "t=" + token + ";";
    document.cookie = "r=" + random + ";";
    window.location.reload(true)
}