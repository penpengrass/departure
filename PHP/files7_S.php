<?php
require('function1.php');
$startstation = 'hamamatsu';
if (isset($_POST['staselect7_S'])) {
  $test1 = $_POST['staselect7_S'];
  if ($test1 == $startstation) {
    header('Location: ../index7_S1.php');
    exit();
  } else {
    header('Location: ../index7_S1.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  if (Inisset('hamamatsu')) {
    $files[0] = 'csv/JRC_S/hamamatsu1.csv';
    $files[1] = 'csv/JRC_S/hamamatsu2.csv';
  } else if (Inisset('toyohashi')) {
    $files[0] = 'csv/JRC_S/toyohashi1.csv';
    $files[1] = 'csv/JRC_S/toyohashi2.csv';
    $station='豊橋駅';
  }
}
