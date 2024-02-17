//特急や快速等の列車名や路線名を表示させたい
if (station == '広島駅' && Indexfile == 'index4.php') {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[0][tr] == '普通') {
            document.getElementById('TName' + 1 + '' + (tr + 1)).textContent = '山陽線';
            document.getElementById('TName' + 1 + '' + (tr + 1)).style.color = '#0f0';
            document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        }
    }
    for (var tr = 0; tr < 3; tr++) {
        if (Type[3][tr] == '快速') {
            document.getElementById('TName' + 4 + '' + (tr + 1)).textContent = '安芸路ライナー';
            document.getElementById('TName' + 4 + '' + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-10%,0%)";
        }
    }
    for (var tr = 0; tr < 3; tr++) {
        if (Type[4][tr] == '快速') {
            document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = 'みよしライナー';
            document.getElementById('TName' + 5 + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-10%,0%)";
        }
    }

    LineMarkAdd(1, "R", 'red');
    LineMarkAdd(2, "B", 'skyblue');
    LineMarkAdd(3, "G", 'yellowgreen');
    LineMarkAdd(4, "Y", 'orange');
    LineMarkAdd(5, "P", 'blue');
    //広島駅のみ表のタイトルを広くしている
    for (var td = 0; td < Tablenum; td++) {
        document.getElementsByClassName('Ctitle').item(td).style.padding = '7px';
    }
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent = station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent = station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
}
if (station == '北新地駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent = station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent = station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
} else if (station == '三ノ宮駅') {
    LineMarkAdd(1, "A", 'blue');
    LineMarkAdd(2, "A", 'blue');
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)<br>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)<br>';
    }
    document.getElementById('supplement').innerHTML += '一部の快速の番線は不正確';
}
if (station == '岩国駅') {
    document.getElementById('supplement').textContent = '※番線は参考 実際の表示とは異なる ';
    if (holidayflag == 1) {
        document.getElementById('supplement').textContent += station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').textContent += station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)';
    }
    rowremove(0, 'HName', 'TName');
    rowremove(1, 'HName', 'TName');
    document.getElementById('TTable' + 1).style.width = '35em';
    document.getElementById('HType1').style.width = "30%";
    document.getElementById('HTime1').style.width = "20%";
    document.getElementById('HDes1').style.width = "40%";
    LineMarkAdd(1, " ", 'green');
    LineMarkAdd(2, " ", 'gray');
    LineMarkAdd(3, "R", 'red');
    LineMarkAdd(4, " ", 'blue');
} else if (station == '下関駅') {
    comment.textContent = '※番線は参考 実際の表示とは異なる ';
}
if (station == '新見駅') {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    JRWTrainNameColor('orange', 'orange', 'red');
}
if (station == '米原駅') {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    JRLimitedDevide(2);
    //document.getElementById('TName' + 2 + '' + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
    for (var tr = 0; tr < Type[0].length; tr++) {
        if (Type[0][tr] == '快速') {
            document.getElementById('TType' + 1 + '' + (tr + 1)).textContent = '普通';
            Type[0][tr] = '普通';
            document.getElementById('TName' + 1 + '' + (tr + 1)).textContent = '高槻から快速';
            document.getElementById('TName' + 1 + '' + (tr + 1)).style.fontSize = '1.5em';
            document.getElementById('TName' + 1 + '' + (tr + 1)).style.textAlign = 'left';
        }
        DesMiddle(0, tr, '方面');
    }

    JRWTrainNameColor('orange', 'orange', 'red');
}
if (station == '姫路駅') {
    Shinkansenflag = 2;
    JRLimitedDevide(Shinkansenflag + 0);
    JRLimitedDevide(Shinkansenflag + 1);
    JRLimitedDevide(Shinkansenflag + 3);
    JRWTrainNameColor('orange', 'orange', 'red');
    for (var tr = 0; tr < Type[0].length; tr++) {
        if (Type[Shinkansenflag + 1][tr] == '快速') {
            document.getElementById('TType' + (Shinkansenflag + 2) + '' + (tr + 1)).textContent = '普通';
            Type[(Shinkansenflag + 1)][tr] = '普通';
            document.getElementById('TName' + (Shinkansenflag + 2) + '' + (tr + 1)).textContent = '西明石から快速';
            document.getElementById('TName' + (Shinkansenflag + 2) + '' + (tr + 1)).style.fontSize = '1.5em';
            document.getElementById('TName' + (Shinkansenflag + 2) + '' + (tr + 1)).style.textAlign = 'left';
        }
        DesMiddle(3, tr, '経由');
        DesMiddle(3, tr, '方面');
    }
    /*
    document.getElementById('HName' + 3).remove();
    for (var tr = 0; tr < Type[2].length; tr++) {
        document.getElementById('TName' + 3 + '' + (tr + 1)).remove();
    }
    */
    for (var tr = 0; tr < Type[3].length; tr++) {
        if (Type[Shinkansenflag + 3][tr] == '快速') {
            document.getElementById('TType' + (Shinkansenflag + 4) + '' + (tr + 1)).textContent = '普通';
            Type[Shinkansenflag + 3][tr] = '普通';
        }
    }
    document.getElementById('supplement').textContent = '※スーパーはくと6号 9号は土休日のみ運転(表示ダイヤは平日)';
}
if (station == '糸崎駅') {
    for (var td = 0; td < Tablenum; td++) {
        rowremove(td, 'HName', 'TName');
        //表のサイズを小さくする
        document.getElementById('TTable' + (td + 1)).style.width = '30em';
        document.getElementById('TTable' + (td + 1)).style.marginLeft = '8em';
    }
}
if (station == '岡山駅') {
    //スーパーいなば
    JRLimitedDevide(1, tr);
    for (var tr = 0; tr < Type[2].length; tr++) {
        document.getElementById('TName' + 3 + '' + (tr + 1)).style.transform = "scaleX(0.70)" + "translate(-15%,0%)";
    }

    JRLimitedDevide(2);
    //瀬戸大橋線
    //JRNameDevide();
    JRLimitedDevide(4);
    for (var tr = 0; tr < Type[4].length; tr++) {
        if (Type[4][tr].includes('普通')) {
            if (Des[4][tr] == '宇野') {
                document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = '宇野みなと線';
            } else {
                document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = '瀬戸大橋線';
            }

            document.getElementById('TName' + 5 + '' + (tr + 1)).style.color = '#0f0';
            document.getElementById('TName' + 5 + '' + (tr + 1)).classList.remove("name");
        } else if (Type[4][tr].includes('特急')) {
            /*var Limited = Type[4][tr].substr(Type[4][tr].indexOf('急') + 1);
            document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = Limited;
            document.getElementById('TType' + 5 + '' + (tr + 1)).textContent = '特急';
            Type[4][tr] = '特急'*/
            //JRLimitedDevide(4);
            var Name = document.getElementById('TName' + 5 + (tr + 1)).textContent;
            console.log(Name.length + ':' + tr);
            if (Name.length > 8) {
                document.getElementById('TName' + 5 + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            } else if (Name.length > 6) {
                document.getElementById('TName' + 5 + (tr + 1)).style.transform = "scaleX(0.85)" + "translate(-10%,0%)";
            }
        } else if (Type[4][tr].includes('快速ﾏﾘﾝﾗｲﾅｰ')) {
            var Rapid = Type[4][tr].substr(Type[4][tr].indexOf('速') + 1);
            document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = Rapid;
            document.getElementById('TType' + 5 + '' + (tr + 1)).textContent = '快速';
            Type[4][tr] = '快速';
        } else if (Type[4][tr].includes('臨時')) {
            var Rapid = Type[4][tr].substr(Type[4][tr].indexOf('時') + 1);
            document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = Rapid;
            document.getElementById('TType' + 5 + '' + (tr + 1)).textContent = '臨時';
            document.getElementById('TName' + 5 + '' + (tr + 1)).style.color = 'orange';
            Type[4][tr] = '臨時';
        }
    }
    JRWTrainNameColor('orange', '#0f0', '#0f0');
}
function DesMiddle(td, tr, word) {
    var matches = new Array(orderNum);
    var Desword = new RegExp("(\\D+)" + word + "(\\D+)");
    //console.log(Desword);
    //console.log(Des[td][tr]);
    //(/(\D+)(\d+)両/);
    //matches[tr] = Des[td][tr].match(/(\D+)連絡(\D+)/);
    matches[tr] = Des[td][tr].match(Desword);
    //console.log(matches[tr]);
    if (matches[tr]) {
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);*/
        document.getElementById('TDes' + (td + 1) + (tr + 1)).innerHTML =
            '<span class="DesLeft">' + matches[tr][1] + '</span>' + '<span class="DesMiddle">' + word + '</span>' + '<span id="DesRight' + (td + 1) + (tr + 1) + '">' + matches[tr][2] + '</span>';
        var DesRight = document.getElementById('DesRight' + (td + 1) + (tr + 1));
        //console.log(DesRight.textContent.length);
        if (DesRight.textContent.length > 3) {
            console.log(DesRight.textContent.length);
            DesRight.style.display = 'inline-block';
            DesRight.style.transform = "scaleX(0.75)" + "translate(-20%,0%)";
        }
    } else {
        //console.log(td + ':' + tr + word + 'はマッチしない');
    }

}
if (station == '三ノ宮駅') {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    JRWTrainNameColor('orange', 'orange', 'red');
    for (var tr = 0; tr < orderNum; tr++) {
        DesMiddle(0, tr, '方面');
        DesMiddle(0, tr, '経由');
        DesMiddle(1, tr, '方面');
    }
}
if (station == '北新地駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        DesMiddle(1, tr, '方面');
    }
}
if (station == '徳山駅') {
    rowremove(4, 'HName', 'TName');
    document.getElementById('TTable5').style.width = '40em';
    document.getElementById('HType5').style.width = "15%";
    document.getElementById('HTime5').style.width = "25%";
    document.getElementById('HDes5').style.width = "40%";
}
if (station == '三原駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        //DesMiddle(0, tr, '連絡');
        console.log(Des[0][tr].length);
    }
    alternatingOne(0, Des, '連絡', '糸崎');
    for (var tr = alterchange + 1; tr < Des[0].length; tr++) {
        alternating2(0, Des[0][tr], '糸崎', Des, '連絡');
        altershow(0, '連絡', '糸崎', tr);
    }
}
if (TwoLetterDisflag == 1) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
}

if (station == '天王寺駅') {
    let TenDes = new Array(orderNum);
    let TenType = new Array(orderNum);
    let WoType = new Array(orderNum);
    let space = 0;
    //document.getElementsByTagName('table')[0].style.borderSpacing='10px';
    console.log(document.getElementsByTagName('th').length);
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < orderNum; tr++) {
            TenDes[tr] = document.getElementById('TDes' + (te + 1) + (tr + 1)).textContent;
            WoType[tr] = document.getElementById('WType' + (te + 1) + (tr + 1)).textContent;
            space = 56 - 14 * WoType[tr].length;
            if (space < 0) {
                space = 0;
            }
            //document.getElementById('WType' + (te + 1) + (tr + 1)).style.letterSpacing = space + "px";
            if (TenDes[tr].length > 7) {
                //文字の大きさを取得する
                document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
            }
            TenType[tr] = document.getElementById('TType' + (te + 1) + (tr + 1)).textContent;
            if (TenType[tr].length > 5) {
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.display = "inline-block";
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.70)" + "translate(-20%,0%)";
            }
        }
    }
}