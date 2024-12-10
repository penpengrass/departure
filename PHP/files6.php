<?php
require('function1.php');
$startstation = 'shinjuku';
if (isset($_POST['staselect6'])) {
  $test1 = $_POST['staselect6'];
  if ($test1 == $startstation) {
    header('Location: ../index6.php');
    exit();
  }else if($test1=='chiba'){
    header('Location: ../index6_Chiba.php');
  }else if($test1=='shinagawa'){
    header('Location: ../index6_U.php?station=shinagawa');
  }else if($test1=='ueno'){
    header('Location: ../index6_U.php?station=ueno');
  } else if($test1=='tokyo'){
    header('Location: ../index6_U.php');
  } 
  else {
    header('Location: ../index6.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  $column = 2;
  $OrderNum = 3;
  if (Inisset('matsumoto')) {
    $files[0] = 'csv/JRNagano/matsumoto1.csv';
    $files[1] = 'csv/JRNagano/matsumoto1.csv';
    $files[2] = 'csv/JRNagano/matsumoto2.csv';
    $files[3] = 'csv/JRNagano/matsumoto3.csv';
    $station = '松本駅';
    $tablenum = 4;
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRNagano/matsumoto1_H.csv';
      $files[1] = 'csv/JRNagano/matsumoto1_H.csv';
    }
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
  } else if (Inisset('akabane')) {
    $files[0] = 'csv/JRE/akabane_isogo.csv';
    $files[1] = 'csv/JRE/akabane_kawaguchi.csv';
    $files[2] = 'csv/JRE/akabane_ueno.csv';
    $files[3] = 'csv/JRE/akabane_zushi.csv';
    $files[4] = 'csv/JRE/akabane_takasaki.csv';
    $files[5] = 'csv/JRE/akabane_utsunomiya.csv';
    $files[6] = 'csv/JRE/akabane_shinkiba.csv';
    $files[7] = 'csv/JRE/akabane_kawagoe.csv';
    $files[8] = 'csv/JRE/akabane_urawa.csv';
    $files[9] = 'csv/JRE/akabane_urawa.csv';
    $tablenum = 8;
    $OrderNum = 2;
    $column=4;
    $station = '赤羽駅';
  }else if (Inisset('tokyo')) {
    $files[0] = 'csv/JRE/Tokyo1.csv';
    $files[1] = 'csv/JRE/Tokyo2.csv';
    $tablenum = 2;
    $OrderNum = 6;
    $station='東京駅';
  }else if (Inisset('shinagawa')) {
    $files[0] = 'csv/JRE/shinagawa1.csv';
    $files[1] = 'csv/JRE/shinagawa2.csv';
    $files[2] = 'csv/JRE/shinagawa3.csv';
    $files[3] = 'csv/JRE/shinagawa4.csv';
    $tablenum = 4;
    $OrderNum = 5;
    $tableStrange = 1;
    $tablenums = [5, 5, 2, 2];
    $station='品川駅';
  }else if (Inisset('ueno')) {
      $files[0] = 'csv/JRE/ueno1.csv';
      $files[1] = 'csv/JRE/ueno2.csv';
      $files[2] = 'csv/JRE/ueno3.csv';
      $files[3] = 'csv/JRE/ueno4.csv';
      $files[4] = 'csv/JRE/ueno4.csv';
      $tablenum = 5;
      $OrderNum = 6;
      $station='上野駅';
  }else if(Inisset('shinjuku')){
    $files[0] = 'csv/JRE/shinjuku_mitaka.csv';
    $files[1] = 'csv/JRE/shinjuku_chiba.csv';
    $files[2] = 'csv/JRE/shinjuku_takao.csv';
    $files[3] = 'csv/JRE/shinjuku_tokyo.csv';
    $files[4] = 'csv/JRE/shinjuku_takao.csv';
    $files[5] = 'csv/JRE/shinjuku_narita.csv';
    $files[6] = 'csv/JRE/shinjuku_musashi.csv';
    $files[7] = 'csv/JRE/shinjuku_takasaki.csv';
    $files[8] = 'csv/JRE/shinjuku_shinkiba.csv';
    $files[9] = 'csv/JRE/shinjuku_odawara.csv';
    $tablenum = 10;
    $OrderNum = 2;
    $column=6;
    $station = '新宿駅';
  }else if(Inisset('nagano')){
    $files[0] = 'csv/JRNagano/nagano1.csv';
    $files[1] = 'csv/JRNagano/nagano2.csv';
    $files[2] = 'csv/JRNagano/nagano2.csv';
    $station = '長野駅';
    $tablenum = 3;
    $OrderNum = 3;
    $column = 2;
    $stationnumber = 1;
    if ($holidayflag == 1) {
      $files[0] == 'csv/JRNagano/nagano1_H.csv';
      $files[1] = 'csv/JRNagano/nagano2_H.csv';
      $files[2] = 'csv/JRNagano/nagano2_H.csv';
    }
  }
}
if ($files[0] == 'csv/JRNagano/nagano1.csv') {
  $files[1] = 'csv/JRNagano/nagano2.csv';
  $files[2] = 'csv/JRNagano/nagano2.csv';
  $station = '長野駅';
  $tablenum = 3;
  $stationnumber = 1;
  if ($holidayflag == 1) {
    $files[0] == 'csv/JRNagano/nagano1_H.csv';
    $files[1] = 'csv/JRNagano/nagano2_H.csv';
    $files[2] = 'csv/JRNagano/nagano2_H.csv';
  }
}
