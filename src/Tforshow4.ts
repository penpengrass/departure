import {
    LineMarkAdd, JRLimitedDevide, AllWordChange, AllWordReplace, TwoLetterDistance, rowremove, allTwoLettersDistance, holiday_F, AllClassSetting, DestinationSet, TrainTypeSet,
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
var Shinkansenflag = 0;
//特急や快速等の列車名や路線名を表示させたい
if (station == '天王寺駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[2][tr] != '' && (Des[2][tr] == '' || Des[2][tr] == '大阪' || Des[2][tr] == '天王寺')) {
            Des[2][tr] = '新今宮･西九条方面';
            document.getElementById('TDes' + (2 + 1) + (tr + 1))!.style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
        }
        if (Type[3][tr] != '' && Des[3][tr] != '大阪' && Des[3][tr] != '京橋' && Des[3][tr] != '桜島') {
            Des[3][tr] = '鶴橋･京橋方面';
            Type[3][tr] = '普通';
            document.getElementById('TDes' + (3 + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-10%,0%)";
        }
        if (Des[5][tr].length > 7) {
            document.getElementById('TDes' + (5 + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-10%,0%)";
        }
    }
    for (var td = 0; td < 6; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            TypeColorChange(td, tr, '快速', 'orange');
        }
    }
    allTwoLettersDistance(Des, TDes, 1, 0.9);
    comment!.innerHTML = '番線や一部表示不正確　一部2024年ダイヤのまま';
}
if (station == "新見駅") {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    allJRWTrainNameColor("orange", "orange", "red");
}
if (Indexfile == 'index4.php') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}

if (TwoLetterDisflag == 1) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            DestinationTwoLetterDistance(td, tr, TDes, 1, 0.9);
        }
    }
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
