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
    //var config = getStationConfig(window.station, Indexfile);
    //if (config && config.onRender) config.onRender();
    rowremove(0, 'HName', 'TName');
    rowremove(1, 'HName', 'TName');
    rowremove(2, 'HName', 'TName');
    rowremove(3, 'HName', 'TName');
    rowremove(0, 'HCars', 'TCars');
    rowremove(1, 'HCars', 'TCars');
    rowremove(2, 'HCars', 'TCars');
    rowremove(3, 'HCars', 'TCars');
    document.getElementById('HType1')!.style.width = "53%";
    document.getElementById('HType2')!.style.width = "53%";
    document.getElementById('HType3')!.style.width = "53%";
    document.getElementById('HType4')!.style.width = "53%";
    FShow(TT[4], 5, Shows);
    Des[0][2] = Des[4][0] ? Des[4][0] : "";
    TableHour[0][2] = TableHour[4][0];
    TableMin[0][2] = TableMin[4][0];
    TrackNum[0][2] = TrackNum[4][0];
    for (var tr = 0; tr < orderNum; tr++) {
        AllWordChange(0, tr, Type, '普通', '信越線4両 乗車口③～⑥');
        AllWordChange(1, tr, Type, '普通', '両毛線4両 乗車口③～⑥');
        AllWordChange(1, tr, Type, '普通*', '両毛線6両 乗車口①～⑥');
        AllWordChange(1, tr, Type, '普通+', '両毛線10両 乗車口:青色');
        AllWordChange(1, tr, Type, '快速', '両毛線10両 乗車口:青色');
        AllWordChange(2, tr, Des, '万座・鹿沢口', '万座･鹿沢口');
        var Agatsuma = ['万座･鹿沢口', '大前', '長野原草津口'];
        if (Agatsuma.includes(Des[2][tr])) {
            AllWordChange(2, tr, Type, '普通', '吾妻線4両 乗車口③～⑥')
        } else if (Type[2][tr] != "") {
            AllWordChange(2, tr, Type, '普通', '上越線4両 乗車口③～⑥')
        }
        AllWordReplace(2, tr, Type, '草津・四万', '特急草津･四万');
        AllWordChange(3, tr, Type, '特別快速:湘南新宿ライン経由', '湘南新宿ﾗｲﾝ特快10両');
        AllWordChange(3, tr, Type, '快速:湘南新宿ライン経由', '湘南新宿ﾗｲﾝ快速10両');
        AllWordReplace(3, tr, Type, '草津・四万', '特急草津･四万');
        AllWordChange(3, tr, Type, 'あかぎ', '特急あかぎ');
        if ((Des[3][tr] == '上野' || Des[3][tr] == '籠原') && Type[3][tr] == '普通') {
            Type[3][tr] = '高崎線普通10両';
        }
        AllWordChange(3, tr, Type, '普通', '上野東京ﾗｲﾝ普通10両');

        TypeColorChange(3, tr, '湘南新宿', 'orange');
        TypeColorChange(2, tr, '特急', 'red');
        TypeColorChange(3, tr, '特急', 'red');
    }
    allTwoLettersDistance(Des, TDes, 1, 0.8);
    NewAllLastShow();
    document.getElementById('WType13')!.textContent = '八高線 高麗川 拝島 八王子方面 普通';
    document.getElementById('TType13')!.style.backgroundColor = "gray";
    document.getElementById('TType13')!.style.color = "white";
    comment!.innerHTML += '両数と臨時特急、一部表示は不正確、実際には接続表示がある';
}
