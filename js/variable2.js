//mainの後に定義するもの
//種別の表示位置を取得(mainの後)
//Tablenums[ia]はオーダーの数，Tablenumは表の数
let shubetu=new Array(Tablenum);
let IType=new Array(Tablenum);
let Tshubetu=new Array(Tablenum);
let Type = new Array(Tablenum);
let Des = new Array(Tablenum);
let TDes = new Array(Tablenum);
let TType = new Array(Tablenum);
let WType = new Array(Tablenum);
let TDetail = new Array(Tablenum);
for (let ib = 0; ib < Tablenum; ib++) {
    shubetu[ib]=new Array(Tablenums[ib]);
    IType[ib] = new Array(Tablenums[ib]);
    Tshubetu[ib]=new Array(Tablenums[ib]);
    Type[ib] = new Array(Tablenums[ib]);
    Des[ib] = new Array(Tablenums[ib]);
    TDes[ib] = new Array(Tablenums[ib]);
    TType[ib] = new Array(Tablenums[ib]);
    TDetail[ib] = new Array(Tablenums[ib]);
    WType[ib] = new Array(Tablenums[ib]);
}
//外側は表の数，内側はオーダーの数で種別，行先，種別の場所(色分けのため)，詳細表示の場所を取得
for (let ia = 0; ia < Tablenum; ia++) {
    for (let ib = 0; ib < Tablenums[ia]; ib++) {
        shubetu[ia][ib]=document.getElementById('TType' + (ia + 1) + '' + (ib + 1)).textContent;
        Type[ia][ib] = document.getElementById('TType' + (ia + 1) + '' + (ib + 1)).textContent;
        Des[ia][ib] = document.getElementById('TDes' + (ia + 1) + '' + (ib + 1)).textContent;
        IType[ia][ib]='IType' + (ia + 1) + '' + (ib + 1);
        Tshubetu[ia][ib]='shubetu' + (ia + 1) + '' + (ib + 1);
        TType[ia][ib] = 'TType' + (ia + 1) + '' + (ib + 1);
        TDes[ia][ib] = 'TDes' + (ia + 1) + '' + (ib + 1);
        TDetail[ia][ib] = 'TDetail' + (ia + 1) + '' + (ib + 1);
        WType[ia][ib] = 'WType' + (ia + 1) + '' + (ib + 1);
    }
}
//console.log("FirType1"+FirType1);