let orders = new Array(orderNum);
let hours = new Array(orderNum);
for (let or = 0; or < orders.length; or++) {
    orders[or] = 0;
    hours[or] = 0;
}
//先発表示を関数にするFirhourは時,orderは時の中で何番目列車かFirhourはj or 1(mod 4) order>=1 
//depnumは先発なら1，次発なら2
//Showsの引数は(配列の時,配列の時の中で何番目か,時刻表配列,表が何番目か,何番目に出発するか)
function Shows(hour, order, TT, n, depnum) {
    document.getElementById('THour' + n + '' + depnum).textContent = TT[hour][0];
    document.getElementById('TMin' + n + '' + depnum).textContent = String(TT[hour + 1][order]).padStart(2, "0");
    document.getElementById('WType' + n + '' + depnum).textContent = TT[hour][order];
    document.getElementById('TDes' + n + '' + depnum).textContent = TT[hour + 2][order];
    document.getElementById('TNum' + n + '' + depnum).textContent = TT[hour + 3][order];
    //ここで次発のために変数に入れる
    orders[depnum - 1] = order;
    orders[depnum] = order + 1;
    return;
}

function koshin() {
    location.reload();
}
//引数a番線以上の場合は別表に分ける mainTableの表を分割したものをsubTableに入れる(subTableはリセットされる)
function RailNumberDevide(MinBansen, mainTable, subTable) {
    Tablereset(subTable);
    console.log(TT[subTable]);
    console.log(TT[0][17][0]);
    let subTaNum = 1;
    //TaRowは時を示す, mainTaNumはmainの表の何本目を示す rは1個目の表の残った本数 subTaNumは2つ目の表のs-1本目(hを減らしsを増やすようにする)
    for (let TaRow = 4; TaRow < TT[mainTable].length; TaRow += 4) {//時の切替
        subTaNum = 1;
        for (let mainTaNum = 1; mainTaNum < TT[mainTable][TaRow].length; mainTaNum++) {//列車の切替
            if (TT[mainTable][TaRow][mainTaNum] >= MinBansen) {
                console.log(TT[mainTable].length + ":" + TT[subTable].length);
                TT[subTable][TaRow - 3][subTaNum] = TT[mainTable][TaRow - 3][mainTaNum];
                TT[subTable][TaRow - 2][subTaNum] = TT[mainTable][TaRow - 2][mainTaNum];
                TT[subTable][TaRow - 1][subTaNum] = TT[mainTable][TaRow - 1][mainTaNum];
                TT[subTable][TaRow][subTaNum] = TT[mainTable][TaRow][mainTaNum];
                subTaNum++;
                for (let remain = mainTaNum; remain < TT[mainTable][TaRow].length - 1; remain++) {
                    //console.log((u+20)/4+":"+s+":"+remain);
                    //console.log(remain+"**"+TT[mainTable][TaRow].length);
                    TT[mainTable][TaRow - 3][remain] = TT[mainTable][TaRow - 3][remain + 1];
                    TT[mainTable][TaRow - 2][remain] = TT[mainTable][TaRow - 2][remain + 1];
                    TT[mainTable][TaRow - 1][remain] = TT[mainTable][TaRow - 1][remain + 1];
                    TT[mainTable][TaRow][remain] = TT[mainTable][TaRow][remain + 1];
                    TT[mainTable][TaRow - 3][remain + 1] = '';
                    TT[mainTable][TaRow - 2][remain + 1] = '';
                    TT[mainTable][TaRow - 1][remain + 1] = '';
                    TT[mainTable][TaRow][remain + 1] = '';
                }
                mainTaNum--;
            }
        }
    }
    console.log(TT[mainTable][17][0]);
    return MinBansen;
}
//行先によって分類するstationに配列として行先を入れる。TT[mainTable]を分割したものをTT[subTable]に入れる
function DestinationDevide(station, mainTable, subTable) {
    Tablereset(subTable);
    //console.log(TT[subTable]);
    //console.log(TT[0][17][0]);
    let subTaNum = 1;
    //TaRowはTTの行を示す
    //mainTaNumはmainの表の何本目を示す rは1個目の表の残った本数 sは2つ目の表のs-1本目(hを減らしsを増やすようにする)
    for (var TaRow = 4; TaRow < TT[mainTable].length; TaRow += 4) {//時の切替
        subTaNum = 1;
        let flag = 0;
        for (var mainTaNum = 1; mainTaNum < TT[mainTable][TaRow].length; mainTaNum++) {//列車の切替
            if (station.includes(TT[mainTable][TaRow - 1][mainTaNum])) {
                console.log(TT[mainTable].length + ":" + TT[subTable].length);
                TT[subTable][TaRow - 3][subTaNum] = TT[mainTable][TaRow - 3][mainTaNum];
                TT[subTable][TaRow - 2][subTaNum] = TT[mainTable][TaRow - 2][mainTaNum];
                TT[subTable][TaRow - 1][subTaNum] = TT[mainTable][TaRow - 1][mainTaNum];
                TT[subTable][TaRow][subTaNum] = TT[mainTable][TaRow][mainTaNum];
                subTaNum++;
                for (var remain = mainTaNum; remain < TT[mainTable][TaRow].length - 1; remain++) {
                    //console.log((mainTable + 20) / 4 + ":" + subTaNum + ":" + remain);
                    //console.log(remain+"**"+TT[mainTable][TaRow].length);
                    TT[mainTable][TaRow - 3][remain] = TT[mainTable][TaRow - 3][remain + 1];
                    TT[mainTable][TaRow - 2][remain] = TT[mainTable][TaRow - 2][remain + 1];
                    TT[mainTable][TaRow - 1][remain] = TT[mainTable][TaRow - 1][remain + 1];
                    TT[mainTable][TaRow][remain] = TT[mainTable][TaRow][remain + 1];
                    TT[mainTable][TaRow - 3][remain + 1] = '';
                    TT[mainTable][TaRow - 2][remain + 1] = '';
                    TT[mainTable][TaRow - 1][remain + 1] = '';
                    TT[mainTable][TaRow][remain + 1] = '';
                    flag++;
                }
                if (flag > 0) {
                    mainTaNum--;
                }
            }
        }
    }
    console.log(TT[mainTable][17][0]);
}
//種別で分ける
function TrainNameDevide(TrainName, mainTable, subTable) {
    Tablereset(subTable);
    //console.log(TT[subTable]);
    //console.log(TT[0][17][0]);
    let subTaNum = 1;
    //TaRowはTTの行を示す
    //mainTaNumはmainの表の何本目を示す rは1個目の表の残った本数 sは2つ目の表のs-1本目(hを減らしsを増やすようにする)
    for (var TaRow = 4; TaRow < TT[mainTable].length; TaRow += 4) {//時の切替
        subTaNum = 1;
        let flag = 0;
        for (var mainTaNum = 1; mainTaNum < TT[mainTable][TaRow].length; mainTaNum++) {//列車の切替
            var LoType=TT[mainTable][TaRow - 3][mainTaNum];
            if (LoType.includes(TrainName)) {
                //console.log(TT[mainTable].length + ":" + TT[subTable].length);
                TT[subTable][TaRow - 3][subTaNum] = TT[mainTable][TaRow - 3][mainTaNum];
                TT[subTable][TaRow - 2][subTaNum] = TT[mainTable][TaRow - 2][mainTaNum];
                TT[subTable][TaRow - 1][subTaNum] = TT[mainTable][TaRow - 1][mainTaNum];
                TT[subTable][TaRow][subTaNum] = TT[mainTable][TaRow][mainTaNum];
                subTaNum++;
                for (var remain = mainTaNum; remain < TT[mainTable][TaRow].length - 1; remain++) {
                    //console.log((mainTable + 20) / 4 + ":" + subTaNum + ":" + remain);
                    //console.log(remain+"**"+TT[mainTable][TaRow].length);
                    TT[mainTable][TaRow - 3][remain] = TT[mainTable][TaRow - 3][remain + 1];
                    TT[mainTable][TaRow - 2][remain] = TT[mainTable][TaRow - 2][remain + 1];
                    TT[mainTable][TaRow - 1][remain] = TT[mainTable][TaRow - 1][remain + 1];
                    TT[mainTable][TaRow][remain] = TT[mainTable][TaRow][remain + 1];
                    TT[mainTable][TaRow - 3][remain + 1] = '';
                    TT[mainTable][TaRow - 2][remain + 1] = '';
                    TT[mainTable][TaRow - 1][remain + 1] = '';
                    TT[mainTable][TaRow][remain + 1] = '';
                    flag++;
                }
                if (flag > 0) {
                    mainTaNum--;
                }
            }
        }
    }
    console.log(TT[mainTable][17][0]);
}
//特急の号数を追加する，2ずつ追加する場合のみ
function limitednumber(TT, firstlimited, name) {
    var count = firstlimited;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr].includes(name)) {
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
        if (Indexfile == 'index8.php' && name.includes('エアポート')) {
            count = 0;
        }
    }
    //console.log(TT);
}
function limitedjustnumber(TT, firstlimited, name) {
    var count = firstlimited;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr] == name) {
                if (TT[td][tr].includes('当駅始発')) {
                    TT[td][tr] = TT[td][tr].slice(0, -6);
                    if (Indexfile == 'index6.php') {
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
        if (Indexfile == 'index8.php' && name.includes('エアポート')) {
            count = 0;
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
//TTをリセットする
function Tablereset(num) {
    for (let row = 1; row < TT[num].length; row++) {
        for (let Tcolumn = 1; Tcolumn < TT[num][row].length; Tcolumn++) {
            TT[num][row][Tcolumn] = "";
        }
    }
}
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