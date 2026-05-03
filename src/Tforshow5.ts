import { NewAllLastShow, allTwoLettersDistance } from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
//二子新地と高津に停車するかどうかの処理
if (station == '二子玉川駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '武蔵小杉駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
allTwoLettersDistance(Des, TDes, 1, 1);
NewAllLastShow();