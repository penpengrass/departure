if(station=='豊橋駅'){
    TableTitle=['飯田線 (豊川・飯田方面)','名鉄線(東岡崎・名鉄名古屋方面)','東海道線(浜松・静岡方面)','東海道線(岡崎・名古屋方面)'];
    limitednumber(TT[0], 1, '特急伊那路');
}else if(station=='浜松駅'){
    TableTitle=['東海道線 掛川 静岡方面','東海道線 豊橋 名古屋方面'];
}else if(station=='岐阜駅'){
    TableTitle=['東海道線 大垣 米原方面','高山本線 美濃太田方面','東海道線 名古屋 豊橋方面'];
    limitednumber(TT[0],1,'特急しらさぎ');
    limitednumber(TT[1],1,'特急ひだ');
    limitednumber(TT[2],2,'特急ひだ');
}