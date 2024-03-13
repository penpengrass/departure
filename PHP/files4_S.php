<?php
require('function1.php');
if (isset($_POST['staselect4'])) {
    $test1 = $_POST['staselect4'];
    if ($test1 == $startstation) {
        header('Location: ../index4_S2.php');
        exit();
    } else {
        header('Location: ../index4_S2.php?station=' . $test1);
        exit();
    }
}
$detaillength = 0;
if (isset($_GET['station'])) {
    if (Inisset('hiroshima')) {
        $files[0] = 'csv/JRW_S/hiroshima_S1.csv';
        $files[1] = 'csv/JRW_S/hiroshima_S2.csv';
        $detailflag = 0;
    } else if (Inisset('hakata')) {
        $files[0] = 'csv/JRW_S/hakata1.csv';
        $files[1] = 'csv/JRW_S/hakata2.csv';
        $detailflag = 0;
    }
}
