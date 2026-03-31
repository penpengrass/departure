import { DestinationDevide, limitedjustnumber, limitednumber } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';

/**
 * 新幹線・地域本線駅の設定
 */
export const ShinkansenStations: StationRegistry = {
    '長野駅': {
        name: '長野駅',
        company: '北陸新幹線',
        tableTitles: ['金沢 富山方面', '東京方面'],
        dtype: [0, 1],
        setup: () => {
            limitedjustnumber(window.TT[0], 501, 'かがやき');
            limitedjustnumber(window.TT[0], 551, 'はくたか');
            limitedjustnumber(window.TT[1], 600, 'あさま');
            limitedjustnumber(window.TT[1], 552, 'はくたか');
            limitedjustnumber(window.TT[1], 500, 'かがやき');
        }
    },
    '宇都宮駅': {
        name: '宇都宮駅',
        company: '東北新幹線',
        tableTitles: ['東北新幹線 仙台方面', '新幹線 大宮・上野・東京方面'],
        dtype: [0, 1],
        setup: () => {
            limitednumber(window.TT[0], 251, 'なすの');
            limitednumber(window.TT[1], 254, 'なすの');
            limitedjustnumber(window.TT[0], 51, 'やまびこ', '盛岡');
            limitedjustnumber(window.TT[0], 201, 'やまびこ*');
            limitedjustnumber(window.TT[0], 121, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
            limitedjustnumber(window.TT[1], 202, 'やまびこ*');
            limitedjustnumber(window.TT[1], 52, 'やまびこ+');
            limitedjustnumber(window.TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
        }
    },
    '福島駅': {
        name: '福島駅',
        company: 'JR東日本',
        tableTitles: ['東北新幹線(下り) 仙台 盛岡方面', '東北新幹線(上り) 宇都宮 大宮 東京方面', '東北本線 白石 仙台方面', '東北本線 郡山 新白河方面', '山形新幹線 奥羽本線 米沢 山形方面'],
        dtype: [0, 1],
        detailFlag: 2,
        nonGouFlag: true,
        setup: () => {
            window.DetailLength = [2, 2, 0, 0, 0];
            limitedjustnumber(window.TT[0], 51, 'やまびこ', '盛岡');
            limitedjustnumber(window.TT[0], 123, 'やまびこ', '仙台');
            limitedjustnumber(window.TT[0], 201, 'やまびこ*');
            limitedjustnumber(window.TT[4], 127, 'つばさ');
            limitedjustnumber(window.TT[1], 202, 'やまびこ*');
            limitedjustnumber(window.TT[1], 50, 'やまびこ+');
            limitedjustnumber(window.TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
        }
    },
    '新白河駅': {
        name: '新白河駅',
        company: 'JR東日本',
        tableTitles: ['東北新幹線(下り) 仙台 盛岡方面', '東北新幹線(上り) 宇都宮 大宮 東京方面', '東北線 黒磯 宇都宮方面', '東北線 郡山 福島方面'],
        dtype: [0, 1],
        setup: () => {
            window.DetailLength = [1, 1, 0, 0];
            limitedjustnumber(window.TT[0], 201, 'やまびこ');
            limitedjustnumber(window.TT[0], 253, 'なすの');
            limitedjustnumber(window.TT[1], 202, 'やまびこ');
            limitedjustnumber(window.TT[1], 272, 'なすの');
        }
    },
    '仙台駅': {
        name: '仙台駅',
        company: 'JR東日本',
        tableTitles: ['仙山線 愛子 作並 山形方面', '仙石線 本塩釜 松島海岸 石巻方面', '東北本線下り 岩切 利府 塩釜 小牛田方面', '東北本線 岩沼 白石 福島方面', '常磐線 亘理 相馬 原ノ町方面', '仙台空港アクセス線 名取 仙台空港方面'],
        dtype: [0, 1],
        setup: () => {
            // 仙台駅の設定は index3_T.php でのみ適用
            if (window.Indexfile === 'index3_T.php') {
                DestinationDevide(['仙台空港'], 3, 5);
                DestinationDevide(['原ノ町', '品川', '新地', '山下'], 3, 4);
            }
        }
    }
};
