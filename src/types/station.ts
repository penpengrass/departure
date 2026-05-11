//最終的にif(station=='')をここに集約させたい
export interface StationConfig {
    name: string;
    nameEn?: string; // stationN の代替(未使用)
    nameSub?: string; // stationN2 などの代替(未使用)
    company: string;
    file?: string;
    tableTitles: string[];
    tableColumnCounts?: number[]; // global.d.ts の Tablenums に相当(未使用)
    dtype?: number[];
    detailFlag?: number;
    detailLengthOne?: number;
    nonGouFlag?: number;
    holidayAbleflag?:number;
    jrShinkansenFlag?: number; //(未使用)
    // 駅固有の初期化ロジック（stationset*.ts の内容）
    setup?: () => void;
    // 駅固有の表示更新ロジック（Tforshow*.ts の内容）
    onRender?: () => void;
}

// 駅名をキーにしたレジストリ
export type StationRegistry = Record<string, StationConfig>;
