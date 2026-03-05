document.getElementById("stationname").textContent = company + " " + station;
window.Type = new Array(Tablenum);
let TableHour = new Array(Tablenum);
let TableMin = new Array(Tablenum);
let Des = new Array(Tablenum);
let TrackNum = new Array(Tablenum);
for (let tr = 0; tr < Tablenum; tr++) {
  window.Type[tr] = new Array(Tablenums[tr]);
  TableHour[tr] = new Array(Tablenums[tr]);
  TableMin[tr] = new Array(Tablenums[tr]);
  Des[tr] = new Array(Tablenums[tr]);
  TrackNum[tr] = new Array(Tablenums[tr]);
}
function EmptyLine(td, tr, Line) {
  if (Line[td][tr] === void 0) {
    Line[td][tr] = "";
  }
}
function Shows(hour, Table_Column, TT2, TableNumber, depnum) {
  TableHour[TableNumber - 1][depnum - 1] = TT2[hour][0];
  TableMin[TableNumber - 1][depnum - 1] = String(TT2[hour + 1][Table_Column]).padStart(2, "0");
  Type[TableNumber - 1][depnum - 1] = TT2[hour][Table_Column];
  Des[TableNumber - 1][depnum - 1] = TT2[hour + 2][Table_Column];
  TrackNum[TableNumber - 1][depnum - 1] = TT2[hour + 3][Table_Column];
  orders[depnum - 1] = Table_Column;
  orders[depnum] = Table_Column + 1;
  return;
}
function main() {
  for (var td_main = 0; td_main < Tablenum; td_main++) {
    if (TableTitle[td_main] != "") {
      document.getElementById("kn" + (td_main + 1)).innerHTML = TableTitle[td_main];
    }
    if (station == "敦賀駅") {
      BackTime();
      if (td_main == 1 || td_main == 2) {
        Delay(15);
      }
    }
    FShow(TT[td_main], td_main + 1, Shows);
    for (var ON = 2; ON < Tablenums[td_main] + 1; ON++) {
      if (next != 1) {
        FSTShow(TT[td_main], Shows, orders[ON - 1], td_main + 1, ON);
      } else {
        break;
      }
    }
    for (var td = 0; td < Tablenum; td++) {
      for (var tr = 0; tr < Tablenums[td]; tr++) {
        EmptyLine(td, tr, Type);
        EmptyLine(td, tr, Des);
        EmptyLine(td, tr, TableHour);
        EmptyLine(td, tr, TableMin);
        EmptyLine(td, tr, TrackNum);
      }
    }
  }
}
main();
if (station == "浅草駅") {
  Delay(-6);
  new Array(3);
  new Array(3);
  new Array(3);
  new Array(3);
  console.log(station);
  FShow(TT[3], 4, NotShows);
  FSTShow(TT[3], NotShows, orders[1], 4, 2);
  FSTShow(TT[3], NotShows, orders[2], 4, 3);
}
{
  if (Indexfile == "index5.php") {
    MinIn = 1;
    console.log("東急のファイル");
  } else if (MinIn > 2) {
    MinIn = 3;
  }
  setInterval(koshin, MinIn * 6e4);
}
console.log("-------main完了-------");
document.title = station + "発車標";
console.log(Type);
