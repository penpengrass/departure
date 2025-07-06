for (tr = 0; tr < orderNum; tr++) {
    if (Type[Tennoji_inner_Table][tr] != '' && (Des[Tennoji_inner_Table][tr] == '' || Des[Tennoji_inner_Table][tr] != '桜島')) {
        Des[Tennoji_inner_Table][tr] = '鶴橋･京橋方面';
        document.getElementById('TDes' + (Tennoji_inner_Table + 1) + (tr + 1)).textContent = '鶴橋･京橋方面';
    }
    if (Type[Tennoji_outer_Table][tr] != '' && (Des[Tennoji_outer_Table][tr] == '' || Des[Tennoji_outer_Table][tr] == '天王寺' || Des[Tennoji_outer_Table][tr] == '大阪')) {
        Des[Tennoji_outer_Table][tr] = '新今宮･西九条方面';
        document.getElementById('TDes' + (Tennoji_outer_Table + 1) + (tr + 1)).textContent = '新今宮･西九条方面';
    }
    if (Type[Tennoji_inner_Table][tr] != '') {
        Type[Tennoji_inner_Table][tr] = '普通';
        document.getElementById('WType' + (Tennoji_inner_Table + 1) + (tr + 1)).textContent = '普通';
        console.log(Type[Tennoji_inner_Table][tr].length);
    }
    if(Type[Tennoji_outer_Table][tr]=='区間快速'){
        Type[Tennoji_outer_Table][tr] = '普通';
        document.getElementById('WType' + (Tennoji_outer_Table + 1) + (tr + 1)).textContent = '普通';
    }
}
var Nara_Detail = document.getElementById('TDetail11');
var Namba_Detail= document.getElementById('TDetail21');
var Outer_Detail = document.getElementById('TDetail31');
if (Type[0][0].includes('快速')) {
    Nara_Detail.textContent = '久宝寺・王寺・王寺から各駅';
}
if(Type[1][0].includes('快速')){
    Namba_Detail.textContent = '新今宮';
}
if (Type[2][0].includes('快速')) {
    Outer_Detail.textContent = '新今宮・大正・弁天町・西九条・福島・福島から各駅';
}
for (let td = 0; td < Tablenum; td++) {
    var LDetail = document.getElementById('TDetail' + (td + 1) + 1);
    if (Type[td][0] == '普通') {
        LDetail.textContent = '各駅';
        
    }
    DetailBanner(td, 0, 25);    
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        TwoLetterDistance(td, tr, Type, TType, 1, 0);
        var LengthOfType = Type[td][tr].length;
        if (LengthOfType == 2) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textIndent += '0.9em';
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.padding = '0px 15px';
        } else if (LengthOfType == 5) {
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.textIndent += '0.5em';
            document.getElementById('WType' + (td + 1) + (tr + 1)).style.padding = '0px 8px';
        }
    }
}
allLastShow();
let TenDes = new Array(orderNum);
let TenType = new Array(orderNum);
let space = 0;
//document.getElementsByTagName('table')[0].style.borderSpacing='10px';
allTwoLettersDistance(Des, TDes, 1, 1);
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        TenDes[tr] = document.getElementById('TDes' + (te + 1) + (tr + 1)).textContent;
        let WoType = document.getElementById('WType' + (te + 1) + (tr + 1));
        if (Type[te][tr] == '') {
            WoType.style.borderColor = 'black';
        }
        /*space = 56 - 14 * WoType.textContent.length;
        if (space < 0) {
            space = 0;
        }*/
        //document.getElementById('WType' + (te + 1) + (tr + 1)).style.letterSpacing = space + "px";
        if (TenDes[tr].length > 7) {
            //文字の大きさを取得する
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.7)" + "translate(-15%,0%)";
        } else if (TenDes[tr].length > 5) {
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
allJRTennoujiColor();
var Haruka = 4
for (var tr = 0; tr < orderNum; tr++) {
    let dHaruka = document.getElementById('WType' + (Haruka + 1) + (tr + 1))
    if (Type[Haruka][tr].startsWith('特急はるか')) {
        dHaruka.style.backgroundColor = 'skyblue';
    }
}
