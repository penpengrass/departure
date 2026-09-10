import {NewAllLastShow, flagmarkerase, TwoLetterDistance, DestinationSet, TrainTypeSet } from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
if (station == '高松駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '松山駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
} else if (station == '高知駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}

DestinationSet();
NewAllLastShow();
flagmarkerase(0, 'TDes');
flagmarkerase(1, 'TDes');
flagmarkerase(0, 'TDes', '+');
flagmarkerase(1, 'TDes', '+');