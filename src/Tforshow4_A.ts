import { getStationConfig } from "./main";

if (station == '大阪駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}