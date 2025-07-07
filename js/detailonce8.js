function HokkaidoCars(cars) {
    return 'この列車は' + cars + '両編成です。';
}
function Useat(car) {
    return '指定席は' + car + '号車ｕシートです。';
}
if (station == '新函館北斗駅') {
    console.log(Dtype[0]);
    FDetail(Type[0][0], JRHoobj, Dtype[0], 0, 0, "・");
    document.getElementById('TDetail11').textContent = Detail[0][0];
    document.getElementById('TDetail11').textContent += Des[0][0];
} else if (station == '札幌駅') {
    FDetail(Type[1][0], JRHSobj, Dtype[0], 1, 0, "・");
    console.log("---2個目の表の詳細表示終了、この後1個目の表の詳細表示完了---");
    FDetail(Type[0][0], JRHSobj, Dtype[0], 0, 0, "・");
    //FDetail(Type[3][0], JRHobj, Dtype[1], 3, 0, "・");
    console.log(Detail[0][0]);
    //末尾の・を取り除く
    for (var td = 0; td < 2; td++) {
        if (Detail[td][0].slice(-1) == '・') {
            Detail[td][0] = Detail[td][0].slice(0, -1);
        }
    }
    for (var td = 0; td < Tablenum; td++) {
        if (Type[td][0] == '普通') {
            document.getElementById('TDetail' + (td + 1)).textContent = HokkaidoCars(Cars[td][0]);
        }
    }
    if (Type[1][0].includes('快速エアポート')) {
        document.getElementById('TDetail' + 2).innerHTML = HokkaidoCars('６') + '　' 
        + Useat('４') + "　<span class='Cstops'>停車駅は" + Detail[1][0] + "です。</span>";
    }else if(Type[1][0]=='普通'){
        document.getElementById('TDetail' + 2).innerHTML = HokkaidoCars('６');
    }
    console.log(number[3]);
    var teine = [35, 47, 59, 71, 83, 95, 117];
    if (Type[3][0].includes('快速エアポート')) {
        var Teine_Detail = '';
        if (teine.includes(number[3])) {
            Teine_Detail = '桑園・琴似・手稲から各駅です';
        } else {
            Teine_Detail = '桑園・琴似・手稲・小樽築港・南小樽です。';
        }
        document.getElementById('TDetail' + 4).innerHTML = HokkaidoCars('６') + '　' 
        + Useat('４') + "　<span class='Cstops'>停車駅は" + Teine_Detail + "</span>";
    } else if (Type[3][0].includes('快速ニセコライナー')) {
        document.getElementById('TDetail' + 4).innerHTML = HokkaidoCars('６') + '　' 
        + "　<span class='Cstops'>停車駅は桑園・琴似・手稲から各駅です。</span>"
    }
    var dToAsahi = document.getElementById('TDetail' + 3);
    if (Des[2][0] == '旭川' && Type[2][0].includes('特急')) {
        console.log(Type[2][0]);
        var cars = '５';
        var cardetail = '指定席は３号車から５号車　４号車はｕシートです';
        console.log(dToAsahi);
        if (Type[2][0].includes('ライラック')) {
            cars = '６';
            cardetail = '指定席は１号車から４号車　グリーン車は１号車です';
        }
        dToAsahi.innerHTML = HokkaidoCars(cars) + "　<span class='CLapidcolor'>" 
        + cardetail + "</span>　<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川です。</span>";
        console.log(number[2]);
        if (number[2] == 13) {
            dToAsahi.innerHTML += '  この列車は旭川で網走行き特別快速大雪に接続します';
        } else if (number[2] == 17) {
            dToAsahi.innerHTML += '  この列車は旭川で稚内行き<span class="CLapidcolor">特急サロベツ1号</span>に接続します';
        } else if (number[2] == 33) {
            dToAsahi.innerHTML += '  この列車は旭川で網走行き特別快速大雪に接続します';
        } else if (number[2] == 37) {
            dToAsahi.innerHTML += '  この列車は旭川で稚内行き<span class="CLapidcolor">特急サロベツ3号</span>に接続します';
        }
    } else if (Des[2][0] == '網走') {
        dToAsahi.innerHTML = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・上川\
    ・白滝・丸瀬布・遠軽・生田原・留辺蘂・北見・美幌・女満別です。</span>";
    } else if (Des[2][0] == '稚内') {
        dToAsahi.innerHTMLL = "<span class='Cstops'>停車駅は岩見沢・美唄・砂川・滝川・深川・旭川・和寒\
        ・士別・名寄・美深・音威子府・天塩中川・幌延・豊富・南稚内です。</span>";
    }
    if (Des[0][0] == '函館') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は" + Detail[0][0] + "です。</span>";
    } else if (Des[0][0] == '帯広') {
        document.getElementById('TDetail' + 1).innerHTML 
        = "<span class='Cstops'>停車駅は新札幌・南千歳・追分・新夕張・占冠・トマム・新得・十勝清水・芽室です。</span>";
    } else if (Des[0][0] == '釧路') {
        document.getElementById('TDetail' + 1).innerHTML = "<span class='Cstops'>停車駅は" + Detail[0][0] + "です。</span>";
    } else if (Des[0][0] == '室蘭' && Type[0][0] != '普通') {
        document.getElementById('TDetail' + 1).innerHTML = Useat('３号車と４') + '　 ' 
        + "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別・東室蘭です。東室蘭から普通列車になります</span>";
    } else if (Des[0][0] == '東室蘭' && Type[0][0] != '普通') {
        document.getElementById('TDetail' + 1).innerHTML = Useat('３号車と４') + '　 ' 
        + "<span class='Cstops'>停車駅は新札幌・千歳・南千歳・沼ノ端・苫小牧・白老・登別・幌別・鷲別です。</span>";
    }
    //document.getElementById('supplement').textContent = '';
    for (var td = 0; td < Tablenum; td++) {
        DetailBannerOnce(td, 20);
    }
}