//console.log(TT[0][1][2] + ":1mod4");//種別
//console.log(TT[0][2][2] + ":2mod4");//分
//console.log(TT[0][3][2] + ":3mod4");//行先
//console.log(TT[0][4][2] + ":4mod4");//番線
//console.log(TT[0].length);
//console.log(TT[1].length);
//console.log(TT[0][76].length);
//console.log(TT[1][30].length);
//console.log(TT[0][81][1]);
console.log(Tablenum + "←表の数");
//表のタイトル
console.log(TableTitle);
console.log(TT[1].length);
//console.log(station);
console.log(TT[0][17][0]);
//console.log(TT[0][77].length);
//console.log(TT[1][30].length);
//console.log(TT[1][27][1]);
//console.log(TT[1].length);
MinIn=1;
company='近鉄';
var Dtype=new Array(2);
if (station == '名古屋駅') {
    TableTitle=['名古屋線','名古屋線特急'];
    RailNumberDevide(4, 0, 1);
    Dtype[0] = 3;
    Dtype[1] = 3;
    station2 = station;
    stationN2 = stationN;
    dir2 = dir;
}else if(station=='鶴橋駅'){
    TableTitle=['奈良線 生駒 奈良方面','大阪線 高安 名古屋 伊勢志摩方面'];
    Dtype[0]=1;
    Dtype[1]=0;
}else if(station=='京都駅'){
    TableTitle=['京都線 新田辺 大和西大寺 奈良方面'];
    Dtype[0]=5;
}else if(station=='奈良駅'){
    TableTitle=['大阪方面','京都方面'];
    var KyotoDes=['京都','新田辺','国際会館'];
    DestinationDevide(KyotoDes,0,1);
    Dtype[0]=0;
    Dtype[1]=0;
}