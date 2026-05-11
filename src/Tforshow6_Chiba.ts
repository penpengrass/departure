import { JRNameDevide, flagmarkerase, Bansenshow } from "./module/firstDisplayEdit";
import { JRE6ColorPlusName } from "./module/displayEdit6";
import { CarsDefine, CarsInto } from "./module/carsEdit";
import { allswitchChiba } from "./module/displaySwitch";
import { getStationConfig } from "./main";
var config = getStationConfig(window.station, Indexfile);
if (config && config.onRender) config.onRender();