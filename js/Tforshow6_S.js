JRNameDevide(2);
for (let te = 0; te < Tablenum; te++) {
    for (let tr = 0; tr < orderNum; tr++) {
        if (Type[te][tr] === 'undefined') {
            console.log(":");
        } else if (Type[te][tr].length > 7) {
            document.getElementById('TType' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.50)" + "translate(-50%,0%)";
        }
        if (Des[te][tr] === 'undefined') {
            //console.log(":");
        } else if (Des[te][tr].length > 7) {
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.60)" + "translate(-15%,0%)";
        } else if (Des[te][tr].length > 5) {
            document.getElementById('TDes' + (te + 1) + (tr + 1)).style.transform = "scaleX(0.80)" + "translate(0%,0%)";
        }
    }
}
allLastShow();
Bansenshow();
flagmarkerase(0,'WType');
//種別の色   
for (var tr = 0; tr < 4; tr++) {
    JREScolor(0, tr, 'やまびこ', '<span class="green">やまびこ</span>', yellowgreen);
    JREScolor(0, tr, 'なすの', '<span class="green">なすの</span>', yellowgreen);
    JREScolor(0, tr, 'つばさ', '<span class="orange">つばさ</span>', orange);
    JREScolor(0, tr, 'はやぶさ', '<span class="green">はやぶさ</span>', yellowgreen);
    JREScolor(0, tr, 'はやぶさ･こまち', '<span class="green">はやぶさ</span>･<span class="pink">こまち</span>', pink);
    JREScolor(0, tr, 'やまびこ･つばさ', '<span class="green">やまびこ</span>･<span class="orange">つばさ</span>', orange);
}
for (var tr = 0; tr < 4; tr++) {
    JREScolor(1, tr, 'とき', '<span class="brown">とき</span>', 'brown');
    JREScolor(1, tr, 'たにがわ', '<span class="brown">たにがわ</span>', 'brown');
    JREScolor(1, tr, 'あさま', '<span class="blue">あさま</span>', '#456f99');
    JREScolor(1, tr, 'はくたか', '<span class="blue">はくたか</span>', '#456f99');
    JREScolor(1, tr, 'かがやき', '<span class="blue">かがやき</span>', '#456f99');
}