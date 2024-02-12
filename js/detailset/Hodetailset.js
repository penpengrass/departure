//詳細表示の定義
var hayabusa=new Array(2);
var hayate=new Array(2);
var airport=new Array(2);
var asahikawa=new Array(2);
var oozora=new Array(2);
hayabusa[0]=['新函館北斗','木古内','奥津軽いまべつ','新青森','八戸','盛岡','仙台','大宮','上野','東京'];
hayate[0]=['新函館北斗','木古内','奥津軽いまべつ','新青森','七戸十和田','八戸','盛岡'];
airport[0]=['小樽','手稲','札幌','新札幌','北広島','恵庭','千歳','南千歳','新千歳空港'];
asahikawa[0]=['札幌','岩見沢','美唄','砂川','滝川','深川','旭川'];
oozora[0]=['札幌','新札幌','南千歳','追分','新夕張','トマム','新得','帯広','池田','白糠','釧路'];
reverseLine(airport,0,1);
var JRHobj = {//色は文字
    Typea: { type: "はやぶさ", color: red, detail: hayabusa, },
    Typeb: { type: "はやて", color: red, detail: hayate, },
    Typec: { type: "特急おおぞら", color: red, detail: oozora, },
    Typed: { type: "快速エアポート", color: orange, detail: airport, },
    Typee: { type: "特急", color: red, detail: express, },
    Typef: { type: "普通", color: 'lightgreen', detail: local, }

};