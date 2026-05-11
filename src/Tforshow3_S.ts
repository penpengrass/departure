import { DetailShow, doallDetailShow } from "./module/detailMainPut";
import { DetailReplace } from "./module/detailSimpleEdit";
import { NewAllLastShow, TwoLetterDistance, flagmarkerase } from "./module/firstDisplayEdit";
import { TypeColorChange, JREScolor } from "./module/colorSimpleSet";
import { FourLetters, TrainNumber } from "./module/firstDisplayEdit";
import { JRNewNameNumberDevide } from "./module/firstDisplayEdit";
import { JRSBobj } from "./detailStopData/JREShindetailset";
import { Seventeen } from "./detailStopData/JRTohokuShinset";
import { getStationConfig } from "./main";
import { plainTrainTables } from "./types/trainTable";
import * as Stops from "./detailStopData/JRHokuShindetailset";
//console.log(JRSBobj);
//console.log(Dtype);
NonGouflag = 1;
JRNewNameNumberDevide(2);
var YamagataRapid = [123, 157];
var Zaou = [201, 123, 205, 53, 133, 135, 137, 61, 141, 143, 67, 145, 149, 215, 157, 69, 223];
var Shirakawa = [50];
var Oyama = [202];
var annnaka = [602, 604, 608, 610, 612, 614, 618, 622, 626, 628, 630, 632];
var iiyama = [591, 551, 553, 555, 559, 561, 565, 569, 571, 573, 575, 577];
var Nhonjou = [600, 604, 628];
var Nkumagaya = [600, 604, 628];
var onsen = [507, 509];
var takefu = [501, 517];
console.log(TrainNumber);
if (station == '長野駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '宇都宮駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '福島駅') {
     var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '新白河駅') {
     var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
if (JRShinkansenflag > 0 && Indexfile != 'index4_H.php') {
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < DetailLength[td]; tr++) {
            if (Type[td][0] == '') {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = 'お知らせ';
                Detail[td][0] = '本日の運転は終了しました';
                break;
            } else if (Type[td][tr] != '') {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = '停車駅';
            }
        }
    }
}
if (Indexfile == 'index3_S.php') {
    NewAllLastShow();
    flagmarkerase(0, 'WType');
    flagmarkerase(1, 'WType');
    flagmarkerase(1, 'WType', '+');
}
if (Indexfile == 'index3_S.php') {
    doallDetailShow(18);
}
