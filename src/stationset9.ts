import { RailNumberDevide, DestinationDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
detailflag = 9;
detailLength_one = 1;
export const JRShikokuStations: StationRegistry = {
    '高松駅': {
        name: '高松駅',
        company: 'JR四国',
        tableTitles: ['琴平 高知方面', '観音寺 松山方面', '児島 岡山方面', '三本松 徳島方面'],
        dtype: [0, 0, 0, 0],
        setup: () => {
            var Tyosan = ['松山', '観音寺', '伊予西条'];
            var Thonshu = ['岡山', '東京'];
            limitednumber(TT[0], 3, '快速ｻﾝﾎﾟｰﾄ南風');
            DestinationDevide(Tyosan, 0, 1);
            DestinationDevide(Thonshu, 0, 2);
            limitedjustnumber(TT[1], 1, '特急いしづち');
            limitednumber(TT[3], 1, '特急うずしお');
            limitednumber(TT[0], 1, '特急しまんと');
            limitednumber(TT[2], 2, 'ﾏﾘﾝﾗｲﾅｰ');
        }
    },
    '松山駅': {
        name: '松山駅',
        company: 'JR四国',
        tableTitles: ['1･2のりば', '3･4のりば'],
        dtype: [1, 0],
        setup: () => {
            limitednumber(TT[0], 4, '特急しおかぜ');
            limitednumber(TT[1], 1, '特急宇和海');
            limitednumber(TT[0], 1, 'あしずり');
            limitednumber(TT[1], 2, '南風');
            TT[2] = makeemptyTable(TT[0], TT[1]);
            TTconnect(TT[0], TT[1], TT[2]);
            RailNumberDevide(3, 2, 1);
            TT[0] = TT[2];
        }
    },
    '高知駅': {
        name: '高知駅',
        company: 'JR四国',
        tableTitles: ['1･2のりば', '3･4のりば'],
        dtype: [0, 0],
        setup: () => {
            limitednumber(TT[0], 4, '特急しおかぜ');
            limitednumber(TT[1], 1, '特急宇和海');
            limitednumber(TT[0], 1, 'あしずり');
            limitednumber(TT[1], 2, '南風');
            TT[2] = makeemptyTable(TT[0], TT[1]);
            TTconnect(TT[0], TT[1], TT[2]);
            RailNumberDevide(3, 2, 1);
            TT[0] = TT[2];
        }
    }
}