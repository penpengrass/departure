import { hour, min } from "./Time";
import { FShow, FSTShow } from "./module/timeInfoSet";
import { koshin } from "./module/firstTableEdit";
import { StationRegistry, StationConfig } from './types/station';
import { trainTables, TrainData, plainTrainTables, PlainTrainData, createTrainDataFromGlobal } from "./types/trainTable";
import { KintetsuStations, initKintetsuCommon } from "./stationset2";
import { ShinkansenStations } from "./stationset3_S";
import { JREastStations } from "./stationset3";
// --- 新方式の適用チェック ---
//const config = KintetsuStations[window.station];
/*if (config) {
    console.log(`${window.station} の設定を StationConfig インターフェースから読み込みます。`);
    initKintetsuCommon(config);
}*/
// config がない場合は、既存の import された stationset3.ts などの if 文が実行される

export const AllStations: StationRegistry = {
    ...KintetsuStations,
    ...ShinkansenStations,
    ...JREastStations
}
function initStationCommon(config: StationConfig) {
    window.MinIn = 1;
    window.company = config.company;
    for (let td = 0; td < window.Tablenum; td++) {
        window.DetailLength[td] = window.orderNum;
    }

    window.TableTitle = config.tableTitles;
    if (config.dtype) window.Dtype = config.dtype;
    if (config.setup) config.setup();
}
//駅名の表示
if (AllStations[station]) company = AllStations[station].company;
document.getElementById('stationname')!.textContent = company + ' ' + station;
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
    createTrainDataFromGlobal(hour, Table_Column, TT)
    /*const plainTrainData = plainTrainTables[TableNumber - 1].trains[depnum - 1];
    plainTrainData.hour = TT[hour][0];
    plainTrainData.minute = TT[hour][0];
    plainTrainData.minute = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    plainTrainData.type = TT[hour][Table_Column];
    plainTrainData.destination = TT[hour + 2][Table_Column];
    plainTrainData.track_number = TT[hour + 3][Table_Column];
    console.log(plainTrainData);
    //plainTrainData.track_number = TT[hour + 3][Table_Column];
    //console.log(plainTrainData);*/
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}
//td_mainは表番号・ONは何番目に出発するか
function main() {
    // --- 駅設定の適用 ---
    let config = AllStations[window.station];
    console.log(AllStations)
    console.log(Tablenum);
    if (config) {
        console.log(`${window.station} の設定を StationConfig インターフェースから読み込みます。`);
        initStationCommon(config);
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
main();
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
console.log(trainTables)

console.log("-------main完了-------");
document.title = station + "発車標";