let next = 0;//終電の時1にする
let j = 1;//jは縦のセル番号-1
let flag1 = 0;//先発が決定したら1にする
let exception = 0;
function FShow(TT, m) {
    console.log(m + "番目の表の先発表示");
    flag1 = 0;
    next = 0;
    j = 1;
    console.log(hour + "時:" + m);
    //一番外のwhile内では先発列車を確定できればbreak
    while (j < TT.length) {
        try {
            exception = TT[j][0];// 時を1個ずつ
        } catch (e) {
            console.log("運転終了");
            next = 1;
            break;
        }
        //console.log(j);
        if (hour == TT[j][0]) {
            //時を仮代入
            //console.log(j);
            console.log(TT[j][0] + "時いったん確定" + j)
        } else {
            //console.log(TT[0][j][0]+"時未確定");
            //console.log((j+1)+":通ったセル番号");
            j += 4;
            continue;
        }
        //時を仮代入した後
        console.log("深夜時は0回，57分とかは1回，1時間列車が空くときは2回までの表示");
        let k = 1;//分を初期化
        while (k < 40 && typeof (TT[j + 1][k]) !== 'undefined') {
            //console.log(k + "何本目かの表示");
            //console.log(TT[j+1][k]);
            if (min <= TT[j + 1][k] && TT[j + 1][k]) {
                //列車情報入力
                Shows(j, k, TT, m, 1);
                //FirstShow(j, k, TT, m);
                console.log("先発決定1:" + TT[51][1]);
                flag1 = 1;
                break;
            } else {
                //console.log(k + "本目で決定しない" + TT[j][k] + ":" + TT[j + 2][k]);//決定しないので次の列車を探す
                k++;
            }
        }
        console.log("flag1=" + flag1);
        if (flag1 !== 1) {//先発が表示されていない
            console.log(TT[j][0] + "時59分だったとき");
            //console.log(TT[j+4][0]);
            //ここは2時間空くと対応できない
            try {
                console.log(TT[j + 4][0] + m);
            } catch (e) {
                console.log("運転終了");
                next = 1;
            }
            //console.log(TT[j+4][1]);
            if (next == 1) {
                console.log("次の時間なしb");
            } else if (TT[j + 4][1] == '' || typeof (TT[j + 4][1]) === 'undefined') {//1時間空く場合
                console.log("先発が1時間空く");
                console.log(lasttrain(TT,j));
                if(lasttrain(TT,j)==0){
                    console.log("終電終了");
                    next=1;
                }else if (TT[j + 8][1] == '') {
                    console.log("2時間空く");
                    Shows(j + 12, 1, TT, m, 1);
                    j = j + 12;
                } else {
                    Shows(j + 8, 1, TT, m, 1);
                    //FirstShow(j + 8, 1, TT, m);
                    j = j + 8;
                }
            } else if (TT[j + 4][0] == "") {//0時59分の場合
                console.log("0時59分あたりのときのみ表示");
            } else {
                console.log("次の時間にはある");
                Shows(j + 4, 1, TT, m, 1)
                //FirstShow(j + 4, 1, TT, m);
                j = j + 4;
            }
            break;
        } else {
            console.log("先発決定済み" + m + ":" + j);
        }
        break;
    }
    flag1 = 0;
}
//ここで完全分離している次発と次々発同時対応
//pregarbage.jsに予備(エラーのとき使う)
//高階関数が使える STShowは仮で設定された関数
//FSTShowの引数は順に(時刻表配列,関数shows,showsの2番目の引数,showの4番目の引数,showの5番目の引数)
function FSTShow(TT, STShow, Order, m, depnum) {
    console.log(TT.length + "k:" + (j + 1) + ":" + Order);
    if (TT.length < (j + 1)) {
        console.log("次の時間なしa'");
        next = 1;
    } else if (TT[j + 1][Order] > 0) {//次発が空でないとき
        console.log("先発と次発が同じ時:" + Order);
        STShow(j, Order, TT, m, depnum);
    } else {//次発が時をまたぐ
        console.log("次発が時をまたぐ:");
        try {
            console.log(TT[j + 4][0]);
        } catch (e) {
            console.log("次の時間なしa");
            next = 1;
        }
        //console.log(TT[j+4][1]);
        console.log(TT.length + ":" + (j + 8));
        if (next == 1) {//次の時間の最初
            console.log("次の時間なしb");
        } else if (TT[j + 4][1] !== "" && typeof TT[j + 4][1] !== 'undefined') {
            console.log("次発は次の時間" + Order);
            STShow(j + 4, 1, TT, m, depnum);
            j = j + 4;
            //ここは仮の状態
        } else if (TT.length <= j + 8) {
            console.log("未定義");
            next = 1;
            //} else if (TT[j + 8][0] >= 0) {//さらに1時間後
        } else if (TT[j + 8][1] !== "" && typeof TT[j + 8][1] !== 'undefined') {
            console.log("次発は1時間空き:" + (j + 4));
            STShow(j + 8, 1, TT, m, depnum);
            j = j + 8;
        } else {
            console.log("3時間以上空いてる");
            next = 1;
            if (TT.length <= (j + 12)) {
            } else {
                //STShow(j + 12, 1, TT, m, depnum);
                //j = j + 12;
            }
        }
    }
    console.log("関数終了・次発表示後" + Order + "番目の出発表示完了");
    //console.log(TT[0]);
    //console.log(TT[1]);
}
//終電が終わっているかどうかを取得する(次の時間に移行した後)
function lasttrain(TT, Lone) {
    for (let last = Lone+4; last < TT.length; last++) {
        console.log(TT[last][1]);
        if (TT[last][1] == '' || TT[last][1]==='undefined') {
        }else{
            console.log("lasttrainは1");
            return 1;
        }
    }
    console.log("lasttrain発動");
    return 0;
}