import { NewAllLastShow, JRLimitedNumber, allTwoLettersDistance, TrainTypeSet } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { DetailReplace } from "./module/detailSimpleEdit";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { PlusType, PlusDes } from "./main";
import { whetherStop } from "./module/detailSimpleEdit";
import { Tobuobj } from "./detailStopData/TobuSet";
import { trainTables } from "./types/trainTable";
import { DestinationSet } from "./module/firstDisplayEdit";
import { TDes } from "./types/constants";
DestinationSet()
for (var td = 0; td < 2; td++) {
    for (var tr = 0; tr < 4; tr++) {
        if (Type[td][tr] != '') {
            var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
            var dNumber = document.getElementById('TNumber' + (td + 1) + (tr + 1));
            Type[td][tr] = '特急';
            trainTables[td].trains[tr].type = '特急';
            const _LimitedName = trainTables[td].trains[tr].trainName ?? "";
            if (_LimitedName.includes('リバティ')) {
                var Right = _LimitedName.replace('リバティ', '');
                trainTables[td].trains[tr].trainName = 'リバティ<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            } else if (_LimitedName.includes('スペーシア')) {
                var Right =_LimitedName.replace('スペーシア', '');
                trainTables[td].trains[tr].trainName = 'スペーシア<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            } else if (_LimitedName.includes('スカイツリー')) {
                var Right =_LimitedName.replace('スカイツリー', '');
                trainTables[td].trains[tr].trainName = 'スカイツリー<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            }
            dName!.innerHTML = trainTables[td].trains[tr].trainName ?? "";
            dNumber!.textContent = trainTables[td].trains[tr].trainNumber + '号';
        }
    }
}
TrainTypeSet(2);
for (var tr = 0; tr < orderNum; tr++) {
    TypeColorChange(2, tr, '区間急行', 'orange');
    document.getElementById('TType1' + (tr + 1))!.style.color = 'red';
    document.getElementById('TName1' + (tr + 1))!.style.color = 'red';
    document.getElementById('TNumber1' + (tr + 1))!.style.color = 'red';
    document.getElementById('TType2' + (tr + 1))!.style.color = 'red';
    document.getElementById('TName2' + (tr + 1))!.style.color = 'red';
    document.getElementById('TNumber2' + (tr + 1))!.style.color = 'red';
}
if (station == '浅草駅') {
    var dDetail1 = document.getElementById('TDetail11');
    var dDetail2 = document.getElementById('TDetail21');
    FDetail(Type[0][0], Tobuobj, Dtype[0], 0, 0, "・");
    LastLetterRemove(0, 0, '・');
    FDetail(Type[1][0], Tobuobj, Dtype[0], 1, 0, "・");
    LastLetterRemove(1, 0, '・');
    stationN = '北千住';
    FDetail(Type[2][0], Tobuobj, Dtype[0], 2, 0, "・");
    if (Detail[0][0] != '') {
        dDetail1!.textContent = '停車駅は ' + Detail[0][0] + 'です';
    }
    if (Detail[1][0] != '') {
        dDetail2!.textContent = '停車駅は ' + Detail[1][0] + 'です';
    }
    if (whetherStop(17, 40, TableHour[0][0], TableMin[0][0], 23, 30)) {
        DetailReplace(0, 0, '北千住', '曳舟・北千住');
    }
    if (whetherStop(17, 40, TableHour[1][0], TableMin[1][0], 23, 30)) {
        DetailReplace(1, 0, '北千住', '曳舟・北千住');
    }
    var dDetail = document.getElementById('TDetail31');
    if (Type[2][0].includes('区間')) {
        LastLetterRemove(2, 0, '・');
        dDetail!.textContent = '停車駅は 北千住までの各駅・' + Detail[2][0];
    }
    //console.log(PlusType);
    //console.log(PlusDes);
    var Setsuzoku_flag = 0;
    for (var td = 1; td < 3; td++) {
        if (PlusType[td] == Type[2][0] && PlusDes[td] == Des[2][0]) {
            //console.log(PlusType[td - 1]);
            //console.log(PlusDes[td - 1]);
            if (PlusType[td - 1] == '急行' || PlusType[td - 1] == '準急') {
                dDetail!.textContent += '　曳舟で' + PlusType[td - 1] + ' ' + PlusDes[td - 1] + '行きに連絡します。';
                Setsuzoku_flag = 1;
            }
            break;
        }
    }
}
NewAllLastShow();
console.log(trainTables)
allTwoLettersDistance(Des, TDes, 1, 0.9);