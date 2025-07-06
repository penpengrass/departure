//詳細表示の定義
var hayabusa=new Array(2);
var hayate=new Array(2);
var airport=new Array(2);
var Spairport=new Array(2);
var Suairport=new Array(2);
var asahikawa=new Array(2);
var oozora=new Array(2);
var Tohakodate=new Array(2);
hayabusa[0]=['新函館北斗','新青森','七戸十和田','八戸','二戸','いわて沼宮内','盛岡','新花巻','北上','水沢江刺','一ノ関','くりこま高原','古川','仙台'];
hayabusa[1]=['新函館北斗','木古内','奥津軽いまべつ','新青森','八戸','盛岡','仙台','大宮','上野','東京'];
hayate[0]=['新函館北斗','木古内','奥津軽いまべつ','新青森','七戸十和田','八戸','二戸','盛岡'];
airport[0]=['小樽','手稲','札幌','新札幌','北広島','恵庭','千歳','南千歳','新千歳空港'];
Suairport[0]=['小樽','手稲','札幌','新札幌','北広島','北広島から各駅','新千歳空港'];
Spairport[0]=['小樽','手稲','札幌','新札幌','南千歳','新千歳空港'];
asahikawa[0]=['札幌','岩見沢','美唄','砂川','滝川','深川','旭川'];
oozora[0]=['札幌','新札幌','南千歳','追分','新夕張','トマム','新得','帯広','池田','白糠','釧路'];
Tohakodate[0]=['札幌','新札幌','南千歳','苫小牧','白老','登別','東室蘭','伊達紋別','洞爺','長万部','八雲','森','大沼公園','新函館北斗','五稜郭','函館'];
reverseLine(airport,0,1);
var JRHoobj = {//色は文字
    Typea: { type: "はやぶさ", color: red, detail: hayabusa, },
    Typeb: { type: "はやて", color: red, detail: hayate, },
};
var JRHSobj = {//色は文字
    Typea: { type: "特別快速エアポート", color: red, detail: Spairport, },
    Typeb: { type: "特急北斗", color: red, detail: Tohakodate, },
    Typec: { type: "特急おおぞら", color: red, detail: oozora, },
    Typed: { type: "快速エアポート", color: orange, detail: airport, },
    Typee: { type: "区間快速エアポート", color: red, detail: Suairport, },
    Typef: { type: "特急すずらん", color: red, detail: express, },
    Typelocal: { type: "普通", color: 'lightgreen', detail: local, }

};