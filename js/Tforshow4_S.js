
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
            if (Type[td][tr] != '' && station == '博多駅' && tr < 2) {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = '停車駅';
            }
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'ひかり') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '16両編成';
            } else if (Type[td][tr].includes('*')) {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '6両編成';
            } else if (Type[td][tr] == 'かがやき' || Type[td][tr] == 'はくたか' || Type[td][tr] == 'つるぎ') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '12両編成';
            } else if (Type[td][tr] != '') {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '8両編成';
            }
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
    flagmarkerase(1, 'TType', '*');
    Bansenshow(1, 2);
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
if (station == '博多駅') {
    staflag = 0;
    Dtype = [1, 0];
    for (var td = 0; td < TablenumSub; td++) {
        for (var tr = 0; tr < 2; tr++) {
            FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
            if (Type[td][tr] == 'こだま') {
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '各駅にとまります';
            }
            if (Des[td][tr] == '小倉') {
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '小倉までとまりません';
            }
            DetailBanner(td, tr, 25);
            LastLetterRemove(td, tr, '・');
        }
    }
    for (var tr = 0; tr < 2; tr++) {
        DetailReplace_Set(0, tr, N_Yamaguchi2, '小倉', '小倉・新山口');
        DetailReplace_Set(0, tr, M_Fukuyama2, '広島', '広島・福山');
        DetailReplace_Set(1, tr, S_Yatsushiro1, '川内', '新八代・新水俣・出水・川内');
        DetailReplace_Set(0, tr, S_Shimonoseki, '広島', '新下関・広島');
        DetailReplace_Set(0, tr, S_Yamaguchi2, '広島', '新山口・広島');
        DetailReplace_Set(0, tr, S_Tokuyama2, '広島', '徳山・広島');
        DetailReplace_Set(0, tr, S_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, N_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, M_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, N_Fukuyama2, '岡山', '福山・岡山');
    }
    console.log(number);
}
