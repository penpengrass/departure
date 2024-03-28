
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        document.getElementById('WType' + (td + 1) + (tr + 1)).style.display = 'inline-block';
        document.getElementById('WType' + (td + 1) + (tr + 1)).style.textAlign = 'center';
        TwoLetterDistance(td, tr, Type, TType, 1, 0);
        var LengthOfType=Type[td][tr].length;
        if (LengthOfType == 2) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textIndent += '0.9em';
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.padding = '0px 15px';
        }else if(LengthOfType == 5){
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textIndent += '0.5em';
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.padding = '0px 8px';
        }
        console.log(document.getElementById('WType' + (td + 1) + (tr + 1)).style.display);
    }
}
let TenDes = new Array(orderNum);
let TenType = new Array(orderNum);
let WoType = new Array(orderNum);
let space = 0;
//document.getElementsByTagName('table')[0].style.borderSpacing='10px';
console.log(document.getElementsByTagName('th').length);
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        TenDes[tr] = document.getElementById('TDes' + (te + 1) + (tr + 1)).textContent;
        WoType[tr] = document.getElementById('WType' + (te + 1) + (tr + 1)).textContent;
        space = 56 - 14 * WoType[tr].length;
        if (space < 0) {
            space = 0;
        }
        //document.getElementById('WType' + (te + 1) + (tr + 1)).style.letterSpacing = space + "px";
        if (TenDes[tr].length > 7) {
            //文字の大きさを取得する
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
        }else if(TenDes[tr].length>5){
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.8)" + "translate(-15%,0%)";
        }
        TenType[tr] = document.getElementById('TType' + (te + 1) + (tr + 1)).textContent;
        if (TenType[tr].length > 5) {
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.textAlign = "center";
            document.getElementById('TType' + (te + 1) + (tr + 1)).style.boxSizing = "border-box";
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.display = "inline-block";
            document.getElementById('WType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-20%,0%)";
        }
    }
}