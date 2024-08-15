<?php
require('function1.php');
$startstation = 'hamamatsu';
if (isset($_POST['staselect7'])) {
  $test1 = $_POST['staselect7'];
  if ($test1 == $startstation) {
    header('Location: ../index7.php');
    exit();
  } else if ($test1 == 'nagoya') {
    header("Location: ../index7_T.php");
    exit();
  } else {
    header('Location: ../index7.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  if (Inisset('hamamatsu')) {
    $files[0] = 'csv/JRC/hamamatsu1.csv';
    $files[1] = 'csv/JRC/hamamatsu2.csv';
  } else if (Inisset('toyohashi')) {
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRC/toyohashi1_H.csv';
      $files[1] = 'csv/JRC/toyohashi2_H.csv';
      $files[2] = 'csv/JRC/toyohashi3_H.csv';
      $files[3] = 'csv/JRC/toyohashi4_H.csv';
    }else{
    $files[0] = 'csv/JRC/toyohashi1.csv';
    $files[1] = 'csv/JRC/toyohashi2.csv';
    $files[2] = 'csv/JRC/toyohashi3.csv';
    $files[3] = 'csv/JRC/toyohashi4.csv';
    }
    $tablenum = 4;
    $holiday_able=1;
  } else if (Inisset('shizuoka')) {
    $files[0] = 'csv/JRC/shizuoka1.csv';
    $files[1] = 'csv/JRC/shizuoka2.csv';
  } else if (Inisset('numazu')) {
    $files[0] = 'csv/JRC/numazu1.csv';
    $files[1] = 'csv/JRC/numazu2.csv';
    $files[2] = 'csv/JRC/numazu3.csv';
    $tablenum = 3;
  } else if (Inisset('gifu')) {
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRC/gifu1_H.csv';
      $files[1] = 'csv/JRC/gifu2_H.csv';
      $files[2] = 'csv/JRC/gifu3_H.csv';
    }else{
    $files[0] = 'csv/JRC/gifu1.csv';
    $files[1] = 'csv/JRC/gifu2.csv';
    $files[2] = 'csv/JRC/gifu3.csv';
    }
    $tablenum = 3;
    $holiday_able=1;
  } else if (Inisset('ogaki')) {
    if ($holidayflag == 1) {
      $files[0] = 'csv/JRC/ogaki1_H.csv';
      $files[1] = 'csv/JRC/ogaki2_H.csv';
    }else{
      $files[0] = 'csv/JRC/ogaki1.csv';
      $files[1] = 'csv/JRC/ogaki2.csv';
    }
    $holiday_able=1;
  }
}
