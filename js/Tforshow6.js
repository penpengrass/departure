if (station == '長野駅') {
    for (let tr = 0; tr < 3; tr++) {
        if (Type[0][tr] == '普通') {
            if (['妙高高原', '豊野'].includes(Des[0][tr])) {
                Type[0][tr] += ' 北しなの線';
                document.getElementById('TType' + 1 + '' + (tr + 1)).textContent = Type[0][tr];
                document.getElementsByClassName('shubetu' + 1 + '' + (tr + 1))[0].style.backgroundColor = '#0000cc';
                //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
            } else {
                Type[0][tr] += ' 飯山線';
                document.getElementById('TType' + 1 + '' + (tr + 1)).textContent = Type[0][tr];
                document.getElementsByClassName('shubetu' + 1 + '' + (tr + 1))[0].style.backgroundColor = '#009900';
                //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
            }
        }
        if (Des[0][tr].length > 3) {
            if (Des[0][tr].length < 5) {
                //console.log(Des[0][tr].length);
                document.getElementsByClassName('Destination' + 1 + (tr + 1))[0].style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
            } else {
                document.getElementsByClassName('Destination' + 1 + (tr + 1))[0].style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
            }
        }
        if (Type[1][tr] == '普通') {
            Type[1][tr] += ' しなの鉄道線';
            document.getElementById('TType' + 2 + '' + (tr + 1)).textContent = Type[1][tr];
            document.getElementsByClassName('shubetu' + 2 + '' + (tr + 1))[0].style.backgroundColor = '#0044ff';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        }
        if (Type[1][tr] == '快速しなの') {
            Type[1][tr] = '快速 しなのｻﾝｾｯﾄ';
            document.getElementById('WType' + 2 + '' + (tr + 1)).textContent = Type[1][tr];
            document.getElementsByClassName('shubetu' + 2 + '' + (tr + 1))[0].style.backgroundColor = '#bb0000';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        }
        if (Type[2][tr] == '普通') {
            Type[2][tr] += ' 篠ノ井線';
            document.getElementById('TType' + 3 + '' + (tr + 1)).textContent = Type[2][tr];
            document.getElementsByClassName('shubetu' + 3 + '' + (tr + 1))[0].style.backgroundColor = '#aa5500';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        } else if (Type[2][tr].includes('特急')) {
            document.getElementsByClassName('shubetu' + 3 + '' + (tr + 1))[0].style.backgroundColor = '#bb0000';
        }
    }
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent = '長野駅のみ土休日ダイヤに対応(表示は土休日ダイヤ) 非表示の臨時列車の可能性あり';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent = '長野駅のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
    Bansenshow();
}
if (station == '松本駅') {
    for (var tr = 0; tr < 3; tr++) {
        JRE6Color(0, '普通', 'blue');
        JRE6Color(0, '快速', 'blue');
        JRE6Color(0, '特急', 'red');
        /*if (Type[0][tr] == '普通' || Type[0][tr].includes('快速')) {
            doType[0][tr].style.backgroundColor = 'blue';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        } else if (Type[0][tr].includes('特急')) {
            doType[0][tr].style.backgroundColor = 'red';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        }*/
        if (Type[1][tr].includes('普通')) {
            document.getElementsByClassName('shubetu' + 2 + '' + (tr + 1))[0].style.backgroundColor = '#ffa500';
            if (Type[1][tr].includes('(東)')) {
                document.getElementById('TType' + 2 + '' + (tr + 1)).textContent = '普通(ワンマン)';
            }
        } else if (Type[1][tr].includes('特急')) {
            document.getElementsByClassName('shubetu' + 2 + '' + (tr + 1))[0].style.backgroundColor = 'red';
        }
        if (Type[2][tr] == '普通' || Type[2][tr] == '快速') {
            document.getElementsByClassName('shubetu' + 3 + '' + (tr + 1))[0].style.backgroundColor = '#ff6e00';
        } else if (Type[2][tr].includes('特急')) {
            document.getElementsByClassName('shubetu' + 3 + '' + (tr + 1))[0].style.backgroundColor = 'red';
        }
        if (Type[3][tr] == '普通') {
            document.getElementsByClassName('shubetu' + 4 + '' + (tr + 1))[0].style.backgroundColor = '#874da1';
        } else if (Type[3][tr].includes('特急')) {
            document.getElementsByClassName('shubetu' + 4 + '' + (tr + 1))[0].style.backgroundColor = 'red';
        }
        //行先の文字の大きさ
        if (Des[0][tr].length > 3) {
            if (Des[0][tr].length < 5) {
                console.log(Des[0][tr].length);
                document.getElementsByClassName('Destination' + 1 + (tr + 1))[0].style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
            } else {
                document.getElementsByClassName('Destination' + 1 + (tr + 1))[0].style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
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
    document.getElementById('supplement').textContent = '土休日は特急信州運休 あずさ しなのの臨時列車あり(普通列車 定期特急は平日と同じ)';
} else if (station == '横浜駅') {
    for (var td = 0; td < 6; td++) {
        document.getElementsByClassName('HDes')[td].style.paddingRight = "1.5em";
        for (var tr = 0; tr < 2; tr++) {
            //console.log(document.getElementById('Ttopic'+(td+1)+(tr+1)));
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).innerHTML += '<span class="bansen">番線</span>';
            //document.getElementById('TDes' + (td + 1) + (tr + 1)).style.paddingRight = "1em";
        }
    }
    JRE6Color(0, '各駅停車', '#00b2e5');
    JRETypeAdd(0, '各駅停車', ' 根岸線');
    JRETypeAdd(0, '快速', ' 根岸線');
    JRE6Color(0, '快速', '#00b2e5');
    JRE6Color(2, '普通', 'orange');
    JRE6Color(3, '普通', 'orange');
    JRE6Color(2, '特急', 'red');
    JRE6Color(3, '特急', 'red');
    JRETypeAdd(2, '普通', ' 東海道線');
    JRETypeAdd(3, '普通', ' 上野東京ﾗｲﾝ');
    var yokohama = ['橋本', '八王子'];
    JRETypeSelectAdd(1, '', yokohama, ' 横浜線', ' 京浜東北線');
    JRE6Color(1, '京浜東北線', '#00b2e5');
    JRE6Color(1, '横浜線', 'yellowgreen');
    var shonan1 = ['平塚', '小田原', '国府津', '逗子*', '大船*'];
    JRETypeSelectAdd(4, '普通', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    JRETypeSelectAdd(4, '快速', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    flagmarkerase(4, 'TDes');
    JRE6Color(4, '特急', 'red');
    var shonan2 = ['籠原', '高崎', '前橋', '宇都宮', '小金井', '古河'];
    JRETypeSelectAdd(5, '普通', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    JRETypeSelectAdd(5, '快速', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
    JRE6Color(4, '湘南新宿ﾗｲﾝ', '#e21f26');
    JRE6Color(4, '横須賀線', 'blue');
    JRE6Color(5, '湘南新宿ﾗｲﾝ', '#e21f26');
    JRE6Color(5, '横須賀線', 'blue');
    JRE6Color(5, '特急', 'red');
    for (td = 0; td < Tablenum; td++) {
        for (tr = 0; tr < orderNum; tr++) {
            if (Des[td][tr].length > 6) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
            }
        }
    }
    comment.textContent = '両数表示は今後更新';
}