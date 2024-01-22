<!DOCTYPE html>
<html>

<head>
  <title>JR東海発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleC.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files[0] = 'csv/JRC/hamamatsu1.csv';
  $files[1] = 'csv/JRC/hamamatsu2.csv';
  require_once('PHP/variable.php');
  require_once('PHP/table7.php');
  require_once('PHP/files7.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/stationset7.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">浜松駅</p>
  </div>
  <!--駅選択部分-->
  <form action="index7.php" method="POST">
    <select name="stasele">
      <option value="csv/JRC/numazu1.csv">沼津駅</option>
      <option value="csv/JRC/shizuoka1.csv">静岡駅</option>
      <option value="csv/JRC/hamamatsu1.csv">浜松駅</option>
      <option value="csv/JRC/toyohashi1.csv">豊橋駅</option>
      <option value="csv/JRC/gifu1.csv">岐阜駅</option>
      <option value="csv/JRC/ogaki1.csv">大垣駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="submit" name="atami">熱海駅へ移動</button>
    <button type="submit" name="maibara">米原駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php'">長野駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      JRCZTable($i,$tablenums,$column);
    }
    ?>
  </tableline>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/function2.js"></script>
<script type="text/javascript" src="js/Tforshow7.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
</body>

</html>