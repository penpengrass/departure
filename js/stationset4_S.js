company = '山陽新幹線';
NonGouflag = 1;

var Shinkansenflag = 0;

if (station == '広島駅') {
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'];
    var kodama1 = [775, 781, 831, 833, 835, 837, 841, 843, 845, 847, 849, 851, 853, 855, 857, 859, 861, 865, 867, 787];
    limitedjustnumber(TT[1], 1, 'のぞみ');
    limitedjustnumber(TT[0], 2, 'のぞみ');
    limitedjustnumber(TT[0], 74, 'のぞみ(当駅始発)');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitednumber(TT[1], 541, 'さくら');
    limitednumber(TT[0], 540, 'さくら');
    limitednumber2(TT[1], kodama1, 'こだま');
    limitedjustnumber(TT[0], 836, 'こだま');
}
else if (station == '博多駅') {
    detailLength_one = 2;
    detailflag = 2;
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '九州新幹線 熊本・鹿児島中央方面'];
    limitedjustnumber(TT[1], 1, 'のぞみ');
    limitedjustnumber(TT[0], 2, 'のぞみ');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitedjustnumber(TT[0], 838, 'こだま');
    limitedjustnumber(TT[0], 540, 'さくら');
} else if (station == '岡山駅') {
    detailLength_one = 2;
    detailflag = 2;
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'];
    let kodama2 = [830, 832, 834, 836, 840, 842, 854, 856, 858, 860, 862, 866, 868, 870];
    let hikari1=[591,531,533,535];
    limitednumber2(TT[1], hikari1, 'ひかり');
    limitednumber2(TT[0], kodama2, 'こだま');
    limitednumber(TT[1], 831, 'こだま');
    limitednumber(TT[1], 541, 'さくら');
    limitednumber(TT[0], 540, 'さくら');
    limitedjustnumber(TT[0], 500, 'ひかり');
    limitedjustnumber(TT[1], 61, 'のぞみ', '広島');
    limitedjustnumber(TT[1], 1, 'のぞみ', '博多');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitedjustnumber(TT[0], 70, 'のぞみ*');
    limitedjustnumber(TT[0], 2, 'のぞみ');
}
else if (station == '敦賀駅') {
    company = '北陸新幹線';
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
}