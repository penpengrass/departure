
msg = '<p>特急 A:あをによし U:アーバンライナー H:ひのとり I:伊勢志摩ライナー V:ビスタカー</p>';
document.getElementById('supplement').innerHTML = msg;
var ExpressMsg = '竹田で新田辺行き<span class="KinLocolor">普通</span>に連絡します';
var LocalMsg = '竹田で奈良行き<span class="KinExcolor">急行</span>に連絡します';
function KyotoRenraku(td, tr) {
    var element = document.getElementById('TConnection' + (0 + 1) + (tr + 1));
    if (Type[td][tr] == '急普') {
        Connecting[td][tr] = ExpressMsg;
        Type[td][tr] = '急行';
        document.getElementById('WType' + 1 + (tr + 1)).textContent = '急行';
        if (tr < 2) {
            if (Des[td][tr] == '大和西大寺') {
                Connecting[td][tr] = '竹田で新田辺行き<span class="KinLocolor">普通</span>に  大和西大寺で奈良行きに連絡します';
                element.classList.add("news-banner__content");
            } else if (Des[td][tr] == '奈良*') {
                Connecting[td][tr] = '竹田で新田辺行き<span class="KinLocolor">普通</span>に  大和西大寺で橿原神宮前行き<span class="KinExcolor">急行</span>に連絡します';
                element.classList.add("news-banner__content");
                Des[td][tr] = '奈良';
            }
        }
        if (Des[td][tr] == '奈良*') {
            Des[td][tr] = '奈良'
        }
    } else if (Type[td][tr] == '普急') {
        Connecting[td][tr] = LocalMsg;
        Type[td][tr] = '普通';
        document.getElementById('WType' + 1 + (tr + 1)).textContent = '普通';
    }
    if (Connecting[td][tr] !== undefined) {
        document.getElementById('TConnection' + (td + 1) + (tr + 1)).innerHTML = Connecting[td][tr];
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        AllWordReplace(td, tr, Type, '快速急行', '快急');
        AllWordReplace(td, tr, Type, '区間準急', '区準');
        LowerDetail(td, tr);
        KyotoRenraku(td, tr);
    }
}
DetailShow(Kinobj, " ");
if (station == '京都駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
    }
    //高の原駅停車を追加
    for (var tr = 0; tr < orderNum; tr++) {
        var LType = Type[0][tr];
        var tr_hour = TableHour[0][tr];
        var tr_min = TableMin[0][tr];
        if (LType.includes('特急')) {
            if (LType != '特急A' && (tr_hour > 14)) {
                console.log(tr + "は高の原停車");
                DetailReplace(0, tr, '丹波橋', '丹波橋 高の原');
            } else if (tr_hour > 9 && LType != '特急S' && Des[0][tr] == '橿原神宮前') {
                DetailReplace(0, tr, '大和西大寺', '大和西大寺 西ノ京');
            }
        } else if (LType == '急行') {
            if (holidayflag == 0) {
                if (whetherStop(9, 40, tr_hour, tr_min, 16, 4)) {
                } else {
                    DetailReplace(0, tr, '西ノ京 ', '');
                }
            } else if (holidayflag == 1) {
                if (whetherStop(8, 10, tr_hour, tr_min, 16, 44)) {
                } else {
                    DetailReplace(0, tr, '西ノ京 ', '');
                }
            }
        }
        var element = document.getElementById('TConnection' + (0 + 1) + (tr + 1));
        if (tr < 2) {
            if (Type[0][tr] == '急行' && Des[0][tr] == '大和西大寺' && element.textContent == '') {
                element.innerHTML += ' 大和西大寺で奈良行きに連絡します';
            }
        }
    }
}
if (station == '奈良駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
    }
    for (var tr = 0; tr < orderNum; tr++) {
        var LType = Type[1][tr];
        var tr_hour = TableHour[1][tr];
        var tr_min = TableMin[1][tr];
        if (LType.includes('特急')) {
            if (LType != '特急A' && whetherStop(5, 0, tr_hour, tr_min, 12, 3)) {
                DetailReplace(1, tr, '丹波橋', '高の原 丹波橋');
            }
        }
    }
    LineMarkAdd(1, "A", 'red');
    LineMarkAdd(2, "B", 'orange');
}
if (station == '名古屋駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += '<p>名古屋駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += '<p>名古屋駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
    }
    for (var tr = 0; tr < orderNum; tr++) {
        var LType = Type[1][tr];
        var LDes = Des[1][tr];
        var tr_hour = TableHour[1][tr];
        var tr_min = TableMin[1][tr];
        if (LDes != '大阪難波' && whetherStop(17, 40, tr_hour, tr_min, 23, 30)) {
            DetailReplace(1, tr, '伊勢中川', '久居 伊勢中川');
        }
        var LConnection = document.getElementById('TConnection1' + (tr + 1));
        if (Type[0][tr].includes('*') && LConnection.textContent == '') {
            document.getElementById('TConnection1' + (tr + 1)).innerHTML = '６両編成  前４両は３扉';
            Type[0][tr] = Type[0][tr].replace('*', '');
        }
    }
}
allKinColor();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        //DetailBanner(td, tr, 18);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
        if (Des[td][tr].length > 4) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-5%,0%)";
        }
        if (Type[td][tr].length > 2) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.77)" + "translate(-6%,0%)";
        }
        var color = document.getElementById('WType' + (td + 1) + (tr + 1)).style.backgroundColor;
        if (Type[td][tr] == '') {
            document.getElementById('TNum' + (td + 1) + (tr + 1)).style.backgroundColor = 'black';
        } else if (Type[td][tr].includes('特急')) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.border = 'white 3px solid';
        } else {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.border = color + ' 3px solid';
        }
    }
}
allLastShow();
comment.innerHTML += '停車駅や一部表示は不正確';
if (station == '鶴橋駅') {
    for (tr = 0; tr < orderNum; tr++) {
        if (Type[1][tr] == '準急' && Des[1][tr] == '高安') {
            Detail[1][tr] = '布施 八尾 河内山本';
        }
    }
}
doallDetailShow(22);