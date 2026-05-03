import { StationConfig } from './../types/station';
import { limited } from './../detailStopData/JRdetail';
import { DesMiddle } from "./displayEdit4";
import { trainTables, plainTrainTables, PlainTrainData } from "../types/trainTable";
import "../main";
import { getStationConfig } from '../main';
//JR西日本の特急名を表で分ける関数 index4.phpとindex3.phpで使用
export var LiName = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    LiName[td] = "";
}
export function LastShows(td: number, tr: number) {
    //console.log(TableHour);
    var d_Hour = document.getElementById("THour" + (td + 1) + "" + (tr + 1));
    if (d_Hour && TableHour[td][tr] !== undefined && TableHour[td][tr] != "") {
        document.getElementById("THour" + (td + 1) + "" + (tr + 1))!.textContent =
            TableHour[td][tr];
        document.getElementById("TMin" + (td + 1) + "" + (tr + 1))!.textContent =
            TableMin[td][tr];
    }
    document.getElementById("WType" + (td + 1) + "" + (tr + 1))!.textContent =
        Type[td][tr];
    if (Indexfile == "index6_Chiba.php" || Indexfile == "index4_O.php") {
        document.getElementById("WDes" + (td + 1) + "" + (tr + 1))!.textContent =
            Des[td][tr];
    } else {
        document.getElementById("TDes" + (td + 1) + "" + (tr + 1))!.textContent =
            Des[td][tr];
    }
    document.getElementById("TNum" + (td + 1) + "" + (tr + 1))!.textContent =
        TrackNum[td][tr];
    //ここで次発のために変数に入れる
    //orders[depnum - 1] = Table_Column;
    //orders[depnum] = Table_Column + 1;
    return;
}
export function NewLastShows(td: number, tr: number) {
    //(未反映!!!)インタフェースの情報を入れる。ここの動作確認は完了。書き換えが反映されないため保留。
    if (!plainTrainTables[td].trains[tr]) return;
    document.getElementById("THour" + (td + 1) + "" + (tr + 1))!.innerHTML =
        String(trainTables[td].trains[tr]?.hour) ?? String(plainTrainTables[td].trains[tr].hour);
    document.getElementById("TMin" + (td + 1) + "" + (tr + 1))!.innerHTML =
        trainTables[td].trains[tr]?.minute ?? plainTrainTables[td].trains[tr].minute;
    document.getElementById("WType" + (td + 1) + "" + (tr + 1))!.innerHTML =
        trainTables[td].trains[tr].type;
    if (Indexfile == "index6_Chiba.php" || Indexfile == "index4_O.php") {
        document.getElementById("WDes" + (td + 1) + "" + (tr + 1))!.innerHTML =
            trainTables[td].trains[tr].destination;
    } else {
        document.getElementById("TDes" + (td + 1) + "" + (tr + 1))!.innerHTML =
            trainTables[td].trains[tr].destination;
    }
    document.getElementById("TNum" + (td + 1) + "" + (tr + 1))!.innerHTML =
        trainTables[td].trains[tr]?.trackNumber ?? plainTrainTables[td].trains[tr].trackNumber;

}
export function allLastShow() {
    console.warn("allLastShow");
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            LastShows(td, tr);
            if (company == "JR西日本" && Indexfile != "index4_T.php") {
                DesMiddle(td, tr, "連絡");
                DesMiddle(td, tr, "経由");
                DesMiddle(td, tr, "方面");
            }
        }
    }
    LastShowFlag = 1;
    allTimeMarkErase();
}
export function NewAllLastShow() {
    console.log(plainTrainTables);
    console.log(trainTables)
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            NewLastShows(td, tr);
        }
    }
    LastShowFlag = 1;
    allTimeMarkErase();
}
export function JRLimitedDevide(td: number, align = "center", Tab = "TName") {
    for (var tr = 0; tr < plainTrainTables[td].trains.length; tr++) {
        const _PlainType = plainTrainTables[td].trains[tr]?.type ?? "";
        if (_PlainType.includes("特急")) {
            trainTables[td].trains[tr].type = "特急";
            trainTables[td].trains[tr].trainName = _PlainType.replace('特急', "");
            var Limited = "特急";
            //console.log(td + ':' + tr + ':' + Limited);
            if (Limited != "" && tr == 0) {
                //LiName[td] = Limited;
            }
            //console.log(LiName);
            //console.log(document.getElementById('TName' + (td + 1) + '' + (tr + 1)));
            document.getElementById(Tab + (td + 1) + "" + (tr + 1))!.textContent = trainTables[td].trains[tr]?.trainName ?? "";
            document.getElementById(Tab + (td + 1) + "" + (tr + 1))!.style.textAlign = align;
            //document.getElementById("WType" + (td + 1) + "" + (tr + 1))!.textContent = Limited2;
            //Type[td][tr] = Limited2;
        }
    }
    //console.log(td);
}
//種別の条件によって路線名をnameに入れる(ATOSや岡山駅など)
export function JRLineName(td: number, tr: number, F_Type: string, Name: string, flag: number, Replace_Flag = 0) {
    var LName = document.getElementById("TName" + (td + 1) + (tr + 1)) as HTMLElement | null;
    var _PlainType = plainTrainTables[td].trains[tr]?.type ?? "";
    if (_PlainType.includes(F_Type)) {
        if (Replace_Flag == 1 || (Replace_Flag == 0 && LName?.textContent == "")) {
            LName!.textContent = Name;
            trainTables[td].trains[tr].type = plainTrainTables[td].trains[tr]?.type ?? "";
        }
    }
}
//路線名と種別を分割(湘南新宿ラインなど)
export function JRATOSDevide(td: number) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][tr].includes("線")) {
            var Line = Type[td][tr].split("線")[0];
            var LType = Type[td][tr].split("線")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1))!.textContent =
                Line + "線";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            )!.style.textAlign = "center";
            trainTables[td].trains[tr].type = LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes("ライン")) {
            var Line = Type[td][tr].split("ン")[0];
            var LType = Type[td][tr].split("ン")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1))!.textContent =
                Line + "ン";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            )!.style.textAlign = "center";
            trainTables[td].trains[tr].type = LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes("ﾗｲﾝ")) {
            var Line = Type[td][tr].split("ﾝ")[0];
            var LType = Type[td][tr].split("ﾝ")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1))!.textContent =
                Line + "ﾝ";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            )!.style.textAlign = "center";
            trainTables[td].trains[tr].type = LType;
            Type[td][tr] = LType;
        }
    }
    console.log(Type);
}

