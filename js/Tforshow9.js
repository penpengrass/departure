
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[td][tr] == '岡山･高松') {
            Des[td][tr] = '岡山';
        }
        AllWordChange(td, tr, 'TType', '内子線経由普通', '各停(内子経由)', 1, Type);
        AllWordChange(td, tr, 'TType', '内子線経由普通', '各停(内子経由)', 1, Type);
        TypeColorChange(td, tr, '特急', 'red');
    }
}
if (station == '高松駅') {
    allJRSIncludeColor(JRSobj);
    DetailShow(JRSobj, "、");
} else if (station == '松山駅') {
    allJRSIncludeColor(JRSMobj);
    DetailShow(JRSMobj, "、");
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[td][tr] == '岡山' && station == '松山駅') {
            Des[td][tr] = '岡山･高松';
        }
    }
}
console.log(Detail);
for (var tr = 0; tr < Detail.length; tr++) {
    //console.log(Detail[tr][0].slice(-1));
    if (Detail[tr][0].slice(-1) == '、') {
        console.log(tr + 'は読点で終わる');
        Detail[tr][0] = Detail[tr][0].slice(0, -1);
        Detail[tr][0] += 'に停車します。';
        document.getElementById('TDetail' + (tr + 1) + '' + 1).textContent = Detail[tr][0];
    }
}
for (var td = 0; td < 2; td++) {
    if (Type[td][0].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
        var LType = document.getElementById('TType' + (td + 1) + '' + 1);
        var matches = LType.textContent.match(/(\D+)(\d+)号/);
        var NampuNumber = Number(matches[2]);
        if (NampuNumber == 21) {
            NampuNumber += 2;
        }
        document.getElementById('TDetail' + (td + 1) + '' + 1).innerHTML += ' <font color="red">丸亀駅</font>で<font color="red">特急南風' + NampuNumber + '号 高知行き</font>に接続します';
        document.getElementById('TType' + (td + 1) + 2).textContent = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
        Type[td][0] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
    }
}
if (station == '高松駅') {
    console.log(number);
    if (Type[2][0].startsWith('快速ﾏﾘﾝﾗｲﾅｰ') && number[2][0] != 2) {
        document.getElementById('TDetail' + (td + 1) + '' + 1).innerHTML += "  改札寄りの１号車は<font color='red'>グリーン席</font>・<font color='yellow'>指定席</font>、２〜５号車は<font color='yellow'>自由席</font>です。";
    }

    //
    for (var td = 0; td < 2; td++) {
        if (Type[td][1].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
            document.getElementById('TType' + (td + 1) + 2).textContent = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
            Type[td][1] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
        }
    }
} else if (station == '松山駅') {
    var Detail1 = document.getElementById('TDetail11');
    if (Des[0][0] == '岡山･高松') {
        Detail1.textContent = 'しおかぜ号は' + Detail1.textContent + 'いしづち号は宇多津発車後坂出に停車します';
    }
    if (number[0][0] == 102) {
        Detail1.innerHTML += '坂出で<span class="blue">快速「マリンライナー68号」</span>岡山行きに接続します。';
    } else if (number[0][0] == 104) {
        Detail1.innerHTML += '坂出で<span class="blue">快速「マリンライナー70号」</span>岡山行きに接続します。';
    }
}
//JRLimitedDevide(1);
//JRLimitedDevide(3);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < 2; tr++) {
        var dType = document.getElementById('TType' + (td + 1) + (tr + 1));
        var color = dType.style.color;
        console.log(Type[td][tr]);
        if (Type[td][tr] == '各駅停車' || Type[td][tr] == '普通') {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '各駅停車';
            document.getElementById('TType' + (td + 1) + (tr + 1)).textContent = '';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;
        } else if (Type[td][tr].startsWith('各停')) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr];
            document.getElementById('TType' + (td + 1) + (tr + 1)).textContent = '';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = 'skyblue';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
            if (tr == 0) {
                var Detaila = document.getElementById('TDetail' + (td + 1) + (tr + 1));
                var Detail_title = document.getElementById('TDetailtitle' + (td + 1));
                Detaila.textContent = '各駅にとまります';
                if (Des[td][tr].includes('*') && station == '松山駅') {
                    Detaila.innerHTML = ' <span class="red">愛ある伊予灘線</span><span class="blue">伊予長浜経由</span><span class="white">の普通列車です</span>';
                    Detaila.innerHTML += '  伊予市で内子経由伊予大洲行きに接続します。';
                    Detail_title.textContent = '接続案内';
                }else if(Des[td][tr].includes('+')){
                    Detaila.innerHTML = ' <span class="blue">内子線</span><span class="blue">内子経由</span><span class="white">の普通列車です</span>';
                    Detaila.innerHTML += '  伊予市で<span class="red">愛ある伊予灘線</span><span class="blue">伊予長浜経由</span>八幡浜行きに接続します。';
                    Detail_title.textContent = '接続案内';
                }
            }
        } else if (Type[td][tr].startsWith('伊予灘')) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '伊予灘ものがたり';
            document.getElementById('TType' + (td + 1) + (tr + 1)).textContent = '';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = 'skyblue';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-15%,0%)";
        } else if (Type[td][tr].startsWith('快速')) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).textContent = '快速';
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr].slice(2);
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;
            dType.style.backgroundColor = color;
            dType.style.color = 'white';
        } else if (Type[td][tr].startsWith('特急')) {
            dType.textContent = '特急';
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr].slice(2);
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;
            dType.style.backgroundColor = 'red';
            dType.style.color = 'white';
        }
        var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
        if (dName.textContent.startsWith('しおかぜ･いしづち')) {
            console.log(number);
            dName.innerHTML = 'しおかぜ' + '<span class="gou">' + number[td][tr] + '号</span><br>いしづち';
            dName.style.fontSize = '15px';
            dName.style.fontWeight = '800px';
        }
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.4);
    }
}
flagmarkerase(0, 'TDes');
flagmarkerase(1, 'TDes');
flagmarkerase(0, 'TDes','+');
flagmarkerase(1, 'TDes','+');