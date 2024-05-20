<!DOCTYPE html>
<html>

<head>
  <title>JR四国発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleS.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files[0] = 'csv/JRS/takamatsu1.csv';
  $files[1] = 'csv/JRS/takamatsu2.csv';
  require_once('PHP/variable.php');
  //require_once('PHP/files7.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/Shidetailset.js"></script>
  <script type="text/javascript" src="js/stationset9.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">高松駅</p>
  </div>
  <!--駅選択部分-->
  <form action="index7.php" method="POST">
    <select name="stasele">
      <option value="csv/JRS/takamatsu1.csv">高松駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index4.php?station=okayama'">岡山駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php'">長野駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index10.php'">JR九州へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
  ');
      for ($j = 1; $j <= 2; $j++) {
        print('
    <tr>
      <td width="10%" class="shubetu" id="TType' . $i . $j . '" colspan="1"><span id="WType' . $i . $j . '"></span></td>
      <td width="40%" class="CName" id="TName' . $i . $j . '" colspan="5"></td>
      <td width="20%" class="CTime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td width="20%" class="Destination"><p2 id="TDes' . $i . $j . '"></p2></td>
      <td width="10%" class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
        if ($j == 1) {
          print('
      <tr>
      <td width="15%" class="CDetail" id="TDetailtitle' . $i . '"colspan="2"></td>
      <td width="85%" class="CDetail" colspan="7"><p3 id="TDetail' . $i . $j . '" class="news-banner__content"></p3></td>
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
  <p id="supplement">停車駅は不正確</p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/function2.js"></script>
<script type="text/javascript" src="js/functionColor.js"></script>
<script type="text/javascript" src="js/functionDetail.js"></script>
<script type="text/javascript" src="js/detailfunction.js"></script>
<script type="text/javascript" src="js/detailset/Shidetailchange.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/detailshow.js"></script>
<script type="text/javascript" src="js/Tforshow9.js"></script>
</body>

</html>