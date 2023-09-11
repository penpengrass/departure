<!DOCTYPE html>
<html>

<head>
    <title>東急発車標</title>
    <link rel="stylesheet" href="styleAll.css">
    <link rel="stylesheet" href="style2Tokyu.css">
    <link rel="stylesheet" href="bannerTokyu.css">
    <?php
    $files = array();
    $files[0] = 'csv/Tokyu/nikotama1.csv';
    $files[1] = 'csv/Tokyu/nikotama2.csv';
    require_once('getCSV.php');
    ?>
    <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
    <!--<script type="text/javascript" src="js/jsfileimport.js"></script>-->
    <!--<script type="text/javascript" src="js/detailset/detailcenter.js"></script>-->
    <script type="text/javascript" src="js/variable.js"></script>
    <script type="text/javascript" src="js/function1.js"></script>
</head>

<body>
    <!--駅選択部分-->
    <form action="index5.php" method="POST">
        <select name="stasele">
            <option value="csv/Tokyu/nikotama1.csv">二子玉川駅</option>
            <option value="csv/Tokyu/ToMu1.csv">武蔵小杉駅</option>
        </select>
        <input type="submit" name="submit" value="駅変更" />
        <input type="button" class="koshin" value="更新" onclick="koshin()">
        <input type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">
        <input type="button" onclick="location.href='./index3.php'" value="JR東日本へ移動">
        <input type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">
        <input type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">
        <input type="button" onclick="location.href='./index7.php'" value="JR東海へ移動">
        <time>現在時刻:<span id="TTime"></span></time>
    </form>
    <span id="stationname"></span>
    <!--表をすべて入れる-->
    <tableline>
        <?php
        for ($i = 1; $i <= $tablenum; $i++) {
            print('
 <table>
<caption><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2>発車案内　</showing></caption>
    <tr>
      <th width="7%">のりば</th>
      <th width="15%"> 種別</th>
      <th width="30%">行先</th>
      <th width="15%">発車時分</th>
      <th width="30%">接続</th>
    </tr>
    <showing>
  ');
            for ($j = 1; $j <= $OrderNum; $j++) {
                print('
    <tr>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="shubetu' . $i . $j . '" ><p2 id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></p2></td>
      <td><p2 id="TDes' . $i . $j . '"></p2></td>
      <td><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TDetail' . $i . $j . '"></p2></p3></td>
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
    <script type="text/javascript" src="js/oimachi.js"></script>
    <!--<script type="text/javascript" src="js/detailshow.js"></script>-->

</body>

</html>