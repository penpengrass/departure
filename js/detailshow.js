//console.log(express);
console.log(Dtype1 + "&" + Dtype2);
let u = 0;
let k = 0;
let result = 0;
console.log(result);
//詳細表示
function DetailDecide(LType, Des, Type) {//引数1つ目に路線の種別の配列，3つ目は空でいい
    //ここから書き換え
    k = 0;
    console.log(Des + "←行先" + LType[0]);
    result = LType[0].indexOf(Des);
    console.log("result:"+result);
    while (k < 2) {
        result = LType[k].indexOf(Des);
        console.log(k + ":" + result + ":" + Des);
        if (result == -1) {
            k++;
        } else {
            console.log(k + " break");
            break;
        }
    }
    //書き換え終わり
    let i = 0;
    let Dflag = 0;//行先が違う配列の場合に使いたい
    while (stationN != LType[i]) {
        i++;
        if (LType.length <= i) {//配列内に出発駅がない場合
            console.log("DetailDecide前半で例外" + stationN + Des);
            break;
        }
    }
    i++;
    while (LType[i - 1] != "以遠各駅" && LType[i] !== Des && Dflag < 2) {
        Type += LType[i] + "　";
        i++;
        if (LType.length <= i) {//配列内に終着駅がない場合(以遠を除く)
            if (Des == '塚口') {
                Type = "各駅にとまります";
            } else {
                Type = '';//ここに分岐している場合を記述
            }
            console.log("DetailDecide後半で例外:" + LType.length + ":" + Des);
            //Dflag++;
            break;
        }
    }
    //Dtype1-=Dflag;
    //console.log("local:"+Type);
    return Type;
}
//document.getElementById('TDetail').textContent = DetailDecide(Nexpress[1],express);
let AType = "";
//3つまとめて種別に案内を対応させる　変える余地ありそう(種別ごとに関数を作るとか)
function FDetail(Utype, TType, Des, Uobj, n) {
    if (Utype === Uobj.Typea.type) {
        if (staflag == 0) {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typea.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typea.detail[n];
        }
    } else if (Utype === Uobj.Typeb.type) {
        document.getElementById(TType).textContent = Uobj.Typeb.detail[n];
    } else if (Utype === Uobj.Typec.type) {
        if (staflag == 0) {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typec.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typec.detail[n];
        }
    } else if (Utype === Uobj.Typed.type) {
        if (station == '北新地駅') {
            document.getElementById(TType).textContent = DetailDecide(Uobj.Typed.detail[n], Des, AType);
        } else {
            document.getElementById(TType).textContent = Uobj.Typed.detail[n];
        }
    } else if (Utype === Uobj.Typee.type) {
        document.getElementById(TType).textContent = Uobj.Typee.detail[0];
    } else if (Utype === Uobj.Typef.type) {
        document.getElementById(TType).textContent = "各駅にとまります";
    }
}
console.log(station);
if (station == '北新地駅') {
    let Dtype=new Array(2);
    Dtype[0]=Dtype1;
    Dtype[1]=Dtype2;
    for (let ia = 0; ia < Tablenum; ia++) {
        FDetail(Type[ia][0], TDetail[ia][0], Des[ia][0], JRobj, Dtype[ia]);
        console.log("1");
        FDetail(Type[ia][1], TDetail[ia][1], Des[ia][1], JRobj, Dtype[ia]);
        console.log("2");
        FDetail(Type[ia][2], TDetail[ia][2], Des[ia][2], JRobj, Dtype[ia]);
        console.log("3");
        console.log("---" + ia + 1 + "個目の表の詳細表示終わり,ここから" + ia + 2 + "個目の表の詳細表示----");
        //stationN = stationN2;
    }

} else {
    console.log("---ここから1個目の表の詳細表示----");
    for (let ia = 0; ia < Tablenum; ia++) {
        FDetail(Type[ia][0], TDetail[ia][0], Des[ia][0], Kinobj, Dtype1);
        console.log("1");
        FDetail(Type[ia][1], TDetail[ia][1], Des[ia][1], Kinobj, Dtype1);
        console.log("2");
        FDetail(Type[ia][2], TDetail[ia][2], Des[ia][2], Kinobj, Dtype1);
        console.log("3");
        console.log("---" + ia + 1 + "個目の表の詳細表示終わり,ここから" + ia + 2 + "個目の表の詳細表示----");
        //stationN = stationN2;
    }


}
//先発がないとき次発以降を空白にしたい