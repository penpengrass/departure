var yakumo_stop = [['岡山', '倉敷', '備中高梁', '新見', '米子', '安来', '松江', '宍道', '出雲市']];
var matsukaze_stop = [['鳥取', '鳥取大学前', '倉吉', '米子', '安来', '松江', '宍道', '出雲市', '大田市', '江津', '浜田', '益田', '日原', '津和野', '徳佐', '三谷', '山口', '湯田温泉', '新山口']];
var sanrise_stop=[['東京','横浜','熱海','沼津','富士','静岡','大阪','三ノ宮','姫路','岡山','倉敷','備中高梁','新見','米子','安来','松江','宍道','出雲市']];
reverseLine(yakumo_stop, 0, 1);
reverseLine(matsukaze_stop, 0, 1);
reverseLine(sanrise_stop, 0, 1);
Dtype[2] = 0;
var JRSaninObj = {//色は文字
    Typea: { type: "特急やくも", Bcolor: 'yellow', color: black, detail: yakumo_stop },
    Typeb: { type: "特急ｽｰﾊﾟｰまつかぜ", Bcolor: red, color: white, detail: matsukaze_stop },
    Typec: { type: "特急ｽｰﾊﾟｰおき", Bcolor: '#3050FF', color: white, detail: matsukaze_stop },
    Typed: { type: "特急ｻﾝﾗｲｽﾞ出雲", Bcolor: orange, color: black, detail: sanrise_stop, },
    Typee: { type: "快速", Bcolor: '#FF6FFF', color: white, detail: local, },
    Typef: { type: "普通", Bcolor: 'skyblue', color: black, detail: local }
};
//山陰地区の追加停車駅がある号数をここに書く
function JRSaninAddStop(td) {
    var Shouyama = [2, 6, 10, 14, 18, 22, 26, 30];
    var Neu = [4, 8, 12, 16, 20, 24, 28, 32, 36];
    var Souja = [4, 14, 28];
    var Y_Daisen = [2, 4, 6, 8];
    var M_Daisen=[2,4];
    var Y_Tamatsukuri = [1, 5, 7, 9, 11, 13, 15, 17, 19];
    var M_Tamatsukuri = [1, 7];
    var M_Masuda = [5];
    var O_Tamatsukuri = [1, 3, 5];
    var M_Nima = [7];
    var M_Yunotsu = [7, 9];
    var O_Yunotsu = [5];
    var M_Hashi = [1];
    var O_Hashi = [3, 5];
    var M_Mihomisumi = [7];
    var Y_N_Shinji=[13];
    var O_N_Shinji=[3,5];
    var M_Nishiizumo=[9];
    //ここより宍道、西出雲の追加停車駅が必要
    if (td == 0) {
        DetailReplace_Set_One(td, Y_Daisen, '米子', '米子・伯耆大山');
        DetailReplace_Set_One(td, Shouyama, '新見', '生山・新見');
        DetailReplace_Set_One(td, Neu, '新見', '根雨・新見');
        DetailReplace_Set_One(td, Souja, '倉敷', '総社・倉敷');
    } else if (td == 1) {

        DetailReplace_Set_One(td, M_Masuda, '安来・松江', '松江', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, M_Masuda, '松江・宍道', '松江', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, O_N_Shinji, '松江・宍道', '松江', 'ｽｰﾊﾟｰおき');
        DetailReplace_Set_One(td, Y_N_Shinji, '松江・宍道', '松江', 'やくも');
        DetailReplace_Set_One(td, Y_Tamatsukuri, '松江', '松江・玉造温泉', 'やくも');
        DetailReplace_Set_One(td, M_Tamatsukuri, '松江', '松江・玉造温泉', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, M_Nima, '大田市', '大田市・仁万', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, M_Yunotsu, '江津', '温泉津・江津', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, O_Yunotsu, '江津', '温泉津・江津', 'ｽｰﾊﾟｰおき');
        DetailReplace_Set_One(td, M_Hashi, '江津', '江津・波子', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, O_Hashi, '江津', '江津・波子', 'ｽｰﾊﾟｰおき');
        DetailReplace_Set_One(td, O_Tamatsukuri, '松江', '松江・玉造温泉', 'ｽｰﾊﾟｰおき');
        DetailReplace_Set_One(td, O_Tamatsukuri, '益田', '三保三隅・益田', 'ｽｰﾊﾟｰおき');
        DetailReplace_Set_One(td, M_Mihomisumi, '益田', '三保三隅・益田', 'ｽｰﾊﾟｰまつかぜ');
        DetailReplace_Set_One(td, M_Nishiizumo, '大田市', '西出雲・大田市', 'ｽｰﾊﾟｰまつかぜ');
    }else if(td==2){
        DetailReplace_Set_One(td, M_Daisen, '米子', '米子・伯耆大山');
    }
}