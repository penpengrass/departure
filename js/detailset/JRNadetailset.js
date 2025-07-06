var Dtype = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    Dtype[td] = 0;
}
var staflag = 0;
var Nagahama = [51, 3, 7, 55, 57, 13];
let TSperapid = [['大垣', '岐阜', '尾張一宮', '名古屋', '金山', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let TNewrapid = [['大垣', '岐阜', '尾張一宮', '名古屋', '金山', '大府', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let Trapid = [['大垣', '岐阜', '尾張一宮', '名古屋', '金山', '共和', '大府', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let Cesubrapid = [['岐阜', '尾張一宮', '名古屋', '金山', '共和', '大府', '大府から武豊線に入ります', '武豊'],
['大垣', '岐阜', '尾張一宮', '名古屋', '金山', '共和', '大府', '刈谷', '安城', '岡崎から各駅', '豊橋']];
let Shilimited = [['名古屋', '千種', '多治見', '中津川', '木曽福島', '塩尻', '松本', '篠ノ井', '長野']];
let CHomerapid = [['名古屋', '金山', '鶴舞', '千種', '大曽根', '高蔵寺', '多治見', '土岐市', '瑞浪']];
let HomeOgaki = [['名古屋', '尾張一宮', '岐阜', '穂積', '大垣']];
let Shirasagi = [['名古屋', '尾張一宮', '岐阜', '大垣', '米原', '敦賀', '武生', '鯖江', '福井', '芦原温泉', '加賀温泉', '小松', '金沢'], [],
['岐阜', '大垣', '米原', '草津', '京都', '新大阪', '大阪']];
let Kanayama = [21, 23, 25];
let Ena = [3, 13, 25];
let Nagiso = [1, 7, 17, 25];
let Agematsu = [1, 25];
let Akashina = [1, 15, 19, 23];
let Hijirikogen=[21];
reverseLine(Shirasagi, 0, 1);
reverseLine(TNewrapid, 0, 1);
reverseLine(Trapid, 0, 1);
reverseLine(TSperapid, 0, 1);
reverseLine(Cesubrapid, 0, 2);
reverseLine(Cesubrapid, 1, 3);
reverseLine(HomeOgaki, 0, 1);
TNewrapid[1][TNewrapid[1].length - 1] = '岐阜から各駅';
TNewrapid[1].push('関ケ原', '米原');
Trapid[1][Trapid[1].length - 1] = '岐阜から各駅';
Trapid[1].push('関ケ原', '米原');
TSperapid[1][TSperapid[1].length - 1] = '岐阜から各駅';
Cesubrapid[3][Cesubrapid[1].length - 1] = '岐阜から各駅';
Cesubrapid[3].push('関ケ原', '米原');
TSperapid[1].push('関ケ原', '米原');
Cesubrapid[3][1] = '岡崎までの各駅';
console.log(TNewrapid);
Slimited = Shilimited.slice();
let Sperapid = TSperapid.slice();
let Newrapid = TNewrapid.slice();
let Homerapid = CHomerapid.slice();
rapid = Trapid.slice();
Jrapid = HomeOgaki.slice();
Jsubrapid = Cesubrapid.slice();
limited = Shirasagi.slice();
local = [['各駅にとまります']];
console.log(Newrapid);
console.log(Cesubrapid);
let Cgreen='#39ff14'
var JRCeNobj = {//色は文字
    Typea: { type: "特急", Bcolor: red, color: white, detail: limited, },
    Typeb: { type: "ﾎｰﾑﾗｲﾅｰ", Bcolor: red, color: white, detail: Jrapid, },
    Typec: { type: "特別快速", Bcolor: 'yellow', color: black, detail: Sperapid, },
    Typed: { type: "新快速", Bcolor: '#fd7e00', color: white, detail: Newrapid, },
    Typee: { type: "快速", Bcolor: blue, color: white, detail: rapid, },
    Typef: { type: "区間快速", Bcolor: Cgreen, color: black, detail: Jsubrapid, },
    Typelocal: { type: "普通", Bcolor: white, color: black, detail: local, }
};
if (station != '名古屋駅') {
    JRCeNobj.Typeb.type = 'ホームライナー';
    console.log(JRCeNobj);
}
var JRChNobj = {//色は文字
    Typea: { type: "特急", Bcolor: red, color: white, detail: Slimited, },
    Typeb: { type: "快速みえ", Bcolor: '#fd7e00', color: white, detail: Homerapid, },
    Typee: { type: "快速", Bcolor: blue, color: white, detail: Jsubrapid, },
    Typef: { type: "区間快速", Bcolor: Cgreen, color: black, detail: Jsubrapid, },
    Typelocal: { type: "普通", Bcolor: white, color: black, detail: local, }
};
let Nanki = [['名古屋', '桑名', '四日市', '鈴鹿', '津', '松阪', '多気', '三瀬谷', '紀伊長島', '尾鷲', '熊野市', '新宮', '紀伊勝浦']];
let Mie = [['名古屋', '桑名', '四日市', '鈴鹿', '津', '松阪', '多気', '伊勢市', '二見浦', '鳥羽']];
let TKanrapid = [['名古屋', '桑名', '四日市', '四日市から各駅', '亀山']];
let TKasubrapid = [['名古屋', '八田', '春田', '蟹江', '弥富', '桑名', '桑名から各駅', '亀山']];
let Hida = [['名古屋', '岐阜', '鵜沼', '美濃太田', '白川口', '飛騨金山', '下呂', '飛騨萩原', '飛騨小坂', '久々野', '高山'],
['名古屋', '岐阜', '美濃太田', '下呂', '高山', '飛騨古川', '猪谷', '越中八尾', '富山']];
let Klimited = Nanki.slice();
let Mierapid = Mie.slice();
let Karapid = TKanrapid.slice();
let Kasubrapid = TKasubrapid.slice();
let Hlimited = Hida.slice();
var JRKaobj = {
    Typea: { type: "特急南紀", detail: Klimited, },
    Typeb: { type: "特急ひだ", detail: Hlimited, },
    Typec: { type: "快速みえ", detail: Mierapid, },
    Typed: { type: "快速", detail: Karapid, },
    Typee: { type: "区間快速", detail: Kasubrapid, },
    Typef: { type: "普通", detail: local, },
    Typelocal: { type: "普通", detail: local, }
}
