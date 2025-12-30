<?php
require('function1.php');
$startstation = 'kokura';
$column = 3;
if (isset($_POST['staselect10'])) {
    $test1 = $_POST['staselect10'];
    if ($test1 == $startstation) {
        header('Location: ../index10.php');
        exit();
    } else if ($test1 == 'hakata') {
        header("Location: ../index10_H.php");
        exit();
    } else {
        header('Location: ../index10.php?station=' . $test1);
        exit();
    }
}
$JRShinkansenflag = 0;
if (isset($_GET['station'])) {
    if (Inisset('kokura')) {
        $files[0] = 'csv/JRK/kokura1.csv';
        $files[1] = 'csv/JRK/kokura2.csv';
        $files[2] = 'csv/JRK/kokura3.csv';
        $tablenum = 3;
        $OrderNum = 3;
        $column = 3;
    } else if (Inisset('tosu')) {
        $files[0] = 'csv/JRK/tosu1.csv';
        $files[1] = 'csv/JRK/tosu1.csv';
        $files[2] = 'csv/JRK/tosu2.csv';
        $files[3] = 'csv/JRK/tosu2.csv';
        $files[4] = 'csv/JRK/tosu3.csv';
        $files[5] = 'csv/JRK/tosu3.csv';
        $tablenum = 6;
        $column = 6;
        $OrderNum = 2;
        $station = '鳥栖駅';
        $tableConnectFlag = 1;
    } else if (Inisset('nagasaki')) {
        $files[0] = 'csv/JRK/nagasaki1.csv';
        $files[1] = 'csv/JRK/nagasaki2.csv';
        $files[2] = 'csv/JRK/nagasaki2.csv';
        $nishikyushuPlus = array(
            '2026-01-02',
            '2026-01-03',
            '2026-01-04',
            '2026-01-05',
            '2026-01-31'
            //西九州新幹線の臨時列車の運転日
        );
        if (($holidayflag == 1 && $month_now != 1) || (in_array($twoHoursAgoDate, $nishikyushuPlus))) {
            $files[0] = 'csv/JRK/nagasaki1_H.csv';
            $holidayflag = 2;
        }
        $JRShinkansenflag = 2;
        $tablenum = 3;
        $station = '長崎駅';
        $OrderNum = 2;
    }
}
