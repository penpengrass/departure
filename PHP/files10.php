<?php
require('function1.php');
$startstation = 'kokura';
if (isset($_POST['staselect10'])) {
    $test1 = $_POST['staselect10'];
    if ($test1 == $startstation) {
        header('Location: ../index10.php');
        exit();
    }else if ($test1 == 'hakata') {
        header("Location: ../index10_H.php");
        exit(); 
    }else {
        header('Location: ../index10.php?station=' . $test1);
        exit();
    }
}
if (isset($_GET['station'])) {
    if (Inisset('kokura')) {
        $files[0] = 'csv/JRK/kokura1.csv';
        $files[1] = 'csv/JRK/kokura2.csv';
        $files[2] = 'csv/JRK/kokura3.csv';
        $tablenum = 3;
        $OrderNum = 3;
    }
}
