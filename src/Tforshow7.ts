import { Meiobj } from './detailStopData/Meidenset';
import { TypeColorChange, TypeColorChange2 } from "./module/colorSimpleSet";
import { TwoLetterDistance, AllWordReplace, AllWordChange, JRLimitedNumber, allLastShow, holiday_F } from "./module/firstDisplayEdit";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { SpendingTime, DetailReplace, SpecialStop } from "./module/detailSimpleEdit";
import { TrainNumber } from "./module/firstDisplayEdit";
import { JRCeNobj, JRKaobj, Nagahama } from "./detailStopData/JRNadetailset";
import { TokaiDetailflag } from "./stationset7";
import { BottomBanner } from "./module/detailBannerSwitch";
import { getStationConfig } from './main';
function allJRC_Reduction() {
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < Tablenums[te]; tr++) {
            TypeColorChange(te, tr, '快速', 'orange');
            TypeColorChange(te, tr, '特急', 'red');
            TypeColorChange(te, tr, 'ホームライナー', 'red');
            TypeColorChange(te, tr, '快特', 'red');
            if (Type[te][tr] === 'undefined') {
                console.log(":");
            } else if (Type[te][tr].length > 12) {
                document.getElementById('WType' + (te + 1) + (tr + 1))!.style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.boxSizing = "border-box";
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            } else if (Type[te][tr].length > 10) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
                //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (Type[te][tr].length > 8) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            } else if (Type[te][tr].length > 7) {
                document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
            }
            TwoLetterDistance(te, tr, Type, TType, 1, 1);
            TwoLetterDistance(te, tr, Des, TDes, 1, 1);
        }
    }
}
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
allJRC_Reduction();
if (holidayflag == 1) {
    holiday_F(station);
}
//index7.phpではDetail[]に入れた後フォーマットに停車駅を入れる。
if (TokaiDetailflag == 1) {
    for (var td = 0; td < Tablenum; td++) {
        var Type_Show;
        LastLetterRemove(td, 0, '・');
        if (Type[td][0].includes('当駅始発')) {
            Type_Show = Type[td][0].replace('(当駅始発)', '');
        } else {
            Type_Show = Type[td][0];
        }
        if (Detail[td][0] == '各駅にとまります') {
            Detail[td][0] = Des[td][0] + 'までの各駅';
        }
        if (Type[td][0] != '' && Detail[td][0] != '') {
            document.getElementById('TDetail' + (td + 1))!.innerHTML =
                '<span id="Detail_Type' + (td + 1) + '">' + Type_Show + '</span> ' + Des[td][0] + '行きの停車駅は' +
                '<span class="orange">' + Detail[td][0] + '</span>です';
            TypeColorChange2(td, 'Detail_Type', '特急', 'red');
            TypeColorChange2(td, 'Detail_Type', 'ホームライナー', 'red');
            TypeColorChange2(td, 'Detail_Type', '快速', 'orange');
        }
    }
} else if (TokaiDetailflag == 0) {
    for (var td = 0; td < Tablenum; td++) {
        document.getElementById('Detail_Banner' + (td + 1))!.remove();
    }
}
allLastShow();