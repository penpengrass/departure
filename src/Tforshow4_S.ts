import { DetailReplace_Set } from "./module/detailSimpleEdit";
import { NewAllLastShow, TwoLetterDistance, flagmarkerase, JRNameDevide, Bansenshow, DestinationSet } from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
import { JRSSobj } from "./detailStopData/JRW_S";
import { allJRSSColor } from "./typeColor";
import { allSanyoShinkansenSwitch } from "./module/displaySwitch";
import { trainTables } from "./types/trainTable";
var TablenumSub = Tablenum;
if (station == '博多駅') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
    /*Dtype = [1, 0];
    for (var td = 0; td < TablenumSub; td++) {
        for (var tr = 0; tr < 2; tr++) {
            FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
            if (Type[td][tr] == 'こだま' || Type[td][tr].startsWith('つばめ')) {
                Detail[td][tr] = '各駅にとまります';
            }
            if (Des[td][tr] == '小倉') {
                Detail[td][tr] = '小倉までとまりません';
            }
            Dtype = [1, 0];
        }
    }
    for (var tr = 0; tr < 2; tr++) {
        DetailReplace_Set(0, tr, Stops.N_Yamaguchi2, '小倉', '小倉・新山口');
        DetailReplace_Set(0, tr, Stops.M_Fukuyama2, '広島', '広島・福山');
        DetailReplace_Set(1, tr, Stops.M_Kurume1, '熊本', '久留米・熊本');
        DetailReplace_Set(1, tr, Stops.S_Yatsushiro1, '川内', '新八代・新水俣・出水・川内');
        DetailReplace_Set(1, tr, Stops.S_Tamana1, '久留米', '久留米・新玉名');
        DetailReplace_Set(1, tr, Stops.S_Omuta1, '久留米', '久留米・新大牟田');
        DetailReplace_Set(1, tr, Stops.S_Funakoya1, '久留米', '久留米・筑後船小屋');
        DetailReplace_Set(0, tr, Stops.S_Shimonoseki, '広島', '新下関・広島');
        DetailReplace_Set(0, tr, Stops.S_Yamaguchi2, '広島', '新山口・広島');
        DetailReplace_Set(0, tr, Stops.S_Tokuyama2, '広島', '徳山・広島');
        DetailReplace_Set(0, tr, Stops.S_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.N_Tokuyama2, '広島', '徳山・広島');
        DetailReplace_Set(0, tr, Stops.N_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.M_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.N_Fukuyama2, '岡山', '福山・岡山');
        if (Des[0][tr] == '新下関') {
            Detail[0][tr] = '小倉';
        }
    }
    console.log(TrainNumber);
    DetailLength = [2, 2];
    doallDetailShow(25);*/
} else if (station == '岡山駅' && Indexfile == 'index4_S2.php') {
    var config = getStationConfig(window.station, Indexfile);
    if (config && config.onRender) config.onRender();
    /*Dtype = [1, 0];
    console.log("--ここから詳細表示--");
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < 2; tr++) {
            if (L_hour > 20) {
                JRSSobj.Typeb.detail = Stops.Sanyo_hikari;
            }
            FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
            if (Type[td][tr].startsWith('こだま')) {
                Detail[td][tr] = '各駅にとまります';
            }
            //DetailBanner(td, tr, 25);
            Dtype = [1, 0];
        }
        JRSSobj.Typeb.detail = Stops.Sanyo_hikari;
    }
    console.log(Detail);
    for (var tr = 0; tr < 2; tr++) {
        DetailReplace_Set(0, tr, Stops.N_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.S_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.M_Himeji2, '新神戸', '姫路・新神戸');
        DetailReplace_Set(0, tr, Stops.H_Toyohashi2, '浜松', '豊橋');
        DetailReplace_Set(0, tr, Stops.H_Mishima2, '新横浜', '三島・新横浜');
        DetailReplace_Set(0, tr, Stops.H_Atami2, '新横浜', '熱海・新横浜');
        DetailReplace_Set(1, tr, Stops.M_Fukuyama1, '広島', '福山・広島');
        DetailReplace_Set(1, tr, Stops.N_Fukuyama1, '広島', '福山・広島');
        DetailReplace_Set(1, tr, Stops.N_Tokuyama1, '小倉', '徳山・小倉');
        DetailReplace_Set(1, tr, Stops.N_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, Stops.M_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, Stops.S_Tokuyama1, '小倉', '徳山・小倉');
        DetailReplace_Set(1, tr, Stops.S_Yamaguchi1, '小倉', '新山口・小倉');
        DetailReplace_Set(1, tr, [591], '福山・広島', '新倉敷・福山・三原・東広島・広島・新岩国・徳山');
        DetailReplace_Set(1, tr, [531], '新山口・', '');
        DetailReplace_Set(1, tr, Stops.HS_Shimonoseki1, '小倉', '新下関・小倉');
        DetailReplace_Set(1, tr, Stops.M_Kurume1, '熊本', '久留米・熊本');
        DetailReplace_Set(1, tr, Stops.S_Yatsushiro1, '川内', '新八代・新水俣・出水・川内');
        DetailReplace_Set(1, tr, Stops.S_Tamana1, '久留米', '久留米・新玉名');
        DetailReplace_Set(1, tr, Stops.S_Omuta1, '久留米', '久留米・新大牟田');
        DetailReplace_Set(1, tr, Stops.S_Funakoya1, '久留米', '久留米・筑後船小屋');
        if (Type[1][tr].startsWith("のぞみ") && Detail[1][tr] == "") {
            Detail[1][tr] = Des[1][tr] + "まで止まりません";
        }
    }
    
    DetailLength = [2, 2];
    doallDetailShow(25);*/
}
function ShinDetailSetting(td: number, tr: number, Utype: any, Uobj: any) {
    for (const key in Uobj) {
        if (Utype.startsWith(Uobj[key].type)) {
            trainTables[td].trains[tr].cars = Uobj[key].cars;
            Jiyuseki[td][tr] = Uobj[key].jiyu;
            //document.getElementById(TType).style.color = Uobj[key].color;
        }
    }
}
if (Indexfile == 'index4_S2.php') {
    NonGouflag = 1;
    JRNameDevide(2);
    DestinationSet();
    Bansenshow(1, 2);
    NewAllLastShow();
    allJRSSColor();
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            //この部分は未完成
            if (Indexfile == 'index4_S2.php') {
                ShinDetailSetting(td, tr, Type[td][tr], JRSSobj);
                if (Type[td][tr].includes('つばめ*') || Type[td][tr].includes('さくら*')) {
                    trainTables[td].trains[tr].cars = '6両編成';
                    Jiyuseki[td][tr] = '自由席1-3,5,6号車'
                }
                document.getElementById('TExplain' + (td + 1) + '' + (tr + 1))!.textContent = trainTables[td].trains[tr]?.cars ?? "";
            }
            if (Type[td][tr] != '' && (station == '博多駅' || station == '岡山駅') && tr < 2) {
                document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = '停車駅';
            }
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
    console.log(Jiyuseki);
    flagmarkerase(0, 'TType', '*');
    flagmarkerase(1, 'TType', '*');

    if (station == '岡山駅' || station == '広島駅') {
        setInterval(allSanyoShinkansenSwitch, 5000);
    } else {
        //setInterval(allTsurugaShinkansenSwitch, 5000);
    }
} else if (JRShinkansenflag == 1) {
    JRNameDevide(2);
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'ひかり') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1))!.textContent = '16両';
            } else if (Type[td][tr] != '') {
                document.getElementById('TDetail' + (td + 1) + '' + (tr + 1))!.textContent = '8両';
            }
            if (Type[td][tr] == 'のぞみ' || Type[td][tr] == 'さくら' || Type[td][tr] == 'みずほ') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-3号車';
            } else if (Type[td][tr] == 'ひかり') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-5号車';
            } else if (Type[td][tr] != '') {
                document.getElementById('TJiyuseki' + (td + 1) + '' + (tr + 1))!.textContent = '1-3,7,8号車';
            }
        }
    }
}

LastShowFlag = 1;