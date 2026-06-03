import { RailNumberDevide, DestinationDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
export const TobuStations: StationRegistry = {
    '浅草駅': {
        name: '浅草駅',
        company: '東武',
        tableTitles: ['特急 伊勢崎線 太田 赤城方面', '特急 日光 鬼怒川方面', '区間急行 区間準急 普通'],
        file: 'index11.php',
        dtype: [0, 0, 0],
        setup: () => {
            //Dtype = [0, 0, 0];
            detailflag = 2;
            RailNumberDevide(3, 2, 1);
            DestinationDevide(['赤城', '太田', '伊勢崎', '葛生', '館林'], 1, 0);
            limitednumber(TT[0], 1, 'りょうもう');
            limitednumber(TT[1], 1, ['けごん', 'きぬ', 'スカイツリーライナー', 'スペーシアＸ']);
            //limitednumber(TT[1], 1, 'けごん');
            //limitednumber(TT[1], 1, 'きぬ');
            limitednumber(TT[1], 1, 'スカイツリーライナー');
            limitednumber(TT[1], 1, 'スペーシアＸ');
            if (holidayflag == 0) {
                TT[1][13].splice(1, 1);
                TT[1][14].splice(1, 1);
                TT[1][15].splice(1, 1);
                TT[1][16].splice(1, 1);
                TT[1][25].splice(6, 1);
                TT[1][26].splice(6, 1);
                TT[1][27].splice(6, 1);
                TT[1][28].splice(6, 1);
            }
        }
    }
}
//TrainNameDevide(['普通','区間準急','区間急行'],1,2);
var staflag = 0;