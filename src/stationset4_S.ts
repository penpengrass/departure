import { TrainNameDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
import { DetailReplace_Set } from "./module/detailSimpleEdit";
import { FDetail, doallDetailShow } from "./module/detailMainPut";
import * as Stops from "./detailStopData/JRW_S";
import { JRSSobj } from "./detailStopData/JRW_S";
import { TrainNumber } from './main';
import { trainTables } from './types/trainTable';
NonGouflag = 1;
export const JRSanyoStations: StationRegistry = {
    '新幹線広島駅': {
        name: '広島駅',
        company: '山陽新幹線',
        file: 'index4_S2.php',
        nonGouFlag:1,
        tableTitles: ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'],
        dtype: [3, 3],
        setup: () => {
            var kodama1 = [775, 781, 831, 833, 835, 837, 841, 843, 845, 847, 849, 851, 853, 855, 857, 859, 861, 865, 867, 787];
            limitedjustnumber(TT[1], 1, 'のぞみ');
            limitedjustnumber(TT[0], 2, 'のぞみ');
            limitedjustnumber(TT[0], 74, 'のぞみ(当駅始発)');
            limitedjustnumber(TT[0], 600, 'みずほ');
            limitedjustnumber(TT[1], 601, 'みずほ');
            limitednumber(TT[1], 541, 'さくら');
            limitednumber(TT[0], 540, 'さくら');
            limitednumber2(TT[1], kodama1, 'こだま');
            limitedjustnumber(TT[0], 836, 'こだま');
        }
    },
    '新幹線博多駅': {
        name: '博多駅',
        company: '山陽新幹線',
        file: 'index4_S2.php',
        nonGouFlag:1,
        tableTitles: ['山陽・東海道新幹線 新大阪・東京方面', '九州新幹線 熊本・鹿児島中央方面'],
        setup: () => {
            detailLength_one = 2;
            detailflag = 2;
            TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '九州新幹線 熊本・鹿児島中央方面'];
            limitedjustnumber(TT[1], 1, 'のぞみ');
            limitedjustnumber(TT[0], 2, 'のぞみ');
            limitedjustnumber(TT[0], 600, 'みずほ');
            limitedjustnumber(TT[1], 601, 'みずほ');
            limitedjustnumber(TT[0], 838, 'こだま');
            limitedjustnumber(TT[0], 540, 'さくら');
        },
        onRender: () => {
            var TablenumSub = Tablenum;
            Dtype = [1, 0];
            for (var td = 0; td < TablenumSub; td++) {
                for (var tr = 0; tr < 2; tr++) {
                    FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
                    if (Type[td][tr] == 'こだま' || Type[td][tr].startsWith('つばめ')) {
                        trainTables[td].trains[tr].detail = '各駅にとまります';
                    }
                    if (Des[td][tr] == '小倉') {
                        trainTables[td].trains[tr].detail = '小倉までとまりません';
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
                   trainTables[0].trains[tr].detail = '小倉';
                }
            }
            DetailLength = [2, 2];
            doallDetailShow(25);
        }
    },
    '新幹線岡山駅': {
        name: '岡山駅',
        company: '山陽新幹線',
        file: 'index4_S2.php',
        nonGouFlag:1,
        tableTitles: ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'],
        setup: () => {
            detailLength_one = 2;
            detailflag = 2;
            let kodama2 = [830, 832, 834, 836, 840, 842, 854, 856, 858, 860, 862, 866, 868, 870];
            let hikari1 = [591, 531, 533, 535];
            limitednumber2(TT[1], hikari1, 'ひかり');
            limitednumber2(TT[0], kodama2, 'こだま');
            limitednumber(TT[1], 831, 'こだま');
            limitednumber(TT[1], 541, 'さくら');
            limitednumber(TT[0], 540, 'さくら');
            limitedjustnumber(TT[0], 500, 'ひかり');
            limitedjustnumber(TT[1], 61, 'のぞみ', '広島');
            limitedjustnumber(TT[1], 1, 'のぞみ', '博多');
            limitedjustnumber(TT[0], 600, 'みずほ');
            limitedjustnumber(TT[1], 601, 'みずほ');
            limitedjustnumber(TT[0], 70, 'のぞみ*');
            limitedjustnumber(TT[0], 2, 'のぞみ');
        },
        onRender: () => {
            Dtype = [1, 0];
            console.log("--ここから詳細表示--");
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < 2; tr++) {
                    if (L_hour > 20) {
                        JRSSobj.Typeb.detail = Stops.Sanyo_hikari;
                    }
                    FDetail(Type[td][tr], JRSSobj, Dtype[td], td, tr, "・");
                    if (Type[td][tr].startsWith('こだま')) {
                        trainTables[td].trains[tr].detail = '各駅にとまります';
                    }
                    //DetailBanner(td, tr, 25);
                    Dtype = [1, 0];
                }
                JRSSobj.Typeb.detail = Stops.Sanyo_hikari;
            }
            console.log(Detail);
            console.log(TrainNumber);
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
                if (Type[1][tr].startsWith("のぞみ") && trainTables[1].trains[tr].detail == "") {
                   trainTables[1].trains[tr].detail = Des[1][tr] + "まで止まりません";
                }
            }
            /*for (var td = 0; td < TablenumSub; td++) {
                for (var tr = 0; tr < 2; tr++) {
                    DetailBanner(td, tr, 25);
                }
            }*/
            DetailLength = [2, 2];
            doallDetailShow(25);

        }
    }
}