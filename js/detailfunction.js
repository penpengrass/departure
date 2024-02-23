//配列(引数1)の中から引数2となる駅を探して，引数3に引数2の次の追加停車駅を入れる関数(ex)limited,'今治','伊予北条')
function AddStopping(TrainType, BeforeStation, AddStation, LDtype = 0) {
    var Addnumber = -1;
    for (var tr = 0; tr < TrainType[LDtype].length; tr++) {
        if (TrainType[LDtype][tr] == BeforeStation) {
            Addnumber = tr;
            break;
        }
    }
    TrainType[LDtype].splice(Addnumber + 1, 0, AddStation);
}
function DeleteStopping(TrainType, BeforeStation, LDtype = 0) {
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
function BeforeDetailShowing(SpecialStopping) {
    SpecialStopping();
}
function AfterDetailShowing(Resetfunction) {
    Resetfunction();
}
//特急によって停車駅が異なるときの処理
//numberは号数 Lnameは列車名
var number = new Array(Tablenum);
var Lname = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    if (detailflag > 1) {
        number[td] = new Array(orderNum);
        Lname[td] = new Array(orderNum);
    }
    for (var tr = 0; tr < orderNum; tr++) {
        if (detailflag > 1 && detailflag != 8) {
            number[td][tr] = Number.parseInt(JRLimitedNumber(td, tr));
            console.log(typeof number[td][tr]);
            Lname[td][tr] = JRLimitedName(td, tr);
        } else {
            number[td] = JRLimitedNumber(td, tr);
            Lname[td] = JRLimitedName(td, tr);
            break;
        }
    }
}
console.log(number);
console.log(Lname);