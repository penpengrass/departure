//特急や快速等の列車名や路線名を表示させたい
if (station == '広島駅') {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[0][tr] == '普通') {
            document.getElementById('TName' + 1 + '' + (tr + 1)).textContent = '山陽線';
            document.getElementById('TName' + 1 + '' + (tr + 1)).style.color = 'greenyellow';
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

}
if(station=='岩国駅'){
    for(var tr=0;tr<Des[0].length;tr++){
        if(Des[0][tr]=='徳山'){
            document.getElementById('TName'+1+''+(tr+1)).textContent='岩徳線';
            document.getElementById('TName'+1+''+(tr+1)).style.textAlign='center';
        }else if(Des[0][tr]=='錦町'){
            document.getElementById('TName'+1+''+(tr+1)).textContent='錦川鉄道';
            document.getElementById('TName'+1+''+(tr+1)).style.textAlign='center';
        }
    }
    document.getElementById('supplement').textContent='※番線は参考 実際の表示とは異なる';
}
//JR西日本の特急名を表で分ける関数
function JRWLimitedDevide(Tablenum, tr) {
    var Limited = Type[Tablenum][tr].substr(Type[Tablenum][tr].indexOf('急') + 1);
    document.getElementById('TName' + (Tablenum + 1) + '' + (tr + 1)).textContent = Limited;
    document.getElementById('TType' + (Tablenum + 1) + '' + (tr + 1)).textContent = '特急';
    Type[Tablenum][tr] = '特急'
}
if (station == '岡山駅') {
    for (var tr = 0; tr < Type[1].length; tr++) {
        if (Type[1][tr].includes('特急')) {
            JRWLimitedDevide(1, tr);
            document.getElementById('TName' + 2 + '' + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
        }
    }
    for (var tr = 0; tr < Type[4].length; tr++) {
        if (Type[4][tr].includes('特急')) {
            JRWLimitedDevide(4, tr);
        }
    }
    //瀬戸大橋線
    for (var tr = 0; tr < Type[2].length; tr++) {
        if (Type[2][tr].includes('普通')) {
            if (Des[2][tr] == '宇野') {
                document.getElementById('TName' + 3 + '' + (tr + 1)).textContent = '宇野みなと線';
            } else {
                document.getElementById('TName' + 3 + '' + (tr + 1)).textContent = '瀬戸大橋線';
            }

            document.getElementById('TName' + 3 + '' + (tr + 1)).style.color = 'greenyellow';
            document.getElementById('TName' + 3 + '' + (tr + 1)).classList.remove("name");
        } else if (Type[2][tr].includes('特急')) {
            /*var Limited = Type[2][tr].substr(Type[2][tr].indexOf('急') + 1);
            document.getElementById('TName' + 3 + '' + (tr + 1)).textContent = Limited;
            document.getElementById('TType' + 3 + '' + (tr + 1)).textContent = '特急';
            Type[2][tr] = '特急'*/
            JRWLimitedDevide(2, tr);
            var Name = document.getElementById('TName' + 3 + (tr + 1)).textContent;
            if (Name.length > 8) {
                document.getElementById('TName' + 3 + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            }
        } else if (Type[2][tr].includes('快速マリンライナー')) {
            var Rapid = Type[2][tr].substr(Type[2][tr].indexOf('速') + 1);
            document.getElementById('TName' + 3 + '' + (tr + 1)).textContent = Rapid;
            document.getElementById('TName' + 3 + '' + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            document.getElementById('TType' + 3 + '' + (tr + 1)).textContent = '快速';
            Type[2][tr] = '快速';
        }
    }
}
if (station == '三原駅') {
    alternatingOne(0,Des, '連絡', '糸崎');
    for (var t = alterchange+1; t < Des[0].length; t++) {
        //alternating2(0,Des[0][t],'糸崎',Des, '連絡');
        altershow(0,'連絡','糸崎',t);
    }
}

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
                console.log(Des[0][tr].length);
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
            document.getElementById('TType' + 2 + '' + (tr + 1)).style.transform = "scaleX(0.9)" + "translate(-6%,0%)";
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
}
if (station == '松本駅') {
    for (let tr = 0; tr < 3; tr++) {
        if (Type[0][tr] == '普通' || Type[0][tr].includes('快速')) {
            document.getElementsByClassName('shubetu' + 1 + '' + (tr + 1))[0].style.backgroundColor = 'blue';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        } else if (Type[0][tr].includes('特急')) {
            document.getElementsByClassName('shubetu' + 1 + '' + (tr + 1))[0].style.backgroundColor = 'red';
            //document.getElementById('TName' + 1 + '' + (tr + 1)).classList.remove("name");
        }
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
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.letterSpacing = space + "px";
            if (TenDes[tr].length > 7) {
                //文字の大きさを取得する
                document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
            }
            TenType[tr] = document.getElementById('TType' + (te + 1) + (tr + 1)).textContent;
            if (TenType[tr].length > 4) {
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            }
        }
    }
}
if (Indexfile=='index7.php') {
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < orderNum; tr++) {
            console.log(Type[te][tr]);
            if (Type[te][tr] === 'undefined') {
                console.log(":");
            } else if (Type[te][tr].length > 12) {
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            } else if (Type[te][tr].length > 10) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
                //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (Type[te][tr].length > 8) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.70)" + "translate(-10%,0%)";
            } else if (Type[te][tr].length > 7) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
            }
        }
    }
}
//下にバナーを入れたい
/*
document.getElementById('TTLine13').textContent='aaaaaaaaaaaaaaaaaaaa';
document.getElementById('TTLine13').style.color='white';
document.getElementById('TTLine13').style.fontSize='30px';
document.getElementById('TTLine13').style.height='30px';
document.getElementById('TTLine13').classList.add("news-banner");
//document.getElementById('TTLineContents13').classList.add("news-banner__content");
*/