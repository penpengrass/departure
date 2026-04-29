import { JRNameDevide, NewAllLastShow, Bansenshow } from "./module/firstDisplayEdit";
import { TypeColorChange } from "./module/colorSimpleSet";
import { FDetail } from "./module/detailMainPut";
import { TrainNumber } from "./module/firstDisplayEdit";
import { DetailBannerOnce } from "./module/detailMainPut";
import { JRHoobj, JRHSobj } from "./detailStopData/Hodetailset";
import { comment } from "./types/constants";
import { getStationConfig } from "./main";
NonGouflag = 0;
function HokkaidoCars(cars: string) {
    return 'この列車は' + cars + '両編成です。';
}
function Useat(car: string) {
    return '指定席は' + car + '号車ｕシートです。';
}
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
Bansenshow();
NewAllLastShow();
