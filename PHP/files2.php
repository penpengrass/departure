<?php
require('function1.php');
$startstation = 'tsuruhashi';
if (isset($_POST['staselect2'])) {
    $test1 = $_POST['staselect2'];
    if ($test1 == $startstation) {
        header('Location: ../index2.php');
        exit();
    } else {
        header('Location: ../index2.php?station=' . $test1);
        exit();
    }
}

if (isset($_GET['station'])) {
    if (Inisset('kyoto')) {
        $files[0] = 'csv/Kintetsu/KiKyo.csv';
        $tablenum = 1;
        $OrderNum = 6;
        $station = '京都駅';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/KiKyo_H.csv';
        }
    } else if (Inisset('nara')) {
        $files[0] = 'csv/Kintetsu/nara1.csv';
        $files[1] = 'csv/Kintetsu/nara1.csv';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/nara1_H.csv';
            $files[1] = 'csv/Kintetsu/nara1_H.csv';
        }
        $tablenum = 2;
        $OrderNum = 3;
        $station = '奈良駅';
    } else if (Inisset('nagoya')) {
        $files[0] = 'csv/Kintetsu/kin_nagoya.csv';
        $files[1] = 'csv/Kintetsu/kin_nagoya.csv';
        $tablenum = 2;
        $OrderNum = 3;
        $station = '名古屋駅';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/kin_nagoya_H.csv';
            $files[1] = 'csv/Kintetsu/kin_nagoya_H.csv';
        }
    }
}
