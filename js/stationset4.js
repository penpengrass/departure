company = 'JR西日本';
var JRobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "新快速", color: red, detail: rapid, },
    Typec: { type: "快速", color: orange, detail: Jrapid, },
    Typed: { type: "区快", color: orange, detail: Jsubrapid, },
    Typee: { type: "普通", color: greenyellow, detail: local, }

};
//天王寺駅
var JRWTobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "関空快速", color: blue, detail: rapid, },
    Typec: { type: "大和路快速", color: green, detail: rapid, },
    Typed: { type: "快速", color: orange, detail: Jrapid, },
    Typee: { type: "区間快速", color: green, detail: Jsubrapid, },
    Typef: { type: "普通", color: black, detail: local, }
};
var JRWSobj = {//色は文字
    Typea: { type: "のぞみ", color: orange, detail: limited, },
    Typeb: { type: "ひかり", color: red, detail: rapid, },
    Typec: { type: "こだま", color: greenyellow, detail: rapid, },
    Typed: { type: "みずほ", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: red, detail: Jsubrapid, },
    Typef: { type: "つばめ", color: greenyellow, detail: local, }
};
if (station == '岡山駅') {
    var selectstation = ['備前片上', '長船', '日生', '播州赤穂', '西大寺'];
    DestinationDevide(selectstation, 2, 3);
    TableTitle = ['山陽本線  倉敷，福山方面', '伯備線 倉敷 新見 米子方面', '山陽本線  和気，姫路方面', '赤穂線 西大寺 播州赤穂方面', '瀬戸大橋線 茶屋町 児島 四国方面',
        '津山線 福渡 津山方面', '桃太郎線 備中高松 総社方面'];
    limitednumber(TT[2], 1, 'ｽｰﾊﾟｰいなば');
    limitednumber(TT[1], 1, 'やくも');
    limitednumber(TT[4], 1, '南風');
    limitednumber(TT[4], 1, 'しおかぜ');
    limitednumber(TT[4], 1, 'ﾏﾘﾝﾗｲﾅｰ');
} else if (station == '姫路駅') {
    /*TableTitle = ['播但線 寺前 和田山方面', 'JR神戸線 三ノ宮 大阪方面', '姫新線 播磨新宮 佐用方面', '山陽線 相生 播州赤穂 上郡 岡山方面'];
    limitednumber(TT[1], 2, 'ｽｰﾊﾟｰはくと');
    limitednumber(TT[3], 1, 'ｽｰﾊﾟｰはくと');
    limitednumber(TT[0], 1, 'はまかぜ');
    limitednumber(TT[1], 2, 'はまかぜ');*/
    company='JR西日本';
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'];
    var sakura1 = [541, 543, 545, 549, 551, 553, 555, 565, 569, 571, 573];
    var sakura2 = [548, 560, 564, 568, 570, 572];
    var mizuho1 = [601, 609, 613];
    var mizuho2 = [600, 602, 604, 606, 614];
    var nozomi = [68, 70, 72, 76, 78, 82, 84, 88, 90, 92, 94, 96, 98, 100, 40, 46, 52, 58];
    var kodama1 = [837, 839, 841, 845, 847, 849, 861, 865, 867, 869, 871, 873, 875, 877];
    var kodama2 = [830, 832, 834, 836, 840, 842, 854, 856, 858, 860, 862, 866, 868, 870];
    limitednumber2(TT[1], mizuho1, 'みずほ');
    limitednumber2(TT[0], mizuho2, 'みずほ');
    limitednumber2(TT[1], kodama1, 'こだま');
    limitednumber2(TT[0], kodama2, 'こだま');
    limitednumber2(TT[1], sakura1, 'さくら');
    limitednumber2(TT[0], sakura2, 'さくら');
    limitedjustnumber(TT[1], 61, 'のぞみ');
    limitednumber2(TT[0], nozomi, 'のぞみ');
    limitedjustnumber(TT[0], 500, 'ひかり');
    limitedjustnumber(TT[1], 501, 'ひかり');
    TableTitle.push('播但線 寺前 和田山方面', 'JR神戸線 三ノ宮 大阪方面', '姫新線 播磨新宮 佐用方面', '山陽線 相生 播州赤穂 上郡 岡山方面');
    limitednumber(TT[3], 2, 'ｽｰﾊﾟｰはくと');
    limitednumber(TT[5], 1, 'ｽｰﾊﾟｰはくと');
    limitednumber(TT[2], 1, 'はまかぜ');
    limitednumber(TT[3], 2, 'はまかぜ');
} else if (station == '広島駅') {
    TableTitle = ['山陽線 宮島口 岩国方面', '可部線 緑井 あき亀山方面', '山陽線 西条 三原方面', '呉線 呉 広方面', '芸備線 下深川 三次方面'];
} else if (station == '新見駅') {
    TableTitle = ['伯備線 岡山方面', '伯備線 米子 出雲市方面', '芸備線 東城 備後落合方面', '姫新線 中国勝山 津山方面'];
    limitednumber(TT[0], 2, 'やくも');
    limitednumber(TT[2], 1, 'やくも');
    RailNumberDevide(2, 2, 1);
} else if (station == '糸崎駅') {
    TableTitle = ['山陽線 福山 岡山方面', '山陽線 三原 広島方面'];
} else if (station == '三原駅') {
    TableTitle = ['山陽線 福山 岡山方面', '山陽線 広島 岩国方面', '呉線 広 呉方面'];
} else if (station == '岩国駅') {
    TableTitle = ['岩徳線 錦川清流線', '山陽線 宮島口 広島方面', '山陽線 柳井 徳山方面'];
} else if (station == '北新地駅') {
    TableTitle = ['京橋 四条畷 松井山手方面', '尼崎 宝塚 三ノ宮方面'];
} else if (station == '米原駅') {
    TableTitle = ['東海道線 彦根 草津 京都方面', '北陸線 長浜 敦賀 金沢方面', '東海道線 大垣 岐阜方面'];
    var shirasagi = [51, 1, 3, 5, 53, 7, 9, 57, 11, 59, 13, 61, 15, 63, 65];
    limitednumber2(TT[1], shirasagi, 'しらさぎ');
    limitednumber(TT[2], 2, 'しらさぎ');
} else if (station == '天王寺駅') {
    TableTitle = ['阪和線 関西空港 和歌山方面', '大和路線 王寺 奈良 加茂方面'];
    limitednumber(TT[0], 1, '特急はるか');
    limitednumber(TT[0], 1, '特急くろしお');
} else if (station == '徳山駅') {
    TableTitle = ['山陽新幹線 博多 鹿児島中央方面', '山陽新幹線 新大阪 東京方面', '山陽線 新山口 下関方面', '山陽線 岩国方面', '岩徳線 岩国方面'];
    var sakura1 = [401, 543, 553, 555, 557, 559, 561, 569, 571];
    var nozomi1 = [99, 13, 41, 45, 59];
    var kodama1 = [775, 781, 831, 833, 835, 837, 841, 843, 845, 847, 849, 851, 853, 855, 857, 859, 861, 865, 867, 787];
    var nozomi2 = [6, 10, 42, 48];
    var sakura2 = [542, 544, 546, 550, 552, 554, 556, 558, 562, 566, 406];
    var kodama2=[838,840,842,844,846,848,850,852,854,856,858,860,862,864,866,776,870,874,876];
    limitednumber2(TT[0], kodama1, 'こだま');
    limitednumber2(TT[1], kodama2, 'こだま');
    limitednumber2(TT[0], sakura1, 'さくら');
    limitednumber2(TT[1], sakura2, 'さくら');
    limitednumber2(TT[0], nozomi1, 'のぞみ');
    limitednumber2(TT[1], nozomi2, 'のぞみ');
} else if (station == '下関駅') {
    TableTitle = ['山陽本線 新山口 岩国方面', '山陽本線 門司 九州方面', '山陰本線 小串 長門市方面'];
}