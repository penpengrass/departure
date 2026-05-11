import { reverseLine, LineCopy } from "../module/firstTableEdit";
import { JRLimitedNumber } from "../module/firstDisplayEdit";
import { rapid, Jsubrapid, local } from '../detailStopData/JRdetail';
import { plainTrainTables, trainTables } from "../types/trainTable";
var Jrapid = "";
var limited = "";
if (Indexfile == 'index4.php') {
    window.Dtype = [0, 0];
}
export let Grapid = [['北新地', '尼崎までの各駅', '伊丹', '川西池田', '中山寺', '宝塚', '西宮名塩', '三田', '三田から各駅', '新三田', '篠山口']];
export let Hrapid = '京橋までの各駅・放出・住道・四条畷・星田・河内磐船・長尾・長尾から各駅';
export let Tsubrapid = '京橋までの各駅・放出・住道・四条畷・四条畷から各駅';
export let Super_rapid = [['米原', '彦根', '能登川', '近江八幡', '野洲', '守山', '草津', '南草津', '石山', '大津', '山科', '京都', '高槻', '新大阪',
    '大阪', '尼崎', '芦屋', '三ノ宮', '神戸', '明石', '西明石', '加古川', '姫路', '姫路から各駅', '網干', '播州赤穂', '上郡']];
export let Alimited = [['米原', '草津', '京都', '新大阪', '大阪']];
reverseLine(Super_rapid, 0, 1);
Super_rapid[1].push('米原から各駅');
//JR西日本などの詳細表示
export var JRobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "特別快速", color: red, detail: rapid, },
    Typec: { type: "新快速", color: red, detail: Super_rapid, },
    Typed: { type: "快速", color: orange, detail: Jrapid, },
    Typee: { type: "区快", color: orange, detail: Jsubrapid, },
    Typef: { type: "普通", color: '#0f0', detail: local, }

};

export function JRMaibara_Detail() {
    Dtype[2] = 0;
    limited = LineCopy(Alimited);
    var Name_11 = document.getElementById('TName11');
    var _TrainNumber_ToTsuruga = trainTables[1].trains[0].trainNumber;
    var Nagahama = [51, 3, 7, 55, 57, 13];
    if (Type[0][0] == '快速') {
        if (Des[0][0] == '大阪') {
            trainTables[0].trains[0].detail = '高槻までの各駅・茨木・新大阪';
        } else {
            trainTables[0].trains[0].detail = '高槻までの各駅・茨木・新大阪・大阪・尼崎・西宮・芦屋・住吉・六甲道・三ノ宮・元町・神戸・兵庫・須磨・垂水・舞子・明石・明石から各駅';
        }
    } else if (Type[0][0] == '快速*') {
        trainTables[0].trains[0].detail = '京都までの各駅・長岡京・高槻・茨木・新大阪・大阪・尼崎・西宮・芦屋・住吉・六甲道・三ノ宮・元町・神戸・兵庫・須磨・垂水・舞子・明石・明石から各駅';
    } else if (Type[0][0] == '普通') {
        trainTables[0].trains[0].detail = Des[0][0] + 'までの各駅';
    }
    if (Type[1][0] == '普通' || Type[1][0] == '新快速') {
        trainTables[1].trains[0].detail = Des[1][0] + 'までの各駅';
    } else if (Type[1][0].includes('しらさぎ')) {
        if (Nagahama.includes(Number(_TrainNumber_ToTsuruga))) {
            trainTables[1].trains[0].detail = '長浜';
        } else {
            trainTables[1].trains[0].detail = '敦賀';
        }
    } else if (Type[1][0] == '快速') {
        trainTables[1].trains[0].detail = '敦賀';
    }
    if (Type[2][0] == '普通') {
        trainTables[2].trains[0].detail = Des[2][0] + 'までの各駅';
    } else if (Type[2][0].includes('しらさぎ')) {
        trainTables[2].trains[0].detail = '大垣・岐阜・尾張一宮';
    } else if (Type[2][0].includes('ひだ')) {
        trainTables[2].trains[0].detail = '大垣・岐阜・美濃太田・下呂';
    }
}
