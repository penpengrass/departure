var staflag = 0;
var Dtype = [0, 0];
let Grapid = [['北新地', '尼崎までの各駅', '伊丹', '川西池田', '中山寺', '宝塚', '西宮名塩', '三田', '三田から各駅', '新三田', '篠山口']];
let Hrapid = '京橋までの各駅・放出・住道・四条畷・星田・河内磐船・長尾・長尾から各駅';
let Tsubrapid = '京橋までの各駅・放出・住道・四条畷・四条畷から各駅';
let ASperapid = [['米原', '彦根', '能登川', '近江八幡', '野洲', '守山', '草津', '南草津', '石山', '大津', '山科', '京都', '高槻', '新大阪',
    '大阪', '尼崎', '芦屋', '三ノ宮', '神戸', '明石', '西明石', '加古川', '姫路', '姫路から各駅', '網干', '播州赤穂', '上郡']];
let Alimited = [['米原', '草津', '京都', '新大阪', '大阪']];
reverseLine(ASperapid, 0, 1);
ASperapid[1].push('米原から各駅');
let Super_rapid;
//JR西日本などの詳細表示
var switch_detail_flag = 0;
var Detail_contents = new Array(Tablenum);
if (station == '北新地駅') {
    Jrapid = LineCopy(Grapid);
    if (Type[0][0] == '快速') {
        Detail_contents[0] = Hrapid;
    } else if (Type[0][0] == '区快') {
        Detail_contents[0] = Tsubrapid;
    } else if (Type[0][0] == '普通') {
        Detail_contents[0] = Des[0][0] + 'までの各駅';
    }
    if (Des[1][0] == '塚口') {
        Detail_contents[1] = ' 塚口までの各駅';
    } else if (Des[1][0] == '神戸方面西明石') {
        Des[1][0] == '西明石';
        Detail_contents[1] = '西明石までの各駅';
    } else if (Type[1][0] == '普通') {
        Detail_contents[1] = Des[1][0] + 'までの各駅';
    }
}
if (station == '米原駅') {
    Dtype[2] = 0;
    Super_rapid = LineCopy(ASperapid);
    limited = LineCopy(Alimited);
    var Name_11 = document.getElementById('TName11');
    console.log(number);
    var Nagahama = [51, 3, 7, 55, 57, 13];
    if (Type[0][0] == '快速') {
        if (Des[0][0] == '大阪') {
            Detail_contents[0] = '高槻までの各駅・茨木・新大阪';
        } else {
            Detail_contents[0] = '高槻までの各駅・茨木・新大阪・大阪・尼崎・西宮・芦屋・住吉・六甲道・三ノ宮・元町・神戸・兵庫・須磨・垂水・舞子・明石・明石から各駅';
        }
    } else if (Type[0][0] == '快速*') {
        Detail_contents[0] = '京都までの各駅・長岡京・高槻・茨木・新大阪・大阪・尼崎・西宮・芦屋・住吉・六甲道・三ノ宮・元町・神戸・兵庫・須磨・垂水・舞子・明石・明石から各駅';
    } else if (Type[0][0] == '普通') {
        Detail_contents[0] = Des[0][0] + 'までの各駅';
    }
    if (Type[1][0] == '普通' || Type[1][0] == '新快速') {
        Detail_contents[1] = Des[1][0] + 'までの各駅';
    } else if (Type[1][0].includes('しらさぎ')) {
        if (Nagahama.includes(number[1])) {
            console.log(number[1]);
            Detail_contents[1] = '長浜';
        } else {
            Detail_contents[1] = '敦賀';
        }
    } else if (Type[1][0] == '快速') {
        Detail_contents[1] = '敦賀';
    }
    if (Type[2][0] == '普通') {
        Detail_contents[2] = Des[2][0] + 'までの各駅';
    } else if (Type[2][0].includes('しらさぎ')) {
        Detail_contents[2] = '大垣・岐阜・尾張一宮';
    } else if (Type[2][0].includes('ひだ')) {
        Detail_contents[2] = '大垣・岐阜・美濃太田・下呂';
    }
}
var JRobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "特別快速", color: red, detail: rapid, },
    Typec: { type: "新快速", color: red, detail: Super_rapid, },
    Typed: { type: "快速", color: orange, detail: Jrapid, },
    Typee: { type: "区快", color: orange, detail: Jsubrapid, },
    Typef: { type: "普通", color: '#0f0', detail: local, }

};
