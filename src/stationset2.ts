import { RailNumberDevide, DestinationDevide } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
MinIn = 1;
//近鉄は詳細表示の数=order数
if (Indexfile == 'index2.php') {
    for (var td = 0; td < Tablenum; td++) {
        DetailLength[td] = orderNum;
    }
}
window.Dtype = new Array(2);
export const KintetsuStations: StationRegistry = {
    '名古屋駅': {
        name: '名古屋駅',
        company: '近鉄',
        tableTitles: ['名古屋線', '名古屋線特急'],
        file: 'index2.php',
        dtype: [3, 3],
        setup: () => {
            RailNumberDevide(4, 0, 1);
            window.stationN2 = window.stationN;
        }
    },
    '鶴橋駅': {
        name: '鶴橋駅',
        company: '近鉄',
        tableTitles: ['奈良線 生駒 奈良方面', '大阪線 高安 名古屋 伊勢志摩方面'],
        dtype: [1, 0],
    },
    '京都駅': {
        name: '京都駅',
        company: '近鉄',
        tableTitles: ['京都線 新田辺 大和西大寺 奈良方面'],
        dtype: [5]
    },
    '奈良駅': {
        name: '奈良駅',
        company: '近鉄',
        tableTitles: ['奈良線 大阪難波 尼崎 甲子園 神戸三宮方面', '京都線 新田辺 京都方面'],
        dtype: [1, 5],
        setup: () => {
            const KyotoDes = ['京都', '新田辺', '国際会館'];
            DestinationDevide(KyotoDes, 0, 1);
        }
    },
    '伊勢中川駅': {
        name: '伊勢中川駅',
        company: '近鉄',
        tableTitles: ['大阪線 大阪 京都方面', '名古屋線 四日市 名古屋方面', '山田線 宇治山田 賢島方面'],
    }
    //ここに何か書きたい
} as const;
/**
 * 近鉄共通の初期化処理
 */
/*export function initKintetsuCommon(config: StationConfig) {
    window.MinIn = 1;
    window.company = config.company;

    for (let td = 0; td < window.Tablenum; td++) {
        window.DetailLength[td] = window.orderNum;
    }

    window.TableTitle = config.tableTitles;
    if (config.dtype) window.Dtype = config.dtype;
    if (config.setup) config.setup();
}*/