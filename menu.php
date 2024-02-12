<html>

<head>
    <title>発車標メニュー</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/menu.css">
    <?php
    require('selection.php');
    ?>
</head>

<body>
    <h1>リアルタイム鉄道発車標</h1>
    <h1 class="Cheader">概要</h1>
    <div>プログラミング練習を主目的とした鉄道のリアルタイム発車標再現 </div>
    <div>特記のない限りは<span style="color:red;">2023年3月時点</span>での平日ダイヤの発車標をリアルタイムに再現(一部は土日ダイヤにも対応)
        <div>色や形式をできる限り再現しているが，フォント等はWindowsでデフォルトにあるものを使用 両数は非表示 </div>
        <div>表示駅は随時追加予定 </div>
        <h1>発車標表示駅一覧</h1>
        <table class="menutable">
            <caption>表示駅</caption>
            <p class="chushaku"><span style="color:red;">赤字</span>は土休日ダイヤ対応，もしくは終日ダイヤ<br>
             <span style="color:blue;">青字</span>は2024年3月ダイヤ対応 <br>
             <span style="color:purple;">紫字</span>は土休日ダイヤ，2024年3月ダイヤ対応<br></p>
            <p class="chushaku">()は未完成</p>
            <tr>
                <th>種類</th>
                <th>移動</th>
                <th>メイン駅名</th>
                <th>その他の駅名</th>
            </tr>
            <tr>
                <td>近鉄LCD</td>
                <td><button type="button" onclick="location.href='./index2.php'">移動</button></td>
                <td>鶴橋駅</td>
                <td><span style="color:red;">奈良駅</span>,<span style="color:red;">京都駅</span>,名古屋駅 </td>
            </tr>
            <tr>
                <td>JR東日本ATOS</td>
                <td><button type="button" onclick="location.href='./index3.php'">移動</button></td>
                <td>(武蔵小杉駅)</td>
                <td>横浜駅,小田原駅,<span style="color:red;">熱海駅</span>,宇都宮駅</td>
            </tr>
            <tr>
                <td>JR東日本新幹線</td>
                <td><button type="button" onclick="location.href='./index3_S.php'">移動</button></td>
                <td>長野駅</td>
                <td></td>
            </tr>
            <tr>
                <td>JR西日本</td>
                <td><button type="button" onclick="location.href='./index4.php'">移動</button></td>
                <td><span style="color:red;">北新地駅</span></td>
                <td>米原駅,姫路駅,岡山駅,糸崎駅,三原駅,<span style="color:red;">広島駅</span>,新見駅,<span style="color:red;">岩国駅</span>,徳山駅,下関駅</td>
            </tr>
            <tr>
                <td>JR西日本LCD</td>
                <td><button type="button" onclick="location.href='./index4_T.php'">移動</button></td>
                <td>(天王寺駅)</td>
                <td></td>
            </tr>
            <tr>
                <td>山陽新幹線主要駅</td>
                <td><button type="button" onclick="location.href='./index4_S2.php'">移動</button></td>
                <td>広島駅</td>
                <td></td>
            </tr>
            <tr>
                <td>東急</td>
                <td><button type="button" onclick="location.href='./index5.php'">移動</button></td>
                <td>二子玉川駅</td>
                <td>武蔵小杉駅 </td>
            </tr>
            <tr>
                <td>JR東日本24ドット</td>
                <td><button type="button" onclick="location.href='./index6.php'">移動</button></td>
                <td>長野駅</td>
                <td>松本駅,横浜駅</td>
            </tr>
            <tr>
                <td>JR東日本新幹線フルカラー</td>
                <td><button type="button" onclick="location.href='./index6_S.php'">移動</button></td>
                <td>東京駅</td>
                <td></td>
            </tr>
            <tr>
                <td>JR東海一般駅</td>
                <td><button type="button" onclick="location.href='./index7.php'">移動</button></td>
                <td>浜松駅</td>
                <td>沼津駅,静岡駅,豊橋駅,岐阜駅,大垣駅</td>
            </tr>
            <tr>
                <td>東海道新幹線一般駅</td>
                <td><button type="button" onclick="location.href='./index7_S1.php'">移動</button></td>
                <td>浜松駅</td>
                <td>豊橋駅</td>
            </tr>
            <tr>
                <td>JR東海LCD</td>
                <td><button type="button" onclick="location.href='./index7_T.php'">移動</button></td>
                <td>名古屋駅</td>
                <td>なし</td>
            </tr>
            <tr>
                <td>JR北海道</td>
                <td><button type="button" onclick="location.href='./index8.php'">移動</button></td>
                <td>(札幌駅)</td>
                <td>新函館北斗駅</td>
            </tr>
            <tr>
                <td>JR四国</td>
                <td><button type="button" onclick="location.href='./index9.php'">移動</button></td>
                <td>高松駅 </td>
                <td></td>
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