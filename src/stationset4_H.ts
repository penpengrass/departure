import { RailNumberDevide, TrainNameDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { StationRegistry, StationConfig } from './types/station';
import { trainTables } from './types/trainTable';
NonGouflag = 1;
export const JRHokurikuStations: StationRegistry = {
    '敦賀駅': {
        name: '敦賀駅',
        company: 'JR西日本',
        tableTitles: ['北陸新幹線 金沢 富山方面', '北陸新幹線 当駅止め', '当駅止め', '特急列車 大阪 名古屋方面', '北陸本線 湖西線', 'ハピラインふくい', '小浜線'],
        nonGouFlag: 1,
        dtype: [1],
        setup: () => {
            DetailLength = [2];
            var Tshirasagi = [2, 52, 4, 54, 6, 56, 8, 58, 10, 12, 60, 14, 62, 16, 64];
            var Tshirasagi2 = [51, 1, 3, 5, 53, 7, 55, 9, 57, 11, 59, 13, 61, 15, 63];
            TrainNameDevide('特急', 4, 3);
            limitedjustnumber(TT[0], 2, 'つるぎ');
            limitedjustnumber(TT[0], 560, 'はくたか');
            limitedjustnumber(TT[0], 502, 'かがやき');
            limitedjustnumber(TT[1], 1, 'つるぎ');
            limitedjustnumber(TT[1], 561, 'はくたか');
            limitedjustnumber(TT[1], 501, 'かがやき');
            limitedjustnumber2(TT[3], Tshirasagi, '特急しらさぎ');
            limitedjustnumber(TT[3], 2, '特急ｻﾝﾀﾞｰﾊﾞｰﾄﾞ');
            limitedjustnumber2(TT[2], Tshirasagi2, '特急しらさぎ');
            limitedjustnumber(TT[2], 1, '特急ｻﾝﾀﾞｰﾊﾞｰﾄﾞ');
        },
        onRender: () => {
            //(※バグ未解決!!!)
            for (var tr = 0; tr < 3; tr++) {
                if (Type[1][tr] != '' && ((TableMin[1][tr] < L_min && TableHour[1][tr] == L_hour) || TableHour[1][tr] < L_hour)) {
                    document.getElementById('TExplain' + 2 + (tr + 1))!.textContent = '到着済み';
                }
            }
            for (var tr = 0; tr < 3; tr++) {
                if (Type[2][tr] != '' && ((TableMin[2][tr] < L_min && TableHour[2][tr] == L_hour) || TableHour[2][tr] < L_hour)) {
                    trainTables[2].trains[tr].destination = '当駅止(到着済み)';
                    document.getElementById('TDes' + 3 + (tr + 1))!.style.transform = "scaleX(0.70)" + "translate(-15%,0%)";
                }
            }
            for (var tr = 0; tr < 3; tr++) {
                let dName = document.getElementById('TName' + 5 + (tr + 1));
                if (dName) {
                    if (Type[4][tr] == '新快速') {
                        dName.innerHTML += '<span class="LocalDetail">湖西経由近江舞子まで各停</span>';
                        /*dName.style.color='red';
                        dName.style.fontSize = '1.2vw';*/
                        dName.style.transform = "scalex(0.90)" + "translate(10%,0%)";
                    } else if (Type[4][tr] == '新快速*') {
                        dName.innerHTML += '<span class="LocalDetail">米原経由米原まで各駅停車</span>';
                        /*dName.style.color='red';
                        dName.style.fontSize = '1.2vw';*/
                        dName.style.transform = "scalex(0.90)" + "translate(10%,0%)";
                        Type[4][tr] = '新快速';
                        document.getElementById('WType' + 5 + (tr + 1))!.textContent = '新快速';
                    } else if (Des[4][tr] == '京都') {
                        dName.textContent = '湖西線経由';
                        dName.style.color = 'red';
                    }
                }
            }
            if (holidayflag == 1) {
                document.getElementById('supplement')!.innerHTML += station + 'のみ土休日ダイヤに対応(表示は土休日ダイヤ)';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.innerHTML += station + 'のみ土休日ダイヤに対応(表示は平日ダイヤ)';
            }
        }
    },
    '福井駅': {
        name: '福井駅',
        company: 'JR西日本',
        tableTitles: ['北陸新幹線 金沢 富山方面', '北陸新幹線 敦賀方面', '九頭竜湖方面', '金沢 富山方面', '敦賀 大阪 京都方面'],
        nonGouFlag:1,
        dtype: [1, 0],
        setup: () => {
            DetailLength = [2, 2];
            window.Dtype = [1, 0];
            limitedjustnumber(TT[0], 2, 'つるぎ');
            limitedjustnumber(TT[0], 560, 'はくたか');
            limitedjustnumber(TT[0], 502, 'かがやき');
            limitedjustnumber(TT[1], 1, 'つるぎ');
            limitedjustnumber(TT[1], 561, 'はくたか');
            limitedjustnumber(TT[1], 501, 'かがやき');
        }
    },
    '金沢駅': {
        name: '金沢駅',
        company: 'JR西日本',
        tableTitles: ['北陸新幹線 福井 敦賀方面', '北陸新幹線 富山 東京方面', 'IRいしかわ鉄道線 松任 小松 福井方面', 'IRいしかわ鉄道線 津幡 高岡 富山方面', '七尾線 津幡 七尾 和倉温泉方面'],
        dtype: [0, 0],
        nonGouFlag:1,
        setup: () => {
            DetailLength = [2, 2];
            window.Dtype = [1, 0];
            var TsurugiToToyama = [60, 62, 2, 4, 6, 8, 10, 16, 20, 22, 26, 28, 30, 34, 36, 40, 42, 46, 48, 50];
            limitedjustnumber2(TT[1], TsurugiToToyama, 'つるぎ');
            limitedjustnumber(TT[1], 552, 'はくたか');
            limitedjustnumber(TT[1], 500, 'かがやき');
            limitedjustnumber(TT[0], 1, 'つるぎ');
            limitedjustnumber(TT[0], 561, 'はくたか');
            limitedjustnumber(TT[0], 501, 'かがやき');
            limitedjustnumber(TT[4], 1, '特急能登かがり火');
            limitedjustnumber(TT[3], 1, '快速あいの風ﾗｲﾅｰ');
        }
    },
}