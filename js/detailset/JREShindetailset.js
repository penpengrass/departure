var kagayaki=new Array(2)
kagayaki[0]=['東京','上野','大宮','長野','富山','金沢'];
var hakutaka=new Array(2);
hakutaka[0]=['東京','上野','大宮','高崎','軽井沢','長野','上越妙高','糸魚川','黒部宇奈月温泉','富山','新高岡','金沢'];
var asama=new Array(2)
asama[0]=['東京','上野','大宮','熊谷','本庄早稲田','高崎','安中榛名','軽井沢','佐久平','上田','長野','富山','金沢'];
reverseLine(kagayaki,0,1);
reverseLine(hakutaka,0,1);
reverseLine(asama,0,1);
console.log(kagayaki[0]);
var staflag=0;
var JRSBobj = {//色は文字,後半はエラー防止の仮の状態
    Typea: { type: "かがやき", color: 'yellow', detail: kagayaki, },
    Typeb: { type: "はくたか", color: red, detail: hakutaka, },
    Typec: { type: "あさま", color: '#3050FF', detail: asama, },
    Typed: { type: "かがやき", color: 'yellow', detail: kagayaki, },
    Typee: { type: "はくたか", color: red, detail: hakutaka, },
    Typef: { type: "あさま", color: '#3050FF', detail: asama, },
};