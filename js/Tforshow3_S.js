console.log(JRSBobj);
console.log(Dtype);
var YamagataRapid = [123, 157];
var Zaou = [201, 123, 205, 53, 133, 135, 137, 61, 141, 143, 67, 145, 149, 215, 157, 69, 223]
var annnaka = [602, 604, 608, 610, 612, 614, 618, 622, 626, 628, 630, 632];
var iiyama = [591, 551, 553, 555, 559, 561, 565, 569, 571, 573, 575, 577];
var Nhonjou = [600, 604, 628];
var Nkumagaya = [600, 604, 628];
var ueda = [552, 554, 556, 558, 568, 570, 572, 574, 576, 578];
var sakudaira = [552, 554, 556, 558, 570, 572, 574, 576, 578];
var Ntakasaki = [556];
var onsen = [507, 509];
var takefu = [501, 517];
console.log(number);
if (station == '長野駅') {
    DetailShow(JRSBobj, "・");
    for (var tr = 0; tr < orderNum; tr++) {
        if (iiyama.includes(number[0][tr])) {
            DetailReplace(0, tr, '上越妙高', '飯山・上越妙高');
        }
        if (annnaka.includes(number[1][tr])) {
            DetailReplace(1, tr, '高崎', '安中榛名・高崎');
        }
        if (Nhonjou.includes(number[1][tr])) {
            DetailReplace(1, tr, '本庄早稲田・', '');
        }
        if (Nkumagaya.includes(number[1][tr])) {
            DetailReplace(1, tr, '熊谷・', '');
        }
        if (ueda.includes(number[1][tr])) {
            DetailReplace(1, tr, '高崎', '上田・軽井沢・高崎');
        }
        if (sakudaira.includes(number[1][tr])) {
            DetailReplace(1, tr, '上田', '上田・佐久平');
        }
        if (Ntakasaki.includes(number[1][tr])) {
            DetailReplace(1, tr, '高崎・', '');
        }
        if (onsen.includes(number[0][tr])) {
            DetailReplace(0, tr, '金沢', '金沢・加賀温泉・芦原温泉');
        }
        if (Ntakasaki.includes(number[0][tr])) {
            DetailReplace(0, tr, '金沢・福井', '金沢・小松・福井・越前たけふ');
        }
    }
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            if (Type[td][0] == '') {
                console.log(td + ':' + tr);
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = 'お知らせ';
                document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '本日の運転は終了しました';
                break;
            } else if (Type[td][tr] != '') {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = '停車駅';
                document.getElementById('Ttopic' + (td + 1) + (tr + 1)).textContent = '１２両編成';
            }
            TypeColorChange(td, tr, 'かがやき', 'orange');
            TypeColorChange(td, tr, 'はくたか', 'orange');
            TypeColorChange(td, tr, 'あさま', 'red');
            DetailBanner(td, tr, 18);
            TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
        }
    }
} else if (station == '宇都宮駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[1][tr] != '') {
            //console.log(number[1][tr]);
            if (number[1][tr] > 199 || number[1][tr] == 68) {
                document.getElementById('TDetail' + (1 + 1) + (tr + 1)).textContent = '小山・大宮・上野・東京';
            } else {
                document.getElementById('TDetail' + (1 + 1) + (tr + 1)).textContent = '大宮・上野・東京';
            }
        }
        if (Type[0][tr] != '') {
            //console.log(number[0][tr]);
            var LDes = Des[0][tr];
            var LDetail = document.getElementById('TDetail' + (0 + 1) + (tr + 1));
            var LNumber = document.getElementById('TName' + (0 + 1) + (tr + 1));
            if (LNumber.textContent > 130 && LNumber.textContent < 200) {
                number[0][tr] += 2;
                LNumber.textContent = number[0][tr];
            }
            //console.log(LNumber);
            if (LDes == '那須塩原') {
                LDetail.textContent = '次の那須塩原までです';
            } else if (LDes == '郡山') {
                LDetail.textContent = '那須塩原・新白河・郡山';
            } else if (LDes.includes('新庄')) {
                LDetail.textContent = '郡山・福島・米沢・高畠・赤湯・かみのやま温泉・山形・天童・さくらんぼ東根・村山・大石田・新庄';
            }else if(LDes.includes('山形')){
                LDetail.textContent = '郡山・福島・米沢・高畠・赤湯・かみのやま温泉・山形';
            } else if (number[0][tr] > 200) {
                LDetail.textContent = '那須塩原・新白河・郡山・福島・仙台';
            } else if (number[0][tr] < 100) {
                LDetail.textContent = '郡山・福島・仙台・古川・くりこま高原・一ノ関・水沢江刺・北上・新花巻・盛岡';
            }else if(number[0][tr] > 100){
                LDetail.textContent = '郡山・福島・仙台';
            }
        }
        console.log(Type[0][tr]);
        if (YamagataRapid.includes(number[0][tr])) {
            LDetail.textContent = '郡山・福島・米沢・山形・天童・さくらんぼ東根・村山・大石田・新庄';
        }
        if (Zaou.includes(number[0][tr])&&!Type[0][tr].includes('つばさ')) {
            DetailReplace(0, tr, '福島', '福島・白石蔵王', 2);
        }else if(Zaou.includes(number[0][tr])){
            LDetail.textContent+='　やまびこは福島発車後白石蔵王にも停まります';
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][0] == '') {
            console.log(td + ':' + tr);
            document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = 'お知らせ';
            document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '本日の運転は終了しました';
            break;
        } else if (Type[td][tr] != '') {
            document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = '停車駅';
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).textContent = '１０両編成';
        }
        TypeColorChange(td, tr, 'なすの', 'orange');
        TypeColorChange(td, tr, 'つばさ', 'orange');
        TypeColorChange(td, tr, 'やまびこ', 'red');
        JREScolor(td, tr, 'やまびこ･つばさ', '<span class="red">やまびこ</span>･<span class="orange">つばさ</span>', orange);
        FourLetters(td, tr, 0.6, 30, 'TType', 8);
        DetailBanner(td, tr, 18);
        TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
    }
}
flagmarkerase(0, 'TType');
flagmarkerase(1, 'TType');
flagmarkerase(1, 'TType', '+');