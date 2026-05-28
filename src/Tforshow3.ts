import { getStationConfig } from "./main";
import { comment } from "./types/constants";
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
/*if (station == '熱海駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '小田原駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '武蔵小杉駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '宇都宮駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '大宮駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '横浜駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '黒磯駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '高崎駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}*/
