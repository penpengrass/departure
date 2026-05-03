import { JRWSHobj } from './detailStopData/JRHokuShindetailset';
import { DetailShow, doallDetailShow } from "./module/detailMainPut";
import { DetailReplace } from "./module/detailSimpleEdit";
import { JRLimitedDevide, JRNameDevide, Bansenshow, NewAllLastShow, DestinationSet, TrainTypeSet, DestinationWordChange, DestinationTwoLetterDistance } from "./module/firstDisplayEdit";
import { TrainNumber } from "./module/firstDisplayEdit";
import { allJRWTrainNameColor, DesMiddle } from "./module/displayEdit4";
import { allJRColor, allJRSSColor } from "./typeColor";
import * as Stops from "./detailStopData/JRHokuShindetailset";
import { getStationConfig } from "./main";
import { trainTables } from './types/trainTable';
allJRSSColor(JRWSHobj, 2);
console.log(DetailLength);
DetailShow(JRWSHobj, "　", DetailLength.length);
JRLimitedDevide(2);
JRLimitedDevide(3);
//TablenumSub = 1
NonGouflag = 1;
JRNameDevide(2);
var takefu = [62, 64, 4, 8, 12, 84, 16, 20, 22, 24, 26, 28, 30, 34, 38, 42, 46, 48, 50, 1, 5, 9, 13, 17, 19, 21, 23, 25, 29, 33, 37, 41, 45, 47, 49, 61];
var iiyama = [552, 554, 556, 558, 560, 564, 568, 572, 574, 576, 578, 590];
var k_takefu = [[502, 518], [501, 517]];
var k_onsen = [[506, 510], [507, 509]];
for (var tr = 0; tr < 2; tr++) {
    if (station == '敦賀駅') {
        Detail[1][tr] = "";
    }
    if (Type[0][tr] != '') {
        document.getElementById('TDetailtitle' + (0 + 1) + (tr + 1))!.textContent = '停車駅';
    }
    if (Type[1][tr] != '' && station != '敦賀駅') {
        document.getElementById('TDetailtitle' + (1 + 1) + (tr + 1))!.textContent = '停車駅';
    }
}
for (var td = 0; td < 2; td++) {
    for (var tr = 0; tr < 3; tr++) {
        const _Type = trainTables[td].trains[tr].type;
        const _Number = trainTables[td].trains[tr]?.trainNumber ?? 0;
        if (_Type == 'かがやき') {
            trainTables[td].trains[tr].cars = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = '全車指定席';
        } else if (_Type == 'はくたか') {
            trainTables[td].trains[tr].cars = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = '自由席1-4号車';
        } else if (_Type == 'つるぎ') {
            trainTables[td].trains[tr].cars = '12両編成';
            document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = '自由席1-2号車';
            if (_Number > 59) {
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = '自由席1-4号車';
            }
        }
    }
    if (station == '敦賀駅') {
        break;
    }
}
for (var tr = 0; tr < 2; tr++) {
    const _Number0 = trainTables[0].trains[tr]?.trainNumber ?? 0;
    const _Number1 = trainTables[1].trains[tr]?.trainNumber ?? 0;
    if (takefu.includes(_Number0)) {
        //DetailReplace(0, tr, '福井', '越前たけふ　福井　芦原温泉　加賀温泉　小松');
        trainTables[0].trains[tr].detail = '各駅';
    } else if (station == '福井駅' && Des[0][tr] == '金沢') {
        trainTables[0].trains[tr].detail = '次の停車駅は終点金沢です';
    }
    if (k_onsen[0].includes(_Number0)) {
        DetailReplace(0, tr, '金沢', '芦原温泉　加賀温泉　金沢');
    }
    if (k_takefu[1].includes(_Number0)) {
        DetailReplace(0, tr, '福井', '小松　福井　越前たけふ');
    }
    if (k_takefu[1].includes(_Number1)) {
        DetailReplace(1, tr, '福井', '小松　福井　越前たけふ');
    }

    if (k_onsen[1].includes(_Number0)) {
        DetailReplace(0, tr, '福井', '加賀温泉　芦原温泉　福井');
    }
    if (station == '福井駅') {
        if (takefu.includes(_Number1) || k_takefu[1].includes(_Number1) || Type[1][tr].startsWith('はくたか')) {
            trainTables[1].trains[tr].detail = '越前たけふ';
        } else if (_Number1 > 0) {
            trainTables[1].trains[tr].detail = '次の停車駅は終点敦賀です';
        }
    } else if (station == '金沢駅' && Type[0][tr].startsWith('はくたか')) {
        Detail[0][tr] = '各駅';
    }
    if (iiyama.includes(_Number0)) {
        DetailReplace(0, tr, '長野', '飯山　長野');
    }
    if (iiyama.includes(_Number1)) {
        DetailReplace(1, tr, '長野', '飯山　長野');
    }

    if (Stops.ueda.includes(_Number0)) {
        DetailReplace(0, tr, '長野', '長野　上田　軽井沢');
    }
    if (Stops.ueda.includes(_Number1)) {
        DetailReplace(1, tr, '長野', '長野　上田　軽井沢');
    }
    if (Stops.sakudaira.includes(_Number1)) {
        DetailReplace(1, tr, '上田', '上田　佐久平');
    }
    if (k_takefu[0].includes(_Number0)) {
        DetailReplace(0, tr, '福井', '越前たけふ　福井');
        DetailReplace(0, tr, '金沢', '小松　金沢');
    }
}

if (station == '敦賀駅' || station == '金沢駅') {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[3][tr].startsWith('特急')) {
            document.getElementById('TName' + 4 + (tr + 1))!.textContent += '号';
        }
        if (Type[2][tr].startsWith('特急')) {
            document.getElementById('TName' + 3 + (tr + 1))!.textContent += '号';
        }
        if (Type[4][tr].startsWith('特急')) {
            var _Number = trainTables[4].trains[tr].trainNumber;
            document.getElementById('TName' + 5 + (tr + 1))!.textContent += _Number + '号';
            Type[4][tr] = Type[4][tr].replace(String(_Number), '');
            trainTables[4].trains[tr].type = Type[4][tr];
            document.getElementById('TName' + 5 + (tr + 1))!.style.textAlign = 'right';
        }
        if (Type[3][tr].startsWith('快速あいの')) {
            var _Number3 = trainTables[3].trains[tr].trainNumber;
            document.getElementById('TName' + 4 + (tr + 1))!.textContent += _Number3 + '号';
            Type[3][tr] = Type[3][tr].replace(String(_Number3), '');
            trainTables[3].trains[tr].type = Type[3][tr];
            document.getElementById('TName' + 4 + (tr + 1))!.style.textAlign = 'right';
        }
    }
}
DestinationSet();
for (var tr = 0; tr < orderNum; tr++) {
    DestinationWordChange(3, tr, "大阪", "京都方面大阪");
    DesMiddle(3, tr, '方面');
}
if (Indexfile == 'index4_H.php') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
    TrainTypeSet(2);
    TrainTypeSet(3);
    TrainTypeSet(4);
    TrainTypeSet(5);
    TrainTypeSet(6);
    Bansenshow(1, 2);
    NewAllLastShow();
}
allJRColor(2);
allJRWTrainNameColor('red', 'red', 'red', 2);
doallDetailShow(25);
//DetailBanner(0, 0, 25);
//DetailBanner(0, 1, 25);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        DestinationTwoLetterDistance(td, tr, TDes, 1, 0.9);
    }
}
LastShowFlag = 1;