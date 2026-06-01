import { NewAllLastShow, JRLimitedNumber, allTwoLettersDistance, TrainTypeSet } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { DetailReplace } from "./module/detailSimpleEdit";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { PlusType, PlusDes } from "./main";
import { whetherStop } from "./module/detailSimpleEdit";
import { Tobuobj } from "./detailStopData/TobuSet";
import { plainTrainTables, trainTables } from "./types/trainTable";
import { DestinationSet } from "./module/firstDisplayEdit";
import { TDes } from "./types/constants";
DestinationSet()
for (var td = 0; td < 2; td++) {
    for (var tr = 0; tr < 4; tr++) {
        if (Type[td][tr] != '') {
            const _PlainType = plainTrainTables[td].trains[tr].type;
            var matches = _PlainType.match(/(\D+)(\d+)号(\d+)号/);
            if (matches) {
                trainTables[td].trains[tr].trainNumber = Number(matches[3]);
            }
            var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
            var dNumber = document.getElementById('TNumber' + (td + 1) + (tr + 1));
            var dDes = document.getElementById('TDes' + (td + 1) + (tr + 1));
            Type[td][tr] = '特急';
            trainTables[td].trains[tr].type = '特急';
            const _LimitedName = trainTables[td].trains[tr].trainName ?? "";
            if (_LimitedName == 'リバティけごん会津') {
                var Right = 'リバティけごん';
                trainTables[td].trains[tr].trainName = 'リバティ会津<br>'+ Right;
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            } else if (_LimitedName.includes('リバティ')) {
                var Right = _LimitedName.replace('リバティ', '');
                trainTables[td].trains[tr].trainName = 'リバティ<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            } else if (_LimitedName.includes('スペーシア')) {
                var Right = _LimitedName.replace('スペーシア', '');
                trainTables[td].trains[tr].trainName = 'スペーシア<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            } else if (_LimitedName.includes('スカイツリー')) {
                var Right = _LimitedName.replace('スカイツリー', '');
                trainTables[td].trains[tr].trainName = 'スカイツリー<br>' + '<span class="gou">' + Right + '</span>';
                dName!.style.fontSize = '18px';
                dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName!.style.fontWeight = '800px';
            }
            dName!.innerHTML = trainTables[td].trains[tr].trainName ?? "";
            if (_LimitedName == 'リバティけごん会津') {
                dNumber!.innerHTML = '10' + trainTables[td].trains[tr].trainNumber + '号<br>' + '<span class="gou">' + trainTables[td].trains[tr].trainNumber + '号</span>';
                trainTables[td].trains[tr].destination = '会津田島<br>' + '<span class="gou">' + '東武日光' + '</span>';
                dNumber!.style.fontSize = '18px';
                dNumber!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dNumber!.style.fontWeight = '800px';
                dDes!.style.fontSize = '18px';
                dDes!.style.transform = "scaleX(1.20)" + "translate(0%,0%)";
                dDes!.style.fontWeight = '800px';
            } else {
                dNumber!.textContent = trainTables[td].trains[tr].trainNumber + '号';
            }
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
    stationN = '浅草';
    let _Detail0 = trainTables[0].trains[0].detail;
    let _Detail1 = trainTables[1].trains[0].detail;
    const _Hour0 = trainTables[0].trains[0].hour;
    const _Hour1 = trainTables[1].trains[0].hour;
    const _Min0 = trainTables[0].trains[0].minute;
    const _Min1 = trainTables[1].trains[0].minute;
    if (whetherStop(17, 2, _Hour0, Number(_Min0), 23, 30)) {
        DetailReplace(0, 0, '北千住', '曳舟・北千住');
    }
    if (whetherStop(15, 2, _Hour0, Number(_Min0), 23, 30)) {
        DetailReplace(0, 0, '久喜', '久喜・加須・羽生');
    }
    if (whetherStop(17, 2, _Hour1, Number(_Min1), 23, 30)) {
        DetailReplace(1, 0, '北千住', '曳舟・北千住');
        DetailReplace(1, 0, '栃木', '杉戸高野台・南栗橋・栃木');
    }
    var dDetail = document.getElementById('TDetail31');
    const _LimitedName = trainTables[1].trains[0].trainName ?? "";
    if (_LimitedName == 'リバティ会津<br>' + 'リバティけごん') {
        dDetail2!.textContent = 'リバティけごんの停車駅はとうきょうスカイツリー・北千住・春日部・栃木・新鹿沼・下今市です。'
            + 'リバティ会津の停車駅は新高徳・東武ワールドスクウェア・鬼怒川温泉・鬼怒川公園・新藤原・新藤原から野岩鉄道線に入ります。';
    }
    if (Type[2][0].includes('区間')) {
        LastLetterRemove(2, 0, '・');
        dDetail!.textContent = '停車駅は 北千住までの各駅・' + trainTables[2].trains[0].detail;
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
    if (_Detail0 != '') {
        dDetail1!.textContent = '停車駅は ' + trainTables[0].trains[0].detail + 'です';
    }
    if (_Detail1 != '') {
        dDetail2!.textContent = '停車駅は ' + trainTables[1].trains[0].detail + 'です';
    }
}
NewAllLastShow();
console.log(trainTables)
allTwoLettersDistance(Des, TDes, 1, 0.9);