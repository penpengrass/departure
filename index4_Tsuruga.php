<!DOCTYPE html>
<html>

<head>
    <?php
    require_once('PHP/variable.php');
    require('selection.php');
    require('PHP/table4.php');
    $files = array();
    $files[0] = 'csv/JRW_SH/tsuruga.csv';
    $files[1] = 'csv/JRW_SH/tsurugaStop.csv';
    $files[2] = 'csv/JRW/tsurugaStop.csv';
    $files[3] = 'csv/JRW/tsuruga1.csv';
    $files[4] = 'csv/JRW/tsuruga1.csv';
    $files[5] = 'csv/JRW/tsuruga2.csv';
    $files[6] = 'csv/JRW/tsuruga3.csv';
    $tablenum = 7;
    $OrderNum = 3;
    $detailflag = 2;
    $detaillength = 2;
    require('getCSV.php');
    ?>
    <title>JR西日本駅発車標</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/styleJRW_SZ.css">
    <link rel="stylesheet" href="css/banner.css">
    <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
    <script type="text/javascript" src="js/function1.js"></script>
    <script type="text/javascript" src="js/functionTime.js"></script>
    <script type="text/javascript" src="js/detailset/JRHoShindetailset.js"></script>
    <script type="text/javascript" src="js/stationset4.js"></script>
    <script type="text/javascript" src="js/stationset4_S.js"></script>
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
        <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
        <button type="button" onclick="location.href='./index2.php'">近鉄へ移動</button>
        <button type="button" onclick="location.href='./index3.php'">JR東日本へ移動</button>
        <button type="button" onclick="location.href='./index4.php?station=maibara'">米原駅へ移動</button>
        <button type="button" onclick="location.href='./index4_S2.php'">広島駅へ移動</button>
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
        for ($i = 1; $i <= 2; $i++) {
            JRWSTable2($i, $tablenums, 2, 2);
        }
        for ($i = 3; $i <= $tablenum; $i++) {
            JRWZTable($i, 2);
        }

        ?>
    </tableline>
    <p id="supplement">臨時列車の有無や号数, 番線や停車駅は不正確 2024年3月16日以降</p>
    <!--ここから内部のこと-->
    <script type="text/javascript" src="js/Time.js"></script>
    <script type="text/javascript" src="js/Timer.js"></script>
    <script type="text/javascript" src="js/TimeShow.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/variable2.js"></script>
    <script type="text/javascript" src="js/function2.js"></script>
    <script type="text/javascript" src="js/function3.js"></script>
    <script type="text/javascript" src="js/detailfunction.js"></script>
    <script type="text/javascript" src="js/functionW.js"></script>
    <script type="text/javascript" src="js/functionDetail.js"></script>
    <script type="text/javascript" src="js/detailshow.js"></script>
    <script type="text/javascript" src="js/typeColor.js"></script>
    <script type="text/javascript" src="js/Tforshow4_S.js"></script>
    <script type="text/javascript" src="js/Tforshow4_Ts.js"></script>
</body>

</html>