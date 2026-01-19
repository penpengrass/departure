company = '新幹線';
if (station == '東京駅') {
    TableTitle = ['東北・山形・秋田新幹線', '上越・長野新幹線'];
    var hayabusa = [1, 101, 5, 103, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 31, 33, 35, 105, 39, 107, 41, 109, 43, 111, 45, 47];
    //hayabusa=[1, 101, 5, 103, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 31, 33, 35, 105, 39, 107, 41, 43, 111, 45, 47];
    limitednumber2(TT[0], hayabusa, 'はやぶさ');
    limitedjustnumber(TT[0], 51, 'やまびこ', '盛岡');
    limitedjustnumber(TT[0], 201, 'やまびこ*');
    limitedjustnumber(TT[0], 121, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
    limitednumber(TT[0], 251, 'なすの');
    limitednumber(TT[1], 301, 'とき');
    limitedjustnumber(TT[1], 401, 'たにがわ');
    limitednumber(TT[2], 601, 'あさま');
    limitednumber(TT[2], 551, 'はくたか');
    limitedjustnumber(TT[2], 501, 'かがやき');
    console.log(TT[1]);
    console.log(TT[3]);
    TT[3] = makeemptyTable(TT[1], TT[2]);
    TTconnect(TT[1], TT[2], TT[3]);
    TT[1] = TT[3];
} else if (station == '仙台駅') {
    company = '東北新幹線';
    TableTitle = ['新青森方面','東京方面'];
    limitedjustnumber(TT[0], 51, 'やまびこ');
    limitedjustnumber(TT[0], 101, 'はやぶさ', '盛岡');
    limitedjustnumber(TT[0], 1, ['はやぶさ','はやぶさ･こまち'], ['新青森','新函館北斗','新青森･秋田','新函館北斗･秋田']);
    limitedjustnumber(TT[1], 2, ['はやぶさ','はやぶさ･こまち']);
    limitedjustnumber(TT[1], 102, 'はやぶさ*');
    limitedjustnumber(TT[1], 202, 'やまびこ*');
    limitedjustnumber(TT[1], 50, 'やまびこ+');
    limitedjustnumber(TT[1], 122, 'やまびこ');
}