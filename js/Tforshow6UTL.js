var Mito = ['土浦', '勝田', '水戸', '高萩'];
var Toride = ['取手', '成田'];
var ATOSLimited = ['成田ｴｸｽﾌﾟﾚｽ', '湘南'];
var UTLDir = [0, 1];
function Local_Name(td, tr) {
    return document.getElementById('TName' + (td + 1) + (tr + 1));
}
if (station == '品川駅') {
    UTLDir = [1, 0];
}
JRNameDevide(2);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        CarsDefine(td, tr, '快速', '', 15);
        CarsDefine(td, tr, '快速*', '', 11);
        CarsDefine(td, tr, '普通', '', 15);
        CarsDefine(td, tr, 'ひたち', '', 10);
        CarsDefine(td, tr, 'あかぎ', '', 5);
        CarsDefine(td, tr, 'ときわ', '', 10);
        CarsDefine(td, tr, '踊り子', '', 9);
        CarsDefine(td, tr, '成田ｴｸｽﾌﾟﾚｽ', '', 12);
        CarsDefine(td, tr, '湘南', '', 9);
    }
}
console.log(Cars);
console.log(station);
for (var tr = 0; tr < orderNum; tr++) {
    JRE6ColorPlusName(UTLDir[0], tr, '普通', 'orange');
    if (Mito.includes(Des[UTLDir[0]][tr])) {
        JRE6ColorPlusName(UTLDir[0], tr, '普通', 'blue');
        JRE6ColorPlusName(UTLDir[0], tr, '快速', 'blue');
    } else if (Toride.includes(Des[UTLDir[0]][tr])) {
        JRE6ColorPlusName(UTLDir[0], tr, '普通', 'green');
        JRE6ColorPlusName(UTLDir[0], tr, '快速', 'green');
    }
    JRE6ColorPlusName(0, tr, '踊り子', 'red');
    JRE6ColorPlusName(1, tr, '踊り子', 'red');
    JRE6ColorPlusName(0, tr, 'ひたち', 'red');
    JRE6ColorPlusName(1, tr, 'ひたち', 'red');
    JRE6ColorPlusName(0, tr, 'ときわ', 'red');
    JRE6ColorPlusName(1, tr, 'ときわ', 'red');
    JRE6ColorPlusName(0, tr, '湘南', 'red');
    JRE6ColorPlusName(1, tr, '湘南', 'red');
    if (station != '上野駅') {
        JRE6ColorPlusName(UTLDir[1], tr, '普通', 'orange');
        JRE6ColorPlusName(UTLDir[1], tr, '快速', 'orange');
    }
    //LType.textContent = keyword;
}
var LCDNumber = 2;
const table2 = document.getElementById("TATOSTable2");
const table3 = document.getElementById("TATOSTable3");
const table4 = document.getElementById("TATOSTable4");
const table5 = document.getElementById("TATOSTable5");
const table6 = document.getElementById("TATOSTable6");
if (station == '上野駅') {
    LCDNumber = 1;
    for (var row = 5; row >= 0; row--) {
        swapColumns(table2, row, row + 1);
        swapColumns(table3, row, row + 1);
        swapColumns(table4, row, row + 1);
        swapColumns(table5, row, row + 1);
    }
    const topic = document.getElementsByClassName('topic');
    for (var c = 0; c < topic.length; c++) {
        document.getElementsByClassName('topic')[c].style.backgroundColor = 'black';
        document.getElementsByClassName('topic')[c].style.borderColor = 'black';
        document.getElementsByClassName('topic')[c].style.color = 'orange';
        document.getElementsByClassName('topic')[c].style.transform = "scaleX(0.80)" + "translate(-10%,0%)";;
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var LoType = document.getElementById('WType' + (td + 1) + (tr + 1));
        var LoName = document.getElementById('WName' + (td + 1) + (tr + 1));
        var LoDep = document.getElementById('TDep' + (td + 1) + (tr + 1));
        if (station == '上野駅' && td > 0) {
            ShihatsuMove(td, tr, 'Ttopic');
        } else {
            ShihatsuMove(td, tr, 'TDep');
        }

        /*if (Type[td][tr].includes('始発')) {
            LoType.textContent = Type[td][tr].replace('始発', '');
            Type[td][tr] = Type[td][tr].replace('始発', '');
            LoDep.textContent += '始発';
        }*/
        if (td < LCDNumber) {
            CarsInto(td, tr, 'WName');
            if (Des[td][tr].length > 8) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
            } else if (Des[td][tr].length > 6) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-20%,0%)";
            } else if (Des[td][tr].length == 5) {
                document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
            }
            if (Type[td][tr].length > 6) {
                document.getElementById('WType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.6)" + "translate(-30%,0%)";
            } else if (Type[td][tr].length == 4) {
                document.getElementById('WType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-10%,0%)";
            }
        } else {
            CarsInto(td, tr, 'TCars');
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.textAlign = 'center';
            TwoLetterDistance(td, tr, Des, TDes, 1, 1);
            if (!Type[td][tr].startsWith('普通') && !Type[td][tr].startsWith('快速') && !Type[td][tr].startsWith('特別快速') && Type[td][tr] != '') {
                var LName = document.getElementById('TName' + (td + 1) + (tr + 1));
                document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr];
                if (station == '上野駅' && (Type[td][tr].startsWith('ラビット') || Type[td][tr].startsWith('アーバン'))) {
                    Type[td][tr]= '快速';
                    document.getElementById('WType' + (td + 1) + (tr + 1)).style.color = 'orange';
                    LName.textContent = LName.textContent.replace('快速', '');
                    document.getElementById('TCars' + (td + 1) + (tr + 1)).textContent = '15両';
                } else {
                    Type[td][tr] = '特急';
                    document.getElementById('WType' + (td + 1) + (tr + 1)).style.color = 'red';
                    LName.textContent = LName.textContent.replace('特急', '');
                }
            }
            FourLetters(td, tr, 0.7, 7);
            //console.log(document.getElementById('Ttopic'+(tr+1)+(ts+1)));
            if (station == '品川駅') {
                document.getElementById('Ttopic' + (td + 1) + (tr + 1)).innerHTML += '<span class="bansen">番線</span>';
            }
        }

    }
}
console.log(Type);
allLastShow();
comment.innerHTML = '両数や番線など一部表示不正確<br>';
//allalterUTL_setting('特急');
Bansenshow(0, LCDNumber);
setInterval(allswitch_UTL, 5000);