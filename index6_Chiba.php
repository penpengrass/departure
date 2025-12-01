<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleNagano.css">
  <link rel="stylesheet" href="css/styleChiba.css">
  <link rel="stylesheet" href="css/banner6.css">
  <?php
  require_once('PHP/variable.php');
  $files = array();
  $files[0] = 'csv/JRE/Chiba_Tokyo.csv';
    $files[1] = 'csv/JRE/Chiba_Mitaka.csv';
    $files[2] = 'csv/JRE/Chiba_Uchibo.csv';
    $files[3] = 'csv/JRE/Chiba_Sotobo.csv';
    $files[4] = 'csv/JRE/Chiba_Sakura.csv';
    $files[5] = 'csv/JRE/Chiba_Sakura.csv';
    $tablenum = 6;
    $OrderNum = 3;
    $column=3;
    $station = '千葉駅';
  require('PHP/files6.php');
  require_once('getCSV.php');
  ?>
  <?php
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
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
    <option value="ueno">上野駅</option>
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
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table id="TLCDTable' . $i . '">
<caption class="Ctitle" width="50%" id="Tstation' . $i . '"><span class="LineName" id="kn' . $i . '"></span>
<span class="Dir" width="50%" id="WDir' . $i . '"></span>
</caption>
    <tr>
    ');
        print('
        <th width="1%"></th>
      <th width="19%" id="HType' . $i . '"></th>
      <th width="19%" id="HName' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '"></th>
      <th width="25%" class="HDes" id="HDes' . $i . '"></th>
      <th width="15%" id="HNumber' . $i . '"></th>
      <th width="1%"></th>
    </tr>
  ');
      for ($j = 1; $j <= $OrderNum; $j++) {
        if($j==1){
          print('
    <tr id="TLine' . $i . $j . '">
    <td class="BWhite"></td>
      <td class="shubetu" id="TType' . $i . $j . '"><span class="CWType First" id="WType' . $i . $j . '"><span></td>
      <td class="CName" id="TName' . $i . $j . '" colspan="2"><span  class="CWName First" id="WName' . $i . $j . '"></span></td>
      <td class="railnumber First" id="TNum' . $i . $j . '" colspan="2"></td>
      <td class="BWhite"></td>
      </tr>
      <tr>
      <td class="BWhite"></td>
      <td class="First" id="TTime' . $i . $j . '" colspan="2"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination First" id="TDes' . $i . $j . '"colspan="3"><span class="CWDes" id="WDes' . $i . $j . '"></span></td>
      <td class="BWhite"></td>
    </tr>');
        }else{
        print('
    <tr id="TLine' . $i . $j . '">
    <td class="BWhite"></td>
      <td class="shubetu" id="TType' . $i . $j . '"><span class="CWType" id="WType' . $i . $j . '"></span></td>
      <td class="CName" id="TName' . $i . $j . '"><span  class="CWName" id="WName' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span class="CWDes" id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="BWhite"></td>
    </tr>
    ');
        }
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
  <p id="supplement">交互表示や両数など一部表示不正確</p>
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
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/carsEdit.js"></script>
<script type="text/javascript" src="js/module/displayEdit6.js"></script>
<script type="text/javascript" src="js/module/firstDetailEdit.js"></script>
<script type="text/javascript" src="js/module/displaySwitch.js"></script>
<script type="text/javascript" src="js/Tforshow6_Chiba.js"></script>
<!--<script type="text/javascript" src="js/Tforshow6UTL.js"></script>-->
</body>

</html>