company = 'JR東日本';
if (station == '長野駅') {
    company = 'JR東日本 しなの鉄道';
    Devideflag = 0;
    let selectstation = ['軽井沢', '上田', '小諸', '戸倉'];
    DestinationDevide(selectstation, 2, 1);
    TableTitle = ['北しなの線 飯山線 豊野 黒姫 飯山方面', '信越線 しなの鉄道線 篠ノ井 上田 小諸 軽井沢方面', '篠ノ井線 篠ノ井 松本 塩尻 甲府 名古屋方面'];
    limitednumber(TT[2], 2, '特急しなの');
} else if (station == '松本駅') {
    let selectstation = ['中津川', '上松', '名古屋', '木曽福島', '塩尻連絡木曽福島'];
    DestinationDevide(selectstation, 0, 1);
    TableTitle = ['中央東線 塩尻 上諏訪 甲府 新宿方面', '中央西線 塩尻 木曽福島 名古屋方面', '篠ノ井線 篠ノ井 長野方面', '大糸線 穂高 信濃大町 白馬 南小谷方面'];
    limitednumber(TT[1], 2, '特急しなの');
    limitednumber(TT[2], 1, '特急しなの');
    var AzusaNobori = [4, 8, 12, 16, 18, 22, 26, 30, 34, 38, 42, 44, 46, 50, 54, 60];
    limitednumber2(TT[0], AzusaNobori, '特急あずさ');
} else if (station == '横浜駅') {
    TableTitle = ['根岸線 磯子 大船方面', '京浜東北線 東京方面 横浜線 八王子方面', '東海道線 小田原方面', '上野東京ライン 東京 上野方面',
        '横須賀線 久里浜方面 湘南新宿ライン 小田原方面', '横須賀線 東京 千葉方面 湘南新宿ライン 新宿 池袋方面'];
    MinIn = 1;
    var odoriko2 = [4, 8, 10, 2, 16, 4];
    limitednumber2(TT[3], odoriko2, '踊り子');
    var NexOfuna1=[2,6,10,14,18,22,26,30,34,38,40,42,46,50,52,54];
    limitednumber2(TT[4], NexOfuna1, '成田ｴｸｽﾌﾟﾚｽ');
    var NexOfuna2=[1,3,5,7,13,15,19,23,27,31,35,39,43,47,51,53];
    limitednumber2(TT[5], NexOfuna2, '成田ｴｸｽﾌﾟﾚｽ');
}