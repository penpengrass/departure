<?php
if (isset($_GET['station']) && $_GET['station'] == 'ogaki') {
  $files[0] = 'csv/JRC/ogaki1.csv';
} else if (isset($_GET['station']) && $_GET['station'] == 'toyohashi') {
  $files[0] = 'csv/JRC/toyohashi1.csv';
} else if (isset($_GET['station']) && $_GET['station'] == 'gifu') {
  $files[0] = 'csv/JRC/gifu1.csv';
}else if (isset($_GET['station']) && $_GET['station'] == 'numadu') {
    $files[0] = 'csv/JRC/numazu1.csv';
} else if (isset($_POST["stasele"])) {
  $files[0] = $_POST["stasele"];
}

if ($files[0] == 'csv/JRC/hamamatsu1.csv') {
  $files[1] = 'csv/JRC/hamamatsu2.csv';
} else if ($files[0] == 'csv/JRC/shizuoka1.csv') {
  $files[1] = 'csv/JRC/shizuoka2.csv';
} else if ($files[0] == 'csv/JRC/numazu1.csv') {
  $files[1] = 'csv/JRC/numazu2.csv';
  $files[2] = 'csv/JRC/numazu3.csv';
  $tablenum = 3;
} else if ($files[0] == 'csv/JRC/toyohashi1.csv') {
  $files[1] = 'csv/JRC/toyohashi2.csv';
  $files[2] = 'csv/JRC/toyohashi3.csv';
  $files[3] = 'csv/JRC/toyohashi4.csv';
  $tablenum = 4;
} else if ($files[0] == 'csv/JRC/gifu1.csv') {
  $files[1] = 'csv/JRC/gifu2.csv';
  $files[2] = 'csv/JRC/gifu3.csv';
  $tablenum = 3;
} else if ($files[0] == 'csv/JRC/ogaki1.csv') {
  $files[1] = 'csv/JRC/ogaki2.csv';
  $tablenum = 2;
}
