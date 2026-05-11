import { TrainNameLineIncludeDevide, TrainNameDevide, DestinationDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import { swapColumns, AllTrainTypeReplace, JRNameDevide, Bansenshow, AllClassSetting, TrainTypeSet, TrainTypeWordChange, DestinationWordChange } from "./module/firstDisplayEdit";
import { CarsDevideToLine, CarsInto } from "./module/carsEdit";
import { TrainNumber } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { JRK_Nobj, NagasakiAddStop } from "./detailStopData/JRK_S";
import { comment } from './types/constants';
import { plainTrainTables, trainTables } from './types/trainTable';
NonGouflag = 1;
export const JRKyushuStations: StationRegistry = {
    '小倉駅': {
        name: '小倉駅',
        company: 'JR九州',
        tableTitles: ['鹿児島本線 門司港 下関方面', '鹿児島本線 黒崎 博多方面', '日豊本線 行橋 大分方面'],
        file: 'index10.php',
        setup: () => {
            detailflag = 2;
            NonGouflag = 0;
            limitednumber(TT[0], 4, '特急きらめき');
            limitednumber(TT[1], 1, '特急きらめき');
            limitedjustnumber(TT[1], 2, '特急ソニック');
            limitedjustnumber(TT[2], 1, '特急ソニック');
        },
        onRender: () => {
            let EightCars = [[4, 6, 66], [1, 9, 3], []];
            let SevenCars = [[], [202, 2, 4, 8, 18, 20, 22, 24, 26, 30, 40, 42, 44, 46, 48, 52, 58, 60], [1, 3, 5, 7, 9, 13, 23, 25, 27, 29, 31, 35, 45, 47, 49, 51, 53, 57]];
            let SixCars = [[8, 14], [5, 7, 6, 10, 12, 14, 16, 28, 32, 34, 36, 38, 50, 54, 56, 101, 201], [11, 15, 17, 19, 21, 33, 37, 39, 41, 43, 55, 59, 201]];
            let FourCars = [[10, 12], [], []];
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < orderNum; tr++) {
                    var _number = trainTables[td].trains[tr]?.trainNumber ?? 0;
                    if (SixCars[td].includes(_number)) {
                        trainTables[td].trains[tr].cars = '6両';
                    } else if (SevenCars[td].includes(_number)) {
                        trainTables[td].trains[tr].cars = '7両';
                    } else if (EightCars[td].includes(_number)) {
                        trainTables[td].trains[tr].cars = '8両';
                    } else if (FourCars[td].includes(_number)) {
                        trainTables[td].trains[tr].cars = '4両';
                    }
                }
            }
            for (var tr = 0; tr < orderNum; tr++) {
                AllTrainTypeReplace(0, tr, '区間快速', '普通');
                AllTrainTypeReplace(0, tr, '快速', '普通');
                if (Des[0][tr] == '下関') {
                    trainTables[0].trains[tr].cars = '4両';
                }

                if ((Des[2][tr] == '田川後藤寺' || Des[2][tr] == '添田') && Type[2][tr] == '普通') {
                    trainTables[2].trains[tr].cars = '2両';
                } else if (Type[2][tr] == '普通') {
                    trainTables[2].trains[tr].cars = '3両';
                }
            }
            CarsDevideToLine(0);
            CarsDevideToLine(1);
            CarsDevideToLine(2);
        }
    },
    '博多駅': {
        name: '博多駅',
        company: 'JR九州',
        tableTitles: ['山陽・東海道新幹線 新大阪方面', '九州新幹線 鹿児島中央方面',
            '鹿児島本線下り 大牟田 久留米方面', '長崎本線 佐賀 佐世保方面', '鹿児島本線上り 小倉方面', '福北ゆたか線 篠栗方面'],
        file: 'index10_H.php',
        setup: () => {
            limitedjustnumber(TT[1], 1, 'のぞみ');
            limitedjustnumber(TT[0], 2, 'のぞみ');
            limitedjustnumber(TT[0], 600, 'みずほ');
            limitedjustnumber(TT[1], 601, 'みずほ');
            limitedjustnumber(TT[0], 838, 'こだま');
            limitedjustnumber(TT[0], 540, 'さくら');
            limitedjustnumber(TT[4], 1, '特急ソニック');
            limitedjustnumber(TT[4], 2, '特急きらめき');
            limitedjustnumber(TT[2], 101, '特急かささぎ');
            limitedjustnumber(TT[2], 1, '特急ゆふ');
            limitedjustnumber(TT[2], 1, '特急ゆふいんの森');
            limitedjustnumber(TT[2], 1, ['特急みどり', '特急リレーかもめ', '特急ハウステンボス', '特急ハウステンボス･特急みどり', '特急みどり(リレーかもめ)']);
            var selectstation = ['武雄温泉', '佐賀', '肥前鹿島', '佐世保', 'ハウステンボス', '江北', 'ハウステンボス･佐世保'];
            DestinationDevide(selectstation, 2, 3);
        }
    },
    '鳥栖駅': {
        name: '鳥栖駅',
        company: 'JR九州',
        tableTitles: ['鹿児島線 二日市 博多方面(特急)', '鹿児島線 二日市 博多方面(快速 普通)',
            '長崎線 新鳥栖 佐賀方面(特急)', '長崎線 新鳥栖 佐賀方面(快速 普通)'
            , '鹿児島線 久留米 大牟田方面(特急)', '鹿児島線 久留米 大牟田方面(快速 普通)'],
        file: 'index10.php',
        setup: () => {
            detailflag = 2;
            NonGouflag = 0;
            let trainName = ['特急リレーかもめ', 'リレーかもめ', '特急ゆふいんの森', '特急かささぎ', 'ハウステンボス･みどり', '特急みどり', 'みどり(リレーかもめ)', '特急ゆふ', '特急ゆふ73号'];
            TrainNameLineIncludeDevide(trainName, 1, 0);
            TrainNameLineIncludeDevide(trainName, 3, 2);
            TrainNameLineIncludeDevide(trainName, 5, 4);
            limitedjustnumber(TT[0], 102, '特急かささぎ');
            limitedjustnumber(TT[2], 101, '特急かささぎ');
            limitedjustnumber(TT[0], 2, '特急ゆふ');
            limitedjustnumber(TT[4], 1, '特急ゆふ');
            limitedjustnumber(TT[0], 2, '特急ゆふいんの森');
            limitedjustnumber(TT[4], 1, '特急ゆふいんの森');
            limitedjustnumber(TT[0], 2, ['特急みどり', 'リレーかもめ', 'ハウステンボス', 'ハウステンボス･みどり', 'みどり(リレーかもめ)']);
            limitedjustnumber(TT[2], 1, ['特急みどり', 'リレーかもめ', 'ハウステンボス', 'ハウステンボス･みどり', 'みどり(リレーかもめ)']);
        },
        onRender: () => {
            let EightCars = [15, 17, 19, 21, 25, 27, 29, 31, 33, 35, 37, 39, 41, 47, 49, 51, 107, 109, 111, 55, 57, 61, 65, 18, 20, 22, 24, 26, 28, 30, 32, 34, 60, 62, 64, 66];
            let SixCars = [103, 105, 23, 43, 45, 53, 113, 115, 59, 63, 67, 201, 202, 6, 16, 36, 110, 50, 56, 58];
            const table1 = document.getElementById("ZTable1");
            const table2 = document.getElementById("ZTable3");
            const table3 = document.getElementById("ZTable5");
            swapColumns(table1, 2, 3);
            swapColumns(table2, 2, 3);
            swapColumns(table3, 2, 3);
            swapColumns(table1, 1, 2);
            swapColumns(table2, 1, 2);
            swapColumns(table3, 1, 2);
            CarsDevideToLine(1);
            CarsDevideToLine(3);
            CarsDevideToLine(5);
            TrainTypeSet(0);
            TrainTypeSet(2);
            TrainTypeSet(4);
            for (var tr = 0; tr < 2; tr++) {
                if (!Type[0][tr].includes('ゆふ')) {
                    if (SixCars.includes(TrainNumber[0][tr])) {
                        trainTables[0].trains[tr].cars = '6両';
                    } else if (TrainNumber[0][tr] > 0) {
                        trainTables[0].trains[tr].cars = '8両';
                    }
                }
                if (SixCars.includes(TrainNumber[2][tr])) {
                    trainTables[2].trains[tr].cars = '6両';
                } else if (TrainNumber[2][tr] > 0) {
                    trainTables[2].trains[tr].cars = '8両';
                }
                if (Type[2][tr].includes('みどり(リレーかもめ')) {
                    Des[2][tr] = '佐世保･長崎';
                }
                if (Des[2][tr] == '武雄温泉') {
                    trainTables[2].trains[tr].destination = '長崎';
                }
                DestinationWordChange(2, tr, 'ハウステンボス･佐世保', 'ﾊｳｽﾃﾝﾎﾞｽ･佐世保');
                if (Type[3][tr] == '普通' && trainTables[3].trains[tr].cars === undefined) {
                    trainTables[3].trains[tr].cars = '2両';
                }
            }
        }
    },
    '長崎駅': {
        name: '長崎駅',
        company: 'JR九州',
        tableTitles: ['西九州新幹線　佐賀・新鳥栖・博多方面', '長与経由 大村線 長崎本線 ', '市布経由 大村線 長崎本線'],
        file: 'index10.php',
        dtype: [0],
        setup: () => {
            detailflag = 2;
            TrainNameDevide('長与', 2, 1);
            var nagasaki = [2, 4, 8, 12, 14, 18, 22, 26, 30, 34, 38, 42, 46, 48, 50, 52, 54, 56, 58, 60, 64, 66, 102];
            limitedjustnumber2(TT[0], nagasaki, 'かもめ');
            NonGouflag == 0
        },
        onRender: () => {
            NonGouflag = 0;
            JRNameDevide(1);
            AllClassSetting(".Destination", 'color', 'orange');
            AllClassSetting(".cars", 'color', 'greenyellow');
            AllClassSetting(".CTime", 'color', 'white');
            for (var tr = 0; tr < orderNum; tr++) {
                FDetail(Type[0][tr], JRK_Nobj, Dtype[0], 0, tr, "、");
                NagasakiAddStop(tr)
                LastLetterRemove(0, tr, "、");
                Detail[0][tr] = "停車駅は、<span class='Corange'>" + Detail[0][tr] + "</span>です"
                if (TrainNumber[0][tr] < 99 && TrainNumber[0][tr] > 0) {
                    document.getElementById('TCars' + (1) + (tr + 1))!.textContent = '自由席4-6号車';
                    trainTables[0].trains[tr].type = 'かもめ'
                } else if (TrainNumber[0][tr] > 99) {
                    document.getElementById('TCars' + (1) + (tr + 1))!.textContent = '全車自由席';
                    Detail[0][tr] += "　諫早、新大村方面の<span class='Corange'>最終列車</span>です。";
                    trainTables[0].trains[tr].type = 'かもめ'
                }
                if (Type[0][tr] != "") document.getElementById('TDetail1' + (tr + 1))!.innerHTML = Detail[0][tr];
                if (Type[1][tr] != "") {
                    if (Type[1][tr].includes('*')) trainTables[1].trains[tr].cars = '3両';
                    else if (Type[1][tr].includes('+')) trainTables[1].trains[tr].cars = '4両';
                    else trainTables[1].trains[tr].cars = '2両';
                    TrainTypeSet(1);
                }
                TrainTypeWordChange(1, tr, '長与経由普通', '普通');
                const _Des1 = plainTrainTables[1].trains[tr]?.destination ?? "";
                const _Des2 = plainTrainTables[2].trains[tr]?.destination ?? "";
                if (_Des1 != '' && _Des1 != '長与') {
                    trainTables[1].trains[tr].destination += _Des1 + '(長与)';
                }
                if (_Des2 != '') {
                    trainTables[2].trains[tr].destination += _Des2 + '(市布)';
                }
                if (Type[2][tr] != "") {
                    if (Type[2][tr].includes('*')) trainTables[2].trains[tr].cars = '3両';
                    else if (Type[2][tr].includes('+')) trainTables[2].trains[tr].cars = '4両';
                    else trainTables[2].trains[tr].cars = '2両';
                    TrainTypeSet(2);
                }
            }
            if (Type[0][0] != "") document.getElementById('TDetail1' + (3))!.innerHTML = "西九州新幹線では、<span class='Corange'>交通系ICカード</span>のご利用はできません。";
            if (holidayflag == 2) {
                comment!.textContent += " 西九州新幹線の臨時列車の運転日です。";
            }
        }
    }
}