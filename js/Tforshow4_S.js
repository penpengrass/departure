
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
            if (Type[td][tr] != '' && (station == '博多駅' || station == '岡山駅') && tr < 2) {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = '停車駅';
            }
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'のぞみ*' || Type[td][tr] == 'ひかり') {
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
    flagmarkerase(0, 'TType', '*');
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
            if (Type[td][tr] == 'こだま' || Type[td][tr].startsWith('つばめ')) {
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '各駅にとまります';
            }
            if (Des[td][tr] == '小倉') {
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '小倉までとまりません';
            }
            DetailBanner(td, tr, 25);
            LastLetterRemove(td, tr, '・');
            console.log(td + 1 + "番目の表の" + (tr + 1) + "番目の表示完了");
            Dtype = [1, 0];
        }
    }
    for (var tr = 0; tr < 2; tr++) {
        DetailReplace_Set(0, tr, N_Yamaguchi2, '小倉', '小倉・新山口');
        DetailReplace_Set(0, tr, M_Fukuyama2, '広島', '広島・福山');
        DetailReplace_Set(1, tr, M_Kurume1, '熊本', '久留米・熊本');
        DetailReplace_Set(1, tr, S_Yatsushiro1, '川内', '新八代・新水俣・出水・川内');
        DetailReplace_Set(1, tr, S_Tamana1, '久留米', '久留米・新玉名');
        DetailReplace_Set(1, tr, S_Omuta1, '久留米', '久留米・新大牟田');
        DetailReplace_Set(1, tr, S_Funakoya1, '久留米', '久留米・筑後船小屋');
        DetailReplace_Set(0, tr, S_Shimonoseki, '広島', '新下関・広島');
        DetailReplace_Set(0, tr, S_Yamaguchi2, '広島', '新山口・広島');
        DetailReplace_Set(0, tr, S_Tokuyama2, '広島', '徳山・広島');
        DetailReplace_Set(0, tr, S_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, N_Tokuyama2, '広島', '徳山・広島');
        DetailReplace_Set(0, tr, N_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, M_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, N_Fukuyama2, '岡山', '福山・岡山')
    }
    console.log(number);
} else if (station == '岡山駅') {
    staflag = 0;
    Dtype = [1, 0];
    for (var td = 0; td < TablenumSub; td++) {
        for (var tr = 0; tr < 2; tr++) {
            if(L_hour>20){
                JRSSobj.Typeb.detail =Sanyo_hikari;
            }
            FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
            let LDetail = document.getElementById('TDetail' + (td + 1) + (tr + 1));
            if (Type[td][tr] == 'こだま') {
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '各駅にとまります';
            }
            console.log(td + 1 + "番目の表の" + (tr + 1) + "番目の表示完了");
            //DetailBanner(td, tr, 25);
            LastLetterRemove(td, tr, '・');
            if (Type[td][tr].startsWith("のぞみ") && LDetail.textContent == "") {
                LDetail.textContent = Des[td][tr] + "まで止まりません";
            }
            Dtype = [1, 0];
        }
        JRSSobj.Typeb.detail = Sanyo_hikari;
    }
    for (var tr = 0; tr < 2; tr++) {
        DetailReplace_Set(0, tr, N_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, S_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, M_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, H_Toyohashi2, '浜松', '豊橋');
        DetailReplace_Set(0, tr, H_Mishima2, '新横浜', '三島・新横浜');
        DetailReplace_Set(0, tr, H_Atami2, '新横浜', '熱海・新横浜');
        DetailReplace_Set(1, tr, M_Fukuyama1, '広島', '福山・広島');
        DetailReplace_Set(1, tr, N_Fukuyama1, '広島', '福山・広島');
        DetailReplace_Set(1, tr, N_Tokuyama1, '小倉', '徳山・小倉');
        DetailReplace_Set(1, tr, N_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, M_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, S_Tokuyama1, '小倉', '徳山・小倉');
        DetailReplace_Set(1, tr, S_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, [591], '福山・広島', '新倉敷・福山・三原・東広島・広島・新岩国・徳山');
        DetailReplace_Set(1, tr, [531], '新山口・', '');
        DetailReplace_Set(1, tr, HS_Shimonoseki1, '小倉', '新下関・小倉');
        DetailReplace_Set(1, tr, M_Kurume1, '熊本', '久留米・熊本');
        DetailReplace_Set(1, tr, S_Yatsushiro1, '川内', '新八代・新水俣・出水・川内');
        DetailReplace_Set(1, tr, S_Tamana1, '久留米', '久留米・新玉名');
        DetailReplace_Set(1, tr, S_Omuta1, '久留米', '久留米・新大牟田');
        DetailReplace_Set(1, tr, S_Funakoya1, '久留米', '久留米・筑後船小屋');
    }
    for (var td = 0; td < TablenumSub; td++) {
        for (var tr = 0; tr < 2; tr++) {
            DetailBanner(td, tr, 25);
        }
    }
}
