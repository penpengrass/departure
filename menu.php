<html>

<head>
    <title>発車標メニュー</title>
    <link rel="stylesheet" href="css/styleAll.css">
    <link rel="stylesheet" href="css/menu.css">
    <?php
    require('PHP/select4.php');
    ?>
</head>

<body>
    <h1>リアルタイム鉄道発車標</h1>
    <h1 class="Cheader">概要</h1>
    <div>プログラミング練習を主目的とした鉄道のリアルタイム発車標再現 </div>
    <div>2024年3月ダイヤの発車標をリアルタイムに再現
    <div>土休日ダイヤ対応の駅は実際の土休日や祝日と表示ダイヤが連動している</div>
        <div>色や形式をできる限り再現しているが，フォント等はWindowsでデフォルトにあるものを使用 両数は非表示 </div>
        <div>表示駅は随時追加予定 </div>
        <h1>発車標表示駅一覧</h1>
        <table class="menutable">
            <caption>表示駅</caption>
            <p class="chushaku">
                <span style="color:red;">赤字</span>は土休日ダイヤ対応，もしくは終日ダイヤ<br>
                黒字は平日ダイヤのみ <br>
                ただし、横浜駅のみ2023年3月の平日ダイヤ
            </p>
            <p class="chushaku"></p>
            <tr>
                <th>種類</th>
                <th>移動</th>
                <th class="mainstation">メイン駅名</th>
                <th>その他の駅名</th>
            </tr>
            <tr>
                <td>近鉄LCD</td>
                <td><button type="button" onclick="location.href='./index2.php'">移動</button></td>
                <td><span style="color:black;">鶴橋駅</span></td>
                <td><span style="color:red;">奈良駅</span>, <span style="color:red;">京都駅</span>, <span style="color:red;">名古屋駅</span> </td>
            </tr>
            <tr>
                <td>JR東日本ATOS</td>
                <td><button type="button" onclick="location.href='./index3.php'">移動</button></td>
                <td><span style="color:black;">武蔵小杉駅</span></td>
                <td>横浜駅, <span style="color:black;">小田原駅</span>, <span style="color:red;">熱海駅</span>, 
                <span style="color:black;">宇都宮駅</sp></td>
            </tr>
            <tr>
                <td>JR東日本新幹線</td>
                <td><button type="button" onclick="location.href='./index3_S.php'">移動</button></td>
                <td><span style="color:black;">長野駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR西日本</td>
                <td><button type="button" onclick="location.href='./index4.php'">移動</button></td>
                <td><span style="color:red;">北新地駅</span></td>
                <td class="long"><span style="color:red;">米原駅</span>, <span style="color:red;">三ノ宮駅</span>, 
                <span style="color:black;">姫路駅</span>, <span style="color:black;">岡山駅</span>, <span style="color:red;">糸崎駅</span>, 
                <span style="color:red;">三原駅</span>, <span style="color:red;">広島駅</span>, <span style="color:black;">新見駅</span>, 
                <span style="color:red;">岩国駅</span>, <span style="color:black;">徳山駅</span>, <span style="color:black;">下関駅</span>
                </td>
            </tr>
            <tr>
                <td>JR西日本フルカラーLED</td>
                <td><button type="button" onclick="location.href='./index4_A.php'">移動</button></td>
                <td><span style="color:red;">大阪駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR西日本LCD</td>
                <td><button type="button" onclick="location.href='./index4_T.php'">移動</button></td>
                <td><span style="color:black;">天王寺駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR西日本北陸</td>
                <td><button type="button" onclick="location.href='./index4_Tsuruga.php'">移動</button></td>
                <td><span style="color:red;">敦賀駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR西日本新幹線主要駅</td>
                <td><button type="button" onclick="location.href='./index4_S2.php'">移動</button></td>
                <td><span style="color:black;">広島駅</span></td>
                <td><span style="color:black;">博多駅</span></td>
            </tr>
            <tr>
                <td>東急</td>
                <td><button type="button" onclick="location.href='./index5.php'">移動</button></td>
                <td><span style="color:black;">二子玉川駅</span></td>
                <td><span style="color:black;">武蔵小杉駅</span></td>
            </tr>
            <tr>
                <td>JR東日本24ドット</td>
                <td><button type="button" onclick="location.href='./index6.php'">移動</button></td>
                <td>新宿駅</td>
                <td> 東京駅, 横浜駅, <span style="color:red;">長野駅</span>, <span style="color:red;">松本駅</span></td>
            </tr>
            <tr>
                <td>JR東日本新幹線フルカラー</td>
                <td><button type="button" onclick="location.href='./index6_S.php'">移動</button></td>
                <td><span style="color:black;">東京駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR東海一般駅</td>
                <td><button type="button" onclick="location.href='./index7.php'">移動</button></td>
                <td><span style="color:black;">浜松駅</span></td>
                <td><span style="color:black;">沼津駅</span>, <span style="color:black;">静岡駅</span>, <span style="color:black;">豊橋駅</span>, <span style="color:black;">岐阜駅</span>, <span style="color:black;">大垣駅</span></td>
            </tr>
            <tr>
                <td>JR東海LCD</td>
                <td><button type="button" onclick="location.href='./index7_T.php'">移動</button></td>
                <td><span style="color:black;">名古屋駅</span></td>
                <td>なし</td>
            </tr>
            <tr>
                <td>東海道新幹線一般駅</td>
                <td><button type="button" onclick="location.href='./index7_S1.php'">移動</button></td>
                <td><span style="color:red;">浜松駅</span></td>
                <td><span style="color:red;">豊橋駅</span></td>
            </tr>
            <tr>
                <td>JR北海道</td>
                <td><button type="button" onclick="location.href='./index8.php'">移動</button></td>
                <td><span style="color:black;">札幌駅</span></td>
                <td><span style="color:black;">新函館北斗駅</span></td>
            </tr>
            <tr>
                <td>JR四国</td>
                <td><button type="button" onclick="location.href='./index9.php'">移動</button></td>
                <td><span style="color:black;">高松駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR九州</td>
                <td><button type="button" onclick="location.href='./index10.php'">移動</button></td>
                <td><span style="color:black;">小倉駅</span></td>
                <td></td>
            </tr>
            <tr>
                <td>JR九州LCD</td>
                <td><button type="button" onclick="location.href='./index10_H.php'">移動</button></td>
                <td><span style="color:black;">博多駅</span></td>
                <td>なし</td>
            </tr>
        </table>
        <p>JR西日本の選択画面を表示</p>
        <div>
            <p>JR西日本の選択肢</p>
            <?php JRWStaSele('JR西日本駅選択');
            ?>
        </div>
        <h1 class="Cheader">今後追加する駅</h1>
        <li>新幹線 静岡駅 米原駅 岡山駅 仙台駅 新青森駅</li>
        <li>JR北海道 旭川駅 </li>
        <li>JR東日本 赤羽駅 大宮駅 水戸駅 仙台駅 福島駅 </li>
        <li>北陸地方 福井駅 金沢駅</li>
        <li>JR西日本 京都駅 尼崎駅 新山口駅</li>
        <li>JR九州 鳥栖駅</li>
        <li>JR四国 徳島駅 阿波池田駅 松山駅 高知駅</li>
        <li>JR東海 中津川駅</li>
        <h1 class="Cheader">今後対応予定</h1>
        <li>一部駅の番線表示</li>
        <li>停車駅表示を柔軟に(同じ列車名は同じ停車駅表示になっている)</li>
        <h1 class="Cheader">対応しない</h1>
        <li>英語表示</li>
        <li>一部駅の両数表示</li>
</body>

</html>