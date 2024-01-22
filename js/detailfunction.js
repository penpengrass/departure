//配列(引数1)の中から引数2となる駅を探して，引数3に引数2の次の追加停車駅を入れる関数(ex)limited,'今治','伊予北条')
function AddStopping(TrainType, BeforeStation, AddStation) {
    var Addnumber = -1;
    for (var tr = 0; tr < TrainType[0].length; tr++) {
        if (TrainType[0][tr] == BeforeStation) {
            Addnumber = tr;
            break;
        }
    }
    //limited[5].splice(2, 0, '高の原');
    TrainType[0].splice(Addnumber + 1, 0, AddStation);
}
function DeleteStopping(TrainType, BeforeStation) {
    var Deletenumber = -1;
    for (var tr = 0; tr < TrainType[0].length; tr++) {
        if (TrainType[0][tr] == BeforeStation) {
            Deletenumber = tr;
            break;
        }
    }
    //limited[5].splice(2, 0, '高の原');
    TrainType[0].splice(Deletenumber, 1);
}

//特急によって停車駅が異なるときの処理
//numberは号数 Lnameは列車名
var number = new Array(Tablenum);
var Lname = new Array(Tablenum);
for (var td = 0; td < Tablenum; td++) {
    number[td] = JRLimitedNumber(td, 0);
    Lname[td] = JRLimitedName(td, 0);
}
console.log(number);
console.log(Lname);