//TTLeftとTTRightの配列を合体してTTSumに入れる(TTSumはもともと空かつTTLeftとTTRightは同じ行数であることが条件)
//同時発車なしの前提
//時刻表にまだ対応していない
//console.log(TT[2]);
//console.log(TT[4][1]);
//合体用に中身が空のTTを作る関数(TTLeftとTTRightを合わせてTT3を作る)
//時の部分は数字を入れる
function makeemptyTable(TTLeft, TTRight) {
    console.log(TTLeft.length + ":" + TTRight.length);
    let TT3 = new Array(TTLeft.length);
    console.log(TT3.length);
    for (let td = 0; td < TTLeft.length; td++) {
        console.log(TTLeft[td].length + ":" + TTRight[td].length)
        TT3[td] = new Array(TTLeft[td].length + TTRight[td].length);
        if (TTLeft[td][0] == TTRight[td][0] && TTLeft[td][0] != '') {
            TT3[td][0] = TTLeft[td][0];
        }
    }
    return TT3;
}
//TTLeftとTTRightを合わせてTTSumに入れる
function TTconnect(TTLeft, TTRight, TTSum) {
    let left_count = 1;//
    let right_count = 1;
    let Sum_TSum = 1;
    //console.log(TTLeft);
    console.log("TTLeft.length=" + TTLeft.length + ":TTRight.length=" + TTRight.length);
    console.log(Math.max(TTLeft.length, TTRight.length));
    for (let TaRow = 2; TaRow < Math.max(TTLeft.length, TTRight.length); TaRow += 4) {
        //TaRow = 34;
        //console.log(TTLeft[TaRow]);
        //console.log(TaRow + ":*" + (TTLeft[TaRow].length + TTRight[TaRow].length));
        TTSum[TaRow] = new Array(TTLeft[TaRow].length + TTRight[TaRow].length);
        //console.log(TTLeft[TaRow].length);
        if (TTLeft[TaRow - 1][0] == TTRight[TaRow - 1][0]) {
            TTSum[TaRow - 1][0] = TTLeft[TaRow - 1][0];
        }
        let connect_count = 0;
        Sum_TSum = 1;
        left_count = 1;
        right_count = 1;
        //console.log(TTLeft[TaRow].length + TTRight[TaRow].length);
        while (connect_count < (TTLeft[TaRow].length + TTRight[TaRow].length) && connect_count < 50 && (TTLeft[TaRow][left_count] != "" || TTRight[TaRow][right_count] != "")) {
            //console.log("n=" + connect_count + ":" + TaRow + ":Sum_TSum=" + Sum_TSum);
            //console.log(TTLeft[TaRow][left_count] + "," + i + " & " + TTRight[TaRow][right_count] + "," + right_count);
            if (typeof TTLeft[TaRow][left_count] === "undefined" || TTLeft[TaRow][left_count] == '') {
                //console.log("TTLeft空TTRight " + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTRight[TaRow][right_count]);
                TTSum[TaRow][Sum_TSum] = TTRight[TaRow][right_count];
                TTSum[TaRow - 1][Sum_TSum] = TTRight[TaRow - 1][right_count];
                TTSum[TaRow + 1][Sum_TSum] = TTRight[TaRow + 1][right_count];
                TTSum[TaRow + 2][Sum_TSum] = TTRight[TaRow + 2][right_count];
                Sum_TSum++;
                right_count++;
            } else if (typeof TTRight[TaRow][right_count] === "undefined" || TTRight[TaRow][right_count] == '') {
                //console.log("TTRight空TTLeft " + TTLeft[TaRow + 1][left_count] + "," + TaRow + ":" + left_count + ":" + TTLeft[TaRow][left_count]);
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count];
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count];
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count];
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count];
                Sum_TSum++;
                left_count++;
            } else if (Number(TTLeft[TaRow][left_count]) < Number(TTRight[TaRow][right_count])) {
                //console.log("TTLeft " + TTLeft[TaRow + 1][left_count] + "," + TaRow + ":" + left_count + ":" + TTLeft[TaRow][left_count]);
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count];
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count];
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count];
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count];
                //console.log(Sum_TSum + "-");
                Sum_TSum++;
                left_count++;
            } else if (Number(TTLeft[TaRow][left_count]) > Number(TTRight[TaRow][right_count])) {
                //console.log("TTRight " + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTRight[TaRow][right_count]);
                TTSum[TaRow][Sum_TSum] = TTRight[TaRow][right_count];
                TTSum[TaRow - 1][Sum_TSum] = TTRight[TaRow - 1][right_count];
                TTSum[TaRow + 1][Sum_TSum] = TTRight[TaRow + 1][right_count];
                TTSum[TaRow + 2][Sum_TSum] = TTRight[TaRow + 2][right_count];
                //console.log(Sum_TSum + "+");
                Sum_TSum++;
                right_count++;
            } else if (Number(TTLeft[TaRow][left_count]) == Number(TTRight[TaRow][right_count])) {
                //console.log("TT0" + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTLeft[TaRow][left_count]);
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count];
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count];
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count];
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count];
                //console.log(TTLeft[TaRow][left_count]);
                //console.log(Sum_TSum + "0");
                Sum_TSum++;
                right_count++;
                left_count++;
            } else {
                console.log("error");
            }
            //console.log(TTSum[TaRow]);
            //console.log(TaRow+"."+Sum_TSum);
            connect_count++;
        }
    }
}
console.log(TT.length);
if (station == '武蔵小杉駅') {
    console.log(TT[6]);
    TT[6] = makeemptyTable(TT[0], TT[2]);
    TT[5] = makeemptyTable(TT[1], TT[3]);
    //Tablereset(4);
    //Tablereset(5);
    console.log(TT[6]);
    console.log("---1回目のconnect始まり");
    TTconnect(TT[0], TT[2], TT[6]);
    console.log("---1回目のconnect終わり");
    TTconnect(TT[1], TT[3], TT[5]);
    TT[7] = makeemptyTable(TT[4], TT[5]);
    TTconnect(TT[4], TT[5], TT[7]);
    //console.log(TT[4]);
    //console.log(TT[5]);
    for (let z = 0; z < 6; z++) {
        console.log(z + ":" + TT[z].length);
    }
    //console.log(TT[4][1][0]);
    TT[1] = TT[7];
    TT[0] = TT[6];
    //console.log(TT[0][1][0]);
    console.log(TT[1]);
} else if (station == '新函館北斗駅') {
    console.log(TT[1]);
    console.log(TT[3]);
    TT[3] = makeemptyTable(TT[1], TT[2]);
    TTconnect(TT[1], TT[2], TT[3]);
    TT[1] = TT[3];
} else if (station == '東京駅') {
    console.log(TT[1]);
    console.log(TT[3]);
    TT[3] = makeemptyTable(TT[1], TT[2]);
    TTconnect(TT[1], TT[2], TT[3]);
    TT[1] = TT[3];
}