//新幹線と北海道の特急の列車名を分割(引数は表の数)，index3_S.phpを除く
export function JRNameDevide(T = Tablenum, config?: StationConfig) {
    config = getStationConfig(window.station, Indexfile);
    const isNonGou = config ? config.nonGouFlag : NonGouflag;
    console.log("isNonGou=" + isNonGou);
    for (var td = 0; td < T; td++) {
        let _data_Length = Tablenums[td];
        var LimitedName = new Array(_data_Length);
        var matches = new Array(_data_Length);
        var matches2 = new Array(_data_Length);
        for (var tr = 0; tr < _data_Length; tr++) {
            LimitedName[tr] = plainTrainTables[td].trains[tr]?.type ?? "";
            matches[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
            matches2[tr] = LimitedName[tr].match(/([^0-9]+)(\d+)(号)/);
            if (matches[tr] || matches2[tr]) {
                matches[tr] = matches[tr] ?? matches2[tr];
                //console.log(td + 1 + "個目の表の" + (tr + 1) + "番目の表示はJRNameDevideとマッチする");
                /*console.log(matches[tr][0] + ":" + tr);
                console.log(matches[tr][1] + ":" + tr);
                console.log(matches[tr][2] + ":" + tr);
                console.log(matches[tr][3] + ":" + tr);
                console.log(matches[tr][1] + matches[tr][1].length);*/
                var Mlength = 7;
                if (
                    Indexfile == "index6_S.php" ||
                    Indexfile == "index3_S.php" ||
                    Indexfile == "index6_Chiba.php" || Indexfile == "index3_T.php"
                ) {
                    Mlength = 9;
                }
                if (matches[tr][1].length < Mlength) {
                    trainTables[td].trains[tr].type = matches[tr][1].replace('*', '').replace('+', '');
                    if (isNonGou == 1) {
                        document.getElementById("WName" + (td + 1) + "" + (tr + 1))!.textContent = matches[tr][2];
                    } else {
                        document.getElementById("WName" + (td + 1) + "" + (tr + 1))!.textContent = matches[tr][2] + "号";
                    }
                    if (Type[td][tr].includes("特急")) {
                        document.getElementById(
                            "TName" + (td + 1) + "" + (tr + 1)
                        )!.style.color = "red";
                    }
                }
                //console.log(ShinNumber);
                //ShinNumber[td][tr] = matches[tr][2];
            } else {
                //console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRNameDevideとマッチしない');
            }
        }
    }
    //console.log(ShinNumber);
}
//新幹線と北海道の特急の列車名を分割(引数は表の数)，index3_S.phpを除く
export function JRNewNameNumberDevide(T = Tablenum) {
    for (var td = 0; td < T; td++) {
        var Order_Length = plainTrainTables[td].trains.length;
        for (var tr = 0; tr < Order_Length; tr++) {
            if (!plainTrainTables[td].trains[tr]) continue;
            var LimitedName = plainTrainTables[td].trains[tr]?.type ?? "";
            var matches;
            //LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1))!.textContent;
            if (!LimitedName.endsWith('号')) {
                matches = LimitedName.match(/(\D+)(\d+)/);
            } else {
                matches = LimitedName.match(/([^0-9]+)(\d+)([^0-9]+)/);
            }
            if (matches) {
                //console.log(td + 1 + "個目の表の" + (tr + 1) + "番目の表示はJRNameDevideとマッチする");
                /*console.log(matches[tr][0] + ":" + tr);
                console.log(matches[tr][1] + ":" + tr);
                console.log(matches[tr][2] + ":" + tr);
                console.log(matches[tr][3] + ":" + tr);
                console.log(matches[tr][1] + matches[tr][1].length);*/
                var Mlength = 7;
                if (Indexfile == "index6_S.php" || Indexfile == "index3_S.php" || Indexfile == "index6_Chiba.php" || Indexfile == "index3_T.php") {
                    Mlength = 9;
                }
                if (matches[1].length < Mlength) {
                    trainTables[td].trains[tr].type = matches[1];
                    if (NonGouflag == 1) {
                        trainTables[td].trains[tr].trainName = matches[2];
                    } else {
                        trainTables[td].trains[tr].trainName = matches[2] + "号";
                    }
                    if (Type[td][tr].includes("特急")) {
                        document.getElementById(
                            "TName" + (td + 1) + "" + (tr + 1)
                        )!.style.color = "red";
                    }
                }
            } else {
                //console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRNameDevideとマッチしない');
            }
        }
    }
    //console.log(ShinNumber);
}
//特急などの列車名を取得
export function JRLimitedName(td: number, tr: number, flag = 0) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    //console.log(Type[td][tr]);
    if (flag == 0) {
        LimitedName[tr] = document.getElementById("TType" + (td + 1) + "" + (tr + 1))!.textContent;
    } else if (flag == 1) {
        LimitedName[tr] = Type[td][tr];
    }
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    if (matches[tr]) {
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);*/
        var name = matches[tr][1];
    } else {
        //console.log("JRLimitedNumberはマッチしない");
    }
    return name;
}
export function JRLimitedNameDevide(td: number, tr: number, name: string, _type = '特急', color = 'red') {
    if (Type[td][tr].includes(name)) {
        document.getElementById("WName" + (td + 1) + "" + (tr + 1))!.textContent = Type[td][tr].replace(_type, '');
        document.getElementById("TType" + (td + 1) + "" + (tr + 1))!.style.color = color;
        trainTables[td].trains[tr].type = _type;

    }
}
export function JRAllShinkansenNumberSet(T: number) {
    for (var td = 0; td < T; td++) {
        for (var tr = 0; tr < plainTrainTables[td].trains.length; tr++) {
            const trainName = trainTables[td].trains[tr].trainName;
            if (typeof trainName === "string") document.getElementById("WName" + (td + 1) + "" + (tr + 1))!.textContent = trainName;
        }
    }
}
//特急等の号数を取得 tdは何番目の表か
export function JRLimitedNumber(td: number, tr: number, flag: number | string = 0) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    var matches2 = new Array(Type[td].length);
    let number;
    if (flag == 0) {
        LimitedName[tr] = Type[td][tr];
    } else {
        LimitedName[tr] = document.getElementById(
            "TName" + (td + 1) + "" + (tr + 1)
        )!.textContent;
    }
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    matches2[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
    if (matches[tr]) {
        /*console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);*/
        number = matches[tr][2];
    } else if (matches2[tr]) {
        /*console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches2[tr][0] + ":" + tr);
        console.log(matches2[tr][1] + ":" + tr);
        console.log(matches2[tr][2] + ":" + tr);
        console.log(matches2[tr][1] + matches2[tr][1].length);*/
        //console.log("Dtypeは" + Dtype);
        number = matches2[tr][2];
    } else {
        //console.log("JRLimitedNumberはマッチしない");
    }
    //console.log(number);
    return number;
}
if (window.Type === undefined) {
    console.error("Typeが未定義です");
}
//特急によって停車駅が異なるときの処理
//numberは号数 Lnameは列車名
export var TrainNumber = new Array(Tablenum);
export var Lname = new Array(Tablenum);
//console.log("detailflag=" + detailflag);
for (var td = 0; td < Tablenum; td++) {
    if (detailflag > 1) {
        TrainNumber[td] = new Array(orderNum);
        Lname[td] = new Array(orderNum);
    }
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (detailflag > 1 && detailflag != 8) {
            //console.log(JRLimitedName(td, tr,1) + ':' + td + ':' + tr)
            TrainNumber[td][tr] = Number.parseInt(JRLimitedNumber(td, tr));
            //console.log(typeof number[td][tr]);
            Lname[td][tr] = JRLimitedName(td, tr, 1);
        } else {
            //console.log(JRLimitedName(td,0,1));
            TrainNumber[td] = Number.parseInt(JRLimitedNumber(td, 0));
            Lname[td] = JRLimitedName(td, 0, 1);
            break;
        }
    }
}
//条件で色変更
//index3.phpのみで使用
export function NameColorchange(td: number, tag: string, Name: string, color: string) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var local = document.getElementById(tag + (td + 1) + "" + (tr + 1));
        if (local != null && local.textContent == Name) {
            local.style.color = color;
        }
    }
}
export function Bansenshow(flag = 0, LLength = Tablenum) {
    //console.log(doBNumber[1][0].textContent);
    for (var td = 0; td < LLength; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            if (TrackNum[td][tr] != "") {
                var Line = TrackNum[td][tr];
                if (flag == 0) {
                    trainTables[td].trains[tr].trackNumber = Line + '<span class="bansen">番線</span>';
                } else if (flag == 1) {
                    trainTables[td].trains[tr].trackNumber = '<span class="bansen">のりば</span>' + Line;
                } else if (flag == 2) {
                    trainTables[td].trains[tr].trackNumber = Line + '<span class="bansen">のりば</span>';
                }
            }
        }
    }
}
export function TwoLetterDistance(td: number, tr: number, Line: string[], Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    if (Line[td][tr].length == Letters) {
        document.getElementById(Tab[td][tr])!.style.letterSpacing =
            LetterSpacing + "em";
        document.getElementById(Tab[td][tr])!.style.textIndent += Indent + "em";
    }
}
export function TypeTwoLetterDistance(td: number, tr: number, Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    const _Type = trainTables[td].trains[tr].type;
    if (_Type.length == Letters) {
        document.getElementById(Tab[td][tr])!.style.letterSpacing =
            LetterSpacing + "em";
        document.getElementById(Tab[td][tr])!.style.textIndent += Indent + "em";
    }
}
export function allTypeTwoLettersDistance(Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TypeTwoLetterDistance(td, tr, Tab, LetterSpacing, Indent, Letters);
        }
    }
}
export function DestinationTwoLetterDistance(td: number, tr: number, Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    var _Destination
    if (trainTables[td].trains[tr].destination) {
        _Destination = trainTables[td].trains[tr].destination;
    } else {
        _Destination = plainTrainTables[td].trains[tr]?.destination ?? "";
    }
    if (_Destination.length == Letters) {
        document.getElementById(Tab[td][tr])!.style.letterSpacing =
            LetterSpacing + "em";
        document.getElementById(Tab[td][tr])!.style.textIndent += Indent + "em";
    }
}
export function allDestinationTwoLettersDistance(Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            DestinationTwoLetterDistance(td, tr, Tab, LetterSpacing, Indent, Letters);
        }
    }
}
export function allTwoLettersDistance(Line: string[], Tab: string[], LetterSpacing: any, Indent: number, Letters = 2) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Line, Tab, LetterSpacing, Indent, Letters);
        }
    }
}
export function FourLetters(td: number, tr: number, reduction: number, translate: number, Tab = "TType", Line = Type, Letters = 4) {
    var Tab_Type = document.getElementById(Tab + (td + 1) + (tr + 1));
    if (Tab_Type != null) {
        if (Tab.includes('Type')) {
            if (trainTables[td].trains[tr].type.length == Letters) {
                Tab_Type.style.transform =
                    "scaleX(" + reduction + ")" + "translate(-" + translate + "%,0%)";
            }
        } else if (Tab.includes('Des')) {
            if (trainTables[td].trains[tr].destination.length == Letters) {
                Tab_Type.style.transform =
                    "scaleX(" + reduction + ")" + "translate(-" + translate + "%,0%)";
            }
        }
    }
}
export function AllWordChange(td: number, tr: number, line: any, Before: string, After: string) {
    if (line[td][tr] == Before) {
        line[td][tr] = After;
    }
}
export function TrainTypeWordChange(td: number, tr: number, Before: string, After: string) {
    const _PlainType = trainTables[td].trains[tr].type ?? plainTrainTables[td].trains[tr].type;
    if (_PlainType == Before) {
        trainTables[td].trains[tr].type = After;
    }
}
export function DestinationWordChange(td: number, tr: number, Before: string, After: string) {
   var _Destination
    if (trainTables[td].trains[tr].destination) {
        _Destination = trainTables[td].trains[tr].destination;
    } else {
        _Destination = plainTrainTables[td].trains[tr]?.destination ?? "";
    }
    if (_Destination == Before) {
        trainTables[td].trains[tr].destination = After;
    }
}
export function AllWordReplace(td: number, tr: number, line: any, keyword: string, AfterWord: string) {
    if (line[td][tr].includes(keyword)) {
        line[td][tr] = line[td][tr].replace(keyword, AfterWord);
    }
    //console.log(Type[td][tr] + 'td=' + td + 'tr=' + tr);
    //console.log(LTab.textContent);
}
export function AllDestinationReplace(td: number, tr: number, keyword: string, AfterWord: string) {
    const _Destination = plainTrainTables[td].trains[tr]?.destination ?? "";
    if (_Destination.includes(keyword)) {
        trainTables[td].trains[tr].destination = _Destination.replace(keyword, AfterWord);
    }
}
export function AllTrainTypeReplace(td: number, tr: number, keyword: string, AfterWord: string) {
    var _train
    if (trainTables[td].trains[tr].type) {
         _train = trainTables[td].trains[tr].type;
    } else {
         _train = plainTrainTables[td].trains[tr]?.type ?? "";
    }
    const _word = String(_train);
    if (_word.includes(keyword)) {
        console.log(_word)
        trainTables[td].trains[tr].type = _word.replace(keyword, AfterWord);
        console.log(trainTables[td].trains[tr].type)
    }
}
export function AllTypeStartWordReplace(td: number, tr: number, keyword: string, AfterWord: string) {
    const _PlainType = plainTrainTables[td].trains[tr]?.type ?? "";
    if (_PlainType.startsWith(keyword)) {
        trainTables[td].trains[tr].type = plainTrainTables[td].trains[tr].type.replace(keyword, AfterWord);
    }
    //console.log(Type[td][tr] + 'td=' + td + 'tr=' + tr);
    //console.log(LTab.textContent);
}
//JSでstyleを変更する
export function AllClassSetting(ClassName: any, styleName: any, change: any) {
    const elements = document.querySelectorAll(ClassName);
    if (!ClassName.startsWith('.')) {
        ClassName = "." + ClassName;
    }
    elements.forEach(el => {
        el.style[styleName] = change;
    });
}
//路線記号追加
export function LineMarkAdd(td: number, Mark: string, backColor: string) {
    var newElement = document.createElement("span"); // p要素作成
    var newContent = document.createTextNode(Mark); // テキストノードを作成
    newElement.appendChild(newContent); // p要素にテキストノードを追加
    newElement.setAttribute("id", "Linemark" + td); // p要素にidを設定
    var parentDiv = document.getElementById("kn" + td);
    if (parentDiv) {
        // 追加
        parentDiv.insertBefore(newElement, parentDiv.firstChild);
        document.getElementById("Linemark" + td)!.style.display = "inline-block";
        document.getElementById("Linemark" + td)!.style.backgroundColor = backColor;
        document.getElementById("Linemark" + td)!.style.marginRight = "15px";
        document.getElementById("Linemark" + td)!.style.padding = "3px";
        document.getElementById("Linemark" + td)!.style.width = "24px";
        document.getElementById("Linemark" + td)!.style.height = "24px";
    }
}
export function holiday_F(station: string) {
    if (holidayflag == 1) {
        document.getElementById("supplement")!.innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement")!.innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}
//時刻の:を消す
export function TimeMarkErase(td: number, tr: number) {
    if (Type[td][tr] == "") {
        var timeerase = document.getElementById("TTime" + (td + 1) + "" + (tr + 1)) as HTMLElement | null;
        while (timeerase?.firstChild) {
            timeerase.removeChild(timeerase.firstChild);
        }
    }
}
export function allTimeMarkErase() {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TimeMarkErase(td, tr);
        }
    }
}
export function rowremove(td: number, header: string, text: string) {
    document.getElementById(header + (td + 1))!.remove();
    for (var tr = 0; tr < Type[td].length; tr++) {
        document.getElementById(text + (td + 1) + "" + (tr + 1))!.remove();
    }
}
export function rowsize(td: number, header: string, text: string, size: any) {
    document.getElementById(header + (td + 1))!.style.width = size;
    for (var tr = 0; tr < Type[td].length; tr++) {
        document.getElementById(text + (td + 1) + "" + (tr + 1))!.style.width = size;
    }
}
export function DestinationSet() {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < plainTrainTables[td].trains.length; tr++) {
            const Min = trainTables[td].trains[tr].minute;
            if (Min == "") {
                trainTables[td].trains[tr].minute = plainTrainTables[td].trains[tr]?.minute ?? "";
                trainTables[td].trains[tr].hour = plainTrainTables[td].trains[tr]?.hour ?? "";
                trainTables[td].trains[tr].trackNumber = plainTrainTables[td].trains[tr]?.trackNumber ?? "";
            }
            if (!plainTrainTables[td].trains[tr]) continue;
            if (trainTables[td].trains[tr].destination != "") continue;
            var Destination = plainTrainTables[td].trains[tr].destination;
            Destination = Destination.replace('*', '');
            Destination = Destination.replace('+', '');
            trainTables[td].trains[tr].destination = Destination;
        }
    }
}
export function TrainTypeSet(td: number) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (!plainTrainTables[td].trains[tr]) continue;
        if (trainTables[td].trains[tr].type != "") continue;
        var Type = plainTrainTables[td].trains[tr]?.type ?? "";
        Type = Type.replace('*', '');
        Type = Type.replace('+', '');
        trainTables[td].trains[tr].type = Type;
    }
}
export function flagmarkerase(td: number, tag: string, mark = "*") {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var str = document.getElementById(tag + (td + 1) + "" + (tr + 1)) as HTMLElement | null;
        if (str?.textContent.includes(mark)) {
            console.log(td + ":" + tr);
            str.textContent = str.textContent.replace(mark, "");
        }
    }
}
// 列を入れ替える関数
export function swapColumns(table: any, col1: any, col2: any) {
    const rows = table.rows;
    const width1 = table.rows[0].cells[col1].getAttribute("width");
    const width2 = table.rows[0].cells[col2].getAttribute("width");
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cell1 = row.cells[col1];
        const cell2 = row.cells[col2];
        if (typeof cell2 == "undefined") {
            continue;
        }
        const tempHtml = cell1.innerHTML;
        const tempId = cell1.id;
        const tempClass = cell1.className;
        cell1.innerHTML = cell2.innerHTML;
        cell1.id = cell2.id;
        cell1.className = cell2.className;
        cell2.innerHTML = tempHtml;
        cell2.id = tempId;
        cell2.className = tempClass;
        table.rows[0].cells[col1].setAttribute("width", width2);
        table.rows[0].cells[col2].setAttribute("width", width1);
    }
}
/**
 * HTMLテーブルの列を移動させる関数
 * @param {HTMLTableElement} table - 操作対象の<table>要素
 * @param {number} fromIndex - 移動させる列のインデックス（0から始まる）
 * @param {number} toIndex - 移動先の列インデックス（0から始まる）
 */
