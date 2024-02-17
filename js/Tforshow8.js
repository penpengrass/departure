JRNameDevide();
Bansenshow();
if (station == '新函館北斗駅') {
    for (var tr = 1; tr < 3; tr++) {
        if (Type[0][tr - 1] != '') {
            document.getElementById('TExplain1' + tr).textContent = '10両編成';
        }
    }
} else if (station == '札幌駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        var LDes = document.getElementById('TDes' + 5 + (tr + 1));
        if (LDes.textContent.length > 5) {
            console.log(LDes.textContent);
            LDes.style.transform = "scaleX(0.70)" + "translate(-25%,0%)";
        }
    }
}