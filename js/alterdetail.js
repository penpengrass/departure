
function switchdetail(Tab, td, tr, colspan, Banner_F, Banner_F_Reverse) {
    var TypeFlag = document.getElementById('TType' + td + '' + tr);
    //console.log(TypeFlag);
    // 表示を切り替える
    if (TypeFlag != null) {
        //詳細表示モード
        //console.log("Detailモード" + td);
        //console.log(typeof Des_Banner[td - 1]);
        //console.log(Des[td - 1]);
        if (typeof Des_Banner[td - 1] === 'undefined') {
            //console.log(Des[td - 1][0]);
            Des_Banner[td - 1] = Des[td - 1][0];
        }
        //console.log(Des_Banner);
        //console.log(typeof Banner_F);
        Banner_F(td);
        BottomBanner(Tab, td, tr, colspan, '<span id="Detail_Type' + td + '">' + Type[td - 1][0] + ' ' + LiName[td - 1] +
            '</span> ' + Des_Banner[td - 1] + '行きの停車駅は<span class="orange">' + Detail_contents[td - 1] + '</span>です');
        JTypeColor(Type[td - 1][0], 'Detail_Type' + td, JRobj);
        //BottomBanner("TTLine" + td + "" + tr, td, tr, colspan);
        switch_detail_flag++;
    } else if (TypeFlag == null) {
        //通常表示モード
        //console.log("thirdモード" + td);
        BottomBanner_Reverse(Tab, td, tr);
        JRWTrainNameColor(td - 1, tr - 1, 'orange', 'orange', 'red');
        switch_detail_flag = 0;
        TimeMarkErase(td - 1, tr - 1);
    }
}
function allswitch_detail(Station_Banner) {
    for (var td = 1; td < Tablenum + 1; td++) {
        if (Type[td - 1][0] != '') {
            switchdetail("TTLine", td, orderNum, 5, Station_Banner);
        }
    }
}