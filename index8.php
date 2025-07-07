<!DOCTYPE html>
<html>

<head>
  <title>JR北海道発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleH.css">
  <link rel="stylesheet" href="css/banner.css">
  <?php
  $files[0] = 'csv/JRH/sapporo1.csv';
  $files[1] = 'csv/JRH/sapporo2.csv';
  require_once('PHP/variable.php');
  $tablenum=5;
  $OrderNum=4;
  require('PHP/files8.php');
  require_once('getCSV.php');
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/detailset/Hodetailset.js"></script>
  <script type="text/javascript" src="js/stationset8.js"></script>
  <script type="text/javascript" src="js/TTconnect.js"></script>

</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">札幌駅</p>
  </div>
  <!--駅選択部分-->
  <form action="PHP/files8.php" method="POST">
    <select name="staselect8">
      <option value="sapporo">札幌駅</option>
      <option value="hokuto">新函館北斗駅</option>
    </select>
    <button type="submit" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index3_S.php?station=utsunomiya'">東北新幹線へ移動</button>
    <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=tokyo'">在来線東京駅へ移動</button>
    <button type="button" onclick="location.href='./index6_S.php'">新幹線東京駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <?php
  if ($station == '新函館北斗駅') {
    $i = 1;
    print('
    <table class="STable">
    <caption class="Ctitle SCtitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '">新幹線</p2></showing></caption>
    ');
    for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
      print('
    <tr>
    <td width="20%" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td width="20%" class="Destination"><p2 id="TDes' . $i . $j . '"></p2></td>
      <td width="15%" class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td width="15%" class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td width="10%" class="railnumber" id="TNum' . $i . $j . '"></td>
      <td width="20%" class="CSDetail" id="TExplain' . $i . $j . '"></td>
    </tr>
    ');
      if ($j == 1) {
        print('
      <tr>
      <td width="10%" class="CDetail" id="TDetail' . $i . '">停車駅</td>
      <td class="CDetail" colspan="5"><p3 class="news-banner__content" colspan="5"><p2 id="TDetail' . $i . '1" >本日の運転は終了しました</p2></p3></td>
      </tr>
      ');
      }
    }
  }
  ?>
  <tableline>
    <?php
    if ($station == '新函館北斗駅') {
      $Hswitch = 2;
    } else {
      $Hswitch = 1;
    }
    for ($i = $Hswitch; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
  ');
      for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
        print('
    <tr>
      <td width="20%" class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td width="20%" class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td width="25%" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td width="20%" class="Destination" id="TDes' . $i . $j . '"></td>
      <td width="15%" class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
        if ($j == 1 && $station != '新函館北斗駅') {
          print('
      <tr>
      <td class="CDetail" colspan="5"><p2 class="news-banner__content" colspan="5" id="TDetail' . $i . '" >本日の運転は終了しました</p2></td>
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
  <p id="supplement"></p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/function2.js"></script>
<script type="text/javascript" src="js/functionDetail.js"></script>
<script type="text/javascript" src="js/functionColor.js"></script>
<script type="text/javascript" src="js/detailfunction.js"></script>
<script type="text/javascript" src="js/detailset/Hodetailchange.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/Tforshow8.js"></script>
<script type="text/javascript" src="js/detailshow.js"></script>
<script type="text/javascript" src="js/detailonce8.js"></script>


</body>

</html>