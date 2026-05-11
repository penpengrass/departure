import { JRNameDevide, NewAllLastShow, flagmarkerase, Bansenshow, swapColumns, AllClassSetting, DestinationSet } from "./module/firstDisplayEdit";
import { JREScolor } from "./module/colorSimpleSet";
import { TrainNumber } from "./module/firstDisplayEdit";
import { LimitedNumberPass } from "./module/firstDetailEdit";
import { DetailBanner, FDetail } from "./module/detailMainPut";
import { Shin_DetailReplace_Set_One } from "./module/detailSimpleEdit";
import * as Stops from "./detailStopData/JRHokuJoetsuset";
import { comment } from "./types/constants";
import { getStationConfig } from "./main";
import { trainTables } from "./types/trainTable";

JRNameDevide(Tablenum);
NonGouflag = 0;
const table1 = document.getElementById("TESTable1");
const table2 = document.getElementById("TESTable2");
const table3 = document.getElementById("TESTable3");
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        if (Type[te][tr] === 'undefined') {
            console.log(":");
        } else if (trainTables[te].trains[tr].type.length > 7) {
            document.getElementById('TType' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.50)" + "translate(-50%,0%)";
        }
        if (Des[te][tr] === 'undefined') {
            //console.log(":");
        } else if (Des[te][tr].length > 7) {
            document.getElementById('TDes' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.60)" + "translate(-15%,0%)";
        } else if (Des[te][tr].length > 5) {
            document.getElementById('TDes' + (te + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(0%,0%)";
        }
    }
}
DestinationSet();
Bansenshow();
NewAllLastShow();
if (station == '仙台駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
    /*for (var tr = 0; tr < orderNum; tr++) {
        if (TrainNumber[0][tr] > 11 && TrainNumber[0][tr] < 100 && Type[0][tr].includes('はやぶさ')) {
            TrainNumber[0][tr] += 2;
            document.getElementById('TName' + (1) + (tr + 1))!.textContent = TrainNumber[0][tr] + "号";
        }
    }
    comment!.innerHTML += "<br>実際には停車駅表示があるが未実装";*/
} else if (station == '高崎駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
}
//種別の色
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        JREScolor(td, tr, 'やまびこ', '<span class="green">やまびこ</span>', yellowgreen);
        JREScolor(td, tr, 'なすの', '<span class="green">なすの</span>', yellowgreen);
        JREScolor(td, tr, 'つばさ', '<span class="orange">つばさ</span>', orange);
        JREScolor(td, tr, 'はやぶさ', '<span class="green">はやぶさ</span>', yellowgreen);
        JREScolor(td, tr, 'はやぶさ･こまち', '<span class="green">はやぶさ</span>･<span class="pink">こまち</span>', pink);
        JREScolor(td, tr, 'やまびこ･つばさ', '<span class="green">やまびこ</span>･<span class="orange">つばさ</span>', orange);
        JREScolor(td, tr, 'とき', '<span class="brown">とき</span>', 'brown');
        JREScolor(td, tr, 'たにがわ', '<span class="brown">たにがわ</span>', 'brown');
        JREScolor(td, tr, 'あさま', '<span class="blue">あさま</span>', '#456f99');
        JREScolor(td, tr, 'はくたか', '<span class="blue">はくたか</span>', '#456f99');
        JREScolor(td, tr, 'かがやき', '<span class="blue">かがやき</span>', '#456f99');
    }
}