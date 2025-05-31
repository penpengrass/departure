if (station == '鳥栖駅') {
    for (var tr = 0; tr < 2; tr++) {
        if (Type[2][tr].includes('みどり(リレーかもめ')) {
            Des[2][tr] = '佐世保･長崎';
        }
        if (Des[2][tr] == '武雄温泉') {
            Des[2][tr] = '長崎';
        }
        AllWordChange(2, tr, Des, 'ハウステンボス･佐世保', 'ﾊｳｽﾃﾝﾎﾞｽ･佐世保');
    }
}
allLastShow();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TypeColorChange(td, tr, '快速', 'orange');
        TypeColorChange(td, tr, '特急', 'red');
        TwoLetterDistance(td, tr, Type, TType, 1, 0);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
        TwoLetterDistance(td, tr, Des, TDes, 0.4, 0.2, 3);
        if (Type[td][tr] === 'undefined') {
            console.log(":");
        } else if (Type[td][tr].length > 12) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.boxSizing = "border-box";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-47%,0%)";
        } else if (Type[td][tr].length > 10) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[td][tr].length > 8) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Type[td][tr].length > 7) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
        if(Des[td][tr].length>9){
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
        }
    }
}
if (station == '鳥栖駅') {
    for (var tr = 0; tr < 2; tr++) {
        TypeColorChange(0, tr, '', 'red');
        TypeColorChange(2, tr, '', 'red');
        TypeColorChange(4, tr, '', 'red');
    }
}
Bansenshow(1);