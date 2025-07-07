JRNameDevide();

if (station == '新函館北斗駅') {
    console.log(Type);
    for (var tr = 1; tr < 3; tr++) {
        if (Type[0][tr - 1] != '') {
            document.getElementById('TExplain1' + tr).textContent = '10両編成';
        }
    }
    for (var tr = 0; tr < 3; tr++) {
        TypeColorChange(1, tr, '特急', 'red');
        TypeColorChange(1, tr, '快速', 'orange');
    }
    comment.textContent = '番線と停車駅は不正確';
} else if (station == '札幌駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        AllStartWordReplace(0, tr, Type, 'とかち', '特急とかち');
        AllStartWordReplace(0, tr, Type, 'おおぞら', '特急おおぞら');
        AllStartWordReplace(0, tr, Type, '北斗', '特急北斗');
        AllStartWordReplace(0, tr, Type, 'すずらん', '特急すずらん');
        var LType2 = document.getElementById('TType' + 2 + (tr + 1));
        var LWType2 = document.getElementById('WType' + 2 + (tr + 1));
        var LName2 = document.getElementById('TName' + 2 + (tr + 1));
        if (Type[1][tr].length > 11) {
            LType2.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LType4 = document.getElementById('TType' + 4 + (tr + 1));
        if (Type[3][tr].length > 11) {
            LType4.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LDes5 = document.getElementById('TDes' + 5 + (tr + 1));
        if (Des[4][tr].length > 5) {
            console.log(LDes5.textContent);
            LDes5.style.transform = "scaleX(0.70)" + "translate(-25%,0%)";
        }
        if (Type[1][tr].includes('普通')) {
            //LWType2.textContent = '普通';
            LName2.textContent = '';
        }
    }
    comment.textContent = '特急の臨時列車、両数は不正確';
    console.log(document.getElementById("WType" + (1 + 1) + "" + (0 + 1)));
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            TypeColorChange(td, tr, '特急', 'red');
            TypeColorChange(td, tr, '快速', 'orange');
            if (Type[td][tr] == '普通*') {
                if (tr == 0) {
                    Cars[td][tr] = '６';
                }
                Type[td][tr] = '普通';
            } else if (Type[td][tr] == '普通+') {
                if (tr == 0) {
                    Cars[td][tr] = '２';
                }
                Type[td][tr] = '普通';
            } else if (Type[td][tr] == '普通') {
                if (tr == 0) {
                    Cars[td][tr] = '３'
                }
            }
        }
    }
}
allLastShow();
Bansenshow();