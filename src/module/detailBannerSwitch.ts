import { DesMiddle, JRWTrainNameColor } from "./displayEdit4";
import { TimeMarkErase, TwoLetterDistance, LiName, DestinationTwoLetterDistance } from "./firstDisplayEdit";
import { JTypeColor } from "../typeColor";
import { JRobj } from "../detailStopData/JRW_afterset";
import { trainTables } from "../types/trainTable";
import { TDes } from "../types/constants";
export var switch_detail_flag = 0;
export var Ex_Name = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    Ex_Name[td] = new Array(Tablenums[td]);
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var L_TrainName = document.getElementById(
            "TName" + (td + 1) + "" + (tr + 1)
        );
        if (L_TrainName != null) {
            Ex_Name[td][tr] = L_TrainName.textContent;
        }
    }
}
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
    //console.log(element);
    //console.log(element.innerHTML);
    element!.innerHTML = '<td class="shubetu" id="TType' + td + tr + '"><span id="WType' + td + tr + '"></span></td>\
        <td class="name" id="TName' + td + tr + '"><span id="WName' + td + tr + '"></span></td>\
        <td class="Ctime" id="TTime' + td + tr + '"><p2 id="THour' + td + tr + '"></p2>:<p2 id="TMin' + td + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + td + tr + '"></td>\
        <td class="railnumber" id="TNum' + td + tr + '"></td>';
    var _Name = trainTables[td - 1].trains[tr - 1]?.trainName ?? ""
    document.getElementById('WType' + td + tr)!.textContent = trainTables[td - 1].trains[tr - 1].type;
    document.getElementById('TTime' + td + tr)!.textContent = TableHour[td - 1][tr - 1] + ':' + TableMin[td - 1][tr - 1];
    document.getElementById('TDes' + td + tr)!.innerHTML = trainTables[td - 1].trains[tr - 1].destination;
    document.getElementById('TNum' + td + tr)!.textContent = TrackNum[td - 1][tr - 1];
    document.getElementById('WName' + td + tr)!.innerHTML = _Name;
    if (_Name.includes('から快速')) {
        document.getElementById('WName' + td + tr)!.innerHTML = trainTables[td - 1].trains[tr - 1]?.trainName ?? ""
        //document.getElementById('TName' + td + tr)!.style.fontSize = '1.5em';
        document.getElementById('TName' + td + tr)!.style.textAlign = 'left';
    }
    JTypeColor(trainTables[td - 1].trains[orderNum - 1].type, TType[td - 1][orderNum - 1], JRobj);
    JRWTrainNameColor(td - 1, tr - 1, 'orange', 'orange', 'red');
    DestinationTwoLetterDistance(td - 1, tr - 1, TDes, 1, 0.9);
    //DesMiddle(td - 1, tr - 1, '方面');
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
        //console.log(Des[td - 1]);
        if (!trainTables[td - 1].trains[0].des_banner) {
            trainTables[td - 1].trains[0].des_banner = Des[td - 1][0];
        }
        let _Des_Banner = trainTables[td - 1].trains[0].des_banner
        Banner_F(td);
        var TrainName = trainTables[td - 1].trains[0]?.trainName ?? "";
        if (!trainTables[td - 1].trains[0].type.includes('特急')) {
            TrainName = "";
        }
        BottomBanner(Tab, td, tr, colspan, '<span id="Detail_Type' + td + '">' + trainTables[td - 1].trains[0].type
            + ' ' + TrainName + '</span> ' + _Des_Banner + '行きの停車駅は<span class="orange">'
            + trainTables[td - 1].trains[0].detail + '</span>です');
        JTypeColor(trainTables[td - 1].trains[0].type, 'Detail_Type' + td, JRobj);
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