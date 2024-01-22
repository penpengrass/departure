<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleNagano.css">
  <link rel="stylesheet" href="css/banner6.css">
  <?php
  $files = array();
  $files[0] = 'csv/JRE/nagano1.csv';
  $files[1] = 'csv/JRE/nagano2.csv';
  require_once('PHP/variable.php');
  require_once('PHP/files6.php');
  require_once('getCSV.php');
  ?>
  <?php
  if ($station == '松本駅') {
    print('
        <link rel="stylesheet" href="css/styleMatsumoto.css">
        ');
  }else if($station=='横浜駅'){
    print('
        <link rel="stylesheet" href="css/styleYokohama6.css">
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
  <form action="index6.php" method="POST">
    <select name="stasele">
      <option value="csv/JRE/nagano1.csv">長野駅</option>
      <option value="csv/JRE/matsumoto1.csv">松本駅</option>
      <option value="csv/JRE/yokohama1.csv">横浜駅</option>
    </select>
    <button type="submit" name="submit" >駅変更</button>
</form>
<form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php'">ATOSへ移動</button>
    <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
    <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6_S.php'">東北新幹線へ移動</button>
    <button type="submit" name="numadu">沼津駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //$stationnumber = 0;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $stasele = $_POST['stasele'];
      if ($stasele == 'csv/JRE/nagano1.csv') {
        $stationnumber = 1;
      } else {
        $stationnumber = 2;
      }
    }
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
    ');
      if ($stationnumber == 1) {
        print('
      <th width="40%">種別</th>
      <th width="15%">時刻</th>
      <th width="15%">行先</th>
      <th width="10%">番線</th>
      <th width="20%">記事</th>
    </tr>
  ');
      } else {
        print('
      <th width="50%">種別</th>
      <th width="20%">時刻</th>
      <th width="20%" class="HDes">行先</th>
      <th width="7%">番線</th>
      <th width="3%"></th>
    </tr>
  ');
      }
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TLine' . $i . $j . '">
      <td class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><p2 id="WType' . $i . $j . '"></p2></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination' . $i . $j . '" id="TDes' . $i . $j . '"></td>
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
  if($station=='横浜駅'){
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
</body>

</html>