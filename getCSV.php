<?php
$dir = basename($_SERVER['SCRIPT_NAME']);
//平日か土日か
$holidayflag;
// 日本の祝日リスト（仮に配列として記述）
$holidays = array(
    '2023-01-01', // 元旦
    '2023-01-02', // 元日振替休日
    // 他の祝日
);
// 2時間前の日時を計算
$twoHoursAgo = new DateTime("-2 hours");
$twoHoursAgoDate = $twoHoursAgo->format('Y-m-d');
// 曜日を取得 (0: 日曜日, 1: 月曜日, ... 6: 土曜日)
$dayOfWeek = $twoHoursAgo->format('w');
if (in_array($twoHoursAgoDate, $holidays)) {
    echo "2時間前は祝日です。";
    $holidayflag=1;
} else if ($dayOfWeek == 0 || $dayOfWeek == 6) {
  // 土曜日または日曜日の場合
  //echo "2時間前は週末です。";
  $holidayflag=1;
} else {
  // 平日の場合
  //echo "2時間前は平日です。";
  $holidayflag=0;
}
//echo $dir;
//表の数
$tablenum = 2;
//変則な表かどうか(order数が異なる)
$tableStrange = 0;
//オーダー何個か,詳細は3のみ対応
$OrderNum = 3;
//ファイル数と表の数の差
$filetablegap = 0;
//ファイルの数，配列とは別物
$filelength = 2;
//横に列を何個並べるか(JR西日本と東急のみ使用)
$column = 2;
//駅名
$station = '';
//会社を指定,まだ使っていない
$CompanyNumber = 0;
if (isset($_POST["stasele"])) {
  $files[0] = $_POST["stasele"];
}
if ($files[0] == 'csv/JRW/JRS1.csv') {
  $files[1] = 'csv/JRW/JRS2.csv';
} else if ($files[0] == 'csv/KiTsu1.csv') {
  $files[1] = 'csv/KiTsu2.csv';
} else if ($files[0] == 'csv/JRW/hiroshima1.csv') {
  $files[0] = 'csv/JRW/hiroshima1.csv';
  $files[1] = 'csv/JRW/hiroshima2.csv';
  $files[2] = 'csv/JRW/hiroshima3.csv';
  $files[3] = 'csv/JRW/hiroshima4.csv';
  $files[4] = 'csv/JRW/hiroshima5.csv';
  $tablenum = 5;
  $column = 2;
  $station = '広島駅';
  $tableStrange = 1;
  $tablenums = [3, 2, 2, 2, 2];
} else if ($files[0] == 'csv/KiKyo.csv') {
  $tablenum = 1;
  $OrderNum = 6;
  $station = '京都駅';
} else if ($files[0] == 'csv/JRW/tennoji1.csv') {
  $files[1] = 'csv/JRW/tennoji2.csv';
  $tablenum = 2;
  $OrderNum = 4;
  $station = '天王寺駅';
} else if ($files[0] == 'csv/JRW/niimi1.csv') {
  $files[1] = 'csv/JRW/niimi2.csv';
  $files[2] = 'csv/JRW/niimi2.csv';
  $files[3] = 'csv/JRW/niimi3.csv';
  $OrderNum = 2;
  $tablenum = 4;
  $station = '新見駅';
} else if ($files[0] == 'csv/JRW/okayama_sanyo1.csv') {
  $files[1] = 'csv/JRW/okayama_sanyo2.csv';
  $files[2] = 'csv/JRW/okayama_uno.csv';
  $files[3] = 'csv/JRW/okayama_tsuyama.csv';
  $files[4] = 'csv/JRW/okayama_hakubi.csv';
  $files[5] = 'csv/JRW/okayama_hakubi.csv';
  $files[6] = 'csv/JRW/okayama_kibi.csv';
  $tablenum = 7;
  $column = 4;
  $station = '岡山駅';
  $tableStrange = 1;
  $tablenums = [2, 2, 6, 2, 3, 2, 2];
} else if ($files[0] == 'csv/JRW/mihara1.csv') {
  $files[1] = 'csv/JRW/mihara2.csv';
  $files[2] = 'csv/JRW/mihara3.csv';
  $tablenum = 3;
}else if($files[0]=='csv/JRW/iwakuni1.csv'){
  $files[1] = 'csv/JRW/iwakuni3.csv';
  $files[2] = 'csv/JRW/iwakuni4.csv';
  $tablenum = 3;
  $tableStrange = 1;
  $tablenums = [2, 3, 3];
} else if ($files[0] == 'csv/Tokyu/nikotama1.csv') {
  $files[1] = 'csv/Tokyu/nikotama2.csv';
  $files[2] = 'csv/Tokyu/nikotama3.csv';
  $files[3] = 'csv/Tokyu/nikotama4.csv';
  $tablenum = 4;
  $column = 2;
  $station = '二子玉川駅';
  $CompanyNumber = 5;
} else if ($files[0] == 'csv/Tokyu/ToMu1.csv') {
  $files[1] = 'csv/Tokyu/ToMu2.csv';
  $files[2] = 'csv/Tokyu/ToMu3.csv';
  $files[3] = 'csv/Tokyu/ToMu4.csv';
  $station = '武蔵小杉駅';
  $tablenum = 4;
  $CompanyNumber = 5;
} else if ($files[0] == 'csv/nagano1.csv') {
  $files[1] = 'csv/nagano2.csv';
  $files[2] = 'csv/nagano2.csv';
  $station = '長野駅';
  $tablenum = 3;
} else if ($files[0] == 'csv/matsumoto1.csv') {
  $files[1] = 'csv/matsumoto1.csv';
  $files[2] = 'csv/matsumoto2.csv';
  $files[3] = 'csv/matsumoto3.csv';
  $station = '松本駅';
  $tablenum = 4;
} else if ($files[0] == 'csv/JRC/toyohashi1.csv') {
  $files[1] = 'csv/JRC/toyohashi2.csv';
  $files[2] = 'csv/JRC/toyohashi3.csv';
  $files[3] = 'csv/JRC/toyohashi4.csv';
  $tablenum = 4;
}else if ($files[0] == 'csv/JRC/gifu1.csv') {
  $files[1] = 'csv/JRC/gifu2.csv';
  $files[2] = 'csv/JRC/gifu3.csv';
  $tablenum = 3;
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
//print_r($newarray);
$ifile = 0;
if ($filetablegap == 1 || count($files) == 2) {
  $json_array[2] = $json_array[1];
  $json_array[3] = $json_array[1];
  //echo "if";
} else if ($filetablegap == 2) {
  $json_array[4] = $json_array[0];
  $json_array[5] = $json_array[1];
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

$device=1;
if($device==0){
  $column=1;
}
?>
<script>
  //PHPの配列をJavaScriptに入れる
  let fileNum = <?php echo count($files); ?>;
  console.log(fileNum + "←ファイルの数");
  let filetablegap = <?php echo $filetablegap; ?>;
  var TT = <?php echo $js_array; ?>;
  if (filetablegap > 0) {
    TT[3] = 0;
  }
  console.log(TT.length + "←TTの数");
  for (let f = 0; f < fileNum; f++) {
    console.log(TT[f]);
  }
  let Indexfile = '<?= $dir ?>';
  let Tablenum = <?php echo $tablenum; ?>;
  let orderNum = <?php echo $OrderNum; ?>;
  let Tablenums = new Array(<?php echo $tablenum; ?>);
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
  let station = '<?php echo $station; ?>';
  if (station == '') {
    station = title[1];
  }
  console.log("駅名は" + station);
  let station2 = title2[1];
  let stationN = station.slice(0, -1);
  let stationN2 = station2.slice(0, -1);
  let TableTitle = new Array(Tablenum);
  let dir = title[2].substr(0, 2);
  let dir2 = title2[2].substr(0, 2);
  console.log(Indexfile);
  console.log(title[2].substr(0, 2));
  console.log(TT[0][51][1]);
  console.log(TT[1].length);
</script>