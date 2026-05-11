import { limitedjustnumber, limitednumber, limitednumber2, TrainNameDevide } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
import { Meiobj } from './detailStopData/Meidenset';
import { TypeColorChange, TypeColorChange2 } from "./module/colorSimpleSet";
import { TrainTypeSet, AllWordChange, JRLimitedNumber, holiday_F, AllTrainTypeReplace } from "./module/firstDisplayEdit";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { SpendingTime, DetailReplace, SpecialStop } from "./module/detailSimpleEdit";
import { TrainNumber } from "./module/firstDisplayEdit";
import { JRCeNobj, JRKaobj, Nagahama } from "./detailStopData/JRNadetailset";
import { BottomBanner } from "./module/detailBannerSwitch";
import { plainTrainTables, trainTables } from './types/trainTable';
function JRTokaiDetailShow(td: number) {
    TrainTypeSet(td);
    const _Type = trainTables[td].trains[0].type.replace('(当駅始発)', '');
    LastLetterRemove(td, 0, '・');
    if (trainTables[td].trains[0].detail == '各駅にとまります') {
        trainTables[td].trains[0].detail = Des[td][0] + 'までの各駅';
    }
    if (_Type != '') {
        document.getElementById('TDetail' + (td + 1) + '1')!.innerHTML =
            '<span id="Detail_Type' + (td + 1) + '">' + _Type + '</span> ' + Des[td][0] + '行きの停車駅は' +
            '<span class="orange">' + trainTables[td].trains[0].detail + '</span>です';
    }
    TypeColorChange2(td, 'Detail_Type', '特急', 'red');
    TypeColorChange2(td, 'Detail_Type', '快速', 'orange');
}
export const JRTokaiStations: StationRegistry = {
    '豊橋駅': {
        name: '豊橋駅',
        company: 'JR東海 名鉄線',
        tableTitles: ['飯田線 (豊川・飯田方面)', '名鉄線(東岡崎・名鉄名古屋方面)', '東海道線(浜松・静岡方面)', '東海道線(岡崎・名古屋方面)'],
        file: 'index7.php',
        setup: () => {
            Dtype[3] = 1;
            limitednumber(TT[0], 1, '特急伊那路');
        },
        onRender: () => {
            AllTrainTypeReplace(1, 0, '特急', '特急(一部特別車)');
            AllTrainTypeReplace(1, 0, '快特', '快特(一部特別車)');
            AllTrainTypeReplace(1, 1, '特急', '特急(一部特別車)');
            AllTrainTypeReplace(1, 1, '快特', '快特(一部特別車)');
            FDetail(Type[3][0], JRCeNobj, Dtype[3], 3, 0, "・");
            console.log(Type[1][0]);
            AllWordChange(1, 0, Des, '名鉄名古屋', '名古屋');
            FDetail(Type[1][0], Meiobj, Dtype[1], 1, 0, "・");
            Detail[1][0] = Detail[1][0].replace('須ケ口・', '');
            AllWordChange(1, 0, Des, '名古屋', '名鉄名古屋');
            SpecialStop(1, '(須)', '名古屋', '須ケ口', '・', 0.8);
            SpecialStop(1, '(新)', '東岡崎', '新安城', '・', 0.8);
            SpecialStop(1, '(国)(伊)', '豊橋', '伊奈・国府', '・', 0.8);
            SpecialStop(1, '(国)', '豊橋', '国府', '・', 0.8);
            SpecialStop(1, '(伊)', '豊橋', '伊奈', '・', 0.8);
            SpecialStop(3, '(稲)', '名古屋', '稲沢', '・', 0.8);
            SpecialStop(3, ' 幸', '蒲郡', '幸田', '・', 0.8);
            SpecialStop(3, ' 三谷', '豊橋', '三河三谷', '・', 0.8);
            document.getElementById('Detail_Banner1')!.remove();
            document.getElementById('Detail_Banner2')!.remove();
            Tablenums = [3, 2, 3, 3];
            LastLetterRemove(1, 0, '・');
            if (Type[1][0] == '急行(東岡崎から準急)') {
                DetailReplace(1, 0, '東岡崎', '東岡崎・矢作橋');
                DetailReplace(1, 0, '前後', '豊明・前後・有松・中京競馬場前');
            }
            if (Type[1][0] != '') {
                BottomBanner("TRow", 2, 3, 5, '停車駅は<span class="orange">' + Detail[1][0] + '</span>です');
            }
            if (Type[2][0] != '') {
                SpendingTime(2, '浜松', 'およそ35', 'orange');
                //document.getElementById('TDetail3').innerHTML = '浜松までの所要時間は<span class="orange">およそ35分</span>です';
            }
            LastLetterRemove(3, 0, '・');
            if (trainTables[3].trains[0].detail == '各駅にとまります') {
                trainTables[3].trains[0].detail = Des[3][0] + 'までの各駅';
            }
            JRTokaiDetailShow(3);
        }
    },
    '浜松駅': {
        name: '浜松駅',
        company: 'JR東海',
        tableTitles: ['東海道線 掛川 静岡方面', '東海道線 豊橋 名古屋方面'],
    },
    '沼津駅': {
        name: '沼津駅',
        company: 'JR東海',
        tableTitles: ['東海道線 静岡 浜松方面', '東海道線 熱海 東京方面', '御殿場線 御殿場 国府津方面'],
    },
    '静岡駅': {
        name: '静岡駅',
        company: 'JR東海',
        tableTitles: ['東海道線 沼津 熱海方面', '東海道線 浜松 豊橋方面'],
        setup: () => {
            limitednumber(TT[0], 1, '特急ふじかわ');
        },
    },
    '岐阜駅': {
        name: '岐阜駅',
        company: 'JR東海',
        tableTitles: ['東海道線 大垣 米原方面', '高山本線 美濃太田方面', '東海道線 名古屋 豊橋方面'],
        dtype: [0, 0, 0],
        setup: () => {
            limitednumber(TT[0], 1, '特急しらさぎ');
            limitednumber(TT[2], 2, '特急しらさぎ');
            limitednumber(TT[1], 1, '特急ひだ');
            limitednumber(TT[2], 2, '特急ひだ');
            limitednumber(TT[0], 1, 'ホームライナー大垣');
        },
        onRender: () => {
            if (Type[0][0].includes('特急')) {
                FDetail(Type[0][0], JRCeNobj, Dtype[0], 0, 0, "・");
                if (Nagahama.includes(TrainNumber[0])) {
                    console.log(TrainNumber[0]);
                    Detail[0][0] += '長浜';
                    //DetailReplace(0,'', '米原', '米原・長浜', 3);
                }
            } else if (Type[0][0] != '') {
                trainTables[0].trains[0].detail = Des[0][0] + 'までの各駅';
            }
            var HidaNumber = JRLimitedNumber(1, 0);
            //console.log(HidaNumber);
            if (Type[1][0].includes('特急')) {
                FDetail(Type[1][0], JRKaobj, Dtype[1], 1, 0, "・");
                console.log(Detail[1][0]);
            } else if (Type[1][0] != '') {
                trainTables[1].trains[0].detail = Des[1][0] + 'までの各駅';
            }
            if (HidaNumber == 7 || HidaNumber == 13) {
                DetailReplace(1, 0, '越中八尾', '越中八尾・速星');
            } else if (HidaNumber == 15) {
                DetailReplace(1, 0, '飛騨萩原・飛騨小坂・久々野', '飛騨萩原');
            }
            FDetail(Type[2][0], JRCeNobj, Dtype[2], 2, 0, "・");
            SpecialStop(2, '(幸)', '岡崎', '幸田', '・', 0.8);
            SpecialStop(2, '(三)', '蒲郡', '三河三谷', '・', 0.8);
            JRTokaiDetailShow(0);
            JRTokaiDetailShow(1);
            JRTokaiDetailShow(2);
        }
    },
    '大垣駅': {
        name: '大垣駅',
        company: 'JR東海',
        tableTitles: ['東海道線 関ケ原 米原方面', '東海道線 名古屋 豊橋方面'],
        dtype: [0, 0],
        setup: () => {
            limitednumber(TT[0], 1, '特急しらさぎ');
            limitednumber(TT[1], 2, '特急しらさぎ');
            limitednumber(TT[1], 2, 'ホームライナー大垣');
        },
        onRender: () => {
            if (Type[0][0].includes('特急')) {
                FDetail(Type[0][0], JRCeNobj, Dtype[0], 0, 0, "・");
                console.log(TrainNumber[0]);
                if (Nagahama.includes(TrainNumber[0])) {
                    console.log(TrainNumber[0]);
                    Detail[0][0] += '長浜';
                    //DetailReplace(0,'', '米原', '米原・長浜', 3);
                }
            } else if (Type[0][0] != '') {
                if (Des[0][0] == '米原') {
                    SpendingTime(0, Des[0][0], 'およそ35', 'orange');
                } else if (Des[0][0] == '関ケ原') {
                    SpendingTime(0, Des[0][0], 'およそ13', 'orange');
                } else if (Des[0][0] == '美濃赤坂') {
                    SpendingTime(0, Des[0][0], 'およそ7', 'orange');
                }
                //Detail[0][0] = Des[0][0] + 'までの各駅';
            }
            const _Type = plainTrainTables[1].trains[0]?.type ?? "";
            FDetail(_Type, JRCeNobj, Dtype[1], 1, 0, "・");
            if (_Type.includes('快速')) {
                trainTables[1].trains[0].detail = '穂積・西岐阜・' + trainTables[1].trains[0].detail;
            }
            SpecialStop(1, '(幸)', '岡崎', '幸田', '・', 0.8);
            SpecialStop(1, '(三)', '蒲郡', '三河三谷', '・', 0.8);
            JRTokaiDetailShow(1);
        }
    },
    '名古屋駅': {
        name: '名古屋駅',
        company: 'JR東海',
        tableTitles: ['東海道線(豊橋・武豊方面)', '東海道線(岐阜・大垣方面)', '中央線(多治見・中津川方面)', '関西線(四日市・松阪方面)', '高山線(美濃太田・高山方面)'],
        file: 'index7_T.php',
        setup: () => {
            detailflag = 2;
            TrainNameDevide('特急ひだ', 1, 4);
            limitednumber(TT[2], 1, '特急しなの');
            limitednumber(TT[3], 1, '特急南紀');
            limitedjustnumber(TT[3], 1, '快速みえ');
            limitednumber(TT[1], 1, '特急しらさぎ');
            limitednumber(TT[4], 1, '特急ひだ');
        }
    }
}
//Tforshow7.tsをインタフェース化した際に削除する。
if (station == '豊橋駅') {
    Dtype[3] = 1;
}
if (station == '岐阜駅') {
    detailLength_one = 1;
} else if (station == '大垣駅') {
    detailLength_one = 1;
} else if (station == '名古屋駅' && Indexfile == 'index7_T.php') {
    detailflag = 2;
}
export { };