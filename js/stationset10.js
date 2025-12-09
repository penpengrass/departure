company = 'JR九州';
NonGouflag = 1;
if (station == '小倉駅') {
    NonGouflag = 0;
    TableTitle = ['鹿児島本線 門司港 下関方面', '鹿児島本線 黒崎 博多方面', '日豊本線 行橋 大分方面'];
    limitednumber(TT[0], 4, '特急きらめき');
    limitednumber(TT[1], 1, '特急きらめき');
    limitedjustnumber(TT[1], 2, '特急ソニック');
    limitedjustnumber(TT[2], 1, '特急ソニック');
} else if (station == '博多駅') {
    TableTitle = ['山陽・東海道新幹線 新大阪方面', '九州新幹線 鹿児島中央方面', '鹿児島本線下り 大牟田 久留米方面', '長崎本線 佐賀 佐世保方面', '鹿児島本線上り 小倉方面', '福北ゆたか線 篠栗方面'];
    limitedjustnumber(TT[1], 1, 'のぞみ');
    limitedjustnumber(TT[0], 2, 'のぞみ');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitedjustnumber(TT[0], 838, 'こだま');
    limitedjustnumber(TT[0], 540, 'さくら');
    limitedjustnumber(TT[4], 1, '特急ソニック');
    limitedjustnumber(TT[4], 2, '特急きらめき');
    limitedjustnumber(TT[2], 101, '特急かささぎ');
    limitedjustnumber(TT[2], 1, '特急ゆふ');
    limitedjustnumber(TT[2], 1, '特急ゆふいんの森');
    limitedjustnumber(TT[2], 1, ['特急みどり', '特急リレーかもめ', '特急ハウステンボス', '特急ハウステンボス･特急みどり', '特急みどり(リレーかもめ)']);
    var selectstation = ['武雄温泉', '佐賀', '肥前鹿島', '佐世保', 'ハウステンボス', '江北', 'ハウステンボス･佐世保'];
    DestinationDevide(selectstation, 2, 3);
} else if (station == '鳥栖駅') {
    detailflag=2;
    TableTitle = ['鹿児島本線 二日市 博多方面(特急)', '鹿児島本線 二日市 博多方面(快速 普通)', '長崎本線 新鳥栖 佐賀方面(特急)', '長崎本線 新鳥栖 佐賀方面(快速 普通)'
        , '鹿児島本線 久留米 由布院方面(特急)', '鹿児島本線 久留米 由布院方面(快速 普通)'];
    NonGouflag = 0;
    let trainName = ['特急リレーかもめ', 'リレーかもめ', '特急ゆふいんの森', '特急かささぎ', 'ハウステンボス･みどり', '特急みどり','みどり(リレーかもめ)','特急ゆふ','特急ゆふ73号'];
    TrainNameLineIncludeDevide(trainName, 1, 0);
    TrainNameLineIncludeDevide(trainName, 3, 2);
    TrainNameLineIncludeDevide(trainName, 5, 4);
    limitedjustnumber(TT[0], 102, '特急かささぎ');
    limitedjustnumber(TT[2], 101, '特急かささぎ');
    limitedjustnumber(TT[0], 2, '特急ゆふ');
    limitedjustnumber(TT[4], 1, '特急ゆふ');
    limitedjustnumber(TT[0], 2, '特急ゆふいんの森');
    limitedjustnumber(TT[4], 1, '特急ゆふいんの森');
    limitedjustnumber(TT[0], 2, ['特急みどり', 'リレーかもめ', 'ハウステンボス', 'ハウステンボス･みどり', 'みどり(リレーかもめ)']);
    limitedjustnumber(TT[2], 1, ['特急みどり', 'リレーかもめ', 'ハウステンボス', 'ハウステンボス･みどり', 'みどり(リレーかもめ)']);

}