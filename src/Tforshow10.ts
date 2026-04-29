import { swapColumns, TypeTwoLetterDistance, DestinationTwoLetterDistance, Bansenshow, AllClassSetting, NewAllLastShow, DestinationSet } from "./module/firstDisplayEdit";
import { CarsDevideToLine, CarsInto } from "./module/carsEdit";
import { TrainNumber } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { JRK_Nobj, NagasakiAddStop } from "./detailStopData/JRK_S";
import { comment } from "./types/constants";
import { getStationConfig } from "./main";
var Guidance = document.getElementById("guidance");
if (station == '鳥栖駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '小倉駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '長崎駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
DestinationSet();
if (station != '長崎駅') {
    Bansenshow(1);
}
NewAllLastShow();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        CarsInto(td, tr, 'TCars');
        TypeColorChange(td, tr, '快速', 'orange');
        TypeColorChange(td, tr, '特急', 'red');
        TypeTwoLetterDistance(td, tr, TType, 1, 0);
        DestinationTwoLetterDistance(td, tr, TDes, 1, 0.6);
        DestinationTwoLetterDistance(td, tr, TDes, 0.4, 0.2, 3);
        if (Type[td][tr] === 'undefined') {
            console.log(":");
        } else if (Type[td][tr].length > 12) {
            document.getElementById('WType' + (td + 1) + (tr + 1))!.style.textAlign = "center";
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.boxSizing = "border-box";
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.45)" + "translate(-55%,0%)";
        } else if (Type[td][tr].length > 10) {
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.55)" + "translate(-35%,0%)";
            //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[td][tr].length > 8) {
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Type[td][tr].length > 7) {
            document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
        if (Des[td][tr].length > 9) {
            document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
        }
    }
}
if (station == '鳥栖駅') {
    for (var tr = 0; tr < 2; tr++) {
        TypeColorChange(0, tr, '', 'red');
        TypeColorChange(2, tr, '', 'red');
        TypeColorChange(4, tr, '', 'red');
    }
    Guidance!.innerHTML += '<h1 class="Cheader">長崎本線・佐世保線の特急の車両案内</h1>' +
        '<li>8両みどり、ハウステンボス・・・783系</li>' +
        '<li>8両リレーかもめ、かささぎ・・・787系</li>' +
        '<li>6両リレーかもめ、かささぎ、みどり・・・885系</li>' +
        '<li>ただし、早朝深夜の佐賀発着かささぎ6両は787系</li>';
}