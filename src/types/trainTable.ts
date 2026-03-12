//いわゆる「すべての表の先発表示のデータ」
export interface TrainData {
    type: string;
    destination: string;
    hour: number;
    minute: string;
    trackNumber: string;
    //ない場合もある
    trainNumber?:number;//列車の号数、ない場合もあるので要検討(-1にするとか)
    cars?: string;
    detail?: string;
    jiyuseki?: string;
}
//表ごとのデータ
export interface TrainTable {
    title: string;
    trains: TrainData[];//orderNum数だけ作成する
    detailType?: number;//Dtypeの代わり
}
export let trainTables: TrainTable[] = [];