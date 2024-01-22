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
//引数a番線以上の場合は別表に分ける bの表を分割したものをcに入れる(cはリセットされる)
function RailNumberDevide(a, b, c) {
    Tablereset(c);
    console.log(TT[c]);
    console.log(TT[0][17][0]);
    let s = 1;
    //uは時を示すhは1個目の表のh-1本目を示す rは1個目の表の残った本数 sは2つ目の表のs-1本目(hを減らしsを増やすようにする)
    for (let u = 4; u < TT[b].length; u += 4) {//時の切替
        s = 1;
        for (let h = 1; h < TT[b][u].length; h++) {//列車の切替
            //if (SubDevide()) {
            if (TT[b][u][h] >= a) {
                console.log(TT[b].length + ":" + TT[c].length);
                TT[c][u - 3][s] = TT[b][u - 3][h];
                TT[c][u - 2][s] = TT[b][u - 2][h];
                TT[c][u - 1][s] = TT[b][u - 1][h];
                TT[c][u][s] = TT[b][u][h];
                s++;
                for (let r = h; r < TT[b][u].length - 1; r++) {
                    //console.log((u+20)/4+":"+s+":"+r);
                    //console.log(r+"**"+TT[b][u].length);
                    TT[b][u - 3][r] = TT[b][u - 3][r + 1];
                    TT[b][u - 2][r] = TT[b][u - 2][r + 1];
                    TT[b][u - 1][r] = TT[b][u - 1][r + 1];
                    TT[b][u][r] = TT[b][u][r + 1];
                    TT[b][u - 3][r + 1] = '';
                    TT[b][u - 2][r + 1] = '';
                    TT[b][u - 1][r + 1] = '';
                    TT[b][u][r + 1] = '';
                }
                h--;
            }
        }
    }
    console.log(TT[b][17][0]);
    return a;
}
//行先によって分類するstationに配列として行先を入れる。TT[b]を分割したものをTT[c]に入れる
function DestinationDevide(station, b, c) {
    Tablereset(c);
    //console.log(TT[c]);
    //console.log(TT[0][17][0]);
    let s = 1;
    //uはTTの行を示す
    //hは1個目の表のh-1本目を示す rは1個目の表の残った本数 sは2つ目の表のs-1本目(hを減らしsを増やすようにする)
    for (var u = 4; u < TT[b].length; u += 4) {//時の切替
        s = 1;
        let flag = 0;
        for (var h = 1; h < TT[b][u].length; h++) {//列車の切替
            if (station.includes(TT[b][u - 1][h])) {
                console.log(TT[b].length + ":" + TT[c].length);
                TT[c][u - 3][s] = TT[b][u - 3][h];
                TT[c][u - 2][s] = TT[b][u - 2][h];
                TT[c][u - 1][s] = TT[b][u - 1][h];
                TT[c][u][s] = TT[b][u][h];
                s++;
                for (var r = h; r < TT[b][u].length - 1; r++) {
                    //console.log((u + 20) / 4 + ":" + s + ":" + r);
                    //console.log(r+"**"+TT[b][u].length);
                    TT[b][u - 3][r] = TT[b][u - 3][r + 1];
                    TT[b][u - 2][r] = TT[b][u - 2][r + 1];
                    TT[b][u - 1][r] = TT[b][u - 1][r + 1];
                    TT[b][u][r] = TT[b][u][r + 1];
                    TT[b][u - 3][r + 1] = '';
                    TT[b][u - 2][r + 1] = '';
                    TT[b][u - 1][r + 1] = '';
                    TT[b][u][r + 1] = '';
                    flag++;
                }
                if (flag > 0) {
                    h--;
                }
            }
        }
    }
    console.log(TT[b][17][0]);
}
//特急の号数を追加する，2ずつ追加する場合のみ
function limitednumber(TT, firstlimited, name) {
    var count = firstlimited;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr].includes(name)) {
                if (TT[td][tr].includes('当駅始発')) {
                    TT[td][tr] = TT[td][tr].slice(0, -6);
                    if (Indexfile == 'index6.php'||Indexfile == 'index7.php') {
                        TT[td][tr] += count + "号";
                        count += 2;
                        TT[td][tr] += '(当駅始発)';
                    } else if (Indexfile == 'index4_S2.php'||Indexfile=='index7_S1.php') {
                        TT[td][tr] += count+"";
                        count+=2;
                    }
                } else {
                    if (Indexfile == 'index4_S2.php'||Indexfile=='index7_S1.php') {
                        TT[td][tr] += count+ "";
                        count+=2;
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
            if (TT[td][tr]==name) {
                if (TT[td][tr].includes('当駅始発')) {
                    TT[td][tr] = TT[td][tr].slice(0, -6);
                    if (Indexfile == 'index6.php') {
                        TT[td][tr] += count + "号";
                        count += 2;
                        TT[td][tr] += '(当駅始発)';
                    } else if (Indexfile == 'index4_S2.php'||Indexfile=='index7_S1.php') {
                        TT[td][tr] += count+"";
                        count+=2;
                    }
                } else {
                    if (Indexfile == 'index4_S2.php'||Indexfile=='index7_S1.php') {
                        TT[td][tr] += count+ "";
                        count+=2;
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
    for (let w = 1; w < TT[num].length; w++) {
        for (let r = 1; r < TT[num][w].length; r++) {
            TT[num][w][r] = "";
        }
    }
}
function reverseLine(hairetsu,before,after){
    var numberOfHairetsu=hairetsu[before].length;
    hairetsu[after]=new Array(numberOfHairetsu);
    for(var a=0;a<numberOfHairetsu;a++){
        hairetsu[after][numberOfHairetsu-a-1]=hairetsu[before][a];
    }
}
function JRC_station(){
    if(station=='浜松駅'){
        location.href='./index7.php';
    }else if(station=='豊橋駅'){
        location.href='./index7.php?station=toyohashi';
    }
}