let orders = new Array(orderNum);
let hours = new Array(orderNum);
for (let or = 0; or < orders.length; or++) {
    orders[or] = 0;
    hours[or] = 0;
}
//先発表示を関数にするFirhourは時,orderは時の中で何番目列車かFirhourはj or 1(mod 4) order>=1 
//depnumは先発なら1，次発なら2
//Showsの引数は(配列の時,時刻表の中で何列目か,時刻表配列,表が何番目か,何番目に出発するか)
function NotShows(hour,Table_Column, TT,TableNumber, depnum){
    PlusHour[depnum-1] = TT[hour][0];
    PlusMin[depnum-1] = String(TT[hour + 1][Table_Column]).padStart(2, "0");
    PlusType[depnum-1] = TT[hour][Table_Column];
    PlusDes[depnum-1]= TT[hour + 2][Table_Column];
    //document.getElementById('TNum' + TableNumber + '' + depnum).textContent = TT[hour + 3][Table_Column];
    //ここで次発のために変数に入れる
    orders[depnum - 1] = Table_Column;
    orders[depnum] = Table_Column + 1;
    return;
}
function koshin() {
    location.reload();
}
//引数a番線以上の場合は別表に分ける mainTableの表を分割したものをsubTableに入れる(subTableはリセットされる)
class TableDevide {
    //コンストラクタ
    constructor(mainTable, subTable) {
        //ここに全関数で使うような引数を入れる
        this.mainTable = mainTable;
        this.subTable = subTable;
    }
    //メインテーブルからサブテーブルに移すメソッド
    main_to_sub(TaRow, mainTaNum, subTaNum) {
        TT[this.subTable][TaRow - 3][subTaNum] = TT[this.mainTable][TaRow - 3][mainTaNum];
        TT[this.subTable][TaRow - 2][subTaNum] = TT[this.mainTable][TaRow - 2][mainTaNum];
        TT[this.subTable][TaRow - 1][subTaNum] = TT[this.mainTable][TaRow - 1][mainTaNum];
        TT[this.subTable][TaRow][subTaNum] = TT[this.mainTable][TaRow][mainTaNum];
        //console.log("Main_to_sub");
    }
    //移した要素をメインテーブルから削除する
    main_remove(TaRow, mainTaNum) {
        if (mainTaNum == TT[this.mainTable][TaRow].length - 1) {
            TT[this.mainTable][TaRow - 3][mainTaNum] = '';
            TT[this.mainTable][TaRow - 2][mainTaNum] = '';
            TT[this.mainTable][TaRow - 1][mainTaNum] = '';
            TT[this.mainTable][TaRow][mainTaNum] = '';
        } else {
            for (let remain = mainTaNum; remain < TT[this.mainTable][TaRow].length - 1; remain++) {
                TT[this.mainTable][TaRow - 3][remain] = TT[this.mainTable][TaRow - 3][remain + 1];
                TT[this.mainTable][TaRow - 2][remain] = TT[this.mainTable][TaRow - 2][remain + 1];
                TT[this.mainTable][TaRow - 1][remain] = TT[this.mainTable][TaRow - 1][remain + 1];
                TT[this.mainTable][TaRow][remain] = TT[this.mainTable][TaRow][remain + 1];
                TT[this.mainTable][TaRow - 3][remain + 1] = '';
                TT[this.mainTable][TaRow - 2][remain + 1] = '';
                TT[this.mainTable][TaRow - 1][remain + 1] = '';
                TT[this.mainTable][TaRow][remain + 1] = '';
            }
        }
    }
    process(condition_F) {
        //console.log("これからprocess部分実行");
        let subTaNum = 1;
        var flag = 0;
        //console.log(TT[this.mainTable]);
        Tablereset(this.subTable);
        //TaRowは時を示す, mainTaNumはmainの表の何本目を示す rは1個目の表の残った本数 subTaNumは2つ目の表のs-1本目(hを減らしsを増やすようにする)
        for (let TaRow = 4; TaRow < TT[this.mainTable].length; TaRow += 4) {//時の切替
            flag = 0;
            subTaNum = 1;
            var count = TT[this.mainTable][TaRow].length - 1;
            for (let mainTaNum = 1; mainTaNum < TT[this.mainTable][TaRow].length; mainTaNum++) {//列車の切替
                if (condition_F(TaRow, mainTaNum)) {
                    console.log(TT[this.mainTable].length + ":" + TT[this.subTable].length);
                    flag++;
                    this.main_to_sub(TaRow, mainTaNum, subTaNum);
                    subTaNum++;
                    this.main_remove(TaRow, mainTaNum);
                    mainTaNum--;
                    if (TT[this.mainTable][TaRow - 2][mainTaNum + 1] == '') {
                        break;
                    } else if (flag > 100) {
                        console.error('表分割時に異常が発生しています');
                        break;
                    }
                }
                count--;
                if (count <= 0) {
                    //console.log('count<=0');
                    break;
                }
                //console.log('main='+mainTaNum+'main表の横の長さ='+TT[this.mainTable][TaRow].length);
            }
            //console.log("時の区切り");
        }
    }
}
function RailNumberDevide(minBansen, mainTable, subTable) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => TT[mainTable][TaRow][mainTaNum] >= minBansen);
}
function DestinationDevide(station, mainTable, subTable) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => station.includes(TT[mainTable][TaRow - 1][mainTaNum]));
}
// TrainNameDevideの実装
function TrainNameDevide(trainName, mainTable, subTable) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => TT[mainTable][TaRow - 3][mainTaNum].includes(trainName));
}
function TrainNameLineDevide(trainName, mainTable, subTable) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => trainName.includes(TT[mainTable][TaRow - 3][mainTaNum]));
}
class TrainNumber {
    constructor(TT, name) {
        this.TT = TT;
        this.name = name;
    }

}
//特急の号数を追加する，2ずつ追加する場合のみ
function limitednumber(TT, firstlimited, name) {
    var count = firstlimited;
    var Lname = [];
    var LDes = [];
    if (typeof name == 'string') {
        Lname[0] = name;
    } else {
        Lname = name;
    }
    if (typeof Des == 'string') {
        LDes[0] = Des;
    } else if (typeof Des == 'undefined') {
        LDes[0] = 'undefined';
    } else {
        LDes = Des;
    }
    for (var td = 1; td < TT.length; td += 4) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            for (var a = 0; a < Lname.length; a++) {
                if (TT[td][tr].includes(Lname[a])) {
                    if (TT[td][tr].includes('当駅始発')) {
                        TT[td][tr] = TT[td][tr].slice(0, -6);
                        if (Indexfile == 'index6.php' || Indexfile == 'index7.php') {
                            TT[td][tr] += count + "号";
                            count += 2;
                            TT[td][tr] += '(当駅始発)';
                        } else if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                            TT[td][tr] += count + "";
                            count += 2;
                        }
                    } else {
                        if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                            TT[td][tr] += count + "";
                            count += 2;
                        } else {
                            TT[td][tr] += count + "号";
                            count += 2;
                        }
                    }
                }
            }
        }
        /*if (Indexfile == 'index8.php' && name.includes('エアポート')) {
            count = 0;
        }*/
    }
    //console.log(TT);
}
function limitedjustnumber(TT, firstlimited, name, Des) {
    var count = firstlimited;
    var Lname = [];
    var LDes = [];
    if (typeof name == 'string') {
        Lname[0] = name;
    } else {
        Lname = name;
    }
    if (typeof Des == 'string') {
        LDes[0] = Des;
    } else if (typeof Des == 'undefined') {
        LDes[0] = 'undefined';
    } else {
        LDes = Des;
    }
    //console.log('---' + Lname + '---');
    for (var td = 1; td < TT.length; td += 4) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            for (var a = 0; a < Lname.length; a++) {
                for (var b = 0; b < LDes.length; b++) {
                    if (TT[td][tr] == Lname[a]) {
                        //console.log(TT[td][tr] + ':' + Lname[a] + ':' + count);
                        //console.log(count + ' 1');
                        if (TT[td][tr].includes('当駅始発')) {
                            TT[td][tr] = TT[td][tr].slice(0, -6);
                            if (Indexfile == 'index6.php') {
                                TT[td][tr] += count + "号";
                                TT[td][tr] += '(当駅始発)';
                            } else if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                                TT[td][tr] += count + "";
                            }
                        } else if (TT[td + 2][tr] == LDes[b]) {
                            //console.log(count + ' 2 ' + TT[td + 2][tr] + ':' + Des);
                            if (NonGouflag == 1) {
                                TT[td][tr] += count + "";
                            } else {
                                TT[td][tr] += count + "号";
                            }
                        } else {
                            //console.log(count + ' 3' + TT[td + 2][tr] + ':' + Des);
                            if (LDes[0] == 'undefined') {
                                //console.log(TT[td][tr]);
                                if (NonGouflag == 1) {
                                    TT[td][tr] += count + "";
                                } else {
                                    TT[td][tr] += count + "号";
                                }
                            } else {
                                count -= 2;
                            }
                        }
                        //console.log(count);
                        count += 2;
                        if (Indexfile == 'index8.php' && count == 100) {
                            count = 110;
                        }
                    }
                }
            }
        }
    }
    //console.log(TT);
}
function limitednumber2(TT, limitednumberline, name) {
    var number = 0;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr].includes(name)) {
                TT[td][tr] += limitednumberline[number] + "号";
                number++;
            }
        }
    }
}
function limitedjustnumber2(TT, limitednumberline, name) {
    var number = 0;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr] == name) {
                if (Indexfile == 'index4_Tsuruga.php') {
                    TT[td][tr] += limitednumberline[number];
                } else {
                    TT[td][tr] += limitednumberline[number] + "号";
                }
                number++;
            }
        }
    }
}
//TTをリセットする
function Tablereset(num) {
    console.log(num);
    for (let row = 1; row < TT[num].length; row++) {
        for (let Tcolumn = 1; Tcolumn < TT[num][row].length; Tcolumn++) {
            TT[num][row][Tcolumn] = "";
        }
    }
}
//reverseの代わり
function reverseLine(hairetsu, before, after) {
    var numberOfHairetsu = hairetsu[before].length;
    hairetsu[after] = new Array(numberOfHairetsu);
    for (var a = 0; a < numberOfHairetsu; a++) {
        hairetsu[after][numberOfHairetsu - a - 1] = hairetsu[before][a];
    }
}
function JRC_station() {
    if (station == '浜松駅') {
        location.href = './index7.php';
    } else if (station == '豊橋駅') {
        location.href = './index7.php?station=toyohashi';
    }
}
function JRW_station() {
    if (station == '広島駅') {
        location.href = './index4.php?station=hiroshima';
    } else if (station == '岡山駅') {
        location.href = './index4.php?station=okayama';
    } else if (station == '博多駅') {
        location.href = './index10_H.php';
    }
}
function LineCopy(conLine) {
    var NewLine = JSON.parse(JSON.stringify(conLine));
    return NewLine;
}