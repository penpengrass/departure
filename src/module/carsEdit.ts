import { trainTables, plainTrainTables } from "../types/trainTable";
//種別+両数の場合分割し、Cars配列に入れる
export function CarsDevideToLine(td: number, TypeSetFlag: boolean = true) {
    for (var tr = 0; tr < orderNum; tr++) {
        var LType;
    if (trainTables[td].trains[tr].type) {
        LType = trainTables[td].trains[tr].type;
    } else {
        LType = plainTrainTables[td].trains[tr]?.type ?? "";
    }
        var matches = LType.match(/(\D+)(\d+)両/);
        var matches2 = LType.match(/(\D+)(\d+)号(\d+)両/);
        var matches3 = LType.match(/(\D+)(\d+)両(\d+)号/);
        //console.log(LType);
        if (matches2) {
            /*console.log(matches2[0]);
            console.log(matches2[1]);
            console.log(matches2[2]);
            console.log(matches2[3]);*/
            trainTables[td].trains[tr].cars = matches2[3] + "両";
            LType = matches2[1] + matches2[2] + "号";
            trainTables[td].trains[tr].type = LType;
        } else if (matches3) {
            /*console.log(matches3[0]);
            console.log(matches3[1]);
            console.log(matches3[2]);
            console.log(matches3[3]);*/
            trainTables[td].trains[tr].cars = matches3[2] + "両";
            LType = matches3[1] + matches3[3] + "号";
            trainTables[td].trains[tr].type = matches3[1];
        } else if (matches) {
            /*console.log(matches[0]);
            console.log(matches[1]);
            console.log(matches[2]);
            console.log(matches[3]);*/
            trainTables[td].trains[tr].cars = matches[2] + "両";
            LType = matches[1];
            trainTables[td].trains[tr].type = matches[1];
        } else if (TypeSetFlag&&trainTables[td].trains[tr].type=="") {
            trainTables[td].trains[tr].type = LType;
            //console.log("CarsDevideにマッチしていない" + tr);
        }
    }
}
export function CarsDefine(td: number, tr: number, KeyWord1: string, KeyWord2: string, LCars: any, Last = '') {
    if (Type[td][tr].includes(KeyWord1) && Type[td][tr].includes(KeyWord2)) {
        trainTables[td].trains[tr].cars = LCars + '両' + Last;
    }
}
export function CarsInto(td: number, tr: number, Tab: string) {
    var LTab = document.getElementById(Tab + (td + 1) + (tr + 1));
    var _Cars = trainTables[td].trains[tr].cars
    if (LTab && LTab.textContent == "" && _Cars) {
        document.getElementById(Tab + (td + 1) + (tr + 1))!.textContent = trainTables[td].trains[tr]?.cars ?? "";
    }
}