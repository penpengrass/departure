import { TrainTypeWordChange, AllTrainTypeReplace, AllTypeStartWordReplace, NewAllLastShow, flagmarkerase, TwoLetterDistance, DestinationSet, TrainTypeSet } from "./module/firstDisplayEdit";
import { TypeColorChange, TypeBackColorChange } from "./module/colorSimpleSet";
import { DetailShow, LastLetterRemove } from "./module/detailMainPut";
import { JTypeIncludeColor } from "./typeColor";
import { TrainNumber } from "./module/firstDisplayEdit";
import * as ShikokuStops from "./detailStopData/Shidetailset";
import { plainTrainTables, trainTables } from "./types/trainTable";
function WhetherLocal(td: number, tr: number) {
    if (Type[td][tr] == '普通' || Type[td][tr] == '各駅停車' || Type[td][tr] == '普通(当駅始発)') {
        return true;
    }
    return false;
}
function WhetherStartsLocal(td: number, tr: number) {
    if (Type[td][tr].startsWith('普通') || Type[td][tr].startsWith('各駅停車')) {
        return true;
    }
    return false;
}
function LocalShow(td: number, tr: number, color: string) {
    if (station == '松山駅' || station == '高松駅') {
        document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = '各駅停車';
        trainTables[td].trains[tr].type = '';
        document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'left';
        document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = color;
    }
    else if (station == '高知駅') {
        trainTables[td].trains[tr].type = '普通';
        document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'center';
        document.getElementById('WType' + (td + 1) + (tr + 1))!.style.color = 'lightgreen';
        document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = 'lightgreen';
        if (Type[td][tr].includes('(')) {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = Type[td][tr].replace('普通', '');
        } else {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = '(各駅停車)';
        }
    }
}
function DetailDelete(td: number, tr: number) {
    let element = document.getElementById('TRDetail' + (td + 1) + "1");
    let element_Line = document.getElementById('TTLine' + (td + 1) + "2");
    element!.innerHTML = '<td class="shubetu" id="TType' + (td + 1) + tr + '"><span id="WType' + (td + 1) + tr + '"></span></td>\
        <td class="CName" id="TName' + (td + 1) + tr + '" colspan="4"><span id="WName' + (td + 1) + tr + '"></span></td>\
        <td class="CTime" id="TTime' + (td + 1) + tr + '"><p2 id="THour' + (td + 1) + tr + '"></p2>:<p2 id="TMin' + (td + 1) + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + (td + 1) + tr + '"><span id="WDes' + (td + 1) + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + (td + 1) + tr + '"></td>';
    tr++;
    element_Line!.innerHTML = '<td class="shubetu" id="TType' + (td + 1) + tr + '"><span id="WType' + (td + 1) + tr + '"></span></td>\
        <td class="CName" id="TName' + (td + 1) + tr + '" colspan="4"><span id="WName' + (td + 1) + tr + '"></span></td>\
        <td class="CTime" id="TTime' + (td + 1) + tr + '"><p2 id="THour' + (td + 1) + tr + '"></p2>:<p2 id="TMin' + (td + 1) + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + (td + 1) + tr + '"><span id="WDes' + (td + 1) + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + (td + 1) + tr + '"></td>';
}
function JRS_Connect(td: number, tr: number, Keyword: string, Connect_Station: string) {
    const _Des = plainTrainTables[td].trains[tr]?.destination ?? "";
    if (_Des.includes(Keyword)) {
        trainTables[td].trains[tr].destination = _Des.replace(Keyword, "");
        if (tr == 0) {
            trainTables[td].trains[0].detail =trainTables[td].trains[0].destination + "で<span class='lightgreen'>" + Connect_Station + "</span>行きに接続します";
            document.getElementById('TDetailtitle' + (td + 1))!.textContent = "接続案内";
        }
    }
}
var Detail_title = document.getElementById('TDetailtitle2');
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Des[td][tr] == '岡山･高松' || Des[td][tr] == '高松･岡山') {
            Des[td][tr] = '岡山';
        }
        AllTrainTypeReplace(td, tr, 'あしずり', '特急あしずり');
        if (station == '高知駅') {
            AllTrainTypeReplace(td, tr, 'しまんと', '特急しまんと');
        }
        AllTypeStartWordReplace(td, tr, '南風', '特急南風');

    }
    TrainTypeSet(td);
}
if (station == '高松駅') {
    //allJRSIncludeColor(JRSobj);
    window.Dtype = [0, 0, 0, 0];
    DetailShow(ShikokuStops.JRSobj, "、");
} else if (station == '松山駅') {
    //allJRSIncludeColor(JRSMobj);
    DetailShow(ShikokuStops.JRSMobj, "、");

} else if (station == '高知駅') {
    //allJRSIncludeColor(JRSKobj);
    DetailShow(ShikokuStops.JRSKobj, "、");
}
for (var td = 0; td < Tablenum; td++) {
    LastLetterRemove(td, 0, '、');
    var _Detail = trainTables[td].trains[0].detail
    if (_Detail != '各駅にとまります' && _Detail != '' && Detail_title!.textContent == "停車駅") {
        trainTables[td].trains[0].detail += 'に停車します。';
    }
}
if (station == '高松駅') {
    if (Type[2][0].startsWith('快速ﾏﾘﾝﾗｲﾅｰ') && TrainNumber[2][0] != 2) {
        trainTables[2].trains[0].detail += "  改札寄りの１号車は<font color='red'>グリーン席</font>・<font color='yellow'>指定席</font>、２〜５号車は<font color='yellow'>自由席</font>です。";
    }
    for (var td = 0; td < 2; td++) {
        if (Type[td][0].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
            var matches = Type[td][0].match(/(\D+)(\d+)号/);
            var NampuNumber = Number(matches[2]);
            trainTables[td].trains[0].detail += ' <font color="red">丸亀駅</font>で<font color="red">特急南風' + NampuNumber + '号 高知行き</font>に接続します';
            trainTables[td].trains[0].type='快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号'
            trainTables[td].trains[0].trainName = 'ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
            Type[td][0]='快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号'
        }
        for (var tr = 1; tr < 3; tr++) {
            if (Type[td][tr].startsWith('快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ')) {
                trainTables[td].trains[tr].type='快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号'
                 trainTables[td].trains[tr].trainName = 'ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号';
                 Type[td][tr]='快速ｻﾝﾎﾟｰﾄ南風ﾘﾚｰ号'
            }
        }
    }
} else if (station == '松山駅') {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            TrainTypeWordChange(td, tr, '内子線経由普通', '各停(内子経由)');
            JRS_Connect(td, tr, "(高)", "高松");
            JRS_Connect(td, tr, "(観)", "観音寺");
            JRS_Connect(td, tr, "(多)", "多度津");
            if (Des[td][tr] == '岡山' && station == '松山駅') {
                Des[td][tr] = '岡山･高松';
            } else if (Type[td][tr].includes('しまんと･南風')) {
                Des[td][tr] = '高松･岡山';
            }
        }
    }
    if (Des[0][0] == '岡山･高松') {
        trainTables[0].trains[0].detail = 'しおかぜ号は' + trainTables[0].trains[0].detail + 'いしづち号は宇多津発車後坂出に停車します';
    }
    if (TrainNumber[0][0] == 102) {
        trainTables[0].trains[0].detail += '坂出で<span class="blue">快速「マリンライナー68号」</span>岡山行きに接続します。';
    } else if (TrainNumber[0][0] == 104) {
        trainTables[0].trains[0].detail += '坂出で<span class="blue">快速「マリンライナー70号」</span>岡山行きに接続します。';
    }
    var Detaila = document.getElementById('TDetail21');
    if (Des[1][0].includes('*')) {
        trainTables[1].trains[0].detail += '  伊予市で内子経由伊予大洲行きに接続します。';
        Detail_title!.textContent = '接続案内';
    } else if (Des[1][0].includes('+')) {
        trainTables[1].trains[0].detail += '  伊予市で<span class="red">愛ある伊予灘線</span><span class="blue">伊予長浜経由</span>伊予大洲行きに接続します。';
        Detail_title!.textContent = '接続案内';
    }
} else if (station == '高知駅') {
    if (Des[0][0] == '高松･岡山') {
        trainTables[0].trains[0].detail = '南風号は' + trainTables[0].trains[0].detail + 'しまんと号は宇多津発車後坂出に停車します';
    } else if (Des[0][0] == '岡山') {
        trainTables[0].trains[0].detail += '多度津で<span class="lightgreen">快速「サンポート南風リレー号」</span>高松行きに接続します。';
    } else if (Type[0][0] == '特急しまんと8号') {
        trainTables[0].trains[0].detail = trainTables[0].trains[0]?.detail ?? "".replace('宇多津、坂出', '坂出');
        trainTables[0].trains[0].detail += '坂出で<span class="blue">快速「マリンライナー70号」</span>岡山行きに接続します。';
    }
    if (Type[1][0] == '快速') {
        trainTables[1].trains[0].detail = '後免までの各駅、後免町、のいち、あかおか、夜須、和食、球場前、球場前から各駅に停車します。';
    } else if (Type[1][0] == '普通(一部通過)') {
        trainTables[1].trains[0].detail = '土佐一宮、土佐大津、後免に停車します';
    } else if (Des[1][0].includes('･奈半利')) {
        trainTables[1].trains[0].detail = '奈半利行きは後免から<span class="orange">快速</span>となります。';
    }
}
for (var td = 0; td < Tablenum; td++) {
    var _Detail = trainTables[td].trains[0].detail
    if ((_Detail == "" || _Detail == "各駅にとまります") && Type[td][1] != "") {
        DetailDelete(td, 2)
    } else {
        document.getElementById('TDetail' + (td + 1) + '' + 1)!.innerHTML = trainTables[td].trains[0]?.detail ?? "";
        Tablenums[td] -= 1;
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var _Type = trainTables[td].trains[tr].type
        var dType = document.getElementById('TType' + (td + 1) + (tr + 1));
        if (station == '高知駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], ShikokuStops.JRSKobj);
            TypeColorChange(td, tr, '特急', 'red');
            TypeColorChange(td, tr, '快速', 'orange');
            TypeBackColorChange(td, tr, '特急', '#202020');
        } else if (station == '高松駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], ShikokuStops.JRSobj);
        } else if (station == '松山駅') {
            JTypeIncludeColor(Type[td][tr], TType[td][tr], ShikokuStops.JRSMobj);
        }
        var color = dType!.style.color;
        if (WhetherStartsLocal(td, tr)) {
            LocalShow(td, tr, color);
        } else if (_Type.startsWith('各停')) {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = _Type;
            trainTables[td].trains[tr].type = '';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = 'skyblue';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        } else if (_Type.startsWith('伊予灘')) {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = '伊予灘ものがたり';
            trainTables[td].trains[tr].type = '';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = 'skyblue';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.80)" + "translate(-15%,0%)";
        } else if (_Type.startsWith('快速')) {
            trainTables[td].trains[tr].type = '快速';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = _Type.slice(2);
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = color;
            if (station != '高知駅') {
                dType!.style.backgroundColor = color;
                dType!.style.color = 'white';
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'left';
            } else {
                document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = '(一部通過)';
                document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'center';
            }
        } else if (Type[td][tr].startsWith('特急')) {
            trainTables[td].trains[tr].type = '特急';
            var _Name = Type[td][tr].slice(2);
            if (!_Name.endsWith('号')) {
                _Name += '号';
            }
            document.getElementById('TName' + (td + 1) + (tr + 1))!.textContent = _Name;
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.textAlign = 'left';
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = 'red';
            if (station != '高知駅') {
                dType!.style.backgroundColor = 'red';
                dType!.style.color = 'white';
            } else {
                dType!.style.color = 'red';
            }
        }
        var dName = document.getElementById('TName' + (td + 1) + (tr + 1));
        if (dName!.textContent.startsWith('しおかぜ･いしづち')) {
            dName!.innerHTML = 'しおかぜ' + '<span class="gou">' + trainTables[td].trains[tr].trainNumber + '号</span><br>いしづち';
            dName!.style.fontSize = '15px';
            dName!.style.fontWeight = '800px';
        }
        if (trainTables[td].trains[tr].destination.length > 5 && Des[td][tr] != 'ｵﾚﾝｼﾞﾀｳﾝ') {
            document.getElementById('TDes' + (td + 1) + (tr + 1))!.style.transform = "scaleX(0.60)" + "translate(-40%,0%)";
        }
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.4);
    }
}
DestinationSet();
NewAllLastShow();
flagmarkerase(0, 'TDes');
flagmarkerase(1, 'TDes');
flagmarkerase(0, 'TDes', '+');
flagmarkerase(1, 'TDes', '+');