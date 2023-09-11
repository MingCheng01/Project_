function decode_(t) {
    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    f = /[\t\n\f\r ]/g
    var e = (t = String(t).replace(f, "")).length;

    e % 4 === 0 && (e = (t = t.replace(/==?$/, "")).length)
    for (var n, r, i = 0, o = "", a = -1; ++a < e;)
        r = c.indexOf(t.charAt(a)),
        n = i % 4 ? 64 * n + r : r,
        i++ % 4 && (o += String.fromCharCode(255 & n >> (-2 * i & 6)));
    return o
}
function o(e, t, i, n, a, o) {
            var s, c, r, l, d, u, h, p, f, m, v, g, y, b, C = new Array(16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756), _ = new Array(-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344), w = new Array(520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584), k = new Array(8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928), x = new Array(256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080), T = new Array(536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312), A = new Array(2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154), N = new Array(268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696), $ = function(e) {
                for (var t, i, n, a = new Array(0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964), o = new Array(0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697), s = new Array(0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272), c = new Array(0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144), r = new Array(0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256), l = new Array(0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488), d = new Array(0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746), u = new Array(0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568), h = new Array(0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578), p = new Array(0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488), f = new Array(0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800), m = new Array(0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744), v = new Array(0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128), g = new Array(0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261), y = e.length > 8 ? 3 : 1, b = new Array(32 * y), C = new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0), _ = 0, w = 0, k = 0; k < y; k++) {
                    var x = e.charCodeAt(_++) << 24 | e.charCodeAt(_++) << 16 | e.charCodeAt(_++) << 8 | e.charCodeAt(_++)
                      , T = e.charCodeAt(_++) << 24 | e.charCodeAt(_++) << 16 | e.charCodeAt(_++) << 8 | e.charCodeAt(_++);
                    x ^= (n = 252645135 & (x >>> 4 ^ T)) << 4,
                    x ^= n = 65535 & ((T ^= n) >>> -16 ^ x),
                    x ^= (n = 858993459 & (x >>> 2 ^ (T ^= n << -16))) << 2,
                    x ^= n = 65535 & ((T ^= n) >>> -16 ^ x),
                    x ^= (n = 1431655765 & (x >>> 1 ^ (T ^= n << -16))) << 1,
                    x ^= n = 16711935 & ((T ^= n) >>> 8 ^ x),
                    n = (x ^= (n = 1431655765 & (x >>> 1 ^ (T ^= n << 8))) << 1) << 8 | (T ^= n) >>> 20 & 240,
                    x = T << 24 | T << 8 & 16711680 | T >>> 8 & 65280 | T >>> 24 & 240,
                    T = n;
                    for (var A = 0; A < C.length; A++)
                        C[A] ? (x = x << 2 | x >>> 26,
                        T = T << 2 | T >>> 26) : (x = x << 1 | x >>> 27,
                        T = T << 1 | T >>> 27),
                        T &= -15,
                        t = a[(x &= -15) >>> 28] | o[x >>> 24 & 15] | s[x >>> 20 & 15] | c[x >>> 16 & 15] | r[x >>> 12 & 15] | l[x >>> 8 & 15] | d[x >>> 4 & 15],
                        i = u[T >>> 28] | h[T >>> 24 & 15] | p[T >>> 20 & 15] | f[T >>> 16 & 15] | m[T >>> 12 & 15] | v[T >>> 8 & 15] | g[T >>> 4 & 15],
                        n = 65535 & (i >>> 16 ^ t),
                        b[w++] = t ^ n,
                        b[w++] = i ^ n << 16
                }
                return b
            }(e), L = 0, S = t.length, z = 0, B = 32 == $.length ? 3 : 9;
            p = 3 == B ? i ? new Array(0,32,2) : new Array(30,-2,-2) : i ? new Array(0,32,2,62,30,-2,64,96,2) : new Array(94,62,-2,32,64,2,30,-2,-2),
            2 == o ? t += "        " : 1 == o ? i && (r = 8 - S % 8,
            t += String.fromCharCode(r, r, r, r, r, r, r, r),
            8 === r && (S += 8)) : o || (t += "\0\0\0\0\0\0\0\0");
            var j = ""
              , I = "";
            for (1 == n && (f = a.charCodeAt(L++) << 24 | a.charCodeAt(L++) << 16 | a.charCodeAt(L++) << 8 | a.charCodeAt(L++),
            v = a.charCodeAt(L++) << 24 | a.charCodeAt(L++) << 16 | a.charCodeAt(L++) << 8 | a.charCodeAt(L++),
            L = 0); L < S; ) {
                for (u = t.charCodeAt(L++) << 24 | t.charCodeAt(L++) << 16 | t.charCodeAt(L++) << 8 | t.charCodeAt(L++),
                h = t.charCodeAt(L++) << 24 | t.charCodeAt(L++) << 16 | t.charCodeAt(L++) << 8 | t.charCodeAt(L++),
                1 == n && (i ? (u ^= f,
                h ^= v) : (m = f,
                g = v,
                f = u,
                v = h)),
                u ^= (r = 252645135 & (u >>> 4 ^ h)) << 4,
                u ^= (r = 65535 & (u >>> 16 ^ (h ^= r))) << 16,
                u ^= r = 858993459 & ((h ^= r) >>> 2 ^ u),
                u ^= r = 16711935 & ((h ^= r << 2) >>> 8 ^ u),
                u = (u ^= (r = 1431655765 & (u >>> 1 ^ (h ^= r << 8))) << 1) << 1 | u >>> 31,
                h = (h ^= r) << 1 | h >>> 31,
                c = 0; c < B; c += 3) {
                    for (y = p[c + 1],
                    b = p[c + 2],
                    s = p[c]; s != y; s += b)
                        l = h ^ $[s],
                        d = (h >>> 4 | h << 28) ^ $[s + 1],
                        r = u,
                        u = h,
                        h = r ^ (_[l >>> 24 & 63] | k[l >>> 16 & 63] | T[l >>> 8 & 63] | N[63 & l] | C[d >>> 24 & 63] | w[d >>> 16 & 63] | x[d >>> 8 & 63] | A[63 & d]);
                    r = u,
                    u = h,
                    h = r
                }
                h = h >>> 1 | h << 31,
                h ^= r = 1431655765 & ((u = u >>> 1 | u << 31) >>> 1 ^ h),
                h ^= (r = 16711935 & (h >>> 8 ^ (u ^= r << 1))) << 8,
                h ^= (r = 858993459 & (h >>> 2 ^ (u ^= r))) << 2,
                h ^= r = 65535 & ((u ^= r) >>> 16 ^ h),
                h ^= r = 252645135 & ((u ^= r << 16) >>> 4 ^ h),
                u ^= r << 4,
                1 == n && (i ? (f = u,
                v = h) : (u ^= m,
                h ^= g)),
                I += String.fromCharCode(u >>> 24, u >>> 16 & 255, u >>> 8 & 255, 255 & u, h >>> 24, h >>> 16 & 255, h >>> 8 & 255, 255 & h),
                512 == (z += 8) && (j += I,
                I = "",
                z = 0)
            }
            if (j = (j += I).replace(/\0*$/g, ""),
            !i) {
                if (1 === o) {
                    var F = 0;
                    (S = j.length) && (F = j.charCodeAt(S - 1)),
                    F <= 8 && (j = j.substring(0, S - F))
                }
                j = decodeURIComponent(escape(j))
            }
            return j
        }
e = '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'
console.log(JSON.parse(o("5e5062e82f15fe4ca9d24bc5", decode_(e), 0, 0, "012345677890123", 1)));