//JR西日本の特急名を表で分ける関数 index4.phpのみで使用
function JRLimitedDevide(Tablenum) {
    for (var tr = 0; tr < Type[Tablenum].length; tr++) {
        console.log(tr);
        if (Type[Tablenum][tr].includes('特急')) {
            var Limited = Type[Tablenum][tr].substr(Type[Tablenum][tr].indexOf('急') + 1);
            console.log(Tablenum + ':' + tr + ':' + Limited);
            document.getElementById('TName' + (Tablenum + 1) + '' + (tr + 1)).textContent = Limited;
            //console.log(document.getElementById('TName' + (Tablenum + 1) + '' + (tr + 1)));
            document.getElementById('TName' + (Tablenum + 1) + '' + (tr + 1)).style.textAlign = 'center';
            document.getElementById('TType' + (Tablenum + 1) + '' + (tr + 1)).textContent = '特急';

            Type[Tablenum][tr] = '特急'
        }
    }
    console.log(Tablenum);
}
function JRATOSDevide(td) {
    for (var tr = 0; tr < orderNum; tr++) {
        console.log(Type);
        if (Type[td][tr].includes('線')) {
            var Line = Type[td][tr].split('線')[0];
            var LType = Type[td][tr].split('線')[1];
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent = Line + "線";
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).style.textAlign = 'center';
            document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent = LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes('ライン')) {
            var Line = Type[td][tr].split('ン')[0];
            var LType = Type[td][tr].split('ン')[1];
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent = Line + "ン";
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).style.textAlign = 'center';
            document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent = LType;
            Type[td][tr] = LType;
        } else if (Type[td][tr].includes('ﾗｲﾝ')) {
            var Line = Type[td][tr].split('ﾝ')[0];
            var LType = Type[td][tr].split('ﾝ')[1];
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent = Line + "ﾝ";
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).style.textAlign = 'center';
            document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent = LType;
            Type[td][tr] = LType;
        }
    }
}
//特急の列車名の色を変える
function JRWTrainNameColor(NameColor, NumberColor, GouColor) {
    for (var td = 0; td < Tablenum; td++) {
        var LimitedName = new Array(Type[td].length);
        var matches = new Array(Type[td].length);
        var newTrainName = new Array(Type[td].length);
        for (var tr = 0; tr < Type[td].length; tr++) {
            LimitedName[tr] = document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent;
            matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
            if (matches[tr]) {
                console.log(matches[tr][0] + ":" + tr);
                console.log(matches[tr][1] + ":" + tr);
                console.log(matches[tr][2] + ":" + tr);
                console.log(matches[tr][3] + ":" + tr);
                newTrainName[tr] = `<span class="NewTrainName">${matches[tr][1]}</span>
        <span class="NewTrainNumber">${matches[tr][2]}</span><span class="NewGou">${matches[tr][3]}</span>`;
                document.getElementById('TName' + (td + 1) + '' + (tr + 1)).innerHTML = newTrainName[tr];
                var list = document.getElementsByClassName('NewTrainName');
                for (var ts = 0; ts < list.length; ts++) {
                    document.getElementsByClassName('NewTrainName')[ts].style.color = NameColor;
                    document.getElementsByClassName('NewTrainNumber')[ts].style.color = NumberColor;
                    document.getElementsByClassName('NewGou')[ts].style.color = GouColor;
                }
            }
        }
    }
}
//新幹線と北海道の特急の列車名を分割(引数は表の数)，index3_S.phpを除く
function JRNameDevide(T = Tablenum) {
    for (var td = 0; td < T; td++) {
        var LimitedName = new Array(Type[td].length);
        var matches = new Array(Type[td].length);
        for (var tr = 0; tr < Type[td].length; tr++) {
            LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent;
            //index4_S2.phpとindex7_S1とindex3_S.phpは1，その他は0
            console.log("NonGouflag=" + NonGouflag);
            //Indexfile=='index4_S2.php'||Indexfile=='index7_S1.php'||Indexfilr=='index3_S.php'
            if (NonGouflag == 1) {
                matches[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
            } else {
                matches[tr] = LimitedName[tr].match(/([^0-9]+)(\d+)([^0-9]+)/);
            }

            if (matches[tr]) {
                console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRLimitedNameとマッチする');
                console.log(matches[tr][0] + ":" + tr);
                console.log(matches[tr][1] + ":" + tr);
                console.log(matches[tr][2] + ":" + tr);
                console.log(matches[tr][3] + ":" + tr);
                console.log(matches[tr][1] + matches[tr][1].length);
                var Mlength = 7;
                if (Indexfile == 'index6_S.php' || Indexfile == 'index3_S.php') {
                    Mlength = 9;
                }
                if (matches[tr][1].length < Mlength) {
                    console.log(matches[tr][1]);
                    document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent = matches[tr][1];
                    if (Indexfile == 'index4_S2.php' || Indexfile == 'index7_S1.php' || Indexfile == 'index3_S.php') {
                        document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent = matches[tr][2];
                    } else {
                        document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent = matches[tr][2] + matches[tr][3];
                    }
                    Type[td][tr] = matches[tr][1];
                    if (Type[td][tr].includes('特急')) {
                        document.getElementById('TName' + (td + 1) + '' + (tr + 1)).style.color = 'red';
                    }
                }
            } else {
                console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRNameDevideとマッチしない');
            }
        }
    }
}
//特急などの列車名を取得
function JRLimitedName(td, tr) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent;
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    if (matches[tr]) {
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);
        console.log("Dtypeは" + Dtype);
        var name = matches[tr][1];
    }
    return name;
}
//特急等の号数を取得 tdは何番目の表か
function JRLimitedNumber(td, tr) {
    var LimitedName = new Array(Type[td].length);
    var matches = new Array(Type[td].length);
    LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent;
    console.log(LimitedName[tr]);
    matches[tr] = LimitedName[tr].match(/(\D+)(\d+)(\D+)/);
    if (matches[tr]) {
        console.log(td + 1 + '個目の表の' + (tr + 1) + '番目はマッチする')
        console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);
        console.log(matches[tr][3] + ":" + tr);
        console.log(matches[tr][1] + matches[tr][1].length);
        console.log("Dtypeは" + Dtype);
        var number = matches[tr][2];
    }
    return number;
}
//表の1番下に文章を入れる
function BottomBanner(tag, td, tr, colspan, contents) {
    let element = document.getElementById(tag);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    element.innerHTML = '<td id="TBanner' + td + '' + tr + '" colspan="' + colspan + '"><p2 id="TDetail' + td + '' + tr + '" class="news-banner__content">ここに詳細表示</p3></td>';
    document.getElementById('TBanner' + td + '' + tr).style.overflow = 'hidden';
    document.getElementById('TDetail' + td + '' + tr).textContent = contents;
}
//種別+両数の場合分割
function CarsDevide(td, Ltag = 'TCars') {
    for (var tr = 0; tr < orderNum; tr++) {
        var LType = document.getElementById('TType' + (td + 1) + '' + (tr + 1));
        var matches = LType.textContent.match(/(\D+)(\d+)両/);
        var matches2 = LType.textContent.match(/(\D+)(\d+)号(\d+)両/);
        console.log(LType.textContent);
        var LCars = document.getElementById(Ltag + (td + 1) + '' + (tr + 1));
        if (matches2) {
            console.log(matches2[0]);
            console.log(matches2[1]);
            console.log(matches2[2]);
            console.log(matches2[3]);
            var number = matches[2];
            LCars.textContent = matches2[3] + '両';
            LType.textContent = matches2[1] + matches2[2] + '号';
        } else if (matches) {
            console.log(matches[0]);
            console.log(matches[1]);
            console.log(matches[2]);
            console.log(matches[3]);
            var number = matches[2];
            LCars.textContent = matches[2] + '両';
            LType.textContent = matches[1];
        } else {
            console.log("CarsDevideにマッチしていない" + tr);
        }
    }
}
//条件で色変更
//index3.phpのみで使用
function NameColorchange(td, tag, Name, color) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var local = document.getElementById(tag + (td + 1) + '' + (tr + 1));
        if (local.textContent == Name) {
            local.style.color = color;
        }
    }
}
function Bansenshow(flag = 0) {
    //console.log(doBNumber[1][0].textContent);
    for (td = 0; td < Tablenum; td++) {
        for (tr = 0; tr < Tablenums[td]; tr++) {
            //console.log(doBNumber[td][tr]);
            if (doBNumber[td][tr].textContent != '') {
                var Line = doBNumber[td][tr].textContent;
                if (flag == 0) {
                    doBNumber[td][tr].innerHTML = Line + '<span class="bansen">番線</span>';
                } else if (flag == 1) {
                    doBNumber[td][tr].innerHTML ='<span class="bansen">のりば</span>'+Line;
                }
            }
        }
    }
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
    document.getElementById('Linemark' + td).style.display = 'inline-block';
    document.getElementById('Linemark' + td).style.backgroundColor = backColor;
    document.getElementById('Linemark' + td).style.marginRight = '15px';
    document.getElementById('Linemark' + td).style.padding = '3px';
    document.getElementById('Linemark' + td).style.width = '24px';
    document.getElementById('Linemark' + td).style.height = '24px';
}
//時刻の:を消す
function TimeMarkErase() {
    console.log(Tablenums);
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            if (Type[td][tr] == '') {
                var timeerase = document.getElementById('TTime' + (td + 1) + '' + (tr + 1));
                console.log("空");
                while (timeerase.firstChild) {
                    timeerase.removeChild(timeerase.firstChild);
                }
            }
        }
    }
}
function rowremove(td, header, text) {
    document.getElementById(header + (td + 1)).remove();
    for (var tr = 0; tr < Type[td].length; tr++) {
        document.getElementById(text + (td + 1) + '' + (tr + 1)).remove();
    }
}
function flagmarkerase(td, tag) {
    for (tr = 0; tr < Tablenums[td]; tr++) {
        var str = document.getElementById(tag + (td + 1) + '' + (tr + 1));
        if (str.textContent.includes('*')) {
            str.textContent = str.textContent.slice(0, -1);
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

TimeMarkErase();
var comment = document.getElementById('supplement');