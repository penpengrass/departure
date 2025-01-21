company = 'JR四国';
detailflag = 9;
detailLength_one = 1;
if (station == '高松駅') {
    TableTitle = ['琴平 高知方面', '観音寺 松山方面', '児島 岡山方面', '三本松 徳島方面'];
    var Tyosan = ['松山', '観音寺', '伊予西条'];
    var Thonshu = ['岡山', '東京'];
    var Dtype = [0, 0, 0, 0];
    limitednumber(TT[0], 3, '快速ｻﾝﾎﾟｰﾄ南風');
    DestinationDevide(Tyosan, 0, 1);
    DestinationDevide(Thonshu, 0, 2);
    limitedjustnumber(TT[1], 1, '特急いしづち');
    limitednumber(TT[3], 1, '特急うずしお');
    limitednumber(TT[0], 1, '特急しまんと');
    limitednumber(TT[2], 2, 'ﾏﾘﾝﾗｲﾅｰ');
} else if (station == '松山駅' || station == '高知駅') {
    TableTitle = ['1･2のりば', '3･4のりば'];
    if (station == '高知駅') {
        var Dtype = [0, 0];
    } else {
        var Dtype = [1, 0];
    }
    limitednumber(TT[0], 4, '特急しおかぜ');
    limitednumber(TT[1], 1, '特急宇和海');
    limitednumber(TT[0], 1, 'あしずり');
    limitednumber(TT[1], 2, '南風');
    TT[2] = makeemptyTable(TT[0], TT[1]);
    TTconnect(TT[0], TT[1], TT[2]);
    RailNumberDevide(3, 2, 1);
    TT[0] = TT[2];
    //TT[1]=TT[3];
}