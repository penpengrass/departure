company = 'JR北海道';
var staflag = 0;
var Dtype = new Array(Tablenum);
Dtype[0] = 0;
Dtype[1] = 0;
detailflag = 8;
detailLength_one = 1;
if (station == '札幌駅') {
    TableTitle = ['苫小牧 東室蘭 函館 帯広 釧路方面', '新千歳空港方面', '岩見沢 旭川 網走 稚内方面', '手稲 小樽 倶知安方面', 'あいの里教育大 当別方面'];
    var selectstation = ['新千歳空港'];
    var selectstation2 = ['新千歳空港', '苫小牧', '千歳', '札幌'];
    var kamui = [7, 19,21, 29, 31, 35, 43, 45];
    var lilac = [1, 3, 5, 11, 13, 17, 23, 25, 27, 33, 37,39, 41];
    limitedjustnumber2(TT[2], kamui, '特急カムイ');
    limitednumber2(TT[2], lilac, '特急ライラック');
    limitednumber(TT[2], 1, '特急オホーツク');
    //Tablereset(1);
    console.log(TT.length);
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
} else if (station == '新函館北斗駅') {
    TableTitle = ['新青森 東京方面', '函館 札幌方面'];
    var hayabusa = [10, 14, 18, 22, 28, 32, 34, 40, 44, 48, 96];
    limitednumber2(TT[0], hayabusa, 'はやぶさ');
    limitednumber(TT[1], 2, '特急北斗');
    limitednumber(TT[2], 1, '特急北斗');
}
