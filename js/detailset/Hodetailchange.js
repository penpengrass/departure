console.log(Lname[0]);
console.log(number[0]);
if (station == '札幌駅') {
    if (number[1] > 173 || number[1] < 29) {
        AddStopping(airport, '札幌', '白石');
    }
    console.log(Lname[0]);
    if (Type[0][0].includes('おおぞら')) {
        if (number[0] == 9) {
            AddStopping(oozora, '新得', '十勝清水');
            AddStopping(oozora, '十勝清水', '芽室');
            AddStopping(oozora, '池田', '浦幌');
        } else if (number[0] == 7) {
            DeleteStopping(oozora, '新夕張');
            DeleteStopping(oozora, '追分');
            DeleteStopping(oozora, '池田');
        } else if (number[0] == 3) {
            AddStopping(oozora, '新夕張', '占冠');
        } else if (number[0] == 1) {
            DeleteStopping(oozora, '白糠');
        }
    } else if (Type[0][0].includes('北斗')) {
        if (number[0] > 16) {
            DeleteStopping(Tohakodate, '大沼公園');
        } else if (number[0] == 2) {
            DeleteStopping(Tohakodate, '白老');
            DeleteStopping(Tohakodate, '登別');
            DeleteStopping(Tohakodate, '洞爺');
        } else if (number[0] == 4) {
            DeleteStopping(Tohakodate, '白老');
        }
    }
}