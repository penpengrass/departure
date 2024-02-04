company = 'JR東海';
if (station == '豊橋駅') {
    company = 'JR東海 名鉄線';
    TableTitle = ['飯田線 (豊川・飯田方面)', '名鉄線(東岡崎・名鉄名古屋方面)', '東海道線(浜松・静岡方面)', '東海道線(岡崎・名古屋方面)'];
    limitednumber(TT[0], 1, '特急伊那路');
} else if (station == '浜松駅') {
    TableTitle = ['東海道線 掛川 静岡方面', '東海道線 豊橋 名古屋方面'];
} else if (station == '沼津駅') {
    TableTitle = ['東海道線 静岡 浜松方面', '東海道線 熱海 東京方面', '御殿場線 御殿場 国府津方面'];
} else if (station == '静岡駅') {
    TableTitle = ['東海道線 沼津 熱海方面', '東海道線 浜松 豊橋方面'];
    limitednumber(TT[0], 1, '特急ふじかわ');
} else if (station == '岐阜駅') {
    TableTitle = ['東海道線 大垣 米原方面', '高山本線 美濃太田方面', '東海道線 名古屋 豊橋方面'];
    limitednumber(TT[0], 1, '特急しらさぎ');
    limitednumber(TT[2], 2, '特急しらさぎ');
    limitednumber(TT[1], 1, '特急ひだ');
    limitednumber(TT[2], 2, '特急ひだ');
    limitednumber(TT[0], 1, 'ホームライナー大垣');
} else if (station == '大垣駅') {
    TableTitle = ['東海道線 関ケ原 米原方面', '東海道線 名古屋 豊橋方面'];
    limitednumber(TT[0], 1, '特急しらさぎ');
    limitednumber(TT[1], 2, '特急しらさぎ');
    limitednumber(TT[1], 2, 'ホームライナー大垣');
} else if (station == '名古屋駅') {
    detailflag = 2;
    TableTitle = ['東海道線(豊橋・武豊方面)', '東海道線(岐阜・大垣方面)', '中央線(多治見・中津川方面)', '関西線(四日市・松阪方面)', '高山線(美濃太田・高山方面)'];
    TrainNameDevide('特急ひだ', 1, 4);
    limitednumber(TT[2], 1, '特急しなの');
    limitednumber(TT[3], 1, '特急南紀');
    limitednumber(TT[3], 1, '快速みえ');
    limitednumber(TT[1], 1, '特急しらさぎ');
    limitednumber(TT[4], 1, '特急ひだ');
}