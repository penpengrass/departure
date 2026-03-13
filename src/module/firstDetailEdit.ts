import { JRLimitedNumber, JRLimitedName } from '../module/firstDisplayEdit'
//JR四国とJR北海道でのみ使用
//配列(引数1)の中から引数2となる駅を探して，引数3に引数2の次の追加停車駅を入れる関数(ex)limited,'今治','伊予北条')
export function AddStopping(TrainType: any, BeforeStation: string, AddStation: string, LDtype = 0) {
    var Addnumber = -1;
    for (var tr = 0; tr < TrainType[LDtype].length; tr++) {
        if (TrainType[LDtype][tr] == BeforeStation) {
            Addnumber = tr;
            break;
        }
    }
    TrainType[LDtype].splice(Addnumber + 1, 0, AddStation);
}
export function DeleteStopping(TrainType: any, BeforeStation: string, LDtype = 0) {
    var Deletenumber = -1;
    for (var tr = 0; tr < TrainType[LDtype].length; tr++) {
        if (TrainType[LDtype][tr] == BeforeStation) {
            Deletenumber = tr;
            break;
        }
    }
    //limited[5].splice(2, 0, '高の原');
    TrainType[LDtype].splice(Deletenumber, 1);
}
//号数で飛ばしがあった場合
export function LimitedNumberPass(td:number, tr:number, Range:boolean, _number:number[][], tag = 'TName') {
    var LNumber = document.getElementById(tag + (td + 1) + (tr + 1));
    if (Range) {
        _number[td][tr] = Number(_number[td][tr]) + 2;
        LNumber!.textContent = _number[td][tr] + '号';
    }
}
//console.log(Lname);