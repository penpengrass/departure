//先発と次発と次々発の種別色分けを一気にする
function KTypeColor(Utype, TType, Uobj) {//(種別,その種別の背景色を変える)
    for (key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType).style.backgroundColor = Uobj[key].color;
            break;
        }
    }
}
function KJTypeColor(Utype, TType, Uobj) {//(種別,その種別の背景色を変える)
    for (key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType).style.color = Uobj[key].color;
            document.getElementById(TType).style.backgroundColor = Uobj[key].Bcolor;
            break;
        }
    }
}
function JTypeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える)
    //console.log(Uobj.Typea);
    for (key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType).style.color = Uobj[key].color;
            break;
        }
    }
}
//博多駅限定
function J_hakataTypeColor(Utype, TType, Uobj) {//(種別,その種別の文字色を変える)
    //console.log(Uobj.Typea);
    for (key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType).style.color = Uobj[key].Bcolor;
            break;
        }
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
            KTypeColor(Type[ia][ib], WType[ia][ib], Kinobj);
            //KTypeColor(Type[ia][ib], shubetu[ia][ib], Kinobj);
        }
    }
}
//JR西日本在来線
function allJRColor(start = 0) {
    for (let ia = start; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRobj);
        }
    }
}
//JR西日本新幹線主要駅(広島駅や敦賀駅など)
function allJRSSColor(object = JRSSobj, LLength = Tablenum) {
    for (let ia = 0; ia < LLength; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            KJTypeColor(Type[ia][ib], TType[ia][ib], object);
            KJTypeColor(Type[ia][ib], TName[ia][ib], object);
        }
    }
}
function allJROsakaColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            if (station == '大阪駅' && ia == 0) {
                KTypeColor(Type[ia][ib], TType[ia][ib], JRWALobj);
            } else {
                KTypeColor(Type[ia][ib], TType[ia][ib], JRWA_Bobj);
                JTypeColor(Type[ia][ib], TType[ia][ib], JRWA_obj);
            }
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
//JR名古屋駅限定
function allJRNagoyaColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            if (ia >= 2) {
                KJTypeColor(Type[ia][ib], TType[ia][ib], JRChNobj);
            } else {
                KJTypeColor(Type[ia][ib], TType[ia][ib], JRCeNobj);
            }
        }
    }
}
//JR東日本ATOSとJR東海在来線とJR北海道在来線(Include)
function allJRCIncludeColor() {
    var start = 0;
    if (station == '宇都宮駅') {
        start = 1;
    }
    for (let ia = start; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR四国
function allJRSIncludeColor(obj) {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], obj);
        }
    }
}
//天王寺駅
function allJRTennoujiColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            /*天王寺駅の特徴のためTTypeをWTypeに書き換える*/
            KJTypeColor(Type[ia][ib], WType[ia][ib], JRWTobj);
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
//console.log(station);
//console.log(CompanyNumber);
//console.log(Indexfile);
//index7.phpのみTforshow7.jsに移行
if (Indexfile == 'index8.php') {
    allJRCIncludeColor();
} else if (Indexfile == 'index7_T.php') {
    allJRNagoyaColor();
} else if (CompanyNumber == 5) {
    allTokyuColor();
} else if (Indexfile == 'index7_S1.php') {
    allJRCSColor();
} else if (Indexfile == 'index4_A.php') {
    allJROsakaColor();
}