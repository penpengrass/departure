<?php

if ($files[0] == 'csv/JRH/sapporo1.csv') {
  $files[1] = 'csv/JRH/sapporo1.csv';
  $files[2] = 'csv/JRH/sapporo2.csv';
  $files[3] = 'csv/JRH/sapporo3.csv';
  $files[4] = 'csv/JRH/sapporo2.csv';
  $files[5] = 'csv/JRH/sapporo5.csv';
  $tablenum = 5;
  $OrderNum = 4;
} else if ($files[0] == 'csv/JRS/takamatsu1.csv') {
  $files[1] = 'csv/JRS/takamatsu1.csv';
  $files[2] = 'csv/JRS/takamatsu1.csv';
  $files[3] = 'csv/JRS/takamatsu2.csv';
  $tablenum = 4;
  $OrderNum = 2;
}
//ここからgetCSVとしたい
//表示数が全部同じ場合
if ($tableStrange == 0) {
  for ($i = 0; $i < $tablenum; $i++) {
    $tablenums[$i] = $OrderNum;
  }
}
//echo $files[0];
//echo " ";
//echo $files[1];
//ファイル取り込みのための変数3つ，配列の長さ=ファイルの数
$json_array = array();
$list = array();
$h = array();

//$filesの要素数だけファイルを取り込む$kはファイル番号0から
for ($k = 0; $k < count($files); $k++) {
  $list[$k] = fopen($files[$k], 'r');
  //echo $k;
  //echo "-";
  $h[$k] = 0;
  //これを初期化しないと表が別の表に侵食される
  $newarray = [];
  //csvファイル1行ごとに
  while ($array = fgetcsv($list[$k], 1000, ",")) {
    for ($i = 0; $i < count($array); $i++) {
      $newarray[$h[$k]][$i] = $array[$i];
    }
    $h[$k]++;
    //print_r($newarray[$h[$k]]);
  }
  $json_array[$k] = '0';
  $json_array[$k] = json_encode($newarray); //$newarrayはcsvデータをPHP配列に入れたもの
}
//echo count($json_array);
//print_r($newarray);
$ifile = 0;
if ($filetablegap == 1 || count($files) == 2) {
  $json_array[2] = $json_array[1];
  $json_array[3] = $json_array[1];
  //echo "if";
} else if ($filetablegap == 2) {
  //$json_array[4] = $json_array[0];
  //$json_array[5] = $json_array[1];
}
//echo $json_array[0];
// JavaScriptの配列を生成するための文字列をPHPで作成
$js_array = '[';
for ($i = 0; $i < count($json_array); $i++) {
  if ($i > 0) {
    $js_array .= ', ';
  }
  $js_array .= json_encode(json_decode($json_array[$i]));
}
$js_array .= ']';
?>
<script>
  //PHPの配列をJavaScriptに入れる
  let fileNum = <?php echo count($files); ?>;
  console.log(fileNum + "←ファイルの数");
  let filetablegap = <?php echo $filetablegap; ?>;
  let holidayflag = <?php echo $holidayflag; ?>;
  let holiday_able = <?php echo $holiday_able; ?>;
  let holiday_correspond = 0;
  var TT = <?php echo $js_array; ?>;
  if (filetablegap > 0) {
    //TT[4] = TT[0];
    //TT[5] = TT[1];
  }
  console.log(TT.length + "←TTの数");
  for (let f = 0; f < fileNum; f++) {
    console.log(TT[f]);
  }
  let Indexfile = '<?= $dir ?>';
  let Tablenum = <?php echo $tablenum; ?>;
  let orderNum = <?php echo $OrderNum; ?>;
  let Tablenums = new Array(<?php echo $tablenum; ?>);
  var JRShinkansenflag = <?php echo $JRShinkansenflag; ?>;
  <?php
  $json_tablenum = json_encode($tablenums);
  ?>;
  Tablenums = JSON.parse('<?php echo $json_tablenum; ?>');
  console.log("Tablenumの中身:" + Tablenums);
  let title = TT[0][0][0].split(" ");
  let title2 = TT[1][0][0].split(" ");
  console.log(title);
  console.log(title2);
  let CompanyNumber = '<?php echo $CompanyNumber; ?>';
  //詳細表示がいくつあるか(0~2)PHPも使う
  var detailflag='<?php echo $detailflag; ?>';
  let station = '<?php echo $station; ?>';
  let dayOfWeek='<?php echo $dayOfWeek; ?>';
  if (station == '') {
    station = title[1];
  }
  console.log("曜日番号は"+dayOfWeek);
  console.log("駅名は" + station);
  console.log("TT.length=" + TT.length);
  let station2 = title2[1];
  let stationN = station.slice(0, -1);
  let stationN2 = station2.slice(0, -1);
  let TableTitle = new Array(Tablenum);
  let dir = title[2].substr(0, 2);
  let dir2 = title2[2].substr(0, 2);
  let MinIn = 2;
  let company = '';
  var NonGouflag = 0;
  var TwoLetterDisflag = 0;
  var detailLength_one=0;
  var DetailLength = new Array(Tablenum);
  console.log(title[2].substr(0, 2));
  console.log(TT[1].length);
  let red = 'red';
  let orange = 'orange';
  let yellowgreen = 'yellowgreen';
  let greenyellow = 'greenyellow';
  let green = 'green';
  let blue = 'blue';
  let black = 'black';
  let purple = 'purple';
  let pink = 'pink';
  let white = 'white';
</script>