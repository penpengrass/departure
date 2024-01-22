<!DOCTYPE html>
<html>

<head>
  <?php
  require('selection.php');
  require_once('PHP/variable.php');
  require_once('PHP/table4.php');
  $files = array();
  $files[0] = 'csv/JRW/tennoji1.csv';
  $files[1] = 'csv/JRW/tennoji2.csv';
  $tablenum = 2;
  $OrderNum = 4;
  $tableStrange = 0;
  $station = '天王寺駅';
  require('getCSV.php');
  ?>
  <title></title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleJRW_T.css">

  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/stationset4.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->
  <?php JRWStaSele('駅変更');
  ?>
  <form action="select.php" method="POST" id="selectstation">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <?php
    SelectCompany('./menu.php', 'メニューへ移動');
    ?>
    <!--<button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>-->
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index4_S2.php'">山陽新幹線主要駅へ移動</button>
    <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
    <button type="button" onclick="location.href='./index6.php'">長野駅へ移動</button>
    <button type="submit" name="ogaki">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //表の数
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table id="TTable' . $i . '">');
      //for($k=1;$k<3;$k++){
      print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
    ');
      print('
      <th width="22%">種別</th>
      <th width="22%">遅れ</th>
      <th width="22%">時刻</th>
      <th width="22%">行先</th>
      <th width="12%">のりば</th>
    </tr>
  ');
      //n番目に発車する列車までを表示
      for ($j = 1; $j <= $OrderNum; $j++) {
        print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
      }
    }
    print('
        </table>
');
    if ($i % $column == 0) {
      print('
        </tableline>
  <tableline id="tableline' . $i . '">');
    }
    ?>
  </tableline>
  <p id="supplement"></p>
  <h1 class="Cheader">注釈</h1>
  <li>糸崎駅 岩国駅 下関駅においては番線の表示は実際と異なる</li>
  <li>本来山陽地区では種別の横に両数がある</li>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/altershow.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/Tforshow4.js"></script>
  <!--<script type="text/javascript" src="js/Tforshow4_S.js"></script>-->
  <script type="text/javascript" src="js/typeColor.js"></script>
</body>

</html>