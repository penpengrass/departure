let EightCars = [15, 17, 19, 21, 25, 27, 29, 31, 33, 35, 37, 39, 41, 47, 49, 51, 107, 109, 111, 55, 57, 61, 65, 18, 20, 22, 24, 26, 28, 30, 32, 34, 60, 62, 64, 66];
let SixCars = [103, 105, 23, 43, 45, 53, 113, 115, 59, 63, 67, 202, 6, 16, 36, 110, 50, 56, 58];
if (station == '鳥栖駅') {
    const table1 = document.getElementById("TTable1");
    const table2 = document.getElementById("TTable3");
    const table3 = document.getElementById("TTable5");
    swapColumns(table1, 2, 3);
    swapColumns(table2, 2, 3);
    swapColumns(table3, 2, 3);
    swapColumns(table1, 1, 2);
    swapColumns(table2, 1, 2);
    swapColumns(table3, 1, 2);
    CarsDevideToLine(1);
    CarsDevideToLine(3);
    CarsDevideToLine(5);
    for (var tr = 0; tr < 2; tr++) {
        if (!Type[0][tr].includes('ゆふ')) {
            if (SixCars.includes(number[0][tr])) {
                Cars[0][tr] = '6両';
            } else if (number[0][tr] > 0) {
                Cars[0][tr] = '8両';
            }
        }
        if (SixCars.includes(number[2][tr])) {
            Cars[2][tr] = '6両';
        } else if (number[2][tr] > 0) {
            Cars[2][tr] = '8両';
        }
        if (Type[2][tr].includes('みどり(リレーかもめ')) {
            Des[2][tr] = '佐世保･長崎';
        }
        if (Des[2][tr] == '武雄温泉') {
            Des[2][tr] = '長崎';
        }
        AllWordChange(2, tr, Des, 'ハウステンボス･佐世保', 'ﾊｳｽﾃﾝﾎﾞｽ･佐世保');
        if (Type[3][tr] == '普通' && Cars[3][tr] === undefined) {
            Cars[3][tr] = '2両';
        }
    }
}
allLastShow();

for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        CarsInto(td, tr, 'TCars');
        TypeColorChange(td, tr, '快速', 'orange');
        TypeColorChange(td, tr, '特急', 'red');
        TwoLetterDistance(td, tr, Type, TType, 1, 0);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
        TwoLetterDistance(td, tr, Des, TDes, 0.4, 0.2, 3);
        if (Type[td][tr] === 'undefined') {
            console.log(":");
        } else if (Type[td][tr].length > 12) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.boxSizing = "border-box";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.45)" + "translate(-55%,0%)";
        } else if (Type[td][tr].length > 10) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[td][tr].length > 8) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Type[td][tr].length > 7) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
        if (Des[td][tr].length > 9) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
        }
    }
}
if (station == '鳥栖駅') {
    for (var tr = 0; tr < 2; tr++) {
        TypeColorChange(0, tr, '', 'red');
        TypeColorChange(2, tr, '', 'red');
        TypeColorChange(4, tr, '', 'red');
    }
}
Bansenshow(1);