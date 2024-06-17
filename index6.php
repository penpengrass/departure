<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleNagano.css">
  <link rel="stylesheet" href="css/banner6.css">
  <?php
  require_once('PHP/variable.php');
  $files = array();
  $files[0] = 'csv/JRE/shinjuku_mitaka.csv';
    $files[1] = 'csv/JRE/shinjuku_chiba.csv';
    $files[2] = 'csv/JRE/shinjuku_takao.csv';
    $files[3] = 'csv/JRE/shinjuku_tokyo.csv';
    $files[4] = 'csv/JRE/shinjuku_takao.csv';
    $files[5] = 'csv/JRE/shinjuku_narita.csv';
    $files[6] = 'csv/JRE/shinjuku_musashi.csv';
    $files[7] = 'csv/JRE/shinjuku_takasaki.csv';
    $files[8] = 'csv/JRE/shinjuku_shinkiba.csv';
    $files[9] = 'csv/JRE/shinjuku_odawara.csv';
    $tablenum = 10;
    $OrderNum = 2;
    $column=6;
    $station = '新宿駅';
  require('PHP/files6.php');
  require_once('getCSV.php');
  ?>
  <?php
  if ($station == '松本駅') {
    print('
        <link rel="stylesheet" href="css/styleMatsumoto.css">
        ');
  } else if ($station == '横浜駅') {
    print('
        <link rel="stylesheet" href="css/styleYokohama6.css">
        ');
  }else if ($station == '東京駅') {
    print('
        <link rel="stylesheet" href="css/styleUTL.css">
        ');
  }else if ($station == '新宿駅') {
    print('
        <link rel="stylesheet" href="css/styleShinjuku.css">
        ');
  }
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
    if ($station == '長野駅') {
      $stationnumber = 1;
    } else {
      $stationnumber = 2;
    }
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table id="TLCDTable' . $i . '">
<caption class="Ctitle" id="Tstation' . $i . '"><p2 id="kn' . $i . '"></p2></caption>
    <tr>
    ');
      if ($stationnumber == 1) {
        print('
      <th width="10%" id="HType' . $i . '">種別</th>
      <th width="30%" id="HName' . $i . '"></th>
      <th width="15%" id="HTime' . $i . '">時刻</th>
      <th width="15%">行先</th>
      <th width="10%">番線</th>
      <th width="20%">記事</th>
    </tr>
  ');
      } else {
        print('
      <th width="12%" id="HType' . $i . '">種別</th>
      <th width="38%" id="HName' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '">時刻</th>
      <th width="20%" class="HDes" id="HDes' . $i . '">行先</th>
      <th width="7%" id="HNumber' . $i . '">番線</th>
      <th width="3%" id="Htopic' . $i . '"></th>
    </tr>
  ');
      }
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TLine' . $i . $j . '">
      <td class="shubetu" id="TType' . $i . $j . '"><span class="CWType" id="WType' . $i . $j . '"></p2></td>
      <td class="CName" id="TName' . $i . $j . '"><span  class="CWName" id="WName' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="topic" id="Ttopic' . $i . $j . '"></td>
    </tr>
    ');
      }
      if ($station == '新宿駅') {
        $i++;
        print('
        <th class="Ctitle_P" colspan="6"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></th>
        <tr>
      <th width="10%">種別</th>
      <th width="35%" id="HName' . $i . '">列車名</th>
      <th width="20%">時刻</th>
      <th width="25%">行先</th>
      <th width="7%">番線</th>
      <th width="3%" id="Htopic' . $i . '"></th>
      </tr>
      ');
        for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
          print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu" id="TType' . $i . $j . '"><span class="CWType" id="WType' . $i . $j . '"></span></td>
      <td class="CName" id="TName' . $i . $j . '"><span class="CWName" id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="topic" id="Ttopic' . $i . $j . '"></td>
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
<script type="text/javascript" src="js/Tforshow6.js"></script>
<script type="text/javascript" src="js/Tforshow6UTL.js"></script>
</body>

</html>