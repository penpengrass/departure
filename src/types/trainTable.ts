export interface PlainTrainData {
    type: string;
    destination: string;
    hour: number;
    minute: string;
    trackNumber: string;
}
export interface RowTrainTable {
    title: string;
    trains: PlainTrainData[];
}
//いわゆる「すべての表の先発表示のデータ」
export interface TrainData {
    type: string;
    destination: string;
    hour: number;
    minute: string;
    trackNumber: string;
    //ない場合もある
    trainNumber?: number;//列車の号数、ない場合もあるので要検討(-1にするとか)
    cars?: string;
    detail?: string;
    jiyuseki?: string;
}
//表ごとのデータ
export interface TrainTable {
    title?: string;
    trains: TrainData[];//orderNum数だけ作成する
}

/**
 * 時刻表RAWデータ(TT)から1列車分のデータを抽出
 */
export function createTrainDataFromGlobal(hour: number, column: number, TT: (string | number)[][]): PlainTrainData {
    // グローバル配列 TT から値を取得（TT の型定義も別途必要です
    const _type = String(TT[hour][column]);
    const _hour = Number(TT[hour][0]);
    const _minute = String(TT[hour + 1][column]).padStart(2, "0");
    const _destination = String(TT[hour + 2][column]);
    const _track_number = String(TT[hour + 3][column]);

    // ここで「完成品」を return する
    // Object.freeze を使うと実行時も再代入不可になります
    return Object.freeze({
        type: _type, // TT[hour][Table_Column] の値
        destination: _destination,
        hour: _hour,
        minute: _minute,
        trackNumber: _track_number,
    }) as PlainTrainData;
}

// 駅名をキーにしたレジストリ
export type TrainDataRegistry = Record<string, TrainTable>;

// グローバル配列の初期化（事前に全要素を確保）
export let plainTrainTables: RowTrainTable[] = [];
/**
 * plainTrainTablesを Tablenum × Tablenums のサイズで初期化
 * @param tableNum テーブル数
 * @param tableNums 各テーブルの行数の配列
 */
export function initPlainTrainTables(tableNum: number, tableNums: number[]): void {
    plainTrainTables = Array(tableNum)
        .fill(null)
        .map((_, tableIndex) => ({
            title: '',
            trains: Array(tableNums[tableIndex])
                .fill(null) // null で初期化（未代入状態）
        }));
    // 配列の構造を固定（要素の追加/削除は禁止、変更は許可）
    Object.preventExtensions(plainTrainTables);
    plainTrainTables.forEach(row => Object.preventExtensions(row.trains));
}

/**
 * plainTrainTables の指定位置にデータを一度だけセットする
 */
export function updatePlainTrainData(tableIdx: number, trainIdx: number, data: PlainTrainData): void {
    const targetRow = plainTrainTables[tableIdx];
    if (!targetRow) return;

    if (targetRow.trains[trainIdx] !== null) {
        console.warn(`警告: plainTrainTables[${tableIdx}].trains[${trainIdx}] は既に設定されています。上書きをスキップしました。`);
        return;
    }
    targetRow.trains[trainIdx] = data;
    console.log(targetRow);
}

export const trainTables: TrainTable[] = [];
/*for (var td = 0; td < Tablenum; td++) {
    // plainTrainTables も Tablenum 分の器を用意し、各要素に PlainTrainData をセットする
    const plainTrainsData: PlainTrainData[] = Array(Tablenums[td])
        .fill(null)
        .map(() => ({
            type:  TT[hour][Table_Column], // Shows関数で実際の値が設定されるため、ここでは空文字列で初期化
            destination: '',
            hour: 0,
            minute: '',
            track_number: '',
        }));
    plainTrainTables.push({
        title: TableTitle[td] || '', // 表のタイトルがあれば設定、なければ空文字列
        trains: plainTrainsData,
    });
    const trains: TrainData[] = Array(Tablenums[td])
        .fill(null)
        .map(() => ({
            type:  TT[hour][Table_Column],
            destination: '',
            hour: 0,
            minute: '',
            trackNumber: '',
        }));
    trainTables.push({
        trains: trains,
    });
}*/
