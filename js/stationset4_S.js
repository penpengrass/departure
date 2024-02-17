company = '山陽新幹線';
NonGouflag = 1;
var JRSBobj = {//色は文字
    Typea: { type: "のぞみ", color: 'yellow', detail: limited, },
    Typeb: { type: "ひかり", color: red, detail: rapid, },
    Typec: { type: "こだま", color: '#3050FF', detail: rapid, },
    Typed: { type: "みずほ", color: orange, detail: Jrapid, },
    Typee: { type: "さくら", color: '#FF6FFF', detail: Jsubrapid, },
    Typef: { type: "つばめ", color: 'skyblue', detail: local, }
};
var JRSSobj = {//色は文字
    Typea: { type: "のぞみ", color: black, detail: limited, },
    Typeb: { type: "ひかり", color: white, detail: rapid, },
    Typec: { type: "こだま", color: white, detail: rapid, },
    Typed: { type: "みずほ", color: black, detail: Jrapid, },
    Typee: { type: "さくら", color: white, detail: Jsubrapid, },
    Typef: { type: "つばめ", color: black, detail: local, }
};

var Shinkansenflag = 0;
if (station == '広島駅') {
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '山陽・九州新幹線 博多・鹿児島中央方面'];
    var kodama1 = [775, 781, 831, 833, 835, 837, 841, 843, 845, 847, 849, 851, 853, 855, 857, 859, 861, 865, 867, 787];
    limitedjustnumber(TT[1], 1, 'のぞみ');
    limitedjustnumber(TT[0], 2, 'のぞみ');
    limitedjustnumber(TT[0], 74, 'のぞみ(当駅始発)');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitednumber(TT[1], 541, 'さくら');
    limitednumber(TT[0], 540, 'さくら');
    limitednumber2(TT[1], kodama1, 'こだま');
    limitedjustnumber(TT[0], 836, 'こだま');
}
else if (station == '博多駅') {
    TableTitle = ['山陽・東海道新幹線 新大阪・東京方面', '九州新幹線 熊本・鹿児島中央方面'];
    limitedjustnumber(TT[1], 1, 'のぞみ');
    limitedjustnumber(TT[0], 2, 'のぞみ');
    limitedjustnumber(TT[0], 600, 'みずほ');
    limitedjustnumber(TT[1], 601, 'みずほ');
    limitedjustnumber(TT[0], 838, 'こだま');
    limitedjustnumber(TT[0], 540, 'さくら');
}