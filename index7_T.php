<!DOCTYPE html>
<html>

<head>
  <title>JR東海発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleC_T.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files[0] = 'csv/JRC/nagoya1.csv';
  $files[1] = 'csv/JRC/nagoya2.csv';
  $files[2] = 'csv/JRC/nagoya3.csv';
  $files[3] = 'csv/JRC/nagoya4.csv';
  $files[4] = 'csv/JRC/nagoya2.csv';
  require_once('PHP/variable.php');
  $tablenum = 5;
  //$column = 3;
  require_once('PHP/table7.php');
  require_once('PHP/files7.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/detailset/JRNadetailset.js"></script>
  <script type="text/javascript" src="js/stationset7.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">浜松駅</p>
  </div>
  <!--駅選択部分-->
  <form action="PHP/files7.php" method="POST">
    <select name="staselect7">
      <option value="numazu">沼津駅</option>
      <option value="shizuoka">静岡駅</option>
      <option value="hamamatsu">浜松駅</option>
      <option value="toyohashi">豊橋駅</option>
      <option value="nagoya">名古屋駅</option>
      <option value="gifu">岐阜駅</option>
      <option value="ogaki">大垣駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="submit" name="atami">熱海駅へ移動</button>
    <button type="submit" name="maibara">米原駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php'">長野駅へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
     <table id="TTable' . $i . '">');
      print('
    <caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
        <tr>
          <th width="29%" colspan="2">種別</th>
          <th width="20%">発車時刻</th>
          <th width="29%">行先</th>
          <th width="7%">のりば</th>
          <th width="15%"></th>
        </tr>
      ');
      for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
        print('
        <tr>
          <td class="shubetu" id="TType' . $i . $j . '" colspan="2"><span id="WType' . $i . $j . '"></span></td>
          <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
          <td class="Destination" id="TDes' . $i . $j . '"></td>
          <td class="railnumber" id="TNum' . $i . $j . '"></td>
        </tr>
        <tr>
        <td class="Cdetail" width="10%">停車駅:</td>
        <td colspan="5" width="90%" class="Cdetail"><p3 id="TDetail' . $i . $j . '" class="news-banner__content"></p3></td>
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
  <p id="supplement">番線や特別停車は不正確</p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/function2.js"></script>
<script type="text/javascript" src="js/functionDetail.js"></script>
<script type="text/javascript" src="js/detailshow.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/Tforshow7.js"></script>
</body>

</html>