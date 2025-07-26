company = 'JR東日本';
if (station == '長野駅') {
    company = 'JR東日本 しなの鉄道';
    Devideflag = 0;
    let selectstation = ['軽井沢', '上田', '小諸', '小諸*', '戸倉', '戸倉*'];
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
    limitedjustnumber2(TT[0], AzusaNobori, '特急あずさ');
    if (holidayflag == 1) {
        TT[2][5][1] = '普通';
        TT[2][6][1] = '30';
        TT[2][7][1] = '長野';
        TT[2][8][1] = '2';
        TT[2][5][2] = '';
        TT[2][6][2] = '';
        TT[2][7][2] = '';
        TT[2][8][2] = '';
        TT[3][25][2] = '快速ﾘｿﾞｰﾄﾋﾞｭｰふるさと';
        TT[3][26][2] = '43';
        TT[3][27][2] = '南小谷';
        TT[3][28][2] = '2';
        TT[2][45][2] = '快速ﾘｿﾞｰﾄﾋﾞｭｰふるさと';
        TT[2][46][2] = '10';
        TT[2][47][2] = '長野';
        TT[2][48][2] = '2';
        TT[2][45][3] = '普通';
        TT[2][46][3] = '34';
        TT[2][47][3] = '長野';
        TT[2][48][3] = '3';
    }
} else if (station == '横浜駅') {
    TableTitle = ['根岸線 磯子 大船方面', '京浜東北線 東京方面 横浜線 八王子方面', '東海道線 小田原方面', '上野東京ライン 東京 上野方面',
        '横須賀線 久里浜方面 湘南新宿ライン 小田原方面', '横須賀線 東京 千葉方面 湘南新宿ライン 新宿 池袋方面'];
    MinIn = 1;
    var odoriko1 = [3, 7, 1, 13, 15];
    limitednumber2(TT[2], odoriko1, '踊り子');
    var odoriko2 = [4, 8, 10, 2, 16, 4];
    limitednumber2(TT[3], odoriko2, '踊り子');
    var NexOfuna1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 52, 54];
    limitednumber2(TT[4], NexOfuna1, '成田ｴｸｽﾌﾟﾚｽ');
    var NexOfuna2 = [1, 3, 5, 7, 13, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 53];
    limitednumber2(TT[5], NexOfuna2, '成田ｴｸｽﾌﾟﾚｽ');
} else if (station == '東京駅') {
    TableTitle = ['上野東京ライン発車時刻', '東海道線発車時刻'];
    limitednumber(TT[0], 1, 'ひたち');
    limitednumber(TT[0], 51, 'ときわ');
    limitednumber(TT[1], 2, 'ひたち');
    limitednumber(TT[1], 52, 'ときわ');
    limitednumber(TT[1], 1, '湘南');
    detailflag = 2;
} else if (station == '品川駅') {
    TableTitle = ['東海道線発車時刻', '上野東京ライン発車時刻', '横須賀線', '総武快速線'];
    limitednumber(TT[1], 1, 'ひたち');
    limitednumber(TT[1], 51, 'ときわ');
    limitednumber(TT[0], 2, 'ひたち');
    limitednumber(TT[0], 52, 'ときわ');
    limitednumber(TT[0], 1, '湘南');
    limitednumber(TT[2], 2, '成田ｴｸｽﾌﾟﾚｽ');
    limitednumber(TT[3], 1, '成田ｴｸｽﾌﾟﾚｽ');
    detailflag = 2;
} else if (station == '上野駅') {
    TableTitle = ['上野東京ライン発車時刻', '宇都宮線', '高崎線', '常磐線', '常磐線特急'];
    TrainNameDevide('特急', 3, 4);
    limitednumber(TT[4], 1, 'ひたち');
    limitednumber(TT[4], 51, 'ときわ');
    limitednumber(TT[0], 2, 'ひたち');
    limitednumber(TT[0], 52, 'ときわ');
    limitednumber(TT[2], 1, 'あかぎ');
} else if (station == '新宿駅') {
    TrainNameDevide('特急', 2, 4);
    limitednumber(TT[4], 1, ['特急あずさ', '特急かいじ']);
    limitednumber(TT[4], 1, 'はちおうじ');
    limitednumber(TT[4], 1, 'おうめ');
    limitednumber(TT[9], 21, '湘南');
    TableTitle = ['三鷹方面', '千葉方面', '高尾方面', '東京方面', '中央線特急 松本方面', '成田エクスプレス',
        '埼京線 池袋 大宮方面', '湘南新宿ライン 大宮方面', '埼京線 新木場方面', '湘南新宿ライン 小田原方面'];
} else if (station == '赤羽駅') {
    TableTitle = ['上野･東京･横浜･磯子方面', '南浦和･大宮方面', '上野方面', '逗子方面', '高崎方面', '宇都宮方面', '新木場方面', '川越方面'];
    var Takasaki = ['宇都宮', '小金井', '古河'];
    limitednumber(TT[2], 2, '草津･四万');
    limitednumber(TT[4], 1, '草津･四万');
    limitednumber(TT[2], 2, 'あかぎ');
    limitednumber(TT[4], 1, 'あかぎ');
    DestinationDevide(Takasaki, 8, 9);
    TT[10] = makeemptyTable(TT[4], TT[8]);
    TT[11] = makeemptyTable(TT[5], TT[9]);
    TTconnect(TT[4], TT[8], TT[10]);
    TTconnect(TT[5], TT[9], TT[11]);
    TT[4] = TT[10];
    TT[5] = TT[11];
    console.log(TT[4]);
    console.log(TT[5]);
    
} else if (station == '千葉駅') {
    TableTitle = ['横須賀 総武線(快速)',
        '中央･総武線(各駅停車)', '内房線', '外房線', '総武本線', '成田線'];
    for (var td = 0; td < TT[4].length; td++) {
        for (var tr = 0; tr < TT[4][td].length; tr++) {
            if (TT[4][td][tr].endsWith('成田線経由普通')) {
                TT[4][td + 2][tr] = '銚子*';
            }
            if (TT[4][td][tr] == '') {
                break;
            }
        }
    }
    let Narita = ['佐原', '成田', '鹿島神宮', '成田/鹿島神宮', '成田空港', '銚子*'];
    DestinationDevide(Narita, 4, 5);
    var NEX_Chiba1 = [1, 3, 5, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43,45, 47, 49, 51, 53];
    var NEX_Chiba2 = [2, 4, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 52];
    limitednumber2(TT[0], NEX_Chiba2, '成田エクスプレス');
    limitednumber2(TT[5], NEX_Chiba1, '成田エクスプレス');
    limitednumber(TT[0], 2, 'しおさい');
    limitednumber(TT[4], 1, 'しおさい');
    //号数を交互表示するため
    detailflag = 2;
}