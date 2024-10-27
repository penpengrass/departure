<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleNagano.css">
  <link rel="stylesheet" href="css/styleATOS.css">
  <link rel="stylesheet" href="css/banner6.css">
  <?php
  require_once('PHP/variable.php');
  $files = array();
  $files[0] = 'csv/JRE/Tokyo1.csv';
    $files[1] = 'csv/JRE/Tokyo2.csv';
    $tablenum = 2;
    $OrderNum=6;
    $station = '東京駅';
  require('PHP/files6.php');
  require_once('getCSV.php');
  ?>
  <?php
  print('<link rel="stylesheet" href="css/styleUTL.css">');
  $column=2;
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset6.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">長野駅</p>
  </div>
  <!--駅選択部分-->
  <form action="PHP/files6.php" method="POST">
    <select name="staselect6">
    <option value="shinjuku">新宿駅</option>
      <option value="tokyo">東京駅</option>
      <option value="chiba">千葉駅</option>
      <option value="shinagawa">品川駅</option>
      <option value="yokohama">横浜駅</option>
      <option value="nagano">長野駅</option>
      <option value="matsumoto">松本駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php?station=yokohama'">ATOS横浜駅へ移動</button>
    <button type="button" onclick="location.href='./index3_S.php'">JR東日本新幹線へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6_S.php'">東北新幹線へ移動</button>
    <button type="button" onclick="location.href='./index7.php?station=numazu'">沼津駅へ移動</button>
    <button type="button" onclick="location.href='./index7_T.php'">名古屋駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    $stationnumber = 0;
    for ($i = 1; $i <= 2; $i++) {
      print('
 <table class="CLCDTable" id="TLCDTable' . $i . '">
<caption class="Ctitle" id="Tstation' . $i . '"><p2 id="kn' . $i . '"></p2></caption>
    <tr>
    
      <th width="12%" id="HType' . $i . '">種別</th>
      <th width="10%" id="HName' . $i . '"></th>
      <th width="20%" id="HDep' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '">時刻</th>
      <th width="15%" class="HDes" id="HDes' . $i . '">行先</th>
      <th width="23%" id="HNumber' . $i . '">番線</th>
      
    </tr>');
      for ($j = 1; $j <= $tablenums[$i-1]; $j++) {
        print('
    <tr id="TLine' . $i . $j . '">
      <td class="shubetu" id="TType' . $i . $j . '"><span class="CWType" id="WType' . $i . $j . '"></p2></td>
      <td class="CName" id="TName' . $i . $j . '"><span  class="CWName" id="WName' . $i . $j . '"></span></td>
      <td class="CDep" id="TDep' . $i . $j . '"><span  class="CWDep" id="WDep' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      
    </tr>
    ');
      }
      print('
      </table>
      ');
      if ($i % $column == 0) {
        print('</tableline>
  <tableline>');
      }
    }
      for ($i = 3; $i <= $tablenum; $i++) {
        print('
   <table class="CATOSTable" id="TATOSTable' . $i . '">
  <caption class="Ctitle" id="kn' . $i . '"></caption>
      <tr>
        <th width="10%" id="HType' . $i . '"></th>
        <th width="32%" id="HName' . $i . '"></th>
        <th width="10%" id="HTime' . $i . '"></th>
        <th width="25%" id="HDes' . $i . '">行先</th>
        <th width="10%" id="HCars' . $i . '"></th>
        <th width="8%" class="HrailNumber" id="HrNumber' . $i . '">のりば</th>
        <th width="5%" id="Htopic' . $i . '"></th>
      </tr>
    ');
        for ($j = 1; $j <= $tablenums[$i-1]; $j++) {
          print('
      <tr id="TRow' . $i . $j . '">
      <td class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
        <td id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
        <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
        <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
        <td class="cars" id="TCars' . $i . $j . '"></td>
        <td class="railnumber" id="TNum' . $i . $j . '"></td>
        <td class="topic" id="Ttopic' . $i . $j . '"></td>
      </tr>
      ');
        }
      print('
</table>
');
      if ($i % $column == 0) {
        print('</tableline>
  <tableline>');
      }
    }
    ?>
  </tableline>
  <p id="supplement"></p>
  <?php
  if ($station == '横浜駅') {
    print('
  <h1 class="Cheader">案内</h1>
    <li>東海道線と横須賀線は熱海・久里浜側が1号車, 4･5号車がグリーン車</li>
    <li>増結編成は東海道線が高崎・宇都宮側, 横須賀線は逗子・久里浜側(増1~増4)</li>
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
<script type="text/javascript" src="js/function2.js"></script>
<script type="text/javascript" src="js/functionE2.js"></script>
<script type="text/javascript" src="js/functionCars.js"></script>
<script type="text/javascript" src="js/detailfunction.js"></script>
<script type="text/javascript" src="js/altershow.js"></script>
<script type="text/javascript" src="js/Tforshow6.js"></script>
<script type="text/javascript" src="js/Tforshow6UTL.js"></script>
</body>

</html>