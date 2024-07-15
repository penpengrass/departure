//西ノ京や久居で使う
function whetherStop(start_hour, start_min, hour, min, end_hour, end_min) {
    if (start_hour < hour && end_hour > hour) {
        return true;
    } else if (start_hour > hour || end_hour < hour) {
        return false;
    } else if (start_hour == hour && start_min < min) {
        return true;
    } else if (end_hour == hour && end_min > min) {
        return true;
    } else {
        return false;
    }
}
//停車駅置換(時間で変わる場合に使う，高の原，久居など)
function DetailReplace(td, tr, Before, After, flag = 0) {
    var LDetail;
    if (flag == 0) {
        LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        Detail[td][tr] = Detail[td][tr].replace(Before, After);
        LDetail.textContent = LDetail.textContent.replace(Before, After);
    } else if (flag == 2) {
        LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        LDetail.textContent = LDetail.textContent.replace(Before, After);
    } else if (flag == 3) {
        LDetail = document.getElementById('TDetail' + (td + 1));
        LDetail.textContent = LDetail.textContent.replace(Before, After);
    }
    else {
        LDetail = Detail[td][tr];
        Detail[td][tr] = Detail[td][tr].replace(Before, After);
    }

}
//新幹線の追加停車
function DetailReplace_Set(td, tr, Line, Before, After) {
    if (Line.includes(number[td][tr])) {
        DetailReplace(td, tr, Before, After);
    }
}
//所要時間表示(実際の表示にはない, ここで表示を完結させる)
function SpendingTime(td, tr, Destination, Minutes, className) {
    if (tr != '') {
        document.getElementById('TDetail' + (td + 1) + (tr + 1)).innerHTML
            = Destination + 'までの所要時間は<span class=' + className + '>' + Minutes + '分</span>です';
    } else if (tr == '') {
        document.getElementById('TDetail' + (td + 1)).innerHTML
            = Destination + 'までの所要時間は<span class=' + className + '>' + Minutes + '分</span>です';
    }
    Detail[td][0] = '';
}
//簡易版追加停車駅(表番号,種別の(),前の停車駅,追加停車駅,停車駅間の記号)，名古屋地区の特別停車限定
function SpecialStop(td, last, Lstation, AddStation, distance, Indent) {
    for (var tr = 0; tr < orderNum; tr++) {
        //console.log(Detail);
        var LType = document.getElementById('TType' + (td + 1) + '' + (tr + 1));
        if (tr > 0 && TokaiDetailflag == 1) {
            LType.textContent = LType.textContent.replace(last, '');
            Type[td][tr] = Type[td][tr].replace(last, '');
            continue;
        }
        if (TokaiDetailflag == 1) {
            var LDetail = document.getElementById('TDetail' + (td + 1));
        } else {
            var LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        }
        //console.log(LDetail);
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
                console.log(LineDetail);
                LDetail.textContent = LineDetail;
                Detail[td][tr] = LDetail.textContent;
                LType.textContent = LType.textContent.replace(last, '');
                if (LType.textContent.length == 2) {
                    LType.style.textIndent = Indent + 'em';
                }
                Type[td][tr] = Type[td][tr].replace(last, '');
                console.log(Type[td][tr]);
            }
        } else {
            console.log("SpecialStopはマッチしない");
        }
    }
    console.log('---' + AddStation + '駅の追加停車駅処理終了');
}