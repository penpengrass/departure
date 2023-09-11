//主にJR西日本で使う
//交互表示
var countshow = 0;
function toggleContent(order, Tablenum, originDes, alDes, DesorType) {
    var show;
    if (countshow == 0) {
        countshow++;
        show = originDes; // 1つ目の表示内容
    } else {
        countshow--;
        show = alDes;
    }
    if (DesorType === Des) {
        //console.log("document");
        document.getElementById('TDes' + '' + (Tablenum + 1) + '' + (order + 1)).textContent = show;
        var alterDes=document.getElementById('TDes' + '' + (Tablenum + 1) + '' + (order + 1));
        console.log(alterDes.textContent);
        console.log(alterDes.textContent.length);
        if(alterDes.textContent.length>7){
            alterDes.style.transform="scaleX(0.80)" + "translate(-15%,0%)";
        }else{
            alterDes.style.transform="scaleX(1.00)" + "translate(0%,0%)";
        }
    } else {
        document.getElementById('TType' + '' + (Tablenum + 1) + '' + (order + 1)).textContent = show;
    }
}
function toggleAllinTableContent(Tablenum, originDes, alDes, DesorType, keyword) {
    console.log("ALL");
    for (var tr = 0; tr < DesorType.length; tr++) {
        console.log(DesorType[Tablenum][tr] + ":" + keyword);
        if (DesorType[Tablenum][tr].includes(keyword)) {
            console.log("Allif");
            toggleContent(tr, Tablenum, originDes, alDes, DesorType);
        }
    }

}
function alternating2(Tablenum, originDes, alDes, DesorType, keyword) {
    const alterTimer = setInterval(() => {
        toggleAllinTableContent(Tablenum, originDes, alDes, DesorType, keyword);
    }, 1000); // 1秒ごとに実行
    clearInterval(alterTimer);
    setInterval(alterTimer);
}

function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}
//1か所だけランダム変化する
let alterchange;
function alternatingOne(Tablenum, DesorType, keyword, alDes) {
    for (var tr = 0; tr < DesorType[Tablenum].length; tr++) {
        if (DesorType[Tablenum][tr].includes(keyword)) {
            setInterval(() => {

                var d = DesorType[Tablenum][tr];
                toggleContent(tr, Tablenum, d, alDes, DesorType);
            }, 5000); // 1秒ごとに実行
            alterchange=tr;
            break;
        } else {
        }
    }
}
//交互表示 引数は順に何番目の表か,条件が行先か種別か,交互にする条件,交互にするもう一つのワード
function alternating(Tablenum, DesorType, keyword, alDes) {
    console.log("alter");
    var tr = 0;
    console.log(tr);
    if (DesorType[Tablenum][tr].includes(keyword)) {
        var d = DesorType[Tablenum][tr];
        function toggleTrValue() {
            tr = (tr + 1) % DesorType.length; // 0 から DesorType.length - 1 までループ
        }

        // 5秒ごとに toggleTrValue を呼び出す
        setInterval(() => {
            if (DesorType[Tablenum][tr].includes(keyword)) {
                toggleTrValue();
            }
        }, 1000);

        // tr の値に応じて処理を行う
        setInterval(() => {
            if (DesorType[Tablenum][tr].includes(keyword)) {
                toggleAllinTableContent(Tablenum + 1, d, alDes, DesorType);
            }
        }, 1000); // 1秒ごとに実行
    }
    /*
    if (tr < DesorType[Tablenum].length) {
        console.log("tr:" + tr);
        for (let tr = 0; tr < DesorType.length; tr++) {*/
    /*
        if (DesorType[Tablenum][tr].includes(keyword)) {
            var d = DesorType[Tablenum][tr];
            //for文の中でsetIntervalを使うにはこうする
            let intervals = [];
            (function (index) {
                const interval = setInterval(() => {
                    console.log("tr:" + tr);
                    toggleContent(index, Tablenum + 1, d, alDes, DesorType);
                }, (index === 0 ? 5000 : 6000)); // 1秒ごとのインターバル

                intervals.push(interval); // インターバルの ID を保存
            })(tr);
        }
    /*
    let interval;
    for (let tr = 0; tr < DesorType.length; tr++) {
        (function (index) {
            interval = setInterval(() => {
                console.log("tr:" + tr);
                toggleContent(index, Tablenum + 1, d, alDes, DesorType);
            }, 1000); //
        })(tr);
    }*/
}
//alternatingがうまくいかないとき
function altershow(Tablenum, keyword, alshow, tr) {
    for (var tr = 0; tr < Des[Tablenum].length; tr++) {
        if (Des[Tablenum][tr].includes(keyword)) {
            document.getElementById('TDes' + (Tablenum + 1) + '' + (tr + 1)).textContent = alshow;
        }
    }
}