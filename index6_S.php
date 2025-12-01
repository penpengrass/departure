<!DOCTYPE html>
<html>

<head>
  <title>JR東日本北信越発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleNagano.css">
  <link rel="stylesheet" href="css/styleJRES6.css">
  <link rel="stylesheet" href="css/banner6.css">
  <?php
  $files = array();
  $files[0] = 'csv/JRE_S/Tokyo1.csv';
  $files[1] = 'csv/JRE_S/Tokyo2.csv';
  $files[2] = 'csv/JRE_S/Tokyo3.csv';
  require_once('PHP/variable.php');
  $tablenum = 2;
  $OrderNum = 4;
  //require_once('PHP/files6.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
  <script type="text/javascript" src="js/module/connectTable.js"></script>
  <script type="text/javascript" src="js/stationset6_S.js"></script>
  <script type="text/javascript" src="js/detailStopData/JRdetail.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">長野駅</p>
  </div>
  <!--駅選択部分-->
  <form action="index6_S.php" method="POST">
    <select name="stasele">
      <option value="csv/JRE_S/Tokyo1.csv">東京駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php'">ATOSへ移動</button>
    <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
    <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php'">在来線へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
    ');
      print('
        <th width="15%">時刻</th>
      <th width="20%">列車名</th>
      <th width="12%">番号</th>
      <th width="23%" class="HDes">行先</th>
      <th width="10%">番線</th>
      <th width="20%">記事</th>
    </tr>
  ');
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TLine' . $i . $j . '">
    <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="shubetu" id="TType' . $i . $j . '"><p2 id="WType' . $i . $j . '"></p2></td>
      <td class="name" id="TName' . $i . $j . '"><p2 id="WName' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
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
  <p id="supplement">臨時列車の有無や号数，番線は不正確 </p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/displayEdit6.js"></script>
<script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
<script type="text/javascript" src="js/Tforshow6_S.js"></script>
<script type="text/javascript" src="js/LastShow.js"></script>
</body>

</html>