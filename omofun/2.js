function rc4(data, key, t) {
    var pwd = key || 'ffsirllq';
    var cipher = '';
    var key = [];
    var box = [];
    var pwd_length = pwd.length;
    if (t == 1) {
        var data = atob(data);
    } else {
        var data = encodeURIComponent(data);
    }


    var data_length = data.length;

    for (i = 0; i < 256; i++) {
        key[i] = pwd[i % pwd_length].charCodeAt();
        box[i] = i;
    }
    for (j = i = 0; i < 256; i++) {
        j = (j + box[i] + key[i]) % 256;
        tmp = box[i];
        box[i] = box[j];
        box[j] = tmp;
    }
    for (a = j = i = 0; i < data_length; i++) {
        a = (a + 1) % 256;
        j = (j + box[a]) % 256;
        tmp = box[a];
        box[a] = box[j];
        box[j] = tmp;
        k = box[((box[a] + box[j]) % 256)];
        cipher += String.fromCharCode(data[i].charCodeAt() ^ k);
    }
    if (t == 1) {
        return decodeURIComponent(cipher);
    } else {
        return btoa(cipher);
    }
}

url="xyBFZVsjOoCXIN0GDoY12NmggwecpYCAHjhOmBq2bM0h+Q9/2w9u1LJaqIY9q6mDrGG1dEDccij84it9bY0="
console.log(rc4(url, '202205051426239465', 1));
