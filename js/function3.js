//停車駅置換
function DetailReplace(td, tr, Before, After) {
    var LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
    Detail[td][tr] = Detail[td][tr].replace(Before, After);
    LDetail.textContent = LDetail.textContent.replace(Before, After);
}

//簡易版追加停車駅(表番号,種別の(),前の停車駅,追加停車駅,停車駅間の記号)
function SpecialStop(td, last, Lstation, AddStation, distance, Indent) {
    for (var tr = 0; tr < orderNum; tr++) {
        //console.log(Detail);
        var LType = document.getElementById('TType' + (td + 1) + '' + (tr + 1));
        var LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        var matches = LType.textContent.match(/(\D+)\((\D+)\)/);
        if (matches) {
            console.log(matches[0]);
            console.log(matches[1]);
            console.log(matches[2]);
            if (Type[td][tr].endsWith(last)) {
                var LineDetail = Detail[td][tr];
                console.log(station + ':' + Lstation);
                if (station == Lstation + '駅') {
                    LineDetail = AddStation + '・' + LineDetail;
                } else if (Detail[td][tr].includes(Lstation)) {
                    LineDetail = LineDetail.replace(Lstation, Lstation + distance + AddStation);
                }
                //console.log(LineDetail);
                LDetail.textContent = LineDetail;
                Detail[td][tr] = LDetail.textContent;
                LType.textContent = LType.textContent.replace(last, '');
                if (LType.textContent.length == 2) {
                    LType.style.textIndent = Indent + 'em';
                }
                Type[td][tr] = Type[td][tr].replace(last, '');
                console.log(Type[td][tr]);
            }
        }
    }
    console.log('---' + AddStation + '駅の追加停車駅処理終了');
}