JRLimitedDevide(1);
JRLimitedDevide(4);


for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        //TwoLetterDistance(td, tr, Type, TType, 0.60, 0);
        //TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
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
        if (Des[td][tr].length > 7) {
            LocalDes.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
    }
}
if (station == '大阪駅') {
    document.getElementById('HType' + 1).style.width = "25%";
    document.getElementById('HName' + 1).style.width = "25%";
    for (var tr = 0; tr < Tablenums[1]; tr++) {
        let LType = document.getElementById('WType' + 2 + (tr + 1));
        let LTType = document.getElementById('TType' + 2 + (tr + 1));
        if (Type[1][tr] == '普通') {
            //LType.style.paddingLeft = '16px';
            //LType.style.paddingRight = '6px';
        } else if (Type[1][tr] == '丹波路快速') {
            LType.style.display = 'inline-block';
            LType.style.transform = "scaleX(0.60)" + "translate(-30%,0%)";
            LType.style.padding = '0px';
            LTType.style.color = 'black';
            LTType.style.backgroundColor = 'yellow';
        } else if (Type[1][tr] == '区間快速') {
            LType.style.display = 'inline-block';
            LType.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
            LType.style.padding = '0px';
        }
        AllWordReplace(4, tr, Type, '寝台', '');
        AllWordReplace(1, tr, Des, '新三田', '宝塚方面新三田');
        AllWordReplace(1, tr, Des, '篠山口', '宝塚方面篠山口');
        AllWordReplace(1, tr, Des, '福知山', '宝塚方面福知山');
        AllWordReplace(2, tr, Des, '加古川', '神戸方面加古川');
        AllWordReplace(2, tr, Des, '網干', '姫路方面網干');
        AllWordReplace(2, tr, Des, '上郡', '姫路方面上郡');
        AllWordChange(3, tr, Des, '米原', '京都方面米原');
        AllWordReplace(3, tr, Des, '野洲', '京都方面野洲');
        AllWordReplace(3, tr, Des, '草津', '京都方面草津');
        AllWordReplace(3, tr, Des, '長浜', '米原方面長浜');
        AllWordReplace(3, tr, Des, '近江塩津', '米原方面近江塩津');
    }
    holiday_F(station);
}
allTwoLettersDistance(Type, TType, 0.60, 0);
allTwoLettersDistance(Des, TDes, 1, 0.9);
allLastShow();