export function moveTableColumn(table: any, fromIndex: any, toIndex: any) {
    // 全ての行（ヘッダー、ボディ、フッター）に対する処理
    // table.rowsは<thead>, <tbody>, <tfoot>内の全ての<tr>要素を含むHTMLCollection
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];

        // 移動させるセル（<td>または<th>）を取得
        // cellsは<tr>内の全てのセル要素を含むHTMLCollection
        const cellToMove = row.cells[fromIndex];

        // 移動元インデックスと移動先インデックスが同じ場合は何もしない
        if (fromIndex === toIndex) {
            continue;
        }

        if (cellToMove) {
            // 移動先のセルを取得
            const targetCell = row.cells[toIndex];

            if (toIndex < fromIndex) {
                // 移動先が移動元より前の場合：
                // 移動先のセルの直前に移動させるセルを挿入
                // targetCellがnull（インデックスが範囲外）の場合、appendChildと同じ動作
                row.insertBefore(cellToMove, targetCell);
            } else {
                // 移動先が移動元より後の場合：
                // 移動先のセルの**次の要素**の直前に挿入することで、targetCellの後に配置される
                // targetCell.nextSibling が null の場合は、末尾に挿入される（appendChildと同じ）
                row.insertBefore(cellToMove, targetCell ? targetCell.nextElementSibling : null);
            }
        }
    }
}