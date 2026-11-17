export var WName = new Array(Tablenum);
export var WDes = new Array(Tablenum);
//let Type = new Array(Tablenum);
//let Des = new Array(Tablenum);
export const TDes = new Array(Tablenum);
export const TType = new Array(Tablenum);
export const TName = new Array(Tablenum);
export const WType = new Array(Tablenum);
const table = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    WName[tr] = new Array(Tablenums[tr]);
    WDes[tr] = new Array(Tablenums[tr]);
    //Type[tr] = new Array(Tablenums[tr]);
    //Des[tr] = new Array(Tablenums[tr]);
    table[tr] = document.getElementById("TTable" + (tr + 1));
    TName[tr] = new Array(Tablenums[tr]);
    TDes[tr] = new Array(Tablenums[tr]);
    TType[tr] = new Array(Tablenums[tr]);
    //TableHour[tr] = new Array(Tablenums[tr]);
    //TableMin[tr] = new Array(Tablenums[tr]);
    WType[tr] = new Array(Tablenums[tr]);
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        WName[td][tr] = 'WName' + (td + 1) + '' + (tr + 1);
        WDes[td][tr] = 'WDes' + (td + 1) + '' + (tr + 1);
        TType[td][tr] = 'TType' + (td + 1) + '' + (tr + 1);
        TName[td][tr] = 'TName' + (td + 1) + '' + (tr + 1);
        TDes[td][tr] = 'TDes' + (td + 1) + '' + (tr + 1);
        WType[td][tr] = 'WType' + (td + 1) + '' + (tr + 1);
    }
}
export var comment = document.getElementById("supplement");