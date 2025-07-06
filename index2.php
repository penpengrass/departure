<!DOCTYPE html>
<html>

<head>
  <title>近鉄発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files = array();
  $files[0] = 'csv/Kintetsu/Tsuruhashi1.csv';
  $files[1] = 'csv/Kintetsu/Tsuruhashi2.csv';
  require_once('PHP/variable.php');
  require('PHP/files2.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset2.js"></script>
  <script type="text/javascript" src="js/detailset/Kindetailset.js"></script>
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">鶴橋駅</p>
  </div>
  <!--駅選択部分-->
  <form action="PHP/files2.php" method="POST" class="staselection">
    <select name="staselect2">
      <option value="tsuruhashi">鶴橋駅</option>
      <option value="nara">奈良駅</option>
      <option value="kyoto">京都駅</option>
      <option value="nagoya">名古屋駅</option>
      <option value="nakagawa">伊勢中川駅</option>

    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index4_A.php'">JR西日本へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=matsumoto'">松本駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index7_T.php'">JR名古屋駅へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  
  <!--表をすべて入れる-->
  <tableline>
    <?php
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table id="TTable' . $i . '">
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="12%">時刻</th>
      <th width="15%"> 種別</th>
      <th width="18%">行先</th>
      <th width="7%">のりば</th>
      <th width="48%" class="HDetail" id="HDetail' . $i . '">案内</th>
    </tr>
    <showing>
  ');
      for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {//<td class="news-banner"><p3 class="news-banner__content">
        print('
    <tr>
      <td rowspan="3" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td rowspan="3" class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><span class="CWType" id="WType' . $i . $j . '"></span></td>
      <td rowspan="3" class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td rowspan="3"><span class="railnumber" id="TNum' . $i . $j . '"></span></td>
      <td class="higherDetail CDetail" id="TdDetail' . $i . $j . '"><p3 class="news-banner__content" id="TDetail' . $i . $j . '">本日の運転は終了しました</p3></td>
      </tr>
      <tr><td class="higherDetail CDetail" id="TDetailD' . $i . $j . '"></td></tr>
      <tr><td class="CDetail"><p2 id="TConnection' . $i . $j . '"></td>
      ');
      print('
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
  <p id="supplement"></p>
  <!--ここから内部のこと-->
  
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/function3.js"></script>
  <script type="text/javascript" src="js/functionDetail.js"></script>
  <script type="text/javascript" src="js/detailshow.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
  <script type="text/javascript" src="js/Tforshow2.js"></script>
  <script type="text/javascript" src="js/LastShow.js"></script>
  
  <!--<script type="text/javascript" src="js/detailStation.js"></script>-->
  

</body>

</html>