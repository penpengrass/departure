//TT1とTT2の配列を合体してTT4に入れる(TT4はもともと空かつTT1とTT2は同じ行数であることが条件)
//同時発車なしの前提
//時刻表にまだ対応していない
//console.log(TT[2]);
//console.log(TT[4][1]);
function TTconnect(TT1, TT2, TT4) {
    let i = 1;//
    let j = 1;
    let k = 1;
    //console.log(TT1);
    console.log(TT1.length);
    console.log(TT1[10].length);
    console.log(Math.max(TT1.length, TT2.length));
    for (let p = 2; p < Math.max(TT1.length, TT2.length); p += 4) {
        //p = 34;
        console.log(TT1[p]);
        //console.log(p + ":*" + (TT1[p].length + TT2[p].length));
        TT4[p] = new Array(TT1[p].length + TT2[p].length);
        console.log(TT1[p].length);
        let n = 0;
        k = 1;
        i = 1;
        j = 1;
        console.log(TT1[p].length + TT2[p].length);
        while (n < (TT1[p].length + TT2[p].length) && n < 50 && (TT1[p][i] != "" || TT2[p][j] != "")) {
            //console.log(n + ":" + p+":"+k);
            //console.log(TT1[p][i] + "," + i + " & " + TT2[p][j] + "," + j);
            if (typeof TT1[p][i] === "undefined" || TT1[p][i] == '') {
                //console.log("TT1空TT2 " + TT2[p + 1][j] + "," + p + ":" + j + ":" + TT2[p][j]);
                TT4[p][k] = TT2[p][j];
                TT4[p - 1][k] = TT2[p - 1][j];
                TT4[p + 1][k] = TT2[p + 1][j];
                TT4[p + 2][k] = TT2[p + 2][j];
                k++;
                j++;
            } else if (typeof TT2[p][j] === "undefined" || TT2[p][j] == '') {
                //console.log("TT2空TT1 " + TT1[p + 1][i] + "," + p + ":" + i + ":" + TT1[p][i]);
                TT4[p][k] = TT1[p][i];
                TT4[p - 1][k] = TT1[p - 1][i];
                TT4[p + 1][k] = TT1[p + 1][i];
                TT4[p + 2][k] = TT1[p + 2][i];
                k++;
                i++;
            } else if (Number(TT1[p][i]) < Number(TT2[p][j])) {
                //console.log("TT1 " + TT1[p + 1][i] + "," + p + ":" + i + ":" + TT1[p][i]);
                TT4[p][k] = TT1[p][i];
                TT4[p - 1][k] = TT1[p - 1][i];
                TT4[p + 1][k] = TT1[p + 1][i];
                TT4[p + 2][k] = TT1[p + 2][i];
                console.log(k + "-");
                k++;
                i++;
            } else if (Number(TT1[p][i]) > Number(TT2[p][j])) {
                //console.log("TT2 " + TT2[p + 1][j] + "," + p + ":" + j + ":" + TT2[p][j]);
                TT4[p][k] = TT2[p][j];
                TT4[p - 1][k] = TT2[p - 1][j];
                TT4[p + 1][k] = TT2[p + 1][j];
                TT4[p + 2][k] = TT2[p + 2][j];
                console.log(k + "+");
                k++;
                j++;
            } else if (Number(TT1[p][i]) == Number(TT2[p][j])) {
                //console.log("TT0" + TT2[p + 1][j] + "," + p + ":" + j + ":" + TT1[p][i]);
                TT4[p][k] = TT1[p][i];
                TT4[p - 1][k] = TT1[p - 1][i];
                TT4[p + 1][k] = TT1[p + 1][i];
                TT4[p + 2][k] = TT1[p + 2][i];
                console.log(TT1[p][i]);
                console.log(k + "0");
                k++;
                j++;
                i++;
            } else {
                console.log("error");
            }
            //console.log(TT4[p + 1][k]);
            //console.log(p+"."+k);
            n++;
        }
    }
}
Tablereset(4);
Tablereset(5);
console.log(TT[4]);
console.log("---1回目のconnect始まり");
TTconnect(TT[0], TT[2], TT[4]);
console.log("---1回目のconnect終わり");
TTconnect(TT[1], TT[3], TT[5]);
console.log(TT[4]);
console.log(TT[5]);
for (let z = 0; z < 6; z++) {
    console.log(z + ":" + TT[z].length);
}
//console.log(TT[4][1][0]);
TT[1] = TT[5];
TT[0] = TT[4];
//console.log(TT[0][1][0]);