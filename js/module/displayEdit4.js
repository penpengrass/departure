var Des_Banner = new Array(Tablenum);
function DesMiddle(td, tr, word) {
    var matches = new Array(orderNum);
    var Desword = new RegExp("(\\D+)" + word + "(\\D+)");
    //console.log(Desword);
    //console.log(Des[td][tr]);
    //(/(\D+)(\d+)両/);
    //matches[tr] = Des[td][tr].match(/(\D+)連絡(\D+)/);
    matches[tr] = Des[td][tr].match(Desword);
    var Tag;
    if (Indexfile == 'index4_O.php') {
        Tag = 'WDes';
    } else {
        Tag = 'TDes';
    }
    //console.log(matches[tr]);
    if (matches[tr]) {
        //console.log(td + ':' + tr + word + 'はマッチする');
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);*/
        console.log(Tag);
        document.getElementById(Tag + (td + 1) + (tr + 1)).innerHTML =
            '<span class="DesLeft" id="DesLeft' + (td + 1) + (tr + 1) + '">' + matches[tr][1] + '</span>' + '<span class="DesMiddle">' + word + '</span>' + '<span id="DesRight' + (td + 1) + (tr + 1) + '">' + matches[tr][2] + '</span>';
        var DesLeft = document.getElementById('DesLeft' + (td + 1) + (tr + 1));
        var DesRight = document.getElementById('DesRight' + (td + 1) + (tr + 1));
        //console.log(DesRight.textContent.length);
        if (DesRight.textContent.length > 3) {
            //console.log(DesRight.textContent.length);
            DesRight.style.display = 'inline-block';
            DesRight.style.transform = "scaleX(0.75)" + "translate(-20%,0%)";
        } else if (station == '糸崎駅' && DesRight.textContent.length > 2) {
            DesRight.style.display = 'inline-block';
            DesRight.style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        }
        if (DesLeft.textContent.length > 2) {
            //console.log(DesRight.textContent.length);
            DesLeft.style.display = 'inline-block';
            DesLeft.style.transform = "scaleX(0.75)" + "translate(20%,0%)";
        }
        if (tr == 0) {
            Des_Banner[td] = DesRight.textContent;
        }
    } else {
        //console.log(td + ':' + tr + word + 'はマッチしない');
    }

}
function Maibara_Banner(td) {
    if (td == 1 && (Type[td - 1][0] == '新快速' || Type[td - 1][0] == '特急')) {
        FDetail(Type[td - 1][0], JRobj, Dtype[0], td - 1, 0, "・");
        Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
        Detail_contents[td - 1] = Detail[0][0];
        console.log("-----1個目の詳細完了------");
    }
    if (td == 3) {
        //console.log(Type[td - 1][0]);
        if (Type[td - 1][0].includes('快速')) {
            stationN = '大垣';
            Des[2][0] = Des_Banner[2];
            FDetail(Type[td - 1][0], JRCeNobj, Dtype[0], td - 1, 0, "・");
            console.log(Dtype);
            DetailReplace(2, 0, '岐阜', '岐阜までの各駅', 1);
            Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
            Detail_contents[td - 1] = Detail[2][0];
            console.log(Detail[2][0]);
            stationN = '米原';
        }
    }
}
function Kitashinchi_Banner(td) {
    if (td == 2 && Type[1][0] == '快速' && Des[1][0] != '塚口') {
        FDetail(Type[td - 1][0], JRobj, Dtype[0], td - 1, 0, "・");
        if (Des[1][0].includes('新三田')) {
            DetailReplace(1, 0, '・三田から各駅', '', 1);
        }
        Detail[td - 1][0] = Detail[td - 1][0].slice(0, -1);
        Detail_contents[td - 1] = Detail[td - 1][0];
    }
}
function Yonago_Banner(td) {
    if (td == 3 && Type[td - 1][0].startsWith('快速')) {
        return;
    }
    FDetail(Type[td - 1][0], JRSaninObj, Dtype[0], td - 1, 0, "・");
    //ここに追加停車駅を入れる必要がある。
    JRSaninAddStop(td - 1);
    LastLetterRemove(td - 1, 0, '・');
    if (Detail[td - 1][0].includes('各駅')) {
        if (Des[td - 1][0] == '新見') {
            Detail[td - 1][0] = '備中神代までの各駅';
        } else {
            Detail[td - 1][0] = Des[td - 1][0] + "までの各駅";
        }
    }
    Detail_contents[td - 1] = Detail[td - 1][0];
}
//特急の列車名の色を変える
function JRWTrainNameColor(td, tr, NameColor, NumberColor, GouColor) {
    var newTrainName;
    //LimitedName[tr] = document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent;
    var LimitedName = document.getElementById('TName' + (td + 1) + '' + (tr + 1)).textContent;
    if (LimitedName != '') {
        var matches = LimitedName.match(/(\D+)(\d+)(\D+)/);
        if (matches) {
            /*console.log(matches[0] + ":" + tr);
            console.log(matches[1] + ":" + tr);
            console.log(matches[2] + ":" + tr);
            console.log(matches[3] + ":" + tr);*/
            newTrainName = `<span class="NewTrainName">${matches[1]}</span>
        <span class="NewTrainNumber">${matches[2]}</span><span class="NewGou">${matches[3]}</span>`;
            document.getElementById('TName' + (td + 1) + '' + (tr + 1)).innerHTML = newTrainName;
            var list = document.getElementsByClassName('NewTrainName');
            for (var ts = 0; ts < list.length; ts++) {
                document.getElementsByClassName('NewTrainName')[ts].style.color = NameColor;
                document.getElementsByClassName('NewTrainNumber')[ts].style.color = NumberColor;
                document.getElementsByClassName('NewGou')[ts].style.color = GouColor;
            }
        }
    }
}
function allJRWTrainNameColor(NameColor, NumberColor, GouColor, start = 0) {
    for (var td = start; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            JRWTrainNameColor(td, tr, NameColor, NumberColor, GouColor);
        }
    }

}