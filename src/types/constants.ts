export var WName = new Array(Tablenum);
export var WDes = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
    WName[tr] = new Array(Tablenums[tr]);
    WDes[tr] = new Array(Tablenums[tr]);
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        WName[td][tr] = 'WName' + (td + 1) + '' + (tr + 1);
        WDes[td][tr] = 'WDes' + (td + 1) + '' + (tr + 1);
    }
}