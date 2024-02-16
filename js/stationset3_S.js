var Dtype = [0, 0];
detailflag = 2;
NonGouflag = 1;
if (station == '長野駅') {
    TableTitle = ['金沢 富山方面', '東京方面'];
    company = '北陸新幹線';
    limitedjustnumber(TT[0], 501, 'かがやき');
    limitedjustnumber(TT[0], 551, 'はくたか');
    limitedjustnumber(TT[1], 600, 'あさま');
    limitedjustnumber(TT[1], 552, 'はくたか');
    limitedjustnumber(TT[1], 500, 'かがやき');
}