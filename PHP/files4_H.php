<?php
//ここは2回通る
//1回目はindex4.phpの<selectから飛んでくる
//2回目はindex4.phpのrequire('files4.php)から飛んでくる
require('function1.php');
/*exitfilejump(4, 'hiroshima');
exitfilejump(4, 'himeji');
exitfilejump(4, 'okayama');
exitfilejump(4, 'niimi');
exitfilejump(4, 'iwakuni');
exitfilejump(4, 'tokuyama');
exitfilejump(4, 'shimonoseki');*/
//この後index4.php?station=hogehogeに飛ぶ
$startstation = 'kitashinti';
if (isset($_POST['staselect4_H'])) {
  $test1 = $_POST['staselect4_H'];
  /*if ($test1 == 'tennouji') {
    header("Location: ../index4_T.php");
    exit();
  } else if ($test1 == 'tsuruga') {
    header("Location: ../index4_H.php");
    exit();
  } else if ($test1 == 'osaka') {
    header("Location: ../index4_A.php");
    exit();
  } else if ($test1 == $startstation) {
    header('Location: ../index4.php');
    exit();
  } else {*/
  header('Location: ../index4_H.php?station=' . $test1);
  exit();
  //}
}
$JRShinkansenflag = 0;
if (isset($_GET['station'])) {
  if (Inisset('fukui')) {
    $files[0] = 'csv/JRW_SH/fukui1.csv';
    $files[1] = 'csv/JRW_SH/fukui2.csv';
    $files[2] = 'csv/Hokuriku/fukui1.csv';
    $files[3] = 'csv/Hokuriku/fukui2.csv';
    $files[4] = 'csv/Hokuriku/fukui3.csv';
    $tablenum = 5;
    $column = 2;
    $station = '福井駅';
    $tableStrange = 1;
    $tablenums = [3, 3, 2, 3, 3];
  } else if (Inisset('kanazawa')) {
    $files[0] = 'csv/JRW_SH/kanazawa1.csv';
    $files[1] = 'csv/JRW_SH/kanazawa2.csv';
    if ($holidayflag == 0) {
      $files[2] = 'csv/Hokuriku/kanazawa1.csv';
      $files[3] = 'csv/Hokuriku/kanazawa2.csv';
      $files[4] = 'csv/Hokuriku/kanazawa3.csv';
    } else {
      $files[2] = 'csv/Hokuriku/kanazawa1_H.csv';
      $files[3] = 'csv/Hokuriku/kanazawa2_H.csv';
      $files[4] = 'csv/Hokuriku/kanazawa3.csv';
    }
    $tablenum = 5;
    $station = '金沢駅';
  }
}
