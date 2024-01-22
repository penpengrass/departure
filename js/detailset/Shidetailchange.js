var time0 = document.getElementById('THour11');
var time1 = document.getElementById('THour21');
if (time0.textContent != null) {
    if (Type[0][0].includes('ｻﾝﾎﾟｰﾄ') && time0.textContent > 16) {
        AddStopping(Sunport, '端岡', '鴨川');
    }
}
if (time0.textContent != null) {
    if (Type[1][0].includes('ｻﾝﾎﾟｰﾄ') && time0.textContent > 16) {
        AddStopping(Sunport, '端岡', '鴨川');
    }
}
var Houjou = [101, 103, 1, 13, 15, 17, 19, 21, 23, 25, 27];
for (var line = 0; line < Houjou.length; line++) {
    if (number[1] == Houjou[line]) {
        AddStopping(Ishiduti, '今治', '伊予北条');
    }
}
var takuma = [101, 103, 1, 3, 23, 25, 27, 29];
for (var line = 0; line < takuma.length; line++) {
    if (number[1] == takuma[line]) {
        AddStopping(Ishiduti, '多度津', '詫間');
    }
}
var takase = [101, 103, 25, 27, 29];
for (var line = 0; line < takase.length; line++) {
    if (number[1] == takase[line]) {
        AddStopping(Ishiduti, '詫間', '高瀬');
    }
}
var Hayashima = [20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64];
for (var line = 0; line < Hayashima.length; line++) {
    if (number[2] == Hayashima[line]) {
        DeleteStopping(Mrapid, '妹尾');
        AddStopping(Mrapid, '茶屋町', '早島');
    }
}
if (number[2] == 2 || number[2] == 70) {
    Dtype[2]++;
}
var tsuda = [3, 9, 19, 25, 27, 31, 33];
for (var line = 0; line < tsuda.length; line++) {
    if (number[3] == tsuda[line]) {
        AddStopping(Uzushio, '志度', '讃岐津田');
    }
}
var orangetown = [1, 3, 25, 27, 33];
for (var line = 0; line < orangetown.length; line++) {
    if (number[3] == orangetown[line]) {
        AddStopping(Uzushio, '志度', 'オレンジタウン');
    }
}
var sanukishirotori = [3, 5, 25, 27, 31, 33];
for (var line = 0; line < sanukishirotori.length; line++) {
    if (number[3] == sanukishirotori[line]) {
        AddStopping(Uzushio, '三本松', '讃岐白鳥');
    }
}
var shouzui = [1, 3, 5, 21, 25, 27, 31, 33];
for (var line = 0; line < shouzui.length; line++) {
    if (number[3] == shouzui[line]) {
        AddStopping(Uzushio, '板野', '勝瑞');
    }
}
var ikenotani = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 27, 29, 31];
for (var line = 0; line < ikenotani.length; line++) {
    if (number[3] == ikenotani[line]) {
        AddStopping(Uzushio, '板野', '池谷');
    }
}
if (number[3] == 13) {
    DeleteStopping(Uzushio, '屋島');
    DeleteStopping(Uzushio, '引田');
}
console.log(Dtype);
for (var td = 0; td < Tablenum; td++) {
    console.log(Type[td]);
    if (Type[td][0] != '') {
        document.getElementById('TDetailtitle' + (td + 1)).textContent = '停車駅';
    } else {
        document.getElementById('TDetailtitle' + (td + 1)).textContent = '';
    }
}
