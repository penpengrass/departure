import { hour, min } from "./Time";
import { FShow, FSTShow } from "./module/timeInfoSet";
import { koshin } from "./module/firstTableEdit";
import { StationRegistry, StationConfig } from './types/station';
import { plainTrainTables, trainTables, createTrainDataFromGlobal, initPlainTrainTables, updatePlainTrainData, initTrainTables } from "./types/trainTable";
import { KintetsuStations } from "./stationset2";
import { ShinkansenStations } from "./stationset3_S";
import { JREastStations } from "./stationset3";
import { JRHokurikuStations } from "./stationset4_H";
import { JRSanyoStations } from "./stationset4_S";
import { JRWestStations } from "./stationset4";
import { TokyuStations } from "./stationset5";
import { JREastShinkansenStations } from "./stationset6_S";
import { JREast6Stations } from "./stationset6";
import { JRTokaidouStations } from "./stationset7_S";
import { JRTokaiStations } from "./stationset7";
import { JRHokkaidouStations } from "./stationset8";
import { JRShikokuStations } from "./stationset9";
import { JRKyushuStations } from "./stationset10";
// --- 新方式の適用チェック ---
//const config = KintetsuStations[window.station];
/*if (config) {
    console.log(`${window.station} の設定を StationConfig インターフェースから読み込みます。`);
    initKintetsuCommon(config);
}*/
// config がない場合は、既存の import された stationset3.ts などの if 文が実行される

const stationRegistries: StationRegistry = {};

export function registerStations(registry: StationRegistry) {
    Object.assign(stationRegistries, registry);
    console.trace("------" + registry + "の方のmain開始-------");
    main();
}

