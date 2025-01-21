allLastShow();
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TypeColorChange(td, tr, '快速', 'orange');
        TypeColorChange(td, tr, '特急', 'red');
        TwoLetterDistance(td, tr, Type, TType, 1, 0);
        TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        TwoLetterDistance(td, tr, Des, TDes, 0.4, 0.5, 3);
        if (Type[td][tr] === 'undefined') {
            console.log(":");
        } else if (Type[td][tr].length > 12) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.boxSizing = "border-box";
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-47%,0%)";
        } else if (Type[td][tr].length > 10) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
            //document.getElementsByClassName('shubetu' + (td + 1) + (tr + 1))[0].style.transform = "scaleX(0.55)" + "translate(-30%,0%)";
        } else if (Type[td][tr].length > 8) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-25%,0%)";
        } else if (Type[td][tr].length > 7) {
            document.getElementById('TType' + (td + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(-10%,0%)";
        }
    }
}

Bansenshow(1);