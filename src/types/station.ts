//最終的にif(station=='')をここに集約させたい
export interface StationConfig {
    name: string;
    company: string;
    tableTitles: string[];
    dtype?: number[];
    detailFlag?: number;
    detailLengthOne?: number;
    nonGouFlag?: boolean;
    // 駅固有の初期化ロジック（stationset*.ts の内容）
    setup?: () => void;
    // 駅固有の表示更新ロジック（Tforshow*.ts の内容）
    onRender?: () => void;
}

// 駅名をキーにしたレジストリ
export type StationRegistry = Record<string, StationConfig>;