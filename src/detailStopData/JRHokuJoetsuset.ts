import { reverseLine, LineCopy } from "../module/firstTableEdit";
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
hakutaka[0] = ['東京', '上野', '大宮', '高崎', '長野', '上越妙高', '糸魚川', '黒部宇奈月温泉', '富山', '新高岡', '金沢', '小松', '加賀温泉', '芦原温泉', '福井', '越前たけふ', '敦賀'];
const tsurugi = new Array(2);
tsurugi[0] = ['富山', '新高岡', '金沢', '福井', '敦賀'];
const asama = new Array(2)
asama[0] = ['東京', '上野', '大宮', '熊谷', '本庄早稲田', '高崎', '軽井沢', '佐久平', '上田', '長野', '富山', '金沢'];
const toki = new Array(2);
toki[0] = ['東京', '上野', '大宮', '高崎', '上毛高原', '越後湯沢', '浦佐', '長岡', '燕三条', '新潟'];
const tanigawa = new Array(2);
tanigawa[0] = ['東京', '上野', '大宮', '熊谷', '本庄早稲田', '高崎', '上毛高原', '越後湯沢', 'ガーラ湯沢'];
reverseLine(kagayaki, 0, 1);
reverseLine(hakutaka, 0, 1);
reverseLine(tsurugi, 0, 1);
reverseLine(asama, 0, 1);
reverseLine(toki, 0, 1);
reverseLine(tanigawa, 0, 1);
var staflag = 0;
let Nkagayaki = LineCopy(kagayaki);
let Nhakutaka = LineCopy(hakutaka);
let Ntsurugi = LineCopy(tsurugi);
let Nasama = LineCopy(asama);
let Ntoki = LineCopy(toki);
let Ntanigawa = LineCopy(tanigawa);
//北陸新幹線
export var annnaka1 = [601, 603, 607, 611, 615, 619, 623, 625, 627, 629, 631, 633];
export var iiyama = [591, 551, 553, 555, 559, 561, 565, 569, 571, 573, 575, 577];
export var ueda = [552, 554, 556, 558, 568, 570, 572, 574, 576, 578];
export var sakudaira = [552, 554, 556, 558, 570, 572, 574, 576, 578];
export var Ntakasaki = [556];
export var Karuizawa=[569];
export var Ueda=[559];
export var Sakudaira=[551,553,555,571,575,577];
//上越新幹線
export var N_Joumou = [307, 313, 317, 329, 333, 335, 337, 339, 341, 343];
export var N_Echigo = [317, 329, 333];
export var N_Urasa = [307, 313, 317, 329, 333, 337, 341, 345];
export var N_Tsubame = [333, 345]
export var N_Honjou = [412, 600, 604, 606, 608, 612, 614, 624, 628, 630];
export var N_Kumagaya = [472, 600, 604, 624, 628];
export var Kumagaya = [300, 302, 304, 306, 310, 316, 328, 330, 332, 334, 336, 342];
export var JRWSHobj = {//色は文字
    Typea: { type: "かがやき", Bcolor: 'yellow', color: black, detail: Nkagayaki, },
    Typeb: { type: "はくたか", Bcolor: red, color: white, detail: Nhakutaka, },
    Typec: { type: "つるぎ", Bcolor: '#3050FF', color: white, detail: Ntsurugi, },
};
export var JRSBobj = {//色は文字,後半はエラー防止の仮の状態
    Typea: { type: "かがやき", color: 'yellow', detail: Nkagayaki, },
    Typeb: { type: "はくたか", color: red, detail: Nhakutaka, },
    Typec: { type: "あさま", color: '#3050FF', detail: Nasama, },
    Typed: { type: "とき", color: 'yellow', detail: Ntoki, },
    Typee: { type: "たにがわ", color: red, detail: Ntanigawa, },
    Typef: { type: "あさま", color: '#3050FF', detail: Nasama, },
};
