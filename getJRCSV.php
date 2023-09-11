<?php
//表の数
$tablenum = 2;
//オーダー何個か,2と3のみ，詳細は3のみ対応
$OrderNum = 3;
//ファイル数と表の数の差
$filetablegap = 0;
//ファイル取り込みのための変数3つ，配列の長さ=ファイルの数
$json_array = array();
$list = array();
$h = array();
//$filesの要素数だけファイルを取り込む
for ($k = 0; $k < count($files); $k++) {
  $list[$k] = fopen($files[$k], 'r');
  $h[$k] = 0;
  //これを初期化しないと表が別の表に侵食される(JR東日本以外)
  //$newarray=[];
  while ($array = fgetcsv($list[$k], 1000, ",")) {
    for ($i = 0; $i < count($array); $i++) {
      $newarray[$h[$k]][$i] = $array[$i];
    }
    $h[$k]++;
  }
  $json_array[$k] = json_encode($newarray); //$newarrayはcsvデータをPHP配列に入れたもの
}
//echo count($json_array);
$ifile = 0;
?>
<script>
  let fileNum = <?php echo count($files); ?>;
  console.log(fileNum + "←ファイルの数");
  let filetablegap = <?php echo $filetablegap; ?>;
  var TT = new Array(fileNum+2);
  console.log(TT.length + "←TTの数");
  TT[0] = JSON.parse('<?php echo $json_array[0]; ?>');
  TT[1] = JSON.parse('<?php echo $json_array[1]; ?>');
  TT[2] = JSON.parse('<?php echo $json_array[2]; ?>');
  TT[3] = JSON.parse('<?php echo $json_array[3]; ?>');
  TT[4] = JSON.parse('<?php echo $json_array[0]; ?>');
  TT[5] = JSON.parse('<?php echo $json_array[1]; ?>');
  //TT[4]=TT[0];
  //TT[5]=TT[1];
  if (filetablegap > 0) {
    TT[3] = 0;
  }
  for (let f = 0; f < fileNum; f++) {
    console.log(TT[f]);
  }
  let Tablenum = <?php echo $tablenum; ?>;
  let orderNum = <?php echo $OrderNum; ?>;
  let Tablenums=[3,3];
  let title = TT[0][0][0].split(" ");
  let title2 = TT[1][0][0].split(" ");
  let station = title[1];
  let station2 = title2[1];
  let stationN = station.slice(0, -1);
  let stationN2 = station2.slice(0, -1);
  let dir = title[2].substr(0, 2);
  let dir2 = title2[2].substr(0, 2);
  let Indexfile="index3.php";
  let TableTitle = new Array(Tablenum);
  console.log(title[2].substr(0, 2));
  console.log(Tablenum + "←表の数");
  console.log(TT[0][51][1]);
  let DoubleTable=1;//0のとき2個目の表を実行しない
  //TT[n]を空にする

</script>