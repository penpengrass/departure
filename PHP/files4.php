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
if (isset($_POST['staselect4'])) {
  $test1 = $_POST['staselect4'];
  if ($test1 == 'tennouji') {
    header("Location: ../index4_T.php");
    exit();
  } else if ($test1 == $startstation) {
    header('Location: ../index4.php');
    exit();
  } else {
    header('Location: ../index4.php?station=' . $test1);
    exit();
  }
}
$JRShinkansenflag = 0;
if (isset($_GET['station'])) {
  if (Inisset('hiroshima')) {
    if ($holidayflag == 0) {
      $files[0] = 'csv/JRW/SanyoArea/hiroshima1.csv';
      $files[1] = 'csv/JRW/SanyoArea/hiroshima2.csv';
      $files[2] = 'csv/JRW/SanyoArea/hiroshima3.csv';
      $files[3] = 'csv/JRW/SanyoArea/hiroshima4.csv';
      $files[4] = 'csv/JRW/SanyoArea/hiroshima5.csv';
    } else {
      $files[0] = 'csv/JRW/SanyoArea/hiroshima1_H.csv';
      $files[1] = 'csv/JRW/SanyoArea/hiroshima2_H.csv';
      $files[2] = 'csv/JRW/SanyoArea/hiroshima3_H.csv';
      $files[3] = 'csv/JRW/SanyoArea/hiroshima4_H.csv';
      $files[4] = 'csv/JRW/SanyoArea/hiroshima5_H.csv';
    }
    $tablenum = 5;
    $column = 2;
    $station = '広島駅';
    $tableStrange = 1;
    $tablenums = [3, 2, 2, 2, 2];
  } else if (Inisset('himeji')) {
    $files[0] = 'csv/JRW_S/himeji_S1.csv';
    $files[1] = 'csv/JRW_S/himeji_S2.csv';
    $files[2] = 'csv/JRW/himeji1.csv';
    $files[3] = 'csv/JRW/himeji3.csv';
    $files[4] = 'csv/JRW/himeji4.csv';
    $files[5] = 'csv/JRW/himeji2.csv';
    $tablenum = 6;
    $JRShinkansenflag = 1;
  } else if (Inisset('maibara')) {
    $files[0] = 'csv/JRW/maibara1.csv';
    $files[1] = 'csv/JRW/maibara2.csv';
    $files[2] = 'csv/JRW/maibara3.csv';
    $tablenum = 3;
  } else if (Inisset('okayama')) {
    $files[0] = 'csv/JRW/SanyoArea/okayama_sanyo1.csv';
    $files[2] = 'csv/JRW/SanyoArea/okayama_sanyo2.csv';
    $files[4] = 'csv/JRW/SanyoArea/okayama_uno.csv';
    $files[5] = 'csv/JRW/SanyoArea/okayama_tsuyama.csv';
    $files[1] = 'csv/JRW/SanyoArea/okayama_hakubi.csv';
    $files[3] = 'csv/JRW/SanyoArea/okayama_hakubi.csv';
    $files[6] = 'csv/JRW/SanyoArea/okayama_kibi.csv';
    $tablenum = 7;
    $station = '岡山駅';
    $tableStrange = 1;
    $undertable = [1, 0, 1, 0, 0, 1, 0];
    $column = 8;
    $tablenums = [2, 3, 2, 2, 6, 2, 2];
  } else if (Inisset('niimi')) {
    $files[0] = 'csv/JRW/niimi1.csv';
    $files[1] = 'csv/JRW/niimi2.csv';
    $files[2] = 'csv/JRW/niimi2.csv';
    $files[3] = 'csv/JRW/niimi3.csv';
    $OrderNum = 2;
    $tablenum = 4;
    $station = '新見駅';
  } else if (Inisset('iwakuni')) {
    $files[0] = 'csv/JRW/SanyoArea/iwakuni1.csv';
    $files[1] = 'csv/JRW/SanyoArea/iwakuni1.csv';
    if ($holidayflag == 0) {
      $files[2] = 'csv/JRW/SanyoArea/iwakuni3.csv';
      $files[3] = 'csv/JRW/SanyoArea/iwakuni4.csv';
    } else {
      $files[2] = 'csv/JRW/SanyoArea/iwakuni3_H.csv';
      $files[3] = 'csv/JRW/SanyoArea/iwakuni4_H.csv';
    }
    $tablenum = 4;
    $undertable = [1, 0, 0, 0];
    $column = 4;
    $tableStrange = 1;
    $tablenums = [1, 1, 3, 3];
    $station = '岩国駅';
  } else if (Inisset('tokuyama')) {
    $files[0] = 'csv/JRW_S/tokuyama1.csv';
    $files[1] = 'csv/JRW_S/tokuyama2.csv';
    $files[2] = 'csv/JRW/SanyoArea/tokuyama1.csv';
    $files[3] = 'csv/JRW/SanyoArea/tokuyama2.csv';
    $files[4] = 'csv/JRW/SanyoArea/tokuyama3.csv';
    $tablenum = 5;
    $tableStrange = 1;
    $JRShinkansenflag = 1;
    $tablenums = [3, 3, 2, 2, 2];
    $station = '徳山駅';
    $column = 5;
  } else if (Inisset('shimonoseki')) {
    $files[0] = 'csv/JRW/SanyoArea/shimonoseki1.csv';
    $files[1] = 'csv/JRW/SanyoArea/shimonoseki2.csv';
    $files[2] = 'csv/JRW/SanyoArea/shimonoseki3.csv';
    $tablenum = 3;
    $OrderNum = 2;
    $column = 3;
  } else if (Inisset('itozaki')) {
    $files[0] = 'csv/JRW/SanyoArea/itozaki1.csv';
    $files[1] = 'csv/JRW/SanyoArea/itozaki2.csv';
    $tablenum = 2;
  } else if (Inisset('mihara')) {
    $files[0] = 'csv/JRW/SanyoArea/mihara1.csv';
    $files[1] = 'csv/JRW/SanyoArea/mihara2.csv';
    $files[2] = 'csv/JRW/SanyoArea/mihara3.csv';
    $tablenum = 3;
  }
}
