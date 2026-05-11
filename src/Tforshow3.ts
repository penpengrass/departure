import { TypeColorChange } from "./module/colorSimpleSet";
import {
    FourLetters, swapColumns, NameColorchange, JRLineName, LastShows, rowremove, AllWordChange, AllWordReplace, JRLimitedNameDevide,
    JRLimitedDevide, JRLimitedNumber, JRATOSDevide, allTwoLettersDistance, NewAllLastShow, flagmarkerase, allTimeMarkErase, Bansenshow, holiday_F,
    AllClassSetting
} from "./module/firstDisplayEdit";
import { FShow } from "./module/timeInfoSet";
import { Shows } from "./main";
import { JRETypeSelectAdd, JRETypeAdd, ShihatsuMove } from "./module/displayEdit6";
import { BottomBanner } from "./module/detailBannerSwitch";
import { allswitchOdawara } from "./module/displaySwitch";
import { allJRCIncludeColor } from "./typeColor";
import { getStationConfig } from "./main";
import { comment } from "./types/constants";
const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
const table1 = document.getElementById("TATOSTable1");
const table2 = document.getElementById("TATOSTable2");
const table3 = document.getElementById("TATOSTable3");
const table4 = document.getElementById("TATOSTable4");
const table5 = document.getElementById("TATOSTable5");
const table6 = document.getElementById("TATOSTable6");
var UenoLine = ['小金井', '籠原', '宇都宮', '高崎', '古河'];
var Guidance = document.getElementById("guidance");
if (station == '熱海駅') {
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
}
