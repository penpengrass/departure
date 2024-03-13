'use strict';
//駅名の表示
document.getElementById('stationname').textContent = company + ' ' + station;
let countTable = 0;
let countOrder = 2;
//console.log(TT[2][51][1]);

//document.getElementById('kn1').textContent =dir;
//TNは表番号・ONは何番目に出発するか
for (var TN = 0; TN < Tablenum; TN++) {
    //表のタイトル表示
    if (TableTitle[TN] != '') {
        //console.log('表のタイトル' + TableTitle[TN]);
        document.getElementById('kn' + (TN + 1)).textContent = TableTitle[TN];
    }
    if (station == '敦賀駅') {
        BackTime();
        if (TN == 1 || TN == 2) {
            Delay(15);
        }
    }
    //先発表示
    FShow(TT[TN], TN + 1);
    console.log((TN + 1) + "番目の表の" + "1番目に出発する列車の表示完了");
    for (var ON = 2; ON < Tablenums[TN] + 1; ON++) {
        if (next != 1) {
            FSTShow(TT[TN], Shows, orders[ON - 1], TN + 1, ON);
            console.log((TN + 1) + "番目の表の" + (ON) + "番目に出発する列車の表示完了");
        } else {
            break;
        }
    }
    console.log((TN + 1) + "番目の表表示完了");
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


console.log("-------表示完了-------");
document.title = station + "発車標";
