JRNameDevide(2);
const kagayaki = new Array(2)
kagayaki[0] = ['東京', '上野', '大宮', '長野', '富山', '金沢', '福井', '敦賀'];
const hakutaka = new Array(2);
hakutaka[0] = ['東京', '上野', '大宮', '高崎', '長野', '上越妙高', '糸魚川', '黒部宇奈月温泉', '富山', '新高岡', '金沢', '小松', '加賀温泉', '芦原温泉', '福井', '越前たけふ', '敦賀'];
const asama = new Array(2)
asama[0] = ['東京', '上野', '大宮', '熊谷', '本庄早稲田', '高崎', '軽井沢', '佐久平', '上田', '長野', '富山', '金沢'];
reverseLine(kagayaki, 0, 1);
reverseLine(hakutaka, 0, 1);
reverseLine(asama, 0, 1);
console.log(hakutaka[1]);
var staflag = 0;
let Nkagayaki = LineCopy(kagayaki);
let Nhakutaka = LineCopy(hakutaka);
let Nasama = LineCopy(asama);
var JRSBobj = {//色は文字,後半はエラー防止の仮の状態
    Typea: { type: "かがやき", color: 'yellow', detail: Nkagayaki, },
    Typeb: { type: "はくたか", color: red, detail: Nhakutaka, },
    Typec: { type: "あさま", color: '#3050FF', detail: Nasama, },
    Typed: { type: "かがやき", color: 'yellow', detail: Nkagayaki, },
    Typee: { type: "はくたか", color: red, detail: Nhakutaka, },
    Typef: { type: "あさま", color: '#3050FF', detail: Nasama, },
};
