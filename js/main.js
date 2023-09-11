'use strict';
//駅名の表示
document.getElementById('stationname').textContent = station;
let countTable = 0;
let countOrder = 2;
//console.log(TT[2][51][1]);
if(typeof(TableTitle)!=='undefined'&&TableTitle[0]==''){
    TableTitle[0] = station;
    document.getElementById('Tstation' + 1).textContent = TableTitle[0];
}
//表のタイトルを表示
for(var i=0;i<Tablenum;i++){
    if(TableTitle[i]!=''){
        document.getElementById('kn'+(i+1)).textContent=TableTitle[i];
    }
}

//document.getElementById('kn1').textContent =dir;
//TNは表番号・ONは何番目に出発するか
for (let TN = 0; TN < Tablenum; TN++) {
    //表のタイトル表示
    //document.getElementById('Tstation' + TN).textContent = TableTitle[TN];
    //先発表示
    FShow(TT[TN], TN + 1);
    console.log((TN + 1) + "番目の表の" + "1番目に出発する列車の表示完了");
    for (let ON = 2; ON < Tablenums[TN] + 1; ON++) {
        if (next != 1) {
            FSTShow(TT[TN], Shows, orders[ON - 1], TN + 1, ON);
            console.log((TN + 1) + "番目の表の" + (ON) + "番目に出発する列車の表示完了");
        } else {
            break;
        }
    }
    console.log((TN + 1) + "番目の表表示完了");
}


console.log("実行完了:");
console.log(station);
