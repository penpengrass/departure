import { NewAllLastShow, TwoLetterDistance, flagmarkerase } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { FourLetters, swapColumns, NameColorchange, JRLineName, LastShows, rowremove, JRLimitedNameDevide, JRLimitedDevide, AllClassSetting, allTwoLettersDistance } from "./module/firstDisplayEdit";
import { doallDetailShow } from "./module/detailMainPut";
import { comment } from "./types/constants";
import { getStationConfig } from "./main";
var TStart = 0;
if (JRShinkansenflag == 1) {
    TStart = 2
}
const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
if (station == '仙台駅' && JRShinkansenflag == 0) {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
if (station == '福島駅') {
    for (var td = TStart; td < Tablenum; td++) {
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType' + (td + 1))!.style.width = "38%";
        document.getElementById('HDes' + (td + 1))!.style.width = "25%";
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
            TwoLetterDistance(td, tr, Type, TType, 1, 0.9);
        }
    }
    doallDetailShow(18, 2);
    var guide = document.getElementById('guidance');
    NewAllLastShow();
    comment!.innerHTML = '在来線東口改札を再現、阿武隈急行と飯坂線は現実の発車標自体が存在しない。<br>' + comment!.innerHTML;
    guide!.innerHTML += '<li>1番線と阿武隈急行線、飯坂線は同一ホーム<br></li>';
    guide!.innerHTML += '<li>2･3番線が同一ホーム、4～6番線は同一ホーム<br></li>';
} else if (station == '新白河駅') {
    allTwoLettersDistance(Des, TDes, 0.5, 0.7);
    allTwoLettersDistance(Type, TType, 1, 0.9);
    AllClassSetting('.HrailNumber', 'textAlign', 'center');
    for (var td = TStart; td < Tablenum; td++) {
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType' + (td + 1))!.style.width = "38%";
        document.getElementById('HDes' + (td + 1))!.style.width = "25%";
    }
    doallDetailShow(18, 2);
    NewAllLastShow();
}
flagmarkerase(0, 'WType');
flagmarkerase(1, 'WType');
flagmarkerase(1, 'WType', '+');