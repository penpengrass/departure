import { comment } from './types/constants';
import { M_Himeji2, S_Himeji2, S_Tokuyama2, N_Tokuyama2, N_Himeji2 } from './detailStopData/JRW_S';
import { RailNumberDevide, DestinationDevide, TrainNameDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { limited, rapid, Jrapid, Jsubrapid, local } from './detailStopData/JRdetail';
import { StationRegistry, StationConfig } from './types/station';
import {
    LineMarkAdd, AllClassSetting, AllTrainTypeReplace, AllDestinationReplace, DestinationWordChange, allTypeTwoLettersDistance,
    holiday_F, NewAllLastShow, allDestinationTwoLettersDistance, JRLimitedDevide, rowremove, TrainTypeSet, DestinationSet,
    TypeTwoLetterDistance,
    DestinationTwoLetterDistance
} from './module/firstDisplayEdit';
import { allJROsakaColor } from './typeColor';
import { DesMiddle, allJRWTrainNameColor } from "./module/displayEdit4";
import * as Stops from "./detailStopData/JRW_afterset";
import { LineCopy } from './module/firstTableEdit';
import { plainTrainTables, trainTables } from "./types/trainTable";
import { Kitashinchi_Banner, Maibara_Banner, Yonago_Banner } from "./module/displayEdit4";
import { allswitch_detail } from "./module/detailBannerSwitch";
import { CarsDefine, CarsInto, CarsDevideToLine } from "./module/carsEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { allswitchMihara } from "./module/displaySwitch";
import { allJRColor, allJRWSZColor } from "./typeColor";
import { JRMaibara_Detail } from './detailStopData/JRW_afterset';
NonGouflag = 0;
detailLength_one = 1;
export var JRWSobj = {//色は文字
    Typea: { type: "のぞみ", color: orange, detail: limited, },
    Typeb: { type: "ひかり", color: red, detail: rapid, },
    Typec: { type: "こだま", color: '#0f0', detail: rapid, },
    Typed: { type: "みずほ", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: red, detail: Jsubrapid, },
    Typef: { type: "つばめ", color: '#0f0', detail: local, }
};
export var JRWA_Bobj = {//色は文字
    Typea: { type: "特急", color: 'red', detail: limited, },
    Typeb: { type: "新快速", color: blue, detail: rapid, },
    Typec: { type: "快速", color: 'orange', detail: rapid, },
    Typed: { type: "区間快速", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: '#FF6FFF', detail: Jsubrapid, },
    Typef: { type: "普通", color: black, detail: local, }
};
//大阪駅など
export var JRWA_obj = {//色は文字
    Typea: { type: "特急", color: white, detail: limited, },
    Typeb: { type: "新快速", color: white, detail: rapid, },
    Typec: { type: "快速", color: black, detail: rapid, },
    Typed: { type: "区間快速", color: black, detail: Jrapid, },
    Typee: { type: "さくら", color: white, detail: Jsubrapid, },
    Typef: { type: "普通", color: white, detail: local, }
};
export var JRWALobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "関空快速", color: blue, detail: rapid, },
    Typec: { type: "大和路快速", color: green, detail: rapid, },
    Typed: { type: "快速", color: orange, detail: Jrapid, },
    Typee: { type: "区間快速", color: green, detail: Jsubrapid, },
    Typef: { type: "普通", color: black, detail: local, },
    Typelocal: { type: "普通", color: white, detail: local, }
};
var Matsukaze_Masuda = [1, 5, 7, 9];
export const JRWestStations: StationRegistry = {
    '岡山駅': {
        name: '岡山駅',
        company: 'JR西日本',
        file: 'index4.php',
        tableTitles: ['山陽本線  倉敷 福山方面', '伯備線 倉敷 新見 米子方面', '山陽本線  和気 姫路方面', '赤穂線 西大寺 播州赤穂方面', '瀬戸大橋線 茶屋町 児島 四国方面',
            '津山線 福渡 津山方面', '桃太郎線 備中高松 総社方面'],
        setup: () => {
            TwoLetterDisflag = 1;
            var selectstation = ['備前片上', '長船', '日生', '播州赤穂', '西大寺'];
            DestinationDevide(selectstation, 2, 3);
            limitednumber(TT[2], 1, 'ｽｰﾊﾟｰいなば');
            limitednumber(TT[1], 1, 'やくも');
            limitednumber(TT[4], 1, '南風');
            limitednumber(TT[4], 1, 'しおかぜ');
            limitednumber(TT[4], 1, 'ﾏﾘﾝﾗｲﾅｰ');
        },
        onRender: () => {
            //スーパーいなば
            JRLimitedDevide(1);
            for (var tr = 0; tr < Type[2].length; tr++) {
                document.getElementById("TName" + 3 + "" + (tr + 1))!.style.transform =
                    "scaleX(0.80)" + "translate(-5%,0%)";
            }

            JRLimitedDevide(2);
            //瀬戸大橋線
            //JRNameDevide();
            JRLimitedDevide(4);
            for (var tr = 0; tr < Type[4].length; tr++) {
                if (Type[4][tr].includes("普通")) {
                    if (Des[4][tr] == "宇野") {
                        document.getElementById(
                            "TName" + 5 + "" + (tr + 1)
                        )!.textContent = "宇野みなと線";
                    } else {
                        document.getElementById(
                            "TName" + 5 + "" + (tr + 1)
                        )!.textContent = "瀬戸大橋線";
                    }

                    document.getElementById("TName" + 5 + "" + (tr + 1))!.style.color =
                        "#0f0";
                    document
                        .getElementById("TName" + 5 + "" + (tr + 1))!
                        .classList.remove("name");
                } else if (Type[4][tr].includes("特急")) {
                    /*var Limited = Type[4][tr].substr(Type[4][tr].indexOf('急') + 1);
                    document.getElementById('TName' + 5 + '' + (tr + 1))!.textContent = Limited;
                    Type[4][tr] = '特急'*/
                    //JRLimitedDevide(4);
                    var Name = document.getElementById(
                        "TName" + 5 + (tr + 1)
                    )!.textContent;
                    console.log(Name.length + ":" + tr);
                    if (Name.length > 8) {
                        document.getElementById(
                            "TName" + 5 + (tr + 1)
                        )!.style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
                    }
                } else if (Type[4][tr].includes("快速ﾏﾘﾝﾗｲﾅｰ")) {
                    var Rapid = Type[4][tr].substr(Type[4][tr].indexOf("速") + 1);
                    document.getElementById("TName" + 5 + "" + (tr + 1))!.textContent =
                        Rapid;
                    trainTables[4].trains[tr].type = "快速";
                } else if (Type[4][tr].includes("臨時")) {
                    var Rapid = Type[4][tr].substr(Type[4][tr].indexOf("時") + 1);
                    document.getElementById("TName" + 5 + "" + (tr + 1))!.textContent =
                        Rapid;
                    document.getElementById("TName" + 5 + "" + (tr + 1))!.style.color =
                        "orange";
                    trainTables[4].trains[tr].type = "臨時";
                }
            }
            for (var tr = 0; tr < Type[5].length; tr++) {
                if (Type[5][tr].includes("快速")) {
                    document.getElementById("TName" + 6 + "" + (tr + 1))!.textContent =
                        "ことぶき";
                    document.getElementById("TName" + 6 + "" + (tr + 1))!.style.color =
                        "orange";
                    trainTables[5].trains[tr].type = "快速";
                }
            }
            allJRWTrainNameColor("orange", "#0f0", "#0f0");
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
        }
    },
    '姫路駅': {
        name: '姫路駅',
        company: 'JR西日本',
        tableTitles: ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面',
            '播但線 寺前 和田山方面', 'JR神戸線 三ノ宮 大阪方面', '姫新線 播磨新宮 佐用方面', '山陽線 相生 播州赤穂 上郡 岡山方面'],
        setup: () => {
            TwoLetterDisflag = 1;
            var sakura1 = [541, 543, 545, 549, 551, 553, 555, 565, 569, 571, 573];
            var mizuho1 = [601, 609, 613];
            var kodama1 = [837, 839, 841, 845, 847, 849, 861, 865, 867, 869, 871, 873, 875, 877];
            var kodama2 = [830, 832, 834, 836, 840, 842, 854, 856, 858, 860, 862, 866, 868, 870];
            limitednumber2(TT[1], mizuho1, 'みずほ');
            limitednumber2(TT[0], M_Himeji2, 'みずほ');
            limitednumber2(TT[1], kodama1, 'こだま');
            limitednumber2(TT[0], kodama2, 'こだま');
            limitednumber2(TT[1], sakura1, 'さくら');
            limitednumber2(TT[0], S_Himeji2, 'さくら');
            limitedjustnumber(TT[1], 61, 'のぞみ');
            limitednumber2(TT[0], N_Himeji2, 'のぞみ');
            limitedjustnumber(TT[0], 500, 'ひかり');
            limitedjustnumber(TT[1], 501, 'ひかり');
            limitednumber(TT[3], 2, 'ｽｰﾊﾟｰはくと');
            limitednumber(TT[5], 1, 'ｽｰﾊﾟｰはくと');
            limitednumber(TT[2], 1, 'はまかぜ');
            limitednumber(TT[3], 2, 'はまかぜ');
        },
        onRender: () => {
            var Shinkansenflag = 2;
            JRLimitedDevide(Shinkansenflag + 0);
            JRLimitedDevide(Shinkansenflag + 1);
            JRLimitedDevide(Shinkansenflag + 3);
            for (var tr = 0; tr < Type[0].length; tr++) {
                var _PlainType = plainTrainTables[Shinkansenflag + 1].trains[tr].type;
                if (_PlainType == "快速") {
                    trainTables[Shinkansenflag + 1].trains[tr].type = "普通";
                    document.getElementById("TName" + (Shinkansenflag + 2) + "" + (tr + 1))!.innerHTML = '<span class="PartRapid">西明石から快速</span>';
                    document.getElementById("TName" + (Shinkansenflag + 2) + "" + (tr + 1))!.style.textAlign = "left";
                }
                DestinationWordChange(3, tr, "米原", "京都方面米原");
                DestinationWordChange(3, tr, "野洲", "京都方面野洲");
                DestinationWordChange(3, tr, "草津", "京都方面草津");
                DestinationWordChange(3, tr, "長浜", "米原方面長浜");
                DestinationWordChange(3, tr, "近江塩津", "米原方面近江塩津");
                DesMiddle(3, tr, "経由");
                DesMiddle(3, tr, "方面");
            }
            TrainTypeSet(2);
            TrainTypeSet(3);
            TrainTypeSet(4);
            TrainTypeSet(5);
            allJRWTrainNameColor("orange", "orange", "red");
            /*
            document.getElementById('HName' + 3).remove();
            for (var tr = 0; tr < Type[2].length; tr++) {
                document.getElementById('TName' + 3 + '' + (tr + 1)).remove();
            }
            */
            for (var tr = 0; tr < Type[3].length; tr++) {
                var _PlainType3 = plainTrainTables[Shinkansenflag + 3].trains[tr].type;
                if (_PlainType3 == "快速") {
                    trainTables[Shinkansenflag + 3].trains[tr].type = "普通";
                }
            }
        }
    },
    '在来線広島駅': {
        name: '広島駅',
        company: 'JR西日本',
        file: 'index4.php',
        tableTitles: ['山陽線 宮島口 岩国方面', '可部線 緑井 あき亀山方面', '山陽線 西条 三原方面', '呉線 呉 広方面', '芸備線 下深川 三次方面'],
        setup: () => {
            TwoLetterDisflag = 1;
        },
        onRender: () => {
            for (var tr = 0; tr < 3; tr++) {
                if (Type[0][tr] == "普通") {
                    document.getElementById("TName" + 1 + "" + (tr + 1))!.textContent =
                        "山陽線";
                    document.getElementById("TName" + 1 + "" + (tr + 1))!.style.color =
                        "#0f0";
                    document
                        .getElementById("TName" + 1 + "" + (tr + 1))!
                        .classList.remove("name");
                }
            }
            for (var tr = 0; tr < 2; tr++) {
                if (Type[1][tr] == "普通") {
                    trainTables[1].trains[tr].cars = "4両";
                } else if (Type[1][tr] == "普通*") {
                    trainTables[1].trains[tr].cars = "2両";
                    Type[1][tr] = "普通";
                }
                document.getElementById("TName" + 2 + (tr + 1))!.textContent =
                    trainTables[1].trains[tr]?.cars ?? "";
                document.getElementById("TName" + 2 + (tr + 1))!.style.color = "red";
                document.getElementById("TName" + 2 + (tr + 1))!.style.textAlign =
                    "right";
                if (Type[3][tr] == "快速") {
                    document.getElementById("TName" + 4 + "" + (tr + 1))!.textContent =
                        "安芸路ライナー";
                    document.getElementById(
                        "TName" + 4 + "" + (tr + 1)
                    )!.style.transform = "scaleX(0.65)" + "translate(-10%,0%)";
                }
                if (Type[4][tr] == "快速") {
                    document.getElementById("TName" + 5 + "" + (tr + 1))!.textContent =
                        "みよしライナー";
                    document.getElementById("TName" + 5 + (tr + 1))!.style.transform =
                        "scaleX(0.65)" + "translate(-10%,0%)";
                }
            }

            LineMarkAdd(1, "R", "red");
            LineMarkAdd(2, "B", "skyblue");
            LineMarkAdd(3, "G", "yellowgreen");
            LineMarkAdd(4, "Y", "orange");
            LineMarkAdd(5, "P", "blue");
            //広島駅のみ表のタイトルを広くしている
            AllClassSetting("Ctitle", "padding", "7px");
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
        }
    },
    '新見駅': {
        name: '新見駅',
        company: 'JR西日本',
        tableTitles: ['伯備線 岡山方面', '伯備線 米子 出雲市方面', '芸備線 東城 備後落合方面', '姫新線 中国勝山 津山方面'],
        setup: () => {
            limitednumber(TT[0], 2, 'やくも');
            limitednumber(TT[2], 1, 'やくも');
            RailNumberDevide(2, 2, 1);
        }
    },
    '糸崎駅': {
        name: '糸崎駅',
        company: 'JR西日本',
        tableTitles: ['山陽線 福山 岡山方面', '山陽線 三原 広島方面'],
        setup: () => {
            TT[0][6][2] = '44';
        },
        onRender: () => {
            let sanyo = ["岩国", "大野浦", "五日市", "広島", "南岩国", "徳山"];
            for (var tr = 0; tr < orderNum; tr++) {
                let dType = document.getElementById("TType2" + (tr + 1));
                if (Des[1][tr] == "広") {
                    trainTables[1].trains[tr].type = "呉線";
                    dType!.style.color = "orange";
                } else if (sanyo.includes(Des[1][tr])) {
                    trainTables[1].trains[tr].type = "山陽線";
                    dType!.style.transform = "scaleX(0.70)" + "translate(-20%,0%)";
                }
                DestinationWordChange(1, tr, "岩国", "広島方面岩国");
                DestinationWordChange(1, tr, "大野浦", "広島方面大野浦");
                DestinationWordChange(1, tr, "五日市", "広島方面五日市");
            }
            DestinationSet();
            for (var td = 0; td < Tablenum; td++) {
                rowremove(td, "HName", "TName");
                //表のサイズを小さくする
                document.getElementById("TTable" + (td + 1))!.style.width = "40em";
                document.getElementById("TTable" + (td + 1))!.style.marginLeft = "8em";
                for (var tr = 0; tr < orderNum; tr++) {
                    DestinationTwoLetterDistance(td, tr, TDes, 1, 1);
                    DesMiddle(td, tr, "方面");
                    DesMiddle(td, tr, "経由");
                }
            }
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
        }
    },
    '三原駅': {
        name: '三原駅',
        company: 'JR西日本',
        tableTitles: ['山陽線 福山 岡山方面', '山陽線 広島 岩国方面', '呉線 広 呉方面'],
        onRender: () => {
            for (var tr = 0; tr < orderNum; tr++) {
                DestinationWordChange(1, tr, "大野浦", "広島方面大野浦");
                DestinationWordChange(1, tr, "五日市", "広島方面五日市");
                DestinationWordChange(1, tr, "岩国", "広島方面岩国");
                DestinationWordChange(1, tr, "南岩国", "広島方面南岩国");
            }
            DestinationSet();
            for (var tr = 0; tr < orderNum; tr++) {
                DesMiddle(0, tr, '連絡');
                DesMiddle(1, tr, '方面');
            }
            setInterval(allswitchMihara, 5000);
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
        }
    },
    '岩国駅': {
        name: '岩国駅',
        company: 'JR西日本',
        tableTitles: ['岩徳線', '錦川清流線', '山陽線 宮島口 福岡方面', '山陽線 柳井 徳山方面'],
        setup: () => {
            var selectstation = ['錦町'];
            DestinationDevide(selectstation, 0, 1);
        },
        onRender: () => {
            document.getElementById("supplement")!.textContent = "※両数は不正確 ";
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent +=
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent +=
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
            rowremove(0, "HName", "TName");
            rowremove(1, "HName", "TName");
            document.getElementById("TTable" + 1)!.style.width = "35em";
            document.getElementById("HType1")!.style.width = "30%";
            document.getElementById("HTime1")!.style.width = "20%";
            document.getElementById("HDes1")!.style.width = "40%";
            LineMarkAdd(1, " ", "green");
            LineMarkAdd(2, " ", "gray");
            LineMarkAdd(3, "R", "red");
            LineMarkAdd(4, " ", "blue");
            for (var tr = 0; tr < 3; tr++) {
                CarsDevideToLine(2);
                CarsDefine(3, tr, "普通", "", 4);
                CarsDefine(3, tr, "普通*", "", 3);
                CarsDefine(3, tr, "普通+", "", 6);
                Type[3][tr] = Type[3][tr].replace("*", "");
                Type[3][tr] = Type[3][tr].replace("+", "");
                CarsInto(2, tr, "TName");
                CarsInto(3, tr, "TName");
                document.getElementById("TName" + (2 + 1) + (tr + 1))!.style.color = "orange";
                document.getElementById("TName" + (3 + 1) + (tr + 1))!.style.color = "orange";
            }
            TrainTypeSet(3)
        }
    },
    '北新地駅': {
        name: '北新地駅',
        company: 'JR西日本',
        tableTitles: ['京橋 四条畷 松井山手方面', '尼崎 宝塚 三ノ宮方面'],
        setup: () => {
            TwoLetterDisflag = 1;
        },
        onRender: () => {
            var Jrapid = LineCopy(Stops.Grapid);
            var _Type = plainTrainTables[0].trains[0].type;
            if (_Type == '快速') {
                trainTables[0].trains[0].detail = Stops.Hrapid;
            } else if (_Type == '区快') {
                trainTables[0].trains[0].detail = Stops.Tsubrapid;
            } else if (_Type == '普通') {
                trainTables[0].trains[0].detail = Des[0][0] + 'までの各駅';
            }
            if (Des[1][0] == '塚口' || Des[1][0] == '尼崎') {
                trainTables[1].trains[0].detail = Des[1][0] + 'までの各駅';
            } else if (Des[1][0] == '神戸方面西明石') {
                Des[1][0] == '西明石';
                trainTables[1].trains[0].detail = '西明石までの各駅';
            } else if (Type[1][0] == '普通') {
                trainTables[1].trains[0].detail = Des[1][0] + 'までの各駅';
            }
            DestinationSet();
            for (var tr = 0; tr < orderNum; tr++) {
                DesMiddle(1, tr, "方面");
            }
            holiday_F(station);
            NewAllLastShow();
        }
    },
    '三ノ宮駅': {
        name: '三ノ宮駅',
        company: 'JR西日本',
        tableTitles: ['尼崎 大阪 京都方面', '西明石 姫路方面'],
        setup: () => {
            MinIn = 1;
            limitedjustnumber(TT[0], 2, '特急はまかぜ');
            limitedjustnumber(TT[1], 1, '特急はまかぜ');
            limitedjustnumber(TT[0], 2, '特急ｽｰﾊﾟｰはくと');
            limitedjustnumber(TT[1], 1, '特急ｽｰﾊﾟｰはくと');
            TwoLetterDisflag = 1;
        },
        onRender: () => {
            LineMarkAdd(1, "A", "blue");
            LineMarkAdd(2, "A", "blue");
            if (holidayflag == 1) {
                document.getElementById("supplement")!.innerHTML +=
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)<br>";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.innerHTML +=
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)<br>";
            }
            document.getElementById("supplement")!.innerHTML +=
                "一部の快速の番線は不正確";
            var TozaiLine = [
                "四条畷",
                "松井山手",
                "京田辺",
                "同志社前",
                "木津",
                "放出",
                "長尾",
            ];
            JRLimitedDevide(0);
            JRLimitedDevide(1);
            allJRWTrainNameColor("orange", "orange", "red");
            for (var tr = 0; tr < orderNum; tr++) {
                if (TozaiLine.includes(Des[0][tr])) {
                    document.getElementById("TName" + 1 + (tr + 1))!.innerText =
                        "東西線経由";
                    document.getElementById("TName" + 1 + (tr + 1))!.style.textAlign =
                        "center";
                }
                DestinationWordChange(0, tr, "米原", "京都方面米原");
                AllDestinationReplace(0, tr, "野洲", "京都方面野洲");
                AllDestinationReplace(0, tr, "草津", "京都方面草津");
                AllDestinationReplace(0, tr, "長浜", "米原方面長浜");
                AllDestinationReplace(0, tr, "近江塩津", "米原方面近江塩津");
                DesMiddle(0, tr, "方面");
                DesMiddle(0, tr, "経由");
                DesMiddle(1, tr, "方面");
            }
        }
    },
    '米原駅': {
        name: '米原駅',
        company: 'JR西日本',
        tableTitles: ['東海道線 彦根 草津 京都方面', '北陸線 長浜 敦賀 金沢方面', '東海道線 大垣 岐阜方面'],
        setup: () => {
            var shirasagi = [51, 1, 3, 5, 53, 7, 55, 9, 57, 11, 59, 13, 61, 15, 63];
            //var shirasagi = [51, 1, 3, 5, 53, 7, 9, 57, 11, 59, 13, 61, 15, 63, 65];
            limitednumber2(TT[1], shirasagi, 'しらさぎ');
            limitednumber(TT[2], 2, 'しらさぎ');
            TwoLetterDisflag = 1
        },
        onRender: () => {
            JRMaibara_Detail();
            JRLimitedDevide(0);
            JRLimitedDevide(1);
            JRLimitedDevide(2);
            DestinationSet();
            //document.getElementById('TName' + 2 + '' + (tr + 1))!.style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            for (var tr = 0; tr < Type[0].length; tr++) {
                var _PlainType = plainTrainTables[0].trains[tr]?.type ?? "";
                var _PlainType2 = plainTrainTables[2].trains[tr]?.type ?? "";
                if (_PlainType == "快速") {
                    trainTables[0].trains[tr].type = "普通";
                    document.getElementById("WName" + 1 + "" + (tr + 1))!.innerHTML = '<span class="PartRapid">高槻から快速</span>';
                    trainTables[0].trains[tr].trainName = '<span class="PartRapid">高槻から快速</span>';
                    document.getElementById("TName" + 1 + "" + (tr + 1))!.style.textAlign = "left";
                } else if (_PlainType == "快速*") {
                    trainTables[0].trains[tr].type = "普通";
                    document.getElementById("WName" + 1 + "" + (tr + 1))!.innerHTML = '<span class="PartRapid">京都から快速</span>';
                    trainTables[0].trains[tr].trainName = '<span class="PartRapid">京都から快速</span>';
                    document.getElementById("TName" + 1 + "" + (tr + 1))!.style.textAlign = "left";
                }
                if (_PlainType2 == "特別快速") {
                    document.getElementById("TType" + 3 + "" + (tr + 1))!.style.color =
                        "red";
                }

                DestinationWordChange(0, tr, "加古川", "神戸方面加古川");
                DestinationWordChange(0, tr, "網干", "姫路方面網干");
                DestinationWordChange(0, tr, "上郡", "姫路方面上郡");
                DesMiddle(0, tr, "方面");
                DesMiddle(2, tr, "方面");
            }
            allJRWTrainNameColor("orange", "orange", "red");
            if (holidayflag == 1) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.textContent =
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
            document.getElementById("supplement")!.textContent +=
                " 停車駅表示は一部不正確";
        }
    },
    '天王寺駅': {
        name: '天王寺駅',
        company: 'JR西日本',
        tableTitles: ['大和路線 王寺 奈良 加茂方面', 'JR難波 大阪方面', '西九条方面', '鶴橋 京橋方面', '特急はるか くろしお', '阪和線 関西空港 和歌山方面'],
        setup: () => {
            TrainNameDevide('特急', 5, 4);
            limitednumber(TT[4], 1, '特急はるか');
            limitednumber(TT[4], 1, '特急くろしお');
            TT[6] = makeemptyTable(TT[1], TT[2]);
            TTconnect(TT[1], TT[2], TT[6]);
            TT[2] = TT[6];
            var NoLoop = ['ＪＲ難波', '新大阪', '京都', '野洲'];
            DestinationDevide(NoLoop, 2, 1);
            limitednumber(TT[1], 2, '特急はるか');
            limitednumber(TT[1], 2, '特急くろしお');
        },
        onRender: () => {
            for (var tr = 0; tr < orderNum; tr++) {
                if (Type[2][tr] != '' && (Des[2][tr] == '' || Des[2][tr] == '大阪' || Des[2][tr] == '天王寺')) {
                    trainTables[2].trains[tr].destination = '新今宮･西九条方面';
                    document.getElementById('TDes' + (2 + 1) + (tr + 1))!.style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
                }
                if (Type[3][tr] != '' && Des[3][tr] != '大阪' && Des[3][tr] != '京橋' && Des[3][tr] != '桜島') {
                    trainTables[3].trains[tr].destination = '鶴橋･京橋方面';
                    trainTables[3].trains[tr].type = '普通';
                    document.getElementById('TDes' + (3 + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-10%,0%)";
                }
                if (Des[5][tr].length > 7) {
                    document.getElementById('TDes' + (5 + 1) + (tr + 1))!.style.transform = "scaleX(0.75)" + "translate(-10%,0%)";
                }
            }
            for (var td = 0; td < 6; td++) {
                TrainTypeSet(td);
                for (var tr = 0; tr < orderNum; tr++) {
                    TypeColorChange(td, tr, '快速', 'orange');
                }
            }
            DestinationSet();
            allDestinationTwoLettersDistance(TDes, 1, 0.9);
            comment!.innerHTML = '番線や一部表示不正確　一部2024年ダイヤのまま';
        }
    },
    '徳山駅': {
        name: '徳山駅',
        company: 'JR西日本',
        tableTitles: ['山陽新幹線 博多 鹿児島中央方面', '山陽新幹線 新大阪 東京方面', '山陽線 新山口 下関方面', '山陽線 岩国方面', '岩徳線 岩国方面'],
        setup: () => {
            var sakura1 = [401, 543, 553, 555, 557, 559, 561, 569, 571];
            var nozomi1 = [99, 13, 41, 45, 59];
            var kodama1 = [775, 781, 831, 833, 835, 837, 841, 843, 845, 847, 849, 851, 853, 855, 857, 859, 861, 865, 867, 787];
            var kodama2 = [838, 840, 842, 844, 846, 848, 850, 852, 854, 856, 858, 860, 862, 864, 866, 776, 870, 874, 876];
            limitednumber2(TT[0], kodama1, 'こだま');
            limitednumber2(TT[1], kodama2, 'こだま');
            limitednumber2(TT[0], sakura1, 'さくら');
            limitednumber2(TT[1], S_Tokuyama2, 'さくら');
            limitednumber2(TT[0], nozomi1, 'のぞみ');
            limitednumber2(TT[1], N_Tokuyama2, 'のぞみ');
        },
        onRender: () => {
            rowremove(4, "HName", "TName");
            document.getElementById("TTable5")!.style.width = "45em";
            document.getElementById("HType5")!.style.width = "15%";
            document.getElementById("HTime5")!.style.width = "25%";
            document.getElementById("HDes5")!.style.width = "40%";
            for (var td = 0; td < 2; td++) {
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    DestinationTwoLetterDistance(td, tr, TDes, 1, 0.9);
                }
            }
            for (var td = 2; td < 5; td++) {
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    DestinationTwoLetterDistance(td, tr, TDes, 1, 0.7);
                }
            }
            for (var td = 2; td < 4; td++) {
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    if (Type[td][tr] != "") {
                        CarsDefine(td, tr, "普通", "", 4);
                        CarsDefine(td, tr, "普通*", "", 3);
                        CarsDefine(td, tr, "普通+", "", 6);
                        Type[td][tr] = Type[td][tr].replace("*", "");
                        Type[td][tr] = Type[td][tr].replace("+", "");
                        trainTables[td].trains[tr].cars += "編成";
                        CarsInto(td, tr, "TName");
                        document.getElementById("TName" + (td + 1) + (tr + 1))!.style.color = "#0f0";
                    }
                }
            }
            //comment!.textContent = "両数や号数, 自由席は不正確";
        }
    },
    '下関駅': {
        name: '下関駅',
        company: 'JR西日本',
        tableTitles: ['山陽線 新山口 岩国方面', '山陽線 門司 九州方面', '山陰線 小串 長門市方面'],
        onRender: () => {
            for (var tr = 0; tr < 2; tr++) {
                if (Type[0][tr] == '快速') {
                    document.getElementById("WName" + (0 + 1) + (tr + 1))!.textContent = '〇〇のはなし';
                    document.getElementById("TName" + (0 + 1) + (tr + 1))!.style.color = "orange";
                    document.getElementById('TName' + (0 + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(0%,0%)";
                }
                if (Type[2][tr] == '快速') {
                    document.getElementById("WName" + (2 + 1) + (tr + 1))!.textContent = '〇〇のはなし';
                    document.getElementById("TName" + (2 + 1) + (tr + 1))!.style.color = "orange";
                    document.getElementById('TName' + (2 + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(0%,0%)";
                }
                if (Type[0][tr].startsWith('普通')) {
                    CarsDefine(0, tr, "普通", "", 4);
                    CarsDefine(0, tr, "普通*", "", 2);
                    Type[0][tr] = Type[0][tr].replace("*", "");
                    CarsInto(0, tr, "TName");
                    document.getElementById("TName" + (0 + 1) + (tr + 1))!.style.color = "#0f0";
                }
                if (Type[1][tr] != "") {
                    CarsDefine(1, tr, "普通", "", 4);
                    CarsInto(1, tr, "TName");
                }
                if (Type[2][tr] == "普通") {
                    document.getElementById("TName" + (2 + 1) + (tr + 1))!.textContent = "ワンマン";
                }
            }
            //comment!.innerHTML = "両数は不正確<br>";
            if (holidayflag == 1) {
                document.getElementById("supplement")!.innerHTML +=
                    station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)<br>" + "〇〇のはなしは一部休日運休";
            } else if (holidayflag == 0) {
                document.getElementById("supplement")!.innerHTML +=
                    station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
            }
        }
    },
    '大阪駅': {
        name: '大阪駅',
        company: 'JR西日本',
        tableTitles: ['大阪環状線 奈良・関西空港・和歌山方面', 'JR宝塚線 宝塚・三田・城崎温泉・倉吉方面',
            'JR神戸線 三ノ宮・西明石・姫路方面', 'JR京都線 新大阪・高槻・京都方面', '福井・金沢・富山(敦賀のりかえ)方面'],
        setup: () => {
            var Fukuchiyama = ['宝塚', '新三田', '篠山口']
            TrainNameDevide('特急', 0, 7);
            TrainNameDevide('普通', 0, 7);
            limitednumber(TT[1], 1, '特急こうのとり');
            limitednumber(TT[2], 1, '特急ｽｰﾊﾟｰはくと');
            limitednumber(TT[2], 1, '特急はまかぜ');
            DestinationDevide(Fukuchiyama, 2, 7);
            TrainNameDevide('新快速', 4, 7);
            TrainNameDevide('特急', 2, 8);
            TT[8].pop();
            TT[8].pop();
            TT[8].pop();
            TT[8].pop();
            TT[9] = makeemptyTable(TT[1], TT[8]);
            TTconnect(TT[1], TT[8], TT[9]);
            TT[1] = TT[9];
            TrainNameDevide('特急', 3, 5);
            limitednumber(TT[4], 1, '特急ｻﾝﾀﾞｰﾊﾞｰﾄﾞ');
            TT[6] = makeemptyTable(TT[4], TT[5]);
            TT[5].splice(1, 4);
            TTconnect(TT[4], TT[5], TT[6]);
            TT[4] = TT[6];
            RailNumberDevide(14, 4, 5);
            //時刻表補完
            for (var TaRow1 = 65; TaRow1 < 73; TaRow1++) {
                TT[4][TaRow1][1] = '';
            }
        },
        onRender: () => {
            JRLimitedDevide(1);
            JRLimitedDevide(4);
            document.getElementById('HType' + 1)!.style.width = "25%";
            document.getElementById('HName' + 1)!.style.width = "25%";
            for (var tr = 0; tr < Tablenums[1]; tr++) {
                let LType = document.getElementById('WType' + 2 + (tr + 1));
                let LTType = document.getElementById('TType' + 2 + (tr + 1));
                if (Type[1][tr] == '普通') {
                    //LType.style.paddingLeft = '16px';
                    //LType.style.paddingRight = '6px';
                } else if (Type[1][tr] == '丹波路快速') {
                    LType!.style.display = 'inline-block';
                    LType!.style.transform = "scaleX(0.60)" + "translate(-30%,0%)";
                    LType!.style.padding = '0px';
                    LTType!.style.color = 'black';
                    LTType!.style.backgroundColor = 'yellow';
                } else if (Type[1][tr] == '区間快速') {
                    LType!.style.display = 'inline-block';
                    LType!.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
                    LType!.style.padding = '0px';
                }
                AllTrainTypeReplace(4, tr, '寝台', '');
                AllDestinationReplace(1, tr, '新三田', '宝塚方面新三田');
                AllDestinationReplace(1, tr, '篠山口', '宝塚方面篠山口');
                AllDestinationReplace(1, tr, '福知山', '宝塚方面福知山');
                AllDestinationReplace(2, tr, '加古川', '神戸方面加古川');
                AllDestinationReplace(2, tr, '網干', '姫路方面網干');
                AllDestinationReplace(2, tr, '上郡', '姫路方面上郡');
                DestinationWordChange(3, tr, '米原', '京都方面米原');
                AllDestinationReplace(3, tr, '野洲', '京都方面野洲');
                AllDestinationReplace(3, tr, '草津', '京都方面草津');
                AllDestinationReplace(3, tr, '長浜', '米原方面長浜');
                AllDestinationReplace(3, tr, '近江塩津', '米原方面近江塩津');
            }
            holiday_F(station);
            allJROsakaColor();
            DestinationSet();
            for (var td = 0; td < Tablenum; td++) {
                TrainTypeSet(td)
                for (var tr = 0; tr < Tablenums[td]; tr++) {
                    //TwoLetterDistance(td, tr, Type, TType, 0.60, 0);
                    //TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
                    var LType = document.getElementById('WType' + (td + 1) + (tr + 1));
                    var LocalDes = document.getElementById('TDes' + (td + 1) + (tr + 1));
                    if (Type[td][tr] == '普通') {
                        LType!.style.display = 'inline';
                        LType!.style.borderColor = 'white';
                    } else if (LType != null) {
                        LType.style.border = 'none';
                    }
                    DesMiddle(td, tr, '経由');
                    DesMiddle(td, tr, '方面');
                    if (Des[td][tr].length > 7) {
                        LocalDes!.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
                    }
                }
            }
            allTypeTwoLettersDistance(TType, 0.60, 0);
            allDestinationTwoLettersDistance(TDes, 1, 0.9);
            NewAllLastShow();
        }
    },
    '米子駅': {
        name: '米子駅',
        company: 'JR西日本',
        tableTitles: ['伯備線 境線 新見･岡山･境港方面', '山陰線 松江･出雲市･益田方面', '山陰線 倉吉･鳥取方面'],
        setup: () => {
            limitedjustnumber(TT[0], 2, '特急やくも');
            limitedjustnumber(TT[1], 1, '特急やくも');
            limitedjustnumber2(TT[1], Matsukaze_Masuda, '特急ｽｰﾊﾟｰまつかぜ');
            limitedjustnumber(TT[1], 1, '特急ｽｰﾊﾟｰおき');
            limitedjustnumber(TT[2], 2, '特急ｽｰﾊﾟｰまつかぜ');
            limitedjustnumber(TT[2], 4, '特急ｽｰﾊﾟｰおき');
            TwoLetterDisflag = 1;
            TT[4] = makeemptyTable(TT[0], TT[3]);
            TTconnect(TT[0], TT[3], TT[4]);
            TT[0] = TT[4];
        },
        onRender: () => {
            Dtype = [0, 0, 0];
            //comment!.textContent += "一部表示不正確 ";
            holiday_F(station);
        }
    }
}