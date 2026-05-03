import { DestinationDevide, limitedjustnumber, limitednumber } from './module/firstTableEdit';
import { DetailShow, doallDetailShow, NewDetailShow } from "./module/detailMainPut";
import { DetailReplace } from "./module/detailSimpleEdit";
import { TypeColorChange, JREScolor } from "./module/colorSimpleSet";
import { StationRegistry, StationConfig } from './types/station';
import { FourLetters, TrainNumber, TwoLetterDistance, JRAllShinkansenNumberSet, DestinationSet, swapColumns, AllClassSetting, JRLineName, JRLimitedNameDevide } from "./module/firstDisplayEdit";
import { TrainTypeSet, JRNewNameNumberDevide, NewAllLastShow } from "./module/firstDisplayEdit";
import { JRSBobj } from "./detailStopData/JREShindetailset";
import * as Stops from "./detailStopData/JRHokuShindetailset";
import { Seventeen } from "./detailStopData/JRTohokuShinset";
import { plainTrainTables, trainTables } from './types/trainTable';
import { TDes, comment } from './types/constants';
const ATOStable = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    ATOStable[td] = document.getElementById("TATOSTable" + (td + 1));
}
var YamagataRapid = [123, 157];
var Zaou = [201, 123, 205, 53, 133, 135, 137, 61, 141, 143, 67, 145, 149, 215, 157, 69, 223];
var Shirakawa = [50];
var Oyama = [202];
var annnaka = [602, 604, 608, 610, 612, 614, 618, 622, 626, 628, 630, 632];
var iiyama = [591, 551, 553, 555, 559, 561, 565, 569, 571, 573, 575, 577];
var Nhonjou = [600, 604, 628];
var Nkumagaya = [600, 604, 628];
var onsen = [507, 509];
var takefu = [501, 517];
console.log(TrainNumber);
/**
 * 新幹線・地域本線駅の設定
 */
