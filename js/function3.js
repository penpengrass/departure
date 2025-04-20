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
/*function DetailReplace(td, tr, Before, After, flag = 0) {
    var LDetail;
    if (After.includes(Des[td][tr])) {
        console.log(Des[td][tr] + ":" + (td + 1) + ":" + (tr + 1));
        LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        if (Detail[td][tr] == "") {
            Detail[td][tr] += Des[td][tr];
            LDetail.textContent += Des[td][tr];
        } else {
            Detail[td][tr] += "・" + Des[td][tr];
            LDetail.textContent += "・" + Des[td][tr];
        }
    }
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
        Detail[td][tr] = Detail[td][tr].replace(Before, After);
    }
    if (Indexfile != 'index3_S.php' && Indexfile != 'index11.php' && flag != 1) {
        LDetail = document.getElementById('TDetail' + (td + 1) + '' + (tr + 1));
        Detail[td][tr] = Detail[td][tr].replace(Des[td][tr], "");
        LDetail.textContent = LDetail.textContent.replace(Des[td][tr], "");
        LastLetterRemove(td, tr, '・');
    }
}*/
function DetailReplace(td, tr, Before, After) {
  //var LDetail;
  if (After.includes(Des[td][tr])) {
    console.log(Des[td][tr] + ":" + (td + 1) + ":" + (tr + 1));
    if (Detail[td][tr] == "") {
      Detail[td][tr] += Des[td][tr];
    } else {
      Detail[td][tr] += "・" + Des[td][tr];
    }
  }
  console.log(Detail[td][tr]);
  Detail[td][tr] = Detail[td][tr].replace(Before, After);
  if (Indexfile != "index3_S.php" && Indexfile != "index11.php") {
    Detail[td][tr] = Detail[td][tr].replace(Des[td][tr], "");
    LastLetterRemove(td, tr, "・");
  }
}
//新幹線や有料特急の追加停車
function DetailReplace_Set(td, tr, Line, Before, After) {
  if (Line.includes(number[td][tr])) {
    DetailReplace(td, tr, Before, After);
  }
}
//所要時間表示(実際の表示にはない, ここで表示を完結させる)
function SpendingTime(td, tr, Destination, Minutes, className) {
  if (tr != "") {
    document.getElementById("TDetail" + (td + 1) + (tr + 1)).innerHTML =
      Destination +
      "までの所要時間は<span class=" +
      className +
      ">" +
      Minutes +
      "分</span>です";
  } else if (tr == "") {
    document.getElementById("TDetail" + (td + 1)).innerHTML =
      Destination +
      "までの所要時間は<span class=" +
      className +
      ">" +
      Minutes +
      "分</span>です";
  }
  Detail[td][0] = "";
}
//簡易版追加停車駅(表番号,種別の(),前の停車駅,追加停車駅,停車駅間の記号)，名古屋地区の特別停車限定
function SpecialStop(td, last, Before_station, AddStation, distance, Indent) {
  for (var tr = 0; tr < orderNum; tr++) {
    //console.log(Detail);
    //console.log(Type[td][tr]);
    //console.log(TokaiDetailflag);
    var LType = document.getElementById("TType" + (td + 1) + "" + (tr + 1));
    if (tr > 0 && (TokaiDetailflag == 1 || TokaiDetailflag == 2)) {
      Type[td][tr] = Type[td][tr].replace(last, "");
      continue;
    }
    if (TokaiDetailflag == 1 || TokaiDetailflag == 2) {
      var LDetail = document.getElementById("TDetail" + (td + 1));
    } else {
      var LDetail = document.getElementById(
        "TDetail" + (td + 1) + "" + (tr + 1)
      );
    }
    //console.log(LDetail);

    if (Type[td][tr].endsWith(last)) {
      var LineDetail = Detail[td][tr];
      console.log(Detail[td][tr] + "td=" + td + "tr=" + tr);
      //出発後最初の停車が特別停車の場合 例)豊橋→三河三谷
      if (station == Before_station + "駅") {
        LineDetail = AddStation + distance + LineDetail;
      } else if (Detail[td][tr].includes(Before_station)) {
        LineDetail = LineDetail.replace(
          Before_station,
          Before_station + distance + AddStation
        );
      }
      console.log(LineDetail);
      LDetail.textContent = LineDetail;
      Detail[td][tr] = LDetail.textContent;
      if (LType.textContent.length == 2) {
        LType.style.textIndent = Indent + "em";
      }
      Type[td][tr] = Type[td][tr].replace(last, "");
      console.log(AddStation+"駅に特別停車");
    }
  }
  console.log("---" + AddStation + "駅の追加停車駅処理終了");
}
