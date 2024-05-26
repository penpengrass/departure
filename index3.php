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
  //$files[0] = 'csv/JRMu/ToTakasaki.csv';
  //$files[2] = 'csv/JRMu/ToChiba.csv';
  $files[3] = 'csv/JRE/Musashi_Zushi.csv';
  $files[1] = 'csv/JRE/Musashi_shonan.csv';
  $files[4]='csv/JRE/Musashi_Ebina.csv';
  //$files[3] = 'csv/JRE/ToKurihama.csv';
  //$files[1] = 'csv/JRMu/ToOdawara.csv';
  require('PHP/files3.php');
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
  <form action="PHP/files3.php" method="POST">
    <select name="staselect3">
      <option value="musashikosugi">武蔵小杉駅</option>
      <option value="utsunomiya">宇都宮駅</option>
      <option value="yokohama">横浜駅</option>
      <option value="odawara">小田原駅</option>
      <option value="atami">熱海駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
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
      print('
 <table id="TTable' . $i . '">
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="28%" id="HName' . $i . '"></th>
      <th width="15%" id="HType' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '"></th>
      <th width="20%" id="HDes' . $i . '">行先</th>
      <th width="10%" id="HCars' . $i . '"></th>
      <th width="7%" class="HrailNumber" id="HrNumber' . $i . '">のりば</th>
    </tr>
  ');
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TRow' . $i . $j . '">
      <td id="TName' . $i . $j . '"></td>
      <td class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="cars" id="TCars' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
      }
      print('
</table>
');
      if ($i % 2 == 0) {
        print('</tableline>
  <tableline>');
      }
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

</html>