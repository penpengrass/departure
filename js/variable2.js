//mainの後に定義するもの
//種別の表示位置を取得(mainの後)
//Tablenums[td]はオーダーの数，Tablenumは表の数
let shubetu = new Array(Tablenum);
let IType = new Array(Tablenum);
let Tshubetu = new Array(Tablenum);
let Type = new Array(Tablenum);
let Des = new Array(Tablenum);
let TDes = new Array(Tablenum);
let TType = new Array(Tablenum);
let TName = new Array(Tablenum);
let WType = new Array(Tablenum);
let TDetail = new Array(Tablenum);
let Detail = new Array(Tablenum);
let TableHour = new Array(Tablenum);
let TableMin = new Array(Tablenum);
let doBNumber = new Array(Tablenum);
let doType = new Array(Tablenum);
let Connecting = new Array(Tablenum);
const table = new Array(Tablenum);
var ShinNumber = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    shubetu[tr] = new Array(Tablenums[tr]);
    IType[tr] = new Array(Tablenums[tr]);
    Tshubetu[tr] = new Array(Tablenums[tr]);
    Type[tr] = new Array(Tablenums[tr]);
    doBNumber[tr] = new Array(Tablenums[tr]);
    doType[tr] = new Array(Tablenums[tr]);
    Des[tr] = new Array(Tablenums[tr]);
    ShinNumber[tr] = new Array(Tablenums[tr]);
    table[tr] = document.getElementById("TTable" + (tr + 1));
    if (company == '近鉄' || detailflag == 2) {
        Detail[tr] = new Array(Tablenums[tr]);
    } else if (Indexfile == 'index9.php' || Indexfile == 'index8.php') {
        Detail[tr] = new Array(2);
    }
    TName[tr] = new Array(Tablenums[tr]);
    Connecting[tr] = new Array(Tablenums[tr]);
    TDes[tr] = new Array(Tablenums[tr]);
    TType[tr] = new Array(Tablenums[tr]);
    TDetail[tr] = new Array(Tablenums[tr]);
    TableHour[tr] = new Array(Tablenums[tr]);
    TableMin[tr] = new Array(Tablenums[tr]);
    WType[tr] = new Array(Tablenums[tr]);
}
console.log(Detail);
console.log(ShinNumber);
//外側は表の数，内側はオーダーの数で種別，行先，種別の場所(色分けのため)，詳細表示の場所を取得
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        Type[td][tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1)).textContent;
        Des[td][tr] = document.getElementById('TDes' + (td + 1) + '' + (tr + 1)).textContent;
        TableHour[td][tr] = document.getElementById('THour' + (td + 1) + '' + (tr + 1)).textContent;
        TableMin[td][tr] = document.getElementById('TMin' + (td + 1) + '' + (tr + 1)).textContent;
        doBNumber[td][tr] = document.getElementById('TNum' + (td + 1) + '' + (tr + 1));
        doType[td][tr] = document.getElementById('TType' + (td + 1) + '' + (tr + 1));
        if (company == '近鉄' || Indexfile == 'index3_S.php') {
            //Detail[tr]=new Array(Tablenums[td]);
            DetailLength[td] = Tablenums[td];
        } else if (Indexfile == 'index9.php') {
            DetailLength[td] = 1;
            console.log(Detail);
        }
        IType[td][tr] = 'IType' + (td + 1) + '' + (tr + 1);
        Tshubetu[td][tr] = 'shubetu' + (td + 1) + '' + (tr + 1);
        TType[td][tr] = 'TType' + (td + 1) + '' + (tr + 1);
        TName[td][tr] = 'TName' + (td + 1) + '' + (tr + 1);
        TDes[td][tr] = 'TDes' + (td + 1) + '' + (tr + 1);
        TDetail[td][tr] = 'TDetail' + (td + 1) + '' + (tr + 1);
        WType[td][tr] = 'WType' + (td + 1) + '' + (tr + 1);
    }
}
console.log(Type);