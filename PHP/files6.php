<?php
require('function1.php');
$startstation = 'nagano';
if (isset($_POST['staselect6'])) {
  $test1 = $_POST['staselect6'];
  if ($test1 == $startstation) {
    header('Location: ../index6.php');
    exit();
  } else {
    header('Location: ../index6.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  if (Inisset('matsumoto')) {
    $files[0] = 'csv/JRE/matsumoto1.csv';
    $files[1] = 'csv/JRE/matsumoto1.csv';
    $files[2] = 'csv/JRE/matsumoto2.csv';
    $files[3] = 'csv/JRE/matsumoto3.csv';
    $station = '松本駅';
    $tablenum = 4;
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRE/matsumoto1_H.csv';
      $files[1] = 'csv/JRE/matsumoto1_H.csv';
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
  }
}
if ($files[0] == 'csv/JRE/nagano1.csv') {
  $files[1] = 'csv/JRE/nagano2.csv';
  $files[2] = 'csv/JRE/nagano2.csv';
  $station = '長野駅';
  $tablenum = 3;
  $stationnumber = 1;
  if ($holidayflag == 1) {
    $files[0] == 'csv/JRE/nagano1_H.csv';
    $files[1] = 'csv/JRE/nagano2_H.csv';
    $files[2] = 'csv/JRE/nagano2_H.csv';
  }
}
