import { AllWordChange, allLastShow, allTwoLettersDistance } from "./module/firstDisplayEdit";
//二子新地と高津に停車するかどうかの処理
if (station == '二子玉川駅') {
    for (let oi = 0; oi < Type[2].length; oi++) {
        if (Type[2][oi] == '各緑') {
            Type[2][oi] = '各停';
            document.getElementById('WType3' + (oi + 1))!.style.color = 'white';
            document.getElementById('WType3' + (oi + 1))!.style.backgroundColor = 'green';
            document.getElementById('TDetail3' + (oi + 1))!.textContent = '二子新地 高津通過';
        } else if (Type[2][oi] == '各青') {
            Type[2][oi] = '各停';
            document.getElementById('WType3' + (oi + 1))!.style.color = 'white';
            document.getElementById('WType3' + (oi + 1))!.style.backgroundColor = 'blue';
            document.getElementById('TDetail3' + (oi + 1))!.textContent = '二子新地 高津停車';
        }
    }
    let Interval = TableMin[0][1] - TableMin[0][0];
    if (Type[0][0] == '各停' && Type[0][1] == '急行' && Interval < 5) {
        document.getElementById('TDetail11')!.textContent = '桜新町で急行の通過待ち';
    }
} else if (station == '武蔵小杉駅') {
    for (let tr = 0; tr < Type[2].length; tr++) {
        AllWordChange(0, tr, Type, 'Ｆライナー', 'Ｆ特急');
        AllWordChange(3, tr, Type, 'Ｆライナー', 'Ｆ特急');
        AllWordChange(0, tr, Type, '通勤特急', '通特');
        AllWordChange(3, tr, Type, '通勤特急', '通特');
    }

}
allTwoLettersDistance(Des, TDes, 1, 1);
allLastShow();