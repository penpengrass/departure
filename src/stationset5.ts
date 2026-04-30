import { limited, rapid, express, subexpress, local } from './detailStopData/JRdetail';
import { StationRegistry, StationConfig } from './types/station';
import { DestinationSet, TrainTypeSet, TrainTypeWordChange } from './module/firstDisplayEdit';
import { allTokyuColor } from './typeColor';
import { trainTables } from './types/trainTable';
export var Tokyuobj = {
    Typea: { type: "特急", color: orange, detail: limited, },
    Typeb: { type: "通特", color: orange, detail: rapid, },
    Typec: { type: "急行", color: red, detail: express, },
    Typed: { type: "準急", color: red, detail: subexpress, },
    Typee: { type: "普通", color: greenyellow, detail: local, },
    Typef: { type: "普通", color: greenyellow, detail: local, }
}
export var TokyuBobj = {
    Typea: { type: "通特", color: red, detail: limited, },
    Typeb: { type: "特急", color: orange, detail: rapid, },
    Typec: { type: "急行", color: red, detail: express, },
    Typed: { type: "準急", color: red, detail: subexpress, },
    Typee: { type: "普通", color: green, detail: local, },
    Typef: { type: "普通", color: green, detail: local, }
}
export const TokyuStations: StationRegistry = {
    '二子玉川駅': {
        name: '二子玉川駅',
        company: '東急線',
        tableTitles: ['田園都市線 渋谷 押上 東武スカイツリーライン方面', '大井町線 大井町方面', '大井町線 溝の口 中央林間方面', '田園都市線 長津田 中央林間方面'],
        onRender: () => {
            for (let oi = 0; oi < Type[2].length; oi++) {
                if (Type[2][oi] == '各緑') {
                    trainTables[2].trains[oi].type = '各停';
                    document.getElementById('WType3' + (oi + 1))!.style.color = 'white';
                    document.getElementById('WType3' + (oi + 1))!.style.backgroundColor = 'green';
                    document.getElementById('TDetail3' + (oi + 1))!.textContent = '二子新地 高津通過';
                } else if (Type[2][oi] == '各青') {
                    trainTables[2].trains[oi].type = '各停';
                    document.getElementById('WType3' + (oi + 1))!.style.color = 'white';
                    document.getElementById('WType3' + (oi + 1))!.style.backgroundColor = 'blue';
                    document.getElementById('TDetail3' + (oi + 1))!.textContent = '二子新地 高津停車';
                }
            }
            let Interval = TableMin[0][1] - TableMin[0][0];
            if (Type[0][0] == '各停' && Type[0][1] == '急行' && Interval < 5) {
                document.getElementById('TDetail11')!.textContent = '桜新町で急行の通過待ち';
            }
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            DestinationSet();
            allTokyuColor();
        }
    },
    '東急武蔵小杉駅': {
        name: '武蔵小杉駅',
        company: '東急線',
        file: 'index5.php',
        tableTitles: ['東横線 渋谷 和光市 小手指 森林公園方面', '目黒線 目黒 浦和美園 西高島平方面', '目黒線 日吉 新横浜 海老名方面', '東横線 横浜 元町・中華街方面'],
        onRender: () => {
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            for (let tr = 0; tr < Type[2].length; tr++) {
                TrainTypeWordChange(0, tr, 'Ｆライナー', 'Ｆ特急');
                TrainTypeWordChange(3, tr, 'Ｆライナー', 'Ｆ特急');
                TrainTypeWordChange(0, tr, '通勤特急', '通特');
                TrainTypeWordChange(3, tr, '通勤特急', '通特');
            }
            DestinationSet();
            allTokyuColor();
        }
    }
}