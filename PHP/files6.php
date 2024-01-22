<?php
if ($files[0] == 'csv/JRE/nagano1.csv') {
  $files[1] = 'csv/JRE/nagano2.csv';
  $files[2] = 'csv/JRE/nagano2.csv';
  $station = '長野駅';
  $tablenum = 3;
  $stationnumber = 1;
  if($holidayflag==1){
    $files[0] == 'csv/JRE/nagano1_H.csv';
    $files[1] = 'csv/JRE/nagano2_H.csv';
  $files[2] = 'csv/JRE/nagano2_H.csv';
  }
} else if ($files[0] == 'csv/JRE/matsumoto1.csv') {
  $files[1] = 'csv/JRE/matsumoto1.csv';
  $files[2] = 'csv/JRE/matsumoto2.csv';
  $files[3] = 'csv/JRE/matsumoto3.csv';
  $station = '松本駅';
  $tablenum = 4;
}
