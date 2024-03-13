
if (Indexfile == 'index4_S2.php' || Indexfile == 'index4_Tsuruga.php') {
    var TablenumSub = Tablenum;
    if (station == '敦賀駅') {
        TablenumSub = 1
        JRNameDevide(2);
    } else {
        JRNameDevide();
    }
    for (var td = 0; td < TablenumSub; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            console.log(Type[td][tr]);
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'ひかり') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '16両編成';
            } else if (Type[td][tr].includes('*')) {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '6両編成';
            } else if (Type[td][tr] == 'かがやき' || Type[td][tr] == 'はくたか' || Type[td][tr] == 'つるぎ') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '12両編成';
            } else if (Type[td][tr] != '') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '8両編成';
            }
        }
    }
    flagmarkerase(1, 'TType', '*');
    Bansenshow(1, 2);
    if (station == '博多駅') {
        document.getElementById('supplement').textContent += ' 2024年3月16日以降';
    }
    if (station != '敦賀駅') {
        allJRSSColor();
    }
} else if (JRShinkansenflag == 1) {
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