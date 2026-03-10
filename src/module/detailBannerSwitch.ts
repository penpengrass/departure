import { DesMiddle, JRWTrainNameColor } from "./displayEdit4";
import { TimeMarkErase, TwoLetterDistance,LiName } from "./firstDisplayEdit";
import { JTypeColor } from "../typeColor";
import { JRobj } from "../detailStopData/JRW_afterset";
import { Ex_Name } from "../Tforshow4";
import { Detail_contents } from "../detailStopData/JRW_afterset";
export var switch_detail_flag = 0;
//表の1番下に文章を入れる index3,4,7で使用
export function BottomBanner(tag: string, td: number, tr: number, colspan: any, contents: any) {
    let element = document.getElementById(tag + td + tr);
    //console.log(element);
    if (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.innerHTML = '<td id="TBanner' + td + '' + tr + '" colspan="' + colspan + '"><p2 id="TDetail' + td + '' + tr + '" class="news-banner__content">ここに詳細表示</p3></td>';
        document.getElementById('TBanner' + td + '' + tr)!.style.overflow = 'hidden';
        document.getElementById('TDetail' + td + '' + tr)!.innerHTML = contents;
        if (Indexfile == 'index4.php') {
            Tablenums[td]--;
        }
    }
}
//JR西日本のみで使用
export function BottomBanner_Reverse(tag: string, td: number, tr: number) {
    let element = document.getElementById(tag + td + tr);
    var doBNumber = document.getElementById('TNum' + (td + 1) + '' + (tr + 1));
    //console.log(element);
    //console.log(element.innerHTML);
    element!.innerHTML = '<td class="shubetu" id="TType' + td + tr + '"><span id="WType' + td + tr + '"></span></td>\
        <td class="name" id="TName' + td + tr + '"><span id="WName' + td + tr + '"></span></td>\
        <td class="Ctime" id="TTime' + td + tr + '"><p2 id="THour' + td + tr + '"></p2>:<p2 id="TMin' + td + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + td + tr + '"><span id="WDes' + td + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + td + tr + '"></td>';
    //console.log(Type[0][2]);
    document.getElementById('TType' + td + tr)!.textContent = Type[td - 1][tr - 1];
    document.getElementById('TTime' + td + tr)!.textContent = TableHour[td - 1][tr - 1] + ':' + TableMin[td - 1][tr - 1];
    document.getElementById('TDes' + td + tr)!.textContent = Des[td - 1][tr - 1];
    document.getElementById('TNum' + td + tr)!.textContent = doBNumber!.textContent;
    document.getElementById('TName' + td + tr)!.textContent = Ex_Name[td - 1][tr - 1];
    if (Ex_Name[td - 1][tr - 1].includes('から快速')) {
        document.getElementById('TName' + td + tr)!.innerHTML = '<span class="PartRapid">' + Ex_Name[td - 1][tr - 1] + '</span>'
        //document.getElementById('TName' + td + tr)!.style.fontSize = '1.5em';
        document.getElementById('TName' + td + tr)!.style.textAlign = 'left';
    }
    JTypeColor(Type[td - 1][orderNum - 1], TType[td - 1][orderNum - 1], JRobj);
    JRWTrainNameColor(td - 1, tr - 1, 'orange', 'orange', 'red');
    TwoLetterDistance(td - 1, tr - 1, Des, TDes, 1, 0.9);
    DesMiddle(td - 1, tr - 1, '方面');
    //Cell.innerText = '<td class="shubetu" id="TType' + td + '' + tr + '"><span id="WType' + td + '' + tr + '"></span></td>'
    //console.log(element);
}
//JR西日本のみで使用
export function switchdetail(Tab: string, td: number, tr: number, colspan: any, Banner_F: any) {
    var TypeFlag = document.getElementById('TType' + td + '' + tr);
    //console.log(TypeFlag);
    // 表示を切り替える
    if (TypeFlag != null) {
        //詳細表示モード
        //console.log("Detailモード" + td);
        //console.log(typeof Des_Banner[td - 1]);
        //console.log(Des[td - 1]);
        if (typeof Des_Banner[td - 1] === 'undefined') {
            //console.log(Des[td - 1][0]);
            Des_Banner[td - 1] = Des[td - 1][0];
        }
        //console.log(Des_Banner);
        //console.log(typeof Banner_F);
        Banner_F(td);
        BottomBanner(Tab, td, tr, colspan, '<span id="Detail_Type' + td + '">' + Type[td - 1][0] + ' ' + LiName[td - 1] +
            '</span> ' + Des_Banner[td - 1] + '行きの停車駅は<span class="orange">' + Detail_contents[td - 1] + '</span>です');
        JTypeColor(Type[td - 1][0], 'Detail_Type' + td, JRobj);
        //BottomBanner("TTLine" + td + "" + tr, td, tr, colspan);
        switch_detail_flag++;
    } else if (TypeFlag == null) {
        //通常表示モード
        //console.log("thirdモード" + td);
        BottomBanner_Reverse(Tab, td, tr);
        JRWTrainNameColor(td - 1, tr - 1, 'orange', 'orange', 'red');
        switch_detail_flag = 0;
        TimeMarkErase(td - 1, tr - 1);
    }
}
export function allswitch_detail(Station_Banner: any) {
    for (var td = 1; td < Tablenum + 1; td++) {
        if (Type[td - 1][0] != '') {
            switchdetail("TTLine", td, orderNum, 5, Station_Banner);
        }
    }
}