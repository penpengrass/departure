
for (var tr = 0; tr < orderNum; tr++) {
    FDetail(Type[0][tr], JRCeNobj, Dtype[0], 0, tr, "・");
    if (Detail[0][tr].slice(-1) == '・') {
        console.log(tr + 'は読点で終わる');
        Detail[0][tr] = Detail[0][tr].slice(0, -1);
        document.getElementById('TDetail' + (1) + '' + (tr + 1)).textContent = Detail[0][tr];
    }
    if (Type[1][tr].includes('特急') || Type[1][tr].includes('ホームライナー')) {
        FDetail(Type[1][tr], JRCeNobj, Dtype[0], 1, tr, "・");
        if (Detail[1][tr].slice(-1) == '・') {
            console.log(tr + 'は読点で終わる');
            Detail[1][tr] = Detail[1][tr].slice(0, -1);
            document.getElementById('TDetail' + (2) + '' + (tr + 1)).textContent = Detail[1][tr];
        }
    }
    if (Type[2][tr].includes('特急') || Type[2][tr].includes('ホームライナー')) {
        FDetail(Type[2][tr], JRChNobj, Dtype[0], 2, tr, "・");
        if (Detail[2][tr].slice(-1) == '・') {
            console.log(tr + 'は読点で終わる');
            Detail[2][tr] = Detail[2][tr].slice(0, -1);
            document.getElementById('TDetail' + (3) + '' + (tr + 1)).textContent = Detail[2][tr];
        }
    }
    console.log(Type[3][tr]);
    FDetail(Type[3][tr], JRKaobj, Dtype[0], 3, tr, "・");
    if (Detail[3][tr].slice(-1) == '・') {
        console.log(tr + 'は読点で終わる');
        Detail[3][tr] = Detail[3][tr].slice(0, -1);
        document.getElementById('TDetail' + (4) + '' + (tr + 1)).textContent = Detail[3][tr];
    }
    FDetail(Type[4][tr], JRKaobj, Dtype[0], 4, tr, "・");
    if (Detail[4][tr].slice(-1) == '・') {
        console.log(tr + 'は読点で終わる');
        Detail[4][tr] = Detail[4][tr].slice(0, -1);
        document.getElementById('TDetail' + (5) + '' + (tr + 1)).textContent = Detail[4][tr];
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][tr].length == 2) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.letterSpacing = '1em';
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.textIndent = '0.4em';
        }
        if (Des[td][tr].length == 2) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.letterSpacing = '1em';
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.textIndent = '1em';
        }
    }
}
for (var tr = 0; tr < orderNum; tr++) {
    if (Type[1][tr].includes('快速')) {
        document.getElementById('TDetail' + 2 + (tr + 1)).textContent = '尾張一宮・岐阜・岐阜から各駅';
    }else if(Type[1][tr].includes('ホームライナー')){
        document.getElementById('TDetail' + 2 + (tr + 1)).textContent = '尾張一宮・岐阜・穂積';
    }
    if (Type[2][tr].includes('快速')) {
        document.getElementById('TDetail' + 3 + (tr + 1)).textContent = '金山・鶴舞・千種・大曽根・勝川・春日井・高蔵寺・多治見・多治見から各駅';
    }
}
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        if (Type[te][tr].includes('普通')) {
            document.getElementById('TDetail' + (te + 1) + (tr + 1)).textContent = '各駅にとまります';
        }
        console.log(Type[te][tr]);
        if (Type[te][tr] === 'undefined') {
            console.log(":");
        } else if (Type[te][tr].length > 6 && Type[te][tr].length < 9) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
            //document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
            //document.getElementById('IType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
        } else if (Type[te][tr].length > 10) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[te][tr].length > 8) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
        } else if (Type[te][tr].length > 7) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
        }
        DetailBanner(te, tr, 23);
    }
}
