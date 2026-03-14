window.orders = new Array(orderNum);
let hours = new Array(orderNum);
for (let or = 0; or < orders.length; or++) {
    orders[or] = 0;
    hours[or] = 0;
}
export function koshin() {
    location.reload();
}
//引数a番線以上の場合は別表に分ける mainTableの表を分割したものをsubTableに入れる(subTableはリセットされる)
class TableDevide {
    mainTable: number;
    subTable: number | null;
    //コンストラクタ
    constructor(mainTable: number, subTable: number | null) {
        //ここに全関数で使うような引数を入れる
        this.mainTable = mainTable;
        this.subTable = subTable;
    }
    //メインテーブルからサブテーブルに移すメソッド
    main_to_sub(TaRow: number, mainTaNum: number, subTaNum: number) {
        if (this.subTable === null) {
            console.error('main_to_sub: subTable is null');
            return;
        }
        TT[this.subTable][TaRow - 3][subTaNum] = TT[this.mainTable][TaRow - 3][mainTaNum];
        TT[this.subTable][TaRow - 2][subTaNum] = TT[this.mainTable][TaRow - 2][mainTaNum];
        TT[this.subTable][TaRow - 1][subTaNum] = TT[this.mainTable][TaRow - 1][mainTaNum];
        TT[this.subTable][TaRow][subTaNum] = TT[this.mainTable][TaRow][mainTaNum];
        //console.log("Main_to_sub");
    }
    //移した要素をメインテーブルから削除する
    main_remove(TaRow: number, mainTaNum: number) {
        if (mainTaNum == TT[this.mainTable][TaRow].length - 1) {
            TT[this.mainTable][TaRow - 3][mainTaNum] = '';
            TT[this.mainTable][TaRow - 2][mainTaNum] = '';
            TT[this.mainTable][TaRow - 1][mainTaNum] = '';
            TT[this.mainTable][TaRow][mainTaNum] = '';
        } else {
            for (let remain = mainTaNum; remain < TT[this.mainTable][TaRow].length - 1; remain++) {
                TT[this.mainTable][TaRow - 3][remain] = TT[this.mainTable][TaRow - 3][remain + 1];
                TT[this.mainTable][TaRow - 2][remain] = TT[this.mainTable][TaRow - 2][remain + 1];
                TT[this.mainTable][TaRow - 1][remain] = TT[this.mainTable][TaRow - 1][remain + 1];
                TT[this.mainTable][TaRow][remain] = TT[this.mainTable][TaRow][remain + 1];
                TT[this.mainTable][TaRow - 3][remain + 1] = '';
                TT[this.mainTable][TaRow - 2][remain + 1] = '';
                TT[this.mainTable][TaRow - 1][remain + 1] = '';
                TT[this.mainTable][TaRow][remain + 1] = '';
            }
        }
    }
    process(condition_F: (TaRow: number, mainTaNum: number) => boolean) {
        //console.log("これからprocess部分実行");
        let subTaNum = 1;
        var flag = 0;
        //console.log(TT[this.mainTable]);
        if (this.subTable === null) {
            console.error('process: subTable is null');
            return;
        }
        Tablereset(this.subTable);
        //TaRowは時を示す, mainTaNumはmainの表の何本目を示す rは1個目の表の残った本数 subTaNumは2つ目の表のs-1本目(hを減らしsを増やすようにする)
        for (let TaRow = 4; TaRow < TT[this.mainTable].length; TaRow += 4) {//時の切替
            flag = 0;
            subTaNum = 1;
            var count = TT[this.mainTable][TaRow].length - 1;
            for (let mainTaNum = 1; mainTaNum < TT[this.mainTable][TaRow].length; mainTaNum++) {//列車の切替
                if (condition_F(TaRow, mainTaNum)) {
                    console.log(TT[this.mainTable].length + ":" + TT[this.subTable].length);
                    flag++;
                    this.main_to_sub(TaRow, mainTaNum, subTaNum);
                    subTaNum++;
                    this.main_remove(TaRow, mainTaNum);
                    mainTaNum--;
                    if (TT[this.mainTable][TaRow - 2][mainTaNum + 1] == '') {
                        break;
                    } else if (flag > 100) {
                        console.error('表分割時に異常が発生しています');
                        break;
                    }
                }
                count--;
                if (count <= 0) {
                    //console.log('count<=0');
                    break;
                }
                //console.log('main='+mainTaNum+'main表の横の長さ='+TT[this.mainTable][TaRow].length);
            }
            //console.log("時の区切り");
        }
    }
    // 新しい処理（削除だけ）
    process_remove_only(condition_F: (TaRow: number, mainTaNum: number) => boolean) {
        for (let TaRow = 4; TaRow < TT[this.mainTable].length; TaRow += 4) {
            var count = TT[this.mainTable][TaRow].length - 1;
            for (let mainTaNum = 1; mainTaNum < TT[this.mainTable][TaRow].length; mainTaNum++) {
                if (condition_F(TaRow, mainTaNum)) {
                    this.main_remove(TaRow, mainTaNum);
                    mainTaNum--; // 詰めた後に次の列をチェックするため
                }
                if (--count <= 0) break;
            }
        }
    }
}
export function RailNumberDevide(minBansen: number, mainTable: number, subTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => TT[mainTable][TaRow][mainTaNum] >= minBansen);
}
export function DestinationDevide(station: string | string[], mainTable: number, subTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => station.includes(TT[mainTable][TaRow - 1][mainTaNum]));
}
// TrainNameDevideの実装
export function TrainNameDevide(trainName: string, mainTable: number, subTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => TT[mainTable][TaRow - 3][mainTaNum].includes(trainName));
}
export function TrainNameLineDevide(trainName: string, mainTable: number, subTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => trainName.includes(TT[mainTable][TaRow - 3][mainTaNum]));
}
export function TrainNameLineIncludeDevide(trainNames: string[], mainTable: number, subTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, subTable);
    tableDevide.process((TaRow, mainTaNum) => trainNames.some(trainName => TT[mainTable][TaRow - 3][mainTaNum].includes(trainName)));
}
export function DestinationRemove(station: string | string[], mainTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, null);
    tableDevide.process_remove_only((TaRow, mainTaNum) => station.includes(TT[mainTable][TaRow - 1][mainTaNum]));
}
// TrainNameDevideの実装
export function TrainNameRemove(trainName: string, mainTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, null);
    tableDevide.process_remove_only((TaRow, mainTaNum) => TT[mainTable][TaRow - 3][mainTaNum].includes(trainName));
}
export function TrainNameLineRemove(trainName: string | string[], mainTable: number) {
    //インスタンス化
    const tableDevide = new TableDevide(mainTable, null);
    tableDevide.process_remove_only((TaRow, mainTaNum) => trainName.includes(TT[mainTable][TaRow - 3][mainTaNum]));
}
export class TrainNumber {
    TT: any;
    name: string;
    constructor(TT: any, name: string) {
        this.TT = TT;
        this.name = name;
    }

}
//特急の号数を追加する，2ずつ追加する場合のみ
export function limitednumber(TT: any, firstlimited: number, name: string | string[]) {
    var count = firstlimited;
    var Lname = [];
    var LDes = [];
    if (typeof name == 'string') {
        Lname[0] = name;
    } else {
        Lname = name;
    }
    if (typeof Des == 'string') {
        LDes[0] = Des;
    } else if (typeof Des == 'undefined') {
        LDes[0] = 'undefined';
    } else {
        LDes = Des;
    }
    for (var td = 1; td < TT.length; td += 4) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            for (var a = 0; a < Lname.length; a++) {
                if (TT[td][tr].includes(Lname[a])) {
                    if (TT[td][tr].includes('当駅始発')) {
                        TT[td][tr] = TT[td][tr].slice(0, -6);
                        if (Indexfile == 'index6.php' || Indexfile == 'index7.php') {
                            TT[td][tr] += count + "号";
                            count += 2;
                            TT[td][tr] += '(当駅始発)';
                        } else if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                            TT[td][tr] += count + "";
                            count += 2;
                        }
                    } else {
                        if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                            TT[td][tr] += count + "";
                            count += 2;
                        } else {
                            TT[td][tr] += count + "号";
                            count += 2;
                        }
                    }
                }
            }
        }
        /*if (Indexfile == 'index8.php' && name.includes('エアポート')) {
            count = 0;
        }*/
    }
    //console.log(TT);
}
export function limitedjustnumber(TT: any, firstlimited: number, name: string | string[], Des: string | string[] | undefined = "") {
    var count = firstlimited;
    var Lname = [];
    var LDes = [];
    if (typeof name == 'string') {
        Lname[0] = name;
    } else {
        Lname = name;
    }
    if (typeof Des == 'string') {
        LDes[0] = Des;
    } else if (typeof Des == 'undefined') {
        LDes[0] = 'undefined';
    } else {
        LDes = Des;
    }
    //console.log('---' + Lname + '---');
    for (var td = 1; td < TT.length; td += 4) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            for (var a = 0; a < Lname.length; a++) {
                for (var b = 0; b < LDes.length; b++) {
                    if (TT[td][tr] == Lname[a]) {
                        //console.log(TT[td][tr] + ':' + Lname[a] + ':' + count);
                        //console.log(count + ' 1');
                        if (TT[td][tr].includes('当駅始発')) {
                            TT[td][tr] = TT[td][tr].slice(0, -6);
                            if (Indexfile == 'index6.php') {
                                TT[td][tr] += count + "号";
                                TT[td][tr] += '(当駅始発)';
                            } else if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php') {
                                TT[td][tr] += count + "";
                            }
                        } else if (TT[td + 2][tr] == LDes[b]) {
                            //console.log(count + ' 2 ' + TT[td + 2][tr] + ':' + Des);
                            if (NonGouflag == 1) {
                                TT[td][tr] += count + "";
                            } else {
                                TT[td][tr] += count + "号";
                            }
                        } else {
                            if (LDes[0] == 'undefined' || LDes[0] == "") {
                                //console.log(TT[td][tr]);
                                if (NonGouflag == 1) {
                                    TT[td][tr] += count + "";
                                } else {
                                    TT[td][tr] += count + "号";
                                }
                            } else {
                                count -= 2;
                            }
                        }
                        count += 2;
                        if (Indexfile == 'index8.php' && count == 100) {
                            count = 110;
                        }
                    }
                }
            }
        }
    }
    //console.log(TT);
}
export function limitednumber2(TT: any, limitednumberline: number[], name: string) {
    var number = 0;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr].includes(name)) {
                TT[td][tr] += limitednumberline[number] + "号";
                number++;
            }
        }
    }
}
export function limitedjustnumber2(TT: any, limitednumberline: number[], name: string) {
    var number = 0;
    for (var td = 1; td < TT.length; td++) {
        for (var tr = 1; tr < TT[td].length; tr++) {
            if (TT[td][tr] == name) {
                if (Indexfile == 'index4_H.php') {
                    TT[td][tr] += limitednumberline[number];
                } else {
                    TT[td][tr] += limitednumberline[number] + "号";
                }
                number++;
            }
        }
    }
}
//TTをリセットする
export function Tablereset(num: number) {
    console.log(num);
    for (let row = 1; row < TT[num].length; row++) {
        for (let Tcolumn = 1; Tcolumn < TT[num][row].length; Tcolumn++) {
            TT[num][row][Tcolumn] = "";
        }
    }
}
//reverseの代わり
export function reverseLine(hairetsu: any, before: number, after: number) {
    var numberOfHairetsu = hairetsu[before].length;
    hairetsu[after] = new Array(numberOfHairetsu);
    for (var a = 0; a < numberOfHairetsu; a++) {
        hairetsu[after][numberOfHairetsu - a - 1] = hairetsu[before][a];
    }
}
export function JRC_station() {
    if (station == '浜松駅') {
        location.href = './index7.php';
    } else if (station == '豊橋駅') {
        location.href = './index7.php?station=toyohashi';
    }
}
export function JRW_station() {
    if (station == '広島駅') {
        location.href = './index4.php?station=hiroshima';
    } else if (station == '岡山駅') {
        location.href = './index4.php?station=okayama';
    } else if (station == '博多駅') {
        location.href = './index10_H.php';
    }
}
export function LineCopy(conLine: any) {
    var NewLine = JSON.parse(JSON.stringify(conLine));
    return NewLine;
}
(window as any).JRC_station = JRC_station;
(window as any).JRW_station = JRW_station;