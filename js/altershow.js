//主にJR西日本で使う
//交互表示
function switchTrainInfo2(Tab, td, tr, Longerword = "糸崎連絡", shorterword = "糸崎") {
    var Cell = document.getElementById(Tab);
    // 表示を切り替える
    if (Cell.innerText.startsWith(Longerword)) {
        Cell.innerText = shorterword;
    } else {
        Cell.innerText = Des[td][tr];
        DesMiddle(0, tr, '連絡');
    }
}
function allswitch() {
    for (var tr = 0; tr < orderNum; tr++) {
        switchTrainInfo2(TDes[0][tr], 0, tr);
    }
}