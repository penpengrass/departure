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
}else if (station == '福島駅') {
    detailflag = 2;
    NonGouflag = 1;
    DetailLength = [2, 2, 0, 0, 0];
    company = 'JR東日本';
    TableTitle = ['東北新幹線(下り) 仙台 盛岡方面', '東北新幹線(上り) 宇都宮 大宮 東京方面', '東北本線 白石 仙台方面', '東北本線 郡山 新白河方面', '山形新幹線 奥羽本線 米沢 山形方面'];
    limitedjustnumber(TT[0], 51, 'やまびこ', '盛岡');
    limitedjustnumber(TT[0], 123, 'やまびこ', '仙台');
    limitedjustnumber(TT[0], 201, 'やまびこ*');
    limitedjustnumber(TT[4], 127, 'つばさ');
    limitedjustnumber(TT[1], 202, 'やまびこ*');
    limitedjustnumber(TT[1], 50, 'やまびこ+');
    limitedjustnumber(TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
}