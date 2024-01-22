company='東海道新幹線';
var JRSBobj = {//色は文字
    Typea: { type: "のぞみ", color: 'yellow', detail: limited, },
    Typeb: { type: "ひかり", color: red, detail: rapid, },
    Typec: { type: "こだま", color: '#3050FF', detail: rapid, },
    Typed: { type: "みずほ", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: '#FF6FFF', detail: Jsubrapid, },
    Typef: { type: "つばめ", color: black, detail: local, }
};
if(station=='浜松駅'){
    TableTitle=['東海道新幹線 静岡・東京方面','東海道新幹線 名古屋・新大阪方面'];
    limitedjustnumber(TT[1],501,'ひかり');
    limitedjustnumber(TT[0],500,'ひかり');
    limitedjustnumber(TT[1],701,'こだま');
    limitedjustnumber(TT[0],700,'こだま');
}else if(station=='豊橋駅'){
    TableTitle=['東海道新幹線 静岡・東京方面','東海道新幹線 名古屋・新大阪方面'];
    var hikari1=[630,632,638,644,648,652,656,660,522];
    var hikari2=[631,635,639,643,647,651,657,667,669];
    limitednumber2(TT[0],hikari1,'ひかり');
    limitednumber2(TT[1],hikari2,'ひかり');
    limitedjustnumber(TT[1],701,'こだま');
    limitedjustnumber(TT[0],700,'こだま');
}