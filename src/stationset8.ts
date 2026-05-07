import { DestinationDevide, limitedjustnumber, limitedjustnumber2, limitednumber, limitednumber2, Tablereset } from './module/firstTableEdit';
import { TTconnect, makeemptyTable } from './module/connectTable';
import { StationRegistry, StationConfig } from './types/station';
import { JRNameDevide, AllTypeStartWordReplace, Bansenshow, AllClassSetting, DestinationSet, TrainTypeSet } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { FDetail, LastLetterRemove } from "./module/detailMainPut";
import { TrainNumber } from "./module/firstDisplayEdit";
import { DetailBannerOnce } from "./module/detailMainPut";
import { JRHoobj, JRHSobj } from "./detailStopData/Hodetailset";
import { getStationConfig } from "./main";
import { JRHokkaidouShinDetailStop } from './detailStopData/Hodetailchange';
import { comment } from './types/constants';
import { trainTables, plainTrainTables } from './types/trainTable';
var staflag = 0;
window.Dtype = new Array(Tablenum);
Dtype[0] = 0;
Dtype[1] = 0;
detailflag = 8;
detailLength_one = 1;
NonGouflag = 0;
function HokkaidoCars(cars: string) {
    return 'この列車は' + cars + '両編成です。';
}
function Useat(car: string) {
    return '指定席は' + car + '号車ｕシートです。';
}
function JRHokkaidouLimited() {
    for (var td = 0; td < Tablenum; td++) {
        let _data_Length = Tablenums[td];
        var LimitedName = new Array(_data_Length);
        var matches = new Array(_data_Length);
        var LimitedNameLine = ['すずらん', '北斗', 'とかち', 'おおぞら'];
        for (var tr = 0; tr < _data_Length; tr++) {
            LimitedName[tr] = plainTrainTables[td].trains[tr]?.type ?? "";
            //LimitedName[tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1))!.textContent;
            if (NonGouflag == 1) {
                matches[tr] = LimitedName[tr].match(/(\D+)(\d+)/);
            } else {
                matches[tr] = LimitedName[tr].match(/([^0-9]+)(\d+)([^0-9]+)/);
            }
            if (matches[tr]) {
                if (matches[tr][1].length < 7) {
                    document.getElementById("WName" + (td + 1) + "" + (tr + 1))!.textContent = matches[tr][2] + "号";
                    if (LimitedNameLine.includes(matches[tr][1])) {
                        trainTables[td].trains[tr].type = '特急' + matches[tr][1];
                    } else {
                        trainTables[td].trains[tr].type = matches[tr][1];
                    }
                    if (Type[td][tr].includes("特急")) document.getElementById("TName" + (td + 1) + "" + (tr + 1))!.style.color = "red";
                }
                //console.log(ShinNumber);
                //ShinNumber[td][tr] = matches[tr][2];
            } else {
                //console.log(td + 1 + '個目の表の' + (tr + 1) + '番目の表示はJRNameDevideとマッチしない');
            }
        }
    }
    //console.log(ShinNumber);
}
export const JRHokkaidouStations: StationRegistry = {
    '札幌駅': {
        name: '札幌駅',
        company: 'JR北海道',
        nonGouFlag: 0,
        tableTitles: ['苫小牧 東室蘭 函館 帯広 釧路方面', '新千歳空港方面', '岩見沢 旭川 網走 稚内方面', '手稲 小樽 倶知安方面', 'あいの里教育大 当別方面'],
        setup: () => {
            var selectstation = ['新千歳空港'];
            var selectstation2 = ['新千歳空港', '苫小牧', '千歳', '札幌', '北広島'];
            var kamui = [7, 19, 21, 29, 31, 35, 43, 45];
            var lilac = [1, 3, 5, 11, 13, 17, 23, 25, 27, 33, 37, 39, 41];
            limitedjustnumber2(TT[2], kamui, '特急カムイ');
            limitednumber2(TT[2], lilac, '特急ライラック');
            limitednumber(TT[2], 1, '特急オホーツク');
            //Tablereset(1);
            DestinationDevide(selectstation, 0, 1);
            DestinationDevide(selectstation2, 2, 4);
            Tablereset(4);
            TT[4] = TT[5];
            for (var td = 1; td < TT[0].length; td += 4) {
                for (var tr = 0; tr < TT[0][td].length; tr++) {
                    if (TT[0][td][tr] == '特急') {
                        if (TT[0][td + 2][tr] == '函館') {
                            TT[0][td][tr] = '特急北斗';
                        } else if (TT[0][td + 2][tr].includes('室蘭')) {
                            TT[0][td][tr] = '特急すずらん';
                        } else if (TT[0][td + 2][tr] == '帯広') {
                            TT[0][td][tr] = '特急とかち';
                        } else if (TT[0][td + 2][tr] == '釧路') {
                            TT[0][td][tr] = '特急おおぞら';
                        }
                    }
                }
            }
            for (var td = 1; td < TT[1].length; td += 4) {
                for (var tr = 0; tr < TT[1][td].length; tr++) {
                    if (TT[1][td][tr] == '快速') {
                        TT[1][td][tr] = '快速エアポート' + TT[1][td][0];
                    }
                }
            }
            for (var td = 1; td < TT[3].length; td += 4) {
                for (var tr = 0; tr < TT[3][td].length; tr++) {
                    if (TT[3][td][tr] == '快速') {
                        TT[3][td][tr] = '快速エアポート';
                    }
                }
            }
            limitednumber(TT[0], 2, 'すずらん');
            limitednumber(TT[0], 2, '北斗');
            limitednumber(TT[0], 1, 'おおぞら');
            limitednumber(TT[0], 1, 'とかち');
            limitedjustnumber(TT[1], 10, ['普通', '区間快速エアポート', '快速エアポート', '特別快速エアポート']);
            var airportO = [27, 31, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95, 111, 117, 123, 131, 135, 141, 145, 151, 155];
            limitednumber2(TT[3], airportO, '快速エアポート')
        },
        onRender: () => {
            DestinationSet();
            JRHokkaidouLimited();
            console.log(trainTables)
            for (var tr = 0; tr < orderNum; tr++) {
                var LType2 = document.getElementById('TType' + 2 + (tr + 1));
                var LWType2 = document.getElementById('WType' + 2 + (tr + 1));
                var LName2 = document.getElementById('TName' + 2 + (tr + 1));
                if (Type[1][tr].includes('普通')) {
                    Type[1][tr] = '普通';
                    //LWType2.textContent = '普通';
                    LName2!.textContent = '';
                }
            }
            TrainTypeSet(0);
            TrainTypeSet(1);
            TrainTypeSet(2);
            TrainTypeSet(3);
            TrainTypeSet(4);
            comment!.textContent = '特急の臨時列車、両数は不正確';
            for (var td = 0; td < Tablenum; td++) {
                for (var tr = 0; tr < orderNum; tr++) {
                    TypeColorChange(td, tr, '特急', 'red');
                    TypeColorChange(td, tr, '快速', 'orange');
                    if (Type[td][tr] == '普通*') {
                        if (tr == 0) {
                            trainTables[td].trains[tr].cars = '６';
                        }
                        trainTables[td].trains[tr].type = '普通';
                    } else if (Type[td][tr] == '普通+') {
                        if (tr == 0) {
                            trainTables[td].trains[tr].cars = '２';
                        }
                        trainTables[td].trains[tr].type = '普通';
                    } else if (Type[td][tr] == '普通') {
                        if (tr == 0) {
                            trainTables[td].trains[tr].cars = '３'
                        }
                        trainTables[td].trains[tr].type = '普通'
                    }
                }
            }
            FDetail(Type[1][0], JRHSobj, Dtype[0], 1, 0, "・");
            console.log("---2個目の表の詳細表示終了、この後1個目の表の詳細表示完了---");
            FDetail(trainTables[0].trains[0].type, JRHSobj, Dtype[0], 0, 0, "・");
            //FDetail(Type[3][0], JRHobj, Dtype[1], 3, 0, "・");
            //末尾の・を取り除く
            for (var td = 0; td < 2; td++) {
                if (Detail[td][0].slice(-1) == '・') {
                    Detail[td][0] = Detail[td][0].slice(0, -1);
                }
            }
            for (var td = 0; td < Tablenum; td++) {
                if (trainTables[td].trains[0].type == '普通') {
                    document.getElementById('TDetail' + (td + 1))!.textContent = HokkaidoCars(String(trainTables[td].trains[0].cars));
                }
            }
            for (var tr = 0; tr < orderNum; tr++) {
                var LType2 = document.getElementById('TType' + 2 + (tr + 1));
                var LName2 = document.getElementById('TName' + 2 + (tr + 1));
                if (Type[1][tr].includes('快速エアポート')) {
                    trainTables[1].trains[tr].type += '号';
                }
                console.log(trainTables[1].trains[tr]?.type.length)
                if (trainTables[1].trains[tr]?.type.length > 11) {
                    LType2!.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
                }
                var LType4 = document.getElementById('TType' + 4 + (tr + 1));
                if (trainTables[3].trains[tr]?.type.length > 11) {
                    LType4!.style.transform = "scaleX(0.85)" + "translate(-6%,0%)";
                }
                var LDes5 = document.getElementById('TDes' + 5 + (tr + 1));
                if (trainTables[4].trains[tr]?.destination.length > 5) {
                    LDes5!.style.transform = "scaleX(0.70)" + "translate(-25%,0%)";
                }
            }
            if (Type[1][0].includes('快速エアポート')) {
                document.getElementById('TDetail' + 2)!.innerHTML = HokkaidoCars('６') + '　'
                    + Useat('４') + "　<span class='Cstops'>停車駅は" + Detail[1][0] + "です。</span>";
            } else if (Type[1][0] == '普通') {
                document.getElementById('TDetail' + 2)!.innerHTML = HokkaidoCars('６');
            }
            var teine = [35, 47, 59, 71, 83, 95, 117];
            if (Type[3][0].includes('快速エアポート')) {
                var Teine_Detail = '';
                if (teine.includes(TrainNumber[3])) {
                    Teine_Detail = '桑園・琴似・手稲から各駅です';
                } else {
                    Teine_Detail = '桑園・琴似・手稲・小樽築港・南小樽です。';
                }
                document.getElementById('TDetail' + 4)!.innerHTML = HokkaidoCars('６') + '　'
                    + Useat('４') + "　<span class='Cstops'>停車駅は" + Teine_Detail + "</span>";
            } else if (Type[3][0].includes('快速ニセコライナー')) {
                document.getElementById('TDetail' + 4)!.innerHTML = HokkaidoCars('６') + '　'
                    + "　<span class='Cstops'>停車駅は桑園・琴似・手稲から各駅です。</span>"
            }
            var dToAsahi = document.getElementById('TDetail' + 3);
            console.log(Detail);
            if (Des[2][0] == '旭川' && Type[2][0].includes('特急')) {
                var cars = '５';
                var cardetail = '全車指定席です。';
                console.log(dToAsahi);
                if (Type[2][0].includes('ライラック')) {
                    cars = '６';
                    cardetail = '全車指定席です。　グリーン車は１号車の一部です';
                }
                dToAsahi!.innerHTML = HokkaidoCars(cars) + "　"
                    + cardetail + "　<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川です。</span>";
                if (TrainNumber[2] == 13) {
                    dToAsahi!.innerHTML += '  この列車は旭川で網走行き特別快速大雪に接続します';
                } else if (TrainNumber[2] == 17) {
                    dToAsahi!.innerHTML += '  この列車は旭川で稚内行き<span class="CLapidcolor">特急サロベツ1号</span>に接続します';
                } else if (TrainNumber[2] == 33) {
                    dToAsahi!.innerHTML += '  この列車は旭川で網走行き特別快速大雪に接続します';
                } else if (TrainNumber[2] == 37) {
                    dToAsahi!.innerHTML += '  この列車は旭川で稚内行き<span class="CLapidcolor">特急サロベツ3号</span>に接続します';
                }
            } else if (Des[2][0] == '網走') {
                dToAsahi!.innerHTML = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・上川\
    ・白滝・丸瀬布・遠軽・生田原・留辺蘂・北見・美幌・女満別です。</span>";
            } else if (Des[2][0] == '稚内') {
                dToAsahi!.innerHTML = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・和寒\
        ・士別・名寄・美深・音威子府・天塩中川・幌延・豊富・南稚内です。</span>";
            }
            if (Des[0][0] == '函館') {
                document.getElementById('TDetail' + 1)!.innerHTML = '全車指定席です。　 ' + "<span class='Cstops'>停車駅は" + Detail[0][0] + "です。</span>";
            } else if (Des[0][0] == '帯広') {
                document.getElementById('TDetail' + 1)!.innerHTML = '全車指定席です。　 ' +
                    "<span class='Cstops'>停車駅は新札幌・南千歳・追分・新夕張・占冠・トマム・新得・十勝清水・芽室です。</span>";
            } else if (Des[0][0] == '釧路') {
                document.getElementById('TDetail' + 1)!.innerHTML = "<span class='Cstops'>停車駅は" + Detail[0][0] + "です。</span>";
            } else if (Des[0][0] == '室蘭' && Type[0][0] != '普通') {
                document.getElementById('TDetail' + 1)!.innerHTML = HokkaidoCars('５') + '　全車指定席です。　 '
                    + "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別・東室蘭・輪西・御崎・母恋です。</span>";
            } else if (Des[0][0] == '東室蘭' && Type[0][0] != '普通') {
                document.getElementById('TDetail' + 1)!.innerHTML = HokkaidoCars('５') + '　全車指定席です。　 '
                    + "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別です。</span>";
            }
            //document.getElementById('supplement')!.textContent = '';
            for (var td = 0; td < Tablenum; td++) {
                DetailBannerOnce(td, 20);
            }
        }
    },
    '新函館北斗駅': {
        name: '新函館北斗駅',
        company: 'JR北海道',
        nonGouFlag: 0,
        tableTitles: ['新青森 東京方面', '函館 札幌方面'],
        setup: () => {
            var hayabusa = [10, 14, 18, 22, 28, 32, 34, 40, 44, 48, 96];
            limitednumber2(TT[0], hayabusa, 'はやぶさ');
            limitednumber(TT[1], 2, '特急北斗');
            limitednumber(TT[2], 1, '特急北斗');
            TT[3] = makeemptyTable(TT[1], TT[2]);
            TTconnect(TT[1], TT[2], TT[3]);
            TT[1] = TT[3];
        },
        onRender: () => {
            AllClassSetting('.CDetailTitle', 'fontSize', '25px');
            JRNameDevide();
            for (var tr = 1; tr < 3; tr++) {
                if (Type[0][tr - 1] != '') {
                    document.getElementById('TExplain1' + tr)!.textContent = '10両編成';
                }
            }
            TrainTypeSet(0);
            TrainTypeSet(1);
            for (var tr = 0; tr < 3; tr++) {
                TypeColorChange(1, tr, '特急', 'red');
                TypeColorChange(1, tr, '快速', 'orange');
            }
            console.log(Dtype[0]);
            FDetail(Type[0][0], JRHoobj, Dtype[0], 0, 0, "・");
            LastLetterRemove(0, 0, '・');
            JRHokkaidouShinDetailStop();
            document.getElementById('TDetail11')!.textContent = Detail[0][0];
            if (Des[0][0] != "") {
                document.getElementById('TDetail11')!.textContent += "・" + Des[0][0];
            }
            comment!.textContent = '番線と停車駅は不正確';
            DestinationSet();
        }
    }
}