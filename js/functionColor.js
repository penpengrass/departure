//特急や快速の色を変えられる
function TypeColorChange(td, tr, Type, Color) {
    var LType=document.getElementById('TType' + (td + 1) + (tr + 1));
    if (LType.textContent.includes(Type)) {
        document.getElementById('TType' + (td + 1) + (tr + 1)).style.color = Color;
        if(Indexfile=='index3_S.php'){
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = Color;
        }
    }
}
//JR東海の詳細表示限定
function TypeColorChange2(td,Tab, Type, Color) {
    var LType=document.getElementById('TType' + (td + 1) + 1);
    if (LType.textContent.includes(Type)) {
        document.getElementById(Tab + (td + 1)).style.color = Color;
    }
}
function TypeBackColorChange(td, tr, Type, Color) {
    var LType=document.getElementById('TType' + (td + 1) + (tr + 1));
    if (LType.textContent.includes(Type)) {
        document.getElementById('TType' + (td + 1) + (tr + 1)).style.backgroundColor = Color;
    }
}
function JREScolor(ltd, ltr, name, tag, color) {
    var LName = document.getElementById('TType' + (ltd + 1) + (ltr + 1));
    var Lcolor = document.getElementById('TName' + (ltd + 1) + (ltr + 1));
    //console.log(LName.textContent);
    if (LName.textContent == name) {
        LName.innerHTML = tag;
        Lcolor.style.color = color
    }
}