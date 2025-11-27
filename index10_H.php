<!DOCTYPE html>
<html>

<head>
    <title>JR九州発車標</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/styleJRK_H.css">
    <link rel="stylesheet" href="css/banner.css">
    <?php
    $files = array();
    require_once('PHP/variable.php');
    $files[0] = 'csv/JRW_S/hakata1.csv';
    $files[1] = 'csv/JRW_S/hakata2.csv';
    $files[2] = 'csv/JRK/hakata1.csv';
    $files[3] = 'csv/JRK/hakata1.csv';
    $files[4] = 'csv/JRK/hakata2.csv';
    $files[5] = 'csv/JRK/hakata3.csv';
    $tablenum = 6;
    $column = 4;
    $tableStrange = 1;
    $tablenums = [4, 3, 5, 2, 5, 2];
    $undertable = [1, 0, 1, 0, 1, 0];
    $station = '博多駅';
    require_once('getCSV.php');
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=0.55, maximum-scale=1.0, user-scalable=no">
    <script type="text/javascript" src="js/module/firstTableEdit.js"></script>
    <script type="text/javascript" src="js/stationset10.js"></script>
    <script type="text/javascript" src="js/detailStopData/JRdetail.js"></script>
    <script type="text/javascript" src="js/detailStopData/JRW_S.js"></script>

</head>

<body>
    <div><time>現在時刻:<span id="TTime"></span></time></div>
    <div>
        <p id="stationname">広島駅</p>
    </div>
    <!--駅選択部分-->
    <form action="PHP/files10.php" method="POST">
        <select name="staselect10">
            <option value="kokura">小倉駅</option>
            <option value="hakata">博多駅</option>
        </select>
        <button type="submit" name="submit">駅変更</button>
    </form>
    <form action="select.php" method="POST">
        <button type="button" class="koshin" value="更新" onclick="koshin()">更新</button>
        <button type="button" onclick="location.href='./menu.php'">メニューへ移動</button>
        <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
        <button type="button" onclick="location.href='./index4.php?station=shimonoseki'">下関駅へ移動</button>
        <button type="button" onclick="location.href='./index4_S2.php?station=hakata'">新幹線博多駅へ移動</button>
        <button type="button" onclick="location.href='./index6.php?station=yokohama'">LCD横浜駅へ移動</button>
        <button type="button" onclick="location.href='./index7.php?station=ogaki'">大垣駅へ移動</button>
        <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線</button>
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
      <th width="15%" id="HType' . $i . '"></th>
      <th width="25%" id="HName' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '"></th>
      <th width="25%" id="HDes' . $i . '"></th>
      <th width="15%" class="HrailNumber" id="HrNumber' . $i . '"></th>
    </tr>
  ');
            for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
                print('
    <tr id="TRow' . $i . $j . '">
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
            }
            if ($undertable[$i - 1] == 1) {
                $i++;
                print('
                <th class="Ctitle" colspan="5"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></th>
                <tr>
                <th width="15%" id="HType' . $i . '"></th>
                <th width="25%" id="HName' . $i . '"></th>
                <th width="20%" id="HTime' . $i . '"></th>
                <th width="25%" id="HDes' . $i . '"></th>
                <th width="15%" class="HrailNumber" id="HrNumber' . $i . '"></th>
              </tr>
              ');
                for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
                    print('
                    <tr id="TRow' . $i . $j . '">
                    <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
                    <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
                    <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
                    <td class="Destination" id="TDes' . $i . $j . '"></td>
                    <td class="railnumber" id="TNum' . $i . $j . '"></td>
                  </tr>
            ');
                }
                print('
</table>
');
            }
            if ($i % $column == 0) {
                print('</tableline>
  <tableline>');
            }
        }
        ?>
    </tableline>
    <p id="supplement">番線や号数は不正確</p>
</body>
<!--ここから内部のこと-->
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/module/timeInfoSet.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/module/firstDisplayEdit.js"></script>
<script type="text/javascript" src="js/module/colorSimpleSet.js"></script>
<script type="text/javascript" src="js/module/detailBannerSwitch.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/Tforshow10_H.js"></script>


</html>