//console.log(express);
//console.log(Dtype[0] + "&" + Dtype[1]);
//let u = 0;
//let k = 0;
console.log("-------ここから詳細表示-------");
console.log(stationN);
var td_detail = 0;
var DtypePlusCount = 0;
//詳細表示
//出発駅または行先駅が配列内に含まれているかどうかを判定する(無ければ-1)
function StationInLine(station, TypeLine, startDtypenumber) {
    for (var p = startDtypenumber; p < TypeLine.length; p++) {
        console.log("startDtypenumber=" + startDtypenumber);
        //console.log(TypeLine);
        for (var q = 0; q < TypeLine[p].length; q++) {
            //console.log(TypeLine[p][q] + "が" + station + "と同じかどうか");
            if (TypeLine[p][q] == station) {
                //console.log(p);
                return p;
            }
        }
    }
    console.log(-1);
    return -1;
}
function DetailDecide(LType, Des, Sentence, distance) {//引数1つ目に路線の種別の配列，3つ目は空でいい
    //前にDtypeが別の配列に移行していた場合戻す
    console.log("Dtype[td_detail]=" + Dtype[td_detail]);
    Dtype[td_detail] = Dtype[td_detail] - DtypePlusCount;
    DtypePlusCount = 0;
    //書き換え終わり
    //配列内の駅探索
    let DLine_in = 0;
    let Dflag = 0;//行先が違う配列の場合に使いたい
    //console.log("種別の配列は" + LType);
    //console.log(StationInLine('奈良', LType, Dtype[td_detail]));
    while (Sentence == '' && Dtype[td_detail] < 10 && Dflag < 200) {
        DLine_in = 0;
        console.log("td_detail=" + td_detail);
        if (StationInLine(stationN, LType, Dtype[td_detail]) == -1) {
            console.log("DetailDecideで出発駅がない(外側)" + stationN + Des);
            if (Dtype[td_detail] > LType.length) {
                console.log("詳細表示は書けない");
                break;
            } else {
                console.log("出発駅がないのでDtypeをプラスする");
                Dtype[td_detail]++;
                DtypePlusCount++;
                continue;
            }
        } else {
            console.log("関数の結果出発駅が何番目の配列か=" + StationInLine(stationN, LType, Dtype[td_detail]));
        }
        //出発駅が配列部分に出てくるまでwhileを繰り返す
        while (stationN != LType[Dtype[td_detail]][DLine_in] && DLine_in < 50) {
            //console.log("出発駅を検索:"+LType[Dtype[td_detail]][DLine_in] + ":" + DLine_in);
            DLine_in++;
            if (LType[Dtype[td_detail]].length <= DLine_in) {//配列内に出発駅がない場合
                console.log("DetailDecideで出発駅がない(内側)" + stationN);
                break;
            }
        }
        console.log("出発駅仮確定 出発駅=" + LType[Dtype[td_detail]][DLine_in] + ":DLine_in=" + DLine_in);
        DLine_in++;
        while (LType[Dtype[td_detail]][DLine_in - 1] != "以遠各駅" && LType[Dtype[td_detail]][DLine_in] !== Des && Dflag < 200) {
            Sentence += LType[Dtype[td_detail]][DLine_in] + distance;
            DLine_in++;
            /*console.log(Des+"が"+LType+"の中に含まれているか "+Dtype[td_detail]);
            if(StationInLine(Des,LType,Dtype[td_detail])==-1){
                console.log("DetailDecide後半で例外a:" + LType.length + ":" + Des);
            }else{
                console.log("DetailDecide後半で例外なし:" + LType.length + ":" + Des);
            }*/
            if (LType[Dtype[td_detail]].length <= DLine_in) {//配列内に終着駅がない場合(以遠を除く)      
                Sentence = '';//ここに分岐している場合を記述
                console.log("DetailDecideで終着駅がないのでDtypeプラス:" + LType[Dtype[td_detail]].length + ":" + Des);
                Dtype[td_detail]++;
                DtypePlusCount++;
                Dflag++;
                break;
            }
        }
        //console.log(Sentence);
    }
    //Dtype1-=Dflag;
    //console.log("local:"+Type);
    return Sentence;
}
//document.getElementById('TDetail').textContent = DetailDecide(Nexpress[1],express);
let AType = "";
var DetailLine = '';
//3つまとめて種別に案内を対応させる　変える余地ありそう(種別ごとに関数を作るとか)
function FDetail(Utype, Uobj, n, td, tr, distance, BeforeDetailShowing, AfterDetailShowing) {
    //console.log(Utype + ':' + td + ':' + tr);
    //console.log(Uobj.Typeb.detail);
    if (Utype == '') {
        DetailLine = '';
    } else if (Utype.includes(Uobj.Typea.type)) {
        if (staflag == 0) {
            DetailLine = DetailDecide(Uobj.Typea.detail, Des[td][tr], AType, distance);//特急
        } else {
            console.log('staflagが0でない');
            DetailLine = Uobj.Typea.detail[n];
        }
    } else if (Utype.startsWith(Uobj.Typeb.type)) {
        DetailLine = DetailDecide(Uobj.Typeb.detail, Des[td][tr], AType, distance);;//快急
    } else if (Utype.startsWith(Uobj.Typec.type)) {
        //console.log(Uobj.Typec);
        if (staflag == 0) {
            DetailLine = DetailDecide(Uobj.Typec.detail, Des[td][tr], AType, distance);
            //console.log(DetailLine);
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
    } else if (Utype.startsWith(Uobj.Typef.type)) {
        if (Indexfile == 'index7_T.php' || Indexfile == 'index2.php') {
            DetailLine = DetailDecide(Uobj.Typef.detail, Des[td][tr], AType, distance);
        } else {
            DetailLine = "各駅にとまります";
        }
    } else if (Utype.startsWith(Uobj.Typelocal.type)) {
        DetailLine = "各駅にとまります";
    } else {
        DetailLine = "";
    }
    //console.log(DetailLine + 'td=' + td + 'tr=' + tr);
    //console.log(Detail);
    //Detail[td][tr] = DetailLine;
    //document.getElementById(TType).textContent = Detail[td][tr];
    //document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = DetailLine;
    //console.log(DetailLine);
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
    console.log('----' + (td + 1) + '番目の表の' + (tr + 1) + '番目に発車するFDetail関数終了----');
    console.log("Dtypeがプラスされた回数" + DtypePlusCount);
    Dtype[td_detail] = Dtype[td_detail] - DtypePlusCount;
    DtypePlusCount = 0;
    console.log(Dtype[td_detail]);
}
function DetailShow(companyObject, distance) {
    console.log("---ここから1個目の表の詳細表示----");
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < DetailLength[td]; tr++) {
            //console.log("Dtype[" + td + "]=" + Dtype[td]);
            FDetail(Type[td][tr], companyObject, Dtype[td], td, tr, distance);
            console.log("-------" + (td + 1) + "個目の表の" + (tr + 1) + "番目の詳細表示完了-------");
        }
        console.log("---" + (td + 1) + "個目の表の詳細表示終わり,ここから" + (td + 2) + "個目の表の詳細表示----");
        td_detail++;
        //stationN = stationN2;
    }
}
console.log(Dtype[0]);