JRNameDevide(Tablenum);
const table1 = document.getElementById("TESTable1");
const table2 = document.getElementById("TESTable2");
const table3 = document.getElementById("TESTable3");
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        if (Type[te][tr] === 'undefined') {
            console.log(":");
        } else if (Type[te][tr].length > 7) {
            document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-50%,0%)";
        }
        if (Des[te][tr] === 'undefined') {
            //console.log(":");
        } else if (Des[te][tr].length > 7) {
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.60)" + "translate(-15%,0%)";
        } else if (Des[te][tr].length > 5) {
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(0%,0%)";
        }
    }
}
allLastShow();
Bansenshow();
flagmarkerase(0, 'WType');
flagmarkerase(1, 'WType');
flagmarkerase(1, 'WType', '+');
if (station == '仙台駅') {
    for (var tr = 0; tr < orderNum; tr++) {
        if (number[0][tr] > 11 && number[0][tr] < 100 && Type[0][tr].includes('はやぶさ')) {
            number[0][tr] += 2;
            document.getElementById('TName' + (1) + (tr + 1)).textContent = number[0][tr] + "号";
        }
    }
    comment.innerHTML += "<br>実際には停車駅表示があるが未実装";
} else if (station == '高崎駅') {
    swapColumns(table1, 0, 1);
    swapColumns(table1, 1, 2);
    swapColumns(table2, 0, 1);
    swapColumns(table2, 1, 2);
    swapColumns(table3, 0, 1);
    swapColumns(table3, 1, 2);
    AllClassSetting('.CDetailtitle', 'textAlign', 'left');
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            if (Type[td][0] == '') {
                console.log(td + ':' + tr);
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = 'お知らせ';
                Detail[td][0] = '本日の運転は終了しました';
                break;
            } else if (Type[td][tr] != '') {
                if (tr == 0) {
                    document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '停車駅';
                }
                document.getElementById('Ttopic' + (td + 1) + (tr + 1)).textContent = '12両編成';
            }
        }
    }
    for (var tr = 0; tr < orderNum; tr++) {
        LimitedNumberPass(0, tr, ShinNumber[0][tr] >= 557 && ShinNumber[0][tr] < 600, ShinNumber);
        LimitedNumberPass(0, tr, ShinNumber[0][tr] >= 571 && ShinNumber[0][tr] < 600, ShinNumber);
        LimitedNumberPass(1, tr, ShinNumber[1][tr] >= 303 && ShinNumber[1][tr] < 400, ShinNumber);
        LimitedNumberPass(1, tr, ShinNumber[1][tr] >= 311 && ShinNumber[1][tr] < 400, ShinNumber);
        LimitedNumberPass(2, tr, ShinNumber[2][tr] >= 312 && ShinNumber[2][tr] < 400, ShinNumber);
        LimitedNumberPass(2, tr, ShinNumber[2][tr] >= 326 && ShinNumber[2][tr] < 400, ShinNumber);
        LimitedNumberPass(2, tr, ShinNumber[2][tr] >= 338 && ShinNumber[2][tr] < 400, ShinNumber);
        LimitedNumberPass(2, tr, ShinNumber[2][tr] >= 556 && ShinNumber[2][tr] < 600, ShinNumber);
    }
    for (var td = 0; td < 3; td++) {
        FDetail(Type[td][0], JRSBobj, Dtype[0], td, 0, "・");
        if (Detail[td][0] != '') {
            Detail[td][0] += Des[td][0];
        }
    }
    Shin_DetailReplace_Set_One(0, annnaka1, '軽井沢', '安中榛名・軽井沢');
    Shin_DetailReplace_Set_One(0, iiyama, '上越妙高', '飯山・上越妙高');
    Shin_DetailReplace_Set_One(0, Karuizawa, '長野', '軽井沢・長野');
    Shin_DetailReplace_Set_One(0, Ueda, '長野', '軽井沢・上田・長野');
    Shin_DetailReplace_Set_One(0, Sakudaira, '長野', '軽井沢・佐久平・上田・長野');
    Shin_DetailReplace_Set_One(1, N_Joumou, '上毛高原・越後湯沢', '越後湯沢');
    Shin_DetailReplace_Set_One(1, N_Echigo, '越後湯沢・浦佐', '浦佐');
    Shin_DetailReplace_Set_One(1, N_Urasa, '浦佐・長岡', '長岡');
    Shin_DetailReplace_Set_One(1, N_Tsubame, '長岡・燕三条', '長岡');
    Shin_DetailReplace_Set_One(2, N_Honjou, '本庄早稲田・熊谷', '熊谷');
    Shin_DetailReplace_Set_One(2, N_Kumagaya, '熊谷・大宮', '大宮');
    Shin_DetailReplace_Set_One(2, Kumagaya, '大宮', '熊谷・大宮');
    for (var td = 0; td < 3; td++) {
        document.getElementById('TDetailtitle' + (td + 1) + '' + (0 + 1)).textContent = Detail[td][0];
        DetailBanner(td, 0, 23, 1, 'TDetailtitle');
    }
    comment.innerHTML = "臨時列車の有無や停車駅は不正確";
}
//種別の色
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        JREScolor(td, tr, 'やまびこ', '<span class="green">やまびこ</span>', yellowgreen);
        JREScolor(td, tr, 'なすの', '<span class="green">なすの</span>', yellowgreen);
        JREScolor(td, tr, 'つばさ', '<span class="orange">つばさ</span>', orange);
        JREScolor(td, tr, 'はやぶさ', '<span class="green">はやぶさ</span>', yellowgreen);
        JREScolor(td, tr, 'はやぶさ･こまち', '<span class="green">はやぶさ</span>･<span class="pink">こまち</span>', pink);
        JREScolor(td, tr, 'やまびこ･つばさ', '<span class="green">やまびこ</span>･<span class="orange">つばさ</span>', orange);
        JREScolor(td, tr, 'とき', '<span class="brown">とき</span>', 'brown');
        JREScolor(td, tr, 'たにがわ', '<span class="brown">たにがわ</span>', 'brown');
        JREScolor(td, tr, 'あさま', '<span class="blue">あさま</span>', '#456f99');
        JREScolor(td, tr, 'はくたか', '<span class="blue">はくたか</span>', '#456f99');
        JREScolor(td, tr, 'かがやき', '<span class="blue">かがやき</span>', '#456f99');
    }
}