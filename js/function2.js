//JR西日本の特急名を表で分ける関数 index4.phpとindex3.phpで使用
var LiName = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    LiName[td] = "";
}
function LastShows(td, tr) {
    //console.log(TableHour[td][tr]);
    //console.log(document.getElementById("THour" + (td + 1) + "" + (tr + 1)))
    // console.log(TableHour[td][tr]);
    document.getElementById("THour" + (td + 1) + "" + (tr + 1)).textContent =
        TableHour[td][tr];
    document.getElementById("TMin" + (td + 1) + "" + (tr + 1)).textContent =
        TableMin[td][tr];
    document.getElementById("WType" + (td + 1) + "" + (tr + 1)).textContent =
        Type[td][tr];
    if (Indexfile == "index6_Chiba.php" || Indexfile == "index4_O.php") {
        document.getElementById("WDes" + (td + 1) + "" + (tr + 1)).textContent =
            Des[td][tr];
    } else {
        document.getElementById("TDes" + (td + 1) + "" + (tr + 1)).textContent =
            Des[td][tr];
    }
    document.getElementById("TNum" + (td + 1) + "" + (tr + 1)).textContent =
        TrackNum[td][tr];
    //ここで次発のために変数に入れる
    //orders[depnum - 1] = Table_Column;
    //orders[depnum] = Table_Column + 1;
    return;
}
function allLastShow() {
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
function JRLimitedDevide(Tablenum, align = "center", Tab = "TName") {
    for (var tr = 0; tr < Type[Tablenum].length; tr++) {
        if (Type[Tablenum][tr].includes("特急")) {
            var Limited = Type[Tablenum][tr].substr(
                Type[Tablenum][tr].indexOf("急") + 1
            );
            var Limited2 = Type[Tablenum][tr].replace(Limited, "");
            //console.log(Tablenum + ':' + tr + ':' + Limited);
            document.getElementById(
                Tab + (Tablenum + 1) + "" + (tr + 1)
            ).textContent = Limited;
            if (Limited != "" && tr == 0) {
                LiName[Tablenum] = Limited;
            }
            //console.log(LiName);
            //console.log(document.getElementById('TName' + (Tablenum + 1) + '' + (tr + 1)));
            document.getElementById(
                Tab + (Tablenum + 1) + "" + (tr + 1)
            ).style.textAlign = align;
            document.getElementById(
                "WType" + (Tablenum + 1) + "" + (tr + 1)
            ).textContent = Limited2;
            Type[Tablenum][tr] = Limited2;
        }
    }
    //console.log(Tablenum);
}
//種別の条件によって路線名をnameに入れる(ATOSや岡山駅など)
function JRLineName(td, tr, F_Type, Name, flag, Replace_Flag = 0) {
    let LType = document.getElementById("TType" + (td + 1) + (tr + 1));
    let LName = document.getElementById("TName" + (td + 1) + (tr + 1));
    if (flag == 0) {
        if (LType.textContent.includes(F_Type)) {
            if (Replace_Flag == 1 || (Replace_Flag == 0 && LName.textContent == "")) {
                LName.textContent = Name;
            }
        }
    } else if (flag == 1) {
        if (Type[td][tr].includes(F_Type)) {
            if (Replace_Flag == 1 || (Replace_Flag == 0 && LName.textContent == "")) {
                LName.textContent = Name;
            }
        }
    }
}
//路線名と種別を分割(湘南新宿ラインなど)
function JRATOSDevide(td) {
    for (var tr = 0; tr < orderNum; tr++) {
        console.log(Type);
        if (Type[td][tr].includes("線")) {
            var Line = Type[td][tr].split("線")[0];
            var LType = Type[td][tr].split("線")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1)).textContent =
                Line + "線";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            ).style.textAlign = "center";
            document.getElementById("WType" + (td + 1) + "" + (tr + 1)).textContent =
                LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes("ライン")) {
            var Line = Type[td][tr].split("ン")[0];
            var LType = Type[td][tr].split("ン")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1)).textContent =
                Line + "ン";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            ).style.textAlign = "center";
            document.getElementById("WType" + (td + 1) + "" + (tr + 1)).textContent =
                LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes("ﾗｲﾝ")) {
            var Line = Type[td][tr].split("ﾝ")[0];
            var LType = Type[td][tr].split("ﾝ")[1];
            document.getElementById("TName" + (td + 1) + "" + (tr + 1)).textContent =
                Line + "ﾝ";
            document.getElementById(
                "TName" + (td + 1) + "" + (tr + 1)
            ).style.textAlign = "center";
            document.getElementById("WType" + (td + 1) + "" + (tr + 1)).textContent =
                LType;
            Type[td][tr] = LType;
        }
    }
}