export function getStationConfig(stationName: string, indexfile: string): StationConfig | undefined {
    //console.log(JSON.stringify(stationRegistries));
    for (const [key, config] of Object.entries(stationRegistries)) {
        if (config.name === stationName) {
            if (!config.file || config.file.includes(indexfile)) {
                return config;
            }
        }
    }
    console.error("configが見つかりませんでした。");
    return undefined;
}
function initStationCommon(config: StationConfig) {
    window.company = config.company;
    for (let td = 0; td < window.Tablenum; td++) {
        window.DetailLength[td] = window.orderNum;
    }
    window.TableTitle = config.tableTitles;
    if (config.dtype) window.Dtype = config.dtype;
    if (config.setup) config.setup();
}
let countTable = 0;
let countOrder = 2;
//console.log(TT[2][51][1]);
//document.getElementById('kn1').textContent =dir;
/*function Shows(hour, Table_Column, TT, TableNumber, depnum) {
    document.getElementById('THour' + TableNumber + '' + depnum).textContent = TT[hour][0];
    document.getElementById('TMin' + TableNumber + '' + depnum).textContent = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    document.getElementById('WType' + TableNumber + '' + depnum).textContent = TT[hour][Table_Column];
    if(Indexfile=='index6_Chiba.php'){
        document.getElementById('WDes' + TableNumber + '' + depnum).textContent = TT[hour + 2][Table_Column];
    }else{
        document.getElementById('TDes' + TableNumber + '' + depnum).textContent = TT[hour + 2][Table_Column];
    }
    document.getElementById('TNum' + TableNumber + '' + depnum).textContent = TT[hour + 3][Table_Column];
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}*/
function Delay(MMinute: number) {
    if (L_min - MMinute < 0) {
        L_hour -= 1;
        L_min += 60;
    }
    L_min = L_min - MMinute;
    console.log(L_hour + ':' + L_min);
}
function BackTime() {
    L_min = min;
    L_hour = hour;
}
//先発表示を関数にするFirhourは時,orderは時の中で何番目列車かFirhourはj or 1(mod 4) order>=1 
//depnumは先発なら1，次発なら2
//Showsの引数は(配列の時,時刻表の中で何列目か,時刻表配列,表が何番目か,何番目に出発するか)
function NotShows(hour: number, Table_Column: number, TT: any[], TableNumber: number, depnum: number) {
    PlusHour[depnum - 1] = TT[hour][0];
    PlusMin[depnum - 1] = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    PlusType[depnum - 1] = TT[hour][Table_Column];
    PlusDes[depnum - 1] = TT[hour + 2][Table_Column];
    //document.getElementById('TNum' + TableNumber + '' + depnum).textContent = TT[hour + 3][Table_Column];
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}
window.Type = new Array(Tablenum);
window.TableHour = new Array(Tablenum);
window.TableMin = new Array(Tablenum);
window.TrackNum = new Array(Tablenum);
window.Des = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    window.Type[tr] = new Array(Tablenums[tr]);
    TableHour[tr] = new Array(Tablenums[tr]);
    TableMin[tr] = new Array(Tablenums[tr]);
    Des[tr] = new Array(Tablenums[tr]);
    TrackNum[tr] = new Array(Tablenums[tr]);
}
function EmptyLine(td: number, tr: number, Line: any) {
    if (Line[td][tr] === undefined) {
        Line[td][tr] = '';
    }
}
export function Shows(hour: number, Table_Column: number, TT: any, TableNumber: number, depnum: number) {
    TableHour[TableNumber - 1][depnum - 1] = TT[hour][0];
    TableMin[TableNumber - 1][depnum - 1] = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    Type[TableNumber - 1][depnum - 1] = TT[hour][Table_Column];
    Des[TableNumber - 1][depnum - 1] = TT[hour + 2][Table_Column];
    TrackNum[TableNumber - 1][depnum - 1] = TT[hour + 3][Table_Column];
    //(未反映!!!)ここからインタフェース、コメント外してもいいが今は意味なし
    // plainTrainTables の該当要素を更新する
    const plainTrainData = createTrainDataFromGlobal(hour, Table_Column, TT);
    plainTrainTables[TableNumber - 1].trains[depnum - 1] = plainTrainData;
    //console.log(plainTrainTables[TableNumber - 1].trains[depnum - 1].destination);
    //updatePlainTrainData(TableNumber - 1, depnum - 1, plainTrainData);
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}
//特急等の号数を取得 tdは何番目の表か
function JRLimitedNumberSet(td: number, tr: number) {
    var LimitedName = new Array(Tablenums[td]);
    var matches = new Array(Tablenums[td]);
    var matches2 = new Array(Tablenums[td]);
    let number;
    LimitedName[tr] = plainTrainTables[td].trains[tr]?.type ?? "";
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    matches2[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
    if (matches[tr]) {
        /*console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);*/
        number = matches[tr][2];
    } else if (matches2[tr]) {
        /*console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches2[tr][0] + ":" + tr);
        console.log(matches2[tr][1] + ":" + tr);
        console.log(matches2[tr][2] + ":" + tr);
        console.log(matches2[tr][1] + matches2[tr][1].length);*/
        //console.log("Dtypeは" + Dtype);
        number = matches2[tr][2];
    } else {
        //console.log("JRLimitedNumberはマッチしない");
    }
    //console.log(number);
    return number;
}
//特急などの列車名を取得
function JRLimitedNameSet(td: number, tr: number) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    //console.log(Type[td][tr]);
    LimitedName[tr] = Type[td][tr];
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    if (matches[tr]) {
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);*/
        var name = matches[tr][1];
    } else {
        //console.log("JRLimitedNumberはマッチしない");
    }
    return name;
}
//td_mainは表番号・ONは何番目に出発するか
function main() {
    // --- plainTrainTables の初期化 ---
    console.log(Tablenums);
    initPlainTrainTables(Tablenum, Tablenums);
    initTrainTables(Tablenum, Tablenums);
    // --- 駅設定の適用 ---
    console.log("getStationConfig開始");
    let config = getStationConfig(window.station, Indexfile);
    if (config) {
        console.log(`${window.station} の設定をmain関数のStationConfig インターフェースから読み込みます。`);
        initStationCommon(config);
    }
    //駅名の表示
    if (config) {
        company = config.company;
        document.getElementById('stationname')!.textContent = company + ' ' + config.name;
    } else {
        //インタフェース化していない場合
        document.getElementById('stationname')!.textContent = company + ' ' + window.station;
    }
    for (var td_main = 0; td_main < Tablenum; td_main++) {
        var do_Title = document.getElementById('kn' + (td_main + 1));
        if (do_Title) {
            //表のタイトル表示
            if (TableTitle[td_main] != '') {
                //console.log('表のタイトル' + TableTitle[td_main]);
                document.getElementById('kn' + (td_main + 1))!.innerHTML = TableTitle[td_main];
            }
            //インタフェース化した場合
            if (config) {
                console.log("config駅タイトル")
                document.getElementById('kn' + (td_main + 1))!.innerHTML = config.tableTitles[td_main];
            }
            if (station == '敦賀駅') {
                BackTime();
                if (td_main == 1 || td_main == 2) {
                    Delay(15);
                }
            }
            //先発表示
            FShow(TT[td_main], td_main + 1, Shows);
            //console.log((td_main + 1) + "番目の表の" + "1番目に出発する列車の配列代入完了");
            for (var ON = 2; ON < Tablenums[td_main] + 1; ON++) {
                if (next != 1) {
                    FSTShow(TT[td_main], Shows, orders[ON - 1], td_main + 1, ON);
                    //console.log((td_main + 1) + "番目の表の" + (ON) + "番目に出発する列車の配列代入完了");
                } else {
                    break;
                }
            }
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    EmptyLine(td, tr, Type);
                    EmptyLine(td, tr, Des);
                    EmptyLine(td, tr, TableHour);
                    EmptyLine(td, tr, TableMin);
                    EmptyLine(td, tr, TrackNum);
                }
            }
        }
        //console.log((td_main + 1) + "番目の表表示完了");
    }
}
//console.log("------元々のmain開始-------");
// main.ts の最後（202行目の元々のmain()呼び出しの前）に以下を追加
const registryMap: Record<string, StationRegistry> = {
    'index2.php': KintetsuStations,
    'index3_S.php': ShinkansenStations,
    'index3_T.php': ShinkansenStations,
    'index3.php': JREastStations,
    'index4_H.php': JRHokurikuStations,
    'index4_S2.php': JRSanyoStations,
    'index4.php': JRWestStations,
    'index4_A.php': JRWestStations,
    'index5.php': TokyuStations,
    'index6_S.php': JREastShinkansenStations,
    'index6.php': JREast6Stations,
    'index6_U.php': JREast6Stations,
    'index6_Chiba.php': JREast6Stations,
    'index7_S1.php': JRTokaidouStations,
    'index7.php': JRTokaiStations,
    'index7_T.php': JRTokaiStations,
    'index8.php': JRHokkaidouStations,
    'index9.php': JRShikokuStations,
    'index10.php': JRKyushuStations,
    'index10_H.php': JRKyushuStations
};

