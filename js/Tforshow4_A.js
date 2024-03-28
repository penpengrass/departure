JRLimitedDevide(1);
JRLimitedDevide(4);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TwoLetterDistance(td, tr, Type, TType, 0.60, 0);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        var LType = document.getElementById('WType' + (td + 1) + (tr + 1));
        var LocalType = document.getElementById('TType' + (td + 1) + (tr + 1));
        var LocalDes = document.getElementById('TDes' + (td + 1) + (tr + 1));
        if (Type[td][tr] == '普通') {
            LType.style.display = 'inline';
            LType.style.borderColor = 'white';
        } else if (LType != null) {
            LType.style.display = 'inline';
            LType.style.border = 'none';
        }
        DesMiddle(td, tr, '経由');
        DesMiddle(td, tr, '方面');
        if (LocalDes.textContent.length > 7) {
            LocalDes.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
    }
}
if (station == '大阪駅') {
    document.getElementById('HType' + 1).style.width = "25%";
    document.getElementById('HName' + 1).style.width = "25%";
    for (var tr = 0; tr < Tablenums[1]; tr++) {
        var LType = document.getElementById('WType' + 2 + (tr + 1));
        var LTType = document.getElementById('TType' + 2 + (tr + 1));
        if (Type[1][tr] == '普通') {
            //LType.style.paddingLeft = '16px';
            //LType.style.paddingRight = '6px';
        } else if (Type[1][tr] == '丹波路快速') {
            LType.style.display = 'inline-block';
            LType.style.transform = "scaleX(0.60)" + "translate(-30%,0%)";
            LType.style.padding = '0px';
            TypeBackColorChange(1, tr, '丹波路', 'yellow');
            TypeColorChange(1, tr, '丹波路', 'black');
        } else if (Type[1][tr] == '区間快速') {
            LType.style.display = 'inline-block';
            LType.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
            LType.style.padding = '0px';
        }
    }
    holiday_F(station);
}