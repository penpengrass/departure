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
    limitednumber(TT[2], 501, 'かがやき');
}