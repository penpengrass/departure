// オブジェクトにした方がよさそう
var SHexpress = new Array(10);
SHexpress[2] = ["大阪上本町", "鶴橋", "布施", "河内国分", "五位堂", "大和高田", "大和八木", "桜井", "以遠各駅", "青山町", "五十鈴川"];
SHexpress[1] = ["大阪難波","日本橋","大阪上本町", "鶴橋", "布施", "石切", "生駒", "学園前", "大和西大寺", "新大宮", "奈良"];
SHexpress[0] = ["大阪上本町", "鶴橋", "布施", "河内国分", "五位堂", "大和高田", "大和八木", "桜井から榊原温泉口までの各駅", "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川"];
SHexpress[3] = ["名古屋", "蟹江", "弥富", "桑名", "富田", "四日市", "塩浜", "伊勢若松", "白子", "江戸橋", "津", "津新町", "南が丘", "久居", "桃園",
    "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川", "朝熊", "池の浦", "鳥羽"];
SHexpress[4] = [''];
SHexpress[5] = ["京都", "東寺", "竹田", "丹波橋", "桃山御陵前", "大久保", "新田辺", "新祝園", "高の原", "大和西大寺", "新大宮", "奈良"];
SHexpress[6] = ["京都", "東寺", "竹田", "丹波橋", "桃山御陵前", "大久保", "新田辺", "新祝園", "高の原", "大和西大寺", "西ノ京", "郡山", "平端", "田原本", "大和八木",
    "八木西口", "畝傍御陵前", "橿原神宮前"];
SHexpress[7] = ["京都", "東寺", "竹田", "丹波橋", "桃山御陵前", "大久保", "新田辺", "新祝園", "高の原", "大和西大寺", "西ノ京", "郡山", "平端", "二階堂", "前栽", "天理"];
SHexpress[8] = ["京都", "東寺", "竹田", "丹波橋", "桃山御陵前", "大久保", "新田辺", "興戸", "三山木", "宮津"];
SHexpress[9] = ["国際会館", "竹田から京都地下鉄内各駅", "竹田", "丹波橋", "桃山御陵前", "大久保", "新田辺", "新祝園", "高の原", "大和西大寺", "新大宮", "奈良"];
var SHlimited = new Array(8);
SHlimited[0] = ["大阪上本町", "鶴橋", "大和高田", "大和八木", "榛原", "名張", "伊賀神戸", "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川", "鳥羽", "志摩磯部", "鵜方", "賢島"];
SHlimited[1] = ["大阪上本町", "鶴橋", "大和八木", "名張", "津", "白子", "四日市", "桑名", "名古屋"];
SHlimited[2] = ["大阪難波","大阪上本町", "鶴橋", "生駒", "学園前", "大和西大寺", "奈良"];
SHlimited[3] = ["名古屋", "桑名", "四日市", "白子", "津", "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川", "鳥羽", "志摩磯部", "鵜方", "賢島"];
SHlimited[4] = ["名古屋", "桑名", "四日市", "白子", "津", "名張", "大和八木", "鶴橋", "大阪上本町", "大阪難波"];
SHlimited[5] = ["京都", "丹波橋", "大和西大寺", "奈良"];
SHlimited[6] = ["京都", "丹波橋", "大和西大寺", "大和八木", "橿原神宮前"];
SHlimited[7] = ["京都", "丹波橋", "大和西大寺", "大和八木", "名張", "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川", "鳥羽", "志摩磯部", "鵜方", "賢島"];
var SHrapid = new Array(5);
SHrapid[0] = ["大阪上本町", "鶴橋", "五位堂", "大和高田", "大和八木", "桜井", "榛原", "室生口大野", "赤目口", "名張", "桔梗が丘", "美旗", "伊賀神戸", "青山町",
    "榊原温泉口", "伊勢中川", "松阪", "伊勢市", "宇治山田", "五十鈴川", "朝熊", "池の浦", "鳥羽"];
