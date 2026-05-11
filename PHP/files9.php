<?php
require('function1.php');
$startstation = 'takamatsu';
if (isset($_POST['staselect9'])) {
    $test1 = $_POST['staselect9'];
    if ($test1 == $startstation) {
        header('Location: ../index9.php');
        exit();
    } else {
        header('Location: ../index9.php?station=' . $test1);
        exit();
    }
}
if (isset($_GET['station'])) {
    if (Inisset('takamatsu')) {
        $files[0] = 'csv/JRS/takamatsu1.csv';
        $files[1] = 'csv/JRS/takamatsu2.csv';
        $tablenum = 4;
        $OrderNum = 3;
    } else if (Inisset('matsuyama')) {
        $files[0] = 'csv/JRS/matsuyama1.csv';
        $files[1] = 'csv/JRS/matsuyama2.csv';
        $tablenum = 2;
        $OrderNum = 3;
        $station = '松山駅';
    }else if (Inisset('kouchi')) {
        $files[0] = 'csv/JRS/kouchi1.csv';
        $files[1] = 'csv/JRS/kouchi2.csv';
        $tablenum = 2;
        $OrderNum = 3;
        $station = '高知駅';
    }
}
