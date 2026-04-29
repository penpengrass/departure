import {
    JRLimitedDevide, rowremove, JRLimitedNameDevide, rowsize,  swapColumns, FourLetters,
    flagmarkerase, Bansenshow, moveTableColumn,
    NewAllLastShow,DestinationSet
} from "./module/firstDisplayEdit";
import { JRE6ColorPlusName, JRE6Color, JRETypeAdd, JRETypeSelectAdd, ShihatsuMove } from "./module/displayEdit6";
import { CarsDefine, CarsInto } from "./module/carsEdit";
import { allswitch_Akabane } from "./module/displaySwitch";
import { comment } from "./types/constants";
import { getStationConfig } from "./main";
import { DestinationDevide } from "./module/firstTableEdit";
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