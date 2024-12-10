function JRE6Color(td, LType, color) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            doType[td][tr].style.backgroundColor = color;
        }
    }
}
function JRE6Color_one(td, tr, LType, color) {
    if (Type[td][tr].includes(LType)) {
        doType[td][tr].style.backgroundColor = color;
    }
}
function JRE6ColorPlusName(td, tr, LoType, color, Nameflag = 0) {
    var LType = document.getElementById('TType' + (td + 1) + (tr + 1));
    var LName = document.getElementById('TName' + (td + 1) + (tr + 1));
    var LDep = document.getElementById('TDep' + (td + 1) + (tr + 1));
    if (Nameflag == 0) {
        if (Type[td][tr].includes(LoType)) {
            LType.style.backgroundColor = color;
            if (LDep != null) {
                LDep.style.backgroundColor = color;
            }
            if (LName !=null) {
                LName.style.backgroundColor = color;
            }

        }
    } else if (Nameflag == 1) {
        if (LName.textContent.includes(LoType)) {
            LType.style.backgroundColor = color;
            if (LDep != null) {
                LDep.style.backgroundColor = color;
            }
            if (LName !=null) {
                LName.style.backgroundColor = color;
            }
        }
    }
}

/*function allalterUTL_setting(keyword) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            var LType = document.getElementById('TType' + (td + 1) + (tr + 1));
            if (Type[td][tr].includes(keyword)) {
                LType.textContent = keyword;
            }
        }
    }
}
function alterUTL(td, tr, keyword) {
    //東京駅 要改善
    var LType = document.getElementById('TType' + (td + 1) + (tr + 1));
    var LName = document.getElementById('TName' + (td + 1) + (tr + 1));
    var Another = Type[td][tr].replace(keyword, '');
    //console.log(td + '' + tr + JRLimitedName(td, tr));
    if (keyword == '特急' && LType.textContent.includes(keyword)) {
        //Another = JRLimitedName(td, tr);
        //console.log(LType.textContent);
        //console.log(JRLimitedName(td, tr));
    }
    if (Type[td][tr].startsWith(keyword)) {
        //console.log("keyword=" + td + '-' + tr + keyword);
        //console.log("Another=" + td + '-' + tr + Another);
        //console.log(LType.textContent);
        if (LType.textContent == keyword) {
            //console.log(Another);
            //console.log(JRLimitedName(td, tr, 1));
            LType.textContent = Another;
            LName.textContent = '';
            //console.log(td + '-' + tr + 'change');
        } else if (LType.textContent == Another) {
            LType.textContent = keyword;
            LName.textContent = '10両';
            //console.log(td + '-' + tr + 'change' + '-' + keyword);
        }
    }
}
function allUTL() {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < orderNum; tr++) {
            alterUTL(td, tr, '特急');
        }
    }
}*/

function ShihatsuMove(td, tr, Place) {
    if (Type[td][tr].includes('始発')) {
        var LoType = document.getElementById('WType' + (td + 1) + (tr + 1));
        var LoName = document.getElementById(Place + (td + 1) + (tr + 1));
        LoType.textContent = Type[td][tr].replace('始発', '');
        Type[td][tr] = Type[td][tr].replace('始発', '');
        LoName.textContent += '始発';
    }

}
function Type_Cars(td, tr, L_Type, Cars, Tag, LineSetFlag = 0) {
    if (Type[td][tr].includes(L_Type)) {
        document.getElementById(Tag + (td + 1) + (tr + 1)).textContent = Cars + '両';
    }
    if (LineSetFlag == 1) {
        //配列を設定する
        //GCarsLine[td][tr]=Cars;
    }
}
//条件付き路線名追加(2種類)
function JRETypeSelectAdd(td, LType, Deshairetsu, line1, line2, index = 6) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            if (Deshairetsu.includes(Des[td][tr])) {
                document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = line1;
            } else if (Des[td][tr] != '') {
                document.getElementById('TName' + (td + 1) + (tr + 1)).textContent = line2;
            }
        }
    }
}
//条件なし路線名追加
function JRETypeAdd(td, LType, line1, index = 6) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            document.getElementById('TName' + (td + 1) + (tr + 1)).textContent += line1;
        }
    }
}