import {
    LineMarkAdd, JRLimitedDevide, rowremove, holiday_F, AllClassSetting, DestinationSet, TrainTypeSet,
    NewAllLastShow
} from "./module/firstDisplayEdit";
import { DesMiddle, allJRWTrainNameColor } from "./module/displayEdit4";
import { Kitashinchi_Banner, Maibara_Banner, Yonago_Banner } from "./module/displayEdit4";
import { allswitch_detail } from "./module/detailBannerSwitch";
import { CarsDefine, CarsInto, CarsDevideToLine } from "./module/carsEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { allswitchMihara } from "./module/displaySwitch";
import { allJRColor, allJRWSZColor } from "./typeColor";
import { getStationConfig } from "./main";
import { } from "./module/firstDisplayEdit";
import { TDes } from "./types/constants";
import { comment } from "./types/constants";
import { DestinationTwoLetterDistance } from "./module/firstDisplayEdit";
import { JRobj } from "./detailStopData/JRW_afterset";
var Shinkansenflag = 0;
//特急や快速等の列車名や路線名を表示させたい
if (station == "新見駅") {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    allJRWTrainNameColor("orange", "orange", "red");
}
if (Indexfile == 'index4.php') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
if (Indexfile == 'index4.php') {
    for (var td = 0; td < Tablenum; td++) {
        TrainTypeSet(td);
    }
    if (JRShinkansenflag == 0) {
        allJRColor();
    } else if (JRShinkansenflag == 1) {
        allJRWSZColor();
    }
    DestinationSet();
    if (TwoLetterDisflag == 1) {
        for (var td = 0; td < Tablenum; td++) {
            for (var tr = 0; tr < Tablenums[td]; tr++) {
                DestinationTwoLetterDistance(td, tr, TDes, 1, 0.9);
            }
        }
    }
    NewAllLastShow();
    LastShowFlag = 1;
}
if (station == "北新地駅") {
    //setInterval(allswitch_detail, 3000);
    setInterval(function () {
        allswitch_detail(Kitashinchi_Banner);
    }, 20000);
    //setInterval(switchdetail("TTLine", 1, 3, 5), 5000);
} else if (station == "米原駅") {
    //setInterval(allswitch_detail, 20000);
    setInterval(function () {
        allswitch_detail(Maibara_Banner);
    }, 20000);
} else if (station == '米子駅') {
    setInterval(function () {
        allswitch_detail(Yonago_Banner);
    }, 20000);
}

/*function switchTrainInfo() {
    var SanyoCell = document.getElementById("TName11");
    var SaninCell = document.getElementById("TName31");

    // 表示を切り替える
    if (SanyoCell.innerText === "山陽線") {
        SanyoCell.innerText = "4両"
    } else {
        SanyoCell.innerText = "山陽線";
    }
    if (SaninCell.innerText === "山陰線") {
        SaninCell.innerText = "2両";
    } else {
        SaninCell.innerText = "山陰線";
    }
}
if (station == '下関駅') {
    // 10秒ごとに表示を切り替える
    setInterval(switchTrainInfo, 3000);
}*/
