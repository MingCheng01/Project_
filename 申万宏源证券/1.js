const crypto = require('crypto-js')
function a (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , r = void 0 !== n ? 'rewin-swhysc1234' + n :'rewin-swhysc1234'
        , i = crypto.enc.Utf8.parse(r)
        , o = crypto.AES.decrypt(t, i, {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7
    });
    return crypto.enc.Utf8.stringify(o).toString()
}
t='K0FWJlJJ7hojwG3yOTA/NshaO9jUNRiTzZsxTWdFMAY/ZG/OkUckgKlcCVSiPWYBi6Yi4iybde/w2M8QYRwKX81MzrCIP/+G4UiTrXXn+jIXAkTBQpv/XOuBpHoL4EoIoXoh8apONXvYmaluqg9ohv/6P3S3C+f4IwlMG5JMFjEiTytavSBMBkY4UYeFwZ1dLcj7D3QscGTDa0vSSto0fdl5pHdcUKamH4fj+pV3hvUYGMRsFEjOlNwiDQyNE7+mw3RjHlPLDf0QqQ4vYmzjVcYwOLrUuuIQE9BxZfXUam21rNWsQz1fxnK524KfWUEYIk8rWr0gTAZGOFGHhcGdXS3I+w90LHBkw2tL0kraNH3ZeaR3XFCmph+H4/qVd4b1ryd+rmcBg8Fry1AqmP3I6SBdr9B3w68UqiW/1W4KyOXGMDi61LriEBPQcWX11GpttazVrEM9X8ZyuduCn1lBGCJPK1q9IEwGRjhRh4XBnV0tyPsPdCxwZMNrS9JK2jR92Xmkd1xQpqYfh+P6lXeG9VwQT95vRv4nihSfkYCDckG9zpfkI04WeSlZhBbny53kxjA4utS64hAT0HFl9dRqbbWs1axDPV/Gcrnbgp9ZQRgiTytavSBMBkY4UYeFwZ1dLcj7D3QscGTDa0vSSto0fdl5pHdcUKamH4fj+pV3hvUTpPLgRtF6t1X5WPI2u0sVhK4Ohymq4Gbm+bXzrQGdCS6StAE3iUOZoU5+rKO2J8JGRDGCVkstrI5TfsE/ammvuE1di4wFbVcPYKY4pjYRXJO8y9po5cgpY0WLHdm9k0kGXtK2tu6o14wc5jdKy3u7GbyE7s/55zMlLcQjjlrdmT37BpSS/pyi+4RSgZrHGsIukrQBN4lDmaFOfqyjtifCRkQxglZLLayOU37BP2ppr7hNXYuMBW1XD2CmOKY2EVyTvMvaaOXIKWNFix3ZvZNJl34fheIJyB0/Ys39358rY4ziLHd6yBPN3sWcwFPuJhNHXWwmpKtpSsVHE7MIcBexLpK0ATeJQ5mhTn6so7YnwkZEMYJWSy2sjlN+wT9qaa+4TV2LjAVtVw9gpjimNhFck7zL2mjlyCljRYsd2b2TSZTBH0+k61yB8fEyP1Ar43QRTxClVHs/lwRGoewrjwdyd+68kPYtCsg3H1xJRHRaIS6StAE3iUOZoU5+rKO2J8JGRDGCVkstrI5TfsE/ammvuE1di4wFbVcPYKY4pjYRXJO8y9po5cgpY0WLHdm9k0k3nrsiE6JKFxPRZ0mjwAhsv0L5knjiHBa1xoaVQ6ZYCjIduk9bB10D2Hp8EN8fVTEukrQBN4lDmaFOfqyjtifCRkQxglZLLayOU37BP2ppr7hNXYuMBW1XD2CmOKY2EVyTvMvaaOXIKWNFix3ZvZNJjRZ2uSXm9cFfZMu+PzGRPRFPEKVUez+XBEah7CuPB3Kq5WgCa+1s17Pj2dPkz2GELpK0ATeJQ5mhTn6so7YnwkZEMYJWSy2sjlN+wT9qaa+4TV2LjAVtVw9gpjimNhFck7zL2mjlyCljRYsd2b2TSRKuW2Wzs83h1URCuCQwDl0RTxClVHs/lwRGoewrjwdyJ5DpyyydRTPIsQ9y99EGkQW7h3LS2EuQwzjMXvqnHpNB9EFpEHIo3J9SK/mLDMeGNG26UA45hPfv9AsepP0GHo7Chg09/OMM3yFqcdGuOT4='
console.log(a(t));