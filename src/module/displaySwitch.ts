import { TrainNumber } from "./firstDisplayEdit";
import { DesMiddle } from "./displayEdit4";
import { WName, WDes,WType } from "../types/constants";
import { trainTables } from "../types/trainTable";
//主にJR西日本で使う
//交互表示
class Altershow {
    Tab: string;
    td: number;
    tr: number;
    KeyWord: string;
    Word2: string;
    //メソッドで使う汎用的な変数をコンストラクタに入れる
    constructor(Tab: string, td: number, tr: number, KeyWord: string, Word2: string) {
        this.Tab = Tab;
        this.td = td;
        this.tr = tr;
        this.KeyWord = KeyWord;
        this.Word2 = Word2;
    }
    //メソッドを入れる(コンストラクタの引数はなくてよい,あってもよい)
    UseKeyWord(condition: boolean, line: any) {
        var Cell = document.getElementById(this.Tab);
        if (Cell!.innerText.startsWith(this.KeyWord) && Cell!.textContent != '') {
            Cell!.innerText = this.Word2;
        } else if (condition) {
            Cell!.innerHTML = line;

        }
    }
    Desjudge(Des_Line: any, line: any) {
        var Cell = document.getElementById(this.Tab);
        if (Des_Line.includes(Cell!.textContent)) {
            Cell!.textContent = this.Word2;
        } else if (Cell!.textContent == this.Word2) {
            Cell!.textContent = line;
        }
    }
    TwoLineExchange(First: any, Second: any) {
        var Cell = document.getElementById(this.Tab);
        if (Cell!.textContent == First) {
            Cell!.innerText = Second;
        } else if (Cell!.textContent == Second) {
            Cell!.innerHTML = First;
        }
    }
}
//新幹線の自由席と両数を交互に表示させる
export function ShinkansenSwitch(Tab: string, td: number, tr: number, line1: string, line2: string) {
    const altershow = new Altershow(Tab, td, tr, line1, line2);
    var Cell = document.getElementById(Tab);
    //console.log(Cell);
    altershow.TwoLineExchange(line1, line2);
}
export function DesSwitch(Tab: string, td: number, tr: number, line: string, KeyWord: string, ShorterWord: string) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, ShorterWord);
    var Damy = 0;
    altershow.UseKeyWord(Damy == 0, line);
}
export function ATOSShihatsuSwitch(Tab: string, td: number, tr: number, line: string, KeyWord: string, Word2: string) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    altershow.UseKeyWord(Type[td][tr].startsWith('始発'), line);
}
export function ChibaSwitch(Tab: string, td: number, tr: number, line: string, KeyWord: string, Word2: string) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    var Cell = document.getElementById(Tab);
    altershow.UseKeyWord(Cell!.textContent == Word2 && line.includes(KeyWord), line);
}
export function ChibaSwitch_LiNum(Tab: string, td: number, tr: number, line: string, KeyWord: string, Word2: string) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    var Cell = document.getElementById(Tab);
    altershow.UseKeyWord(Cell!.textContent == Word2 && TrainNumber[td][tr], line);
}
export function ChibaSwitch2(Tab: string, td: number, tr: number, line: string, Des_Line: string[], Word2: string) {
    //本来はDes_Line[0]ではなく、Des_Lineにする必要がある。
    const altershow = new Altershow(Tab, td, tr, Des_Line[0], Word2);
    var Cell = document.getElementById(Tab);
    altershow.Desjudge(Des_Line, line);
}
export function allShinSwitch(Tablenum: number, orderNum: number, line: string) {
    //var Exp = new Array(Tablenum);
    for (var td = 0; td < Tablenum; td++) {
        //Exp[td] = new Array(orderNum);
        for (var tr = 0; tr < orderNum; tr++) {
            //Exp[td][tr] = document.getElementById('TExplain' + (td + 1) + '' + (tr + 1).textContent);
            var _Cars = trainTables[td].trains[tr]?.cars ?? "";
            ShinkansenSwitch('TExplain' + (td + 1) + (tr + 1), td, tr, _Cars, line[td][tr]);
        }
    }
}
export function allSanyoShinkansenSwitch() {
    allShinSwitch(Tablenum, orderNum, Jiyuseki);
}
export function allTsurugaShinkansenSwitch() {
    allShinSwitch(1, orderNum, Jiyuseki);
}
export function switchTrainInfo2(Tab: string, tr: number, line: string, Longerword: string, shorterword: string) {
    var Cell = document.getElementById(Tab);
    // 表示を切り替える
    if (Cell!.innerText.startsWith(Longerword)) {
        Cell!.innerText = shorterword;
    } else if (Indexfile != 'index3.php' || Type[1][tr].startsWith('始発')) {
        Cell!.innerHTML = line;
    }
}
export function allswitchMihara() {
    for (var tr = 0; tr < orderNum; tr++) {
        var LDes = document.getElementById('TDes1' + (tr + 1));
        DesSwitch(TDes[0][tr], 0, tr, trainTables[0].trains[tr].destination, "糸崎連絡", "糸崎");
        if (LDes!.textContent.includes('連絡')) {
            DesMiddle(0, tr, '連絡');
        }
    }
}
export function allswitchOdawara() {
    for (var tr = 0; tr < orderNum; tr++) {
        //CarsDevide(1);
        var _Type = trainTables[1].trains[tr].type
        ATOSShihatsuSwitch(TType[1][tr], 1, tr, '<span style="color:orange;">始発</span>', "始発", _Type);
        //console.log(Type[1][tr]);
        var Cell = document.getElementById('TType2' + (tr + 1));
        if (Cell!.textContent.includes('特別快速')) {
            Cell!.style.transform = "scaleX(0.50)" + "translate(-7%,0%)";
        } else {
            Cell!.style.transform = "scaleX(1.00)" + "translate(-0%,0%)";
        }
    }
}
export function allswitchChiba() {
    for (var tr = 0; tr < orderNum; tr++) {
        ChibaSwitch2(WDes[0][tr], 0, tr, Des[0][tr], ['久里浜', '大船', '横須賀', '逗子', '品川'], '東京方面');
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '当駅始発', '当駅始発', trainTables[0].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[2][tr], 2, tr, '当駅始発', '当駅始発', trainTables[2].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[3][tr], 3, tr, '当駅始発', '当駅始発', trainTables[3].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[4][tr], 4, tr, '当駅始発', '当駅始発', trainTables[4].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[5][tr], 5, tr, '当駅始発', '当駅始発', trainTables[5].trains[tr]?.cars ?? "");
        ChibaSwitch_LiNum(WName[0][tr], 0, tr, TrainNumber[0][tr] + '号', TrainNumber[0][tr] + '号', trainTables[0].trains[tr]?.cars ?? "");
        ChibaSwitch_LiNum(WName[4][tr], 4, tr, TrainNumber[4][tr] + '号', TrainNumber[4][tr] + '号', trainTables[4].trains[tr]?.cars ?? "");
        ChibaSwitch_LiNum(WName[5][tr], 5, tr, TrainNumber[5][tr] + '号', TrainNumber[5][tr] + '号', trainTables[5].trains[tr]?.cars ?? "");
        ChibaSwitch(WType[0][tr], 0, tr, trainTables[0].trains[tr]?.type ?? "", '成田エクスプレス', '特急');
        ChibaSwitch(WType[5][tr], 5, tr, trainTables[5].trains[tr]?.type ?? "", '成田エクスプレス', '特急');
        ChibaSwitch(WType[0][tr], 0, tr, trainTables[0].trains[tr]?.type ?? "", 'しおさい', '特急');
        ChibaSwitch(WType[4][tr], 4, tr, trainTables[4].trains[tr]?.type ?? "", 'しおさい', '特急');
        ChibaSwitch2(WDes[3][tr], 3, tr, Des[3][tr], ['成東', '東金'], '大網回り');
        ChibaSwitch2(WDes[4][tr], 4, tr, Des[4][tr], ['銚子'], '八日市場回り');
        ChibaSwitch2(WDes[4][tr], 4, tr, Des[4][tr], ['成東'], '八街回り');
        ChibaSwitch2(WDes[5][tr], 5, tr, Des[5][tr], ['銚子', '銚子*'], '成田回り');
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            var LType = document.getElementById('WType' + (td + 1) + (tr + 1));
            var LName = document.getElementById('WName' + (td + 1) + (tr + 1));
            var LDes = document.getElementById('WDes' + (td + 1) + (tr + 1));
            if (LType!.textContent.length > 5) {
                LType!.style.transform = "scaleX(0.40)" + "translate(-75%,0%)";
            } else {
                LType!.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (LDes!.textContent.length > 5) {
                LDes!.style.transform = "scaleX(0.80)" + "translate(-15%,0%)";
            } else {
                LDes!.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (LName!.textContent == '当駅始発') {
                LName!.style.transform = "scaleX(0.60)" + "translate(-0%,0%)";
            } else {
                LName!.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (td == 1) {
                LType!.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
            }
        }
    }
}
export function allswitch_UTL() {
    for (var tr = 0; tr < orderNum; tr++) {
        var _Cars0 = trainTables[0].trains[tr]?.cars ?? "";
        var _Cars1 = trainTables[1].trains[tr]?.cars ?? "";
        const _Type0 = trainTables[0].trains[tr]?.type ?? "";
        const _Type1 = trainTables[1].trains[tr]?.type ?? "";
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '始発', '始発', _Cars0);
        ChibaSwitch_LiNum(WName[0][tr], 0, tr, TrainNumber[0][tr] + '号', TrainNumber[0][tr] + '号', _Cars0);
        ChibaSwitch(WType[0][tr], 0, tr, _Type0, 'ひたち', '特急');
        ChibaSwitch(WType[0][tr], 0, tr, _Type0, 'ときわ', '特急');
        ChibaSwitch(WType[0][tr], 0, tr, _Type0, '踊り子', '特急');
        ChibaSwitch(WType[0][tr], 0, tr, _Type0, '湘南', '特急');
        if (station != '上野駅') {
            ATOSShihatsuSwitch(WName[1][tr], 1, tr, '始発', '始発', _Cars1);
            ChibaSwitch_LiNum(WName[1][tr], 1, tr, TrainNumber[1][tr] + '号', TrainNumber[1][tr] + '号', _Cars1);
            ChibaSwitch(WType[1][tr], 1, tr, _Type1, 'ひたち', '特急');
            ChibaSwitch(WType[1][tr], 1, tr, _Type1, 'ときわ', '特急');
            ChibaSwitch(WType[1][tr], 1, tr, _Type1, '踊り子', '特急');
            ChibaSwitch(WType[1][tr], 1, tr, _Type1, '湘南', '特急');
        }
    }
}
export function allswitch_Akabane() {
    for (var tr = 0; tr < orderNum; tr++) {
        ChibaSwitch(WType[2][tr], 2, tr, Type[2][tr], 'あかぎ', '特急');
        ChibaSwitch(WType[2][tr], 2, tr, Type[2][tr], '草津･四万', '特急');
        ChibaSwitch(WType[4][tr], 4, tr, Type[4][tr], 'あかぎ', '特急');
        ChibaSwitch(WType[4][tr], 4, tr, Type[4][tr], '草津･四万', '特急');
    }
}