allLastShow();
for (var td = 0; td < 2; td++) {
    for (var tr = 0; tr < 4; tr++) {
        if (Type[td][tr] != '') {
            var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
            var dType = document.getElementById('TType' + (td + 1) + (tr + 1));
            var dNumber = document.getElementById('TNumber' + (td + 1) + (tr + 1));
            dName.textContent = document.getElementById('TType' + + (td + 1) + (tr + 1)).textContent;
            dType.textContent = '特急';
            Type[td][tr] = '特急';
            var number = JRLimitedNumber(td, tr, 'TName');
            dNumber.textContent = number + '号';
            dName.textContent = dName.textContent.replace(number + '号', '');
            console.log(dName);
            if (dName.textContent.includes('リバティ')) {
                var Right = dName.textContent.replace('リバティ', '');
                dName.innerHTML = 'リバティ<br>' + '<span class="gou">' + Right + '</span>';
                dName.style.fontSize = '18px';
                dName.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName.style.fontWeight = '800px';
            } else if (dName.textContent.includes('スペーシア')) {
                var Right = dName.textContent.replace('スペーシア', '');
                dName.innerHTML = 'スペーシア<br>' + '<span class="gou">' + Right + '</span>';
                dName.style.fontSize = '18px';
                dName.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName.style.fontWeight = '800px';
            }else if (dName.textContent.includes('スカイツリー')) {
                var Right = dName.textContent.replace('スカイツリー', '');
                dName.innerHTML = 'スカイツリー<br>' + '<span class="gou">' + Right + '</span>';
                dName.style.fontSize = '18px';
                dName.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
                dName.style.fontWeight = '800px';
            }
        }
    }
}
for (var tr = 0; tr < orderNum; tr++) {
    TypeColorChange(2, tr, '区間急行', 'orange');
    document.getElementById('TType1' + (tr + 1)).style.color = 'red';
    document.getElementById('TName1' + (tr + 1)).style.color = 'red';
    document.getElementById('TNumber1' + (tr + 1)).style.color = 'red';
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
    if(dDetail1.textContent!=''){
        dDetail1.textContent='停車駅は '+dDetail1.textContent+'です';
    }
    if(dDetail2.textContent!=''){
        dDetail2.textContent='停車駅は '+dDetail2.textContent+'です';
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
        dDetail.textContent = '停車駅は 北千住までの各駅・' + dDetail.textContent;
    }
    console.log(PlusType);
    console.log(PlusDes);
    var Setsuzoku_flag = 0;
    for (var td = 1; td < 3; td++) {
        if (PlusType[td] == Type[2][0] && PlusDes[td] == Des[2][0]) {
            console.log(PlusType[td - 1]);
            console.log(PlusDes[td - 1]);
            if (PlusType[td - 1] == '急行' || PlusType[td - 1] == '準急') {
                dDetail.textContent += '　曳舟で' + PlusType[td - 1] + ' ' + PlusDes[td - 1] + '行きに連絡します。';
                Setsuzoku_flag = 1;
            }
            break;
        }
    }
}
allTwoLettersDistance(Des, TDes, 1, 0.9);