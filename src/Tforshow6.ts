import {
    NewAllLastShow,DestinationSet
} from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
let Saikyo_Color = '#00AC9A';
let Keihin_Color = '#00b2e5';
if (station == '長野駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
if (station == '松本駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '水戸駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '横浜駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '赤羽駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '新宿駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
DestinationSet();
NewAllLastShow();