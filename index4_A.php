<!DOCTYPE html>
<html>

<head>
  <?php

  require_once('PHP/variable.php');
  require_once('PHP/table4.php');
  $files = array();
  $files[0] = 'csv/JRW/osaka1.csv';
  $files[1] = 'csv/JRW/osaka2.csv';
  $files[5] = 'csv/JRW/osaka1.csv';
  $files[2] = 'csv/JRW/osaka3.csv';
  $files[3] = 'csv/JRW/osaka4.csv';
  $files[4] = 'csv/JRW/osaka5.csv';
  $files[6] = 'csv/JRW/osaka1.csv';
  $files[7] = 'csv/JRW/osaka1.csv';
  $files[8] = 'csv/JRW/osaka1.csv';
  if ($holidayflag == 1) {
    $files[0] = 'csv/JRW/osaka1_H.csv';
    $files[1] = 'csv/JRW/osaka2_H.csv';
    $files[2] = 'csv/JRW/osaka3_H.csv';
    $files[3] = 'csv/JRW/osaka4_H.csv';
    $files[4] = 'csv/JRW/osaka5_H.csv';
    $files[5] = 'csv/JRW/osaka1_H.csv';
    $files[6] = 'csv/JRW/osaka1_H.csv';
    $files[7] = 'csv/JRW/osaka1_H.csv';
    $files[8] = 'csv/JRW/osaka1_H.csv';
  }
  $station = '大阪駅';
  $tablenum = 5;
  $OrderNum = 4;
  require('PHP/select4.php');
  require('getCSV.php');
  ?>
  <title>JR西日本駅発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/banner.css">
  <link rel="stylesheet" href="css/styleJRW_A.css">
  <?php
  if ($station == '岡山駅') {
    print('
    <link rel="stylesheet" href="css/styleJRW_okayama.css">
    ');
  }
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
  <script type="text/javascript" src="js/module/connectTable.js"></script>
  <script type="text/javascript" src="js/detailStopData/JRdetail.js"></script>
  <script type="text/javascript" src="js/stationset4.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->
  <?php JRWStaSele('駅変更');
  ?>
  <form action="select.php" method="POST" id="selectstation">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <?php
    SelectCompany('./menu.php', 'メニューへ移動');
    ?>
    <!--<button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>-->
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index4_S2.php'">山陽新幹線主要駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=matsumoto'">松本駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php?station=ogaki'">大垣駅へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    $Tstart = 1;
    if ($JRShinkansenflag == 1) {
      for ($i = 1; $i <= 2; $i++) {
        JRWSTable($i, $tablenums, $column);
      }
      $Tstart = 3;
    }
    //表の数
    for ($i = $Tstart; $i <= $tablenum; $i++) {
      print('
 <table id="TTable' . $i . '">');
      //for($k=1;$k<3;$k++){
      print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="15%" id="HType' . $i . '">種別</th>
      <th width="35%" id="HName' . $i . '">列車名</th>
      <th width="15%" id="HTime' . $i . '">時刻</th>
      <th width="25%" id="HDes' . $i . '">行先</th>
      <th width="10%" class="CNum" id="HNum' . $i . '">番線</th>
    </tr>
  ');
      //n番目に発車する列車までを表示
      for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
        print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu" id="TType' . $i . $j . '"><span class="Wshubetu" id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
      }
      print('
        </table>
');
      if ($i % $column == 0) {
        print('
        </tableline>
  <tableline id="tableline' . $i . '">');
      }
    }
    ?>
  </tableline>
  <p id="supplement">実際とはレイアウトが少々異なる 特急列車の表示や番線は不正確<br></p>
  <h1 class="Cheader">注釈</h1>
  <li>糸崎駅 岩国駅 下関駅においては番線の表示は実際と異なる</li>
  <li>本来山陽地区では種別の横に両数がある</li>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/module/timeInfoSet.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/module/displaySwitch.js"></script>
  <script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
  <script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
  <script type="text/javascript" src="js/module/displayEdit4.js"></script>
  <script type="text/javascript" src="js/Tforshow4_A.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
  <script type="text/javascript" src="js/LastShow.js"></script>
</body>

</html>