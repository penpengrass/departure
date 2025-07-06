<!DOCTYPE html>
<html>

<head>
    <title>東急発車標</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/style2Tokyu.css">
    <link rel="stylesheet" href="css/bannerTokyu.css">
    <?php
    $files = array();
    $files[0] = 'csv/Tokyu/nikotama1.csv';
    $files[1] = 'csv/Tokyu/nikotama2.csv';
    $files[2] = 'csv/Tokyu/nikotama3.csv';
    $files[3] = 'csv/Tokyu/nikotama4.csv';
    require_once('PHP/variable.php');
    require_once('PHP/files5.php');
    $tablenum=4;
    $OrderNum=3;
    $CompanyNumber=5;
    require_once('getCSV.php');
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
    <script type="text/javascript" src="js/detailset/JRdetail.js"></script>
    <!--<script type="text/javascript" src="js/jsfileimport.js"></script>-->
    <!--<script type="text/javascript" src="js/detailset/detailcenter.js"></script>-->
    <script type="text/javascript" src="js/stationset5.js"></script>
    <script type="text/javascript" src="js/function1.js"></script>
</head>

<body>
    <div><time>現在時刻:<span id="TTime"></span></time></div>
    <div>
        <p id="stationname">広島駅</p>
    </div>
    <!--駅選択部分-->
    <form action="PHP/files5.php" method="POST">
        <select name="staselect5">
            <option value="nikotama">二子玉川駅</option>
            <option value="kosugi">武蔵小杉駅</option>
        </select>
        <button type="submit" name="submit">駅変更</button>
    </form>
    <form action="select.php" method="POST">
        <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
        <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
        <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
        <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
        <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
        <button type="button" onclick="location.href='./index6.php'">新宿駅へ移動</button>
        <button type="button" onclick="location.href='./index7.php'">JR東海へ移動</button>
        <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
        <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
    </form>
    <!--表をすべて入れる-->
    <tableline>
        <?php
        for ($i = 1; $i <= $tablenum; $i++) {
            print('
 <table>
<caption><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
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
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="CDetail"><p3 class="news-banner__content"><p2 id="TDetail' . $i . $j . '"></p2></p3></td>
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
    <script type="text/javascript" src="js/function2.js"></script>
    <script type="text/javascript" src="js/typeColor.js"></script>
    <script type="text/javascript" src="js/Tforshow5.js"></script>
    <!--<script type="text/javascript" src="js/detailshow.js"></script>-->
    <script type="text/javascript" src="js/LastShow.js"></script>
</body>

</html>