<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="styleAll.css">
  <link rel="stylesheet" href="styleNagano.css">
  <link rel="stylesheet" href="banner6.css">
  <?php
  $files = array();
  $files[0] = 'csv/nagano1.csv';
  $files[1] = 'csv/nagano2.csv';
  require_once('getCSV.php');
  ?>
  <?php
      if($station=='松本駅'){
        print('
        <link rel="stylesheet" href="styleMatsumoto.css">
        ');
      }
      ?>

  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset6.js"></script>
  <!--<script type="text/javascript" src="js/variable.js"></script>-->
    </head>
<body>
<div><time>現在時刻:<span id="TTime"></span></time></div>
  <div><p id="stationname">長野駅</p></div>
  <!--駅選択部分-->
  <form action="index6.php" method="POST">
    <select name="stasele">
      <option value="csv/nagano1.csv">長野駅</option>
      <option value="csv/matsumoto1.csv">松本駅</option>
    </select>
    <input type="submit" name="submit" value="駅変更" />
    <input type="button" class="koshin" value="更新" onclick="koshin()">
    <input type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">
    <input type="button" onclick="location.href='./index3.php'" value="都心部(ATOS)へ移動">
    <input type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">
    <input type="button" onclick="location.href='./index5.php'" value="東急へ移動">
    <input type="button" onclick="location.href='./index7.php'" value="JR東海へ移動">
    
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    $stationnumber=0;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $stasele = $_POST['stasele'];
      if ($stasele == 'csv/nagano1.csv') {
        $stationnumber=1;
      }else{
        $stationnumber=2;
      }
    }
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
    ');
    if($stationnumber==1){
    print('
      <th width="40%">種別</th>
      <th width="15%">時刻</th>
      <th width="15%">行先</th>
      <th width="10%">番線</th>
      <th width="20%">記事</th>
    </tr>
  ');
    }else{
      print('
      <th width="45%">種別</th>
      <th width="20%">時刻</th>
      <th width="20%">行先</th>
      <th width="15%">番線</th>
    </tr>
  '); 
    }
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TLine' . $i . $j . '">
      <td class="shubetu' . $i . $j . '"><p2 id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></p2></td>
      <td id="TTimeLine' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination' . $i . $j . '"><p2 id="TDes' . $i . $j . '"></p2></td>
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
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/trainname.js"></script>
</body>

</html>