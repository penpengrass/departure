import { limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import { JRNameDevide, flagmarkerase, Bansenshow, swapColumns, AllClassSetting } from "./module/firstDisplayEdit";
import { JREScolor } from "./module/colorSimpleSet";
import { TrainNumber } from "./module/firstDisplayEdit";
import { LimitedNumberPass } from "./module/firstDetailEdit";
import { DetailBanner, FDetail } from "./module/detailMainPut";
import { Shin_DetailReplace_Set_One } from "./module/detailSimpleEdit";
import * as Stops from "./detailStopData/JRHokuJoetsuset";
import { comment } from './types/constants';
export const JREastShinkansenStations: StationRegistry = {
    '新幹線東京駅': {
        name: '東京駅',
        company: '新幹線',
        tableTitles: ['東北・山形・秋田新幹線', '上越・長野新幹線'],
        file: 'index6_S.php',
        nonGouFlag: 0,
        setup: () => {
            var hayabusa = [1, 101, 5, 103, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 31, 33, 35, 105, 39, 107, 41, 109, 43, 111, 45, 47];
            //hayabusa=[1, 101, 5, 103, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 31, 33, 35, 105, 39, 107, 41, 43, 111, 45, 47];
            limitednumber2(TT[0], hayabusa, 'はやぶさ');
            limitedjustnumber(TT[0], 51, 'やまびこ', '盛岡');
            limitedjustnumber(TT[0], 201, 'やまびこ*');
            limitedjustnumber(TT[0], 121, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
            limitednumber(TT[0], 251, 'なすの');
            limitednumber(TT[1], 301, 'とき');
            limitedjustnumber(TT[1], 401, 'たにがわ');
            limitednumber(TT[2], 601, 'あさま');
            limitednumber(TT[2], 551, 'はくたか');
            limitedjustnumber(TT[2], 501, 'かがやき');
            console.log(TT[1]);
            console.log(TT[3]);
            TT[3] = makeemptyTable(TT[1], TT[2]);
            TTconnect(TT[1], TT[2], TT[3]);
            TT[1] = TT[3];
        }
    },
    '新幹線仙台駅': {
        name: '仙台駅',
        company: '東北新幹線',
        tableTitles: ['新青森方面', '東京方面'],
        file: 'index6_S.php',
        nonGouFlag: 0,
        setup: () => {
            limitedjustnumber(TT[0], 51, 'やまびこ');
            limitedjustnumber(TT[0], 101, 'はやぶさ', '盛岡');
            limitedjustnumber(TT[0], 1, ['はやぶさ', 'はやぶさ･こまち'], ['新青森', '新函館北斗', '新青森･秋田', '新函館北斗･秋田']);
            limitedjustnumber(TT[1], 2, ['はやぶさ', 'はやぶさ･こまち']);
            limitedjustnumber(TT[1], 102, 'はやぶさ*');
            limitedjustnumber(TT[1], 202, 'やまびこ*');
            limitedjustnumber(TT[1], 50, 'やまびこ+');
            limitedjustnumber(TT[1], 122, 'やまびこ');
            detailflag = 4;

        },
        onRender: () => {
            for (var tr = 0; tr < orderNum; tr++) {
                if (TrainNumber[0][tr] > 11 && TrainNumber[0][tr] < 100 && Type[0][tr].includes('はやぶさ')) {
                    TrainNumber[0][tr] += 2;
                    document.getElementById('TName' + (1) + (tr + 1))!.textContent = TrainNumber[0][tr] + "号";
                }
            }
            comment!.innerHTML += "<br>実際には停車駅表示があるが未実装";
        }
    },
    '新幹線高崎駅': {
        name: '高崎駅',
        company: '新幹線',
        tableTitles: ['北陸新幹線', '上越新幹線', '新幹線 大宮 上野 東京方面'],
        file: 'index6_S.php',
        nonGouFlag: 0,
        setup: () => {
            DetailLength = [1, 1, 1];
            window.Dtype = [0, 0, 0];
            detailflag = 2;
            limitedjustnumber(TT[0], 551, 'はくたか');
            limitedjustnumber(TT[0], 601, 'あさま');
            limitedjustnumber(TT[1], 301, 'とき');
            limitedjustnumber(TT[1], 401, 'たにがわ');
            limitedjustnumber(TT[2], 552, 'はくたか');
            limitedjustnumber(TT[2], 300, 'とき');
            limitedjustnumber(TT[2], 400, 'たにがわ');
            limitedjustnumber(TT[2], 600, 'あさま');
        },
        onRender: () => {
            const table1 = document.getElementById("TESTable1");
            const table2 = document.getElementById("TESTable2");
            const table3 = document.getElementById("TESTable3");
            swapColumns(table1, 0, 1);
            swapColumns(table1, 1, 2);
            swapColumns(table2, 0, 1);
            swapColumns(table2, 1, 2);
            swapColumns(table3, 0, 1);
            swapColumns(table3, 1, 2);
            AllClassSetting('.CDetailtitle', 'textAlign', 'left');
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < orderNum; tr++) {
                    if (Type[td][0] == '') {
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = 'お知らせ';
                        Detail[td][0] = '本日の運転は終了しました';
                        break;
                    } else if (Type[td][tr] != '') {
                        if (tr == 0) {
                            document.getElementById('TDetail' + (td + 1) + (tr + 1))!.textContent = '停車駅';
                        }
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '12両編成';
                    }
                }
            }
            for (var tr = 0; tr < orderNum; tr++) {
                LimitedNumberPass(0, tr, TrainNumber[0][tr] >= 557 && TrainNumber[0][tr] < 600, TrainNumber);
                LimitedNumberPass(0, tr, TrainNumber[0][tr] >= 571 && TrainNumber[0][tr] < 600, TrainNumber);
                LimitedNumberPass(1, tr, TrainNumber[1][tr] >= 303 && TrainNumber[1][tr] < 400, TrainNumber);
                LimitedNumberPass(1, tr, TrainNumber[1][tr] >= 311 && TrainNumber[1][tr] < 400, TrainNumber);
                LimitedNumberPass(2, tr, TrainNumber[2][tr] >= 312 && TrainNumber[2][tr] < 400, TrainNumber);
                LimitedNumberPass(2, tr, TrainNumber[2][tr] >= 326 && TrainNumber[2][tr] < 400, TrainNumber);
                LimitedNumberPass(2, tr, TrainNumber[2][tr] >= 338 && TrainNumber[2][tr] < 400, TrainNumber);
                LimitedNumberPass(2, tr, TrainNumber[2][tr] >= 556 && TrainNumber[2][tr] < 600, TrainNumber);
            }
            window.Dtype[2] = 1;
            for (var td = 0; td < 3; td++) {
                FDetail(Type[td][0], Stops.JRSBobj, Dtype[0], td, 0, "・");
                if (Detail[td][0] != '') {
                    Detail[td][0] += "・" + Des[td][0];
                }
            }
            Shin_DetailReplace_Set_One(0, Stops.annnaka1, '軽井沢', '安中榛名・軽井沢');
            Shin_DetailReplace_Set_One(0, Stops.iiyama, '上越妙高', '飯山・上越妙高');
            Shin_DetailReplace_Set_One(0, Stops.Karuizawa, '長野', '軽井沢・長野');
            Shin_DetailReplace_Set_One(0, Stops.Ueda, '長野', '軽井沢・上田・長野');
            Shin_DetailReplace_Set_One(0, Stops.Sakudaira, '長野', '軽井沢・佐久平・上田・長野');
            Shin_DetailReplace_Set_One(1, Stops.N_Joumou, '上毛高原・越後湯沢', '越後湯沢');
            Shin_DetailReplace_Set_One(1, Stops.N_Echigo, '越後湯沢・浦佐', '浦佐');
            Shin_DetailReplace_Set_One(1, Stops.N_Urasa, '浦佐・長岡', '長岡');
            Shin_DetailReplace_Set_One(1, Stops.N_Tsubame, '長岡・燕三条', '長岡');
            Shin_DetailReplace_Set_One(2, Stops.N_Honjou, '本庄早稲田・熊谷', '熊谷');
            Shin_DetailReplace_Set_One(2, Stops.N_Kumagaya, '熊谷・大宮', '大宮');
            Shin_DetailReplace_Set_One(2, Stops.Kumagaya, '大宮', '熊谷・大宮');
            for (var td = 0; td < 3; td++) {
                document.getElementById('TDetailtitle' + (td + 1) + '' + (0 + 1))!.textContent = Detail[td][0];
                DetailBanner(td, 0, 23, 1, 'TDetailtitle');
            }
            comment!.innerHTML = "臨時列車の有無や停車駅は不正確";
        }
    }
}
//Tforshow6_S.tsをインタフェース化した際に削除する.。
if (station == '仙台駅') {
    detailflag = 4;
} else if (station == '高崎駅') {
    DetailLength = [1, 1, 1];
    window.Dtype = [0, 0, 0];
    detailflag = 2;
}