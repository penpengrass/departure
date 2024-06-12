//詳細表示の定義
let Jrapid = "0";
let limited = "0";
let Jsubrapid = "0";
let rapid = "0";
let express = "0";
let subexpress = "0";
let subsemiexpress = "0";
let local = "0";

var yamatoji=[['新今宮･西九条方面','大阪','天王寺','久宝寺','王寺','王寺から各駅','奈良','加茂']];
reverseLine(yamatoji, 0, 1);
//種別をオブジェクトにする
var JRWTobj = {//色は文字
    Typea: { type: "特急", Bcolor: red, color: white, detail: limited, },
    Typeb: { type: "関空快速", Bcolor: blue, color: white, detail: rapid, },
    Typec: { type: "大和路快速", Bcolor: green, color: white, detail: yamatoji, },
    Typed: { type: "快速", Bcolor: orange, color: black, detail: Jrapid, },
    Typee: { type: "区間快速", Bcolor: green, color: white, detail: Jsubrapid, },
    Typef: { type: "普通", Bcolor: black, color: white, detail: local, },
    Typelocal: { type: "普通", Bcolor: white, color: black, detail: local, }
};