import { RailNumberDevide, DestinationRemove, DestinationDevide, TrainNameLineRemove, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import { table } from 'node:console';
var NexOfuna1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 52, 54];
var NexOfuna2 = [1, 3, 5, 7, 13, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 53];
export const JREastStations: StationRegistry = {
    'JR武蔵小杉駅': {
        name: '武蔵小杉駅',
        company: 'JR東日本',
        tableTitles: ['横須賀線 総武線(快速)<span class="Mark Bblue"> </span>品川 東京 千葉方面<br>' +
            '湘南新宿ライン<span class="Mark Borange"> </span>渋谷 新宿 大宮方面<br>' +
            '埼京線直通<span class="Mark Bgreen"> </span>渋谷 新宿 武蔵浦和方面',
            '３番線'],
        dtype: [0, 0],
        file: 'index3.php',
        setup: () => {
            limitednumber2(TT[4], NexOfuna1, '成田ｴｸｽﾌﾟﾚｽ');
            limitednumber2(TT[2], NexOfuna2, '成田ｴｸｽﾌﾟﾚｽ');
            TT[6] = makeemptyTable(TT[0], TT[2]);
            TT[5] = makeemptyTable(TT[1], TT[3]);
            //Tablereset(4);
            //Tablereset(5);
            TTconnect(TT[0], TT[2], TT[6]);
            TTconnect(TT[1], TT[3], TT[5]);
            TT[7] = makeemptyTable(TT[4], TT[5]);
            TTconnect(TT[4], TT[5], TT[7]);
            //console.log(TT[4][1][0]);
            TT[1] = TT[7];
            TT[0] = TT[6];
            //console.log(TT[0][1][0]);
            //console.log(TT[1]);
        }
    },
    '熱海駅': {
        name: '熱海駅',
        company: 'JR東日本',
        tableTitles: ['伊東線 伊東・伊豆急下田方面', '2・3 東海道線(下り) 三島・沼津・静岡方面', '4・5 (上野東京ライン)東海道線(上り) 小田原・横浜・東京方面'],
        //dtype: [1, 0],
        setup: () => {
            if (holidayflag == 1) {
                //TT[1][5][1]='普通 東海道線 6両';
                TT[1][7][1] = '沼津';
                TT[1][59][4] = '浜松';
            }
            TT[3] = undefined;
            TT[3] = makeemptyTable(TT[1], TT[2]);
            console.log(TT[1]);
            TTconnect(TT[1], TT[2], TT[3]);
            TT[1] = TT[3];
            RailNumberDevide(4, 1, 2);
        }
    },
    '小田原駅': {
        name: '小田原駅',
        company: 'JR東日本',
        tableTitles: ['東海道線 熱海方面', '東海道線 東京方面'],
        //dtype: [5]
        setup: () => {
            var shonan = [4, 22, 6, 8, 24, 10, 26, 12];
            limitednumber2(TT[1], shonan, '特急湘南');
            var odoriko1 = [1, 5, 9, 11];
            limitedjustnumber2(TT[0], odoriko1, '特急踊り子');
            limitedjustnumber(TT[1], 2, '特急踊り子');
        }
    },
    '横浜駅': {
        name: '横浜駅',
        company: 'JR東日本',
        tableTitles: ['根岸線 磯子 大船方面', '京浜東北線 東京方面 横浜線 八王子方面', '東海道線 小田原方面',
            '上野東京ライン 東京 上野方面', '横須賀線 久里浜方面 湘南新宿ライン 小田原方面', '横須賀線 東京 千葉方面 湘南新宿ライン 新宿 池袋方面'],
        setup: () => {
            var odoriko1 = [3, 7, 1, 13, 15];
            limitednumber2(TT[2], odoriko1, '踊り子');
            var odoriko2 = [4, 8, 10, 2, 16];
            limitednumber2(TT[3], odoriko2, '踊り子');
            var NexOfuna1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 52, 54];
            limitednumber2(TT[4], NexOfuna1, '成田ｴｸｽﾌﾟﾚｽ');
            var NexOfuna2 = [1, 3, 5, 7, 13, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 53];
            limitednumber2(TT[5], NexOfuna2, '成田ｴｸｽﾌﾟﾚｽ');
        }
    },
    '宇都宮駅': {
        name: '宇都宮駅',
        company: 'JR東日本',
        tableTitles: ['烏山線', '東北本線 黒磯方面', '宇都宮線(東北線) 上野東京ライン', '日光線'],
    },
    '黒磯駅': {
        name: '黒磯駅',
        company: 'JR東日本',
        tableTitles: ['東北本線下り 新白河方面', '宇都宮線(東北線)上り 宇都宮方面'],
    },
    '大宮駅': {
        name: '大宮駅',
        company: 'JR東日本',
        tableTitles: ['川越線 川越 高麗川方面', '埼京線 武蔵浦和 新宿 新木場方面', '湘南新宿ライン', '宇都宮線 久喜 宇都宮 日光方面', '高崎線 上尾 熊谷 高崎方面', '上野東京ライン 上野 東京方面',
            '京浜東北線 川口 王子 上野方面'],
        setup: () => {
            TrainNameLineRemove(['快速', '特別快速'], 5);
            DestinationRemove('新宿', 5);
            DestinationRemove(['逗子', '大船'], 5);
            limitednumber(TT[4], 1, 'あかぎ');
        }
    },
    '高崎駅': {
        name: '高崎駅',
        company: 'JR東日本',
        tableTitles: ['信越本線 安中･磯部･横川方面', '両毛線 前橋･桐生･小山方面', '上越線 吾妻線 新前橋方面', '高崎線 大宮･東京･新宿･横浜方面', ''],
        file: 'index3.php',
        setup: () => {
            Tablenum = 5;
            console.log(Tablenum);
            DestinationDevide(['水上', '長野原草津口', '万座・鹿沢口', '大前'], 1, 2);
        }
    }

}
if (station == '高崎駅' && Indexfile == 'index3.php') {
    Tablenum = 5;
}