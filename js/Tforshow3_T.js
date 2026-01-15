var TStart = 0;
if (JRShinkansenflag == 1) {
    TStart = 2
}
const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
for (var tr = 0; tr < 3; tr++) {
    TypeColorChange(4, tr, 'つばさ', 'red');
    if (Type[4][tr].startsWith('つばさ')) {
        document.getElementById('WType5' + (tr + 1)).textContent += '号';
    }
}

if (station == '仙台駅' && JRShinkansenflag == 0) {
    AllClassSetting('.shubetu', 'textAlign', 'left');
    AllClassSetting('.railnumber', 'color', 'red');
    for (var tr = 0; tr < 3; tr++) {
        JRLineName(2, tr, '快速', '仙石東北ﾗｲﾝ', 1);
        JRLimitedNameDevide(4, tr, 'ひたち', '特急', 'red');
    }
    for (var td = 0; td < Tablenum; td++) {
        swapColumns(ATOStable[td], 0, 1);
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = 'red';
            TypeColorChange(td, tr, '普通', 'orange');
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
            TwoLetterDistance(td, tr, Des, TDes, 0.4, 0.2, 3);
        }
    }
}
if (station == '福島駅') {
    for (var td = TStart; td < Tablenum; td++) {
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType' + (td + 1)).style.width = "38%";
        document.getElementById('HDes' + (td + 1)).style.width = "25%";
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
            TwoLetterDistance(td, tr, Type, TType, 1, 0.9);
        }
    }
    console.log(Detail);
    doallDetailShow(18, 2);
    var guide = document.getElementById('guidance');
    comment.innerHTML = '在来線東口改札を再現、阿武隈急行と飯坂線は現実の発車標自体が存在しない。<br>' + comment.innerHTML;
    guide.innerHTML += '<li>1番線と阿武隈急行線、飯坂線は同一ホーム<br></li>';
    guide.innerHTML += '<li>2･3番線が同一ホーム、4～6番線は同一ホーム<br></li>';
}