<?php
if (isset($_GET['station']) && $_GET['station'] == 'atami') {
  $files[0] = 'csv/JRE/atami1.csv';
  $setflag=1;
}else if (isset($_POST["stasele"])) {
  $files[0] = $_POST["stasele"];
  $setflag=1;
}
if ($files[0] == 'csv/JRE/atami1.csv') {
  $files[1] = 'csv/JRE/atami2.csv';
  $files[2] = 'csv/JRE/atami3.csv';
  $tablenum = 3;
  $OrderNum = 2;
  $setflag=1;
}else if ($files[0] == 'csv/JRE/odawara1.csv') {
    $files[1] = 'csv/JRE/odawara2.csv';
    $tablenum = 2;
    $OrderNum = 4;
    $setflag=1;
}else if ($files[0] == 'csv/JRE/utsunomiya1.csv') {
  $files[1] = 'csv/JRE/utsunomiya2.csv';
  $files[2] = 'csv/JRE/utsunomiya3.csv';
  $files[3] = 'csv/JRE/utsunomiya4.csv';
  $tablenum = 4;
  $OrderNum = 3;
  $setflag=1;
}
?>