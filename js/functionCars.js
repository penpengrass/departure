function CarsDefine(td, tr, KeyWord1, KeyWord2, LCars) {
    if (Type[td][tr].includes(KeyWord1) && Type[td][tr].includes(KeyWord2)) {
        Cars[td][tr] = LCars + '両';
    }
}
function CarsInto(td, tr, Tab) {
    var LTab = document.getElementById(Tab + (td + 1) + (tr + 1));
    if (Cars[td][tr] != "" && LTab.textContent == "") {
        document.getElementById(Tab + (td + 1) + (tr + 1)).textContent = Cars[td][tr];
    }
}