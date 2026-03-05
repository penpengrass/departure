<!DOCTYPE html>
<html>

<head>
  <title>JR東日本都心部発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleJRK.css">
  <link rel="stylesheet" href="css/styleJRK_S.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files = array();
  $files[0] = 'csv/JRK/kokura1.csv';
  require_once('PHP/variable.php');
  $files[1] = 'csv/JRK/kokura2.csv';
  $files[2] = 'csv/JRK/kokura3.csv';
  $tablenum = 3;
  $tableConnectFlag = 0;
  $station = '小倉駅';
  require('PHP/table10.php');
  require('PHP/files10.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
  <script type="text/javascript" src="js/stationset10.js"></script>
  <script type="text/javascript" src="js/detailStopData/JRK_S.js"></script>
  <script type="text/javascript" src="js/detailStopData/JRdetail.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->
  <form action="PHP/files10.php" method="POST">
    <select name="staselect10">
      <option value="kokura">小倉駅</option>
      <option value="hakata">博多駅</option>
      <option value="tosu">鳥栖駅</option>
      <option value="nagasaki">長崎駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
    <button type="button" onclick="location.href='./index4.php?station=shimonoseki'">下関駅へ移動</button>
    <button type="button" onclick="location.href='./index4_S2.php?station=hakata'">新幹線博多駅へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=yokohama'">LCD横浜駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php?station=ogaki'">大垣駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //新幹線の表
    $Tstart = 1;
    if ($JRShinkansenflag > 0) {
      for ($i = 1; $i <= 2; $i++) {
        JRKSTable($i, $tablenums, $column);
        if ($JRShinkansenflag == 2) {
          $Tstart -= 1;
          print('</tableline><tableline>');
          break;
        }
      }
      $Tstart += 2;
    }
    //表の数
    for ($i = $Tstart; $i <= $tablenum; $i++) {
      JRKZTable($i, $column, $tablenums, $tableConnectFlag);
      if ($tableConnectFlag == 1) $i++;
    }
    ?>
  </tableline>
  <p id="supplement">番線や号数、両数は不正確</p>
  <p id="guidance"></p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/firstDetailEdit.js"></script>
<script type="text/javascript" src="js/module/detailSimpleEdit.js"></script>
<script type="text/javascript" src="js/module/detailMainPut.js"></script>
<script type="text/javascript" src="js/module/carsEdit.js"></script>
<script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
<script type="text/javascript" src="js/module/detailBannerSwitch.js"></script>
<script type="text/javascript" src="js/Tforshow10.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>

</html>