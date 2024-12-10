let Saikyo_Color = '#00AC9A';
let Keihin_Color = '#00b2e5';
if (station == '長野駅') {
    for (let tr = 0; tr < 3; tr++) {
        console.log(Type[0][tr]);
        if (Type[0][tr] == '普通') {
            if (['妙高高原', '豊野'].includes(Des[0][tr])) {
                //Type[0][tr] += ' 北しなの線';
                document.getElementById('TName' + 1 + '' + (tr + 1)).textContent = '北しなの線';
                JRE6ColorPlusName(0, tr, '普通', '#0000cc');
            } else {
                document.getElementById('TName' + 1 + '' + (tr + 1)).textContent = '飯山線';
                JRE6ColorPlusName(0, tr, '普通', '#009900');
                if (Des[0][tr].includes('*')) {
                    document.getElementById('Ttopic' + 1 + (tr + 1)).textContent = '越後川口行き接続';
                    document.getElementById('Ttopic' + 1 + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-20%,0%)";
                } else if (Des[0][tr].includes('+')) {
                    document.getElementById('Ttopic' + 1 + (tr + 1)).textContent = '森宮野原行き接続';
                    document.getElementById('Ttopic' + 1 + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-20%,0%)";
                }
            }
        } else if (Type[0][tr].startsWith('快速軽井沢')) {
            JRE6ColorPlusName(0, tr, '快速', '#008888');
        } else if (Type[0][tr].startsWith('快速おいこっと')) {
            document.getElementById('TType' + 1 + (tr + 1)).style.backgroundColor = '#bb0000';
        }
        if (Des[0][tr].length > 3) {
            if (Des[0][tr].length < 5) {
                //console.log(Des[0][tr].length);
                document.getElementById('TDes' + 1 + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
            } else {
                document.getElementById('TDes' + 1 + (tr + 1)).style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
            }
        }
        if (Type[1][tr] == '普通') {
            document.getElementById('TName' + 2 + '' + (tr + 1)).textContent = 'しなの鉄道線';
            JRE6ColorPlusName(1, tr, '普通', '#0044ff');
            if (Des[1][tr].includes('*')) {
                document.getElementById('Ttopic' + 2 + (tr + 1)).textContent = '軽井沢行き接続';
                document.getElementById('Ttopic' + 2 + (tr + 1)).style.transform = "scaleX(0.7)" + "translate(-20%,0%)";
            }
        } else if (Type[1][tr] == '快速しなの') {
            document.getElementById('TType' + 2 + '' + (tr + 1)).textContent = '快速';
            document.getElementById('TName' + 2 + '' + (tr + 1)).textContent = 'しなのｻﾝｾｯﾄ';
            JRE6ColorPlusName(1, tr, '快速', '#bb0000');
        } else if (Type[1][tr].startsWith('快速軽井沢')) {
            JRE6ColorPlusName(1, tr, '快速', '#000088');
            document.getElementById('Ttopic' + 2 + (tr + 1)).textContent = '全車指定席';
        }
        if (Type[2][tr] == '普通') {
            document.getElementById('TName' + 3 + '' + (tr + 1)).textContent = '篠ノ井線';
            JRE6ColorPlusName(2, tr, '普通', '#aa5500');
        } else if (Type[2][tr].includes('特急')) {
            JRE6ColorPlusName(2, tr, '特急', '#bb0000');
        } else if (Type[1][tr].startsWith('快速')) {
            document.getElementById('TType' + 3 + (tr + 1)).style.backgroundColor = '#bb0000';
        }
    }
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent = '長野駅のみ土休日ダイヤに対応(表示は土休日ダイヤ) 非表示の臨時列車の可能性あり';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent = '長野駅のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
    JRLimitedDevide(2, 'left');
    Bansenshow();
    flagmarkerase(0, 'TDes', '*');
    flagmarkerase(0, 'TDes', '+');
    flagmarkerase(1, 'TDes', '*');
}
if (station == '松本駅') {
    for (var td = 0; td < 4; td++) {
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType' + (td + 1)).style.width = "50%";
    }
    for (var tr = 0; tr < 3; tr++) {
        JRE6Color(0, '普通', 'blue');
        JRE6Color(0, '快速', 'blue');
        JRE6Color(0, '特急', 'red');
        JRE6Color(1, '特急', 'red');
        if (Type[1][tr].includes('普通')) {
            document.getElementById('TType' + 2 + '' + (tr + 1)).style.backgroundColor = '#ffa500';
            if (Type[1][tr].includes('(東)')) {
                document.getElementById('TType' + 2 + '' + (tr + 1)).textContent = '普通';
            }
        }
        JRE6Color(2, '普通', '#ff6e00');
        JRE6Color(2, '快速', '#ff6e00');
        JRE6Color(2, '特急', 'red');
        JRE6Color(3, '普通', '#874da1');
        JRE6Color(3, '快速', '#874da1');
        JRE6Color(3, '特急', 'red');
        //行先の文字の大きさ
        if (Des[0][tr].length > 3) {
            if (Des[0][tr].length < 5) {
                console.log(Des[0][tr].length);
                document.getElementById('TDes' + 1 + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
            } else {
                document.getElementById('TDes' + 1 + (tr + 1)).style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
            }
        }
    }
    //松本駅だけ番線の文字追加および行先表示調整
    for (var td = 0; td < 4; td++) {
        document.getElementsByClassName('HDes')[td].style.paddingRight = "1.5em";
        for (var tr = 0; tr < 3; tr++) {
            //console.log(document.getElementById('Ttopic'+(tr+1)+(ts+1)));
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).innerHTML += '<span class="bansen">番線</span>';
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.paddingRight = "1em";
        }
    }
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent = '松本駅のみ土休日ダイヤ対応(表示は土休日ダイヤ) 非表示の臨時列車の可能性あり';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent = '松本駅のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
} else if (station == '横浜駅') {
    var yokohama = ['橋本', '八王子'];
    JRETypeSelectAdd(1, '', yokohama, ' 横浜線', ' 京浜東北線');
    JRETypeAdd(0, '各駅停車', ' 根岸線');
    JRETypeAdd(0, '快速', ' 根岸線');
    JRETypeAdd(2, '普通', ' 東海道線');
    JRETypeAdd(3, '普通', ' 上野東京ﾗｲﾝ');
    var shonan1 = ['平塚', '小田原', '国府津', '逗子*', '大船*'];
    JRETypeSelectAdd(4, '普通', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    JRETypeSelectAdd(4, '快速', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    flagmarkerase(4, 'TDes');
    var shonan2 = ['籠原', '高崎', '前橋', '宇都宮', '小金井', '古河'];
    JRETypeSelectAdd(5, '普通', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    JRETypeSelectAdd(5, '快速', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    for (var tr = 0; tr < 2; tr++) {
        JRE6ColorPlusName(0, tr, '各駅停車', '#00b2e5');
        JRE6ColorPlusName(0, tr, '快速', '#00b2e5');
        JRE6ColorPlusName(1, tr, '京浜東北線', '#00b2e5', 1);
        JRE6ColorPlusName(1, tr, '横浜線', 'yellowgreen', 1);
        JRE6ColorPlusName(2, tr, '普通', 'orange');
        JRE6ColorPlusName(3, tr, '普通', 'orange');
        JRE6ColorPlusName(2, tr, '特急', 'red');
        JRE6ColorPlusName(3, tr, '特急', 'red');
        JRE6ColorPlusName(4, tr, '湘南新宿ﾗｲﾝ', '#e21f26', 1);
        JRE6ColorPlusName(4, tr, '横須賀線', 'blue', 1);
        JRE6ColorPlusName(5, tr, '湘南新宿ﾗｲﾝ', '#e21f26', 1);
        JRE6ColorPlusName(5, tr, '横須賀線', 'blue', 1);
        JRE6ColorPlusName(4, tr, '特急', 'red');
        JRE6ColorPlusName(5, tr, '特急', 'red');
    }
    for (var td = 0; td < 6; td++) {
        document.getElementsByClassName('HDes')[td].style.paddingRight = "1.5em";
        for (var tr = 0; tr < 2; tr++) {
            //console.log(document.getElementById('Ttopic'+(td+1)+(tr+1)));
            FourLetters(td, tr, 0.6, 30, 'WType');
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).innerHTML += '<span class="bansen">番線</span>';
            //document.getElementById('TDes' + (td + 1) + (tr + 1)).style.paddingRight = "1em";
            if (Des[td][tr].length > 6) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
            }
        }
    }
    comment.textContent = '両数表示は今後更新';
} else if (station == '赤羽駅') {
    rowremove(0, 'HName', 'TName');
    rowremove(1, 'HName', 'TName');
    rowremove(6, 'HName', 'TName');
    rowremove(7, 'HName', 'TName');
    function AkabaneSize(td) {
        rowsize(td, 'HType', 'TType', '25%');
        rowsize(td, 'HTime', 'TTime', '25%');
        rowsize(td, 'HDes', 'TDes', '25%');
        rowsize(td, 'HNumber', 'TNum', '15%');
        rowsize(td, 'Htopic', 'Ttopic', '5%');
        document.getElementById('TLCDTable' + (td + 1)).style.width = '600px';
    }
    AkabaneSize(0);
    AkabaneSize(6);
    //rowsize(1, 'HType', 'TType', '15%');
    rowsize(2, 'HName', 'TName', '15%');
    rowsize(3, 'HName', 'TName', '15%');
    rowsize(4, 'HName', 'TName', '15%');
    rowsize(5, 'HName', 'TName', '15%');
    for (var tr = 0; tr < 2; tr++) {
        AllWordChange(0, tr, 'WType', '普通', '各駅停車', 1, Type);
        AllWordChange(1, tr, 'WType', '普通', '各駅停車', 1, Type);
        AllWordChange(3, tr, 'WType', '快速:大宮から小山間', '普通', 1, Type);
        AllWordChange(5, tr, 'WType', '快速:大宮から小山間', '快速', 1, Type);
        AllWordChange(4, tr, 'WType', '快速', '普通', 1, Type);
        JRE6ColorPlusName(0, tr, '各駅停車', Keihin_Color);
        JRE6ColorPlusName(1, tr, '各駅停車', Keihin_Color);
        JRE6ColorPlusName(0, tr, '快速', Keihin_Color);
        JRE6ColorPlusName(1, tr, '快速', Keihin_Color);
        JRE6ColorPlusName(2, tr, '普通', 'orange');
        JRE6ColorPlusName(3, tr, '普通', 'orange');
        JRE6ColorPlusName(4, tr, '普通', 'orange');
        JRE6ColorPlusName(5, tr, '普通', 'orange');
        JRE6ColorPlusName(2, tr, '快速', 'orange');
        JRE6ColorPlusName(3, tr, '快速', 'orange');
        JRE6ColorPlusName(4, tr, '快速', 'orange');
        JRE6ColorPlusName(5, tr, '快速', 'orange');
        JRE6ColorPlusName(2, tr, 'あかぎ', 'red');
        JRE6ColorPlusName(4, tr, 'あかぎ', 'red');
        JRE6ColorPlusName(2, tr, '草津･四万', 'red');
        JRE6ColorPlusName(4, tr, '草津･四万', 'red');
        JRE6ColorPlusName(6, tr, '', Saikyo_Color);
        JRE6ColorPlusName(7, tr, '', Saikyo_Color);
    }
    for (var td = 0; td < 8; td++) {
        document.getElementsByClassName('HDes')[td].style.paddingRight = "1.5em";
        for (var tr = 0; tr < 2; tr++) {
            //console.log(document.getElementById('Ttopic'+(td+1)+(tr+1)));
            FourLetters(td, tr, 0.8, 0, 'WType');
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).innerHTML += '<span class="bansen">番線</span>';
            //document.getElementById('TDes' + (td + 1) + (tr + 1)).style.paddingRight = "1em";
            if (Des[td][tr].length > 6) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
            }
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.textAlign = 'center';
        }
    }
    setInterval(allswitch_Akabane, 5000);
    comment.textContent+='一部表示不正確';
} else if (station == '新宿駅') {
    const table7 = document.getElementById("TLCDTable7");
    const table9 = document.getElementById("TLCDTable9");
    JRLimitedDevide(4, 'left', 'WName');
    JRLimitedDevide(5, 'left', 'WName');
    rowremove(4, 'Htopic', 'Ttopic');
    //rowremove(6, 'Htopic', 'Ttopic');
    //rowremove(8, 'Htopic', 'Ttopic');
    rowremove(0, 'HName', 'TName');
    rowremove(1, 'HName', 'TName');
    rowremove(2, 'HName', 'TName');
    rowremove(3, 'HName', 'TName');
    document.getElementById('HType1').style.width = '18%';
    document.getElementById('HType3').style.width = '18%';
    document.getElementById('HTime1').style.width = '30%';
    document.getElementById('HTime3').style.width = '30%';
    document.getElementById('HDes1').style.width = '30%';
    document.getElementById('HDes3').style.width = '30%';
    document.getElementById('HNumber1').style.width = '10%';
    document.getElementById('HNumber3').style.width = '10%';
    document.getElementById('TLCDTable1').style.width = '375px';
    document.getElementById('TLCDTable3').style.width = '375px';
    swapColumns(table7, 0, 1);
    swapColumns(table9, 0, 1);
    swapColumns(table7, 4, 5);
    swapColumns(table9, 4, 5);
    document.getElementById('HName7').style.width = '25%';
    document.getElementById('HName9').style.width = '25%';
    document.getElementById('HType7').style.width = '20%';
    document.getElementById('HType9').style.width = '20%';
    document.getElementById('Htopic7').style.width = '8%';
    document.getElementById('Htopic9').style.width = '8%';
    for (var tr = 0; tr < 2; tr++) {
        ShihatsuMove(6, tr, 'Ttopic');
        ShihatsuMove(7, tr, 'Ttopic');
        ShihatsuMove(8, tr, 'Ttopic');
        ShihatsuMove(9, tr, 'Ttopic');
        AllWordChange(3, tr, 'WType', 'かいじ', '特急', 1, Type);
        AllWordChange(3, tr, 'WType', 'あずさ', '特急', 1, Type);
        AllWordChange(3, tr, 'WType', '通勤特別快速', '通勤特快', 1, Type);
        AllWordChange(6, tr, 'WType', '普通', '各駅停車', 1, Type);
        var yokosuka = ['逗子', '大船'];
        var utsunomiya = ['宇都宮', '小金井', '古河'];
        console.log(Type[6][0]);
        if (Type[6][tr] != '') {
            document.getElementById('TName7' + (tr + 1)).textContent = '埼京線';
            JRE6ColorPlusName(6, tr, '', '#00AC9A');
        }
        if (Type[7][tr] != '') {
            if (Type[7][tr] != '普通' && Type[7][tr] != '快速' && Type[7][tr] != '特別快速') {
                document.getElementById('WName8' + (tr + 1)).textContent = Type[7][tr].replace('始発', '');
                document.getElementById('WType8' + (tr + 1)).textContent = '特急';
                JRE6ColorPlusName(7, tr, '', 'red');
            } else if (utsunomiya.includes(Des[7][tr])) {
                document.getElementById('TName8' + (tr + 1)).textContent = '宇都宮線';
                JRE6ColorPlusName(7, tr, '', 'orange');
            } else {
                document.getElementById('TName8' + (tr + 1)).textContent = '高崎線';
                JRE6ColorPlusName(7, tr, '', 'orange');
            }
        }
        if (Type[8][tr] != '') {
            document.getElementById('WType9' + (tr + 1)).textContent = '各駅停車';
            if (Des[8][tr] == '新木場') {
                document.getElementById('WName9' + (tr + 1)).textContent = 'りんかい線直通';
            } else if (Des[8][tr] == '海老名') {
                document.getElementById('WName9' + (tr + 1)).textContent = '相鉄線直通';
            }
            document.getElementById('WName9' + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-12%,0%)";
            JRE6ColorPlusName(8, tr, '', '#00AC9A');
        }
        if (Type[9][tr] != '') {
            if (Type[9][tr].startsWith('湘南')) {
                document.getElementById('WType10' + (tr + 1)).textContent = '特急';
                document.getElementById('WName10' + (tr + 1)).textContent = Type[9][tr];
                JRE6ColorPlusName(9, tr, '', 'red');
            } else if (yokosuka.includes(Des[9][tr])) {
                document.getElementById('WName10' + (tr + 1)).textContent = '横須賀線';
                JRE6ColorPlusName(9, tr, '', 'blue');
            } else {
                document.getElementById('WName10' + (tr + 1)).textContent = '東海道線';
                JRE6ColorPlusName(9, tr, '', 'orange');
            }
        }
    }
    for (var td = 2; td < 4; td++) {
        for (var tr = 0; tr < 2; tr++) {
            var LimitedType = document.getElementById('TType' + (td + 3) + (tr + 1));
            var LimitedName = document.getElementById('WName' + (td + 3) + (tr + 1));
            var LDes = document.getElementById('TDes' + (td + 3) + (tr + 1));
            var LDes2 = document.getElementById('TDes' + (td + 5) + (tr + 1));
            document.getElementById('TType' + (td - 1) + (tr + 1)).style.color = 'yellow';
            if (Type[td][tr] != '') {
                document.getElementById('TType' + (td + 1) + (tr + 1)).style.backgroundColor = 'red';
            }
            //console.log(Type[td + 2][tr]);
            if (Type[td + 2][tr] != '') {
                LimitedType.textContent = '特急';
                JRE6ColorPlusName(td + 2, tr, '特急', 'red');
            }
            if (LimitedName.textContent.length > 6) {
                LimitedName.style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            }
            if (LDes.textContent.length > 4) {
                LDes.style.transform = "scaleX(0.70)" + "translate(-20%,0%)";
            }
            if (LDes2.textContent.length > 4) {
                LDes2.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
            }
            FourLetters(td, tr, 0.5, 50, 'TDes', 5);
            FourLetters(td, tr, 0.5, 50, 'WType');
            FourLetters(td + 4, tr, 0.75, 0, 'WType');
            FourLetters(td + 6, tr, 0.75, 0, 'WType');
        }
    }
    comment.textContent = '両数や番線など一部表示不正確';
}