import { trainTables } from "../types/trainTable";
//特急や快速の色を変えられる
export function TypeColorChange(td: number, tr: number, TypeWord: string, Color: string) {
    const _Type = trainTables[td].trains[tr].type;
    if (_Type.includes(TypeWord)) {
        document.getElementById('TType' + (td + 1) + (tr + 1))!.style.color = Color;
        if (Indexfile == 'index3_S.php' || Indexfile == 'index8.php' || Indexfile == 'index3_T.php') {
            document.getElementById('TName' + (td + 1) + (tr + 1))!.style.color = Color;
        }
    }
}
//JR東海の詳細表示限定
export function TypeColorChange2(td: number, Tab: string, TypeWord: string, Color: string) {
    const _Type = trainTables[td].trains[0].type;
    if (Type[td][0].includes(TypeWord) || _Type.includes(TypeWord)) {
        document.getElementById(Tab + (td + 1))!.style.color = Color;
    }
}
export function TypeBackColorChange(td: number, tr: number, TypeWord: string, Color: string) {
    const _Type = trainTables[td].trains[0].type;
    if (Type[td][tr].includes(TypeWord) || _Type.includes(TypeWord)) {
        document.getElementById('TType' + (td + 1) + (tr + 1))!.style.backgroundColor = Color;
    }
}
export function JREScolor(ltd: number, ltr: number, name: string, tag: string, color: string) {
    var LName = document.getElementById('WType' + (ltd + 1) + (ltr + 1));
    var Lcolor = document.getElementById('TName' + (ltd + 1) + (ltr + 1));
    //console.log(LName.textContent);
    if (LName && Lcolor) {
        if (LName.textContent == name) {
            LName.innerHTML = tag;
            Lcolor.style.color = color
        }
    }
}