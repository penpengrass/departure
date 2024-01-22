<?php
session_start();
$stationkey=0;
// ボタンがクリックされた場合
if (isset($_POST['gifu'])) {
    //$_SESSION['station'] = 1;
    $test1='gifu';
    // 別のページにリダイレクト
    header('Location: index7.php?station='.$test1);
    exit();
}
if(isset($_POST['hamamatsu'])){
    $_SESSION['station'] =2;
    //$files[0] = 'csv/JRC/gifu1.csv';
    // 別のページにリダイレクト
    header("Location: index7.php");
    exit();
}
if(isset($_POST['hiroshima'])){
    $test1='hiroshima';
    header('Location: index4.php?station='.$test1);
    exit();
} 
if(isset($_POST['himeji'])){
    $test1='himeji';
    header('Location: index4.php?station='.$test1);
    exit();
} 
if(isset($_POST['okayama'])){
    $test1='okayama';
    header('Location: index4.php?station='.$test1);
    exit();
} 
if(isset($_POST['ogaki'])){
    $test1='ogaki';
    header('Location: index7.php?station='.$test1);
    exit();
} 
if(isset($_POST['numadu'])){
    $test1='numadu';
    header('Location: index7.php?station='.$test1);
    exit();
} 
if(isset($_POST['atami'])){
    $test1='atami';
    header('Location: index3.php?station='.$test1);
    exit();
} 
if(isset($_POST['maibara'])){
    $test1='maibara';
    header('Location: index4.php?station='.$test1);
    exit();
} 
if(isset($_POST['toyohashi'])){
    $test1='toyohashi';
    header('Location: index7.php?station='.$test1);
    exit();
} 
?>