export const ShinkansenStations: StationRegistry = {
    '長野駅': {
        name: '長野駅',
        company: '北陸新幹線',
        tableTitles: ['金沢 富山方面', '東京方面'],
        file: 'index3_S.php',
        dtype: [0, 1],
        setup: () => {
            limitedjustnumber(window.TT[0], 501, 'かがやき');
            limitedjustnumber(window.TT[0], 551, 'はくたか');
            limitedjustnumber(window.TT[1], 600, 'あさま');
            limitedjustnumber(window.TT[1], 552, 'はくたか');
            limitedjustnumber(window.TT[1], 500, 'かがやき');
        },
        onRender: () => {
            NewDetailShow(JRSBobj, "・");
            JRAllShinkansenNumberSet(2);
            DestinationSet()
            for (var tr = 0; tr < orderNum; tr++) {
                const _Number0 = trainTables[0].trains[tr]?.trainNumber ?? 0;
                const _Number1 = trainTables[1].trains[tr]?.trainNumber ?? 0;
                if (iiyama.includes(_Number0)) {
                    DetailReplace(0, tr, '上越妙高', '飯山・上越妙高');
                }
                if (annnaka.includes(_Number1)) {
                    DetailReplace(1, tr, '高崎', '安中榛名・高崎');
                }
                if (Nhonjou.includes(_Number1)) {
                    DetailReplace(1, tr, '本庄早稲田・', '');
                }
                if (Nkumagaya.includes(_Number1)) {
                    DetailReplace(1, tr, '熊谷・', '');
                }
                if (Stops.ueda.includes(_Number1)) {
                    DetailReplace(1, tr, '高崎', '上田・軽井沢・高崎');
                }
                if (Stops.sakudaira.includes(_Number1)) {
                    DetailReplace(1, tr, '上田', '上田・佐久平');
                }
                if (Stops.Ntakasaki.includes(_Number1)) {
                    DetailReplace(1, tr, '高崎・', '');
                }
                if (onsen.includes(_Number0)) {
                    DetailReplace(0, tr, '金沢', '金沢・加賀温泉・芦原温泉');
                }
                if (takefu.includes(_Number0)) {
                    DetailReplace(0, tr, '金沢・福井', '金沢・小松・福井・越前たけふ');
                }
            }
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < orderNum; tr++) {
                    const _Des = trainTables[td].trains[tr].destination;
                    if (Type[td][0] == '') {
                        console.log(td + ':' + tr);
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = 'お知らせ';
                        Detail[td][0] = '本日の運転は終了しました';
                        break;
                    } else if (Type[td][tr] != '') {
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = '停車駅';
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '１２両編成';
                    }
                    TypeColorChange(td, tr, 'かがやき', 'orange');
                    TypeColorChange(td, tr, 'はくたか', 'orange');
                    TypeColorChange(td, tr, 'あさま', 'red');
                    //DetailBanner(td, tr, 18);
                    if (Detail[td][tr] != '') {
                        Detail[td][tr] += "・" + Des[td][tr];
                        trainTables[td].trains[tr].detail += "・" + _Des;
                    }
                    TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
                }
            }
        }
    },
    '宇都宮駅': {
        name: '宇都宮駅',
        company: '東北新幹線',
        file: 'index3_S.php',
        tableTitles: ['東北新幹線 仙台方面', '新幹線 大宮・上野・東京方面'],
        dtype: [0, 1],
        nonGouFlag: 1,
        setup: () => {
            limitednumber(window.TT[0], 251, 'なすの');
            limitednumber(window.TT[1], 254, 'なすの');
            limitedjustnumber(window.TT[0], 51, 'やまびこ', '盛岡');
            limitedjustnumber(window.TT[0], 201, 'やまびこ*');
            limitedjustnumber(window.TT[0], 121, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
            limitedjustnumber(window.TT[1], 202, 'やまびこ*');
            limitedjustnumber(window.TT[1], 52, 'やまびこ+');
            limitedjustnumber(window.TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
        },
        onRender: () => {
            JRAllShinkansenNumberSet(2);
            DestinationSet();
            for (var tr = 0; tr < orderNum; tr++) {
                var _Number0 = trainTables[0].trains[tr]?.trainNumber ?? 0;
                var _Number1 = trainTables[1].trains[tr]?.trainNumber ?? 0;
                if (Type[1][tr] != '') {
                    if (_Number1 > 199 || _Number1 == 68) {
                        trainTables[1].trains[tr].detail = '小山・大宮・上野・東京';
                    } else {
                        trainTables[1].trains[tr].detail = '大宮・上野・東京';
                    }
                }
                if (Type[0][tr] != '') {
                    //console.log(LNumber);
                    var LDes = Des[0][tr];
                    var LNumber = document.getElementById('TName' + (0 + 1) + (tr + 1));
                    if (LNumber && _Number0 > 130 && _Number0 < 200) {
                        _Number0 += 2;
                        LNumber.textContent = String(_Number0);
                    }
                    //console.log(LNumber);
                    if (LDes == '那須塩原') {
                        trainTables[0].trains[tr].detail = '次の那須塩原までです';
                    } else if (LDes == '郡山') {
                        trainTables[0].trains[tr].detail = '那須塩原・新白河・郡山';
                    } else if (LDes.includes('新庄')) {
                        trainTables[0].trains[tr].detail = '郡山・福島・米沢・高畠・赤湯・かみのやま温泉・山形・天童・さくらんぼ東根・村山・大石田・新庄';
                    } else if (LDes.includes('山形')) {
                        trainTables[0].trains[tr].detail = '郡山・福島・米沢・高畠・赤湯・かみのやま温泉・山形';
                    } else if (_Number0 > 200) {
                        trainTables[0].trains[tr].detail = '那須塩原・新白河・郡山・福島・仙台';
                    } else if (_Number0 < 100 && _Number0 > 0) {
                        trainTables[0].trains[tr].detail = '郡山・福島・仙台・古川・くりこま高原・一ノ関・水沢江刺・北上・新花巻・盛岡';
                    } else if (_Number0 > 100) {
                        trainTables[0].trains[tr].detail = '郡山・福島・仙台';
                    }
                }
                if (YamagataRapid.includes(TrainNumber[0][tr])) {
                    trainTables[0].trains[tr].detail = '郡山・福島・米沢・山形・天童・さくらんぼ東根・村山・大石田・新庄';
                }
                if (Zaou.includes(TrainNumber[0][tr]) && !Type[0][tr].includes('つばさ')) {
                    DetailReplace(0, tr, '福島', '福島・白石蔵王');
                } else if (Zaou.includes(TrainNumber[0][tr])) {
                    trainTables[0].trains[tr].detail += '　やまびこは福島発車後白石蔵王にも停まります';
                }
            }
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < orderNum; tr++) {
                    var _Type0 = plainTrainTables[td].trains[0].type;
                    var _Type = plainTrainTables[td].trains[tr]?.type ?? "";
                    if (_Type0 == '') {
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = 'お知らせ';
                        Detail[td][0] = '本日の運転は終了しました';
                        break;
                    } else if (_Type.startsWith('やまびこ･つばさ')) {
                        document.getElementById('TType' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.6)" + "translate(-30%,0%)";
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = '停車駅';
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '１７両編成';
                    }
                    else if (_Type != '') {
                        document.getElementById('TDetailtitle' + (td + 1) + (tr + 1))!.textContent = '停車駅';
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '１０両編成';
                    }
                    TypeColorChange(td, tr, 'なすの', 'orange');
                    TypeColorChange(td, tr, 'つばさ', 'orange');
                    TypeColorChange(td, tr, 'やまびこ', 'red');
                    JREScolor(td, tr, 'やまびこ･つばさ', '<span class="red">やまびこ</span>･<span class="orange">つばさ</span>', orange);
                    TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
                }
            }
        }
    },
    '福島駅': {
        name: '福島駅',
        company: 'JR東日本',
        tableTitles: ['東北新幹線(下り) 仙台 盛岡方面', '東北新幹線(上り) 宇都宮 大宮 東京方面', '東北本線 白石 仙台方面', '東北本線 郡山 新白河方面', '山形新幹線 奥羽本線 米沢 山形方面'],
        dtype: [0, 1],
        detailFlag: 2,
        nonGouFlag: 1,
        setup: () => {
            window.DetailLength = [2, 2, 0, 0, 0];
            limitedjustnumber(window.TT[0], 51, 'やまびこ', '盛岡');
            limitedjustnumber(window.TT[0], 123, 'やまびこ', '仙台');
            limitedjustnumber(window.TT[0], 201, 'やまびこ*');
            limitedjustnumber(window.TT[4], 127, 'つばさ');
            limitedjustnumber(window.TT[1], 202, 'やまびこ*');
            limitedjustnumber(window.TT[1], 50, 'やまびこ+');
            limitedjustnumber(window.TT[1], 122, ['やまびこ', 'つばさ', 'やまびこ･つばさ']);
        },
        onRender: () => {
            JRNewNameNumberDevide(2);
            JRAllShinkansenNumberSet(2);
            DestinationSet();
            TrainTypeSet(2);
            TrainTypeSet(3);
            TrainTypeSet(4);
            for (var tr = 0; tr < 3; tr++) {
                var _Type = trainTables[4].trains[tr].type;
                TypeColorChange(4, tr, 'つばさ', 'red');
                if (_Type.startsWith('つばさ')) {
                    trainTables[4].trains[tr].type += '号';
                }
            }
            for (var tr = 0; tr < 2; tr++) {
                var _Type = plainTrainTables[1].trains[tr].type;
                var _Number0 = trainTables[0].trains[tr]?.trainNumber ?? NaN;
                var _Number1 = trainTables[1].trains[tr]?.trainNumber ?? NaN;
                if (!Zaou.includes(_Number0) && Des[0][tr] == '仙台') {
                    trainTables[0].trains[tr].detail = 'この列車は仙台まで止まりません。';
                }
                if (_Number0 < 100 && _Number0 > 0) {
                    trainTables[0].trains[tr].detail = '仙台・古川・くりこま高原・一ノ関・水沢江刺・北上・新花巻・盛岡';
                } else if (_Number0 > 100) {
                    trainTables[0].trains[tr].detail = '仙台';
                }
                if (Zaou.includes(_Number0)) {
                    Detail[0][tr] = "";
                    DetailReplace(0, tr, '仙台', '白石蔵王・仙台');
                }
                if (trainTables[0].trains[tr].detail == '仙台') {
                    trainTables[0].trains[tr].detail = 'この列車は仙台まで止まりません。';
                }
                JREScolor(1, tr, 'やまびこ･つばさ', '<span class="green">やまびこ</span>･<span class="orange">つばさ</span>', 'pink');
                FourLetters(1, tr, 0.6, 30, 'TType', Type, 8);
                if (_Type.startsWith('やまびこ･つばさ')) {
                    trainTables[1].trains[tr].detail = '郡山・宇都宮・大宮・上野・東京';
                    trainTables[1].trains[tr].type = '<span class="green">やまびこ</span>･<span style="color:pink;">つばさ</span>';
                    document.getElementById('TType2' + (tr + 1))!.style.transform = "scaleX(0.6)" + "translate(-30%,0%)";
                    document.getElementById('TName2' + (tr + 1))!.style.color = 'pink';
                    document.getElementById('TNum2' + (tr + 1))!.style.backgroundColor = 'orange';
                    document.getElementById('TNum2' + (tr + 1))!.style.color = 'black';
                    document.getElementById('Ttopic2' + (tr + 1))!.textContent = '１７両編成';
                } else if (_Type != '') {
                    document.getElementById('Ttopic2' + (tr + 1))!.textContent = '１０両編成';
                }
                if (Des[1][tr] == '郡山') {
                    trainTables[1].trains[tr].detail = 'この列車は郡山まで止まりません。';
                } else if (_Number1 == 124) {
                    trainTables[1].trains[tr].detail = '大宮・東京';
                } else if (_Number1 < 170 && _Number1 > 0) {
                    trainTables[1].trains[tr].detail = '郡山・宇都宮・大宮・上野・東京';
                } else if (_Number1 > 199) {
                    trainTables[1].trains[tr].detail = '郡山・新白河・那須塩原・宇都宮・小山・大宮・上野・東京';
                }
                if (Shirakawa.includes(_Number1)) {
                    DetailReplace(1, tr, '宇都宮', '新白河・宇都宮');
                }
                if (Oyama.includes(_Number1)) {
                    DetailReplace(1, tr, '那須塩原・宇都宮', '宇都宮');
                }
                if (Seventeen.includes(_Number0)) {
                    document.getElementById('Ttopic1' + (tr + 1))!.textContent = '１７両編成';
                } else if (Type[0][tr] != '') {
                    document.getElementById('Ttopic1' + (tr + 1))!.textContent = '１０両編成';
                }
                if (Seventeen.includes(_Number1)) {
                    document.getElementById('Ttopic2' + (tr + 1))!.textContent = '１７両編成';
                }
            }
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
        },
        onRender: () => {
            JRNewNameNumberDevide(2);
            JRAllShinkansenNumberSet(2);
            DestinationSet();
            TrainTypeSet(2);
            TrainTypeSet(3);
            const _Number0 = trainTables[0].trains[0]?.trainNumber ?? 0
            const _Number = trainTables[1].trains[0]?.trainNumber ?? 0
            if (Des[0][0] == '郡山') {
                trainTables[0].trains[0].detail = 'この列車は郡山まで止まりません。';
            } else if (Des[0][0] == '仙台') {
                trainTables[0].trains[0].detail = '郡山・福島・仙台';
            }
            if (_Number < 60 && _Number > 0) {
                trainTables[1].trains[0].detail = '宇都宮・大宮・上野・東京';
            } else if (_Number > 60) {
                trainTables[1].trains[0].detail = '那須塩原・宇都宮・小山・大宮・上野・東京';
            }
            if (Zaou.includes(_Number0)) {
                DetailReplace(0, 0, '仙台', '白石蔵王・仙台');
            }
            for (var td = 0; td < 2; td++) {
                for (var tr = 0; tr < 2; tr++) {
                    TypeColorChange(td, tr, 'やまびこ', 'red');
                    TypeColorChange(td, tr, 'なすの', 'orange');
                    if (Seventeen.includes(TrainNumber[td][tr])) {
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '１７両編成';
                    } else if (Type[td][tr] != '') {
                        document.getElementById('Ttopic' + (td + 1) + (tr + 1))!.textContent = '１０両編成';
                    }
                }
            }
        }
    },
    '仙台駅': {
        name: '仙台駅',
        company: 'JR東日本',
        tableTitles: ['仙山線 愛子 作並 山形方面', '仙石線 本塩釜 松島海岸 石巻方面', '東北本線下り 岩切 利府 塩釜 小牛田方面', '東北本線 岩沼 白石 福島方面', '常磐線 亘理 相馬 原ノ町方面', '仙台空港アクセス線 名取 仙台空港方面'],
        file: 'index3_T.php',
        dtype: [0, 1],
        setup: () => {
            // 仙台駅の設定は index3_T.php でのみ適用
            DestinationDevide(['仙台空港'], 3, 5);
            DestinationDevide(['原ノ町', '品川', '新地', '山下'], 3, 4);

        },
        onRender: () => {
            for (var td = 0; td < Tablenum; td++) {
                TrainTypeSet(td);
                swapColumns(ATOStable[td], 0, 1);
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = 'red';
                    TypeColorChange(td, tr, '普通', 'orange');
                    TypeColorChange(td, tr, '特急', 'red');
                    TypeColorChange(td, tr, '特別快速', 'red');
                    TwoLetterDistance(td, tr, Des, TDes, 1, 0.6);
                    TwoLetterDistance(td, tr, Des, TDes, 0.4, 0.2, 3);
                }
                document.getElementById('HType' + (td + 1))!.style.width = "10%";
                document.getElementById('HName' + (td + 1))!.style.width = "33%";
            }
            AllClassSetting('.shubetu', 'textAlign', 'left');
            AllClassSetting('.HrailNumber', 'textAlign', 'center');
            AllClassSetting('.CName', 'textAlign', 'left');
            AllClassSetting('.railnumber', 'color', 'red');
            for (var tr = 0; tr < 3; tr++) {
                JRLineName(2, tr, '快速', '仙石東北ﾗｲﾝ', 1);
                JRLimitedNameDevide(4, tr, 'ひたち', '特急', 'red');
                FourLetters(2, tr, 0.7, 15, 'TType');
            }
            DestinationSet();
            NewAllLastShow();
            comment!.innerHTML += "新幹線仙台駅は別画面で作成";
        }
    }
};
//Tforshow3_T.tsをインタフェース化した際に削除する。
if (station == '福島駅') {
    detailflag = 2;
}