//先発と次発と次々発の種別色分けを一気にする,変える余地ありそう
function KTypeColor(Utype, TType, Uobj) {//(種別,その種別の背景色を変える)
    //console.log(Utype);
    //console.log(document.getElementById(TType));
    if (Utype.includes(Uobj.Typea.type)) {
        
        document.getElementById(TType).style.backgroundColor = Uobj.Typea.color;
    } else if (Utype === Uobj.Typeb.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typeb.color;
    } else if (Utype === Uobj.Typec.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typec.color;
    } else if (Utype === Uobj.Typed.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typed.color;
    } else if (Utype === Uobj.Typee.type) {
        document.getElementById(TType).style.backgroundColor = Uobj.Typee.color;
    } else {
        document.getElementById(TType).style.backgroundColor = Uobj.Typef.color;
    }
}
function JTypeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える)
    //console.log(Uobj.Typea);
    if (Utype.includes(Uobj.Typea.type)) {//
        document.getElementById(TType).style.color = Uobj.Typea.color;
    } else if (Utype.includes(Uobj.Typeb.type)) {
        document.getElementById(TType).style.color = Uobj.Typeb.color;
    } else if (Utype === Uobj.Typec.type) {
        document.getElementById(TType).style.color = Uobj.Typec.color;
    } else if (Utype === Uobj.Typed.type) {
        document.getElementById(TType).style.color = Uobj.Typed.color;
    } else if (Utype === Uobj.Typee.type) {
        document.getElementById(TType).style.color = Uobj.Typee.color;
    }
}
function JTypeIncludeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える,'含む')
    for (key in Uobj) {
        if (Utype.includes(Uobj[key].type)) {
            document.getElementById(TType).style.color = Uobj[key].color;
            break;
        }
    }
}

//表1と表2で種類が同じ前提
//近鉄
function allKinColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            KTypeColor(Type[ia][ib], TType[ia][ib], Kinobj);
            //KTypeColor(Type[ia][ib], shubetu[ia][ib], Kinobj);
        }
    }
}
//JR西日本在来線
function allJRColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRobj);
        }
    }
}
//JR西日本新幹線主要駅(広島駅など)
function allJRSSColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            KTypeColor(Type[ia][ib], TType[ia][ib], JRSBobj);
            KTypeColor(Type[ia][ib], TName[ia][ib], JRSBobj);
            JTypeColor(Type[ia][ib], TType[ia][ib], JRSSobj);
            JTypeColor(Type[ia][ib], TName[ia][ib], JRSSobj);
        }
    }
}
//JR東海新幹線(JR西日本新幹線主要駅と共通仕様部分あり)
function allJRCSColor() {
    for (let ia = 0; ia < 2; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRSBobj);
            JTypeColor(Type[ia][ib], TName[ia][ib], JRSBobj);
        }
    }
    for (let ia = 2; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR西日本新幹線在来線共通(姫路駅，徳山駅など)
function allJRWSZColor() {
    for (let ia = 0; ia < 2; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRWSobj);
        }
    }
    for (let ia = 2; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRobj);
        }
    }

}
//JR西日本新幹線(在来線なし，使用しない,将来の新岩国駅など)
function allJRWSColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRWSobj);
        }
    }
}
//JR東日本ATOSとJR東海在来線とJR北海道在来線
function allJRCColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR東日本ATOSとJR東海在来線とJR北海道在来線(Include)
function allJRCIncludeColor() {
    var start=0;
    if(station=='宇都宮駅'){
        start=1;
    }
    for (let ia = start; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR四国
function allJRSIncludeColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRSobj);
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
//東急線
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

if (station == '天王寺駅'||Indexfile=='index4_T.php') {
    allJRTennoujiColor();
} else if (Indexfile == 'index4.php' && JRShinkansenflag == 0) {
    allJRColor();
} else if (Indexfile == 'index7.php' || Indexfile == 'index3.php' || Indexfile == 'index8.php') {
    allJRCIncludeColor();
} else if (CompanyNumber == 5) {
    allTokyuColor();
} else if (company == '近鉄') {
    allKinColor();
} else if (Indexfile == 'index9.php') {
    allJRSIncludeColor();
} else if (Indexfile == 'index4_S2.php') {
    allJRSSColor();
} else if (Indexfile == 'index7_S1.php') {
    allJRCSColor();
} else if (JRShinkansenflag == 1) {
    allJRWSZColor();
}