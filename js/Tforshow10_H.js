JRNameDevide(2);
JRLimitedDevide(2);
JRLimitedDevide(3);
JRLimitedDevide(4);
JRLimitedDevide(5);
allLastShow();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (td < 2) {
            J_hakataTypeColor(Type[td][tr], TType[td][tr], JRSSobj);
        }
        //TypeColorChange(td, tr, 'みずほ', 'orange');
        //TypeColorChange(td, tr, 'さくら', '#FF6FFF');
        TypeColorChange(td, tr, '快速', 'orange');
        TypeColorChange(td, tr, '特急', 'red');
        TwoLetterDistance(td, tr, Type, TType, 0.7, 0);
        var Type_color = document.getElementById('TType' + (td + 1) + (tr + 1));
        var Name = document.getElementById('TName' + (td + 1) + (tr + 1));
        var Name_word = Name.textContent;
        Name.style.color = Type_color.style.color;
        if (Name_word === 'undefined') {
            console.log(":");
        } else if (Name_word.length > 10) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-47%,0%)";
        } else if (Name_word.length > 8) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Name_word.length > 6) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Name_word.length > 4) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
        if (Name_word.length > 0) {
            Name.textContent += '号';
        }
    }
}
for (var tr = 0; tr < 2; tr++) {
    var dName = document.getElementById('TName' + 4 + (tr + 1));
    var dDes = document.getElementById('TDes' + 4 + (tr + 1));
    var number = JRLimitedNumber(3, tr, 1);
    console.log(dName);
    if (dName.textContent.includes('･')) {
        dName.innerHTML = 'ハウステンボス' + number + '<span class="gou">号</span><br>みどり' + number + '号';
        dName.style.fontSize = '20px';
        dName.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
        dName.style.fontWeight = '800px';
    }
    if (dDes.textContent.includes('･')) {
        dDes.innerHTML = 'ハウステンボス' + '<br>' + '佐世保';
        dDes.style.fontSize = '20px';
        dDes.style.transform = "scaleX(1.10)" + "translate(0%,0%)";
        dDes.style.fontWeight = '800px';
    }
}

flagmarkerase(1, 'TType', '*');
Bansenshow(2);