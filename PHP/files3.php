<?php
require('function1.php');
$startstation = 'musashikosugi';
if (isset($_POST['staselect3'])) {
  $test1 = $_POST['staselect3'];
  if ($test1 == $startstation) {
    header('Location: ../index3.php');
    exit();
  } else if($test1 == 'shinjuku'){
    header('Location: ../index6.php');
  } else if($test1 == 'tokyo'){
    header('Location: ../index6.php?station=tokyo');
  }else{
    header('Location: ../index3.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  if (Inisset('atami')) {
    $files[0] = 'csv/JRE/atami1.csv';
    $files[1] = 'csv/JRE/atami2.csv';
    $files[2] = 'csv/JRE/atami3.csv';
    if($holidayflag==1){
      $files[0] = 'csv/JRE/atami1_H.csv';
      $files[2] = 'csv/JRE/atami3_H.csv';
    }
    $tablenum = 3;
    $OrderNum = 2;
    $station='熱海駅';
  } else if (Inisset('odawara')) {
    $files[0] = 'csv/JRE/odawara1.csv';
    $files[1] = 'csv/JRE/odawara2.csv';
    $tablenum = 2;
    $OrderNum = 4;
  } else if (Inisset('utsunomiya')) {
    $files[0] = 'csv/JRE/utsunomiya1.csv';
    $files[1] = 'csv/JRE/utsunomiya2.csv';
    $files[2] = 'csv/JRE/utsunomiya3.csv';
    $files[3] = 'csv/JRE/utsunomiya4.csv';
    $tablenum = 4;
    $OrderNum = 3;
  } else if (Inisset('yokohama')) {
    $files[0] = 'csv/JRE/yokohama1.csv';
    $files[1] = 'csv/JRE/yokohama2.csv';
    $files[2] = 'csv/JRE/yokohama3.csv';
    $files[3] = 'csv/JRE/yokohama4.csv';
    $files[4] = 'csv/JRE/yokohama5.csv';
    $files[5] = 'csv/JRE/yokohama6.csv';
    $tablenum = 6;
    $OrderNum = 2;
    $station = '横浜駅';
  }
}
