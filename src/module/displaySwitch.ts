import { TDes } from './../types/constants';
import { TrainNumber } from "./firstDisplayEdit";
import { DesMiddle } from "./displayEdit4";
import { WName, WDes, WType, TType } from "../types/constants";
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
export function JRE_LimitedSwitch(td: number, tr: number, KeyWord: string, Word2: string) {
    const _WType = WType[td][tr];
    const _Type = trainTables[td].trains[tr]?.type ?? ""
    const altershow = new Altershow(_WType, td, tr, KeyWord, Word2);
    var Cell = document.getElementById(_WType);
    altershow.UseKeyWord(Cell!.textContent == Word2 && _Type.includes(KeyWord), _Type);
}
export function ChibaSwitch_LiNum(td: number, tr: number) {
    const _WName = WName[td][tr];
    const _Number = trainTables[td].trains[tr]?.trainNumber ?? NaN
    const _Number_Gou = _Number + '号';
    const _Cars = trainTables[td].trains[tr]?.cars ?? "";
    const altershow = new Altershow(_WName, td, tr, _Number_Gou, _Cars);
    var Cell = document.getElementById(_WName);
    altershow.UseKeyWord(Cell!.textContent == _Cars && _Number > 0, _Number_Gou);
}
export function JRE_HoumenSwitch(td: number, tr: number, Des_Line: string[], Word2: string) {
    const _WDes = WDes[td][tr];
    const _Des = trainTables[td].trains[tr]?.destination ?? "";
    //本来はDes_Line[0]ではなく、Des_Lineにする必要がある。
    const altershow = new Altershow(_WDes, td, tr, Des_Line[0], Word2);
    altershow.Desjudge(Des_Line, _Des);
}
export function allShinSwitch(Tablenum: number, orderNum: number) {
    //var Exp = new Array(Tablenum);
    for (var td = 0; td < Tablenum; td++) {
        //Exp[td] = new Array(orderNum);
        for (var tr = 0; tr < orderNum; tr++) {
            //Exp[td][tr] = document.getElementById('TExplain' + (td + 1) + '' + (tr + 1).textContent);
            const _Jiyuseki = trainTables[td].trains[tr]?.jiyuseki ?? "";
            var _Cars = trainTables[td].trains[tr]?.cars ?? "";
            ShinkansenSwitch('TExplain' + (td + 1) + (tr + 1), td, tr, _Cars, _Jiyuseki);
        }
    }
}
export function allSanyoShinkansenSwitch() {
    allShinSwitch(Tablenum, orderNum);
}
export function allTsurugaShinkansenSwitch() {
    allShinSwitch(1, orderNum);
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
        JRE_HoumenSwitch(0, tr, ['久里浜', '大船', '横須賀', '逗子', '品川'], '東京方面');
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '当駅始発', '当駅始発', trainTables[0].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[2][tr], 2, tr, '当駅始発', '当駅始発', trainTables[2].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[3][tr], 3, tr, '当駅始発', '当駅始発', trainTables[3].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[4][tr], 4, tr, '当駅始発', '当駅始発', trainTables[4].trains[tr]?.cars ?? "");
        ATOSShihatsuSwitch(WName[5][tr], 5, tr, '当駅始発', '当駅始発', trainTables[5].trains[tr]?.cars ?? "");
        ChibaSwitch_LiNum(0, tr);
        ChibaSwitch_LiNum(2, tr);
        ChibaSwitch_LiNum(3, tr);
        ChibaSwitch_LiNum(4, tr);
        ChibaSwitch_LiNum(5, tr);
        JRE_LimitedSwitch(0, tr, '成田エクスプレス', '特急');
        JRE_LimitedSwitch(5, tr, '成田エクスプレス', '特急');
        JRE_LimitedSwitch(0, tr, 'しおさい', '特急');
        JRE_LimitedSwitch(0, tr, 'あずさ･富士回遊', '特急');
        JRE_LimitedSwitch(0, tr, '新宿さざなみ', '特急');
        JRE_LimitedSwitch(0, tr, '新宿わかしお', '特急');
        JRE_LimitedSwitch(2, tr, '新宿さざなみ', '特急');
        JRE_LimitedSwitch(3, tr, '新宿わかしお', '特急');
        JRE_LimitedSwitch(4, tr, 'しおさい', '特急');
        JRE_HoumenSwitch(3, tr, ['成東', '東金'], '大網回り');
        JRE_HoumenSwitch(4, tr, ['銚子'], '八日市場回り');
        JRE_HoumenSwitch(4, tr, ['成東'], '八街回り');
        JRE_HoumenSwitch(5, tr, ['銚子', '銚子*'], '成田回り');
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            var LType = document.getElementById('WType' + (td + 1) + (tr + 1));
            var LName = document.getElementById('WName' + (td + 1) + (tr + 1));
            var LDes = document.getElementById('WDes' + (td + 1) + (tr + 1));
            if (LType!.textContent.length > 6) {
                LType!.style.transform = "scaleX(0.40)" + "translate(-70%,0%)";
            } else if (LType!.textContent.length > 5) {
                LType!.style.transform = "scaleX(0.60)" + "translate(-30%,0%)";
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
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '始発', '始発', _Cars0);
        ChibaSwitch_LiNum(0, tr);
        JRE_LimitedSwitch(0, tr, 'ひたち', '特急');
        JRE_LimitedSwitch(0, tr, 'ときわ', '特急');
        JRE_LimitedSwitch(0, tr, '踊り子', '特急');
        JRE_LimitedSwitch(0, tr, '湘南', '特急');
        if (station != '上野駅') {
            ATOSShihatsuSwitch(WName[1][tr], 1, tr, '始発', '始発', _Cars1);
            ChibaSwitch_LiNum(1, tr);
            JRE_LimitedSwitch(1, tr, 'ひたち', '特急');
            JRE_LimitedSwitch(1, tr, 'ときわ', '特急');
            JRE_LimitedSwitch(1, tr, '踊り子', '特急');
            JRE_LimitedSwitch(1, tr, '湘南', '特急');
        }
    }
}
export function allswitch_Akabane() {
    for (var tr = 0; tr < orderNum; tr++) {
        JRE_LimitedSwitch(2, tr, 'あかぎ', '特急');
        JRE_LimitedSwitch(2, tr, '草津･四万', '特急');
        JRE_LimitedSwitch(4, tr, 'あかぎ', '特急');
        JRE_LimitedSwitch(4, tr, '草津･四万', '特急');
    }
}