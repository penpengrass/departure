//詳細表示の定義
let Jrapid = "0";
let limited = "0";
let Jsubrapid = "0";
let rapid = "0";
let express = "0";
let subexpress = "0";
let subsemiexpress = "0";
let local = "0";
var Hankyuobj = {
    Typea: { type: "通特", color: red, detail: limited, },
    Typeb: { type: "特急", color: purple, detail: rapid, },
    Typec: { type: "準特", color: orange, detail: express, },
    Typed: { type: "準急", color: green, detail: subexpress, },
    Typee: { type: "普通", color: blue, detail: local, }
}
//種別をオブジェクトにする
var JRCobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "快特", color: red, detail: rapid, },
    Typec: { type: "ホームライナー", color: red, detail: Jrapid, },
    Typed: { type: "快速", color: orange, detail: Jsubrapid, },
    Typee: { type: "特快", color: orange, detail: Jsubrapid, },
    Typef: { type: "普通", color: greenyellow, detail: local, }

};