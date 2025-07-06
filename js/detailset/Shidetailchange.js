var time0 = document.getElementById('THour11');
var time1 = document.getElementById('THour21');
console.log(time0);
if (station == '高松駅') {
    if (time0 != null) {
        if (Type[0][0].includes('ｻﾝﾎﾟｰﾄ') && time0.textContent > 16) {
            AddStopping(Sunport, '端岡', '鴨川');
        }
    }
    var Houjou = [101, 103, 1, 13, 15, 17, 19, 21, 23, 25, 27];
    for (var line = 0; line < Houjou.length; line++) {
        if (number[1][0] == Houjou[line]) {
            AddStopping(Ishiduti, '今治', '伊予北条');
        }
    }
    var takuma = [101, 103, 1, 3, 23, 25, 27, 29];
    for (var line = 0; line < takuma.length; line++) {
        if (number[1][0] == takuma[line]) {
            AddStopping(Ishiduti, '多度津', '詫間');
        }
    }
    var takase = [101, 103, 25, 27, 29];
    for (var line = 0; line < takase.length; line++) {
        if (number[1][0] == takase[line]) {
            AddStopping(Ishiduti, '詫間', '高瀬');
        }
    }
    var Hayashima = [20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64];
    for (var line = 0; line < Hayashima.length; line++) {
        if (number[2][0] == Hayashima[line]) {
            DeleteStopping(Mrapid, '妹尾');
            AddStopping(Mrapid, '茶屋町', '早島');
        }
    }
    if (number[2][0] == 2 || number[2][0] == 70) {
        Dtype[2]++;
    }
    var tsuda = [3, 25, 27, 31, 33];
    for (var line = 0; line < tsuda.length; line++) {
        if (number[3][0] == tsuda[line]) {
            AddStopping(Uzushio, '志度', '讃岐津田');
        }
    }
    var orangetown = [1, 3, 25, 27, 33];
    for (var line = 0; line < orangetown.length; line++) {
        if (number[3][0] == orangetown[line]) {
            AddStopping(Uzushio, '志度', 'オレンジタウン');
        }
    }
    var sanukishirotori = [3, 5, 25, 27, 31, 33];
    for (var line = 0; line < sanukishirotori.length; line++) {
        if (number[3][0] == sanukishirotori[line]) {
            AddStopping(Uzushio, '三本松', '讃岐白鳥');
        }
    }
    var shouzui = [1, 3, 5, 25, 27, 31, 33];
    for (var line = 0; line < shouzui.length; line++) {
        if (number[3][0] == shouzui[line]) {
            AddStopping(Uzushio, '板野', '勝瑞');
        }
    }
    var ikenotani = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 27, 29, 31];
    for (var line = 0; line < ikenotani.length; line++) {
        if (number[3][0] == ikenotani[line]) {
            AddStopping(Uzushio, '板野', '池谷');
        }
    }
    if (number[3][0] == 13) {
        DeleteStopping(Uzushio, '屋島');
        DeleteStopping(Uzushio, '引田');
    }
} else if (station == '松山駅') {
    var iyonakayama = [23, 25, 27, 31];
    for (var line = 0; line < iyonakayama.length; line++) {
        if (number[0][0] == iyonakayama[line] || number[1][0] == iyonakayama[line]) {
            AddStopping(Uwakai, '伊予市', '伊予中山', 1);
        }
    }

    var iyohojo = [4, 6, 8, 10, 12, 26, 28, 30, 102, 104, 106];
    for (var line = 0; line < iyohojo.length; line++) {
        if (number[0][0] == iyohojo[line]) {
            AddStopping(Shiokaze, '松山', '伊予北条', 1);
            AddStopping(Ishiduti, '松山', '伊予北条', 1);
        }
    }
    var takuma2=[4,6,8,30,102];
    for (var line = 0; line < takuma2.length; line++) {
        if (number[0][0] == takuma2[line]) {
            AddStopping(Shiokaze, '観音寺', '詫間', 1);
            AddStopping(Ishiduti, '観音寺', '詫間', 1);
        }
    }
    var takase2=[4,6,30,102];
    for (var line = 0; line < takase2.length; line++) {
        if (number[0][0] == takase2[line]) {
            AddStopping(Shiokaze, '観音寺', '高瀬', 1);
            AddStopping(Ishiduti, '観音寺', '高瀬', 1);
        }
    }
    if(number[0][0]>99){
        DeleteStopping(Ishiduti,'宇多津',1);
    }
    //DetailReplace_Set(0, 0, iyonakayama, '伊予市', '伊予市、伊予中山',3);
}
console.log(Dtype);
for (var td = 0; td < Tablenum; td++) {
    console.log(Type[td]);
    if (Type[td][0] != '') {
        document.getElementById('TDetailtitle' + (td + 1)).textContent = '停車駅';
    } else {
        document.getElementById('TDetailtitle' + (td + 1)).textContent = '';
    }
    document.getElementById('TDetailtitle' + (td + 1)).style.textAlign = 'left';
}