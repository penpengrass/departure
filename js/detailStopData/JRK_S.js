var kamome = [['門司港', '門司', '小倉', '戸畑', '八幡', '黒崎', '折尾', '赤間', '東郷', '福間', '博多', '鳥栖', '新鳥栖', '佐賀', '江北', '武雄温泉', '嬉野温泉', '新大村', '諫早', '長崎']];
reverseLine(kamome, 0, 1);
var JRK_Nobj = {//色は文字
    Typea: { type: "かもめ", detail: kamome, cars: '6両編成', jiyu: '自由席4-6号車' },
    Typeb: { type: "みどり", detail: kamome, cars: '6両編成', jiyu: '自由席1-5号車' },
    /*Typec: { type: "こだま", detail: local, cars: '8両編成', jiyu: '自由席1-3,7,8号車' },
    Typed: { type: "みずほ", detail: Amizuho, cars: '8両編成', jiyu: '自由席1-3号車' },
    Typee: { type: "さくら", detail: Asakura, cars: '8両編成', jiyu: '自由席1-3号車' },
    Typef: { type: "つばめ", detail: local, cars: '8両編成', jiyu: '自由席1-3号車' }*/
};
var K_Futsukaichi = [48, 52, 65, 56, 58, 60, 62, 64, 66];
var K_N_Ureshino = [12, 18, 26, 46, 50, 54, 58, 64];
var K_N_Omura = [12, 18];
var K_N_Kohoku = [12, 14, 18, 84, 3842, 88, 54, 58];
function NagasakiAddStop(tr) {
    DetailReplace_Set(0, tr, K_N_Omura, '、新大村', '');
    DetailReplace_Set(0, tr, K_N_Ureshino, '、嬉野温泉', '');
    DetailReplace_Set(0, tr, K_N_Kohoku, '江北、', '');
    DetailReplace_Set(0, tr, K_Futsukaichi, '、鳥栖', '、鳥栖、二日市');
}