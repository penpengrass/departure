//console.log(express);
//console.log(Dtype[0] + "&" + Dtype[1]);
let u = 0;
let k = 0;
console.log("-------ここから詳細表示-------");
console.log(stationN);
var Dtypevalue = 0;
var DtypePlusCount = 0;
//詳細表示
//出発駅または行先駅が配列内に含まれているかどうかを判定する(無ければ-1)
function StationInLine(station, Line, startDtypenumber) {
    for (var p = startDtypenumber; p < Line.length; p++) {
        console.log("startDtypenumber=" + startDtypenumber);
        console.log(p + ":" + Line);
        for (var q = 0; q < Line[p].length; q++) {
            console.log(Line[p][q]);
            if (Line[p][q] == station) {
                return p;
            }
        }
    }
    console.log(-1);
    return -1;
}
function DetailDecide(LType, Des, Type, distance) {//引数1つ目に路線の種別の配列，3つ目は空でいい
    //前にDtypeが別の配列に移行していた場合戻す
    Dtype[Dtypevalue] = Dtype[Dtypevalue] - DtypePlusCount;
    DtypePlusCount = 0;
    //書き換え終わり
    let i = 0;
    let Dflag = 0;//行先が違う配列の場合に使いたい
    console.log(LType);
    //console.log(StationInLine('奈良', LType, Dtype[Dtypevalue]));
    while (Type == '' && Dtype[Dtypevalue] < 10 && Dflag < 200) {
        i = 0;
        console.log(LType);
        if (StationInLine(stationN, LType, Dtype[Dtypevalue]) == -1) {
            console.log("DetailDecide前半で例外a" + stationN + Des);
            if (Dtype[Dtypevalue] > LType.length) {
                console.log("詳細表示は書けない");
                break;
            } else {
                Dtype[Dtypevalue]++;
                DtypePlusCount++;
                continue;
            }
        } else {
            //console.log("関数の結果=" + StationInLine(stationN, LType, Dtype[Dtypevalue]));
        }
        //出発駅が配列部分に出てくるまでwhileを繰り返す
        while (stationN != LType[Dtype[Dtypevalue]][i] && i < 50) {
            console.log(LType[Dtype[Dtypevalue]][i] + ":" + i);
            i++;
            if (LType[Dtype[Dtypevalue]].length <= i) {//配列内に出発駅がない場合
                console.log("DetailDecide前半で例外b" + stationN);
                break;
            }
        }
        //console.log("出発駅仮確定 出発駅=" + LType[Dtype[Dtypevalue]][i] + ":" + i);
        i++;
        while (LType[Dtype[Dtypevalue]][i - 1] != "以遠各駅" && LType[Dtype[Dtypevalue]][i] !== Des && Dflag < 200) {
            Type += LType[Dtype[Dtypevalue]][i] + distance;
            i++;
            /*console.log(Des+"が"+LType+"の中に含まれているか "+Dtype[Dtypevalue]);
            if(StationInLine(Des,LType,Dtype[Dtypevalue])==-1){
                console.log("DetailDecide後半で例外a:" + LType.length + ":" + Des);
            }else{
                console.log("DetailDecide後半で例外なし:" + LType.length + ":" + Des);
            }*/
            if (LType[Dtype[Dtypevalue]].length <= i) {//配列内に終着駅がない場合(以遠を除く)      
                Type = '';//ここに分岐している場合を記述
                console.log("DetailDecide後半で例外b:" + LType[Dtype[Dtypevalue]].length + ":" + Des);
                Dtype[Dtypevalue]++;
                DtypePlusCount++;
                Dflag++;
                break;
            }
        }
        console.log(Type);
    }
    //Dtype1-=Dflag;
    //console.log("local:"+Type);
    return Type;
}
//document.getElementById('TDetail').textContent = DetailDecide(Nexpress[1],express);
let AType = "";
var DetailLine = '';
//3つまとめて種別に案内を対応させる　変える余地ありそう(種別ごとに関数を作るとか)
function FDetail(Utype, Uobj, n, td, tr, distance) {
    console.log(Utype);
    if (Utype.includes(Uobj.Typea.type)) {
        if (staflag == 0) {
            DetailLine = DetailDecide(Uobj.Typea.detail, Des[td][tr], AType, distance);//特急
        } else {
            console.log('staflagが0でない');
            DetailLine = Uobj.Typea.detail[n];
        }
    } else if (Utype.startsWith(Uobj.Typeb.type)) {
        DetailLine = DetailDecide(Uobj.Typeb.detail, Des[td][tr], AType, distance);;//快急
    } else if (Utype.startsWith(Uobj.Typec.type)) {
        console.log(Uobj.Typec);
        if (staflag == 0) {
            DetailLine = DetailDecide(Uobj.Typec.detail, Des[td][tr], AType, distance);
            console.log(DetailLine);
        } else {
            console.log('staflagが0でない');
            DetailLine = Uobj.Typec.detail[n];
        }
    } else if (Utype.startsWith(Uobj.Typed.type)) {
        if (Indexfile == 'index2.php') {
            DetailLine = Uobj.Typed.detail[n];
        } else {
            console.log(Uobj.Typed);
            DetailLine = DetailDecide(Uobj.Typed.detail, Des[td][tr], AType, distance);
        }
    } else if (Utype.startsWith(Uobj.Typee.type)) {
        if (Indexfile == 'index2.php') {
            DetailLine = Uobj.Typee.detail[n];
        } else {
            console.log(Uobj.Typee);
            DetailLine = DetailDecide(Uobj.Typee.detail, Des[td][tr], AType, distance);
        }
    } else if (Utype === Uobj.Typef.type) {
        if (Indexfile == 'index7_T.php') {
            DetailLine = DetailDecide(Uobj.Typef.detail, Des[td][tr], AType, distance);
        } else {
            DetailLine = "各駅にとまります";
        }
    } else {
        DetailLine = "";
    }
    console.log(DetailLine + 'td=' + td + 'tr=' + tr);
    console.log(Detail);
    //Detail[td][tr] = DetailLine;
    //document.getElementById(TType).textContent = Detail[td][tr];
    //document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = DetailLine;
    console.log(DetailLine);
    console.log(Detail[td][tr]);
    Detail[td][tr] = DetailLine;
    if (detailflag == 8) {
        console.log(Detail[td][tr]);
        //document.getElementById('TDetail' + (td + 1)).textContent = Detail[td][tr];
    } else {
        document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = Detail[td][tr];
        if (Indexfile == 'index3_S.php') {
            document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent += Des[td][tr];
        }
    }

    //console.log(Detail[td][tr]);
    //console.log(document.getElementById(TType));
    console.log('----FDetail関数終了----');
}
function DetailShow(companyObject, distance) {
    console.log("---ここから1個目の表の詳細表示----");
    console.log(Tablenum + ':' + DetailLength[td]);
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < DetailLength[td]; tr++) {
            FDetail(Type[td][tr], companyObject, Dtype[td], td, tr, distance);
            console.log("-------" + (tr + 1) + "番目の詳細表示完了-------");
            Dtype[Dtypevalue] = Dtype[Dtypevalue] - DtypePlusCount;
            DtypePlusCount = 0;
            console.log(Dtype[Dtypevalue]);
        }
        console.log("---" + (td + 1) + "個目の表の詳細表示終わり,ここから" + (td + 2) + "個目の表の詳細表示----");
        Dtypevalue++;
        //stationN = stationN2;
    }
}
//今後ファイルを分ける
console.log(Dtype[0]);
if (Indexfile == 'index2.php') {
    DetailShow(Kinobj, "　");
} else if (station == '新函館北斗駅') {
    console.log(Dtype[0]);
    FDetail(Type[0][0], JRHobj, Dtype[0], 0, 0, "・");
    document.getElementById('TDetail11').textContent = Detail[0][0];
    document.getElementById('TDetail11').textContent += Des[0][0];
} else if (station == '札幌駅') {
    FDetail(Type[1][0], JRHobj, Dtype[0], 1, 0, "・");
    FDetail(Type[0][0], JRHobj, Dtype[0], 0, 0, "・");
    //FDetail(Type[3][0], JRHobj, Dtype[1], 3, 0, "・");
    console.log(Detail[0][0]);
    //末尾の・を取り除く
    for (var td = 0; td < 2; td++) {
        if (Detail[td][0].slice(-1) == '・') {
            Detail[td][0] = Detail[td][0].slice(0, -1);
        }
    }
} else if (Indexfile == 'index9.php') {
    DetailShow(JRSobj, "、");
    console.log(Detail);
    for (var tr = 0; tr < Detail.length; tr++) {
        console.log(Detail[tr][0].slice(-1));
        if (Detail[tr][0].slice(-1) == '、') {
            console.log(tr + 'は読点で終わる');
            Detail[tr][0] = Detail[tr][0].slice(0, -1);
            Detail[tr][0] += 'に停車します';
            document.getElementById('TDetail' + (tr + 1) + '' + 1).textContent = Detail[tr][0];
        }
    }
} else if (Indexfile == 'index3_S.php') {
    console.log(JRSBobj);
    DetailShow(JRSBobj, "・");
} else if (Indexfile == 'index7_T.php') {
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
}
//先発がないとき次発以降を空白にしたい