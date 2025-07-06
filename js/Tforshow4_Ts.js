allJRSSColor(JRWSHobj, 2);
allJRColor(2);
DetailLength = [2];
DetailShow(JRWSHobj, "　", 1);
JRLimitedDevide(2);
JRLimitedDevide(3);
var takefu = [62, 64, 4, 8, 12, 84, 16, 20, 22, 24, 26, 28, 30, 34, 38, 42, 46, 48, 50];
var iiyama = [560, 564, 568];
var karuizawa = [568];
var k_takefu = [502, 518];
var k_onsen = [506, 510];
for (var tr = 0; tr < 2; tr++) {
    if (Type[0][tr] != '') {
        document.getElementById('TDetailtitle' + (0 + 1) + (tr + 1)).textContent = '停車駅';
    }
}
for (var td = 0; td < 1; td++) {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[td][tr] == 'かがやき') {
            Cars[td][tr] = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '全車指定席';
        } else if (Type[td][tr] == 'はくたか') {
            Cars[td][tr] = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-4号車';
        } else if (Type[td][tr] == 'つるぎ') {
            Cars[td][tr] = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-2号車';
            if(number[td][tr]>59){
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-4号車';
            }
        }
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (takefu.includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '越前たけふ　福井　芦原温泉　加賀温泉　小松');
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (iiyama.includes(number[0][tr])) {
        DetailReplace(0, tr, '長野', '飯山　長野');
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (karuizawa.includes(number[0][tr])) {
        DetailReplace(0, tr, '長野', '長野　上田　軽井沢');
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (k_takefu.includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '越前たけふ　福井　小松');
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (k_onsen.includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '福井　芦原温泉　加賀温泉');
    }
}
for (var tr = 0; tr < 3; tr++) {
    if (Type[3][tr] != '') {
        document.getElementById('TName' + 4 + (tr + 1)).textContent += '号';
    }
}
for (var tr = 0; tr < 3; tr++) {
    if (Type[2][tr].startsWith('特急')) {
        document.getElementById('TName' + 3 + (tr + 1)).textContent += '号';
    }
}
for (var tr = 0; tr < 3; tr++) {
    if (Type[1][tr] != '' && ((TableMin[1][tr] < min && TableHour[1][tr] == hour) || TableHour[1][tr] < hour)) {
        document.getElementById('TExplain' + 2 + (tr + 1)).textContent = '到着済み';
    }
}
for (var tr = 0; tr < 3; tr++) {
    if (Type[2][tr] != '' && ((TableMin[2][tr] < min && TableHour[2][tr] == hour) || TableHour[2][tr] < hour)) {
        document.getElementById('TDes' + 3 + (tr + 1)).textContent += '(到着済み)';
        document.getElementById('TDes' + 3 + (tr + 1)).style.transform = "scaleX(0.70)" + "translate(-15%,0%)";
    }
}
for (var tr = 0; tr < 3; tr++) {
    let dName = document.getElementById('TName' + 5 + (tr + 1));
    if (Type[4][tr] == '新快速') {
        dName.innerHTML += '<span class="LocalDetail">湖西経由近江舞子まで各停</span>';
        /*dName.style.color='red';
        dName.style.fontSize = '1.2vw';*/
        dName.style.transform = "scalex(0.90)" + "translate(10%,0%)";
    } else if (Type[4][tr] == '新快速*') {
        dName.innerHTML += '<span class="LocalDetail">米原経由米原まで各駅停車</span>';
        /*dName.style.color='red';
        dName.style.fontSize = '1.2vw';*/
        dName.style.transform = "scalex(0.90)" + "translate(10%,0%)";
        Type[4][tr] = '新快速';
        document.getElementById('WType' + 5 + (tr + 1)).textContent = '新快速';
    } else if (Des[4][tr] == '京都') {
        dName.textContent = '湖西線経由';
        dName.style.color = 'red';
    }
}
if (holidayflag == 1) {
    document.getElementById('supplement').innerHTML += station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)';
} else if (holidayflag == 0) {
    document.getElementById('supplement').innerHTML += station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)';
}
allJRWTrainNameColor('red', 'red', 'red', 2);
doallDetailShow(25);
//DetailBanner(0, 0, 25);
//DetailBanner(0, 1, 25);
for (var tr = 0; tr < orderNum; tr++) {
    AllWordChange(3, tr, Des, "大阪", "京都方面大阪");
    DesMiddle(3, tr, '方面');
}
for (var td = 2; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
    }
}