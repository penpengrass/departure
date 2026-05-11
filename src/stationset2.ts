import { RailNumberDevide, DestinationDevide } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
import { whetherStop, DetailReplace } from './module/detailSimpleEdit';
import { LineMarkAdd } from './module/firstDisplayEdit';
import { DetailShow } from './module/detailMainPut';
import { Kinobj } from './detailStopData/Kindetailset';
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
        },
        onRender: () => {
            DetailShow(Kinobj, " ");
            if (holidayflag == 1) {
                document.getElementById('supplement')!.innerHTML += '<p>名古屋駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.innerHTML += '<p>名古屋駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
            }
            for (var tr = 0; tr < orderNum; tr++) {
                var LType = Type[1][tr];
                var LDes = Des[1][tr];
                var tr_hour = TableHour[1][tr];
                var tr_min = TableMin[1][tr];
                if (LDes != '大阪難波' && whetherStop(17, 40, tr_hour, tr_min, 23, 30)) {
                    DetailReplace(1, tr, '伊勢中川', '久居 伊勢中川');
                }
                var LConnection = document.getElementById('TConnection1' + (tr + 1));
                if (LConnection && Type[0][tr].includes('*') && LConnection.textContent == '') {
                    document.getElementById('TConnection1' + (tr + 1))!.innerHTML = '６両編成  前４両は３扉';
                    Type[0][tr] = Type[0][tr].replace('*', '');
                }
            }
        }
    },
    '鶴橋駅': {
        name: '鶴橋駅',
        company: '近鉄',
        tableTitles: ['奈良線 生駒 奈良方面', '大阪線 高安 名古屋 伊勢志摩方面'],
        dtype: [1, 0],
        onRender: () => {
            DetailShow(Kinobj, " ");
            for (var tr = 0; tr < orderNum; tr++) {
                if (Type[1][tr] == '準急' && Des[1][tr] == '高安') {
                    Detail[1][tr] = '布施 八尾 河内山本';
                }
            }
        }
    },
    '京都駅': {
        name: '京都駅',
        company: '近鉄',
        tableTitles: ['京都線 新田辺 大和西大寺 奈良方面'],
        dtype: [5],
        holidayAbleflag: 1,
        onRender: () => {
            DetailShow(Kinobj, " ");
            if (holidayflag == 1) {
                document.getElementById('supplement')!.innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.innerHTML += '<p>京都駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
            }
            //高の原駅停車を追加
            for (var tr = 0; tr < orderNum; tr++) {
                var LType = Type[0][tr];
                var tr_hour = TableHour[0][tr];
                var tr_min = TableMin[0][tr];
                if (LType.includes('特急')) {
                    if (LType != '特急A' && (tr_hour > 14)) {
                        console.log(tr + "は高の原停車");
                        DetailReplace(0, tr, '丹波橋', '丹波橋 高の原');
                    } else if (tr_hour > 9 && LType != '特急S' && Des[0][tr] == '橿原神宮前') {
                        DetailReplace(0, tr, '大和西大寺', '大和西大寺 西ノ京');
                    }
                } else if (LType == '急行') {
                    if (holidayflag == 0) {
                        if (whetherStop(9, 40, tr_hour, tr_min, 16, 4)) {
                        } else {
                            console.log("西ノ京");
                            DetailReplace(0, tr, '西ノ京 ', '');
                        }
                    } else if (holidayflag == 1) {
                        if (whetherStop(8, 10, tr_hour, tr_min, 16, 44)) {
                        } else {
                            DetailReplace(0, tr, '西ノ京 ', '');
                        }
                    }
                }
                var element = document.getElementById('TConnection' + (0 + 1) + (tr + 1));
                if (tr < 2) {
                    if (element && Type[0][tr] == '急行' && Des[0][tr] == '大和西大寺' && element.textContent == '') {
                        element.innerHTML += ' 大和西大寺で奈良行きに連絡します';
                    }
                }
            }
        }
    },
    '奈良駅': {
        name: '奈良駅',
        company: '近鉄',
        tableTitles: ['奈良線 大阪難波 尼崎 甲子園 神戸三宮方面', '京都線 新田辺 京都方面'],
        dtype: [1, 5],
        setup: () => {
            const KyotoDes = ['京都', '新田辺', '国際会館'];
            DestinationDevide(KyotoDes, 0, 1);
        },
        onRender: () => {
            DetailShow(Kinobj, " ");
            if (holidayflag == 1) {
                document.getElementById('supplement')!.innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は土休日ダイヤ)</p>';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.innerHTML += '<p>奈良駅のみ土休日ダイヤに対応(表示は平日ダイヤ)</p>';
            }
            for (var tr = 0; tr < orderNum; tr++) {
                var LType = Type[1][tr];
                var tr_hour = TableHour[1][tr];
                var tr_min = TableMin[1][tr];
                if (LType.includes('特急')) {
                    if (LType != '特急A' && whetherStop(5, 0, tr_hour, tr_min, 12, 3)) {
                        DetailReplace(1, tr, '丹波橋', '高の原 丹波橋');
                    }
                }
            }
            LineMarkAdd(1, "A", 'red');
            LineMarkAdd(2, "B", 'orange');
        }
    },
    '伊勢中川駅': {
        name: '伊勢中川駅',
        company: '近鉄',
        tableTitles: ['大阪線 大阪 京都方面', '名古屋線 四日市 名古屋方面', '山田線 宇治山田 賢島方面'],
        onRender: () => {
            // CClass クラスを持つすべての <td> を取得
            const elements = document.querySelectorAll('td.CDetail');
            const Helements = document.querySelectorAll('th.HDetail');
            // すべて削除
            elements.forEach(el => el.remove());
            Helements.forEach(el => el.remove());
            for (var td = 0; td < 3; td++) {

                document.getElementById("TTable" + (td + 1))!.style.width = "40em";
                document.getElementById("TTable" + (td + 1))!.style.marginLeft = "4em";
            }
        }
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