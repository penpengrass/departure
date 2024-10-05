//カラーコード(仮)
var Sotobo_Color = 'red';
JRNameDevide(6);
document.getElementById("WDir1").textContent = "東京･横浜･大船方面";
document.getElementById("WDir2").textContent = "西船橋･秋葉原方面";
document.getElementById("WDir3").textContent = "君津方面";
document.getElementById("WDir4").textContent = "大網方面";
document.getElementById("WDir5").textContent = "佐倉･銚子方面";
document.getElementById("WDir6").textContent = "成田空港･銚子方面";
for (var tr = 0; tr < 3; tr++) {
    JRE6ColorPlusName(0, tr, '快速', 'blue');
    JRE6ColorPlusName(2, tr, '快速', 'blue');
    JRE6ColorPlusName(2, tr, '普通', 'blue');
    JRE6ColorPlusName(3, tr, '普通', Sotobo_Color);
    JRE6ColorPlusName(3, tr, '快速', Sotobo_Color);
    JRE6ColorPlusName(4, tr, '快速', 'orange');
    JRE6ColorPlusName(4, tr, '普通', 'orange');
    JRE6ColorPlusName(5, tr, '快速', 'green');
    JRE6ColorPlusName(5, tr, '普通', 'green');
}
for (var td = 0; td < 6; td++) {
    for (var tr = 0; tr < 3; tr++) {
        CarsDefine(td, tr, '快速', '', 15);
        CarsDefine(td, tr, '快速*', '', 11);
        CarsDefine(td, tr, '普通', '', 8);
        CarsDefine(td, tr, '成田エクスプレス', '', 12);
        CarsDefine(td, tr, 'しおさい', '', 6);
    }
}
console.log(Cars);
for (var td = 0; td < 6; td++) {
    for (var tr = 0; tr < 3; tr++) {
        var L_WName = document.getElementById('WName' + (td + 1) + (tr + 1));
        var L_WType = document.getElementById('WType' + (td + 1) + (tr + 1));
        var L_PName = document.getElementById('PName' + (td + 1) + (tr + 1));
        var L_PType = document.getElementById('PType' + (td + 1) + (tr + 1));
        JRE6ColorPlusName(td, tr, '成田エクスプレス', 'red');
        JRE6ColorPlusName(td, tr, 'しおさい', 'red');
        if (td > 3) {
            L_WType.textContent = L_WType.textContent.replace('成田線経由', '');
            Type[td][tr] = Type[td][tr].replace('成田線経由', '');
            L_WType.textContent = L_WType.textContent.replace('総武本線経由', '');
            Type[td][tr] = Type[td][tr].replace('総武本線経由', '');
        }
        if (td == 5) {
            Des[td][tr] = Des[td][tr].replace('*', '');
        }
        CarsInto(td, tr, 'WName');
        if (Type[td][tr].startsWith('始発')) {
            L_WName.textContent = '当駅始発';
            L_WName.style.transform = "scaleX(0.60)" + "translate(-0%,0%)";
            L_WType.textContent = L_WType.textContent.replace('始発', '');
        }
        if (td == 1) {
            L_WType.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
        }
        if (Type[td][tr].length > 6) {
            L_WType.style.transform = "scaleX(0.40)" + "translate(-75%,0%)";
        }
    }
    flagmarkerase(td, 'WDes');
    flagmarkerase(td, 'WType');
}
setInterval(allswitchChiba, 5000);
Bansenshow();