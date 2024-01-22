for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        console.log(Type[te][tr]);
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