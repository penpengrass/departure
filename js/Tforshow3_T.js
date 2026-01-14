if (station == '福島駅') {
    for (var td = 2; td < 5; td++) {
        rowremove(td, 'HName', 'TName');
        document.getElementById('HType' + (td + 1)).style.width = "38%";
        document.getElementById('HDes' + (td + 1)).style.width = "25%";
    }
    for (var tr = 0; tr < 3; tr++) {
        TypeColorChange(4, tr, 'つばさ', 'red');
        if (Type[4][tr].startsWith('つばさ')) {
            document.getElementById('WType5' + (tr + 1)).textContent += '号';
        }
    }
    for (var td = 0; td < 5; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 0.5, 0.7);
            TwoLetterDistance(td, tr, Type, TType, 1, 0.9);
        }
    }
    console.log(Detail);
    doallDetailShow(18, 2);
    var guide = document.getElementById('guidance');
    comment.innerHTML = '在来線東口改札を再現、阿武隈急行と飯坂線は現実の発車標自体が存在しない。<br>' + comment.innerHTML;
    guide.innerHTML += '<li>1番線と阿武隈急行線、飯坂線は同一ホーム<br></li>';
    guide.innerHTML += '<li>2･3番線が同一ホーム、4～6番線は同一ホーム<br></li>';
}