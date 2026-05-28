import { JRNameDevide, NewAllLastShow, Bansenshow } from "./module/firstDisplayEdit";
import { getStationConfig } from "./main";
NonGouflag = 0;
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();
Bansenshow();
NewAllLastShow();
