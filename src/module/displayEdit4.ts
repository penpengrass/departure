import { FDetail } from "./detailMainPut"
import { DetailReplace } from "./detailSimpleEdit";
import { LastLetterRemove } from "./detailMainPut";
import { JRSaninAddStop } from "../detailStopData/JRSanindetailset";
import { JRobj } from "../detailStopData/JRW_afterset";
import { JRCeNobj } from "../detailStopData/JRNadetailset";
import { JRSaninObj } from "../detailStopData/JRSanindetailset";
import { AllClassSetting } from "./firstDisplayEdit";
import { trainTables } from "../types/trainTable";
export function DesMiddle(td: number, tr: number, word: string) {
    var matches = new Array(orderNum);
    var Desword = new RegExp("(\\D+)" + word + "(\\D+)");
    //console.log(Desword);
    //console.log(Des[td][tr]);
    //(/(\D+)(\d+)両/);
    //matches[tr] = Des[td][tr].match(/(\D+)連絡(\D+)/);
    matches[tr] = trainTables[td].trains[tr].destination.match(Desword);
    //console.log(matches[tr]);
    var d_Tag = document.getElementById('TDes' + (td + 1) + (tr + 1));
    if (matches[tr] && d_Tag) {
        //console.log(td + ':' + tr + word + " " + Tag + ' はマッチする');
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);*/
        // DesRightのinlineスタイルを条件に応じて決定
        let desRightStyle = '';
        if (matches[tr][2].length > 3) {
            desRightStyle = ' style="display:inline-block;transform:scaleX(0.75) translate(-20%,0%)"';
        } else if (station == '糸崎駅' && matches[tr][2].length > 2) {
            desRightStyle = ' style="display:inline-block;transform:scaleX(0.65) translate(-25%,0%)"';
        }
        
        // DesLeftのinlineスタイルを条件に応じて決定
        let desLeftStyle = '';
        if (matches[tr][1].length > 2) {
            desLeftStyle = ' style="display:inline-block;transform:scaleX(0.75) translate(20%,0%)"';
        }
        
        var Des_HTML = '<span class="DesLeft" id="DesLeft' + (td + 1) + (tr + 1) + '"' + desLeftStyle + '>' + matches[tr][1]
            + '</span>' + '<span class="DesMiddle">' + word + '</span>' + '<span id="DesRight' + (td + 1) + (tr + 1) + '"' + desRightStyle + '>' + matches[tr][2] + '</span>';
        document.getElementById('TDes' + (td + 1) + (tr + 1))!.innerHTML = Des_HTML
        trainTables[td].trains[tr].destination = Des_HTML;
        //var DesLeft = document.getElementById('DesLeft' + (td + 1) + (tr + 1)) as HTMLElement | null;
        //var DesRight = document.getElementById('DesRight' + (td + 1) + (tr + 1));
        if (tr == 0) {
            trainTables[td].trains[0].des_banner = matches[0][2];
        }
    } else {
        //console.log(td + ':' + tr + word + 'はマッチしない');
    }
}
export function Maibara_Banner(td: number) {
    if (td == 1 && (Type[td - 1][0] == '新快速' || Type[td - 1][0] == '特急')) {
        FDetail(Type[td - 1][0], JRobj, Dtype[0], td - 1, 0, "・");
        Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
        console.log("-----1個目の詳細完了------");
    }
    if (td == 3) {
        //console.log(Type[td - 1][0]);
        if (Type[td - 1][0].includes('快速')) {
            stationN = '大垣';
            Des[2][0] = trainTables[2].trains[0].des_banner;
            FDetail(Type[td - 1][0], JRCeNobj, Dtype[0], td - 1, 0, "・");
            LastLetterRemove(td - 1, 0, '・');
            DetailReplace(2, 0, '岐阜', '岐阜までの各駅');
            Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
            stationN = '米原';
        }
    }
}
export function Kitashinchi_Banner(td: number) {
    if (td == 2 && Type[1][0] == '快速' && Des[1][0] != '塚口' && Des[1][0] != '尼崎') {
        FDetail(Type[td - 1][0], JRobj, Dtype[0], td - 1, 0, "・");
        if (Des[1][0].includes('新三田')) {
            DetailReplace(1, 0, '・三田から各駅', '');
        }
        Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
    }
}
export function Yonago_Banner(td: number) {
    if (td == 3 && Type[td - 1][0].startsWith('快速')) {
        return;
    }
    FDetail(Type[td - 1][0], JRSaninObj, Dtype[0], td - 1, 0, "・");
    //ここに追加停車駅を入れる必要がある。
    JRSaninAddStop(td - 1);
    LastLetterRemove(td - 1, 0, '・');
    if (Detail[td - 1][0].includes('各駅')) {
        if (Des[td - 1][0] == '新見') {
            trainTables[td - 1].trains[0].detail = '備中神代までの各駅';
        } else {
            trainTables[td - 1].trains[0].detail = Des[td - 1][0] + "までの各駅";
        }
    }
}
//特急の列車名の色を変える
export function JRWTrainNameColor(td: number, tr: number, NameColor: string, NumberColor: string, GouColor: string) {
    var newTrainName;
    //LimitedName[tr] = document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent;
    var LimitedName = document.getElementById('TName' + (td + 1) + '' + (tr + 1))!.textContent;
    if (LimitedName != '') {
        var matches = LimitedName.match(/(\D+)(\d+)(\D+)/);
        if (matches) {
            /*console.log(matches[0] + ":" + tr);
            console.log(matches[1] + ":" + tr);
            console.log(matches[2] + ":" + tr);
            console.log(matches[3] + ":" + tr);*/
            newTrainName = `<span class="NewTrainName">${matches[1]}</span>
        <span class="NewTrainNumber">${matches[2]}</span><span class="NewGou">${matches[3]}</span>`;
            document.getElementById('TName' + (td + 1) + '' + (tr + 1))!.innerHTML = newTrainName;
            AllClassSetting('.NewTrainName', 'color', NameColor)
            AllClassSetting('.NewTrainNumber', 'color', NumberColor)
            AllClassSetting('.NewGou', 'color', GouColor);
        }
    }
}
export function allJRWTrainNameColor(NameColor: string, NumberColor: string, GouColor: string, start = 0) {
    for (var td = start; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            JRWTrainNameColor(td, tr, NameColor, NumberColor, GouColor);
        }
    }

}