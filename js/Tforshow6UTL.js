var Mito = ['土浦', '勝田', '水戸', '高萩'];
var Toride = ['取手', '成田'];
function Local_Name(td, tr) {
    return document.getElementById('TName' + (td + 1) + (tr + 1));
}
if (station == '東京駅') {
    rowremove(0, 'Htopic', 'Ttopic');
    rowremove(1, 'Htopic', 'Ttopic');
    document.getElementById('HDes1').style.width = '15%';
    document.getElementById('HDes2').style.width = '15%';
    document.getElementById('HNumber1').style.width = '15%';
    document.getElementById('HNumber2').style.width = '15%';
    comment.textContent = '両数や番線など一部表示不正確';
    for (var tr = 0; tr < 6; tr++) {
        if (Type[0][tr].includes('特急')) {
            Local_Name(0, tr).textContent = '10両';
        } else if (Type[0][tr] != '') {
            Local_Name(0, tr).textContent = '15両';
        }
        JRE6ColorPlusName(0, tr, '普通', 'orange');
        if (Mito.includes(Des[0][tr])) {
            JRE6ColorPlusName(0, tr, '普通', 'blue');
            JRE6ColorPlusName(0, tr, '快速', 'blue');
        } else if (Toride.includes(Des[0][tr])) {
            JRE6ColorPlusName(0, tr, '普通', 'green');
            JRE6ColorPlusName(0, tr, '快速', 'green');
        }
        JRE6ColorPlusName(0, tr, '特急', 'red');
        JRE6ColorPlusName(1, tr, '普通', 'orange');
        JRE6ColorPlusName(1, tr, '快速', 'orange');
        JRE6ColorPlusName(1, tr, '特急', 'red');
        //LType.textContent = keyword;
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            var LoType = document.getElementById('TType' + (td + 1) + (tr + 1));
            var LoName = document.getElementById('TName' + (td + 1) + (tr + 1));
            if (Type[td][tr].includes('始発')) {
                LoType.textContent = Type[td][tr].replace('始発', '');
                Type[td][tr] = Type[td][tr].replace('始発', '');
                LoName.textContent += '始発';
            }
        }
    }
    allalterUTL_setting('特急');
    Bansenshow();
    setInterval(allUTL, 5000);
}