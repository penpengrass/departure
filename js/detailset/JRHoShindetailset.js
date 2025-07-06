//詳細表示の定義
let Jrapid = "0";
let limited = "0";
let Jsubrapid = "0";
let rapid = "0";
let express = "0";
let subexpress = "0";
let subsemiexpress = "0";
let local = "0";
const kagayaki = new Array(2)
kagayaki[0] = ['東京', '上野', '大宮', '長野', '富山', '金沢', '福井', '敦賀'];
const hakutaka = new Array(2);
hakutaka[0] = ['東京', '上野', '大宮', '高崎', '長野', '上越妙高', '糸魚川', '黒部宇奈月温泉', '富山', '新高岡', '金沢','小松','加賀温泉','芦原温泉','福井','越前たけふ', '敦賀'];
const tsurugi = new Array(2);
tsurugi[0] = ['富山', '新高岡', '金沢', '福井', '敦賀'];
reverseLine(kagayaki, 0, 1);
reverseLine(hakutaka, 0, 1);
reverseLine(tsurugi, 0, 1);
let Nkagayaki = LineCopy(kagayaki);
let Nhakutaka = LineCopy(hakutaka);
let Ntsurugi = LineCopy(tsurugi);
var JRWSHobj = {//色は文字
    Typea: { type: "かがやき", Bcolor: 'yellow', color: black, detail: Nkagayaki, },
    Typeb: { type: "はくたか", Bcolor: red, color: white, detail: Nhakutaka, },
    Typec: { type: "つるぎ", Bcolor: '#3050FF', color: white, detail: Ntsurugi, },
};
