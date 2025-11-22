allJRSSColor(JRWSHobj, 2);
allJRColor(2);
DetailShow(JRWSHobj, "　", DetailLength.length);
JRLimitedDevide(2);
JRLimitedDevide(3);
//allLastShow();
TablenumSub = 1
JRNameDevide(2);
console.log(Detail);
var takefu = [62, 64, 4, 8, 12, 84, 16, 20, 22, 24, 26, 28, 30, 34, 38, 42, 46, 48, 50, 1, 5, 9, 13, 17, 19, 21, 23, 25, 29, 33, 37, 41, 45, 47, 49, 61];
var iiyama = [552, 554, 556, 558, 560, 564, 568, 572, 574, 576, 578, 590];
var k_takefu = [[502, 518], [501, 517]];
var k_onsen = [[506, 510], [507, 509]];
for (var tr = 0; tr < 2; tr++) {
    Detail[1][tr] = "";
    if (Type[0][tr] != '') {
        document.getElementById('TDetailtitle' + (0 + 1) + (tr + 1)).textContent = '停車駅';
    }
    if (Type[1][tr] != '' && station != '敦賀駅') {
        document.getElementById('TDetailtitle' + (1 + 1) + (tr + 1)).textContent = '停車駅';
    }
}
for (var td = 0; td < 2; td++) {
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
            if (number[td][tr] > 59) {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1)).textContent = '自由席1-4号車';
            }
        }
    }
    if (station == '敦賀駅') {
        break;
    }
}
for (var tr = 0; tr < 2; tr++) {
    if (takefu.includes(number[0][tr])) {
        //DetailReplace(0, tr, '福井', '越前たけふ　福井　芦原温泉　加賀温泉　小松');
        Detail[0][tr] = '各駅';
    } else if (station == '福井駅' && Des[0][tr] == '金沢') {
        Detail[0][tr] = '次の停車駅は終点金沢です';
    }
    if (k_onsen[0].includes(number[0][tr])) {
        DetailReplace(0, tr, '金沢', '芦原温泉　加賀温泉　金沢');
    }
    if (k_takefu[1].includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '小松　福井　越前たけふ');
    }
    if (k_takefu[1].includes(number[1][tr])) {
        DetailReplace(1, tr, '福井', '小松　福井　越前たけふ');
    }

    if (k_onsen[1].includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '加賀温泉　芦原温泉　福井');
    }
    if (station == '福井駅') {
        if (takefu.includes(number[1][tr]) || k_takefu[1].includes(number[1][tr]) || Type[1][tr].startsWith('はくたか')) {
            Detail[1][tr] = '越前たけふ';
        } else if (number[1][tr] > 0) {
            Detail[1][tr] = '次の停車駅は終点敦賀です';
        }
    } else if (station == '金沢駅' && Type[0][tr].startsWith('はくたか')) {
        Detail[0][tr] = '各駅';
    }
    if (iiyama.includes(number[0][tr])) {
        DetailReplace(0, tr, '長野', '飯山　長野');
    }
    if (iiyama.includes(number[1][tr])) {
        DetailReplace(1, tr, '長野', '飯山　長野');
    }

    if (ueda.includes(number[0][tr])) {
        DetailReplace(0, tr, '長野', '長野　上田　軽井沢');
    }
    if (ueda.includes(number[1][tr])) {
        DetailReplace(1, tr, '長野', '長野　上田　軽井沢');
    }
    if (sakudaira.includes(number[1][tr])) {
        DetailReplace(1, tr, '上田', '上田　佐久平');
    }
    if (k_takefu[0].includes(number[0][tr])) {
        DetailReplace(0, tr, '福井', '越前たけふ　福井');
        DetailReplace(0, tr, '金沢', '小松　金沢');
    }
}

if (station == '敦賀駅' || station == '金沢駅') {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[3][tr].startsWith('特急')) {
            document.getElementById('TName' + 4 + (tr + 1)).textContent += '号';
        }
        if (Type[2][tr].startsWith('特急')) {
            document.getElementById('TName' + 3 + (tr + 1)).textContent += '号';
        }
        if (Type[4][tr].startsWith('特急')) {
            document.getElementById('TName' + 5 + (tr + 1)).textContent += number[4][tr] + '号';
            Type[4][tr] = Type[4][tr].replace(number[4][tr].toString(), '');
            document.getElementById('WType' + 5 + (tr + 1)).textContent = Type[4][tr];
            document.getElementById('TName' + 5 + (tr + 1)).style.textAlign = 'right';
        }
        if (Type[3][tr].startsWith('快速あいの')) {
            document.getElementById('TName' + 4 + (tr + 1)).textContent += number[3][tr] + '号';
            Type[3][tr] = Type[3][tr].replace(number[3][tr].toString(), '');
            document.getElementById('WType' + 4 + (tr + 1)).textContent = Type[3][tr];
            document.getElementById('TName' + 4 + (tr + 1)).style.textAlign = 'right';
        }
    }
}
if (station == '敦賀駅') {
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
}
Bansenshow(1, 2);
allJRWTrainNameColor('red', 'red', 'red', 2);
doallDetailShow(25);
//DetailBanner(0, 0, 25);
//DetailBanner(0, 1, 25);
for (var tr = 0; tr < orderNum; tr++) {
    AllWordChange(3, tr, Des, "大阪", "京都方面大阪");
    DesMiddle(3, tr, '方面');
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
    }
}
LastShowFlag = 1;