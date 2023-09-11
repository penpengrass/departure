//先発と次発と次々発の種別色分けを一気にする,変える余地ありそう
function KTypeColor(Utype, TType, Uobj) {//(種別,その種別の背景色を変える)
    //console.log(Utype);
    if (Utype.includes(Uobj.Typea.type)) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typea.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype === Uobj.Typeb.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typeb.color;
        document.getElementById(TType).style.letterSpacing = 20;
    } else if (Utype === Uobj.Typec.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typec.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype === Uobj.Typed.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typed.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype === Uobj.Typee.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typee.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else {
        document.getElementById(TType).style.backgroundColor = Uobj.Typef.color;
        document.getElementById(TType).style.letterSpacing = 80;
    }
}
function JTypeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える)
    //console.log(Uobj.Typea);
    if (Utype.includes(Uobj.Typea.type)) {//
        document.getElementById(TType).style.color = Uobj.Typea.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype.includes(Uobj.Typeb.type)) {
        document.getElementById(TType).style.color = Uobj.Typeb.color;
        document.getElementById(TType).style.letterSpacing = 20;
    } else if (Utype === Uobj.Typec.type) {
        document.getElementById(TType).style.color = Uobj.Typec.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype === Uobj.Typed.type) {
        document.getElementById(TType).style.color = Uobj.Typed.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype === Uobj.Typee.type){
        document.getElementById(TType).style.color = Uobj.Typee.color;
        document.getElementById(TType).style.letterSpacing = 80;
    }
}
function JTypeIncludeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える,'含む')
    //console.log(Uobj.Typea);
    if (Utype.includes(Uobj.Typea.type)) {//
        document.getElementById(TType).style.color = Uobj.Typea.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype.includes(Uobj.Typeb.type)) {
        document.getElementById(TType).style.color = Uobj.Typeb.color;
        document.getElementById(TType).style.letterSpacing = 20;
    } else if (Utype.includes(Uobj.Typec.type)) {
        document.getElementById(TType).style.color = Uobj.Typec.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype.includes(Uobj.Typed.type)) {
        document.getElementById(TType).style.color = Uobj.Typed.color;
        document.getElementById(TType).style.letterSpacing = 80;
    } else if (Utype.includes(Uobj.Typeb.type)){
        document.getElementById(TType).style.color = Uobj.Typee.color;
        document.getElementById(TType).style.letterSpacing = 80;
    }
}

//表1と表2で種類が同じ前提
function allKinColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            KTypeColor(Type[ia][ib], TType[ia][ib], Kinobj);
            //KTypeColor(Type[ia][ib], shubetu[ia][ib], Kinobj);
        }
    }
}
function allJRColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRobj);
        }
    }
}
function allJRCColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
function allJRIncludeColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//天王寺駅
function allJRTennoujiColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            /*天王寺駅の特徴のためTTypeをWTypeに書き換える*/
            KTypeColor(Type[ia][ib], WType[ia][ib], JRWTobj);
        }
    }
}
function allTokyuColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], Tokyuobj);
            JTypeColor(Type[ia][ib], TDes[ia][ib], Tokyuobj);
            console.log(Des[ia][ib]);
            if (Type[ia][ib] == '準急') {
                document.getElementById('TType' + (ia + 1) + (ib + 1)).style.backgroundColor = 'yellowgreen';
            }

        }
    }
}
//駅によって会社を分類している
console.log(station);
console.log(CompanyNumber);
//console.log(Indexfile);

if (station == '天王寺駅') {
    allJRTennoujiColor();
}else if (Indexfile=='index4.php') {
    allJRColor();
}else if(Indexfile=='index7.php'){
    allJRIncludeColor();
} else if (CompanyNumber==5) {
    allTokyuColor();
} else {
    allKinColor();
}
