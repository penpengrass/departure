<html>

<head>
    <title>メニュー</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/menu.css">
    <?php
    require('selection.php');
    ?>
</head>

<body>
<h1>発車標選択画面</h1>
<h1 class="Cheader">概要</h1>
    <div>プログラミング練習を主目的とした鉄道のリアルタイム発車標再現  </div>
<div>特記のない限りは<span style="color:red;">2023年3月時点</span>での平日ダイヤの発車標をリアルタイムに再現(一部は土日ダイヤにも対応)  
<div>色や形式をできる限り再現しているが，フォント等はWindowsでデフォルトにあるものを使用 両数は非表示  </div>
<div>表示駅は随時追加予定  </div>
<h1>発車標表示駅一覧</h1>
    <table class="menutable">
        <caption>表示駅</caption>
        <p class="chushaku"><span style="color:red;">赤字</span>は土休日ダイヤ対応，もしくは終日ダイヤ  <span style="color:blue;">青字</span>は
        2024年3月ダイヤ対応  <span style="color:purple;">紫字</span>は土休日ダイヤ，2024年3月ダイヤ対応</p>
        <tr>
            <th>種類</th>
            <th>路線</th>
            <th>駅名</th>
        </tr>
        <tr>
            <td>私鉄</td>
            <td>近鉄</td>
            <td>鶴橋駅,<span style="color:red;">奈良駅</span>,<span style="color:red;">京都駅</span>,名古屋駅 </td>
        </tr>
        <tr>
            <td>在来線</td>
            <td>JR東日本</td>
            <td>武蔵小杉駅(未完成),横浜駅(2種類),小田原駅,熱海駅,長野駅,松本駅,宇都宮駅</td>
        </tr>
        <tr>
            <td>在来線</td>
            <td>JR西日本</td>
            <td>北新地駅,米原駅,天王寺駅(未完成),姫路駅,岡山駅,糸崎駅,三原駅,広島駅,新見駅,岩国駅,徳山駅,下関駅</td>
        </tr>
        <tr>
            <td>新幹線</td>
            <td>山陽新幹線</td>
            <td>広島駅</td>
        </tr>
        <tr>
            <td>私鉄</td>
            <td>東急</td>
            <td>二子玉川駅,武蔵小杉駅 </td>
        </tr>
        <tr>
            <td>在来線</td>
            <td>JR東海</td>
            <td>沼津駅,静岡駅,浜松駅,豊橋駅,名古屋駅,岐阜駅,大垣駅</td>
        </tr>
        <tr>
            <td>新幹線</td>
            <td>東海道新幹線</td>
            <td>浜松駅,豊橋駅</td>
        </tr>
        <tr>
            <td>新幹線</td>
            <td>JR東日本</td>
            <td>東京駅,長野駅</td>
        </tr>
        <tr>
            <td>在来線/新幹線</td>
            <td>JR北海道</td>
            <td>札幌駅(未完成),新函館北斗駅</td>
        </tr>
        <tr>
            <td>在来線</td>
            <td>JR四国 </td>
            <td>高松駅(不正確) </td>
        </tr>
    </table>
    <p>JR西日本とJR東海の選択画面を表示</p>
    <div>
        <p>JR西日本の選択肢</p>
        <?php JRWStaSele('JR西日本駅選択');
        ?>
    </div>
    <div>
        <p>JR東海の選択肢</p>
        <form action="index7.php" method="POST">
            <select name="stasele">
                <option value="csv/JRC/numazu1.csv">沼津駅</option>
                <option value="csv/JRC/shizuoka1.csv">静岡駅</option>
                <option value="csv/JRC/hamamatsu1.csv">浜松駅</option>
                <option value="csv/JRC/toyohashi1.csv">豊橋駅</option>
                <option value="csv/JRC/gifu1.csv">岐阜駅</option>
                <option value="csv/JRC/ogaki1.csv">大垣駅</option>
            </select>
            <button type="submit" name="submit">JR東海駅選択</button>
        </form>
    </div>
    <form action="select.php" method="POST" value="gifu1">
        <button type="button" onclick="location.href='./index2.php'" value="近鉄へ移動">近鉄へ移動</button>
        <button type="button" onclick="location.href='./index3.php'" value="JR東日本へ移動">JR東日本へ移動</button>
        <button type="button" onclick="location.href='./index3_S.php'">新幹線長野駅へ移動</button>
        <button type="button" onclick="location.href='./index4.php'" value="JR西日本へ移動">JR西日本へ移動</button>
        <button type="button" onclick="location.href='./index4_S2.php'" value="JR西日本へ移動">山陽新幹線主要駅へ移動</button>
        <button type="button" onclick="location.href='./index5.php'" value="東急へ移動">東急へ移動</button>
        <button type="button" onclick="location.href='./index6.php'" value="長野駅へ移動">長野駅へ移動</button>
        <button type="button" onclick="location.href='./index6_S.php'">JR東日本新幹線へ移動</button>
        <button type="submit" name="gifu">JR東海へ移動</button>
        <button type="button" onclick="location.href='./index7_S1.php'">東海道新幹線へ移動</button>
        <button type="button" onclick="location.href='./index8.php'">JR北海道へ移動</button>
        <button type="button" onclick="location.href='./index9.php'">JR四国へ移動</button>
    </form>
    
    <h1 class="Cheader">今後追加する駅</h1>
    <li>新幹線 静岡駅 米原駅 岡山駅 博多駅 仙台駅 新青森駅</li>
    <li>JR北海道 旭川駅 </li>
    <li>JR東日本 赤羽駅 東京駅 新宿駅 大宮駅 甲府駅 水戸駅 仙台駅 福島駅 </li>
    <li>JR西日本 大阪駅 尼崎駅 新山口駅</li>
    <li>JR九州 小倉駅 博多駅</li>
    <li>JR四国 徳島駅 阿波池田駅 松山駅 高知駅</li>
    <li>JR東海 中津川駅</li>
    <h1 class="Cheader">今後対応予定</h1>
    <li>一部駅の番線表示</li>
    <li>停車駅表示を柔軟に(同じ列車名は同じ停車駅表示になっている)</li>
    <h1 class="Cheader">対応しない</h1>
    <li>英語表示</li>
    <li>一部駅の両数表示</li>
    <h1 class="Cheader">土休日ダイヤ対応駅</h1>
    <li>近鉄・・・京都駅 奈良駅</li>
    <li>JR西日本・・・北新地駅 広島駅 岩国駅</li>
    <li>JR東日本・・・長野駅 (松本駅)</l1><br>
        今後追加予定
    <h1 class="Cheader">2024年3月改正対応駅</h1>
    なし
</body>

</html>