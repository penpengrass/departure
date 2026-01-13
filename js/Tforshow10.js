var Guidance = document.getElementById("guidance");
if (station == '鳥栖駅') {
    let EightCars = [15, 17, 19, 21, 25, 27, 29, 31, 33, 35, 37, 39, 41, 47, 49, 51, 107, 109, 111, 55, 57, 61, 65, 18, 20, 22, 24, 26, 28, 30, 32, 34, 60, 62, 64, 66];
    let SixCars = [103, 105, 23, 43, 45, 53, 113, 115, 59, 63, 67, 201, 202, 6, 16, 36, 110, 50, 56, 58];
    const table1 = document.getElementById("ZTable1");
    const table2 = document.getElementById("ZTable3");
    const table3 = document.getElementById("ZTable5");
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
} else if (station == '小倉駅') {
    let EightCars = [[6, 66], [1, 9, 3], []];
    let SevenCars = [[], [202, 2, 4, 8, 18, 20, 22, 24, 26, 30, 40, 42, 44, 46, 48, 52, 58, 60], [1, 13, 23, 25, 27, 29, 31, 35, 45, 47, 49, 51, 53, 57]];
    let SixCars = [[8, 14], [5, 6, 10, 12, 14, 16, 28, 32, 34, 36, 38, 50, 101, 201], [11, 15, 17, 19, 21, 33, 37, 39, 41, 43, 55, 59, 201]];
    let FourCars = [[10, 12], [], []];
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            if (SixCars[td].includes(number[td][tr])) {
                Cars[td][tr] = '6両';
            } else if (SevenCars[td].includes(number[td][tr])) {
                Cars[td][tr] = '7両';
            } else if (EightCars[td].includes(number[td][tr])) {
                Cars[td][tr] = '8両';
            } else if (FourCars[td].includes(number[td][tr])) {
                Cars[td][tr] = '4両';
            }
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        AllWordReplace(0, tr, Type, '区間快速', '普通');
        AllWordReplace(0, tr, Type, '快速', '普通');
        if (Des[0][tr] == '下関') {
            Cars[0][tr] = '4両';
        }

        if ((Des[2][tr] == '田川後藤寺' || Des[2][tr] == '添田') && Type[2][tr] == '普通') {
            Cars[2][tr] = '2両';
        } else if (Type[2][tr] == '普通') {
            Cars[2][tr] = '3両';
        }
    }
    CarsDevideToLine(0);
    CarsDevideToLine(1);
    CarsDevideToLine(2);
} else if (station == '長崎駅') {
    NonGouflag = 0;
    JRNameDevide(1);
    const elements = document.querySelectorAll('.Destination');
    elements.forEach(el => {
        // 直接 style を変更
        el.style.color = 'orange';
    });
    const elements_cars = document.querySelectorAll('.cars');
    elements_cars.forEach(el => {
        // 直接 style を変更
        el.style.color = 'greenyellow';
    });
    const elements_time = document.querySelectorAll('.CTime');
    elements_time.forEach(el => {
        // 直接 style を変更
        el.style.color = 'white';
    });
    for (var tr = 0; tr < orderNum; tr++) {
        FDetail(Type[0][tr], JRK_Nobj, Dtype[0], 0, tr, "、");
        NagasakiAddStop(tr)
        LastLetterRemove(0, tr, "、");
        Detail[0][tr] = "停車駅は、<span class='Corange'>" + Detail[0][tr] + "</span>です"
        if (number[0][tr] < 99 && number[0][tr] > 0) {
            document.getElementById('TCars' + (1) + (tr + 1)).textContent = '自由席4-6号車';
        } else if (number[0][tr] > 99) {
            document.getElementById('TCars' + (1) + (tr + 1)).textContent = '全車自由席';
            Detail[0][tr] += "　諫早、新大村方面の<span class='Corange'>最終列車</span>です。";
        }
        if (Type[0][tr] != "") document.getElementById('TDetail1' + (tr + 1)).innerHTML = Detail[0][tr];
        if (Type[1][tr] != "") {
            if (Type[1][tr].includes('*')) Cars[1][tr] = '3両';
            else if (Type[1][tr].includes('+')) Cars[1][tr] = '4両';
            else Cars[1][tr] = '2両';
            Type[1][tr] = Type[1][tr].replace('*', '');
            Type[1][tr] = Type[1][tr].replace('+', '');
        }
        AllWordChange(1, tr, Type, '長与経由普通', '普通');
        if (Des[1][tr] != '' && Des[1][tr] != '長与') {
            Des[1][tr] += '(長与)';
        }
        if (Des[2][tr] != '') {
            Des[2][tr] += '(市布)';
        }
        if (Type[2][tr] != "") {
            if (Type[2][tr].includes('*')) Cars[2][tr] = '3両';
            else if (Type[2][tr].includes('+')) Cars[2][tr] = '4両';
            else Cars[2][tr] = '2両';
            Type[2][tr] = Type[2][tr].replace('*', '');
            Type[2][tr] = Type[2][tr].replace('+', '');
        }
    }
    if (Type[0][0] != "") document.getElementById('TDetail1' + (3)).innerHTML = "西九州新幹線では、<span class='Corange'>交通系ICカード</span>のご利用はできません。";
    if (holidayflag == 2) {
        comment.textContent += " 西九州新幹線の臨時列車の運転日です。";
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
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-35%,0%)";
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
    Guidance.innerHTML += '<h1 class="Cheader">長崎本線・佐世保線の特急の車両案内</h1>' +
        '<li>8両みどり、ハウステンボス・・・783系</li>' +
        '<li>8両リレーかもめ、かささぎ・・・787系</li>' +
        '<li>6両リレーかもめ、かささぎ、みどり・・・885系</li>' +
        '<li>ただし、早朝深夜の佐賀発着かささぎ6両は787系</li>';
}
if (station != '長崎駅') {
    Bansenshow(1);
}