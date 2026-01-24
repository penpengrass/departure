<?php
require('function1.php');
if (isset($_POST['staselect3_S'])) {
    $test1 = $_POST['staselect3_S'];
    if ($test1 == $startstation) {
        header('Location: ../index3_S.php');
        exit();
    } else if ($test1 == 'sendai') {
        header('Location: ../index6_S.php?station=sendai');
        exit();
    } else if ($test1 == 'fukushima') {
        header('Location: ../index3_T.php?station=fukushima');
        exit();
    } else {
        header('Location: ../index3_S.php?station=' . $test1);
        exit();
    }
}
if (isset($_POST['staselect6_S'])) {
    $test1 = $_POST['staselect6_S'];
    if ($test1 == $startstation) {
        header('Location: ../index6_S.php');
        exit();
    } else if ($test1 == 'utsunomiya') {
        header('Location: ../index3_S.php?station=utsunomiya');
        exit();
    } else if ($test1 == 'fukushima') {
        header('Location: ../index3_T.php?station=fukushima');
        exit();
    } else {
        header('Location: ../index6_S.php?station=' . $test1);
        exit();
    }
}
$detaillength = 0;
if (isset($_GET['station'])) {
    if (Inisset('nagano')) {
        $files[0] = 'csv/JRE_S/nagano1.csv';
        $files[1] = 'csv/JRE_S/nagano2.csv';
    } else if (Inisset('utsunomiya')) {
        $files[0] = 'csv/JRE_S/utsunomiya1.csv';
        $files[1] = 'csv/JRE_S/utsunomiya2.csv';
    } else if (Inisset('sendai')) {
        $files[0] = 'csv/JRE_S/sendai1.csv';
        $files[1] = 'csv/JRE_S/sendai2.csv';
        $JRShinkansenflag = 1;
        $station = '仙台駅';
    }
}
