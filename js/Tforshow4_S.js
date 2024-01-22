
if (station == '広島駅' && Indexfile == 'index4_S2.php') {
    JRNameDevide(2);
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            console.log(Type[td][tr]);
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'ひかり') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '16両編成';
            } else if (Type[td][tr] != '') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '8両編成';
            }
        }
    }
    
} else if (JRShinkansenflag==1) {
    JRNameDevide(2);
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'ひかり') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '16両';
            } else if (Type[td][tr] != '') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = '8両';
            }
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'さくら' || Type[td][tr] == 'みずほ') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1)).textContent = '1-3号車';
            } else if (Type[td][tr] == 'ひかり') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1)).textContent = '1-5号車';
            } else if (Type[td][tr] != '') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1)).textContent = '1-3,7,8号車';
            }
        }
    }

}