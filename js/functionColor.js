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