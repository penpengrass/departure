<?php
$dir = basename($_SERVER['SCRIPT_NAME']);
//平日か土日か
$holidayflag;
// 日本の祝日リスト（仮に配列として記述）
$holidays = array(
  '2024-02-12',
  '2024-02-23',
  '2024-03-20',
  '2024-04-29',
  '2024-05-03',
  '2024-05-04',
  '2024-05-05',
  '2024-05-06',
  '2024-07-15',
  '2024-08-12',
  // 他の祝日
);
// 2時間前の日時を計算
$timezone = new DateTimeZone('Asia/Tokyo'); // タイムゾーンを適切なものに置き換える
$twoHoursAgo = new DateTime("-2 hours", $timezone);
$twoHoursAgoDate = $twoHoursAgo->format('Y-m-d');
// 曜日を取得 (0: 日曜日, 1: 月曜日, ... 6: 土曜日)
$dayOfWeek = $twoHoursAgo->format('w');
if (in_array($twoHoursAgoDate, $holidays)) {
  //echo "2時間前は祝日です。";
  $holidayflag = 1;
} else if ($dayOfWeek == 0 || $dayOfWeek == 6) {
  // 土曜日または日曜日の場合
  //echo "2時間前は週末です。";
  $holidayflag = 1;
} else {
  // 平日の場合
  //echo "2時間前は平日です。";
  $holidayflag = 0;
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
//新幹線付きかどうか
$JRShinkansenflag = 0;
if ($dir == 'index2C.php') {
  require('PHP/CSVset2C.php');
} else if (isset($_POST["stasele"])) {
  $files[0] = $_POST["stasele"];
}
