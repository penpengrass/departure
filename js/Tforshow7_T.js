console.log(Dtype);
Dtype = [0, 0, 0, 0, 0];
for (var tr = 0; tr < orderNum; tr++) {
    FDetail(Type[0][tr], JRCeNobj, Dtype[0], 0, tr, "・");
    if (Detail[0][tr].slice(-1) == '・') {
        console.log(tr + 'は読点で終わる');
        Detail[0][tr] = Detail[0][tr].slice(0, -1);
        document.getElementById('TDetail' + (1) + '' + (tr + 1)).textContent = Detail[0][tr];
    }
}
td_detail++;
for (var tr = 0; tr < orderNum; tr++) {
    if (Type[1][tr].includes('特急') || Type[1][tr].includes('ﾎｰﾑﾗｲﾅｰ')) {
        FDetail(Type[1][tr], JRCeNobj, Dtype[0], 1, tr, "・");
        if (Detail[1][tr].slice(-1) == '・') {
            console.log(tr + 'は読点で終わる');
            Detail[1][tr] = Detail[1][tr].slice(0, -1);
            
        }
        if (Nagahama.includes(number[1][tr])) {
            console.log(number[1][tr]);
            DetailReplace(1, tr, '米原', '米原・長浜', 2);
        }
        document.getElementById('TDetail' + (2) + '' + (tr + 1)).textContent = Detail[1][tr];
    }
}
td_detail++;
for (var tr = 0; tr < orderNum; tr++) {
    var ShinanoNumber = JRLimitedNumber(2, tr);
    if (Type[2][tr].includes('特急') || Type[2][tr].includes('ﾎｰﾑﾗｲﾅｰ')) {
        FDetail(Type[2][tr], JRChNobj, Dtype[0], 2, tr, "・");
        if (Detail[2][tr].slice(-1) == '・') {
            console.log(tr + 'は読点で終わる');
            Detail[2][tr] = Detail[2][tr].slice(0, -1);
        }
        //console.log(number);
        //特急しなのの停車駅変更
        DetailReplace_Set(2, tr, Kanayama, '千種', '金山・千種');
        DetailReplace_Set(2, tr, Ena, '中津川', '恵那・中津川');
        DetailReplace_Set(2, tr, Nagiso, '中津川', '中津川・南木曽');
        DetailReplace_Set(2, tr, Agematsu, '木曽福島', '上松・木曽福島');
        DetailReplace_Set(2, tr, Akashina, '松本', '松本・明科');
        DetailReplace_Set(2, tr, Hijirikogen, '篠ノ井', '聖高原・篠ノ井');
        document.getElementById('TDetail' + (3) + '' + (tr + 1)).textContent = Detail[2][tr];
    }
}
td_detail++;
for (var tr = 0; tr < orderNum; tr++) {
    console.log(Type[3][tr]);
    FDetail(Type[3][tr], JRKaobj, Dtype[0], 3, tr, "・");
    if (Detail[3][tr].slice(-1) == '・') {
        console.log(tr + 'は読点で終わる');
        Detail[3][tr] = Detail[3][tr].slice(0, -1);
        document.getElementById('TDetail' + (4) + '' + (tr + 1)).textContent = Detail[3][tr];
    }
    if (Des[3][tr] == '伊勢市' && Type[3][tr].startsWith('快速みえ')) {
        document.getElementById('TDetail' + (4) + '' + (tr + 1)).textContent += '・多気から各駅';
        Detail[3][tr] += '・多気から各駅';
    }
}
td_detail++;
var HidaDtype = 0;
console.log("-----ここから高山方面の詳細表示-----");
console.log(number);
for (var tr = 0; tr < orderNum; tr++) {
    var HidaNumber = number[4][tr];
    if (HidaNumber == 9) {
        Dtype[4] = 1;
    } else {
        Dtype[4] = HidaDtype;
    }
    console.log("Dtype[" + "]=" + Dtype);
    FDetail(Type[4][tr], JRKaobj, Dtype[4], 4, tr, "・");
    LastLetterRemove(4, tr, '・');
    //console.log(HidaNumber);
    var H_kanayama = [1, 9, 15, 17, 19];
    if (HidaNumber == 7 || HidaNumber == 13) {
        DetailReplace(4, tr, '越中八尾', '越中八尾・速星');
    } else if (HidaNumber == 15) {
        DetailReplace(4, tr, '飛騨萩原・飛騨小坂・久々野', '飛騨萩原');
    }
    if (HidaNumber == 1 || HidaNumber == 9 || HidaNumber == 19) {
        DetailReplace(4, tr, '岐阜', '尾張一宮・岐阜');
    }
    if (HidaNumber == 9) {
        DetailReplace(4, tr, '美濃太田', '美濃太田・飛騨金山');
    }
    document.getElementById('TDetail5' + (tr + 1)).textContent = Detail[4][tr];
}
for (var tr = 0; tr < orderNum; tr++) {
    if (Type[1][tr].includes('快速')) {
        document.getElementById('TDetail' + 2 + (tr + 1)).textContent = '尾張一宮・岐阜・岐阜から各駅';
    } else if (Type[1][tr].includes('ﾎｰﾑﾗｲﾅｰ')) {
        document.getElementById('TDetail' + 2 + (tr + 1)).textContent = '尾張一宮・岐阜・穂積';
    }
    if (Type[2][tr] == '快速') {
        document.getElementById('TDetail' + 3 + (tr + 1)).textContent = '金山・鶴舞・千種・大曽根・勝川・春日井・高蔵寺・多治見・多治見から各駅';
    } else if (Type[2][tr] == '区間快速') {
        document.getElementById('TDetail' + 3 + (tr + 1)).textContent = '金山・鶴舞・千種・大曽根・新守山・勝川・春日井・神領・高蔵寺・多治見・多治見から各駅';
    }
    Detail[1][tr] = document.getElementById('TDetail' + 2 + (tr + 1)).textContent;
    Detail[2][tr] = document.getElementById('TDetail' + 3 + (tr + 1)).textContent;
}
SpecialStop(0, '(幸)', '岡崎', '幸田', '・', 0.8);
SpecialStop(0, '(三)', '蒲郡', '三河三谷', '・', 0.8);
SpecialStop(1, '(稲)', '名古屋', '稲沢', '・', 0.8);
SpecialStop(0, ' 三谷', '蒲郡', '三河三谷', '・', 0.8);
SpecialStop(0, ' 大塚', '蒲郡', '三河大塚', '・', 0.8);
SpecialStop(0, ' 幸', '岡崎', '幸田', '・', 0.8);
SpecialStop(1, ' 稲', '名古屋', '稲沢', '・', 0.8);
let Class_Bottm=document.getElementsByClassName('Ctitle');
var bottom_color=['orange','orange','blue','#00A497','brown']
for (let te = 0; te < Tablenum; te++) {
    document.getElementsByClassName('Ctitle')[te].style.borderBottomColor=bottom_color[te];
    for (let tr = 0; tr < orderNum; tr++) {
        if (Type[te][tr].includes('普通')) {
            document.getElementById('TDetail' + (te + 1) + (tr + 1)).textContent = '各駅にとまります';
        }
        //console.log(Type[te][tr]);
        if (Type[te][tr] === 'undefined') {
            console.log(":");
        } else if (Type[te][tr].length > 6 && Type[te][tr].length < 8) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
            //document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
            //document.getElementById('IType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
        } else if (Type[te][tr].length > 10) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.60)" + "translate(-15%,0%)";
            //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[te][tr].length > 8) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Type[te][tr].length > 7) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.75)" + "translate(-12%,0%)";
        }
        DetailBanner(te, tr, 23);
        if (Type[te][tr] == '') {
            document.getElementById('TNum' + (te + 1) + (tr + 1)).style.backgroundColor = 'black';
            document.getElementById('TDetailtitle' + (te + 1) + (tr + 1)).textContent = '';
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        LastShows(td, tr);
        TwoLetterDistance(td, tr, Type, TType, 1, 0.4);
        TwoLetterDistance(td, tr, Des, TDes, 1, 1);
    }
}
allTimeMarkErase();
holiday_F(station);