// Indexfileに対応したregistryだけを登録
if (registryMap[Indexfile]) {
    registerStations(registryMap[Indexfile]);
}
//main();
export var PlusHour = new Array(3);
export var PlusMin = new Array(3);
export var PlusType = new Array(3);
export var PlusDes = new Array(3);
if (station == '浅草駅') {
    Delay(-6);
    console.log(station);
    FShow(TT[3], 4, NotShows);
    FSTShow(TT[3], NotShows, orders[1], 4, 2);
    FSTShow(TT[3], NotShows, orders[2], 4, 3);
}
var testflag = 0;
if (testflag == 0) {
    //1分ごとに更新するが，先発が切り替わるごとに実行したい
    //setInterval(koshin,MinIn*60000);
    if (Indexfile == 'index5.php') {
        //間隔(分)
        MinIn = 1;
        console.log("東急のファイル");
    } else if (MinIn > 2) {
        MinIn = 3;
    }
    setInterval(koshin, MinIn * 60000);
}
var Length_Debug = plainTrainTables.length;
if (Length_Debug == 0) {
    console.error("plainTrainTablesが空です。")
}
console.log("MinIn="+MinIn);
console.log("-------main完了-------");
document.title = station + "発車標";
//特急によって停車駅が異なるときの処理
//numberは号数 Lnameは列車名
export var TrainNumber = new Array(Tablenum);
export var Lname = new Array(Tablenum);
//console.log("detailflag=" + detailflag);
for (var td = 0; td < Tablenum; td++) {
    if (detailflag > 1) {
        TrainNumber[td] = new Array(orderNum);
        Lname[td] = new Array(orderNum);
    }
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        trainTables[td].trains[tr].trainNumber = Number.parseInt(JRLimitedNumberSet(td, tr));
        TrainNumber[td][tr] = Number.parseInt(JRLimitedNumberSet(td, tr));
        //console.log(typeof number[td][tr]);
        trainTables[td].trains[tr].trainName = JRLimitedNameSet(td, tr);

    }
}