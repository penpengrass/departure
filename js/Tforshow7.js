if (station != '名古屋駅') {
    for (let te = 0; te < Tablenum; te++) {
        for (let tr = 0; tr < orderNum; tr++) {
            console.log(Type[te][tr]);
            TypeColorChange(te, tr, '快速', 'orange');
            TypeColorChange(te, tr, '特急', 'red');
            TypeColorChange(te, tr, 'ホームライナー', 'red');
            TypeColorChange(te, tr, '快特', 'red');
            if (Type[te][tr] === 'undefined') {
                console.log(":");
            } else if (Type[te][tr].length > 12) {
                document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-45%,0%)";
            } else if (Type[te][tr].length > 10) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
                //document.getElementsByClassName('shubetu' + (te + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            } else if (Type[te][tr].length > 8) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
            } else if (Type[te][tr].length > 7) {
                document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-0%,0%)";
            }
        }
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < orderNum; tr++) {
        if (Type[td][tr].length == 2) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.letterSpacing = '1em';
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.textIndent = '1em';
        }
        if (Des[td][tr].length == 2) {
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.letterSpacing = '1em';
            document.getElementById('TDes' + (td + 1) + (tr + 1)).style.textIndent = '1em';
        }
    }
}