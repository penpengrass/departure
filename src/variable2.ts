//mainの後に定義するもの
//種別の表示位置を取得(mainの後)
//Tablenums[td]はオーダーの数，Tablenumは表の数
window.Detail = new Array(Tablenum);
//let TableHour = new Array(Tablenum);
//let TableMin = new Array(Tablenum);
const table = new Array(Tablenum);
var ShinNumber = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    ShinNumber[tr] = new Array(Tablenums[tr]);
    table[tr] = document.getElementById("TTable" + (tr + 1));
    if (company == '近鉄' || detailflag == 2) {
        Detail[tr] = new Array(Tablenums[tr]);
    } else if (detailLength_one == 1 || detailLength_one == 2) {
        Detail[tr] = new Array(2);
    }
}
//console.log(ShinNumber);
//外側は表の数，内側はオーダーの数で種別，行先，種別の場所(色分けのため)，詳細表示の場所を取得
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (company == '近鉄' || Indexfile == 'index3_S.php') {
            //Detail[tr]=new Array(Tablenums[td]);
            DetailLength[td] = Tablenums[td];
        } else if (Indexfile == 'index9.php') {
            DetailLength[td] = 1;
        }
    }
}