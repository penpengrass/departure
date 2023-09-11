<!DOCTYPE html>
<html>

<head>
  <title>近鉄発車標</title>
  <link rel="stylesheet" href="styleAll.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="banner.css">
  <?php
  $files = array();
  $files[0] = 'csvc/TimeTable.csv';
  $files[1] = 'csvc/TimeTablespe.csv';
  require_once('getCSV.php');
  ?>
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationsetC.js"></script>
  <script type="text/javascript" src="js/detailset/HdetailsetC.js"></script>
  <!--<script type="text/javascript" src="js/jsfileimport.js"></script>-->
  <!--<script type="text/javascript" src="js/detailset/detailcenter.js"></script>-->
  <script type="text/javascript" src="js/variable.js"></script>
  
</head>

<body>
<div><time>現在時刻:<span id="TTime"></span></time></div>
<div><p id="stationname">鶴橋駅</p></div>
  <!--駅選択部分-->
  <form action="index2C.php" method="POST">
    <select name="stasele">
      <option value="csvc/TimeTable.csv">京橋駅</option>
      <option value="csvc/Ebi1.csv">戎橋駅</option>
      <option value="csvc/Ka1.csv">kasatoriStation</option>
      <option value="csvc/NGY.csv">名古屋駅</option>
      <option value="fourtabletest">新中央駅</option>
    </select>
    <input type="submit" name="submit" value="駅変更" />
    <input type="button" class="koshin" value="更新" onclick="koshin()">
    <input type="button" onclick="location.href='./index3.php'" value="JR東日本へ移動">
    <input type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">
    <input type="button" onclick="location.href='./index5.php'" value="東急へ移動">
    <input type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">
    <input type="button" onclick="location.href='./index7.php'" value="JR東海へ移動">
  </form>
  <!--表をすべて入れる-->
  <tableline>
  <?php
  for ($i = 1; $i <= $tablenum; $i++) {
    print('
 <table>
<caption><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2>発車案内　</showing></caption>
    <tr>
      <th width="10%">時刻</th>
      <th width="15%"> 種別</th>
      <th width="20%">行先</th>
      <th width="5%">のりば</th>
      <th width="50%">案内</th>
    </tr>
    <showing>
  ');
    for ($j = 1; $j <= $tablenums[$i-1]; $j++) {
      print('
    <tr>
      <td><p2 id="THour' . $i . $j.'"></p2>:<p2 id="TMin' . $i . $j.'"></p2></td>
      <td class="shubetu' . $i . $j.'" id="IType' . $i . $j.'"><p2 id="TType' . $i . $j.'"><span id="WType' . $i . $j . '"></span></p2></td>
      <td><p2 id="TDes' . $i . $j.'"></p2></td>
      <td class="railnumber" id="TNum' . $i . $j.'"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TDetail' . $i . $j.'">本日の運転は終了しました</p2></p3></td>
    </tr>
    ');
    }
    print('
    </showing>
</table>
');
if ($i % $column == 0) {
  print('</tableline>
<tableline>');
}
  }
  ?>
  </tableline>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
  <!--<script type="text/javascript" src="js/detailStation.js"></script>-->
  <script type="text/javascript" src="js/detailshow.js"></script>

</body>

</html>