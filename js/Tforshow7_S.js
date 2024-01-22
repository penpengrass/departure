JRNameDevide();

for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][tr] == 'ひかり') {
            document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-5号車';
        } else if (Type[td][tr] != '') {
            document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-7,13-15号車';
        }
    }
}
