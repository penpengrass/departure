// src/global.d.ts

declare global {
    var company: string;
    var station: string;
    var stationN: string;
    var JRShinkansenflag: number;
    var L_hour: number;
    var L_min: number;
    var Detail: any[];
    var detailflag: number;
    var DetailLength: any[];
    var detailLength_one: number;
    var NonGouflag: number;
    var holidayflag: number;
    var Dtype: number[];
    var Tablenum: number;
    var Tablenums: number[]; // 各表の列数
    var orderNum: number;
    var TT: any;            // 時刻表データ構造（まずは any にする）
    var orders: number[];     // js 内で書き換えるので var/let 相当で宣言
    var next: number;
    var Indexfile: string;
    var ReloadIntervalMinute: number;
    var Type: any[];
    var Des: any[];
    var TableHour: any;
    var TableMin: any;
    var TrackNum: any; //実質未使用だがTypeやDesと合わせる
    var LastShowFlag = 0;
    function BackTime(): void;
    function Delay(v: number): void;
    function NotShows(...args: any[]): void;
}


export { };