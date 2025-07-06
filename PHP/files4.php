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
  } else if ($test1 == 'tsuruga') {
    header("Location: ../index4_Tsuruga.php");
    exit();
  } else if ($test1 == 'osaka') {
    header("Location: ../index4_A.php");
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
      $files[0] = 'csv/JRW_Sanyo/hiroshima1.csv';
      $files[1] = 'csv/JRW_Sanyo/hiroshima2.csv';
      $files[2] = 'csv/JRW_Sanyo/hiroshima3.csv';
      $files[3] = 'csv/JRW_Sanyo/hiroshima4.csv';
      $files[4] = 'csv/JRW_Sanyo/hiroshima5.csv';
    } else {
      $files[0] = 'csv/JRW_Sanyo/hiroshima1_H.csv';
      $files[1] = 'csv/JRW_Sanyo/hiroshima2_H.csv';
      $files[2] = 'csv/JRW_Sanyo/hiroshima3_H.csv';
      $files[3] = 'csv/JRW_Sanyo/hiroshima4_H.csv';
      $files[4] = 'csv/JRW_Sanyo/hiroshima5_H.csv';
    }
    $tablenum = 5;
    $column = 2;
    $station = '広島駅';
    $tableStrange = 1;
    $tablenums = [3, 2, 2, 2, 2];
  } else if (Inisset('himeji')) {
    $files[0] = 'csv/JRW_S/himeji_S1.csv';
    $files[1] = 'csv/JRW_S/himeji_S2.csv';
    $files[2] = 'csv/JRW/himeji_bantan.csv'; //1_bantan
    $files[3] = 'csv/JRW/himeji_akashi.csv'; //3_akashi
    $files[4] = 'csv/JRW/himeji_kishin.csv'; //4_kishin
    $files[5] = 'csv/JRW/himeji_aboshi.csv'; //2_aboshi
    $tablenum = 6;
    $JRShinkansenflag = 1;
  } else if (Inisset('maibara')) {
    $files[0] = 'csv/JRW/maibara1.csv';
    $files[1] = 'csv/JRW/maibara2.csv';
    $files[2] = 'csv/JRW/maibara3.csv';
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRW/maibara1_H.csv';
      $files[1] = 'csv/JRW/maibara2_H.csv';
      $files[2] = 'csv/JRW/maibara3_H.csv';
    }
    $tablenum = 3;
  } else if (Inisset('sannomiya')) {
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRW/sannomiya1_H.csv';
      $files[1] = 'csv/JRW/sannomiya2_H.csv';
    } else {
      $files[0] = 'csv/JRW/sannomiya1.csv';
      $files[1] = 'csv/JRW/sannomiya2.csv';
    }
    $OrderNum = 4;
    $station = '三ノ宮駅';
  } else if (Inisset('okayama')) {
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRW_Sanyo/okayama_sanyo1_H.csv';
      $files[2] = 'csv/JRW_Sanyo/okayama_sanyo2_H.csv';
      $files[4] = 'csv/JRW_Sanyo/okayama_uno.csv';
      $files[5] = 'csv/JRW_Sanyo/okayama_tsuyama_H.csv';
      $files[1] = 'csv/JRW_Sanyo/okayama_hakubi_H.csv';
      $files[3] = 'csv/JRW_Sanyo/okayama_sanyo2_H.csv';
      $files[6] = 'csv/JRW_Sanyo/okayama_kibi_H.csv';
    } else {
      $files[0] = 'csv/JRW_Sanyo/okayama_sanyo1.csv';
      $files[2] = 'csv/JRW_Sanyo/okayama_sanyo2.csv';
      $files[4] = 'csv/JRW_Sanyo/okayama_uno.csv';
      $files[5] = 'csv/JRW_Sanyo/okayama_tsuyama.csv';
      $files[1] = 'csv/JRW_Sanyo/okayama_hakubi.csv';
      $files[3] = 'csv/JRW_Sanyo/okayama_sanyo2.csv';
      $files[6] = 'csv/JRW_Sanyo/okayama_kibi.csv';
    }
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
    $files[0] = 'csv/JRW_Sanyo/iwakuni1.csv';
    $files[1] = 'csv/JRW_Sanyo/iwakuni1.csv';
    if ($holidayflag == 0) {
      $files[2] = 'csv/JRW_Sanyo/iwakuni3.csv';
      $files[3] = 'csv/JRW_Sanyo/iwakuni4.csv';
    } else {
      $files[2] = 'csv/JRW_Sanyo/iwakuni3_H.csv';
      $files[3] = 'csv/JRW_Sanyo/iwakuni4_H.csv';
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
    $files[2] = 'csv/JRW_Sanyo/tokuyama1.csv';
    $files[3] = 'csv/JRW_Sanyo/tokuyama2.csv';
    $files[4] = 'csv/JRW_Sanyo/tokuyama3.csv';
    $tablenum = 5;
    $tableStrange = 1;
    $JRShinkansenflag = 1;
    $tablenums = [3, 3, 2, 2, 2];
    $station = '徳山駅';
    $column = 5;
  } else if (Inisset('shimonoseki')) {
    $files[0] = 'csv/JRW_Sanyo/shimonoseki1.csv';
    $files[1] = 'csv/JRW_Sanyo/shimonoseki2.csv';
    $files[2] = 'csv/JRW_Sanyo/shimonoseki3.csv';
    $tablenum = 3;
    $OrderNum = 2;
    $column = 3;
  } else if (Inisset('itozaki')) {
    $files[0] = 'csv/JRW_Sanyo/itozaki1.csv';
    $files[1] = 'csv/JRW_Sanyo/itozaki2.csv';
    $tablenum = 2;
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRW_Sanyo/itozaki1_H.csv';
      $files[1] = 'csv/JRW_Sanyo/itozaki2_H.csv';
    }
    $OrderNum = 2;
  } else if (Inisset('mihara')) {
    $files[0] = 'csv/JRW_Sanyo/mihara1.csv';
    $files[1] = 'csv/JRW_Sanyo/mihara2.csv';
    $files[2] = 'csv/JRW_Sanyo/mihara3.csv';
    $tablenum = 3;
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRW_Sanyo/mihara1_H.csv';
      $files[1] = 'csv/JRW_Sanyo/mihara2_H.csv';
      $files[2] = 'csv/JRW_Sanyo/mihara3_H.csv';
    }
  }
}