SHrapid[1] = ["神戸三宮","魚崎","西宮","甲子園","尼崎","西九条","九条","ドーム前","桜川","大阪難波","日本橋","大阪上本町", "鶴橋", "生駒", "学園前", "大和西大寺", "新大宮", "奈良"];
var Hsubexpress = new Array(5);
Hsubexpress[0] = ["布施　八尾　河内山本　高安　河内国分　以遠各駅"];
Hsubexpress[1] = ["布施　河内小阪　東花園　石切　以遠各駅"];
Hsubexpress[2] = ["高安までの各駅と　八尾　布施　鶴橋"];
Hsubexpress[3] = ["蟹江　以遠各駅"];
var Hsubsemiexpress = new Array(5);
Hsubsemiexpress[0] = ["布施　八尾  以遠各駅"];
Hsubsemiexpress[1] = ["布施 河内小阪 東花園 以遠各駅"];
var Rsubsemiexpress=new Array(3);
Rsubsemiexpress[0]=["東花園までの各駅と　河内小阪　布施　鶴橋　以遠各駅"];
var Rsemiexpress=new Array(3);
Rsemiexpress[0]=["石切までの各駅と　東花園　河内小阪　布施　鶴橋　以遠各駅"];
var Hlimited = ['大和高田　大和八木　榛原　名張　青山町　伊勢中川　松阪　伊勢市　宇治山田　五十鈴川　鳥羽　志摩磯部　鵜方', '生駒　学園前　大和西大寺',
    '大和八木　大和高田　鶴橋'];
var Hrapid = ["五位堂　大和高田　大和八木　榛原　室生口大野　赤目口　名張　桔梗が丘　美旗　青山町　榊原温泉口　伊勢中川　松阪　伊勢市　宇治山田　五十鈴川　朝熊　池の浦",
    "各駅にとまります", "桜井　大和八木　大和高田　五位堂　鶴橋"];
var Hlocal = new Array(4);
for (var i = 0; i < 4; i++) {
    Hlocal[i] = "各駅停車";
}
var Jrapid = new Array(3);
Jrapid[0] = ["北新地", "京橋までの各駅と", "放出", "住道", "四条畷", "星田", "河内磐船", "長尾", "以遠各駅", "京田辺", "同志社前", "木津"];
Jrapid[1] = ["北新地", "尼崎までの各駅と", "伊丹", "川西池田", "中山寺", "宝塚", "西宮名塩", "三田", "新三田", "以遠各駅", "篠山口"];
var Jsubrapid = new Array(3);
Jsubrapid[0] = ["北新地", "京橋までの各駅と", "放出", "住道", "四条畷", "以遠各駅", "松井山手", "京田辺", "同志社前", "木津"];
Jsubrapid[1] = ["北新地", "尼崎までの各駅と", "伊丹", "川西池田", "中山寺", "宝塚", "西宮名塩", "三田", "新三田", "以遠各駅", "篠山口"];
Jsubrapid[2] = ["各駅にとまります"];
var staflag = 0;
var express = SHexpress;
var subexpress = Hsubexpress;
var subsemiexpress = Hsubsemiexpress;
var limited = SHlimited;
var rapid = SHrapid;
var local = Hlocal;
if (station == '奈良駅') {
    for (var i = 0; i < SHexpress.length; i++) {
        express[i] = SHexpress[i].reverse();
    }
    SHlimited[2]=SHlimited[2].reverse();
    SHlimited[5]=SHlimited[5].reverse();
    SHrapid[1]=SHrapid[1].reverse();
    subsemiexpress=Rsubsemiexpress;
    subexpress=Rsemiexpress;
    console.log(express);
}
var Kinobj = {//色は背景
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "快急", color: red, detail: rapid, },
    Typec: { type: "急行", color: orange, detail: express, },
    Typed: { type: "準急", color: green, detail: subexpress, },
    Typee: { type: "区準", color: green, detail: subsemiexpress, },
    Typef: { type: "普通", color: blue, detail: local, }
};