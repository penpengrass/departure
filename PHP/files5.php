<?php
require('function1.php');
$startstation = 'nikotama';
if (isset($_POST['staselect5'])) {
  $test1 = $_POST['staselect5'];
  if ($test1 == $startstation) {
    header('Location: ../index5.php');
    exit();
  } else {
    header('Location: ../index5.php?station=' . $test1);
    exit();
  }
}
if (isset($_GET['station'])) {
  if (Inisset('nikotama')) {
    $files[0] = 'csv/Tokyu/nikotama1.csv';
    $files[1] = 'csv/Tokyu/nikotama1.csv';
    $files[2] = 'csv/Tokyu/nikotama2.csv';
    $files[3] = 'csv/Tokyu/nikotama3.csv';
    $tablenum = 4;
  } else if (Inisset('kosugi')) {
    $files[0] = 'csv/Tokyu/ToMu1.csv';
    $files[1] = 'csv/Tokyu/ToMu2.csv';
    $files[2] = 'csv/Tokyu/ToMu3.csv';
    $files[3] = 'csv/Tokyu/ToMu4.csv';
    $tablenum = 4;
  }
}

