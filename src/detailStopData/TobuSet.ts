var limited = [['浅草', 'とうきょうスカイツリー', '北千住', '春日部', '栃木', '新鹿沼', '下今市', '東武日光']
    , ['浅草', 'とうきょうスカイツリー', '北千住', '東武動物公園', '久喜', '館林', '足利市', '太田', '赤城']
    , ['浅草', 'とうきょうスカイツリー', '北千住', '東武動物公園', '久喜', '館林', '足利市', '太田', '木崎', '境町', '新伊勢崎', '伊勢崎']
    , ['浅草', 'とうきょうスカイツリー', '北千住', '春日部', '新栃木', '下今市', '鬼怒川温泉']];
var Express = [['浅草', '曳舟', '北千住', '西新井', '草加', '新越谷', '越谷', 'せんげん台', '春日部', '東武動物公園', '以遠各駅', '北越谷', '北春日部', '館林']];
var SemiEx = [['浅草', '曳舟', '北千住', '西新井', '草加', '新越谷', '以遠各駅', '北越谷', '北春日部', '館林']];
var local = '';
export var Tobuobj = {//色は文字
    Typea: { type: "特急", color: red, detail: limited, },
    Typeb: { type: "急行", color: red, detail: Express, },
    Typec: { type: "区間急行", color: red, detail: Express, },
    Typed: { type: "準急", color: orange, detail: SemiEx, },
    Typee: { type: "区間準急", color: orange, detail: SemiEx, },
    Typef: { type: "普通", color: '#0f0', detail: local, },
    Typelocal: { type: "普通", color: '#0f0', detail: local, }
};