//新幹線と北海道の特急の列車名を分割(引数は表の数)，index3_S.phpを除く
function JRNameDevide(T = Tablenum) {
    for (var td = 0; td < T; td++) {
        var LimitedName = new Array(Type[td].length);
        var matches = new Array(Type[td].length);
        for (var tr = 0; tr < Type[td].length; tr++) {
            LimitedName[tr] = Type[td][tr];
            //LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent;
            if (NonGouflag == 1) {
                matches[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
            } else {
                matches[tr] = LimitedName[tr].match(/([^0-9]+)(\d+)([^0-9]+)/);
            }
            if (matches[tr]) {
                console.log(
                    td +
                    1 +
                    "個目の表の" +
                    (tr + 1) +
                    "番目の表示はJRNameDevideとマッチする"
                );
                console.log(matches[tr][0] + ":" + tr);
                console.log(matches[tr][1] + ":" + tr);
                console.log(matches[tr][2] + ":" + tr);
                console.log(matches[tr][3] + ":" + tr);
                console.log(matches[tr][1] + matches[tr][1].length);
                var Mlength = 7;
                if (
                    Indexfile == "index6_S.php" ||
                    Indexfile == "index3_S.php" ||
                    Indexfile == "index6_Chiba.php"
                ) {
                    Mlength = 9;
                }
                console.log(matches[tr][1].length);
                if (matches[tr][1].length < Mlength) {
                    console.log(matches[tr][1]);
                    document.getElementById(
                        "WType" + (td + 1) + "" + (tr + 1)
                    ).textContent = matches[tr][1];
                    if (NonGouflag == 1) {
                        document.getElementById(
                            "WName" + (td + 1) + "" + (tr + 1)
                        ).textContent = matches[tr][2];
                    } else {
                        document.getElementById(
                            "WName" + (td + 1) + "" + (tr + 1)
                        ).textContent = matches[tr][2] + "号";
                    }
                    Type[td][tr] = matches[tr][1];
                    if (Type[td][tr].includes("特急")) {
                        document.getElementById(
                            "TName" + (td + 1) + "" + (tr + 1)
                        ).style.color = "red";
                    }
                }
                console.log(ShinNumber);
                ShinNumber[td][tr] = matches[tr][2];
            } else {
                //console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRNameDevideとマッチしない');
            }
        }
    }
    console.log(ShinNumber);
}
//特急などの列車名を取得
function JRLimitedName(td, tr, flag = 0) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    console.log(Type[td][tr]);
    if (flag == 0) {
        LimitedName[tr] = document.getElementById(
            "TType" + (td + 1) + "" + (tr + 1)
        ).textContent;
    } else if (flag == 1) {
        LimitedName[tr] = Type[td][tr];
    }
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    if (matches[tr]) {
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);
        var name = matches[tr][1];
    } else {
        console.log("JRLimitedNumberはマッチしない");
    }
    return name;
}
function JRLimitedNameDevide(td, tr, name, _type = '特急', color = 'red') {
    if (Type[td][tr].includes(name)) {
        document.getElementById("WName" + (td + 1) + "" + (tr + 1)).textContent = Type[td][tr].replace(_type, '');
        document.getElementById("TType" + (td + 1) + "" + (tr + 1)).style.color = color;
        Type[td][tr] = _type;

    }
}
//特急等の号数を取得 tdは何番目の表か
function JRLimitedNumber(td, tr, flag = 0) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    var matches2 = new Array(Type[td].length);
    let number;
    if (flag == 0) {
        LimitedName[tr] = Type[td][tr];
    } else {
        LimitedName[tr] = document.getElementById(
            "TName" + (td + 1) + "" + (tr + 1)
        ).textContent;
    }
    //console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    matches2[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
    if (matches[tr]) {
        console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);
        number = matches[tr][2];
    } else if (matches2[tr]) {
        console.log(td + 1 + "個目の表の" + (tr + 1) + "番目はマッチする");
        console.log(matches2[tr][0] + ":" + tr);
        console.log(matches2[tr][1] + ":" + tr);
        console.log(matches2[tr][2] + ":" + tr);
        console.log(matches2[tr][1] + matches2[tr][1].length);
        //console.log("Dtypeは" + Dtype);
        number = matches2[tr][2];
    } else {
        //console.log("JRLimitedNumberはマッチしない");
    }
    console.log(number);
    return number;
}
//種別+両数の場合分割
function CarsDevide(td, LCarsTag = "TCars") {
    for (var tr = 0; tr < orderNum; tr++) {
        //var LType = document.getElementById(LTypeTag + (td + 1) + '' + (tr + 1));
        var LType = Type[td][tr];
        var matches = LType.match(/(\D+)(\d+)両/);
        var matches2 = LType.match(/(\D+)(\d+)号(\d+)両/);
        var matches3 = LType.match(/(\D+)(\d+)両(\d+)号/);
        console.log(LType);
        var LCars = document.getElementById(LCarsTag + (td + 1) + "" + (tr + 1));
        if (matches2) {
            console.log(matches2[0]);
            console.log(matches2[1]);
            console.log(matches2[2]);
            console.log(matches2[3]);
            var number = matches[2];
            LCars.textContent = matches2[3] + "両";
            LType = matches2[1] + matches2[2] + "号";
            Type[td][tr] = matches[1];
        } else if (matches3) {
            console.log(matches3[0]);
            console.log(matches3[1]);
            console.log(matches3[2]);
            console.log(matches3[3]);
            var number = matches3[2];
            LCars.textContent = matches3[2] + "両";
            LType = matches[1] + matches3[3] + "号";
            Type[td][tr] = matches[1];
        } else if (matches) {
            console.log(matches[0]);
            console.log(matches[1]);
            console.log(matches[2]);
            console.log(matches[3]);
            var number = matches[2];
            LCars.textContent = matches[2] + "両";
            LType = matches[1];
            Type[td][tr] = matches[1];
        } else {
            console.log("CarsDevideにマッチしていない" + tr);
        }
    }
}
//条件で色変更
//index3.phpのみで使用
function NameColorchange(td, tag, Name, color) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var local = document.getElementById(tag + (td + 1) + "" + (tr + 1));
        if (local.textContent == Name) {
            local.style.color = color;
        }
    }
}
//数字を全角に
function toFullWidth(str) {
    // 半角英数字を全角に変換
    str = str.replace(/[0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
    return str;
}
function Bansenshow(flag = 0, LLength = Tablenum) {
    //console.log(doBNumber[1][0].textContent);
    for (td = 0; td < LLength; td++) {
        for (tr = 0; tr < Tablenums[td]; tr++) {
            //console.log(doBNumber[td][tr]);
            if (TrackNum[td][tr] != "") {
                var Line = TrackNum[td][tr];
                if (flag == 0) {
                    doBNumber[td][tr].innerHTML =
                        Line + '<span class="bansen">番線</span>';
                } else if (flag == 1) {
                    doBNumber[td][tr].innerHTML =
                        '<span class="bansen">のりば</span>' + Line;
                } else if (flag == 2) {
                    doBNumber[td][tr].innerHTML =
                        Line + '<span class="bansen">のりば</span>';
                }
            }
        }
    }
}
function TwoLetterDistance(td, tr, Line, Tab, LetterSpacing, Indent, Letters = 2) {
    if (Line[td][tr].length == Letters) {
        document.getElementById(Tab[td][tr]).style.letterSpacing =
            LetterSpacing + "em";
        document.getElementById(Tab[td][tr]).style.textIndent += Indent + "em";
    }
}
function allTwoLettersDistance(Line, Tab, LetterSpacing, Indent, Letters = 2) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Line, Tab, LetterSpacing, Indent, Letters);
        }
    }
}
function FourLetters(td, tr, reduction, translate, Tab = "TType", Line = Type, Letters = 4) {
    var dType = document.getElementById(Tab + (td + 1) + (tr + 1));
    if (Line[td][tr].length == Letters) {
        dType.style.transform =
            "scaleX(" + reduction + ")" + "translate(-" + translate + "%,0%)";
    }
}
function AllWordChange(td, tr, line, Before, After) {
    if (line[td][tr] == Before) {
        line[td][tr] = After;
    }
}
function AllWordReplace(td, tr, line, keyword, AfterWord) {
    if (line[td][tr].includes(keyword)) {
        line[td][tr] = line[td][tr].replace(keyword, AfterWord);
    }
    //console.log(Type[td][tr] + 'td=' + td + 'tr=' + tr);
    //console.log(LTab.textContent);
}
function AllStartWordReplace(td, tr, line, keyword, AfterWord) {
    if (line[td][tr].startsWith(keyword)) {
        line[td][tr] = line[td][tr].replace(keyword, AfterWord);
    }
    //console.log(Type[td][tr] + 'td=' + td + 'tr=' + tr);
    //console.log(LTab.textContent);
}

