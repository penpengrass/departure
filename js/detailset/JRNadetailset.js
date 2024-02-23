var Dtype = [0, 0];
var staflag = 0;
let TSperapid = [['名古屋', '金山', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let TNewrapid = [['名古屋', '金山', '大府', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let Trapid = [['名古屋', '金山', '共和', '大府', '刈谷', '安城', '岡崎', '蒲郡', '豊橋', '豊橋から各駅', '浜松']];
let Cesubrapid = [['名古屋', '金山', '共和', '大府', '刈谷', '安城', '岡崎から各駅', '豊橋'], ['名古屋', '金山', '共和', '大府', '大府から武豊線に入ります', '武豊']];
let Shilimited = [['名古屋', '金山', '千種', '多治見', '中津川', '木曽福島', '塩尻', '松本', '篠ノ井', '長野']];
let CHomerapid = [['名古屋', '金山', '鶴舞', '千種', '大曽根', '高蔵寺', '多治見', '土岐市', '瑞浪']];
let HomeOgaki = [['名古屋', '尾張一宮', '岐阜', '穂積', '岐阜']];
let Shirasagi = [['名古屋', '尾張一宮', '岐阜', '大垣', '米原', '敦賀', '武生', '鯖江', '福井', '芦原温泉', '加賀温泉', '小松', '金沢']];
let Sperapid = TSperapid.slice();
let Newrapid = TNewrapid.slice();
Slimited = Shilimited.slice();
let Homerapid = CHomerapid.slice();
rapid = Trapid.slice();
Jrapid = HomeOgaki.slice();
Jsubrapid = Cesubrapid.slice();
limited = Shirasagi.slice();
local = [['各駅にとまります']];
var JRCeNobj = {//色は文字
    Typea: { type: "特急", Bcolor: red, color: white, detail: limited, },
    Typeb: { type: "ﾎｰﾑﾗｲﾅｰ", Bcolor: red, color: white, detail: Jrapid, },
    Typec: { type: "特別快速", Bcolor: 'yellow', color: black, detail: Sperapid, },
    Typed: { type: "新快速", Bcolor: orange, color: white, detail: Newrapid, },
    Typee: { type: "快速", Bcolor: orange, color: white, detail: rapid, },
    Typef: { type: "区間快速", Bcolor: green, color: white, detail: Jsubrapid, },
    Typelocal: { type: "普通", Bcolor: white, color: black, detail: local, }
};
var JRChNobj = {//色は文字
    Typea: { type: "特急", Bcolor: red, color: white, detail: Slimited, },
    Typeb: { type: "ﾎｰﾑﾗｲﾅｰ", Bcolor: red, color: white, detail: Homerapid, },
    Typee: { type: "快速", Bcolor: blue, color: white, detail: Jsubrapid, },
    Typef: { type: "区間快速", Bcolor: green, color: white, detail: Jsubrapid, },
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