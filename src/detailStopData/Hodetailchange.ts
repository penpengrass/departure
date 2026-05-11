import { DetailReplace_Set_One } from "../module/detailSimpleEdit";
import { DeleteStopping, AddStopping } from "../module/firstDetailEdit";
import { TrainNumber, Lname } from "../module/firstDisplayEdit";
import { trainTables } from "../types/trainTable";
import { oozora, airport, Tohakodate } from "./Hodetailset";
console.log(Lname[0]);
console.log(TrainNumber[0]);
if (station == '札幌駅') {
    if (TrainNumber[1] > 173 || TrainNumber[1] < 29) {
        AddStopping(airport, '札幌', '白石');
    }
    console.log(Lname[0]);
    if (Type[0][0].includes('おおぞら')) {
        if (TrainNumber[0] == 9) {
            AddStopping(oozora, '新得', '十勝清水');
            AddStopping(oozora, '十勝清水', '芽室');
            AddStopping(oozora, '池田', '浦幌');
        } else if (TrainNumber[0] == 7) {
            DeleteStopping(oozora, '新夕張');
            DeleteStopping(oozora, '追分');
            DeleteStopping(oozora, '池田');
            DeleteStopping(oozora, '白糠');
        } else if (TrainNumber[0] == 3) {
            AddStopping(oozora, '新夕張', '占冠');
        } else if (TrainNumber[0] == 1) {
            DeleteStopping(oozora, '白糠');
        }
    } else if (Type[0][0].includes('北斗')) {
        if (TrainNumber[0] > 16) {
            DeleteStopping(Tohakodate, '大沼公園');
        } else if (TrainNumber[0] == 2) {
            DeleteStopping(Tohakodate, '白老');
            DeleteStopping(Tohakodate, '登別');
            DeleteStopping(Tohakodate, '洞爺');
        } else if (TrainNumber[0] == 4) {
            DeleteStopping(Tohakodate, '白老');
        }
    }
}
export function JRHokkaidouShinDetailStop() {
    console.log(trainTables[0].trains[0].trainNumber);
    console.log(trainTables[0].trains[0].detail);
    const _Number = trainTables[0].trains[0].trainNumber;
    const imabetsu = [10, 16, 24, 32, 44];
    const kikonai = [36];
    const towada = [10, 12, 16, 28, 44];
    const ninohe = [10, 12, 16, 28, 44];
    const N_hachinohe = [36];
    const numakunai = [12, 16, 28];
    DetailReplace_Set_One(0, imabetsu, '新青森', '木古内・奥津軽いまべつ・新青森');
    DetailReplace_Set_One(0, kikonai, '新青森', '木古内・新青森');
    DetailReplace_Set_One(0, towada, '新青森', '新青森・七戸十和田');
    DetailReplace_Set_One(0, ninohe, '八戸', '八戸・二戸');
    DetailReplace_Set_One(0, N_hachinohe, '八戸・盛岡', '盛岡');
    DetailReplace_Set_One(0, numakunai, '盛岡', 'いわて沼宮内・盛岡');

}