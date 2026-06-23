import { DetailReplace_Set } from "./module/detailSimpleEdit";
import { NewAllLastShow, TwoLetterDistance, flagmarkerase, JRNameDevide, Bansenshow, DestinationSet } from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
import { JRSSobj } from "./detailStopData/JRW_S";
import { allJRSSColor } from "./typeColor";
import { allSanyoShinkansenSwitch } from "./module/displaySwitch";
import { trainTables } from "./types/trainTable";
import { TDes } from "./types/constants";
var TablenumSub = Tablenum;
if (Indexfile == 'index4_S2.php') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
function ShinDetailSetting(td: number, tr: number, Utype: any, Uobj: any) {
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            trainTables[td].trains[tr].cars = Uobj[key].cars;
            trainTables[td].trains[tr].jiyuseki = Uobj[key].jiyu;
            //document.getElementById(TType).style.color = Uobj[key].color;
        }
    }
}
if (Indexfile == 'index4_S2.php') {
    NonGouflag = 1;
    JRNameDevide(2);
    DestinationSet();
    Bansenshow(1, 2);
    NewAllLastShow();
    allJRSSColor();
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            //この部分は未完成
                ShinDetailSetting(td, tr, Type[td][tr], JRSSobj);
                if (Type[td][tr].includes('つばめ*') || Type[td][tr].includes('さくら*')) {
                    trainTables[td].trains[tr].cars = '6両編成';
                    trainTables[td].trains[tr].jiyuseki = '自由席1-3,5,6号車';
                }
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = trainTables[td].trains[tr]?.cars ?? "";
            if (Type[td][tr] != '' && tr < 2) {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.innerHTML = '停車駅:' + '<br>　　';
                document.getElementById('TDetail'+ (td + 1) + (tr + 1))!.classList.remove("news-banner__content");
            }
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
    flagmarkerase(0, 'TType', '*');
    flagmarkerase(1, 'TType', '*');

    if (station == '岡山駅' || station == '広島駅') {
        setInterval(allSanyoShinkansenSwitch, 5000);
    } else {
        //setInterval(allTsurugaShinkansenSwitch, 5000);
    }
} else if (JRShinkansenflag == 1) {
    NonGouflag = 1;
    JRNameDevide(2);
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            const _Type = trainTables[td].trains[tr].type;
            if (_Type == 'のぞみ' || _Type == 'ひかり') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1))!.textContent = '16両';
            } else if (_Type != '') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1))!.textContent = '8両';
            }
            if (_Type == 'のぞみ') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-2号車';
            } else if (_Type == 'さくら' || _Type == 'みずほ') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-3号車';
            } else if (_Type == 'ひかり') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-5号車';
            } else if (_Type != '') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-3,7,8号車';
            }
        }
    }
    NewAllLastShow();
}

LastShowFlag = 1;