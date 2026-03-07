let shubetu = new Array(Tablenum);
let IType = new Array(Tablenum);
let Tshubetu = new Array(Tablenum);
let Ex_Name = new Array(Tablenum);
let TDes = new Array(Tablenum);
let WDes = new Array(Tablenum);
window.TType = new Array(Tablenum);
window.TName = new Array(Tablenum);
window.WType = new Array(Tablenum);
let WName = new Array(Tablenum);
let BType = new Array(Tablenum);
let TDetail = new Array(Tablenum);
let Detail = new Array(Tablenum);
let doBNumber = new Array(Tablenum);
let doType = new Array(Tablenum);
let Connecting = new Array(Tablenum);
let Cars = new Array(Tablenum);
let Jiyuseki = new Array(Tablenum);
const table = new Array(Tablenum);
var ShinNumber = new Array(Tablenum);
for (let tr2 = 0; tr2 < Tablenum; tr2++) {
  shubetu[tr2] = new Array(Tablenums[tr2]);
  IType[tr2] = new Array(Tablenums[tr2]);
  Tshubetu[tr2] = new Array(Tablenums[tr2]);
  Ex_Name[tr2] = new Array(Tablenums[tr2]);
  doBNumber[tr2] = new Array(Tablenums[tr2]);
  doType[tr2] = new Array(Tablenums[tr2]);
  ShinNumber[tr2] = new Array(Tablenums[tr2]);
  table[tr2] = document.getElementById("TTable" + (tr2 + 1));
  if (company == "近鉄" || detailflag == 2) {
    Detail[tr2] = new Array(Tablenums[tr2]);
  } else if (detailLength_one = 1) {
    Detail[tr2] = new Array(2);
  }
  TName[tr2] = new Array(Tablenums[tr2]);
  Connecting[tr2] = new Array(Tablenums[tr2]);
  TDes[tr2] = new Array(Tablenums[tr2]);
  WDes[tr2] = new Array(Tablenums[tr2]);
  TType[tr2] = new Array(Tablenums[tr2]);
  TDetail[tr2] = new Array(Tablenums[tr2]);
  WType[tr2] = new Array(Tablenums[tr2]);
  WName[tr2] = new Array(Tablenums[tr2]);
  BType[tr2] = new Array(Tablenums[tr2]);
  Cars[tr2] = new Array(Tablenums[tr2]);
  Jiyuseki[tr2] = new Array(Tablenums[tr2]);
}
for (var td = 0; td < Tablenum; td++) {
  for (var tr = 0; tr < Tablenums[td]; tr++) {
    doBNumber[td][tr] = document.getElementById("TNum" + (td + 1) + (tr + 1));
    doType[td][tr] = document.getElementById("TType" + (td + 1) + (tr + 1));
    if (company == "近鉄" || Indexfile == "index3_S.php") {
      DetailLength[td] = Tablenums[td];
    } else if (Indexfile == "index9.php") {
      DetailLength[td] = 1;
      console.log(Detail);
    }
    IType[td][tr] = "IType" + (td + 1) + (tr + 1);
    Tshubetu[td][tr] = "shubetu" + (td + 1) + (tr + 1);
    TType[td][tr] = "TType" + (td + 1) + (tr + 1);
    TName[td][tr] = "TName" + (td + 1) + (tr + 1);
    WName[td][tr] = "WName" + (td + 1) + (tr + 1);
    TDes[td][tr] = "TDes" + (td + 1) + (tr + 1);
    WDes[td][tr] = "WDes" + (td + 1) + (tr + 1);
    TDetail[td][tr] = "TDetail" + (td + 1) + (tr + 1);
    WType[td][tr] = "WType" + (td + 1) + (tr + 1);
    BType[td][tr] = "BType" + (td + 1) + (tr + 1);
  }
}
console.log(Cars);
