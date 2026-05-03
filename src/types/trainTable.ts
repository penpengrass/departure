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
    trainName?: string; //列車名、在来線特急の一部で使用する
    trainNumber?: number | null;//列車の号数、ない場合もあるので要検討(-1にするとか)
    type_banner?:string;//JR西日本のバナー表示用
    des_banner?:string;//JR西日本のバナー表示用
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
    console.log(plainTrainTables)
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

export var trainTables: TrainTable[] = [];
export function initTrainTables(tableNum: number, tableNums: number[]): void {
    trainTables = Array(tableNum)
        .fill(null)
        .map((_, tableIndex) => ({
            trains: Array(tableNums[tableIndex])
                .fill(null)
                .map((): TrainData => ({
                    type: '',
                    trainName: '',
                    trainNumber: 0,
                    destination: '',
                    hour: 0,
                    minute: '',
                    detail: '',
                    trackNumber: '',
                }))
        }));
    // 配列の構造を固定
    Object.preventExtensions(trainTables);
    trainTables.forEach(table => Object.preventExtensions(table.trains));
}
/**
 * trainTables の指定位置にデータを一度だけセットする
 */
export function updateTrainData(tableIdx: number, trainIdx: number, data: TrainData): void {
    const targetTable = trainTables[tableIdx];
    if (!targetTable) return;

    if (targetTable.trains[trainIdx] !== null) {
        console.warn(`警告: trainTables[${tableIdx}].trains[${trainIdx}] は既に設定されています。上書きをスキップしました。`);
        return;
    }
    targetTable.trains[trainIdx] = data;
}