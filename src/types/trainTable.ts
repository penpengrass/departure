export interface PlainTrainData {
    type: string;
    destination: string;
    hour: number;
    minute: string;
    track_number: string;
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
    trains: TrainData[];//orderNum数だけ作成する
}
export let plainTrainTables: RowTrainTable[] = [];
export let trainTables: TrainTable[] = [];
export function createTrainDataFromGlobal(hour: number, column: number, TT: any): PlainTrainData {
    // グローバル配列 TT から値を取得（TT の型定義も別途必要です
    const rawValue = TT[hour][column];
    const _hour = TT[hour][0];
    const _minute = String(TT[hour + 1][column]).padStart(2, "0");
    const _type = TT[hour][column];
    const _destination = TT[hour + 2][column];
    const _track_number = TT[hour + 3][column];
    // ここで「完成品」を return する
    // Object.freeze を使うと実行時も再代入不可になります
    return Object.freeze({
        type: rawValue, // TT[hour][Table_Column] の値
        destination: _destination,
        hour: _hour,
        minute: _minute,
        track_number: _track_number, // 必要に応じてTTから取得
    });
}
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
