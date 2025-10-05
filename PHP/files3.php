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
  } else if($test1 == 'akabane'){
    header('Location: ../index6.php?station=akabane');
  }else if($test1 == 'tokyo'){
    header('Location: ../index6_U.php');
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
    if($holidayflag==1){
      $files[0] = 'csv/JRE/odawara1_H.csv';
      $files[1] = 'csv/JRE/odawara2_H.csv';
    }else{
      $files[0] = 'csv/JRE/odawara1.csv';
     $files[1] = 'csv/JRE/odawara2.csv';
    }
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
  }else if (Inisset('kuroiso')) {
    $files[0] = 'csv/JRE/kuroiso1.csv';
    $files[1] = 'csv/JRE/kuroiso2.csv';
    $OrderNum = 2;
  }else if (Inisset('omiya')) {
    $files[0] = 'csv/JRE/omiya_kawagoe.csv';
    $files[1] = 'csv/JRE/omiya_shinkiba.csv';
    $files[2] = 'csv/JRE/omiya_zushi.csv';
    $files[3] = 'csv/JRE/omiya_utsunomiya.csv';
    $files[4] = 'csv/JRE/omiya_takasaki.csv';
    $files[5] = 'csv/JRE/omiya_ueno.csv';
    //$files[6] = 'csv/JRE/omiya_ueno2.csv';
    $files[6] = 'csv/JRE/omiya_kawaguchi.csv';
    $tablenum = 7;
    $OrderNum = 3;
  }
}
