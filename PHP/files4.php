<?php
$JRShinkansenflag = 0;
if (isset($_GET['station']) && $_GET['station'] == 'hiroshima') {
  if ($holidayflag == 0) {
    $files[0] = 'csv/JRW/SanyoArea/hiroshima1.csv';
  } else {
    $files[0] = 'csv/JRW/SanyoArea/hiroshima1_H.csv';
  }
} else if (isset($_GET['station']) && $_GET['station'] == 'himeji') {
  $files[0] = 'csv/JRW/himeji1.csv';
} else if (isset($_GET['station']) && $_GET['station'] == 'maibara') {
  $files[0] = 'csv/JRW/maibara1.csv';
} else if (isset($_GET['station']) && $_GET['station'] == 'okayama') {
  $files[0] = 'csv/JRW/SanyoArea/okayama_sanyo1.csv';
} else if (isset($_POST["stasele"])) {
  $files[0] = $_POST["stasele"];
}

if ($files[0] == 'csv/JRW/JRS1.csv') {
  $files[1] = 'csv/JRW/JRS2.csv';
  if ($holidayflag == 1) {
    $files[0] == 'csv/JRW/JRS1_H.csv';
    $files[1] == 'csv/JRW/JRS2_H.csv';
  }
} else if ($files[0] == 'csv/JRW/SanyoArea/hiroshima1.csv' || $files[0] == 'csv/JRW/SanyoArea/hiroshima1_H.csv') {
  if ($files[0] == 'csv/JRW/SanyoArea/hiroshima1.csv') {
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
  if ($holidayflag == 1) {
    $files[0] = 'csv/JRW/SanyoArea/hiroshima1_H.csv';
    $files[1] = 'csv/JRW/SanyoArea/hiroshima2_H.csv';
    $files[2] = 'csv/JRW/SanyoArea/hiroshima3_H.csv';
    $files[3] = 'csv/JRW/SanyoArea/hiroshima4_H.csv';
    $files[4] = 'csv/JRW/SanyoArea/hiroshima5_H.csv';
  }
} else if ($files[0] == 'csv/JRW/SanyoArea/itozaki1.csv') {
  $files[1] = 'csv/JRW/SanyoArea/itozaki2.csv';
  $tablenum = 2;
} else if ($files[0] == 'csv/JRW/tennoji1.csv') {
  $files[1] = 'csv/JRW/tennoji2.csv';
  $tablenum = 2;
  $OrderNum = 4;
  $station = '天王寺駅';
  header("Location: index4_T.php");
  exit();
} else if ($files[0] == 'csv/JRW_S/himeji_S1.csv') {
  $files[1] = 'csv/JRW_S/himeji_S2.csv';
  $files[2] = 'csv/JRW/himeji1.csv';
  $files[3] = 'csv/JRW/himeji3.csv';
  $files[4] = 'csv/JRW/himeji4.csv';
  $files[5] = 'csv/JRW/himeji2.csv';
  $tablenum = 6;
  $JRShinkansenflag = 1;
} else if ($files[0] == 'csv/JRW/niimi1.csv') {
  $files[1] = 'csv/JRW/niimi2.csv';
  $files[2] = 'csv/JRW/niimi2.csv';
  $files[3] = 'csv/JRW/niimi3.csv';
  $OrderNum = 2;
  $tablenum = 4;
  $station = '新見駅';
} else if ($files[0] == 'csv/JRW/SanyoArea/okayama_sanyo1.csv') {
  $files[2] = 'csv/JRW/SanyoArea/okayama_sanyo2.csv';
  $files[4] = 'csv/JRW/SanyoArea/okayama_uno.csv';
  $files[5] = 'csv/JRW/SanyoArea/okayama_tsuyama.csv';
  $files[1] = 'csv/JRW/SanyoArea/okayama_hakubi.csv';
  $files[3] = 'csv/JRW/SanyoArea/okayama_hakubi.csv';
  $files[6] = 'csv/JRW/SanyoArea/okayama_kibi.csv';
  $tablenum = 7;
  $station = '岡山駅';
  $tableStrange = 1;
  $tablenums = [2, 2, 6, 2, 3, 2, 2];
  $undertable = [1, 0, 1, 0, 0, 1, 0];
  $column = 8;
  $tablenums = [2, 3, 2, 2, 6, 2, 2];
} else if ($files[0] == 'csv/JRW/SanyoArea/mihara1.csv') {
  $files[1] = 'csv/JRW/SanyoArea/mihara2.csv';
  $files[2] = 'csv/JRW/SanyoArea/mihara3.csv';
  $tablenum = 3;
} else if ($files[0] == 'csv/JRW/SanyoArea/iwakuni1.csv') {
  $files[1] = 'csv/JRW/SanyoArea/iwakuni3.csv';
  $files[2] = 'csv/JRW/SanyoArea/iwakuni4.csv';
  if ($holidayflag == 1) {
    $files[1] = 'csv/JRW/SanyoArea/iwakuni3_H.csv';
    $files[2] = 'csv/JRW/SanyoArea/iwakuni4_H.csv';
  }
  $tablenum = 3;
  $tableStrange = 1;
  $tablenums = [2, 3, 3];
} else if ($files[0] == 'csv/JRW/maibara1.csv') {
  $files[1] = 'csv/JRW/maibara2.csv';
  $files[2] = 'csv/JRW/maibara3.csv';
  $tablenum = 3;
} else if ($files[0] == 'csv/JRW/SanyoArea/tokuyama1.csv') {
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
} else if ($files[0] == 'csv/JRW/SanyoArea/shimonoseki1.csv') {
  $files[1] = 'csv/JRW/SanyoArea/shimonoseki2.csv';
  $files[2] = 'csv/JRW/SanyoArea/shimonoseki3.csv';
  $tablenum = 3;
  $OrderNum = 2;
  $column = 3;
}
