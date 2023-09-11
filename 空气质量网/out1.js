var BASE64 = {
    encrypt: function (text) {
        words = CryptoJS.enc.Utf8.parse(text);
        base64 = CryptoJS.enc.Base64.stringify(words);
        return base64
    },
    decrypt: function (text) {
        words = CryptoJS.enc.Base64.parse(text);
        textString = CryptoJS.enc.Utf8.stringify(words);
        return textString
    }
};