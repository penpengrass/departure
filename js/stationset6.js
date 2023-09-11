if (station == '長野駅') {
    Devideflag = 0;
    let selectstation=['軽井沢','上田','小諸','戸倉'];
    DestinationDevide(selectstation,2,1);
    TableTitle=['北しなの線 飯山線','信越線 しなの鉄道線','篠ノ井線'];
    limitednumber(TT[2], 2, '特急しなの');
}else if(station=='松本駅'){
    let selectstation=['中津川','上松','名古屋','木曽福島'];
    DestinationDevide(selectstation,0,1);
    TableTitle=['中央東線','中央西線','篠ノ井線','大糸線'];
    limitednumber(TT[0], 2, '特急しなの');
    limitednumber(TT[2], 1, '特急しなの');
}