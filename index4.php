<!DOCTYPE html>
<html>

<head>
  <?php
  $files = array();
  $files[0] = 'csv/JRW/JRS1.csv';
  $files[1] = 'csv/JRW/JRS2.csv';
  require_once('getCSV.php');
  ?>
  <title>JR西日本駅発車標</title>
  <link rel="stylesheet" href="styleAll.css">
  <?php
  if ($station == '天王寺駅') {
    print('
    <link rel="stylesheet" href="styleJRW_T.css">
    ');
  } else {
    print('
    <link rel="stylesheet" href="styleJRW.css">
    ');
  }
  if($station=='岡山駅'){
    print('
    <link rel="stylesheet" href="styleJRW_okayama.css">
    ');
  }
  ?>
  
  <link rel="stylesheet" href="banner.css">
  <script type="text/javascript" src="js/function1.js"></script>
  <script type="text/javascript" src="js/stationset4.js"></script>
  <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
  <script type="text/javascript" src="js/variable.js"></script>
</head>

<body>
  <div><time>現在時刻:<span id="TTime"></span></time></div>
  <div><p id="stationname">広島駅</p></div>
  <!--駅選択部分-->
  <form action="index4.php" method="POST" id="selectstation">
    <select name="stasele">
      <option value="csv/JRW/JRS1.csv">北新地駅</option>
      <option value="csv/JRW/hiroshima1.csv">広島駅</option>
      <option value="csv/JRW/tennoji1.csv">天王寺駅</option>
      <option value="csv/JRW/niimi1.csv">新見駅</option>
      <option value="csv/JRW/mihara1.csv">三原駅</option>
      <option value="csv/JRW/okayama_sanyo1.csv">岡山駅</option>
      <option value="csv/JRW/iwakuni1.csv">岩国駅</option>
    </select>
    <input type="submit" name="submit" value="駅変更" />
    <input type="button" class="koshin" value="更新" onclick="koshin()">
    <input type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">
    <input type="button" onclick="location.href='./index3.php'" value="JR東日本へ移動">
    <input type="button" onclick="location.href='./index5.php'" value="東急へ移動">
    <input type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">
    <input type="button" onclick="location.href='./index7.php'" value="JR東海へ移動">
    
  </form>
  <!--表をすべて入れる-->
  <tableline>
    <?php
    //表の数
    for ($i = 1; $i <= $tablenum; $i++) {
      print('
 <table>
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="10%">種別</th>
      <th width="30%">列車名</th>
      <th width="20%">時刻</th>
      <th width="25%">行先</th>
      <th width="15%">番線</th>
    </tr>
  ');
      //n番目に発車する列車までを表示
      for ($j = 1; $j <= $tablenums[$i-1]; $j++) {
        print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
      }
      print('
</table><a class="line"></a>
');
      if ($i % $column == 0) {
        print('</tableline>
  <tableline id="tableline' .$i .'">');
      }
    }
    ?>
  </tableline>
  <p id="supplement"></p>
  <!--ここから内部のこと-->
  <script type="text/javascript" src="js/Time.js"></script>
  <script type="text/javascript" src="js/Timer.js"></script>
  <script type="text/javascript" src="js/TimeShow.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/variable2.js"></script>
  <script type="text/javascript" src="js/function2.js"></script>
  <script type="text/javascript" src="js/trainname.js"></script>
  <script type="text/javascript" src="js/typeColor.js"></script>
</body>

</html>