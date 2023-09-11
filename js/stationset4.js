if(station=='岡山駅'){
    let selectstation=['備前片上','長船','日生','播州赤穂','西大寺'];
    DestinationDevide(selectstation,1,5);
    TableTitle=['山陽本線  倉敷，福山方面','山陽本線  和気，姫路方面','瀬戸大橋線 茶屋町 児島 四国方面',
    '津山線 福渡 津山方面','伯備線 倉敷 新見 米子方面','赤穂線 西大寺 播州赤穂方面','桃太郎線 備中高松 総社方面'];
    limitednumber(TT[1], 1, 'スーパーいなば');
    limitednumber(TT[4], 1, 'やくも');
    limitednumber(TT[2], 1, '南風');
    limitednumber(TT[2], 1, 'しおかぜ');
    limitednumber(TT[2], 1, 'マリンライナー');
}else if(station=='広島駅'){
    TableTitle=['山陽線 宮島口 岩国方面','可部線 緑井 あき亀山方面', '山陽線 西条 三原方面','呉線 呉 広方面','芸備線 下深川 三次方面'];
}else if (station == '新見駅') {
    RailNumberDevide(2, 2, 1);
}else if(station=='三原駅'){
    TableTitle=['山陽線 福山 岡山方面','山陽線 広島 岩国方面','呉線 広 呉方面'];
}else if(station=='新見駅'){
    limitednumber(TT[0], 2, 'やくも');
    limitednumber(TT[2], 1, 'やくも');
}else if(station=='岩国駅'){
    TableTitle=['岩徳線 錦川清流線','山陽線 宮島口 広島方面','山陽線 柳井 徳山方面'];
}else if(station=='北新地駅'){
    TableTitle=['京橋 四条畷 松井山手方面','尼崎 宝塚 三ノ宮方面'];
}