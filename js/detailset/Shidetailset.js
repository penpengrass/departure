//詳細表示の定義
let subexpress = "0";
let subsemiexpress = "0";
var Mrapid=new Array(2);
var Ishiduti=new Array(2);
var Sunport=new Array(2);
var Uzushio=new Array(2);
var Shimanto=new Array(2);
Mrapid[0]=['高松','坂出','児島','茶屋町','妹尾','岡山'];
Mrapid[1]=['高松','端岡','鴨川','坂出','児島','上の町','木見','植松','茶屋町','早島','妹尾','大元','岡山'];
Ishiduti[0]=['高松','坂出','宇多津','丸亀','多度津','観音寺','川之江','伊予三島','新居浜','伊予西条','壬生川','今治','松山'];
Uzushio[0]=['高松','栗林','屋島','志度','三本松','引田','板野','徳島'];
Uzushio[1]=['高松','坂出','宇多津','児島','岡山'];
Sunport[0]=['高松','端岡','坂出','以遠各駅','今治','松山'];
Shimanto[0]=['高松','坂出','宇多津','丸亀','多度津','善通寺','琴平','阿波池田','大歩危','大杉','土佐山田','後免','高知','旭','朝倉','伊野','佐川','須崎','土佐久礼','窪川','土佐佐賀','土佐上川口','土佐入野','中村'];
Shimanto[1]=['高松','坂出','児島','岡山','姫路','三ノ宮','大阪','静岡','富士','沼津','熱海','横浜','東京'];
var limited=Uzushio.slice();
var staflag=0;
var rapid=Ishiduti.slice();
var Jrapid=Sunport;
var Jsubrapid=Shimanto;
var local=['','','',''];
/*for(var i=0;i<4;i++){
    local[i]="各駅にとまります";
}*/
var JRSobj = {//色は文字
    Typea: { type: "特急うずしお", color: red, detail: limited, },
    Typeb: { type: "特急いしづち", color: red, detail: rapid, },
    Typec: { type: "快速ﾏﾘﾝﾗｲﾅｰ", color: 'skyblue', detail: Mrapid, },
    Typed: { type: "快速ｻﾝﾎﾟｰﾄ", color: 'lightgreen', detail: Jrapid, },
    Typee: { type: "特急", color: red, detail: Jsubrapid, },
    Typef: { type: "各駅停車", color: 'lightgreen', detail: local, }
};
