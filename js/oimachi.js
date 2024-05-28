//二子新地と高津に停車するかどうかの処理
if (station == '二子玉川駅') {
    for (let oi = 0; oi < Type[2].length; oi++) {
        if (Type[2][oi] == '各緑') {
            document.getElementById('TType3' + (oi + 1)).textContent = '各停';
            document.getElementById('TType3' + (oi + 1)).style.color = 'white';
            document.getElementById('TType3' + (oi + 1)).style.backgroundColor = 'green';
            document.getElementById('TDetail3' + (oi + 1)).textContent = '二子新地 高津通過';
        } else if (Type[2][oi] == '各青') {
            document.getElementById('TType3' + (oi + 1)).textContent = '各停';
            document.getElementById('TType3' + (oi + 1)).style.color = 'white';
            document.getElementById('TType3' + (oi + 1)).style.backgroundColor = 'blue';
            document.getElementById('TDetail3' + (oi + 1)).textContent = '二子新地 高津停車';
        }
    }
}
allTwoLettersDistance(Des, TDes, 1, 1);