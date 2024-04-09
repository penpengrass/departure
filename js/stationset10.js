company = 'JR九州';
if (station == '小倉駅') {
    TableTitle = ['鹿児島本線 門司港 下関方面', '鹿児島本線 黒崎 博多方面', '日豊本線 行橋 大分方面'];
    limitednumber(TT[0], 4, '特急きらめき');
    limitednumber(TT[1], 1, '特急きらめき');
    limitedjustnumber(TT[1], 2, '特急ソニック');
    limitedjustnumber(TT[2], 1, '特急ソニック');
}