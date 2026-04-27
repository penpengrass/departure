import { limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { limited, rapid, Jrapid, Jsubrapid, local } from './detailStopData/JRdetail';
import { StationRegistry, StationConfig } from './types/station';
export var JRCSobj = {//色は文字
    Typea: { type: "のぞみ", color: 'yellow', detail: limited, },
    Typeb: { type: "ひかり", color: red, detail: rapid, },
    Typec: { type: "こだま", color: '#3050FF', detail: rapid, },
    Typed: { type: "みずほ", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: '#FF6FFF', detail: Jsubrapid, },
    Typef: { type: "つばめ", color: black, detail: local, }
};
export const JRTokaidouStations: StationRegistry = {
    '浜松駅': {
        name: '浜松駅',
        company: '東海道新幹線',
        tableTitles: ['東海道新幹線 静岡・東京方面', '東海道新幹線 名古屋・新大阪方面'],
        file: 'index7_S1.php',
        nonGouFlag:1,
        setup: () => {
            limitedjustnumber(TT[1], 501, 'ひかり');
            limitedjustnumber(TT[0], 500, 'ひかり');
            limitedjustnumber(TT[1], 701, 'こだま');
            limitedjustnumber(TT[0], 700, 'こだま');
        }
    },
    '豊橋駅': {
        name: '豊橋駅',
        company: '東海道新幹線',
        tableTitles: ['東海道新幹線 静岡・東京方面', '東海道新幹線 名古屋・新大阪方面'],
        file: 'index7_S1.php',
        nonGouFlag:1,
        setup: () => {
            var hikari1 = [630, 632, 638, 644, 648, 652, 656, 660, 522];
            var hikari2 = [631, 635, 639, 643, 647, 651, 657, 667, 669];
            limitednumber2(TT[0], hikari1, 'ひかり');
            limitednumber2(TT[1], hikari2, 'ひかり');
            limitedjustnumber(TT[1], 701, 'こだま');
            limitedjustnumber(TT[0], 700, 'こだま');
        }
    }
}