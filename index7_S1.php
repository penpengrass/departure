<!DOCTYPE html>
<html>

<head>
  <?php
  require_once('PHP/variable.php');
  $files = array();
  $files[0] = 'csv/JRC_S/hamamatsu1.csv';
  $files[1] = 'csv/JRC_S/hamamatsu2.csv';
  $files[2] = 'csv/JRC/hamamatsu1.csv';
  $files[3] = 'csv/JRC/hamamatsu2.csv';
  if (isset($_POST["stasele"])) {
    $files[0] = $_POST["stasele"];
  }
  $tablenum=2;
  $OrderNum=3;
  require('PHP/table7.php');
  require('PHP/files7_S.php');
  require('getCSV.php');
  ?>
  <title>JR東海駅発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleJRC_S1.css">
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/stationset7_S.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->

  <form action="PHP/files7_S.php" method="POST" id="selectstation">
    <select name="staselect7_S">
      <option value="hamamatsu">浜松駅</option>
      <option value="toyohashi">豊橋駅</option>
    </select>
    <button type="submit" class="henko" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST" id="selectstation">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ</button>
    <button type="button" onclick="location.href='./index2.php'">近鉄へ</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ</button>
    <button type="button" onclick="location.href='./index4.php'">JR西日本へ</button>
    <!--<button type="button" onclick="location.href='./index4.php'">在来線へ</button>-->
    <button type="button" onclick="location.href='./index4_S2.php'">山陽新幹線へ</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ</button>
    <button type="button" onclick="location.href='./index6.php'">長野駅へ</button>
    <button type="button" onclick="JRC_station(station)">在来線へ</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //表の数
    for ($i = 1; $i <= 2; $i++) {
      JRCSTable($i,$tablenums,$column);
    }
    //在来線の表の数
    /*for ($i = 3; $i <= $tablenum; $i++) {
      JRCZTable($i,$tablenums,$column);
      }*/
    ?>
  </tableline>
  <p id="supplement">臨時列車の有無や号数は不正確</p>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/altershow.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/Tforshow7_S.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
</body>

</html>