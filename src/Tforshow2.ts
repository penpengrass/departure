import { DetailShow, LowerDetail, doallDetailShow } from "./module/detailMainPut";
import { Kinobj } from "./detailStopData/Kindetailset";
import { DetailReplace, whetherStop } from "./module/detailSimpleEdit";
import { AllWordChange, AllWordReplace, NewAllLastShow, TwoLetterDistance, LineMarkAdd, comment } from "./module/firstDisplayEdit";
import { allKinColor } from "./typeColor";
import { getStationConfig } from "./main";
document.getElementById('supplement')!.innerHTML = '<p>特急 A:あをによし U:アーバンライナー H:ひのとり I:伊勢志摩ライナー V:ビスタカー</p>';
var ExpressMsg = '竹田で新田辺行き<span class="KinLocolor">普通</span>に連絡します';
var LocalMsg = '竹田で奈良行き<span class="KinExcolor">急行</span>に連絡します';
function KyotoRenraku(td: number, tr: number) {
    var element = document.getElementById('TConnection' + (0 + 1) + (tr + 1));
    var Connecting = "";
    if (element && Type[td][tr] == '急普') {
        Connecting = ExpressMsg;
        Type[td][tr] = '急行';
        document.getElementById('WType' + 1 + (tr + 1))!.textContent = '急行';
        if (tr < 2) {
            if (Des[td][tr] == '大和西大寺') {
                Connecting = '竹田で新田辺行き<span class="KinLocolor">普通</span>に  大和西大寺で奈良行きに連絡します';
                element.classList.add("news-banner__content");
            } else if (Des[td][tr] == '奈良*') {
                Connecting = '竹田で新田辺行き<span class="KinLocolor">普通</span>に  大和西大寺で橿原神宮前行き<span class="KinExcolor">急行</span>に連絡します';
                element.classList.add("news-banner__content");
                Des[td][tr] = '奈良';
            }
        }
        if (Des[td][tr] == '奈良*') {
            Des[td][tr] = '奈良'
        }
    } else if (Type[td][tr] == '普急') {
        Connecting = LocalMsg;
        Type[td][tr] = '普通';
        document.getElementById('WType' + 1 + (tr + 1))!.textContent = '普通';
    }
    if (Connecting !== undefined) {
        document.getElementById('TConnection' + (td + 1) + (tr + 1))!.innerHTML = Connecting;
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        AllWordReplace(td, tr, Type, '快速急行', '快急');
        AllWordReplace(td, tr, Type, '区間準急', '区準');
        AllWordChange(td, tr, Des, '難波', '大阪難波');
        AllWordChange(td, tr, Des, '上本町', '大阪上本町');
        LowerDetail(td, tr);
        KyotoRenraku(td, tr);
    }
}
if (station == '鶴橋駅') Dtype = [1, 0];
else if (station == '名古屋駅') Dtype = [3, 3];
//DetailShow(Kinobj, " ");
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
//NewAllLastShow();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        //DetailBanner(td, tr, 18);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
        if (Des[td][tr].length > 4) {
            document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-5%,0%)";
        }
        if (Type[td][tr].length > 2) {
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.77)" + "translate(-0%,0%)";
        }
        var d_Type = document.getElementById('WType' + (td + 1) + (tr + 1));
        var color = d_Type ? getComputedStyle(d_Type).backgroundColor : '';
        if (Type[td][tr] == '') {
            document.getElementById('TNum' + (td + 1) + (tr + 1))!.style.backgroundColor = 'black';
        } else if (Type[td][tr].includes('特急')) {
            document.getElementById('WType' + (td + 1) + (tr + 1))!.style.border = 'white 3px solid';
        } else {
            document.getElementById('WType' + (td + 1) + (tr + 1))!.style.border = color + ' 3px solid';
        }
    }
}
comment!.innerHTML += '停車駅や一部表示は不正確';
if (station != '伊勢中川駅') {
    doallDetailShow(20);
}
allKinColor();