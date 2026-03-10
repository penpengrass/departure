// src/global.d.ts

declare global {
    var company: string;
    var station: string;
    var stationN: string;
    var stationN2: string;
    var JRShinkansenflag: number;
    var L_hour: number;
    var L_min: number;
    var Detail: any[];
    var Des_Banner:any[];
    var detailflag: number;
    var DetailLength: any[];
    var detailLength_one: number;
    var NonGouflag: number;
    var holidayflag: number;
    var TType: any[];
    var WType: any[];
    var TName: any[];
    var Dtype: any[];
    var Jiyuseki: any;
    var Tablenum: number;
    var Tablenums: number[]; // 各表の列数
    var orderNum: number;
    var TT: any;            // 時刻表データ構造（まずは any にする）
    var TableTitle: string[];
    var orders: number[];     // js 内で書き換えるので var/let 相当で宣言
    var next: number;
    var Indexfile: string;
    var TwoLetterDisflag: number;
    var MinIn: number;
    var Type: any[];
    var Des: any[];
    var TDes: any[];
    var Cars: any[];
    var TableHour: any;
    var TableMin: any;
    var LastShowFlag = 0;
    var red = 'red';
    var orange = 'orange';
    var yellowgreen = 'yellowgreen';
    var greenyellow = 'greenyellow';
    var green = 'green';
    var blue = 'blue';
    var black = 'black';
    var purple = 'purple';
    var pink = 'pink';
    var white = 'white';
    function BackTime(): void;
    function Delay(v: number): void;
    function NotShows(...args: any[]): void;
}


export { };