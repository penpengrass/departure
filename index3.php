<!DOCTYPE html>
<html>

<head>
  <title>JR東日本都心部発車標</title>
  <link rel="stylesheet" href="styleAll.css">
  <link rel="stylesheet" href="styleATOS.css">
  <link rel="stylesheet" href="banner.css">
  <?php
  $files = array();
  $files[2] = 'csv/JRMu/ToChiba.csv';
  $files[3] = 'csv/JRMu/ToKurihama.csv';
  $files[0] = 'csv/JRMu/ToTakasaki.csv';
  $files[1] = 'csv/JRMu/ToOdawara.csv';
  require_once('getJRCSV.php');
  ?>
  <script type="text/javascript" src="js/stationset.js"></script>
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/TTconnect.js"></script>
  <!--<script type="text/javascript" src="js/variable.js"></script>-->
  
</head>

<body>
  <!--駅選択部分-->
  <form action="index3.php" method="POST">
  <select name="stasele">
      <option value="csvc/TimeTable.csv">武蔵小杉駅</option>
      <option value="csvc/TimeTable.csv">横浜駅</option>
    </select>
    <input type="button" class="koshin" value="更新" onclick="koshin()">
    <input type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">
    <input type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">
    <input type="button" onclick="location.href='./index5.php'" value="東急へ移動">
    <input type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">
    <input type="button" onclick="location.href='./index7.php'" value="JR東海へ移動">
    <span id="stationname">広島駅</span>
    <time>現在時刻:<span id="TTime"></span></time>
  </form>
  <!--表をすべて入れる-->
  <tableline>
  <?php
  for ($i = 1; $i <= $tablenum; $i++) {
    print('
 <table>
<caption><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2>発車案内　</showing></caption>
    <tr>
      <th width="40%">種別</th>
      <th width="20%">時刻</th>
      <th width="25%">行先</th>
      <th width="15%">番線</th>
    </tr>
  ');
    for ($j = 1; $j <= $OrderNum; $j++) {
      print('
    <tr>
      <td class="shubetu' . $i . $j.'"><p2 id="TType' . $i . $j.'"><span id="WType' . $i . $j . '"></span></p2></td>
      <td><p2 id="THour' . $i . $j.'"></p2>:<p2 id="TMin' . $i . $j.'"></p2></td>
      <td class="Destination"><p2 id="TDes' . $i . $j.'"></p2></td>
      <td class="railnumber" id="TNum' . $i . $j.'"></td>
    </tr>
    ');
    }
    print('
</table>
');
if($i%2==0){
  print('</tableline>
  <tableline>');
}
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
</body>

</html>