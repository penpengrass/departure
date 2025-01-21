JRNameDevide();
allLastShow();
if (station == '新函館北斗駅') {
    for (var tr = 1; tr < 3; tr++) {
        if (Type[0][tr - 1] != '') {
            document.getElementById('TExplain1' + tr).textContent = '10両編成';
        }
    }
    comment.textContent = '番線と停車駅は不正確';
} else if (station == '札幌駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        var LType2 = document.getElementById('TType' + 2 + (tr + 1));
        var LName2 = document.getElementById('TName' + 2 + (tr + 1));
        if (LType2.textContent.length > 11) {
            LType2.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LType4 = document.getElementById('TType' + 4 + (tr + 1));
        if (LType4.textContent.length > 11) {
            LType4.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LDes5 = document.getElementById('TDes' + 5 + (tr + 1));
        if (LDes5.textContent.length > 5) {
            console.log(LDes5.textContent);
            LDes5.style.transform = "scaleX(0.70)" + "translate(-25%,0%)";
        }
        if (LType2.textContent.includes('普通')) {
            LType2.textContent = '普通';
            LName2.textContent = '';
        }
    }
    comment.textContent = 'ライラックの運転日には非対応';
}

Bansenshow();