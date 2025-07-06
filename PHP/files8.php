<?php
require('function1.php');
$startstation = 'sapporo';
if (isset($_POST['staselect8'])) {
    $test1 = $_POST['staselect8'];
    if ($test1 == $startstation) {
        header('Location: ../index8.php');
        exit();
    } else {
        header('Location: ../index8.php?station=' . $test1);
        exit();
    }
}
if (isset($_GET['station'])) {
    if (Inisset('sapporo')) {
        $files[0] = 'csv/JRH/sapporo1.csv';
        $files[1] = 'csv/JRH/sapporo1.csv';
        $files[2] = 'csv/JRH/sapporo2.csv';
        $files[3] = 'csv/JRH/sapporo3.csv';
        $files[4] = 'csv/JRH/sapporo2.csv';
        $files[5] = 'csv/JRH/sapporo5.csv';
        $tablenum = 5;
        $OrderNum = 4;
    } else if (Inisset('hokuto')) {
        $files[0] = 'csv/JRH/shinhokuto1.csv';
        $files[1] = 'csv/JRH/shinhokuto2.csv';
        $files[2] = 'csv/JRH/shinhokuto3.csv';
        $tablenum = 2;
        $tableStrange = 1;
        $tablenums = [2, 3];
        $station = '新函館北斗駅';
    }
}
