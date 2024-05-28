JRNameDevide();
Bansenshow();
if (station == '新函館北斗駅') {
    for (var tr = 1; tr < 3; tr++) {
        if (Type[0][tr - 1] != '') {
            document.getElementById('TExplain1' + tr).textContent = '10両編成';
        }
    }
    comment.textContent = '番線と停車駅は不正確';
} else if (station == '札幌駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        var LType = document.getElementById('TType' + 2 + (tr + 1));
        var LName = document.getElementById('TName' + 2 + (tr + 1));
        if (LType.textContent.length > 11) {
            LType.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LType = document.getElementById('TType' + 4 + (tr + 1));
        if (LType.textContent.length > 11) {
            LType.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
        }
        var LDes = document.getElementById('TDes' + 5 + (tr + 1));
        if (LDes.textContent.length > 5) {
            console.log(LDes.textContent);
            LDes.style.transform = "scaleX(0.70)" + "translate(-25%,0%)";
        }
        if (LType.textContent.includes('普通')) {
            LType.textContent = '普通';
            LName.textContent = '';
        }
    }
}