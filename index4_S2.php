<!DOCTYPE html>
<html>

<head>
  <?php
  require_once('PHP/variable.php');
  $files = array();
  $files[0] = 'csv/JRW_S/hiroshima_S1.csv';
  $files[1] = 'csv/JRW_S/hiroshima_S2.csv';
  if (isset($_POST["stasele"])) {
    $files[0] = $_POST["stasele"];
  }
  require_once('PHP/variable.php');
  require('PHP/files4_S.php');
  $OrderNum=4;
  require('getCSV.php');
  ?>
  <title>JR西日本駅発車標</title>
  <link rel="stylesheet" href="css/styleAll.css">
  <link rel="stylesheet" href="css/styleJRW_S2.css">
  <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/stationset4_S.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div>
    <p id="stationname">広島駅</p>
  </div>
  <!--駅選択部分-->

  <form action="PHP/files4_S.php" method="POST" id="selectstation">
    <select name="staselect4">
      <option value="hiroshima">広島駅</option>
      <option value="hakata">博多駅</option>
    </select>
    <button type="submit" class="henko" name="submit">駅変更</button>
  </form>
  <form action="select.php" method="POST" id="selectstation">
    <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
    <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
    <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
    <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
    <button type="button" onclick="location.href='./index4.php?station=hiroshima'">広島駅在来線へ移動</button>
    <button type="button" onclick="location.href='./index6.php?station=matsumoto'">松本駅へ移動</button>
    <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
    <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
    <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
    <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //表の数
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table id="TTable' . $i . '">');
      print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="25%" colspan="2">種別</th>
      <th width="15%">時刻</th>
      <th width="20%">行先</th>
      <th width="15%">のりば</th>
      <th width="25%">編成/遅れ</th>
    </tr>
  ');
      //n番目に発車する列車までを表示
      for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
        print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td width="50%" class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td width="50%" class="name" id="TName' . $i . $j . '"><span class="Wname" id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="CDetail" id="TDetail' . $i . $j . '"></td>
    </tr>
    ');
      }
      print('
        </table>
');
      if ($i % $column == 0) {
        print('
        </tableline>
  <tableline id="tableline' . $i . '">');
      }
    }
    ?>
  </tableline>
  <p id="supplement">臨時列車の有無や号数, 番線は不正確</p>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/altershow.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/Tforshow4_S.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
</body>

</html>