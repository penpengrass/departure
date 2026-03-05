//種別+両数の場合分割し、Cars配列に入れる
function CarsDevideToLine(td) {
    for (var tr = 0; tr < orderNum; tr++) {
        //var LType = document.getElementById(LTypeTag + (td + 1) + '' + (tr + 1));
        var LType = Type[td][tr];
        var matches = LType.match(/(\D+)(\d+)両/);
        var matches2 = LType.match(/(\D+)(\d+)号(\d+)両/);
        var matches3 = LType.match(/(\D+)(\d+)両(\d+)号/);
        //console.log(LType);
        if (matches2) {
            /*console.log(matches2[0]);
            console.log(matches2[1]);
            console.log(matches2[2]);
            console.log(matches2[3]);*/
            Cars[td][tr] = matches2[3] + "両";
            LType = matches2[1] + matches2[2] + "号";
            Type[td][tr] = LType;
        } else if (matches3) {
            /*console.log(matches3[0]);
            console.log(matches3[1]);
            console.log(matches3[2]);
            console.log(matches3[3]);*/
            Cars[td][tr] = matches3[2] + "両";
            LType = matches[1] + matches3[3] + "号";
            Type[td][tr] = matches3[1];
        } else if (matches) {
            /*console.log(matches[0]);
            console.log(matches[1]);
            console.log(matches[2]);
            console.log(matches[3]);*/
            Cars[td][tr] = matches[2] + "両";
            LType = matches[1];
            Type[td][tr] = matches[1];
        } else {
            //console.log("CarsDevideにマッチしていない" + tr);
        }
    }
}
function CarsDefine(td, tr, KeyWord1, KeyWord2, LCars,Last='') {
    if (Type[td][tr].includes(KeyWord1) && Type[td][tr].includes(KeyWord2)) {
        Cars[td][tr] = LCars + '両'+Last;
    }
}
function CarsInto(td, tr, Tab) {
    var LTab = document.getElementById(Tab + (td + 1) + (tr + 1));
    if (Cars[td][tr] != "" && LTab.textContent == "") {
        document.getElementById(Tab + (td + 1) + (tr + 1)).textContent = Cars[td][tr];
    }
}