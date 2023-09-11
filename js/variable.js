let stations = new Array(5);
let red = 'red';
let orange = 'orange';
let yellowgreen = 'yellowgreen';
let greenyellow = 'greenyellow';
let green = 'green';
let blue = 'blue';
let black = 'black';
let purple = 'purple';
let pink = 'pink';
console.log(limited);
//種別をオブジェクトにする
var Kinobj = {//色は背景
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "快急", color: red, detail: rapid, },
    Typec: { type: "急行", color: orange, detail: express, },
    Typed: { type: "準急", color: green, detail: subexpress, },
    Typee: { type: "区準", color: green, detail: subexpress, },
    Typef: { type: "普通", color: blue, detail: local, }
};
var JRobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "新快速", color: blue, detail: rapid, },
    Typec: { type: "快速", color: orange, detail: Jrapid, },
    Typed: { type: "区快", color: orange, detail: Jsubrapid, },
    Typee: { type: "普通", color: greenyellow, detail: local, }

};
var JRCobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "快特", color: red, detail: rapid, },
    Typec: { type: "快速", color: orange, detail: Jrapid, },
    Typed: { type: "区快", color: orange, detail: Jsubrapid, },
    Typee: { type: "普通", color: greenyellow, detail: local, }

};
//天王寺駅
var JRWTobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "関空快速", color: blue, detail: rapid, },
    Typec: { type: "大和路快速", color: green, detail: rapid, },
    Typed: { type: "快速", color: orange, detail: Jrapid, },
    Typee: { type: "区間快速", color: green, detail: Jsubrapid, },
    Typef: { type: "普通", color: black, detail: local, }


};
var Hankyuobj = {
    Typea: { type: "通特", color: red, detail: limited, },
    Typeb: { type: "特急", color: purple, detail: rapid, },
    Typec: { type: "準特", color: orange, detail: express, },
    Typed: { type: "準急", color: green, detail: subexpress, },
    Typee: { type: "普通", color: blue, detail: local, }
}
var Tokyuobj = {
    Typea: { type: "特急", color: orange, detail: limited, },
    Typeb: { type: "通特", color: orange, detail: rapid, },
    Typec: { type: "急行", color: red, detail: express, },
    Typed: { type: "準急", color: red, detail: subexpress, },
    Typee: { type: "普通", color: greenyellow, detail: local, },
    Typef: { type: "普通", color: greenyellow, detail: local, }
}
var TokyuBobj = {
    Typea: { type: "通特", color: red, detail: limited, },
    Typeb: { type: "特急", color: orange, detail: rapid, },
    Typec: { type: "急行", color: red, detail: express, },
    Typed: { type: "準急", color: red, detail: subexpress, },
    Typee: { type: "普通", color: green, detail: local, },
    Typef: { type: "普通", color: green, detail: local, }
}
console.log(Object.keys(Kinobj).length);

