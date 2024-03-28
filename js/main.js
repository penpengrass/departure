'use strict';
//駅名の表示
document.getElementById('stationname').textContent = company + ' ' + station;
let countTable = 0;
let countOrder = 2;
//console.log(TT[2][51][1]);

//document.getElementById('kn1').textContent =dir;
//td_mainは表番号・ONは何番目に出発するか
for (var td_main = 0; td_main < Tablenum; td_main++) {
    //表のタイトル表示
    if (TableTitle[td_main] != '') {
        //console.log('表のタイトル' + TableTitle[td_main]);
        document.getElementById('kn' + (td_main + 1)).textContent = TableTitle[td_main];
    }
    if (station == '敦賀駅') {
        BackTime();
        if (td_main == 1 || td_main == 2) {
            Delay(15);
        }
    }
    //先発表示
    FShow(TT[td_main], td_main + 1);
    console.log((td_main + 1) + "番目の表の" + "1番目に出発する列車の表示完了");
    for (var ON = 2; ON < Tablenums[td_main] + 1; ON++) {
        if (next != 1) {
            FSTShow(TT[td_main], Shows, orders[ON - 1], td_main + 1, ON);
            console.log((td_main + 1) + "番目の表の" + (ON) + "番目に出発する列車の表示完了");
        } else {
            break;
        }
    }
    console.log((td_main + 1) + "番目の表表示完了");
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
