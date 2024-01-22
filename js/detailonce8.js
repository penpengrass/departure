function HokkaidoCars(cars) {
    return 'この列車は' + cars + '両編成です。';
}
function Useat(car) {
    return '指定席は' + car + '号車ｕシートです。';
}
if (station == '札幌駅') {
    for (var td = 0; td < Tablenum; td++) {
        if (Type[td][0] == '普通') {
            document.getElementById('TDetail' + (td + 1)).textContent = '各駅にとまります';
        }
    }
    if (Type[1][0].includes('快速エアポート')) {
        document.getElementById('TDetail' + 2).innerHTML = HokkaidoCars('６') + '　' + Useat('４') + "　<span class='Cstops'>停車駅は" + Detail[1][0] + "です。</span>";
    }
    if (Type[3][0].includes('快速エアポート')) {
        document.getElementById('TDetail' + 4).innerHTML = HokkaidoCars('６') + '　' + Useat('４') + "　<span class='Cstops'>停車駅は琴似・手稲・小樽築港・南小樽です。</span>";
    }
    if (Des[2][0] == '旭川' && Type[2][0].includes('特急')) {
        console.log(Type[2][0]);
        var cars = '５';
        var cardetail = Useat('４');
        if (Type[2][0].includes('ライラック')) {
            cars = '６';
            cardetail = 'グリーン車は１号車です';
        }
        document.getElementById('TDetail' + 3).innerHTML = HokkaidoCars(cars) + "　<span class='CLapidcolor'>" + cardetail + "</span>　<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川です。</span>";
    } else if (Des[2][0] == '網走') {
        document.getElementById('TDetail' + 3).innerHTML = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・上川\
    ・白滝・丸瀬布・遠軽・生田原・留辺蘂・北見・美幌・女満別です。</span>";
    } else if (Des[2][0] == '稚内') {
        document.getElementById('TDetail' + 3).innerHTML = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・和寒\
        ・士別・名寄・美深・音威子府・天塩中川・幌延・豊富・南稚内です。</span>";
    }
    if (Des[0][0] == '函館') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は新札幌・南千歳・苫小牧・白老・登別・東室蘭・伊達紋別・洞爺・長万部・八雲・森・大沼公園・新函館北斗・五稜郭です。</span>";
    } else if (Des[0][0] == '帯広') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は新札幌・南千歳・追分・新夕張・占冠・トマム・新得・十勝清水・芽室です。</span>";
    } else if (Des[0][0] == '釧路') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は"+ Detail[0][0] +"です。</span>";
    } else if (Des[0][0] == '室蘭' && Type[0][0] != '普通') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別・東室蘭です。東室蘭から普通列車になります</span>";
    } else if (Des[0][0] == '東室蘭' && Type[0][0] != '普通') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別です。</span>";
    }
    document.getElementById('supplement').textContent = '札幌駅の一部表示は省略(今後は未定)';
}
if (station == '新函館北斗駅') {
}