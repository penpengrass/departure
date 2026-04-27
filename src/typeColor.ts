import { JRobj } from "./detailStopData/JRW_afterset";
import { Kinobj } from "./detailStopData/Kindetailset";
import { JRSSobj } from "./detailStopData/JRW_S";
import { JRSBobj } from "./detailStopData/JREShindetailset";
import { JRWALobj, JRWA_Bobj, JRWA_obj, JRWSobj } from "./stationset4";
import { JRCobj } from "./detailStopData/JRdetail";
import { JRChNobj, JRCeNobj } from "./detailStopData/JRNadetailset";
import { Tokyuobj } from "./stationset5";
import { JRWTobj } from "./detailStopData/JRTennojidetail";
import { JRCSobj } from "./stationset7_S";
import { TType, TDes, WType } from "./types/constants";
import { trainTables } from "./types/trainTable";
//先発と次発と次々発の種別色分けを一気にする
export function KTypeColor(Utype: any, TType: any, Uobj: any) {//(種別,その種別の背景色を変える)
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType)!.style.backgroundColor = Uobj[key].color;
            break;
        }
    }
    /*for (const key in Uobj) {
        if (!Object.prototype.hasOwnProperty.call(Uobj, key)) continue;
        const info = Uobj[key];
        if (!info) continue;
        if (typeof info.type === 'string' && Utype.startsWith(info.type)) {
            const el = document.getElementById(TType);
            if (el) el.style.backgroundColor = info.color;
            break;
        }
    }*/
}
export function KJTypeColor(Utype: any, TType: any, Uobj: any) {//(種別,その種別の背景色を変える)
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType)!.style.color = Uobj[key].color;
            document.getElementById(TType)!.style.backgroundColor = Uobj[key].Bcolor;
            break;
        }
    }
}
export function JTypeColor(Utype: any, TType: any, Uobj: any) {//(種別,その種別の文字色を変える)
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType)!.style.color = Uobj[key].color;
            break;
        }
    }
}
//博多駅限定
export function J_hakataTypeColor(Utype: any, TType: any, Uobj: any) {//(種別,その種別の文字色を変える)
    //console.log(Uobj.Typea);
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            document.getElementById(TType)!.style.color = Uobj[key].Bcolor;
            break;
        }
    }
}
export function JTypeIncludeColor(Utype: any, TType: any, Uobj: any) {//(種別,その種別の文字色を変える,'含む')
    for (const key in Uobj) {
        if (Utype.includes(Uobj[key].type)) {
            document.getElementById(TType)!.style.color = Uobj[key].color;
            break;
        }
    }
}

//表1と表2で種類が同じ前提
//近鉄
export function allKinColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            const _Type= trainTables[ia].trains[ib].type;
            KTypeColor(_Type, WType[ia][ib], Kinobj);
            //KTypeColor(Type[ia][ib], shubetu[ia][ib], Kinobj);
        }
    }
}
//JR西日本在来線
export function allJRColor(start = 0) {
    for (let ia = start; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            var _Type = trainTables[ia].trains[ib].type;
            JTypeColor(_Type, TType[ia][ib], JRobj);
        }
    }
}
//JR西日本新幹線主要駅(広島駅や敦賀駅など)
export function allJRSSColor(object = JRSSobj, LLength = Tablenum) {
    for (let ia = 0; ia < LLength; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            KJTypeColor(Type[ia][ib], TType[ia][ib], object);
            KJTypeColor(Type[ia][ib], TName[ia][ib], object);
        }
    }
}
export function allJROsakaColor() {
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
export function allJRCSColor() {
    for (let ia = 0; ia < 2; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRCSobj);
            JTypeColor(Type[ia][ib], TName[ia][ib], JRCSobj);
        }
    }
    for (let ia = 2; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR西日本新幹線在来線共通(姫路駅，徳山駅など)
export function allJRWSZColor() {
    for (let ia = 0; ia < 2; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRWSobj);
        }
    }
    for (let ia = 2; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            var _Type = trainTables[ia].trains[ib].type;
            JTypeColor(_Type, TType[ia][ib], JRobj);
        }
    }

}
//JR西日本新幹線(在来線なし，使用しない,将来の新岩国駅など)
export function allJRWSColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], JRWSobj);
        }
    }
}
//JR東日本ATOSとJR東海在来線とJR北海道在来線
export function allJRCColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], JRCobj);
        }
    }
}
//JR名古屋駅限定
export function allJRNagoyaColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            var _Type = trainTables[ia].trains[ib].type;
            if (ia >= 2) {
                KJTypeColor(_Type, TType[ia][ib], JRChNobj);
            } else {
                KJTypeColor(_Type, TType[ia][ib], JRCeNobj);
            }
        }
    }
}
//JR東日本ATOSとJR東海在来線とJR北海道在来線(Include)
export function allJRCIncludeColor() {
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
export function allJRSIncludeColor(obj: any) {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeIncludeColor(Type[ia][ib], TType[ia][ib], obj);
        }
    }
}
//天王寺駅
export function allJRTennoujiColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            /*天王寺駅の特徴のためTTypeをWTypeに書き換える*/
            KJTypeColor(Type[ia][ib], WType[ia][ib], JRWTobj);
        }
    }
}
//東急線
export function allTokyuColor() {
    for (let ia = 0; ia < Tablenum; ia++) {
        for (let ib = 0; ib < Tablenums[ia]; ib++) {
            JTypeColor(Type[ia][ib], TType[ia][ib], Tokyuobj);
            JTypeColor(Type[ia][ib], TDes[ia][ib], Tokyuobj);
            if (Type[ia][ib] == '準急') {
                document.getElementById('TType' + (ia + 1) + (ib + 1))!.style.backgroundColor = 'yellowgreen';
            }

        }
    }
}
//駅によって会社を分類している
//console.log(station);
//console.log(CompanyNumber);
//console.log(Indexfile);
//index7.phpのみTforshow7.jsに移行