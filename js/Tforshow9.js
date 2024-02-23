
TypeColorChange(2, 0, '特急', 'red');
TypeColorChange(2, 1, '特急', 'red');
DetailShow(JRSobj, "、");
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
        var NampuNumber=Number(matches[2]);
        if (NampuNumber == 21) {
            NampuNumber+=2;
        }
        document.getElementById('TDetail' + (td + 1) + '' + 1).innerHTML += ' <font color="red">丸亀駅</font>で<font color="red">特急南風' + NampuNumber + '号 高知行き</font>に接続します';
        document.getElementById('TType' + (td + 1) + 2).textContent = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
        Type[td][0] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
    }
}
console.log(number);
if(Type[2][0].startsWith('快速ﾏﾘﾝﾗｲﾅｰ')&&number[2][0]!=2){
    document.getElementById('TDetail' + (td + 1) + '' + 1).innerHTML +="  改札寄りの１号車は<font color='red'>グリーン席</font>・<font color='yellow'>指定席</font>、２〜５号車は<font color='yellow'>自由席</font>です。";
}

//
for (var td = 0; td < 2; td++) {
    if (Type[td][1].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
        document.getElementById('TType' + (td + 1) + 2).textContent = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
        Type[td][1] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
    }
}
//JRLimitedDevide(1);
//JRLimitedDevide(3);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < 2; tr++) {
        var dType = document.getElementById('TType' + (td + 1) + (tr + 1));
        var color = dType.style.color;
        if (Type[td][tr] == '各駅停車') {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '各駅停車';
            document.getElementById('TType' + (td + 1) + (tr + 1)).textContent = '';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;

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
        if (dName.textContent.startsWith('しおかぜいしづち')) {
            console.log(number);
            dName.innerHTML = 'しおかぜ25<span class="gou">号</span><br>いしづち25';
            dName.style.fontSize = '15px';
            dName.style.fontWeight = '800px';
        }
    }
}