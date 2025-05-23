<!DOCTYPE html>
<html>

<head>
  <title>JR東日本都心部発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleATOS.css">
  <link rel="stylesheet" href="css/banner.css">
  <!--タブのアイコンを変えたいが、公式HPと混同しそうなので保留-->
  <!--<link rel="icon" href="PNG/favicon.ico" id="favicon">
  <link rel="apple-touch-icon" sizes="180x180" href="PNG/apple-touch-icon-180x180.png">
  <link rel="icon" href="PNG/JR東日本マーク.png" id="favicon">-->
  <?php
  $files = array();
  require_once('PHP/variable.php');
  $files[0] = 'csv/JRE/Musashi_Tokyo.csv';
  $files[2] = 'csv/JRE/Musashi_Shinjuku.csv';
  $files[3] = 'csv/JRE/Musashi_Zushi.csv';
  $files[1] = 'csv/JRE/Musashi_shonan.csv';
  $files[4]='csv/JRE/Musashi_Ebina.csv';
  require('PHP/files3.php');
  require('PHP/select3.php');
  require('PHP/table3.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset3.js"></script>
  <script type="text/javascript" src="js/TTconnect.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->
  <?php
  JRATOSStaSele('駅変更');
  JRATOS_SStaSele('駅変更');
  ?>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
    <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=yokohama'">LCD横浜駅へ移動</button>
    <button type="button" onclick="location.href='./index6_S.php'">新幹線東京駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php?station=numazu'">沼津駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      JRATOSTable($i,$tablenums);
    }
    ?>
  </tableline>
  <p id="supplement"></p>
  <h1 class="Cheader">案内</h1>
  <li>東海道線と横須賀線は熱海・久里浜側が1号車, 4･5号車がグリーン車</li>
  <li>増結編成は東海道線が高崎・宇都宮側, 横須賀線は逗子・久里浜側(増1~増4)</li>
  <?php
  if ($station == '熱海駅') {
    print('
    <li>伊東線:6両・・・8000系(元東急) 
    4両・・・3000系(元JR209系)
    7両・・・Resort21　ただし，7両が6両に変更になる日があります</li>
    ');
  }
  ?>
</body>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/altershow.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/functionDetail_B.js"></script>
  <script type="text/javascript" src="js/functionE2.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
  <script type="text/javascript" src="js/Tforshow3.js"></script>
  <script type="text/javascript" src="js/LastShow.js"></script>
</html>