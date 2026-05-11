import { RailNumberDevide, DestinationRemove, DestinationDevide, TrainNameLineRemove, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import { FShow } from './module/timeInfoSet';
import { Shows } from './main';
import { allswitchOdawara } from './module/displaySwitch';
import { JRETypeAdd, JRETypeSelectAdd, ShihatsuMove } from './module/displayEdit6';
import { TypeColorChange } from './module/colorSimpleSet';
import {
    FourLetters, swapColumns, NameColorchange, JRLineName, rowremove, AllWordChange, AllWordReplace, JRLimitedNameDevide,
    JRLimitedDevide, JRLimitedNumber, JRATOSDevide, allTwoLettersDistance, DestinationSet, TrainTypeSet, flagmarkerase, allTimeMarkErase, Bansenshow, holiday_F,
    AllClassSetting,
    NewAllLastShow, NewLastShows, TrainTypeWordChange, allDestinationTwoLettersDistance, DestinationWordChange, AllTrainTypeReplace
} from "./module/firstDisplayEdit";
import { allJRCIncludeColor } from "./typeColor";
import { plainTrainTables, trainTables } from './types/trainTable';
import { BottomBanner } from './module/detailBannerSwitch';
import { TDes, comment } from './types/constants';
import { CarsDevideToLine, CarsInto } from './module/carsEdit';
const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
var UenoLine = ['小金井', '籠原', '宇都宮', '高崎', '古河'];
var Guidance = document.getElementById("guidance");
var NexOfuna1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 40, 42, 46, 50, 52, 54];
var NexOfuna2 = [1, 3, 5, 7, 13, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 53];
var UenoLine = ['小金井', '籠原', '宇都宮', '高崎', '古河'];
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
        },
        onRender: () => {
            DestinationSet();
            JRATOSDevide(0);
            JRATOSDevide(1);
            var Shonan1 = ['籠原', '宇都宮', '小金井', '古河', '高崎', '前橋'];
            var Saikyo1 = ['新宿', '池袋', '大宮', '川越', '指扇', '赤羽'];
            var Saikyo2 = ['海老名'];
            JRLimitedDevide(0);
            JRLimitedDevide(1);
            for (var tr = 0; tr < orderNum; tr++) {
                var _des = trainTables[0].trains[tr].destination;
                var _des1 = trainTables[1].trains[tr].destination;
                if (Shonan1.includes(_des)) {
                    JRLineName(0, tr, '', '湘南新宿ﾗｲﾝ', 1, 0);
                } else if (Saikyo1.includes(_des)) {
                    JRLineName(0, tr, '', '埼京線', 1, 0);
                } else if (_des != '') {
                    JRLineName(0, tr, '', '横須賀線', 0, 0);
                }
                JRLineName(1, tr, '普通', '横須賀線', 1, 0);
                if (Saikyo2.includes(_des1)) {
                    JRLineName(1, tr, '', '相鉄線', 1, 1);
                }
                JRLineName(1, tr, '快速', '湘南新宿ﾗｲﾝ', 0, 0);
                FourLetters(0, tr, 0.7, 7);
                FourLetters(1, tr, 0.7, 7);
            }
            NewAllLastShow();
            LastShowFlag = 1;
            NameColorchange(0, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
            NameColorchange(1, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
            NameColorchange(0, 'TType', '普通', 'orange');
            NameColorchange(1, 'TType', '普通', 'orange');
            NameColorchange(0, 'TType', '特別快速', 'orange');
            NameColorchange(1, 'TType', '特別快速', 'orange');
            NameColorchange(0, 'TType', '快速', 'red');
            NameColorchange(1, 'TType', '快速', 'red');
            NameColorchange(0, 'TType', '特急', 'red');
            NameColorchange(1, 'TType', '特急', 'red');
            NameColorchange(1, 'TName', '相鉄線', 'orange');
            allTwoLettersDistance(Des, TDes, 1, 0.8);
            //comment!.textContent = '両数は今後追加予定, 特急表示は不正確';
            for (var td = 0; td < Tablenum; td++) {
                (document.getElementsByClassName('Ctitle').item(td) as HTMLElement).style.paddingBottom = '50px';
                (document.getElementsByClassName('Ctitle').item(td) as HTMLElement).style.paddingTop = '4px';
            }
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
        },
        onRender: () => {

            DestinationSet();
            TrainTypeSet(2);
            AllClassSetting('Destination', 'color', '#0f0');
            CarsDevideToLine(0);
            CarsDevideToLine(1);
            CarsDevideToLine(2);
            for (var tr = 0; tr < orderNum; tr++) {
                var _Type = plainTrainTables[0].trains[tr].type;
                if (_Type.startsWith('普通')) {
                    trainTables[0].trains[tr].type = '伊東線 普通';
                }
                for (var td = 1; td < 3; td++) {
                    const _Type1 = plainTrainTables[td].trains[tr]?.type ?? "";
                    if (_Type1.startsWith('普通')) {
                        if (UenoLine.includes(Des[td][tr])) trainTables[td].trains[tr].type = '普通 上野東京ﾗｲﾝ';
                        else if (Des[td][tr] != '') trainTables[td].trains[tr].type = '普通 東海道線';
                    }
                }
                if (Type[0][tr].startsWith('特急踊り子')) {
                    document.getElementById('TCars' + 1 + (tr + 1))!.textContent = '9両';
                } else if (Type[0][tr].startsWith('特急ｻﾌｨｰﾙ')) {
                    document.getElementById('TCars' + 1 + (tr + 1))!.textContent = '8両';
                }
                if (Type[1][tr].startsWith('特急踊り子')) {
                    document.getElementById('TCars' + 2 + (tr + 1))!.textContent = '5両';
                }
                if (Type[2][tr].startsWith('特急踊り子')) {
                    if (Type[2][tr].includes('4') || Type[2][tr].includes('10')) {
                        document.getElementById('TCars' + 3 + (tr + 1))!.textContent = '14両';
                    } else {
                        document.getElementById('TCars' + 3 + (tr + 1))!.textContent = '9両';
                    }
                } else if (Type[2][tr].startsWith('特急ｻﾌｨｰﾙ')) {
                    document.getElementById('TCars' + 3 + (tr + 1))!.textContent = '8両';
                }
            }
            for (var td = 0; td < Tablenum; td++) {
                swapColumns(ATOStable[td], 3, 4);
                swapColumns(ATOStable[td], 2, 3);
                for (var tr = 0; tr < orderNum; tr++) {
                    CarsInto(td, tr, 'TCars');
                    if (Type[td][tr].length > 11) {
                        console.log(Type[td][tr]);
                        console.log(document.getElementById('TType' + (td + 1) + (tr + 1))!.textContent);
                        //document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
                    }
                }
                rowremove(td, 'HName', 'TName');
                document.getElementById('HType1')!.style.width = "35%";
                document.getElementById('HType2')!.style.width = "35%";
                document.getElementById('HType3')!.style.width = "35%";
            }

            allTwoLettersDistance(Des, TDes, 1, 1);
            document.getElementById('supplement')!.textContent = '熱海駅は実際の表示と異なる部分がある　土休日ダイヤに対応';
            allJRCIncludeColor();
            NewAllLastShow();
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
        },
        onRender: () => {
            // 2列目と3列目を入れ替え
            // 表のIDを取得
            const table1 = document.getElementById("TATOSTable1");
            const table2 = document.getElementById("TATOSTable2");
            swapColumns(table1, 0, 1);
            swapColumns(table1, 1, 2);
            document.getElementById('HType1')!.style.width = "10%";
            document.getElementById('HName1')!.style.width = "20%";
            document.getElementById('HDes1')!.style.width = "40%";
            JRLimitedDevide(0);
            JRLimitedDevide(1);
            //CarsDevide(1, 'TCars', 'TName');
            //JRATOSDevide(1);
            //console.log(JRLimitedNumber(1, 1, 'TName'));
            swapColumns(table2, 0, 1);
            document.getElementById('HType2')!.style.width = "15%";
            document.getElementById('HName2')!.style.width = "30%";
            for (var tr = 0; tr < orderNum; tr++) {
                let LDes = document.getElementById('TDes1' + (tr + 1));
                let LName = document.getElementById('TName2' + (tr + 1));
                let LCars = document.getElementById('TCars1' + (tr + 1));
                let LCars2 = document.getElementById('TCars2' + (tr + 1));
                if (Type[1][tr].includes('特別快速')) {
                    document.getElementById('TType2' + (tr + 1))!.style.transform = "scaleX(0.50)" + "translate(-7%,0%)";
                }
                if (Type[1][tr].startsWith('始発')) {
                    document.getElementById('WType2' + (tr + 1))!.innerHTML = '<span style="color:orange;">始発</span>';
                }
                JRLineName(1, tr, '普通', '上野東京ﾗｲﾝ', 1);
                JRLineName(1, tr, '快速', '湘南新宿ﾗｲﾝ', 1);
                if (Des[0][tr] == '伊豆急下田/修善寺' || Des[0][tr] == '伊豆急下田･修善寺') {
                    LDes!.style.transform = "scaleX(0.65)" + "translate(-0%,0%)";
                    trainTables[0].trains[tr].cars = '14両';
                } else if (Des[0][tr] == '伊豆急下田') {
                    trainTables[0].trains[tr].cars = '9両';
                }
                if (Type[1][tr].includes('特急') && LName!.textContent.includes('湘南')) {
                    if (JRLimitedNumber(1, tr, 'TName') == 4 || JRLimitedNumber(1, tr, 'TName') == 12) {
                        trainTables[1].trains[tr].cars = '14両';
                    } else {
                        trainTables[1].trains[tr].cars = '9両';
                    }
                    LName!.textContent += '号';
                } else if (Type[1][tr].includes('特急') && LName!.textContent.includes('踊り子')) {
                    if (JRLimitedNumber(1, tr, 'TName') == 4 || JRLimitedNumber(1, tr, 'TName') == 10) {
                        trainTables[1].trains[tr].cars = '14両';
                    } else {
                        trainTables[1].trains[tr].cars = '9両';
                    }
                    LName!.textContent += '号';
                }
            }
            CarsDevideToLine(0);
            CarsDevideToLine(1);
            allTwoLettersDistance(Des, TDes, 1, 0.8);
            holiday_F(station);
            comment!.innerHTML += '<br>特急の臨時列車は不正確';
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    CarsInto(td, tr, 'TCars');
                    if (Type[td][tr].includes('始発')) {
                        trainTables[td].trains[tr].type = trainTables[td].trains[tr].type.replace('始発', '');
                    }
                }
            }
            DestinationSet();
            NewAllLastShow();
            setInterval(allswitchOdawara, 5000);
            allJRCIncludeColor();
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
        },
        onRender: () => {
            swapColumns(ATOStable[0], 0, 1);
            swapColumns(ATOStable[1], 0, 1);
            swapColumns(ATOStable[2], 0, 1);
            swapColumns(ATOStable[3], 0, 1);
            swapColumns(ATOStable[4], 0, 1);
            swapColumns(ATOStable[5], 0, 1);
            document.getElementById('HType1')!.style.width = "15%";
            document.getElementById('HName1')!.style.width = "30%";
            document.getElementById('HType2')!.style.width = "15%";
            document.getElementById('HName2')!.style.width = "30%";
            document.getElementById('HType3')!.style.width = "15%";
            document.getElementById('HName3')!.style.width = "30%";
            document.getElementById('HType4')!.style.width = "15%";
            document.getElementById('HName4')!.style.width = "30%";
            document.getElementById('HType5')!.style.width = "15%";
            document.getElementById('HName5')!.style.width = "30%";
            document.getElementById('HType6')!.style.width = "15%";
            document.getElementById('HName6')!.style.width = "30%";
            JRETypeAdd(0, '各駅停車', ' 根岸線');
            JRETypeAdd(0, '快速', ' 根岸線');
            JRETypeAdd(2, '普通', ' 東海道線');
            JRETypeAdd(3, '普通', ' 上野東京ﾗｲﾝ');
            var yokohama = ['橋本', '八王子'];
            JRETypeSelectAdd(1, '', yokohama, ' 横浜線', ' 京浜東北線');
            var shonan1 = ['平塚', '小田原', '国府津', '逗子*', '大船*'];
            JRETypeSelectAdd(4, '普通', shonan1, '湘南新宿ﾗｲﾝ', '横須賀線');
            JRETypeSelectAdd(4, '快速', shonan1, '湘南新宿ﾗｲﾝ', '横須賀線');
            flagmarkerase(4, 'TDes');
            var shonan2 = ['籠原', '高崎', '前橋', '宇都宮', '小金井', '古河'];
            JRETypeSelectAdd(5, '普通', shonan2, '湘南新宿ﾗｲﾝ', '横須賀線');
            JRETypeSelectAdd(5, '快速', shonan2, '湘南新宿ﾗｲﾝ', '横須賀線');
            JRLimitedDevide(2);
            JRLimitedDevide(3);
            JRLimitedDevide(4);
            JRLimitedDevide(5);
            flagmarkerase(4, 'TDes');
            for (var tr = 0; tr < orderNum; tr++) {
                TrainTypeSet(0);
                TrainTypeSet(1);
                TrainTypeSet(2);
                TrainTypeSet(3);
                TrainTypeSet(4);
                TrainTypeSet(5);

                if (Des[5][tr].length > 6) {
                    document.getElementById('TDes6' + (tr + 1))!.style.transform = "scaleX(0.5)" + "translate(-40%,0%)";
                }
                if (Type[4][tr].includes('*')) {
                    Type[4][tr] = Type[4][tr].replace('*', '');
                }
                if (Des[4][tr].includes('*')) {
                    Des[4][tr] = Des[4][tr].replace('*', '');
                }
                FourLetters(5, tr, 0.5, -40, 'TDes', Des, 6);
                FourLetters(0, tr, 0.7, 5);
                FourLetters(1, tr, 0.7, 5);
                FourLetters(4, tr, 0.7, 5);
                FourLetters(5, tr, 0.7, 5);
            }
            DestinationSet();
            NameColorchange(4, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
            NameColorchange(5, 'TName', '湘南新宿ﾗｲﾝ', 'orange');
            NewAllLastShow();
            comment!.textContent = '両数表示は今後更新';
            allJRCIncludeColor();
        }
    },
    '宇都宮駅': {
        name: '宇都宮駅',
        company: 'JR東日本',
        file: 'index3.php',
        tableTitles: ['烏山線', '東北本線 黒磯方面', '宇都宮線(東北線) 上野東京ライン', '日光線'],
        onRender: () => {
            JRATOSDevide(2);
            for (var td = 0; td < Tablenum; td++) {
                swapColumns(ATOStable[td], 3, 4);
                swapColumns(ATOStable[td], 2, 3);
                if (td != 2) {
                    swapColumns(ATOStable[td], 0, 1);
                    document.getElementById('HName' + (td + 1))!.style.width = "15%";
                }
                document.getElementById('HCars' + (td + 1))!.style.width = "15%";
                document.getElementById('HName' + (2 + 1))!.style.width = "25%";
                document.getElementById('HDes' + (td + 1))!.style.width = "30%";
            }
            document.getElementById('HCars' + (2 + 1))!.style.width = "20%";
            document.getElementById('HDes' + (2 + 1))!.style.width = "25%";
            for (var tr = 0; tr < orderNum; tr++) {
                if (Type[1][tr] != '') {
                    document.getElementById('TCars2' + (tr + 1))!.textContent = '4ﾄﾞｱ';
                }
            }
            CarsDevideToLine(1);
            CarsDevideToLine(2);
            CarsDevideToLine(3);
            for (var tr = 0; tr < orderNum; tr++) {
                CarsInto(1, tr, 'WName');
                if (Type[2][tr] != '') {
                    document.getElementById('TCars3' + (tr + 1))!.textContent = '15両4ﾄﾞｱ';
                    var Name = document.getElementById('TName3' + (tr + 1));
                    var TypeIn = document.getElementById('WType3' + (tr + 1));
                    if (Name && TypeIn && Name.textContent == '') {
                        if (Des[2][tr] == '上野' || Des[2][tr] == '大宮') {
                            if (TypeIn.textContent.includes('ﾗﾋﾞｯﾄ')) {
                                Name.textContent = 'ラビット';
                                trainTables[1].trains[tr].type = '快速'
                            } else {
                                Name.textContent = '宇都宮線';
                            }
                        } else if (Des[2][tr] == '大船' || Des[2][tr] == '逗子') {
                            Name.textContent = '湘南新宿ﾗｲﾝ';
                        } else if (Des[2][tr] != '') {
                            Name.textContent = '上野東京ﾗｲﾝ';
                        }
                    }
                    Name!.style.color = 'orange';
                }
            }
            DestinationSet();
            for (var tr = 0; tr < orderNum; tr++) {
                if (Type[3][tr] != '') {
                    document.getElementById('TName4' + (tr + 1))!.textContent = '3両';
                    document.getElementById('TCars4' + (tr + 1))!.textContent = '4ﾄﾞｱ';
                }
            }
            NewAllLastShow();
            LastShowFlag = 1;
            document.getElementById('TATOSTable' + 1)!.style.width = '30em';
            document.getElementById('TATOSTable' + 2)!.style.width = '45em';
            document.getElementById('TATOSTable' + 4)!.style.width = '45em';
            document.getElementById('TATOSTable' + 1)!.style.marginLeft = '8em';
            if (Type[3][0] == '') {
                BottomBanner("TRow", 4, 3, 6, '日光線の運転は終了しました');
            }
            if (Type[0][0] == '' && Type[0][1] != '') {
                BottomBanner("TRow", 1, 1, 3, '烏山方面へは黒磯行きに乗車のうえ宝積寺でのりかえ');
            }
            comment!.textContent = '上野東京ラインの両数は今後修正予定';
            allTwoLettersDistance(Des, TDes, 1, 0.8);
            allJRCIncludeColor();
            allTimeMarkErase();
            rowremove(0, 'HName', 'TName');
            rowremove(0, 'HCars', 'TCars');
            rowremove(0, 'HType', 'TType');
        }
    },
    '黒磯駅': {
        name: '黒磯駅',
        company: 'JR東日本',
        tableTitles: ['東北本線下り 新白河方面', '宇都宮線(東北線)上り 宇都宮方面'],
        onRender: () => {
            rowremove(0, 'HName', 'TName');
            rowremove(0, 'HCars', 'TCars');
            rowremove(1, 'HName', 'TName');
            rowremove(1, 'HCars', 'TCars');
            document.getElementById('HDes2')!.textContent = '';
            document.getElementById('HDes1')!.textContent = '';
            document.getElementById('HrNumber2')!.textContent = '';
            document.getElementById('HrNumber1')!.textContent = '';
            allTwoLettersDistance(Type, TType, 0.6, 0);
            comment!.textContent = '番線は不正確';
            Bansenshow();
            DestinationSet();
            for (var td = 0; td < 2; td++) {
                TrainTypeSet(td);
                for (var tr = 0; tr < 2; tr++) {
                    NewLastShows(td, tr);
                    if (Type[td][tr] != '') {
                        //(document.getElementsByClassName('bansen')[(td + tr) * 2] as HTMLElement).style.fontSize = '2vw';
                    }
                }
            }
            //NewAllLastShow();
        }
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
        },
        onRender: () => {
            swapColumns(ATOStable[2], 0, 1);
            swapColumns(ATOStable[3], 0, 1);
            swapColumns(ATOStable[4], 0, 1);
            swapColumns(ATOStable[5], 0, 1);
            document.getElementById('HType1')!.style.width = "25%";
            document.getElementById('HName1')!.style.width = "20%";
            document.getElementById('HDes1')!.style.width = "35%";
            document.getElementById('HrNumber1')!.style.width = "10%";
            document.getElementById('HType2')!.style.width = "25%";
            document.getElementById('HName2')!.style.width = "20%";
            document.getElementById('HDes2')!.style.width = "35%";
            document.getElementById('HrNumber2')!.style.width = "10%";
            //document.getElementById('HType2')!.style.width = "35%";
            //document.getElementById('HName2')!.style.width = "10%";
            document.getElementById('HType3')!.style.width = "15%";
            document.getElementById('HName3')!.style.width = "30%";
            document.getElementById('HType4')!.style.width = "15%";
            document.getElementById('HName4')!.style.width = "30%";
            document.getElementById('HType5')!.style.width = "15%";
            document.getElementById('HName5')!.style.width = "30%";
            document.getElementById('HType6')!.style.width = "15%";
            document.getElementById('HName6')!.style.width = "30%";
            document.getElementById('TATOSTable1')!.style.width = '650px';
            document.getElementById('TATOSTable2')!.style.width = '650px';
            document.getElementById('TATOSTable7')!.style.width = '650px';
            rowremove(6, 'HName', 'TName');
            var UenoLine = ['平塚', '小田原', '国府津', '熱海', '伊東', '沼津'];
            JRETypeSelectAdd(5, '普通', UenoLine, '上野東京ﾗｲﾝ', '');
            JRETypeAdd(2, '普通', '湘南新宿ﾗｲﾝ', 'orange');
            JRETypeAdd(2, '快速', '湘南新宿ﾗｲﾝ', 'orange');
            JRETypeAdd(3, '普通', '宇都宮線', 'orange');
            JRETypeAdd(3, '快速', '宇都宮線', 'orange');
            JRETypeAdd(4, '普通', '高崎線', 'orange');
            JRETypeAdd(4, '快速', '高崎線', 'orange');
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            TrainTypeSet(4);
            TrainTypeSet(5);
            TrainTypeSet(6);
            for (var tr = 0; tr < 3; tr++) {
                //CarsDefine(2, tr, '普通', '', 15);
                //CarsInto(2,tr,'TName');
                ShihatsuMove(0, tr, 'TName');
                ShihatsuMove(1, tr, 'TName');
                TrainTypeWordChange(0, tr, '普通', '各駅停車');
                TrainTypeWordChange(0, tr, '快速', '各駅停車');
                TrainTypeWordChange(0, tr, '通勤快速', '各駅停車');
                TrainTypeWordChange(1, tr, '普通', '各駅停車');
                AllWordReplace(2, tr, Type, 'スペーシア', 'ｽﾍﾟｰｼｱ');
                AllWordReplace(3, tr, Type, 'スペーシア', 'ｽﾍﾟｰｼｱ');
                TrainTypeWordChange(4, tr, '快速', '普通');
                TypeColorChange(1, tr, '快速', 'orange');
                TypeColorChange(2, tr, '快速', 'orange');
                TypeColorChange(3, tr, '快速', 'orange');
                TypeColorChange(4, tr, '快速', 'orange');
                TypeColorChange(6, tr, '快速', 'orange');
                document.getElementById('TType1' + (tr + 1))!.style.textAlign = "left";
                document.getElementById('TType2' + (tr + 1))!.style.textAlign = "left";
                JRLimitedNameDevide(4, tr, '草津・四万');
                JRLimitedNameDevide(5, tr, '草津・四万');
                JRLimitedNameDevide(2, tr, 'きぬがわ');
                JRLimitedNameDevide(3, tr, 'きぬがわ');
                JRLimitedNameDevide(2, tr, 'ｽﾍﾟｰｼｱ日光');
                JRLimitedNameDevide(3, tr, 'ｽﾍﾟｰｼｱ日光');
                JRLimitedNameDevide(2, tr, 'あかぎ');
                JRLimitedNameDevide(4, tr, 'あかぎ');
                JRLimitedNameDevide(4, tr, 'アーバン', '快速', 'orange');
                JRLimitedNameDevide(3, tr, 'ラビット', '快速', 'orange');
                JRLimitedNameDevide(5, tr, 'アーバン', '快速', 'orange');
                JRLimitedNameDevide(5, tr, 'ラビット', '快速', 'orange');
                JRLimitedNameDevide(5, tr, 'むさしの号', '普通', '#0f0');
                JRLimitedNameDevide(5, tr, 'しもうさ号', '普通', '#0f0');
                FourLetters(0, tr, 0.7, 20);
                FourLetters(1, tr, 0.7, 20);
                FourLetters(2, tr, 0.7, 10);
                FourLetters(4, tr, 0.7, 10);
                NameColorchange(3, 'TName', 'ラビット', 'red');
                NameColorchange(4, 'TName', 'アーバン', 'red');
                NameColorchange(5, 'TName', 'しもうさ号', 'red');
                NameColorchange(5, 'TName', 'むさしの号', 'red');
                NameColorchange(5, 'TName', '上野東京ﾗｲﾝ', 'orange');
                if (Type[2][tr] == '特急') {
                    document.getElementById('TName' + (2 + 1) + '' + (tr + 1))!.style.color = 'red';
                }
                if (Type[3][tr] == '特急') {
                    document.getElementById('TName' + (3 + 1) + '' + (tr + 1))!.style.color = 'red';
                }
                if (Type[4][tr] == '特急') {
                    document.getElementById('TName' + (4 + 1) + '' + (tr + 1))!.style.color = 'red';
                }
                if (Type[5][tr] == '特急') {
                    document.getElementById('TName' + (5 + 1) + '' + (tr + 1))!.style.color = 'red';
                }
            }
            DestinationSet();
            allTwoLettersDistance(Des, TDes, 1, 0.8);
            comment!.textContent = '番線や号数など一部表示は不正確、両数は省略';
            Guidance!.innerHTML += '<h1 class="Cheader">発車番線</h1>' +
                '<li>1・2番線　京浜東北線</li>' +
                '<li>3・4番線　(宇都宮方面からの)上野・新宿方面</li>' +
                '<li>6・7番線　(高崎方面からの)上野・新宿方面</li>' +
                '<li>8・9番線　(上野方面からの)高崎・宇都宮方面</li>' +
                '<li>11番線　(新宿方面からの)高崎・宇都宮・日光方面</li>' +
                '<li>5, 10番線は貨物列車などの回送' +
                '<li>19・20番線　埼京線武蔵浦和・新木場方面</li>' +
                '<li>21・22番線　埼京線武蔵浦和方面・川越線川越方面</li>';
            NewAllLastShow();
        }
    },
    '高崎駅': {
        name: '高崎駅',
        company: 'JR東日本',
        tableTitles: ['信越本線 安中･磯部･横川方面', '両毛線 前橋･桐生･小山方面', '上越線 吾妻線 新前橋方面', '高崎線 大宮･東京･新宿･横浜方面', ''],
        file: 'index3.php',
        setup: () => {
            Tablenum = 5;
            DestinationDevide(['水上', '長野原草津口', '万座・鹿沢口', '大前'], 1, 2);
        },
        onRender: () => {
            rowremove(0, 'HName', 'TName');
            rowremove(1, 'HName', 'TName');
            rowremove(2, 'HName', 'TName');
            rowremove(3, 'HName', 'TName');
            rowremove(0, 'HCars', 'TCars');
            rowremove(1, 'HCars', 'TCars');
            rowremove(2, 'HCars', 'TCars');
            rowremove(3, 'HCars', 'TCars');
            document.getElementById('HType1')!.style.width = "53%";
            document.getElementById('HType2')!.style.width = "53%";
            document.getElementById('HType3')!.style.width = "53%";
            document.getElementById('HType4')!.style.width = "53%";
            FShow(TT[4], 5, Shows);
            trainTables[0].trains[2].destination = plainTrainTables[4].trains[0].destination ? plainTrainTables[4].trains[0].destination : "";
            trainTables[0].trains[2].hour = plainTrainTables[4].trains[0].hour;
            trainTables[0].trains[2].minute = plainTrainTables[4].trains[0].minute;
            trainTables[0].trains[2].trackNumber = plainTrainTables[4].trains[0].trackNumber;
            //TableHour[0][2] = TableHour[4][0];
            //TableMin[0][2] = TableMin[4][0];
            //TrackNum[0][2] = TrackNum[4][0];
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            for (var tr = 0; tr < orderNum; tr++) {
                TrainTypeWordChange(0, tr, '普通', '信越線4両 乗車口③～⑥');
                TrainTypeWordChange(1, tr, '普通', '両毛線4両 乗車口③～⑥');
                TrainTypeWordChange(1, tr, '普通*', '両毛線6両 乗車口①～⑥');
                TrainTypeWordChange(1, tr, '普通+', '両毛線10両 乗車口:青色');
                TrainTypeWordChange(1, tr, '快速', '両毛線10両 乗車口:青色');
                DestinationWordChange(2, tr, '万座・鹿沢口', '万座･鹿沢口');
                var Agatsuma = ['万座･鹿沢口', '大前', '長野原草津口'];
                if (Agatsuma.includes(Des[2][tr])) {
                    TrainTypeWordChange(2, tr, '普通', '吾妻線4両 乗車口③～⑥')
                } else if (Type[2][tr] != "") {
                    TrainTypeWordChange(2, tr, '普通', '上越線4両 乗車口③～⑥')
                }
                AllTrainTypeReplace(2, tr, '草津・四万', '特急草津･四万');
                TrainTypeWordChange(3, tr, '特別快速:湘南新宿ライン経由', '湘南新宿ﾗｲﾝ特快10両');
                TrainTypeWordChange(3, tr, '快速:湘南新宿ライン経由', '湘南新宿ﾗｲﾝ快速10両');
                AllTrainTypeReplace(3, tr, '草津・四万', '特急草津･四万');
                AllTrainTypeReplace(3, tr, 'あかぎ', '特急あかぎ');
                 TrainTypeWordChange(3, tr, '普通', '上野東京ﾗｲﾝ普通10両');
                const _PlainDestination = plainTrainTables[3].trains[tr]?.destination ?? "";
                if ((_PlainDestination == '上野' || _PlainDestination == '籠原') && plainTrainTables[3].trains[tr].type == '普通') {
                    trainTables[3].trains[tr].type = '高崎線普通10両';
                }

                TypeColorChange(3, tr, '湘南新宿', 'orange');
                TypeColorChange(2, tr, '特急', 'red');
                TypeColorChange(3, tr, '特急', 'red');
            }
            DestinationSet();
            allDestinationTwoLettersDistance(TDes, 1, 0.8);
            NewAllLastShow();
            document.getElementById('WType13')!.textContent = '八高線 高麗川 拝島 八王子方面 普通';
            document.getElementById('TType13')!.style.backgroundColor = "gray";
            document.getElementById('TType13')!.style.color = "white";
            comment!.innerHTML += '両数と臨時特急、一部表示は不正確、実際には接続表示がある';
        }
    }

}
if (station == '高崎駅' && Indexfile == 'index3.php') {
    Tablenum = 5;
}