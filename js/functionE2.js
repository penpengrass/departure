function JRE6Color(td, LType, color) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            doType[td][tr].style.backgroundColor = color;
        }
    }
}
//条件付き路線名追加(2種類)
function JRETypeSelectAdd(td, LType, Deshairetsu, line1, line2, index = 6) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            if (Deshairetsu.includes(Des[td][tr])) {
                if (index == 6) {
                    Type[td][tr] += line1;
                    doType[td][tr].textContent += line1;
                } else if (index == 3) {
                    document.getElementById('TName' + (td + 1) + (tr + 1)).textContent += line1;
                }
            } else if (Des[td][tr] != '') {
                if (index == 6) {
                    Type[td][tr] += line2;
                    doType[td][tr].textContent += line2;
                } else if (index == 3) {
                    document.getElementById('TName' + (td + 1) + (tr + 1)).textContent += line2;
                }
            }
        }
    }
}
//条件なし路線名追加
function JRETypeAdd(td, LType, line1, index = 6) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        if (Type[td][tr].includes(LType)) {
            if (index == 6) {
                Type[td][tr] += line1;
                doType[td][tr].textContent += line1;
            } else if (index == 3) {
                document.getElementById('TName' + (td + 1) + (tr + 1)).textContent += line1;
            }
        }
    }
}