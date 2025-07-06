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
company='東急線';
if(station=='武蔵小杉駅'){
    TableTitle=['東横線 渋谷 和光市 小手指 森林公園方面','目黒線 目黒 浦和美園 西高島平方面','目黒線 日吉 新横浜 海老名方面','東横線 横浜 元町・中華街方面'];
}else if(station=='二子玉川駅'){
    TableTitle=['田園都市線 渋谷 押上 東武スカイツリーライン方面','大井町線 大井町方面','大井町線 溝の口 中央林間方面','田園都市線 長津田 中央林間方面'];
}