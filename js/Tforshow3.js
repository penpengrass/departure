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
            if (Type[2][tr].includes('8') || Type[2][tr].includes('16')||Type[2][tr].includes('12')) {
                document.getElementById('TCars' + 3 + (tr + 1)).textContent = '14両';
            }else{
                document.getElementById('TCars' + 3 + (tr + 1)).textContent = '9両';
            }
        } else if (Type[2][tr].startsWith('特急ｻﾌｨｰﾙ')) {
            document.getElementById('TCars' + 3 + (tr + 1)).textContent = '8両';
        }
    }
    for (var td = 0; td < Tablenum; td++) {
        swapColumns(table[td], 3, 4);
        swapColumns(table[td], 2, 3);
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

    document.getElementById('supplement').textContent = '熱海駅は実際の表示と異なる部分がある　土休日ダイヤに対応';
} else if (station == '小田原駅') {
    // 2列目と3列目を入れ替え
    // 表のIDを取得
    const table1 = document.getElementById("TTable1");
    const table2 = document.getElementById("TTable2");
    swapColumns(table1, 0, 1);
    swapColumns(table1, 1, 2);
    document.getElementById('HType1').style.width = "10%";
    document.getElementById('HName1').style.width = "20%";
    document.getElementById('HDes1').style.width = "40%";
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    JRATOSDevide(1);
    swapColumns(table2, 0, 1);
    document.getElementById('HType2').style.width = "15%";
    document.getElementById('HName2').style.width = "30%";
    for (var tr = 0; tr < orderNum; tr++) {
        console.log(Type[1][tr]);
        if (Type[1][tr] == '特別快速') {
            console.log('特別快速' + tr);
            document.getElementById('TType2' + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-0%,0%)";
        }
    }
} else if (station == '武蔵小杉駅') {
    JRATOSDevide(0);
    JRATOSDevide(1);
    NameColorchange(0, 'TName', '湘南新宿ライン', 'orange');
    NameColorchange(1, 'TName', '湘南新宿ライン', 'orange');
} else if (station == '宇都宮駅') {
    JRATOSDevide(2);
    for (var td = 0; td < Tablenum; td++) {
        swapColumns(table[td], 3, 4);
        swapColumns(table[td], 2, 3);
        if (td != 2) {
            swapColumns(table[td], 0, 1);
            document.getElementById('HName' + (td + 1)).style.width = "15%";
        }
        document.getElementById('HCars' + (td + 1)).style.width = "15%";
        document.getElementById('HName' + (2 + 1)).style.width = "25%";
        document.getElementById('HDes' + (td + 1)).style.width = "30%";
    }
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
    document.getElementById('TTable' + 1).style.width = '25em';
    document.getElementById('TTable' + 2).style.width = '40em';
    document.getElementById('TTable' + 4).style.width = '40em';
    document.getElementById('TTable' + 1).style.marginLeft = '8em';
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
} else if (station == '横浜駅') {
    const table1 = document.getElementById("TTable1");
    const table2 = document.getElementById("TTable2");
    const table3 = document.getElementById("TTable3");
    const table4 = document.getElementById("TTable4");
    const table5 = document.getElementById("TTable5");
    const table6 = document.getElementById("TTable6");
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
    for (tr = 0; tr < orderNum; tr++) {
        if (Des[5][tr].length > 6) {
            document.getElementById('TDes6' + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-40%,0%)";
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[4][tr] == '特別快速') {
            document.getElementById('TType5' + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-0%,0%)";
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[5][tr] == '特別快速') {
            document.getElementById('TType6' + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-0%,0%)";
        }
    }
    NameColorchange(4, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    NameColorchange(5, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
    comment.textContent = '両数表示は今後更新';
}
