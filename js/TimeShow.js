let next = 0;//終電の時1にする
let TaRow = 1;//TaRowは縦のセル番号-1
let Sempatsu_flag = 0;//先発が決定したら1にする
let exception = 0;
function FShow(TT, TableNumber) {
    console.log(TableNumber + "番目の表の先発表示");
    Sempatsu_flag = 0;
    next = 0;
    TaRow = 1;
    //console.log(hour + "時:" + TableNumber);
    //一番外のwhile内では先発列車を確定できればbreak
    while (TaRow < TT.length) {
        try {
            exception = TT[TaRow][0];// 時を1個ずつ
        } catch (e) {
            console.log("運転終了");
            next = 1;
            break;
        }
        //console.log(TaRow);
        if (L_hour == TT[TaRow][0]) {
            //時を仮代入
            //console.log(TaRow);
            console.log(TT[TaRow][0] + "時いったん確定" + TaRow)
        } else {
            //console.log(TT[0][TaRow][0]+"時未確定");
            //console.log((TaRow+1)+":通ったセル番号");
            TaRow += 4;
            continue;
        }
        //時を仮代入した後
        console.log("深夜時は0回，57分とかは1回，1時間列車が空くときは2回までの表示");
        let k = 1;//分を初期化
        while (k < 40 && typeof (TT[TaRow + 1][k]) !== 'undefined') {
            //console.log(k + "何本目かの表示");
            //console.log(TT[TaRow+1][k]);
            console.log("L_min:"+L_min);
            if (L_min <= TT[TaRow + 1][k] && TT[TaRow + 1][k]) {
                //列車情報入力
                Shows(TaRow, k, TT, TableNumber, 1);
                //FirstShow(TaRow, k, TT, TableNumber);
                console.log("先発決定1:" + TT[51][1]);
                Sempatsu_flag = 1;
                break;
            } else {
                //console.log(k + "本目で決定しない" + TT[TaRow][k] + ":" + TT[TaRow + 2][k]);//決定しないので次の列車を探す
                k++;
            }
        }
        console.log("Sempatsu_flag=" + Sempatsu_flag);
        if (Sempatsu_flag !== 1) {//先発が表示されていない
            console.log(TT[TaRow][0] + "時59分だったとき");
            //console.log(TT[TaRow+4][0]);
            //ここは2時間空くと対応できない
            try {
                console.log(TT[TaRow + 4][0] + TableNumber);
            } catch (e) {
                console.log("運転終了");
                next = 1;
            }
            //console.log(TT[TaRow+4][1]);
            if (next == 1) {
                console.log("次の時間なしb");
            } else if (TT[TaRow + 4][1] == '' || typeof (TT[TaRow + 4][1]) === 'undefined') {//1時間空く場合
                console.log("先発が1時間空く");
                console.log(lasttrain(TT, TaRow));
                if (lasttrain(TT, TaRow) == 0) {
                    console.log("終電終了");
                    next = 1;
                } else if (TT[TaRow + 8][1] == '') {
                    console.log("2時間空く");
                    Shows(TaRow + 12, 1, TT, TableNumber, 1);
                    TaRow = TaRow + 12;
                } else {
                    Shows(TaRow + 8, 1, TT, TableNumber, 1);
                    TaRow = TaRow + 8;
                }
            } else if (TT[TaRow + 4][0] == "") {//0時59分の場合
                console.log("0時59分あたりのときのみ表示");
            } else {
                console.log("次の時間にはある");
                Shows(TaRow + 4, 1, TT, TableNumber, 1)
                //FirstShow(TaRow + 4, 1, TT, TableNumber);
                TaRow = TaRow + 4;
            }
            break;
        } else {
            console.log("先発決定済み" + TableNumber + ":" + TaRow);
        }
        break;
    }
    Sempatsu_flag = 0;
}
//ここで完全分離している次発と次々発同時対応
//pregarbage.jsに予備(エラーのとき使う)
//高階関数が使える STShowは仮で設定された関数
//FSTShowの引数は順に(時刻表配列,関数shows,showsの2番目の引数,showの4番目の引数,showの5番目の引数)
function FSTShow(TT, STShow, Order, TableNumber, depnum) {
    //console.log(TT.length + "k:" + (TaRow + 1) + ":" + Order);
    if (TT.length < (TaRow + 1)) {
        console.log("次の時間なしa'");
        next = 1;
    } else if (TT[TaRow + 1][Order] > 0) {//次発が空でないとき
        console.log("先発と次発が同じ時:" + Order);
        STShow(TaRow, Order, TT, TableNumber, depnum);
    } else {//次発が時をまたぐ
        console.log("次発が時をまたぐ:");
        try {
            console.log(TT[TaRow + 4][0]);
        } catch (e) {
            console.log("次の時間なしa");
            next = 1;
        }
        //console.log(TT[TaRow+4][1]);
        console.log(TT.length + ":" + (TaRow + 8));
        if (next == 1) {//次の時間の最初
            console.log("次の時間なしb");
        } else if (TT[TaRow + 4][1] !== "" && typeof TT[TaRow + 4][1] !== 'undefined') {
            console.log("次発は次の時間" + Order);
            STShow(TaRow + 4, 1, TT, TableNumber, depnum);
            TaRow = TaRow + 4;
            //ここは仮の状態
        } else if (TT.length <= TaRow + 8) {
            console.log("未定義");
            next = 1;
            //} else if (TT[TaRow + 8][0] >= 0) {//さらに1時間後
        } else if (TT[TaRow + 8][1] !== "" && typeof TT[TaRow + 8][1] !== 'undefined') {
            console.log("次発は1時間空き:" + (TaRow + 4));
            STShow(TaRow + 8, 1, TT, TableNumber, depnum);
            TaRow = TaRow + 8;
        } else {
            console.log("3時間以上空いてる");
            next = 1;
            if (TT.length <= (TaRow + 12)) {
            } else {
                //STShow(TaRow + 12, 1, TT, TableNumber, depnum);
                //TaRow = TaRow + 12;
            }
        }
    }
    console.log("関数終了・次発表示後" + Order + "番目の出発表示完了");
    //console.log(TT[0]);
    //console.log(TT[1]);
}
//終電が終わっているかどうかを取得する(次の時間に移行した後)
function lasttrain(TT, Lone) {
    for (let last = Lone + 4; last < TT.length; last++) {
        console.log(TT[last][1]);
        if (TT[last][1] == '' || TT[last][1] === 'undefined') {
        } else {
            console.log("lasttrainは1");
            return 1;
        }
    }
    console.log("lasttrain発動");
    return 0;
}