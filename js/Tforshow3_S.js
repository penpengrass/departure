JRNameDevide(2);
console.log(JRSBobj);
DetailShow(JRSBobj, "・");
for (var td = 0; td < Tablenum; td++) {
    console.log(orderNum);
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][0] == '') {
            console.log(td + ':' + tr);
            document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = 'お知らせ';
            document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent = '本日の運転は終了しました';
            break;
        } else if (Type[td][tr] != '') {
            document.getElementById('TDetailtitle' + (td + 1) + (tr + 1)).textContent = '停車駅';
            document.getElementById('Ttopic' + (td + 1) + (tr + 1)).textContent = '12両編成';
        }
    }
}
