<!DOCTYPE html>
<html>

<head>
  <title>JR東海発車標</title>
  <link rel="stylesheet" href="styleAll.css">
  <link rel="stylesheet" href="styleC.css">
  <link rel="stylesheet" href="banner.css">
  <?php
  $files = array();
  $files[0] = 'csv/JRC/hamamatsu1.csv';
  $files[1] = 'csv/JRC/hamamatsu2.csv';
  require_once('getCSV.php');
  ?>
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset7.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/variable.js"></script>
  
</head>

<body>
<div><time>現在時刻:<span id="TTime"></span></time></div>
<div><p id="stationname">浜松駅</p></div>
  <!--駅選択部分-->
  <form action="index7.php" method="POST">
  <select name="stasele">
      <option value="csv/JRC/hamamatsu1.csv">浜松駅</option>
      <option value="csv/JRC/toyohashi1.csv">豊橋駅</option>
      <option value="csv/JRC/gifu1.csv">岐阜駅</option>
    </select>
    <input type="submit" name="submit" value="駅変更" />
    <input type="button" class="koshin" value="更新" onclick="koshin()">
    <input type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">
    <input type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">
    <input type="button" onclick="location.href='./index5.php'" value="東急へ移動">
    <input type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">
  </form>
  <!--表をすべて入れる-->
  <tableline>
  <?php
  for ($i = 1; $i <= $tablenum; $i++) {
    print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="30%">種別</th>
      <th width="20%">発車時刻</th>
      <th width="30%">行先</th>
      <th width="5%">のりば</th>
      <th width="15%"></th>
    </tr>
  ');
    for ($j = 1; $j <= $OrderNum; $j++) {
      print('
    <tr>
      <td class="shubetu" id="TType' . $i . $j.'"><span id="WType' . $i . $j . '"></span></td>
      <td><p2 id="THour' . $i . $j.'"></p2>:<p2 id="TMin' . $i . $j.'"></p2></td>
      <td class="Destination"><p2 id="TDes' . $i . $j.'"></p2></td>
      <td class="railnumber" id="TNum' . $i . $j.'"></td>
    </tr>
    ');
    }
    print('
</table>
');
if($i%$column==0){
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
  <script type="text/javascript" src="js/trainname.js"></script>
  <script type="text/javascript" src="js/typecolor.js"></script>
</body>

</html>