//路線記号追加
function LineMarkAdd(td, Mark, backColor) {
    var newElement = document.createElement("span"); // p要素作成
    var newContent = document.createTextNode(Mark); // テキストノードを作成
    newElement.appendChild(newContent); // p要素にテキストノードを追加
    newElement.setAttribute("id", "Linemark" + td); // p要素にidを設定
    var parentDiv = document.getElementById("kn" + td);
    // 追加
    parentDiv.insertBefore(newElement, parentDiv.firstChild);
    document.getElementById("Linemark" + td).style.display = "inline-block";
    document.getElementById("Linemark" + td).style.backgroundColor = backColor;
    document.getElementById("Linemark" + td).style.marginRight = "15px";
    document.getElementById("Linemark" + td).style.padding = "3px";
    document.getElementById("Linemark" + td).style.width = "24px";
    document.getElementById("Linemark" + td).style.height = "24px";
}
function holiday_F(station) {
    if (holidayflag == 1) {
        document.getElementById("supplement").innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}
//時刻の:を消す
function TimeMarkErase(td, tr) {
    if (Type[td][tr] == "") {
        var timeerase = document.getElementById("TTime" + (td + 1) + "" + (tr + 1));
        while (timeerase.firstChild) {
            timeerase.removeChild(timeerase.firstChild);
        }
    }
}
function allTimeMarkErase() {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TimeMarkErase(td, tr);
        }
    }
}
function rowremove(td, header, text) {
    document.getElementById(header + (td + 1)).remove();
    for (var tr = 0; tr < Type[td].length; tr++) {
        document.getElementById(text + (td + 1) + "" + (tr + 1)).remove();
    }
}
function rowsize(td, header, text, size) {
    document.getElementById(header + (td + 1)).style.width = size;
    for (var tr = 0; tr < Type[td].length; tr++) {
        document.getElementById(text + (td + 1) + "" + (tr + 1)).style.width = size;
    }
}
function flagmarkerase(td, tag, mark = "*") {
    for (tr = 0; tr < Tablenums[td]; tr++) {
        var str = document.getElementById(tag + (td + 1) + "" + (tr + 1));
        if (str.textContent.includes(mark)) {
            str.textContent = str.textContent.replace(mark, "");
        }
    }
}
// 列を入れ替える関数
function swapColumns(table, col1, col2) {
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
function moveTableColumn(table, fromIndex, toIndex) {
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
var comment = document.getElementById("supplement");
