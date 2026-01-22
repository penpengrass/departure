'use strict';
//駅名の表示
document.getElementById('stationname').textContent = company + ' ' + station;
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
let Type = new Array(Tablenum);
let TableHour = new Array(Tablenum);
let TableMin = new Array(Tablenum);
let Des = new Array(Tablenum);
let TrackNum = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    Type[tr] = new Array(Tablenums[tr]);
    TableHour[tr] = new Array(Tablenums[tr]);
    TableMin[tr] = new Array(Tablenums[tr]);
    Des[tr] = new Array(Tablenums[tr]);
    TrackNum[tr] = new Array(Tablenums[tr]);
}
function EmptyLine(td, tr, Line) {
    if (Line[td][tr] === undefined) {
        Line[td][tr] = '';
    }
}
function Shows(hour, Table_Column, TT, TableNumber, depnum) {
    TableHour[TableNumber - 1][depnum - 1] = TT[hour][0];
    TableMin[TableNumber - 1][depnum - 1] = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    Type[TableNumber - 1][depnum - 1] = TT[hour][Table_Column];
    Des[TableNumber - 1][depnum - 1] = TT[hour + 2][Table_Column];
    TrackNum[TableNumber - 1][depnum - 1] = TT[hour + 3][Table_Column];
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}
//td_mainは表番号・ONは何番目に出発するか
function main() {
    for (var td_main = 0; td_main < Tablenum; td_main++) {
        //表のタイトル表示
        if (TableTitle[td_main] != '') {
            //console.log('表のタイトル' + TableTitle[td_main]);
            document.getElementById('kn' + (td_main + 1)).innerHTML = TableTitle[td_main];
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
        //console.log((td_main + 1) + "番目の表表示完了");
    }
}
main();
if (station == '浅草駅') {
    Delay(-6);
    var PlusHour = new Array(3);
    var PlusMin = new Array(3);
    var PlusType = new Array(3);
    var PlusDes = new Array(3);
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


console.log("-------main完了-------");
document.title = station + "発車標";
console.log(Type);