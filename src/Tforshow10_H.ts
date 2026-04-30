import { JRNameDevide, JRLimitedDevide, JRLimitedNumber, NewAllLastShow, TypeTwoLetterDistance, flagmarkerase, Bansenshow, DestinationSet, TrainTypeSet } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { J_hakataTypeColor } from "./typeColor";
import { JRSSobj } from "./detailStopData/JRW_S";
import { plainTrainTables, trainTables } from "./types/trainTable";
NonGouflag = 1;
JRNameDevide(2);
JRLimitedDevide(2);
JRLimitedDevide(3);
JRLimitedDevide(4);
JRLimitedDevide(5);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        const _PlainType = plainTrainTables[td].trains[tr]?.type ?? "";
        if (td < 2) {
            J_hakataTypeColor(Type[td][tr], TType[td][tr], JRSSobj);
        }
        if (_PlainType.startsWith('快速')) {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = _PlainType.replace('快速', '');
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'left';
            trainTables[td].trains[tr].type = '快速';
        }
        //TypeColorChange(td, tr, 'みずほ', 'orange');
        //TypeColorChange(td, tr, 'さくら', '#FF6FFF');
        TypeColorChange(td, tr, '快速', 'yellow');
        TypeColorChange(td, tr, '特急', 'red');
        TypeTwoLetterDistance(td, tr, TType, 0.7, 0);
        var Type_color = document.getElementById('TType' + (td + 1) + (tr + 1));
        var Name = document.getElementById('TName' + (td + 1) + (tr + 1));
        var Name_word = Name!.textContent;
        Name!.style.color = Type_color!.style.color;
        if (_PlainType.startsWith('特急')) {
            if (Name_word === 'undefined') {
                console.log(":");
            } else if (Name_word.length > 10) {
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.50)" + "translate(-30%,0%)";
            } else if (Name_word.length > 8) {
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.60)" + "translate(-10%,0%)";
                //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (Name_word.length > 6) {
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-10%,0%)";
            } else if (Name_word.length > 4) {
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
            }
            if (Name_word.length > 0) {
                Name!.textContent += '号';
            }
        }
    }
    TrainTypeSet(2);
    TrainTypeSet(3);
    TrainTypeSet(4);
    TrainTypeSet(5)
}
for (var tr = 0; tr < 2; tr++) {
    var dName = document.getElementById('TName' + 4 + (tr + 1));
    var dDes = document.getElementById('TDes' + 4 + (tr + 1));
    var number = JRLimitedNumber(3, tr, 1);
    if (dName!.textContent.includes('みどり(リレーかもめ')) {
        trainTables[3].trains[tr].destination = '佐世保･長崎';
    }
    if (Des[3][tr] == '武雄温泉') {
        trainTables[3].trains[tr].destination = '長崎';
    }
    if (dName!.textContent.includes('･')) {
        dName!.innerHTML = 'ハウステンボス' + number + '<span class="gou">号</span><br>みどり' + number + '号';
        dName!.style.fontSize = '20px';
        dName!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
        dName!.style.fontWeight = '800px';
    }
    if (dDes!.textContent.includes('･佐世保')) {
        dDes!.innerHTML = 'ハウステンボス' + '<br>' + '佐世保';
        dDes!.style.fontSize = '20px';
        dDes!.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
        dDes!.style.fontWeight = '800px';
    }
}
DestinationSet();
flagmarkerase(1, 'TType', '*');
Bansenshow(2);
NewAllLastShow();
