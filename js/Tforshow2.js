
msg = '<p>特急 A:あをによし U:アーバンライナー H:ひのとり I:伊勢志摩ライナー V:ビスタカー</p>';
document.getElementById('supplement').innerHTML = msg;
var ExpressMsg = '竹田で新田辺行き<span class="KinLocolor">普通</span>に連絡';
var LocalMsg = '竹田で奈良行き<span class="KinExcolor">急行</span>に連絡';
function KyotoRenraku(td, tr) {
    if (Type[td][tr] == '急普') {
        Connecting[td][tr] = ExpressMsg;
        Type[td][tr] = '急行';
        document.getElementById('TType' + 1 + (tr + 1)).textContent = '急行';
    } else if (Type[td][tr] == '普急') {
        Connecting[td][tr] = LocalMsg;
        Type[td][tr] = '普通';
        document.getElementById('TType' + 1 + (tr + 1)).textContent = '普通';
    }
    if (Connecting[td][tr] !== undefined) {
        document.getElementById('TConnection' + (td + 1) + (tr + 1)).innerHTML = Connecting[td][tr];
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[td][tr].length > 4) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-5%,0%)";
        } else if (Des[td][tr].length < 3) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.letterSpacing = '1em';
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.textIndent = '0.9em';
        } else if (Des[td][tr].length < 4) {
            console.log(td + ":" + tr);
        }
        if (Type[td][tr].length > 2) {
            document.getElementById('IType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-0%,0%)";
        }
        KyotoRenraku(td, tr);
    }
}
DetailShow(Kinobj, "　");
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        DetailBanner(td, tr, 18);
    }
}
if (station == '京都駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
    }
    //高の原駅停車を追加
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[0][tr].includes('特急') && TableHour[0][tr] > 15) {
            console.log("高の原停車");
            limited[5].splice(2, 0, '高の原');
            limited[6].splice(2, 0, '高の原');
            limited[7].splice(2, 0, '高の原');
            break;
        }
    }
}
if (station == '奈良駅') {
    if (holidayflag == 1) {
        document.getElementById('supplement').innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
    } else if (holidayflag == 0) {
        document.getElementById('supplement').innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
    }
}