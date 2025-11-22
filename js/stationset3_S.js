var Dtype = [0, 1];
detailflag = 2;
NonGouflag = 1;
var staflag = 0;
for (var td = 0; td < Tablenum; td++) {
    DetailLength[td] = orderNum;
}
if (station == '長野駅') {
    TableTitle = ['金沢 富山方面', '東京方面'];
    company = '北陸新幹線';
    limitedjustnumber(TT[0], 501, 'かがやき');
    limitedjustnumber(TT[0], 551, 'はくたか');
    limitedjustnumber(TT[1], 600, 'あさま');
    limitedjustnumber(TT[1], 552, 'はくたか');
    limitedjustnumber(TT[1], 500, 'かがやき');
} else if (station == '宇都宮駅') {
    company = '東北新幹線';
    TableTitle = ['東北新幹線 仙台方面', '新幹線 大宮・上野・東京方面'];
    limitednumber(TT[0], 251, 'なすの');
    limitednumber(TT[1], 254, 'なすの');
    limitedjustnumber(TT[0], 51, 'やまびこ', '盛岡');
    limitedjustnumber(TT[0], 201, 'やまびこ*');
    limitedjustnumber(TT[0], 121, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
    limitedjustnumber(TT[1], 202, 'やまびこ*');
    limitedjustnumber(TT[1], 52, 'やまびこ+');
    limitedjustnumber(TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
}