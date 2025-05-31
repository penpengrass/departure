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
        $files[0] = 'csv/Kintetsu/Kyoto.csv';
        $tablenum = 1;
        $OrderNum = 6;
        $station = '京都駅';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/Kyoto_H.csv';
        }
    } else if (Inisset('nara')) {
        $files[0] = 'csv/Kintetsu/Nara.csv';
        $files[1] = 'csv/Kintetsu/Nara.csv';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/Nara_H.csv';
            $files[1] = 'csv/Kintetsu/Nara_H.csv';
        }
        $tablenum = 2;
        $OrderNum = 3;
        $station = '奈良駅';
    } else if (Inisset('nagoya')) {
        $files[0] = 'csv/Kintetsu/Nagoya.csv';
        $files[1] = 'csv/Kintetsu/Nagoya.csv';
        $tablenum = 2;
        $OrderNum = 3;
        $station = '名古屋駅';
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/Nagoya_H.csv';
            $files[1] = 'csv/Kintetsu/Nagoya_H.csv';
        }
    } else if (Inisset('nakagawa')) {
        $files[0] = 'csv/Kintetsu/nakagawa1.csv';
        $files[1] = 'csv/Kintetsu/nakagawa2.csv';
        $files[2] = 'csv/Kintetsu/nakagawa3.csv';
        $tablenum = 3;
        $OrderNum = 3;
        $column = 3;
        if ($holidayflag == 1) {
            $files[0] = 'csv/Kintetsu/nakagawa1_H.csv';
            $files[1] = 'csv/Kintetsu/nakagawa2_H.csv';
            $files[2] = 'csv/Kintetsu/nakagawa3_H.csv';
        }
    }
}
