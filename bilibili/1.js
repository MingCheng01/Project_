const Crypto = require('crypto-js')

function getMixinKey(ye) {
    var Ve = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52]
        , Ge = [];
    return Ve.forEach(function (We) {
        ye.charAt(We) && Ge.push(ye.charAt(We))
    }),
        Ge.join("").slice(0, 32)
}

function main_(page,Xe) {
    We = '7cd084941338484aae1ad9425b84077c'
    Ye = '4932caff0ff746eab6f01bf08b70ac45'
    qe = getMixinKey(We+Ye)
    at = [
        "brush=0",
        "feed_version=V8",
        "fetch_row=1",
        "fresh_idx=1",
        "fresh_idx_1h=1",
        "fresh_type=3",
        "homepage_ver=1",
        "last_showlist=av_320497118%2Cav_275536455%2Cav_447913137%2Cav_617195384%2Cav_617003188%2Cad_5614%2Cav_n_957529375%2Cav_n_317633388%2Cav_n_447677392%2Cav_n_999924000%3Bav_362947626%2Cav_320292439%2Cav_787649458%2Cav_787957384%2Cav_489693188%2Cav_232283523%2Cad_5614%2Cav_n_702886819%2Cav_n_490184556%2Cav_n_701504157%3Bav_745043773%2Cav_958056934%2Cav_274856019%2Cav_447720924%2Cad_5614%2Cav_362908518%2Cav_n_362138528%2Cav_n_320470183%2Cav_n_659926172%2Cav_n_362657927%3Bav_405142689%2Cav_231919466%2Cav_617224685%2Cav_405156437%2Cad_5614%2Cav_872438931%2Cav_n_232886696%2Cav_n_362842855%2Cav_n_405572408%2Cav_n_447182963%3Bav_359780149%2Cav_744909762%2Cav_915268910%2Cav_233062392%2Cav_232823502%2Cad_5614%2Cav_n_915301148%2Cav_n_405407617%2Cav_n_659714960%2Cav_n_532862666%3Bav_490480437%2Cav_232142872%2Cav_359702105%2Cav_660456456%2Cad_5614%2Cav_702024883%2Cav_n_913782056%2Cav_n_702416755%2Cav_n_999738721%2Cav_n_490187459",
        "last_y_num=5",
        "ps=10",
        "screen=1463-751",
        "seo_info=",
        "uniq_id=1233952935841",
        "web_location=1430650",
        "wts=" + Xe.toString(),
        "y_num=" + page
    ]
    pt = at.join("&")
    return Crypto.MD5(pt + qe).toString()
}

// console.log(main_(1, 123123123));