// src/global.d.ts

declare global {
    var company: string;
    var station: string;
    var Tablenum: number;
    var Tablenums: number[]; // 各表の列数
    var TT: any;            // 時刻表データ構造（まずは any にする）
    var TableTitle: string[];
    var orders: number[];     // js 内で書き換えるので var/let 相当で宣言
    var next: number;
    var Indexfile: string;
    var MinIn: number;
    var Type:any[];
    function FShow(table: any, tableIndex: number, cb: Function): void;
    function FSTShow(table: any, cb: Function, order: number, tableIndex: number, on: number): void;
    function BackTime(): void;
    function Delay(v: number): void;
    function NotShows(...args: any[]): void;
    function koshin(): void;
}


export { };