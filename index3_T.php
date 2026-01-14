<!DOCTYPE html>
<html>

<head>
    <title>JR東日本都心部発車標</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/styleATOS.css">
    <link rel="stylesheet" href="css/styleATOS_S.css">
    <link rel="stylesheet" href="css/styleFukushima.css">
    <link rel="stylesheet" href="css/banner.css">
    <!--タブのアイコンを変えたいが、公式HPと混同しそうなので保留-->
    <!--<link rel="icon" href="PNG/favicon.ico" id="favicon">
  <link rel="apple-touch-icon" sizes="180x180" href="PNG/apple-touch-icon-180x180.png">
  <link rel="icon" href="PNG/JR東日本マーク.png" id="favicon">-->
    <?php
    $files = array();
    require_once('PHP/variable.php');
    $files[0] = 'csv/JRE_S/fukushima1.csv';
    $files[1] = 'csv/JRE_S/fukushima2.csv';
    $files[2] = 'csv/JRE_T/fukushima3.csv';
    $files[3] = 'csv/JRE_T/fukushima4.csv';
    $files[4] = 'csv/JRE_T/fukushima5.csv';
    $tablenum = 5;
    $tableStrange = 1;
    $tablenums = [2, 2, 3, 3, 3];
    require('PHP/files3.php');
    require('PHP/select3.php');
    require('PHP/table3.php');
    require_once('getCSV.php');
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
    <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
    <script type="text/javascript" src="js/module/connectTable.js"></script>
    <script type="text/javascript" src="js/stationset3_S.js"></script>
    <script type="text/javascript" src="js/detailStopData/JRdetail.js"></script>
    <script type="text/javascript" src="js/detailStopData/JRTohokuShinset.js"></script>

</head>

<body>
    <div><time>現在時刻:<span id="TTime"></span></time></div>
    <div>
        <p id="stationname">広島駅</p>
    </div>
    <!--駅選択部分-->
    <?php
    JRATOSStaSele('駅変更');
    JRATOS_SStaSele('駅変更');
    ?>
    <form action="select.php" method="POST">
        <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
        <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
        <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
        <button type="button" onclick="location.href='./index4.php'">JR西日本へ移動</button>
        <button type="button" onclick="location.href='./index5.php'">東急へ移動</button>
        <button type="button" onclick="location.href='./index6.php?station=yokohama'">LCD横浜駅へ移動</button>
        <button type="button" onclick="location.href='./index6_S.php'">新幹線東京駅へ移動</button>
        <button type="button" onclick="location.href='./index7.php?station=numazu'">沼津駅へ移動</button>
        <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線</button>
        <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
    </form>
    <!--表をすべて入れる-->
    <tableline>
        <?php
        for ($i = 1; $i <= 2; $i++) {
            JRE_STable($i, $tablenums);
        }
        for ($i = 3; $i <= $tablenum; $i++) {
            JRATOSTable($i, $tablenums);
        }
        ?>
    </tableline>
    <p id="supplement">臨時列車の有無，停車駅など一部表示は不正確<br></p>
    <h1 class="Cheader">案内</h1>
    <p id="guidance"></p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/displaySwitch.js"></script>
<script type="text/javascript" src="js/module/detailSimpleEdit.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/firstDetailEdit.js"></script>
<script type="text/javascript" src="js/module/carsEdit.js"></script>
<script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
<script type="text/javascript" src="js/module/detailBannerSwitch.js"></script>
<script type="text/javascript" src="js/module/displayEdit6.js"></script>
<script type="text/javascript" src="js/module/detailMainPut.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/Tforshow3_S.js"></script>
<script type="text/javascript" src="js/Tforshow3_T.js"></script>
<script type="text/javascript" src="js/LastShow.js"></script>

</html>