//主にJR西日本で使う
//交互表示
function switchTrainInfo2(Tab, tr, line, Longerword = "糸崎連絡", shorterword = "糸崎") {
    var Cell = document.getElementById(Tab);
    // 表示を切り替える
    if (Cell.innerText.startsWith(Longerword)) {
        Cell.innerText = shorterword;
    } else if (Indexfile != 'index3.php' || Type[1][tr].startsWith('始発')) {
        Cell.innerHTML = line;
        if (Indexfile == 'index4.php') {
            DesMiddle(0, tr, '連絡');
        }
    }
}
function allswitchMihara() {
    for (var tr = 0; tr < orderNum; tr++) {
        switchTrainInfo2(TDes[0][tr], tr, Des[0][tr]);
    }
}
function allswitchOdawara() {
    for (var tr = 0; tr < orderNum; tr++) {
        //CarsDevide(1);
        switchTrainInfo2(TType[1][tr], tr, '<span style="color:orange;">始発</span>', "始発", Type[1][tr].replace('始発', ''));
        //console.log(Type[1][tr]);
        var Cell = document.getElementById('TType2' + (tr + 1));
        if (Cell.textContent.includes('特別快速')) {
            Cell.style.transform = "scaleX(0.50)" + "translate(-7%,0%)";
        }else{
            Cell.style.transform = "scaleX(1.00)" + "translate(-0%,0%)";
        }
    }
}