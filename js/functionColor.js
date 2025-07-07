//特急や快速の色を変えられる
function TypeColorChange(td, tr, TypeWord, Color) {
    if (Type[td][tr].includes(TypeWord)) {
        document.getElementById('TType' + (td + 1) + (tr + 1)).style.color = Color;
        if (Indexfile == 'index3_S.php' || Indexfile == 'index8.php') {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = Color;
        }
    }
}
//JR東海の詳細表示限定
function TypeColorChange2(td, Tab, TypeWord, Color) {
    if (Type[td][0].includes(TypeWord)) {
        document.getElementById(Tab + (td + 1)).style.color = Color;
    }
}
function TypeBackColorChange(td, tr, TypeWord, Color) {
    if (Type[td][tr].includes(TypeWord)) {
        document.getElementById('TType' + (td + 1) + (tr + 1)).style.backgroundColor = Color;
    }
}
function JREScolor(ltd, ltr, name, tag, color) {
    var LName = document.getElementById('WType' + (ltd + 1) + (ltr + 1));
    var Lcolor = document.getElementById('TName' + (ltd + 1) + (ltr + 1));
    //console.log(LName.textContent);
    if (LName.textContent == name) {
        LName.innerHTML = tag;
        Lcolor.style.color = color
    }
}