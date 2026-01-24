function WhetherLocal(td, tr) {
    if (Type[td][tr] == '普通' || Type[td][tr] == '各駅停車' || Type[td][tr] == '普通(当駅始発)') {
        return true;
    }
    return false;
}
function WhetherStartsLocal(td, tr) {
    if (Type[td][tr].startsWith('普通') || Type[td][tr].startsWith('各駅停車')) {
        return true;
    }
    return false;
}
function LocalShow(td, tr, color) {
    if (station == '松山駅' || station == '高松駅') {
        document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '各駅停車';
        document.getElementById('WType' + (td + 1) + (tr + 1)).textContent = '';
        document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
        document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;
    }
    else if (station == '高知駅') {
        document.getElementById('WType' + (td + 1) + (tr + 1)).textContent = '普通';
        document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'center';
        document.getElementById('WType' + (td + 1) + (tr + 1)).style.color = 'lightgreen';
        document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = 'lightgreen';
        if (Type[td][tr].includes('(')) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr].replace('普通', '');
        } else {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '(各駅停車)';
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[td][tr] == '岡山･高松' || Des[td][tr] == '高松･岡山') {
            Des[td][tr] = '岡山';
        }
        AllWordChange(td, tr, Type, '内子線経由普通', '各停(内子経由)');
        AllWordChange(td, tr, Type, '内子線経由普通', '各停(内子経由)');
        AllWordReplace(td, tr, Type, 'あしずり', '特急あしずり', 1, Type);
        if (station == '高知駅') {
            AllWordReplace(td, tr, Type, 'しまんと', '特急しまんと');
        }
        AllStartWordReplace(td, tr, Type, '南風', '特急南風');
    }
}
if (station == '高松駅') {
    //allJRSIncludeColor(JRSobj);
    DetailShow(JRSobj, "、");
} else if (station == '松山駅') {
    //allJRSIncludeColor(JRSMobj);
    DetailShow(JRSMobj, "、");

} else if (station == '高知駅') {
    //allJRSIncludeColor(JRSKobj);
    DetailShow(JRSKobj, "、");
}
for (var td = 0; td < Tablenum; td++) {
    let element = document.getElementById('TRDetail' + (td + 1) + "1");
    let element_Line = document.getElementById('TTLine' + (td + 1) + "2");
    if (WhetherLocal(td, 0) && !Des[td][0].includes('*') && !Des[td][0].includes('+')) {
        var tr = 2;
        element.innerHTML = '<td class="shubetu" id="TType' + (td + 1) + tr + '"><span id="WType' + (td + 1) + tr + '"></span></td>\
        <td class="CName" id="TName' + (td + 1) + tr + '" colspan="4"><span id="WName' + (td + 1) + tr + '"></span></td>\
        <td class="CTime" id="TTime' + (td + 1) + tr + '"><p2 id="THour' + (td + 1) + tr + '"></p2>:<p2 id="TMin' + (td + 1) + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + (td + 1) + tr + '"><span id="WDes' + (td + 1) + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + (td + 1) + tr + '"></td>';
        tr++;
        element_Line.innerHTML = '<td class="shubetu" id="TType' + (td + 1) + tr + '"><span id="WType' + (td + 1) + tr + '"></span></td>\
        <td class="CName" id="TName' + (td + 1) + tr + '" colspan="4"><span id="WName' + (td + 1) + tr + '"></span></td>\
        <td class="CTime" id="TTime' + (td + 1) + tr + '"><p2 id="THour' + (td + 1) + tr + '"></p2>:<p2 id="TMin' + (td + 1) + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + (td + 1) + tr + '"><span id="WDes' + (td + 1) + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + (td + 1) + tr + '"></td>';
        tr--;
    } else {
        Tablenums[td] -= 1;
    }
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Des[td][tr] == '岡山' && station == '松山駅') {
            Des[td][tr] = '岡山･高松';
        } else if (Type[td][tr].includes('しまんと･南風')) {
            Des[td][tr] = '高松･岡山';
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    //console.log(Detail[tr][0].slice(-1));
    LastLetterRemove(td, 0, '、');
    if (Detail[td][0] != '各駅にとまります' && Detail[td][0] != '') {
        Detail[td][0] += 'に停車します。';
    }
    if (!WhetherLocal(td, 0)) {
        document.getElementById('TDetail' + (td + 1) + '' + 1).textContent = Detail[td][0];
    }
}
for (var td = 0; td < 2; td++) {
    if (Type[td][0].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
        var matches = Type[td][0].match(/(\D+)(\d+)号/);
        var NampuNumber = Number(matches[2]);
        document.getElementById('TDetail' + (td + 1) + '' + 1).innerHTML += ' <font color="red">丸亀駅</font>で<font color="red">特急南風' + NampuNumber + '号 高知行き</font>に接続します';
        Type[td][0] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
    }
}
if (station == '高松駅') {
    if (Type[2][0].startsWith('快速ﾏﾘﾝﾗｲﾅｰ') && number[2][0] != 2) {
        document.getElementById('TDetail' + (2 + 1) + '' + 1).innerHTML += "  改札寄りの１号車は<font color='red'>グリーン席</font>・<font color='yellow'>指定席</font>、２〜５号車は<font color='yellow'>自由席</font>です。";
    }

    //
    for (var td = 0; td < 2; td++) {
        for (var tr = 1; tr < 3; tr++) {
            if (Type[td][tr].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
                Type[td][tr] = '快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
            }
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
} else if (station == '高知駅') {
    var Detail1 = document.getElementById('TDetail11');
    if (Des[0][0] == '高松･岡山') {
        Detail1.textContent = '南風号は' + Detail1.textContent + 'しまんと号は宇多津発車後坂出に停車します';
    } else if (Des[0][0] == '岡山') {
        Detail1.innerHTML += '多度津で<span class="lightgreen">快速「サンポート南風リレー号」</span>高松行きに接続します。';
    } else if (Type[0][0] == '特急しまんと8号') {
        Detail1.textContent = Detail1.textContent.replace('宇多津、坂出', '坂出');
        Detail1.innerHTML += '坂出で<span class="blue">快速「マリンライナー70号」</span>岡山行きに接続します。';
    }
    if (Type[1][0] == '快速') {
        Detail[1][0] = '後免までの各駅、後免町、のいち、あかおか、夜須、和食、球場前、球場前から各駅に停車します。';
        document.getElementById('TDetail21').textContent = Detail[1][0];
    } else if (Type[1][0] == '普通(一部通過)') {
        Detail[1][0] = '土佐一宮、土佐大津、後免に停車します';
        document.getElementById('TDetail21').textContent = Detail[1][0];
    } else if (Des[1][0].includes('･奈半利')) {
        Detail[1][0] = '奈半利行きは後免から<span class="orange">快速</span>となります。';
        document.getElementById('TDetail21').innerHTML = Detail[1][0];
    }
}
allLastShow();
//JRLimitedDevide(1);
//JRLimitedDevide(3);
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var dType = document.getElementById('TType' + (td + 1) + (tr + 1));
        if (station == '高知駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], JRSKobj);
            TypeColorChange(td, tr, '特急', 'red');
            TypeColorChange(td, tr, '快速', 'orange');
            TypeBackColorChange(td, tr, '特急', '#202020');
        } else if (station == '高松駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], JRSobj);
        } else if (station == '松山駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], JRSMobj);
        }
        var color = dType.style.color;
        if (WhetherStartsLocal(td, tr)) {
            LocalShow(td, tr, color);
        } else if (Type[td][tr].startsWith('各停')) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr];
            document.getElementById('WType' + (td + 1) + (tr + 1)).textContent = '';
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
                } else if (Des[td][tr].includes('+')) {
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
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = color;
            if (station != '高知駅') {
                dType.style.backgroundColor = color;
                dType.style.color = 'white';
                document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            } else {
                document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = '(一部通過)';
                document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'center';
            }
        } else if (Type[td][tr].startsWith('特急')) {
            dType.textContent = '特急';
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = Type[td][tr].slice(2);
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1)).style.color = 'red';
            if (station != '高知駅') {
                dType.style.backgroundColor = 'red';
                dType.style.color = 'white';
            } else {
                dType.style.color = 'red';
            }
        }
        var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
        if (dName.textContent.startsWith('しおかぜ･いしづち')) {
            console.log(number);
            dName.innerHTML = 'しおかぜ' + '<span class="gou">' + number[td][tr] + '号</span><br>いしづち';
            dName.style.fontSize = '15px';
            dName.style.fontWeight = '800px';
        }
        if (Des[td][tr].length > 5) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.60)" + "translate(-30%,0%)";
        }
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.4);
    }
}

flagmarkerase(0, 'TDes');
flagmarkerase(1, 'TDes');
flagmarkerase(0, 'TDes', '+');
flagmarkerase(1, 'TDes', '+');