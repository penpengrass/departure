function DesMiddle(td, tr, word) {
    var matches = new Array(orderNum);
    var Desword = new RegExp("(\\D+)" + word + "(\\D+)");
    //console.log(Desword);
    //console.log(Des[td][tr]);
    //(/(\D+)(\d+)両/);
    //matches[tr] = Des[td][tr].match(/(\D+)連絡(\D+)/);
    matches[tr] = Des[td][tr].match(Desword);
    //console.log(matches[tr]);
    if (matches[tr]) {
        /*console.log(matches[tr][0] + ":" + tr);
        console.log(matches[tr][1] + ":" + tr);
        console.log(matches[tr][2] + ":" + tr);*/
        document.getElementById('TDes' + (td + 1) + (tr + 1)).innerHTML =
            '<span class="DesLeft">' + matches[tr][1] + '</span>' + '<span class="DesMiddle">' + word + '</span>' + '<span id="DesRight' + (td + 1) + (tr + 1) + '">' + matches[tr][2] + '</span>';
        var DesRight = document.getElementById('DesRight' + (td + 1) + (tr + 1));
        //console.log(DesRight.textContent.length);
        if (DesRight.textContent.length > 3) {
            console.log(DesRight.textContent.length);
            DesRight.style.display = 'inline-block';
            DesRight.style.transform = "scaleX(0.75)" + "translate(-20%,0%)";
        }
    } else {
        //console.log(td + ':' + tr + word + 'はマッチしない');
    }

}