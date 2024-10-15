const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
const table1 = document.getElementById("TATOSTable1");
const table2 = document.getElementById("TATOSTable2");
const table3 = document.getElementById("TATOSTable3");
const table4 = document.getElementById("TATOSTable4");
const table5 = document.getElementById("TATOSTable5");
const table6 = document.getElementById("TATOSTable6");
if (station == '熱海駅') {
    var list = document.getElementsByClassName('Destination');
    for (var tr = 0; tr < list.length; tr++) {
        list[tr].style.color = '#0f0';
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[0][tr].startsWith('特急踊り子')) {
            document.getElementById('TCars' + 1 + (tr + 1)).textContent = '9両';
        } else if (Type[0][tr].startsWith('特急ｻﾌｨｰﾙ')) {
            document.getElementById('TCars' + 1 + (tr + 1)).textContent = '8両';
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[1][tr].startsWith('特急踊り子')) {
            document.getElementById('TCars' + 2 + (tr + 1)).textContent = '5両';
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[2][tr].startsWith('特急踊り子')) {
            if (Type[2][tr].includes('4') || Type[2][tr].includes('10')) {
                document.getElementById('TCars' + 3 + (tr + 1)).textContent = '14両';
            } else {
                document.getElementById('TCars' + 3 + (tr + 1)).textContent = '9両';
            }
        } else if (Type[2][tr].startsWith('特急ｻﾌｨｰﾙ')) {
            document.getElementById('TCars' + 3 + (tr + 1)).textContent = '8両';
        }
    }
    for (var td = 0; td < Tablenum; td++) {
        swapColumns(ATOStable[td], 3, 4);
        swapColumns(ATOStable[td], 2, 3);
        for (var tr = 0; tr < orderNum; tr++) {
            if (Type[td][tr].length > 11) {
                console.log(Type[td][tr]);
                console.log(document.getElementById('TType' + (td + 1) + (tr + 1)).textContent);
                //document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            }
        }
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType1').style.width = "35%";
        document.getElementById('HType2').style.width = "35%";
        document.getElementById('HType3').style.width = "35%";
    }
    CarsDevide(0);
    CarsDevide(1);
    CarsDevide(2);
    allTwoLettersDistance(Des, TDes, 1, 1);
    document.getElementById('supplement').textContent = '熱海駅は実際の表示と異なる部分がある　土休日ダイヤに対応';
    allJRCIncludeColor();
} else if (station == '小田原駅') {
    // 2列目と3列目を入れ替え
    // 表のIDを取得
    const table1 = document.getElementById("TATOSTable1");
    const table2 = document.getElementById("TATOSTable2");
    swapColumns(table1, 0, 1);
    swapColumns(table1, 1, 2);
    document.getElementById('HType1').style.width = "10%";
    document.getElementById('HName1').style.width = "20%";
    document.getElementById('HDes1').style.width = "40%";
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    CarsDevide(0);
    CarsDevide(1);
    CarsDevide(1, 'TCars', 'TName');
    //JRATOSDevide(1);
    //console.log(JRLimitedNumber(1, 1, 'TName'));
    swapColumns(table2, 0, 1);
    document.getElementById('HType2').style.width = "15%";
    document.getElementById('HName2').style.width = "30%";
    for (var tr = 0; tr < orderNum; tr++) {
        console.log(Type[1][tr]);
        let LType = document.getElementById('TType2' + (tr + 1));
        let LDes = document.getElementById('TDes1' + (tr + 1));
        let LName = document.getElementById('TName2' + (tr + 1));
        let LCars = document.getElementById('TCars1' + (tr + 1));
        let LCars2 = document.getElementById('TCars2' + (tr + 1));
        if (Type[1][tr] == '特別快速') {
            console.log('特別快速' + tr);
            document.getElementById('TType2' + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-7%,0%)";
        }
        if (Type[1][tr].startsWith('始発')) {
            document.getElementById('TType2' + (tr + 1)).innerHTML = '<span style="color:orange;">始発</span>';
        }
        JRLineName(1, tr, '普通', '上野東京ﾗｲﾝ', 1);
        JRLineName(1, tr, '快速', '湘南新宿ﾗｲﾝ', 1);
        if (Des[0][tr] == '伊豆急下田/修善寺' || Des[0][tr] == '伊豆急下田･修善寺') {
            LDes.style.transform = "scaleX(0.65)" + "translate(-0%,0%)";
            LCars.textContent = '14両';
        } else if (Des[0][tr] == '伊豆急下田') {
            LCars.textContent = '9両';
        }
        if (Type[1][tr].includes('特急') && LName.textContent.includes('湘南')) {
            if (JRLimitedNumber(1, tr, 'TName') == 4 || JRLimitedNumber(1, tr, 'TName') == 12) {
                LCars2.textContent = '14両';
            } else {
                LCars2.textContent = '9両';
            }
        } else if (Type[1][tr].includes('特急') && LName.textContent.includes('踊り子')) {
            if (JRLimitedNumber(1, tr, 'TName') == 4 || JRLimitedNumber(1, tr, 'TName') == 10) {
                LCars2.textContent = '14両';
            } else {
                LCars2.textContent = '9両';
            }

        }
    }
    setInterval(allswitchOdawara, 5000);
    allTwoLettersDistance(Des, TDes, 1, 0.8);
    holiday_F(station);
    comment.innerHTML += '<br>特急の臨時列車は不正確';

    allJRCIncludeColor();
} else if (station == '武蔵小杉駅') {
    JRATOSDevide(0);
    JRATOSDevide(1);
    var Shonan1 = ['籠原', '宇都宮', '小金井', '古河', '高崎', '前橋'];
    var Saikyo1 = ['新宿', '池袋', '大宮', '川越', '指扇', '赤羽'];
    var Saikyo2 = ['海老名'];
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    for (var tr = 0; tr < orderNum; tr++) {
        if (Shonan1.includes(Des[0][tr])) {
            JRLineName(0, tr, '', '湘南新宿ﾗｲﾝ', 0, 0);
        } else if (Saikyo1.includes(Des[0][tr])) {
            JRLineName(0, tr, '', '埼京線', 0, 0);
        } else if (Des[0][tr] != '') {
            JRLineName(0, tr, '', '横須賀線', 0, 0);
        }
        JRLineName(1, tr, '普通', '横須賀線', 0, 0);
        if (Saikyo2.includes(Des[1][tr])) {
            JRLineName(1, tr, '', '相鉄線', 0, 1);
        }
        JRLineName(1, tr, '快速', '湘南新宿ﾗｲﾝ', 0, 0);
        FourLetters(0, tr, 0.7, 7);
        FourLetters(1, tr, 0.7, 7);
    }
    NameColorchange(0, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    NameColorchange(1, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    NameColorchange(0, 'TType', '普通', 'orange');
    NameColorchange(1, 'TType', '普通', 'orange');
    NameColorchange(0, 'TType', '特別快速', 'orange');
    NameColorchange(1, 'TType', '特別快速', 'orange');
    NameColorchange(0, 'TType', '快速', 'red');
    NameColorchange(1, 'TType', '快速', 'red');
    NameColorchange(0, 'TType', '特急', 'red');
    NameColorchange(1, 'TType', '特急', 'red');
    NameColorchange(1, 'TName', '相鉄線', 'orange');
    allTwoLettersDistance(Des, TDes, 1, 0.8);
    comment.textContent = '両数は今後追加予定, 特急表示は不正確';
    for (var td = 0; td < Tablenum; td++) {
        document.getElementsByClassName('Ctitle').item(td).style.paddingBottom = '36px';
        document.getElementsByClassName('Ctitle').item(td).style.paddingTop = '4px';
    }
} else if (station == '宇都宮駅') {
    JRATOSDevide(2);
    for (var td = 0; td < Tablenum; td++) {
        swapColumns(ATOStable[td], 3, 4);
        swapColumns(ATOStable[td], 2, 3);
        if (td != 2) {
            swapColumns(ATOStable[td], 0, 1);
            document.getElementById('HName' + (td + 1)).style.width = "15%";
        }
        document.getElementById('HCars' + (td + 1)).style.width = "15%";
        document.getElementById('HName' + (2 + 1)).style.width = "25%";
        document.getElementById('HDes' + (td + 1)).style.width = "30%";
    }
    document.getElementById('HCars' + (2 + 1)).style.width = "20%";
    document.getElementById('HDes' + (2 + 1)).style.width = "25%";
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[1][tr] != '') {
            document.getElementById('TCars2' + (tr + 1)).textContent = '4ﾄﾞｱ';
        }
    }
    CarsDevide(1, 'TName');
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[2][tr] != '') {
            document.getElementById('TCars3' + (tr + 1)).textContent = '15両4ﾄﾞｱ';
            var Name = document.getElementById('TName3' + (tr + 1));
            var TypeIn = document.getElementById('TType3' + (tr + 1));
            if (Name.textContent == '') {
                if (Des[2][tr] == '上野' || Des[2][tr] == '大宮') {
                    if (TypeIn.textContent.includes('ﾗﾋﾞｯﾄ')) {
                        Name.textContent = 'ラビット';
                        TypeIn.textContent = '快速';
                    } else {
                        Name.textContent = '宇都宮線';
                    }
                } else if (Des[2][tr] == '大船' || Des[2][tr] == '逗子') {
                    Name.textContent = '湘南新宿ﾗｲﾝ';
                } else if (Des[2][tr] != '') {
                    Name.textContent = '上野東京ﾗｲﾝ';
                }
            }
            Name.style.color = 'orange';
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[3][tr] != '') {
            document.getElementById('TName4' + (tr + 1)).textContent = '3両';
            document.getElementById('TCars4' + (tr + 1)).textContent = '4ﾄﾞｱ';
        }
    }
    document.getElementById('TATOSTable' + 1).style.width = '25em';
    document.getElementById('TATOSTable' + 2).style.width = '40em';
    document.getElementById('TATOSTable' + 4).style.width = '40em';
    document.getElementById('TATOSTable' + 1).style.marginLeft = '8em';
    rowremove(0, 'HName', 'TName');
    rowremove(0, 'HCars', 'TCars');
    rowremove(0, 'HType', 'TType');
    if (Type[3][0] == '') {
        BottomBanner("TRow", 4, 3, 6, '日光線の運転は終了しました');
    }
    if (Type[0][0] == '' && Type[0][1] != '') {
        BottomBanner("TRow", 1, 1, 3, '烏山方面へは黒磯行きに乗車のうえ宝積寺でのりかえ');
    }
    comment.textContent = '上野東京ラインの両数は今後修正予定';
    allTwoLettersDistance(Des, TDes, 1, 1);
    allJRCIncludeColor();
} else if (station == '横浜駅') {
    swapColumns(table1, 0, 1);
    swapColumns(table2, 0, 1);
    swapColumns(table3, 0, 1);
    swapColumns(table4, 0, 1);
    swapColumns(table5, 0, 1);
    swapColumns(table6, 0, 1);
    document.getElementById('HType1').style.width = "15%";
    document.getElementById('HName1').style.width = "30%";
    document.getElementById('HType2').style.width = "15%";
    document.getElementById('HName2').style.width = "30%";
    document.getElementById('HType3').style.width = "15%";
    document.getElementById('HName3').style.width = "30%";
    document.getElementById('HType4').style.width = "15%";
    document.getElementById('HName4').style.width = "30%";
    document.getElementById('HType5').style.width = "15%";
    document.getElementById('HName5').style.width = "30%";
    document.getElementById('HType6').style.width = "15%";
    document.getElementById('HName6').style.width = "30%";
    JRETypeAdd(0, '各駅停車', ' 根岸線', 3);
    JRETypeAdd(0, '快速', ' 根岸線', 3);
    JRETypeAdd(2, '普通', ' 東海道線', 3);
    JRETypeAdd(3, '普通', ' 上野東京ﾗｲﾝ', 3);
    var yokohama = ['橋本', '八王子'];
    JRETypeSelectAdd(1, '', yokohama, ' 横浜線', ' 京浜東北線', 3);
    var shonan1 = ['平塚', '小田原', '国府津', '逗子*', '大船*'];
    JRETypeSelectAdd(4, '普通', shonan1, '湘南新宿ﾗｲﾝ', '横須賀線', 3);
    JRETypeSelectAdd(4, '快速', shonan1, '湘南新宿ﾗｲﾝ', '横須賀線', 3);
    flagmarkerase(4, 'TDes');
    var shonan2 = ['籠原', '高崎', '前橋', '宇都宮', '小金井', '古河'];
    JRETypeSelectAdd(5, '普通', shonan2, '湘南新宿ﾗｲﾝ', '横須賀線', 3);
    JRETypeSelectAdd(5, '快速', shonan2, '湘南新宿ﾗｲﾝ', '横須賀線', 3);
    JRLimitedDevide(2);
    JRLimitedDevide(3);
    JRLimitedDevide(4);
    JRLimitedDevide(5);
    flagmarkerase(4, 'TDes');
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[5][tr].length > 6) {
            document.getElementById('TDes6' + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-40%,0%)";
        }
        FourLetters(5, tr, 0.5, -40, 'TDes', 6);
        FourLetters(0, tr, 0.7, 5);
        FourLetters(1, tr, 0.7, 5);
        FourLetters(4, tr, 0.7, 5);
        FourLetters(5, tr, 0.7, 5);
    }
    NameColorchange(4, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    NameColorchange(5, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    comment.textContent = '両数表示は今後更新';
    allJRCIncludeColor();
} else if (station == '黒磯駅') {
    rowremove(0, 'HName', 'TName');
    rowremove(0, 'HCars', 'TCars');
    rowremove(1, 'HName', 'TName');
    rowremove(1, 'HCars', 'TCars');
    document.getElementById('HDes2').textContent = '';
    document.getElementById('HDes1').textContent = '';
    document.getElementById('HrNumber2').textContent = '';
    document.getElementById('HrNumber1').textContent = '';
    allTwoLettersDistance(Type, TType, 0.6, 0);
    comment.textContent = '番線は不正確';
    Bansenshow();
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < 2; tr++) {
            if (Type[td][tr] != '') {
                document.getElementsByClassName('bansen')[td + tr * 2].style.fontSize = '2vw';
            }
        }
    }
}
