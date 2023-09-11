// JavaScript でデータを作成
/*var jsData = "Hello World";

// Ajaxリクエストを送信
var xhr = new XMLHttpRequest();
xhr.open("POST", "getCSV.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
    console.log("a");
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("PHP からのレスポンス: " + xhr.responseText);
    }
};
console.log(jsData);
xhr.send("jsVariable=" + jsData);*/
let device = document.getElementById('tableline');
if (window.matchMedia("(max-width: 767px)").matches) {
    // 767px以下の処理
    //device.remove();
} else if (window.matchMedia("(min-width:767px)").matches) {
    // 767px以上の処理
    console.log("PC");
    //device.remove();
}
// 4x2の配置
function arrange4x2() {
    for (let i = 1; i <= 4; i++) {
        console.log("tablerow:" + i);
        const row = document.createElement("div2");
        row.className = "row"; // CSSでスタイルを設定
        for (let j = 1; j <= 2; j++) {
            const table = document.getElementById("table" + ((i - 1) * 2 + j));
            table.appendChild(row);
        }
        document.body.appendChild(row);
    }
}
arrange4x2();