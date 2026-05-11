import { Meiobj } from './detailStopData/Meidenset';
import { TypeColorChange, TypeColorChange2 } from "./module/colorSimpleSet";
import { TypeTwoLetterDistance, DestinationTwoLetterDistance, JRLimitedNumber, holiday_F, NewAllLastShow, DestinationSet, TrainTypeSet } from "./module/firstDisplayEdit";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { getStationConfig } from './main';
import { trainTables } from './types/trainTable';
function allJRC_Reduction() {
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < Tablenums[te]; tr++) {
            const _Type = trainTables[te].trains[tr].type;
            TypeColorChange(te, tr, '快速', 'orange');
            TypeColorChange(te, tr, '特急', 'red');
            TypeColorChange(te, tr, 'ホームライナー', 'red');
            TypeColorChange(te, tr, '快特', 'red');
            if (_Type === 'undefined') {
                console.log(":");
            } else if (_Type.length > 12) {
                document.getElementById('WType' + (te + 1) + (tr + 1))!.style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.boxSizing = "border-box";
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            } else if (_Type.length > 10) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
                //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (_Type.length > 8) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            } else if (_Type.length > 7) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
            }
            TypeTwoLetterDistance(te, tr, TType, 1, 1);
            DestinationTwoLetterDistance(te, tr, TDes, 1, 1);
        }
    }
}
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
for (let td = 0; td < Tablenum; td++) {
    TrainTypeSet(td);
}
DestinationSet();
allJRC_Reduction();
if (holidayflag == 1) {
    holiday_F(station);
}
NewAllLastShow();