//詳細表示の定義
export var Jrapid = "0";
export var limited = "0";
export var Jsubrapid = "0";
export var rapid = "0";
export var express = "0";
export var subexpress = "0";
export var subsemiexpress = "0";
export var local = "0";
var Hankyuobj = {
    Typea: { type: "通特", color: red, detail: limited, },
    Typeb: { type: "特急", color: purple, detail: rapid, },
    Typec: { type: "準特", color: orange, detail: express, },
    Typed: { type: "準急", color: green, detail: subexpress, },
    Typee: { type: "普通", color: blue, detail: local, }
}
//種別をオブジェクトにする
export var JRCobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "快特", color: red, detail: rapid, },
    Typec: { type: "ホームライナー", color: red, detail: Jrapid, },
    Typed: { type: "快速", color: orange, detail: Jsubrapid, },
    Typee: { type: "特快", color: orange, detail: Jsubrapid, },
    Typef: { type: "普通", color: '#0f0', detail: local, }

};