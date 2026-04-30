import { RailNumberDevide, DestinationDevide, TrainNameDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import {
    JRNameDevide, NewAllLastShow, TrainTypeWordChange, flagmarkerase, Bansenshow, JRLimitedDevide, JRLimitedNameDevide, rowsize, moveTableColumn, rowremove, allTwoLettersDistance, FourLetters
    , allDestinationTwoLettersDistance, swapColumns, DestinationSet,
    TrainTypeSet
} from "./module/firstDisplayEdit";
import { CarsDefine, CarsInto } from "./module/carsEdit";
import { allswitchChiba, allswitch_Akabane } from "./module/displaySwitch";
import { JRE6ColorPlusName, JRE6Color, JRETypeAdd, JRETypeSelectAdd, ShihatsuMove } from "./module/displayEdit6";
import { comment } from './types/constants';
import { } from "./module/displaySwitch";
import { plainTrainTables, trainTables } from './types/trainTable';
let Saikyo_Color = '#00AC9A';
let Keihin_Color = '#00b2e5';
export const JREast6Stations: StationRegistry = {
    '長野駅': {
        name: '長野駅',
        company: 'JR東日本 しなの鉄道',
        tableTitles: ['北しなの線 飯山線 豊野 黒姫 飯山方面', '信越線 しなの鉄道線 篠ノ井 上田 小諸 軽井沢方面', '篠ノ井線 篠ノ井 松本 塩尻 甲府 名古屋方面'],
        file: 'index6.php',
        setup: () => {
            let selectstation = ['軽井沢', '上田', '小諸', '小諸*', '戸倉', '戸倉*'];
            DestinationDevide(selectstation, 2, 1);
            limitednumber(TT[2], 2, '特急しなの');
        },
        onRender: () => {
            for (let tr = 0; tr < 3; tr++) {
                TrainTypeSet(0);
                TrainTypeSet(1);
                TrainTypeSet(2);
                if (Type[0][tr] == '普通') {
                    if (['妙高高原', '豊野'].includes(Des[0][tr])) {
                        //Type[0][tr] += ' 北しなの線';
                        document.getElementById('TName' + 1 + '' + (tr + 1))!.textContent = '北しなの線';
                        JRE6ColorPlusName(0, tr, '普通', '#0000cc');
                    } else {
                        document.getElementById('TName' + 1 + '' + (tr + 1))!.textContent = '飯山線';
                        JRE6ColorPlusName(0, tr, '普通', '#009900');
                        if (Des[0][tr].includes('*')) {
                            document.getElementById('Ttopic' + 1 + (tr + 1))!.textContent = '越後川口行き接続';
                            document.getElementById('Ttopic' + 1 + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-20%,0%)";
                            Des[0][tr] = Des[0][tr].replace('*', '');
                        } else if (Des[0][tr].includes('+')) {
                            document.getElementById('Ttopic' + 1 + (tr + 1))!.textContent = '森宮野原行き接続';
                            document.getElementById('Ttopic' + 1 + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-20%,0%)";
                            Des[0][tr] = Des[0][tr].replace('+', '');
                        }
                    }
                } else if (Type[0][tr].startsWith('快速軽井沢')) {
                    JRE6ColorPlusName(0, tr, '快速', '#008888');
                } else if (Type[0][tr].startsWith('快速おいこっと')) {
                    document.getElementById('TType' + 1 + (tr + 1))!.style.backgroundColor = '#bb0000';
                }
                if (Des[0][tr].length > 3) {
                    if (Des[0][tr].length < 5) {
                        //console.log(Des[0][tr].length);
                        document.getElementById('TDes' + 1 + (tr + 1))!.style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
                    } else {
                        document.getElementById('TDes' + 1 + (tr + 1))!.style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
                    }
                }
                if (Type[1][tr] == '普通') {
                    document.getElementById('TName' + 2 + '' + (tr + 1))!.textContent = 'しなの鉄道線';
                    JRE6ColorPlusName(1, tr, '普通', '#0044ff');
                    if (Des[1][tr].includes('*')) {
                        document.getElementById('Ttopic' + 2 + (tr + 1))!.textContent = '軽井沢行き接続';
                        document.getElementById('Ttopic' + 2 + (tr + 1))!.style.transform = "scaleX(0.7)" + "translate(-20%,0%)";
                        Des[1][tr] = Des[1][tr].replace('*', '');
                    }
                } else if (Type[1][tr] == '快速しなの') {
                    trainTables[1].trains[tr].type = '快速';
                    document.getElementById('TName' + 2 + '' + (tr + 1))!.textContent = 'しなのｻﾝｾｯﾄ';
                    JRE6ColorPlusName(1, tr, '快速', '#bb0000');
                } else if (Type[1][tr].startsWith('快速軽井沢')) {
                    JRE6ColorPlusName(1, tr, '快速', '#000088');
                    document.getElementById('Ttopic' + 2 + (tr + 1))!.textContent = '全車指定席';
                }
                if (Type[2][tr] == '普通') {
                    document.getElementById('TName' + 3 + '' + (tr + 1))!.textContent = '篠ノ井線';
                    JRE6ColorPlusName(2, tr, '普通', '#aa5500');
                } else if (Type[2][tr].includes('特急')) {
                    JRE6ColorPlusName(2, tr, '特急', '#bb0000');
                } else if (Type[1][tr].startsWith('快速')) {
                    document.getElementById('TType' + 3 + (tr + 1))!.style.backgroundColor = '#bb0000';
                }
            }
            if (holidayflag == 1) {
                document.getElementById('supplement')!.textContent = '長野駅のみ土休日ダイヤに対応(表示は土休日ダイヤ) 非表示の臨時列車の可能性あり';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.textContent = '長野駅のみ土休日ダイヤに対応(表示は平日ダイヤ)';
            }
            JRLimitedDevide(2, 'left');
            DestinationSet();
            NewAllLastShow();
            Bansenshow();
        }
    },
    '松本駅': {
        name: '松本駅',
        company: 'JR東日本',
        tableTitles: ['中央東線 塩尻 上諏訪 甲府 新宿方面', '中央西線 塩尻 木曽福島 名古屋方面', '篠ノ井線 篠ノ井 長野方面', '大糸線 穂高 信濃大町 白馬 南小谷方面'],
        setup: () => {
            let selectstation = ['中津川', '上松', '名古屋', '木曽福島', '塩尻連絡木曽福島'];
            DestinationDevide(selectstation, 0, 1);
            limitednumber(TT[1], 2, '特急しなの');
            limitednumber(TT[2], 1, '特急しなの');
            var AzusaNobori = [4, 8, 12, 16, 18, 22, 26, 30, 34, 38, 42, 44, 46, 50, 54, 60];
            limitedjustnumber2(TT[0], AzusaNobori, '特急あずさ');
            if (holidayflag == 1) {
                TT[2][5][1] = '普通';
                TT[2][6][1] = '30';
                TT[2][7][1] = '長野';
                TT[2][8][1] = '2';
                TT[2][5][2] = '';
                TT[2][6][2] = '';
                TT[2][7][2] = '';
                TT[2][8][2] = '';
                TT[3][25][2] = '快速ﾘｿﾞｰﾄﾋﾞｭｰふるさと';
                TT[3][26][2] = '43';
                TT[3][27][2] = '南小谷';
                TT[3][28][2] = '2';
                TT[2][45][2] = '快速ﾘｿﾞｰﾄﾋﾞｭｰふるさと';
                TT[2][46][2] = '10';
                TT[2][47][2] = '長野';
                TT[2][48][2] = '2';
                TT[2][45][3] = '普通';
                TT[2][46][3] = '34';
                TT[2][47][3] = '長野';
                TT[2][48][3] = '3';
            }
        },
        onRender: () => {
            for (var td = 0; td < 4; td++) {
                rowremove(td, 'HName', 'TName');
                document.getElementById('HType' + (td + 1))!.style.width = "50%";
            }
            for (var tr = 0; tr < 3; tr++) {
                JRE6Color(0, '普通', 'blue');
                JRE6Color(0, '快速', 'blue');
                JRE6Color(0, '特急', 'red');
                JRE6Color(1, '特急', 'red');
                if (Type[1][tr].includes('普通')) {
                    document.getElementById('TType' + 2 + '' + (tr + 1))!.style.backgroundColor = '#ffa500';
                    if (Type[1][tr].includes('(東)')) {
                        trainTables[1].trains[tr].type = '普通';
                    }
                }
                JRE6Color(2, '普通', '#ff6e00');
                JRE6Color(2, '快速', '#ff6e00');
                JRE6Color(2, '特急', 'red');
                JRE6Color(3, '普通', '#874da1');
                JRE6Color(3, '快速', '#874da1');
                JRE6Color(3, '特急', 'red');
                //行先の文字の大きさ
                if (Des[0][tr].length > 3) {
                    if (Des[0][tr].length < 5) {
                        console.log(Des[0][tr].length);
                        document.getElementById('TDes' + 1 + (tr + 1))!.style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
                    } else {
                        document.getElementById('TDes' + 1 + (tr + 1))!.style.transform = "scaleX(0.6)" + "translate(-35%,0%)";
                    }
                }
            }
            DestinationSet();
            //松本駅だけ番線の文字追加および行先表示調整
            for (var td = 0; td < 4; td++) {
                (document.getElementsByClassName('HDes')[td] as HTMLElement).style.paddingRight = "1.5em";
                for (var tr = 0; tr < 3; tr++) {
                    TrainTypeSet(td);
                    allDestinationTwoLettersDistance(TDes, 0.5, 0.5);
                    //console.log(document.getElementById('Ttopic'+(tr+1)+(ts+1)));
                    document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.innerHTML += '<span class="bansen">番線</span>';
                    document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.paddingRight = "1em";
                }
            }
            if (holidayflag == 1) {
                document.getElementById('supplement')!.textContent = '松本駅のみ土休日ダイヤ対応(表示は土休日ダイヤ) 非表示の臨時列車の可能性あり';
            } else if (holidayflag == 0) {
                document.getElementById('supplement')!.textContent = '松本駅のみ土休日ダイヤに対応(表示は平日ダイヤ)';
            }
        }
    },
    '横浜駅': {
        name: '横浜駅',
        company: 'JR東日本',
        tableTitles: ['根岸線 磯子 大船方面', '京浜東北線 東京方面 横浜線 八王子方面', '東海道線 小田原方面', '上野東京ライン 東京 上野方面',
            '横須賀線 久里浜方面 湘南新宿ライン 小田原方面', '横須賀線 東京 千葉方面 湘南新宿ライン 新宿 池袋方面'],
        file: 'index6.php',
        setup: () => {
            var odoriko1 = [3, 7, 1, 13, 15];
            limitednumber2(TT[2], odoriko1, '踊り子');
            var odoriko2 = [4, 8, 10, 2, 16, 4];
            limitednumber2(TT[3], odoriko2, '踊り子');
            var NexOfuna1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 52, 54];
            limitednumber2(TT[4], NexOfuna1, '成田ｴｸｽﾌﾟﾚｽ');
            var NexOfuna2 = [1, 3, 5, 7, 13, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 53];
            limitednumber2(TT[5], NexOfuna2, '成田ｴｸｽﾌﾟﾚｽ');
        },
        onRender: () => {
            var yokohama = ['橋本', '八王子'];
            JRETypeSelectAdd(1, '', yokohama, ' 横浜線', ' 京浜東北線');
            JRETypeAdd(0, '各駅停車', ' 根岸線');
            JRETypeAdd(0, '快速', ' 根岸線');
            JRETypeAdd(2, '普通', ' 東海道線');
            JRETypeAdd(3, '普通', ' 上野東京ﾗｲﾝ');
            var shonan1 = ['平塚', '小田原', '国府津', '逗子*', '大船*'];
            JRETypeSelectAdd(4, '普通', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
            JRETypeSelectAdd(4, '快速', shonan1, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
            flagmarkerase(4, 'TDes');
            var shonan2 = ['籠原', '高崎', '前橋', '宇都宮', '小金井', '古河'];
            JRETypeSelectAdd(5, '普通', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
            JRETypeSelectAdd(5, '快速', shonan2, ' 湘南新宿ﾗｲﾝ', ' 横須賀線');
            for (var td = 0; td < 6; td++) {
                TrainTypeSet(td);
                (document.getElementsByClassName('HDes')[td] as HTMLElement).style.paddingRight = "1.5em";
                for (var tr = 0; tr < 2; tr++) {
                    //console.log(document.getElementById('Ttopic'+(td+1)+(tr+1)));
                    FourLetters(td, tr, 0.6, 30, 'WType');
                    document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.innerHTML += '<span class="bansen">番線</span>';
                    //document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.paddingRight = "1em";
                    if (Des[td][tr].length > 6) {
                        document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
                    }
                }
            }
            for (var tr = 0; tr < 2; tr++) {
                Des[4][tr] = Des[4][tr].replace('*', '');
                JRE6ColorPlusName(0, tr, '各駅停車', '#00b2e5');
                JRE6ColorPlusName(0, tr, '快速', '#00b2e5');
                JRE6ColorPlusName(1, tr, '京浜東北線', '#00b2e5', 1);
                JRE6ColorPlusName(1, tr, '横浜線', 'yellowgreen', 1);
                JRE6ColorPlusName(2, tr, '普通', 'orange');
                JRE6ColorPlusName(3, tr, '普通', 'orange');
                JRE6ColorPlusName(2, tr, '特急', 'red');
                JRE6ColorPlusName(3, tr, '特急', 'red');
                JRE6ColorPlusName(4, tr, '湘南新宿ﾗｲﾝ', '#e21f26', 1);
                JRE6ColorPlusName(4, tr, '横須賀線', 'blue', 1);
                JRE6ColorPlusName(5, tr, '湘南新宿ﾗｲﾝ', '#e21f26', 1);
                JRE6ColorPlusName(5, tr, '横須賀線', 'blue', 1);
                JRE6ColorPlusName(4, tr, '特急', 'red');
                JRE6ColorPlusName(5, tr, '特急', 'red');
            }
            comment!.textContent = '両数表示は今後更新';
        }
    },
    '東京駅': {
        name: '東京駅',
        company: 'JR東日本',
        tableTitles: ['上野東京ライン発車時刻', '東海道線発車時刻'],
        file: 'index6_U.php',
        setup: () => {
            limitednumber(TT[0], 1, 'ひたち');
            limitednumber(TT[0], 51, 'ときわ');
            limitednumber(TT[1], 2, 'ひたち');
            limitednumber(TT[1], 52, 'ときわ');
            limitednumber(TT[1], 1, '湘南');
            detailflag = 2;
        }
    },
    '品川駅': {
        name: '品川駅',
        company: 'JR東日本',
        tableTitles: ['東海道線発車時刻', '上野東京ライン発車時刻', '横須賀線', '総武快速線'],
        file: 'index6_U.php',
        setup: () => {
            limitednumber(TT[1], 1, 'ひたち');
            limitednumber(TT[1], 51, 'ときわ');
            limitednumber(TT[0], 2, 'ひたち');
            limitednumber(TT[0], 52, 'ときわ');
            limitednumber(TT[0], 1, '湘南');
            limitednumber(TT[2], 2, '成田ｴｸｽﾌﾟﾚｽ');
            limitednumber(TT[3], 1, '成田ｴｸｽﾌﾟﾚｽ');
            detailflag = 2;
        }
    },
    '上野駅': {
        name: '上野駅',
        company: 'JR東日本',
        tableTitles: ['上野東京ライン発車時刻', '宇都宮線', '高崎線', '常磐線', '常磐線特急'],
        file: 'index6_U.php',
        setup: () => {
            TrainNameDevide('特急', 3, 4);
            limitednumber(TT[4], 1, 'ひたち');
            limitednumber(TT[4], 51, 'ときわ');
            limitednumber(TT[0], 2, 'ひたち');
            limitednumber(TT[0], 52, 'ときわ');
            limitednumber(TT[2], 1, 'あかぎ');
        }
    },
    '新宿駅': {
        name: '新宿駅',
        company: 'JR東日本',
        tableTitles: ['三鷹方面', '千葉方面', '高尾方面', '東京方面', '中央線特急 松本方面', '成田エクスプレス',
            '埼京線 池袋 大宮方面', '湘南新宿ライン 大宮方面', '埼京線 新木場方面', '湘南新宿ライン 小田原方面'],
        file: 'index6.php',
        setup: () => {
            TrainNameDevide('特急', 2, 4);
            limitednumber(TT[4], 1, ['特急あずさ', '特急かいじ']);
            limitednumber(TT[4], 1, 'はちおうじ');
            limitednumber(TT[4], 1, 'おうめ');
            limitednumber(TT[9], 21, '湘南');
        },
        onRender: () => {
            const table7 = document.getElementById("TLCDTable7");
            const table9 = document.getElementById("TLCDTable9");
            JRLimitedDevide(4, 'left', 'WName');
            JRLimitedDevide(5, 'left', 'WName');
            rowremove(4, 'Htopic', 'Ttopic');
            //rowremove(6, 'Htopic', 'Ttopic');
            //rowremove(8, 'Htopic', 'Ttopic');
            rowremove(0, 'HName', 'TName');
            rowremove(1, 'HName', 'TName');
            rowremove(2, 'HName', 'TName');
            rowremove(3, 'HName', 'TName');
            document.getElementById('HType1')!.style.width = '18%';
            document.getElementById('HType3')!.style.width = '18%';
            document.getElementById('HTime1')!.style.width = '30%';
            document.getElementById('HTime3')!.style.width = '30%';
            document.getElementById('HDes1')!.style.width = '30%';
            document.getElementById('HDes3')!.style.width = '30%';
            document.getElementById('HNumber1')!.style.width = '10%';
            document.getElementById('HNumber3')!.style.width = '10%';
            document.getElementById('TLCDTable1')!.style.width = '450px';
            document.getElementById('TLCDTable3')!.style.width = '450px';
            swapColumns(table7, 0, 1);
            swapColumns(table9, 0, 1);
            swapColumns(table7, 4, 5);
            swapColumns(table9, 4, 5);
            document.getElementById('HName7')!.style.width = '25%';
            document.getElementById('HName9')!.style.width = '25%';
            document.getElementById('HType7')!.style.width = '20%';
            document.getElementById('HType9')!.style.width = '20%';
            document.getElementById('Htopic7')!.style.width = '8%';
            document.getElementById('Htopic9')!.style.width = '8%';
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(6);
            TrainTypeSet(7);
            TrainTypeSet(8);
            TrainTypeSet(9);
            for (var tr = 0; tr < 2; tr++) {
                ShihatsuMove(6, tr, 'Ttopic');
                ShihatsuMove(7, tr, 'Ttopic');
                ShihatsuMove(8, tr, 'Ttopic');
                ShihatsuMove(9, tr, 'Ttopic');
                TrainTypeWordChange(3, tr, 'かいじ', '特急');
                TrainTypeWordChange(3, tr, 'あずさ', '特急');
                TrainTypeWordChange(3, tr, '通勤特別快速', '通勤特快');
                TrainTypeWordChange(6, tr, '普通', '各駅停車');
                var yokosuka = ['逗子', '大船'];
                var utsunomiya = ['宇都宮', '小金井', '古河'];
                if (Type[6][tr] != '') {
                    document.getElementById('TName7' + (tr + 1))!.textContent = '埼京線';
                    JRE6ColorPlusName(6, tr, '', '#00AC9A');
                }
                if (Type[7][tr] != '') {
                    if (Type[7][tr] != '普通' && Type[7][tr] != '快速' && Type[7][tr] != '特別快速') {
                        document.getElementById('WName8' + (tr + 1))!.textContent = Type[7][tr].replace('始発', '');
                        Type[7][tr] = '特急';
                        JRE6ColorPlusName(7, tr, '', 'red');
                    } else if (utsunomiya.includes(Des[7][tr])) {
                        document.getElementById('TName8' + (tr + 1))!.textContent = '宇都宮線';
                        JRE6ColorPlusName(7, tr, '', 'orange');
                    } else {
                        document.getElementById('TName8' + (tr + 1))!.textContent = '高崎線';
                        JRE6ColorPlusName(7, tr, '', 'orange');
                    }
                }
                if (Type[8][tr] != '') {
                    document.getElementById('WType9' + (tr + 1))!.textContent = '各駅停車';
                    if (Des[8][tr] == '新木場') {
                        document.getElementById('WName9' + (tr + 1))!.textContent = 'りんかい線直通';
                    } else if (Des[8][tr] == '海老名') {
                        document.getElementById('WName9' + (tr + 1))!.textContent = '相鉄線直通';
                    }
                    document.getElementById('WName9' + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-12%,0%)";
                    JRE6ColorPlusName(8, tr, '', '#00AC9A');
                }
                if (Type[9][tr] != '') {
                    if (Type[9][tr].startsWith('湘南')) {
                        document.getElementById('WType10' + (tr + 1))!.textContent = '特急';
                        document.getElementById('WName10' + (tr + 1))!.textContent = Type[9][tr];
                        JRE6ColorPlusName(9, tr, '', 'red');
                    } else if (yokosuka.includes(Des[9][tr])) {
                        document.getElementById('WName10' + (tr + 1))!.textContent = '横須賀線';
                        JRE6ColorPlusName(9, tr, '', 'blue');
                    } else {
                        document.getElementById('WName10' + (tr + 1))!.textContent = '東海道線';
                        JRE6ColorPlusName(9, tr, '', 'orange');
                    }
                }
            }
            for (var td = 2; td < 4; td++) {
                TrainTypeSet(td);
                for (var tr = 0; tr < 2; tr++) {
                    var LimitedType = document.getElementById('TType' + (td + 3) + (tr + 1));
                    var LimitedName = document.getElementById('WName' + (td + 3) + (tr + 1));
                    var LDes = document.getElementById('TDes' + (td + 3) + (tr + 1));
                    var LDes2 = document.getElementById('TDes' + (td + 5) + (tr + 1));
                    document.getElementById('TType' + (td - 1) + (tr + 1))!.style.color = 'yellow';
                    if (Type[td][tr] != '') {
                        document.getElementById('TType' + (td + 1) + (tr + 1))!.style.backgroundColor = 'red';
                    }
                    //console.log(Type[td + 2][tr]);
                    if (Type[td + 2][tr] != '') {
                        Type[td + 2][tr] = '特急';
                        JRE6ColorPlusName(td + 2, tr, '特急', 'red');
                    }
                    if (LimitedName!.textContent.length > 6 && td == 2) {
                        LimitedName!.style.transform = "scaleX(0.75)" + "translate(-20%,0%)";
                    }
                    if (Des[td + 2][tr].length > 4) {
                        LDes!.style.transform = "scaleX(0.70)" + "translate(-20%,0%)";
                    }
                    if (Des[td + 4][tr].length > 4) {
                        LDes2!.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
                    }
                    FourLetters(td, tr, 0.5, 50, 'TDes', Des, 5);
                    FourLetters(td, tr, 0.5, 50, 'WType');
                    FourLetters(td + 4, tr, 0.75, 0, 'WType');
                    FourLetters(td + 6, tr, 0.75, 0, 'WType');
                }
            }
            comment!.textContent = '両数や番線など一部表示不正確';
        }
    },
    '赤羽駅': {
        name: '赤羽駅',
        company: 'JR東日本',
        tableTitles: ['上野･東京･横浜･磯子方面', '南浦和･大宮方面', '上野方面', '逗子方面', '高崎方面', '宇都宮方面', '新木場方面', '川越方面'],
        file: 'index6.php',
        setup: () => {
            var Takasaki = ['宇都宮', '小金井', '古河'];
            limitednumber(TT[2], 2, '草津･四万');
            limitednumber(TT[4], 1, '草津･四万');
            limitednumber(TT[2], 2, 'あかぎ');
            limitednumber(TT[4], 1, 'あかぎ');
            DestinationDevide(Takasaki, 8, 9);
            TT[10] = makeemptyTable(TT[4], TT[8]);
            TT[11] = makeemptyTable(TT[5], TT[9]);
            TTconnect(TT[4], TT[8], TT[10]);
            TTconnect(TT[5], TT[9], TT[11]);
            TT[4] = TT[10];
            TT[5] = TT[11];
        },
        onRender: () => {
            rowremove(0, 'HName', 'TName');
            rowremove(1, 'HName', 'TName');
            rowremove(6, 'HName', 'TName');
            rowremove(7, 'HName', 'TName');
            function AkabaneSize(td: number) {
                rowsize(td, 'HType', 'TType', '25%');
                rowsize(td, 'HTime', 'TTime', '25%');
                rowsize(td, 'HDes', 'TDes', '25%');
                rowsize(td, 'HNumber', 'TNum', '15%');
                rowsize(td, 'Htopic', 'Ttopic', '5%');
                document.getElementById('TLCDTable' + (td + 1))!.style.width = '600px';
            }
            AkabaneSize(0);
            AkabaneSize(6);
            //rowsize(1, 'HType', 'TType', '15%');
            rowsize(2, 'HName', 'TName', '15%');
            rowsize(3, 'HName', 'TName', '15%');
            rowsize(4, 'HName', 'TName', '15%');
            rowsize(5, 'HName', 'TName', '15%');
            for (var td = 0; td < 8; td++) {
                TrainTypeSet(td);
            }
            for (var tr = 0; tr < 2; tr++) {
                TrainTypeWordChange(0, tr, '普通', '各駅停車');
                TrainTypeWordChange(1, tr, '普通', '各駅停車');
                TrainTypeWordChange(3, tr, '快速:大宮から小山間', '普通');
                TrainTypeWordChange(5, tr, '快速:大宮から小山間', '快速');
                TrainTypeWordChange(4, tr, '快速', '普通');
            }
            for (var td = 0; td < 8; td++) {
                TrainTypeSet(td);
                (document.getElementsByClassName('HDes')[td] as HTMLElement).style.paddingRight = "1.5em";
                for (var tr = 0; tr < 2; tr++) {
                    //console.log(document.getElementById('Ttopic'+(td+1)+(tr+1)));
                    FourLetters(td, tr, 0.8, 0, 'WType');
                    document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.innerHTML += '<span class="bansen">番線</span>';
                    //document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.paddingRight = "1em";
                    if (Des[td][tr].length > 6) {
                        document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.5)" + "translate(-50%,0%)";
                    }
                    document.getElementById('TType' + (td + 1) + (tr + 1))!.style.textAlign = 'center';
                    JRE6ColorPlusName(0, tr, '各駅停車', Keihin_Color);
                    JRE6ColorPlusName(1, tr, '各駅停車', Keihin_Color);
                    JRE6ColorPlusName(0, tr, '快速', Keihin_Color);
                    JRE6ColorPlusName(1, tr, '快速', Keihin_Color);
                    JRE6ColorPlusName(2, tr, '普通', 'orange');
                    JRE6ColorPlusName(3, tr, '普通', 'orange');
                    JRE6ColorPlusName(4, tr, '普通', 'orange');
                    JRE6ColorPlusName(5, tr, '普通', 'orange');
                    JRE6ColorPlusName(2, tr, '快速', 'orange');
                    JRE6ColorPlusName(3, tr, '快速', 'orange');
                    JRE6ColorPlusName(4, tr, '快速', 'orange');
                    JRE6ColorPlusName(5, tr, '快速', 'orange');
                    JRE6ColorPlusName(2, tr, 'あかぎ', 'red');
                    JRE6ColorPlusName(4, tr, 'あかぎ', 'red');
                    JRE6ColorPlusName(2, tr, '草津･四万', 'red');
                    JRE6ColorPlusName(4, tr, '草津･四万', 'red');
                    JRE6ColorPlusName(6, tr, '', Saikyo_Color);
                    JRE6ColorPlusName(7, tr, '', Saikyo_Color);
                }
            }
            DestinationSet();
            NewAllLastShow();
            setInterval(allswitch_Akabane, 5000);
            comment!.textContent += '一部表示不正確';
        }
    },
    '千葉駅': {
        name: '千葉駅',
        company: 'JR東日本',
        tableTitles: ['横須賀 総武線(快速)',
            '中央･総武線(各駅停車)', '内房線', '外房線', '総武本線', '成田線'],
        file: 'index6_Chiba.php',
        setup: () => {
            for (var td = 0; td < TT[4].length; td++) {
                for (var tr = 0; tr < TT[4][td].length; tr++) {
                    if (TT[4][td][tr].endsWith('成田線経由普通')) {
                        TT[4][td + 2][tr] = '銚子*';
                    }
                    if (TT[4][td][tr] == '') {
                        break;
                    }
                }
            }
            let Narita = ['佐原', '成田', '鹿島神宮', '成田/鹿島神宮', '成田空港', '銚子*'];
            DestinationDevide(Narita, 4, 5);
            var NEX_Chiba1 = [1, 3, 5, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 45, 47, 49, 51, 53];
            var NEX_Chiba2 = [2, 4, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 52];
            limitednumber2(TT[0], NEX_Chiba2, '成田エクスプレス');
            limitednumber2(TT[5], NEX_Chiba1, '成田エクスプレス');
            limitednumber(TT[0], 2, 'しおさい');
            limitednumber(TT[4], 1, 'しおさい');
            //号数を交互表示するため
            detailflag = 2;
        },
        onRender: () => {
            NonGouflag = 0;
            var Sotobo_Color = 'red';
            JRNameDevide(6);
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            document.getElementById("WDir1")!.textContent = "東京･横浜･大船方面";
            document.getElementById("WDir2")!.textContent = "西船橋･秋葉原方面";
            document.getElementById("WDir3")!.textContent = "君津方面";
            document.getElementById("WDir4")!.textContent = "大網方面";
            document.getElementById("WDir5")!.textContent = "佐倉･銚子方面";
            document.getElementById("WDir6")!.textContent = "成田空港･銚子方面";
            for (var td = 0; td < 6; td++) {
                for (var tr = 0; tr < 3; tr++) {
                    CarsDefine(td, tr, '快速', '', 15);
                    CarsDefine(td, tr, '快速*', '', 11);
                    CarsDefine(td, tr, '普通', '', 8);
                    CarsDefine(td, tr, '成田エクスプレス', '', 12);
                    CarsDefine(td, tr, 'しおさい', '', 6);
                }
            }
            for (var td = 0; td < 6; td++) {
                for (var tr = 0; tr < 3; tr++) {
                    const _PlainType = plainTrainTables[td].trains[tr]?.type ?? "";
                    var L_WName = document.getElementById('WName' + (td + 1) + (tr + 1));
                    var L_WType = document.getElementById('WType' + (td + 1) + (tr + 1));
                    var L_PName = document.getElementById('PName' + (td + 1) + (tr + 1));
                    var L_PType = document.getElementById('PType' + (td + 1) + (tr + 1));
                    if (L_WName && L_WType) {
                        JRE6ColorPlusName(td, tr, '成田エクスプレス', 'red');
                        JRE6ColorPlusName(td, tr, 'しおさい', 'red');
                        if (td > 3 && trainTables[td].trains[tr].type == "") {
                            //L_WType.textContent = L_WType.textContent.replace('成田線経由', '');
                            trainTables[td].trains[tr].type = _PlainType.replace('成田線経由', '').replace('総武本線経由', '');
                            //L_WType.textContent = L_WType.textContent.replace('総武本線経由', '');
                            //Type[td][tr] = Type[td][tr].replace('総武本線経由', '');
                        }
                        CarsInto(td, tr, 'WName');
                        if (_PlainType.startsWith('始発')) {
                            L_WName.textContent = '当駅始発';
                            L_WName.style.transform = "scaleX(0.60)" + "translate(-0%,0%)";
                            const _Type = trainTables[td].trains[tr].type.replace('始発', '')
                            trainTables[td].trains[tr].type = _Type ?? plainTrainTables[td].trains[tr]?.type ?? "";
                        }
                        if (td == 1) {
                            L_WType.style.transform = "scaleX(0.90)" + "translate(-5%,0%)";
                        }
                        if (trainTables[td].trains[tr].type.length > 6) {
                            L_WType.style.transform = "scaleX(0.40)" + "translate(-75%,0%)";
                        }
                    }
                }
                flagmarkerase(td, 'WType');
            }
            for (var tr = 0; tr < 3; tr++) {
                JRE6ColorPlusName(0, tr, '快速', 'blue');
                JRE6ColorPlusName(2, tr, '快速', 'blue');
                JRE6ColorPlusName(2, tr, '普通', 'blue');
                JRE6ColorPlusName(3, tr, '普通', Sotobo_Color);
                JRE6ColorPlusName(3, tr, '快速', Sotobo_Color);
                JRE6ColorPlusName(4, tr, '快速', 'orange');
                JRE6ColorPlusName(4, tr, '普通', 'orange');
                JRE6ColorPlusName(5, tr, '快速', 'green');
                JRE6ColorPlusName(5, tr, '普通', 'green');
            }
            DestinationSet();
            Bansenshow();
            NewAllLastShow();
            setInterval(allswitchChiba, 5000);
        }
    },
    '水戸駅': {
        name: '水戸駅',
        company: 'JR東日本',
        tableTitles: ['勝田 高萩 いわき方面', '土浦 上野方面', '常陸大子 郡山方面', '大洗 鹿島方面'],
        file: 'index6.php',
        setup: () => {
            limitednumber(TT[0], 1, 'ひたち');
            limitednumber(TT[0], 51, 'ときわ');
            limitednumber(TT[1], 2, 'ひたち');
            limitednumber(TT[1], 52, 'ときわ');
        },
        onRender: () => {
            const table = new Array(Tablenum);
            const topic = new Array(Tablenum);
            for (var td = 0; td < 2; td++) {
                rowsize(td, 'HName', 'TName', '25%');
                rowsize(td, 'Htopic', 'Ttopic', '16%');
                table[td] = document.getElementById('TLCDTable' + (td + 1));
                topic[td] = new Array(orderNum);
                for (var tr = 0; tr < orderNum; tr++) {
                    topic[td][tr] = document.getElementById('Ttopic' + (td + 1) + (tr + 1));
                    topic[td][tr].classList.remove('topic');
                }
                moveTableColumn(table[td], 5, 2);
            }
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            for (var tr = 0; tr < orderNum; tr++) {
                JRLimitedNameDevide(0, tr, 'ひたち', '特急', 'white');
                JRLimitedNameDevide(0, tr, 'ときわ', '特急', 'white');
                JRLimitedNameDevide(1, tr, 'ひたち', '特急', 'white');
                JRLimitedNameDevide(1, tr, 'ときわ', '特急', 'white');
                JRE6ColorPlusName(0, tr, '特急', 'red');
                JRE6ColorPlusName(1, tr, '特急', 'red');
                JRE6ColorPlusName(0, tr, '普通', 'blue');
                JRE6ColorPlusName(1, tr, '普通', 'blue');
                JRE6ColorPlusName(2, tr, '普通', 'olive');
                JRE6ColorPlusName(3, tr, '普通', 'brown');
                ShihatsuMove(0, tr, 'Ttopic');
                ShihatsuMove(1, tr, 'Ttopic');
                CarsDefine(0, tr, '普通', '', 5);
                CarsDefine(0, tr, '特急', '', '10両');
                if (Des[1][tr] == '小山' || Des[1][tr] == '下館' || Des[1][tr] == '土浦') {
                    trainTables[1].trains[tr].cars = '5両';
                } else if (Des[1][tr] == '上野' || Des[1][tr] == '品川' || Des[1][tr] == '我孫子' || Des[1][tr] == '土浦*') {
                    trainTables[1].trains[tr].cars = '10両';
                }
                CarsInto(0, tr, 'WName');
                CarsInto(1, tr, 'WName');
                const color1 = document.getElementById('TName' + (0 + 1) + (tr + 1))!.style.backgroundColor;
                const color2 = document.getElementById('TName' + (1 + 1) + (tr + 1))!.style.backgroundColor;
                const topic1 = document.getElementById('Ttopic' + (0 + 1) + (tr + 1));
                const topic2 = document.getElementById('Ttopic' + (1 + 1) + (tr + 1));
                if (topic1!.textContent == '始発' || topic1!.textContent == '') {
                    topic1!.style.backgroundColor = color1;
                }
                if (topic2!.textContent == '始発' || topic2!.textContent == '') {
                    topic2!.style.backgroundColor = color2;

                }
            }
            DestinationSet();
            rowremove(2, 'HName', 'TName');
            rowremove(3, 'HName', 'TName');
            rowremove(2, 'Htopic', 'Ttopic');
            rowremove(3, 'Htopic', 'Ttopic');
            document.getElementById('TLCDTable' + (2 + 1))!.style.width = '600px';
            document.getElementById('TLCDTable' + (3 + 1))!.style.width = '600px';
            NewAllLastShow();
            comment!.textContent = '実際の表示とは異なる。接続表示は省略。両数や番線など一部表示不正確';
        }
    }
}