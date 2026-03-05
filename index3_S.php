<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/banner6.css">
  <link rel="stylesheet" href="css/styleATOS_S.css">
  
  <?php
  $files = array();
  $files[0] = 'csv/JRE_S/nagano1.csv';
  $files[1] = 'csv/JRE_S/nagano2.csv';
  require_once('PHP/variable.php');
  $tablenum = 2;
  $OrderNum = 3;
  require('PHP/files3_S.php');
  require('PHP/select3.php');
  require('PHP/table3.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
  <script type="text/javascript" src="js/stationset3_S.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">長野駅</p>
  </div>
  <!--駅選択部分-->
  <?php
  JRATOS_SStaSele('駅変更')
  ?>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php?station=utsunomiya'">宇都宮駅へ移動</button>
    <button type="button" onclick="location.href='./index4_H.php?station=kanazawa'">金沢駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=nagano'">在来線へ移動</button>
    <button type="button" onclick="location.href='./index6_S.php'">東京駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      JRE_STable($i,$tablenums,$detaillength);
    }
    ?>
  </tableline>
  <p id="supplement">号数や臨時列車の有無，停車駅，両数は不正確</p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/detailSimpleEdit.js"></script>
<script type="text/javascript" src="js/module/displayEdit6.js"></script>
<script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
<script type="text/javascript" src="js/module/firstDetailEdit.js"></script>
<script type="text/javascript" src="js/detailStopData/JRHokuShindetailset.js"></script>
<script type="text/javascript" src="js/module/detailMainPut.js"></script>
<script type="text/javascript" src="js/Tforshow3_S.js"></script>
</body>

</html>