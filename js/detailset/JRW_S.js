var Nozomi = [['東京', '品川', '新横浜', '名古屋', '京都', '新大阪', '新神戸', '岡山', '広島', '小倉', '博多']];
var hikari = [['東京', '品川', '新横浜', '静岡', '浜松', '名古屋', '京都', '新大阪', '新神戸', '西明石', '姫路', '相生', '岡山', '広島',]];
var Sanyo_hikari = [['新大阪', '新神戸', '姫路', '岡山', '福山', '広島', '新山口', '小倉', '博多']];
var Amizuho = [['新大阪', '新神戸', '岡山', '広島', '小倉', '博多', '久留米', '熊本', '川内', '鹿児島中央']];
var Asakura = [['新大阪', '新神戸', '岡山', '福山', '広島', '小倉', '博多', '新鳥栖', '久留米', '熊本', '川内', '鹿児島中央']];
reverseLine(Nozomi, 0, 1);
reverseLine(hikari, 0, 1);
reverseLine(Sanyo_hikari, 0, 1);
reverseLine(Amizuho, 0, 1);
reverseLine(Asakura, 0, 1);
var N_Tokuyama2 = [6, 10, 42, 48];
var M_Fukuyama2 = [612];
var M_Himeji2 = [600, 602, 604, 606, 614];
var N_Himeji2 = [68, 70, 72, 76, 78, 82, 84, 88, 90, 92, 94, 96, 98, 100, 40, 46, 52, 58];
var N_Fukuyama2 = [12, 16, 20, 24, 28, 32, 36, 54, 60];
var N_Yamaguchi2 = [2, 4, 8, 14, 18, 22, 26, 30, 34, 38, 44, 50, 56, 62, 270];
var S_Yatsushiro1 = [401, 403, 543, 545, 549, 405, 553, 407, 409, 561, 563, 565, 569];
var S_Shimonoseki = [540, 542, 562, 568, 572];
var S_Tokuyama2 = [542, 544, 546, 550, 552, 554, 556, 558, 562, 566, 406];
var S_Yamaguchi2 = [540, 548, 560, 564, 566, 570, 406];
var S_Himeji2 = [548, 560, 564, 568, 570, 572];
var JRSSobj = {//色は文字
    Typea: { type: "のぞみ", Bcolor: 'yellow', color: black, detail: Nozomi, },
    Typeb: { type: "ひかり", Bcolor: red, color: white, detail: hikari, },
    Typec: { type: "こだま", Bcolor: '#3050FF', color: white, detail: local, },
    Typed: { type: "みずほ", Bcolor: orange, color: black, detail: Amizuho, },
    Typee: { type: "さくら", Bcolor: '#FF6FFF', color: white, detail: Asakura, },
    Typef: { type: "つばめ", Bcolor: 'skyblue', color: black, detail: local, }
};
if (station != '新神戸駅' && station != '岡山') {
    JRSSobj.Typeb.detail = Sanyo_hikari;
}