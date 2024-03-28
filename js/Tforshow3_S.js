console.log(JRSBobj);
console.log(Dtype);
DetailShow(JRSBobj, "・");
var annnaka = [602, 604, 608, 610, 612, 614, 618, 622, 626, 628, 630, 632];
var iiyama = [591, 551, 553, 555, 559, 561, 565, 569, 571, 573, 575, 577];
var Nhonjou = [600, 604, 628];
var Nkumagaya = [600, 604, 628];
var ueda = [552, 554, 556, 558, 568, 570, 572, 574, 576, 578];
var sakudaira = [552, 554, 556, 558, 570, 572, 574, 576, 578];
var Ntakasaki=[556];
var onsen=[507,509];
var takefu=[501,517];
console.log(number);
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
