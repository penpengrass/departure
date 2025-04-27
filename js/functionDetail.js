function DetailBanner(td, tr, Letter, flag = 0) {
  var LDetail = document.getElementById("TDetail" + (td + 1) + (tr + 1));
  console.log(td + ":" + tr + ":" + LDetail.textContent.length);
  if (LDetail.textContent.length < Letter) {
    document
      .getElementById("TDetail" + (td + 1) + (tr + 1))
      .classList.remove("news-banner__content");
  } else {
    //未完成
    if (
      flag == 1 &&
      LDetail.textContent.length < 48 &&
      Indexfile == "index2.php"
    ) {
      document
        .getElementById("TDetail" + (td + 1) + (tr + 1))
        .classList.remove("news-banner__content");
      var DetailM = LDetail.textContent;
      const targetIndex = DetailM.indexOf(" ", Letter);
      const before = DetailM.substring(0, targetIndex); // n文字目以前
      const after = DetailM.substring(targetIndex + 1); // 特定文字以降
      //改行したい
      if (before == "") {
        LDetail.innerHTML = after;
      } else {
        LDetail.innerHTML = before;
        document.getElementById("TDetailD" + (td + 1) + (tr + 1)).textContent =
          after;
      }
    }
  }
}
function DetailBannerOnce(td, Letter) {
  var LDetail = document.getElementById("TDetail" + (td + 1)).textContent;
  if (LDetail.length < Letter) {
    document
      .getElementById("TDetail" + (td + 1))
      .classList.remove("news-banner__content");
  }
}
function LowerDetail(td, tr) {
  if (Type[td][tr].startsWith("特急")) {
    document.getElementById("TConnection" + (td + 1) + (tr + 1)).textContent =
      "(ご乗車には特急券が必要です)";
  }
}
function LastLetterRemove(td, tr, mark) {
  console.log(Detail);
  if (Detail[td][tr] != null && Detail[td][tr].slice(-1) == mark) {
    //console.log(tr + 'は読点で終わる');
    Detail[td][tr] = Detail[td][tr].slice(0, -1);
  }
}
