///主にJR西日本で使う
//交互表示
class Altershow {
    //メソッドで使う汎用的な変数をコンストラクタに入れる
    constructor(Tab, td, tr, KeyWord, Word2) {
        this.Tab = Tab;
        this.td = td;
        this.tr = tr;
        this.KeyWord = KeyWord;
        this.Word2 = Word2;
    }
    //メソッドを入れる(コンストラクタの引数はなくてよい,あってもよい)
    UseKeyWord(condition, line) {
        var Cell = document.getElementById(this.Tab);
        if (Cell.innerText.startsWith(this.KeyWord) && Cell.textContent != '') {
            Cell.innerText = this.Word2;
        } else if (condition) {
            Cell.innerHTML = line;
        }
    }
    Desjudge(Des_Line, line) {
        var Cell = document.getElementById(this.Tab);
        if (Des_Line.includes(Cell.textContent)) {
            Cell.textContent = this.Word2;
        } else if (Cell.textContent == this.Word2) {
            Cell.textContent = line;
        }
    }
}
function DesSwitch(Tab, tr, line, KeyWord, ShorterWord) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, ShorterWord);
    var Damy = 0;
    altershow.UseKeyWord(Damy == 0, line);
}
function ATOSShihatsuSwitch(Tab, td, tr, line, KeyWord, Word2) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    altershow.UseKeyWord(Type[td][tr].startsWith('始発'), line);
}
function ChibaSwitch(Tab, tr, line, KeyWord, Word2) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    var Cell = document.getElementById(Tab);
    altershow.UseKeyWord(Cell.textContent == Word2 && line.includes(KeyWord), line);
}
function ChibaSwitch_LiNum(Tab, td, tr, line, KeyWord, Word2) {
    const altershow = new Altershow(Tab, td, tr, KeyWord, Word2);
    var Cell = document.getElementById(Tab);
    altershow.UseKeyWord(Cell.textContent == Word2 && number[td][tr], line);
}
function ChibaSwitch2(Tab, tr, line, Des_Line, Word2) {
    const altershow = new Altershow(Tab, td, tr, Des_Line, Word2);
    var Cell = document.getElementById(Tab);
    altershow.Desjudge(Des_Line, line);
}
function switchTrainInfo2(Tab, tr, line, Longerword, shorterword) {
    var Cell = document.getElementById(Tab);
    // 表示を切り替える
    if (Cell.innerText.startsWith(Longerword)) {
        Cell.innerText = shorterword;
    } else if (Indexfile != 'index3.php' || Type[1][tr].startsWith('始発')) {
        Cell.innerHTML = line;
    }
}
function allswitchMihara() {
    for (var tr = 0; tr < orderNum; tr++) {
        var LDes = document.getElementById('TDes1' + (tr + 1));
        DesSwitch(TDes[0][tr], tr, Des[0][tr], "糸崎連絡", "糸崎");
        if (LDes.textContent.includes('連絡')) {
            DesMiddle(0, tr, '連絡');
        }
    }
}
function allswitchOdawara() {
    for (var tr = 0; tr < orderNum; tr++) {
        //CarsDevide(1);
        ATOSShihatsuSwitch(TType[1][tr], 1, tr, '<span style="color:orange;">始発</span>', "始発", Type[1][tr].replace('始発', ''));
        //console.log(Type[1][tr]);
        var Cell = document.getElementById('TType2' + (tr + 1));
        if (Cell.textContent.includes('特別快速')) {
            Cell.style.transform = "scaleX(0.50)" + "translate(-7%,0%)";
        } else {
            Cell.style.transform = "scaleX(1.00)" + "translate(-0%,0%)";
        }
    }
}
function allswitchChiba() {
    for (var tr = 0; tr < orderNum; tr++) {
        ChibaSwitch2(WDes[0][tr], tr, Des[0][tr], ['久里浜', '大船', '横須賀', '逗子', '品川'], '東京方面');
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '当駅始発', '当駅始発', Cars[0][tr]);
        ATOSShihatsuSwitch(WName[2][tr], 2, tr, '当駅始発', '当駅始発', Cars[2][tr]);
        ATOSShihatsuSwitch(WName[3][tr], 3, tr, '当駅始発', '当駅始発', Cars[3][tr]);
        ATOSShihatsuSwitch(WName[4][tr], 4, tr, '当駅始発', '当駅始発', Cars[4][tr]);
        ATOSShihatsuSwitch(WName[5][tr], 5, tr, '当駅始発', '当駅始発', Cars[5][tr]);
        ChibaSwitch_LiNum(WName[0][tr], 0, tr, number[0][tr] + '号', number[0][tr] + '号', Cars[0][tr]);
        ChibaSwitch_LiNum(WName[4][tr], 4, tr, number[4][tr] + '号', number[4][tr] + '号', Cars[4][tr]);
        ChibaSwitch_LiNum(WName[5][tr], 5, tr, number[5][tr] + '号', number[5][tr] + '号', Cars[5][tr]);
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], '成田エクスプレス', '特急');
        ChibaSwitch(WType[5][tr], tr, Type[5][tr], '成田エクスプレス', '特急');
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], 'しおさい', '特急');
        ChibaSwitch(WType[4][tr], tr, Type[4][tr], 'しおさい', '特急');
        ChibaSwitch2(WDes[3][tr], tr, Des[3][tr], ['成東','東金'], '大網回り');
        ChibaSwitch2(WDes[4][tr], tr, Des[4][tr], ['銚子'], '八日市場回り');
        ChibaSwitch2(WDes[4][tr], tr, Des[4][tr], ['成東'], '八街回り');
        ChibaSwitch2(WDes[5][tr], tr, Des[5][tr], ['銚子', '銚子*'], '成田回り');
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            var LType = document.getElementById('WType' + (td + 1) + (tr + 1));
            var LName = document.getElementById('WName' + (td + 1) + (tr + 1));
            var LDes=document.getElementById('WDes' + (td + 1) + (tr + 1));
            if (LType.textContent.length > 5) {
                LType.style.transform = "scaleX(0.40)" + "translate(-75%,0%)";
            } else {
                LType.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (LDes.textContent.length > 5) {
                LDes.style.transform = "scaleX(0.80)" + "translate(-15%,0%)";
            } else {
                LDes.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (LName.textContent == '当駅始発') {
                LName.style.transform = "scaleX(0.60)" + "translate(-0%,0%)";
            } else {
                LName.style.transform = "scaleX(1.00)" + "translate(0%,0%)";
            }
            if (td == 1) {
                LType.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
            }
        }
    }
}
function allswitch_UTL(){
    for (var tr = 0; tr < orderNum; tr++) {
        ATOSShihatsuSwitch(WName[0][tr], 0, tr, '始発', '始発', Cars[0][tr]);
        ATOSShihatsuSwitch(WName[1][tr], 1, tr, '始発', '始発', Cars[1][tr]);
        ChibaSwitch_LiNum(WName[0][tr], 0, tr, number[0][tr] + '号', number[0][tr] + '号', Cars[0][tr]);
        ChibaSwitch_LiNum(WName[1][tr], 1, tr, number[1][tr] + '号', number[1][tr] + '号', Cars[1][tr]);
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], 'ひたち', '特急');
        ChibaSwitch(WType[1][tr], tr, Type[1][tr], 'ひたち', '特急');
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], 'ときわ', '特急');
        ChibaSwitch(WType[1][tr], tr, Type[1][tr], 'ときわ', '特急');
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], '踊り子', '特急');
        ChibaSwitch(WType[1][tr], tr, Type[1][tr], '踊り子', '特急');
        ChibaSwitch(WType[0][tr], tr, Type[0][tr], '湘南', '特急');
        ChibaSwitch(WType[1][tr], tr, Type[1][tr], '湘南', '特急');
    }
}