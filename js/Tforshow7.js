function allJRC_Reduction() {
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < orderNum; tr++) {
            //console.log(Type[te][tr]);
            TypeColorChange(te, tr, '快速', 'orange');
            TypeColorChange(te, tr, '特急', 'red');
            TypeColorChange(te, tr, 'ホームライナー', 'red');
            TypeColorChange(te, tr, '快特', 'red');
            if (Type[te][tr] === 'undefined') {
                console.log(":");
            } else if (Type[te][tr].length > 12) {
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            } else if (Type[te][tr].length > 10) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
                //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (Type[te][tr].length > 8) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            } else if (Type[te][tr].length > 7) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
            }
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        TwoLetterDistance(td, tr, Type, TType, 1, 1);
        TwoLetterDistance(td, tr, Des, TDes, 1, 1);
    }
}
if (station == '大垣駅') {
    if (Type[0][0].includes('特急')) {
        FDetail(Type[0][0], JRCeNobj, Dtype[0], 0, 0, "・");
        console.log(number[0]);
        if (Nagahama.includes(number[0])) {
            console.log(number[0]);
            Detail[0][0]+='長浜';
            //DetailReplace(0,'', '米原', '米原・長浜', 3);
        }
    } else if (Type[0][0] != '') {
        if (Des[0][0] == '米原') {
            SpendingTime(0, '', Des[0][0], 'およそ35', 'orange');
        } else if (Des[0][0] == '関ケ原') {
            SpendingTime(0, '', Des[0][0], 'およそ13', 'orange');
        } else if (Des[0][0] == '美濃赤坂') {
            SpendingTime(0, '', Des[0][0], 'およそ7', 'orange');
        }
        //Detail[0][0] = Des[0][0] + 'までの各駅';
    }
    console.log(Type[1][0]);
    FDetail(Type[1][0], JRCeNobj, Dtype[1], 1, 0, "・");
    if (Type[1][0].includes('快速')) {
        Detail[1][0] = '穂積・西岐阜・' + Detail[1][0];
    }
    SpecialStop(1, '(幸)', '岡崎', '幸田', '・', 0.8);
    SpecialStop(1, '(三)', '蒲郡', '三河三谷', '・', 0.8);
}
if (station == '岐阜駅') {
    if (Type[0][0].includes('特急')) {
        FDetail(Type[0][0], JRCeNobj, Dtype[0], 0, 0, "・");
        if (Nagahama.includes(number[0])) {
            console.log(number[0]);
            Detail[0][0]+='長浜';
            //DetailReplace(0,'', '米原', '米原・長浜', 3);
        }
    } else if (Type[0][0] != '') {
        Detail[0][0] = Des[0][0] + 'までの各駅';
    }
    var HidaNumber = JRLimitedNumber(1, 0);
    //console.log(HidaNumber);
    if (Type[1][0].includes('特急')) {
        FDetail(Type[1][0], JRKaobj, Dtype[1], 1, 0, "・");
        console.log(Detail[1][0]);
    } else if (Type[1][0] != '') {
        Detail[1][0] = Des[1][0] + 'までの各駅';
    }
    console.log(Detail[1][0]);
    if (HidaNumber == 7 || HidaNumber == 13) {
        DetailReplace(1, 0, '越中八尾', '越中八尾・速星', 1);
    } else if (HidaNumber == 15) {
        DetailReplace(1, 0, '飛騨萩原・飛騨小坂・久々野', '飛騨萩原', 1);
    }
    FDetail(Type[2][0], JRCeNobj, Dtype[2], 2, 0, "・");
    SpecialStop(2, '(幸)', '岡崎', '幸田', '・', 0.8);
    SpecialStop(2, '(三)', '蒲郡', '三河三谷', '・', 0.8);
}
allJRC_Reduction();
if (station == '豊橋駅') {
    document.getElementById('Detail_Banner1').remove();
    document.getElementById('Detail_Banner2').remove();
    AllWordChange(1, 0, 'TDes', '名鉄名古屋', '名古屋', 1, Des);
    FDetail(Type[1][0], Meiobj, Dtype[1], 1, 0, "・");
    Detail[1][0] = Detail[1][0].replace('須ケ口・', '');
    AllWordChange(1, 0, 'TDes', '名古屋', '名鉄名古屋', 1, Des);
    LastLetterRemove(1, 0, '・');
    if (Type[1][0] == '急行(東岡崎から準急)') {
        DetailReplace(1, 0, '東岡崎', '東岡崎・矢作橋', 1);
        DetailReplace(1, 0, '前後', '豊明・前後・有松・中京競馬場前', 1);
    }
    if (Type[1][0] != '') {
        BottomBanner("TRow", 2, 3, 5, '停車駅は<span class="orange">' + Detail[1][0] + '</span>です');
    }
    if (Type[2][0] != '') {
        SpendingTime(2, '', '浜松', 'およそ35', 'orange');
        //document.getElementById('TDetail3').innerHTML = '浜松までの所要時間は<span class="orange">およそ35分</span>です';
    }
    Detail[3][0] = FDetail(Type[3][0], JRCeNobj, Dtype[3], 3, 0, "・");
    LastLetterRemove(3, 0, '・');
    if (Detail[3][0] == '各駅にとまります') {
        Detail[3][0] = Des[3][0] + 'までの各駅';
    }
    if (Type[3][0] != '') {
        document.getElementById('TDetail' + (3 + 1)).innerHTML =
            '<span id="Detail_Type' + (3 + 1) + '">' + Type[3][0] + '</span> ' + Des[3][0] + '行きの停車駅は' +
            '<span class="orange">' + Detail[3][0] + '</span>です';
    }
    TypeColorChange2(3, 'Detail_Type', '特急', 'red');
    TypeColorChange2(3, 'Detail_Type', '快速', 'orange');
}
//index7.phpではDetail[]に入れた後フォーマットに停車駅を入れる。
if (TokaiDetailflag == 1) {
    for (var td = 0; td < Tablenum; td++) {
        var Type_Show;
        LastLetterRemove(td, 0, '・');
        if (Type[td][0].includes('当駅始発')) {
            Type_Show = Type[td][0].replace('(当駅始発)', '');
        } else {
            Type_Show = Type[td][0];
        }
        if (Detail[td][0] == '各駅にとまります') {
            Detail[td][0] = Des[td][0] + 'までの各駅';
        }
        if (Type[td][0] != '' && Detail[td][0] != '') {
            document.getElementById('TDetail' + (td + 1)).innerHTML =
                '<span id="Detail_Type' + (td + 1) + '">' + Type_Show + '</span> ' + Des[td][0] + '行きの停車駅は' +
                '<span class="orange">' + Detail[td][0] + '</span>です';
            TypeColorChange2(td, 'Detail_Type', '特急', 'red');
            TypeColorChange2(td, 'Detail_Type', 'ホームライナー', 'red');
            TypeColorChange2(td, 'Detail_Type', '快速', 'orange');
        }
    }
} else if (TokaiDetailflag == 0) {
    for (var td = 0; td < Tablenum; td++) {
        document.getElementById('Detail_Banner' + (td + 1)).remove();
    }
}
