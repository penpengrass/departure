NonGouflag = 1;
if (station == '敦賀駅') {
    company = '北陸新幹線';
    DetailLength = [2];
    var staflag = 0;
    var Dtype = [1];
    TableTitle = ['北陸新幹線 金沢 富山方面', '北陸新幹線 当駅止め', '当駅止め', '特急列車 大阪 名古屋方面', '北陸本線 湖西線', 'ハピラインふくい', '小浜線'];
    var Tshirasagi = [2, 52, 4, 54, 6, 56, 8, 58, 10, 12, 60, 14, 62, 16, 64];
    var Tshirasagi2 = [51, 1, 3, 5, 53, 7, 55, 9, 57, 11, 59, 13, 61, 15, 63];
    TrainNameDevide('特急', 4, 3);
    limitedjustnumber(TT[0], 2, 'つるぎ');
    limitedjustnumber(TT[0], 560, 'はくたか');
    limitedjustnumber(TT[0], 502, 'かがやき');
    limitedjustnumber(TT[1], 1, 'つるぎ');
    limitedjustnumber(TT[1], 561, 'はくたか');
    limitedjustnumber(TT[1], 501, 'かがやき');
    limitedjustnumber2(TT[3], Tshirasagi, '特急しらさぎ');
    limitedjustnumber(TT[3], 2, '特急ｻﾝﾀﾞｰﾊﾞｰﾄﾞ');
    limitedjustnumber2(TT[2], Tshirasagi2, '特急しらさぎ');
    limitedjustnumber(TT[2], 1, '特急ｻﾝﾀﾞｰﾊﾞｰﾄﾞ');
} else if (station == '福井駅') {
    TableTitle = ['北陸新幹線 金沢 富山方面', '北陸新幹線 敦賀方面', '九頭竜湖方面', '金沢 富山方面', '敦賀 大阪 京都方面'];
    var Dtype = [1, 0];
    DetailLength = [2, 2];
    limitedjustnumber(TT[0], 2, 'つるぎ');
    limitedjustnumber(TT[0], 560, 'はくたか');
    limitedjustnumber(TT[0], 502, 'かがやき');
    limitedjustnumber(TT[1], 1, 'つるぎ');
    limitedjustnumber(TT[1], 561, 'はくたか');
    limitedjustnumber(TT[1], 501, 'かがやき');
} else if (station == '金沢駅') {
    var Dtype = [0, 0];
    DetailLength = [2, 2];
    var TsurugiToToyama = [60, 62, 2, 4, 6, 8, 10, 16, 20, 22, 26, 28, 30, 34, 36, 40, 42, 46, 48, 50];
    TableTitle = ['北陸新幹線 福井 敦賀方面', '北陸新幹線 富山 東京方面', 'IRいしかわ鉄道線 松任 小松 福井方面', 'IRいしかわ鉄道線 津幡 高岡 富山方面', '七尾線 津幡 七尾 和倉温泉方面'];
    limitedjustnumber2(TT[1], TsurugiToToyama, 'つるぎ');
    limitedjustnumber(TT[1], 552, 'はくたか');
    limitedjustnumber(TT[1], 500, 'かがやき');
    limitedjustnumber(TT[0], 1, 'つるぎ');
    limitedjustnumber(TT[0], 561, 'はくたか');
    limitedjustnumber(TT[0], 501, 'かがやき');
    limitedjustnumber(TT[4], 1, '特急能登かがり火');
    limitedjustnumber(TT[3], 1, '快速あいの風ﾗｲﾅｰ');
}