function DetailBanner(td, tr, Letter) {
    var LDetail = document.getElementById('TDetail' + (td + 1) + (tr + 1)).textContent;
    if (LDetail.length < Letter) {
        document.getElementById('TDetail' + (td + 1) + (tr + 1)).classList.remove('news-banner__content');
    }
}
function DetailBannerOnce(td, Letter) {
    var LDetail = document.getElementById('TDetail' + (td + 1)).textContent;
    if (LDetail.length < Letter) {
        document.getElementById('TDetail' + (td + 1)).classList.remove('news-banner__content');
    }
}
function LowerDetail(td, tr) {
    if (Type[td][tr].startsWith('特急')) {
        document.getElementById('TConnection' + (td + 1) + (tr + 1)).textContent = '(ご乗車には特急券が必要です)';
    }
}
function LastLetterRemove(td, tr, mark) {
    if (Detail[td][tr].slice(-1) == mark) {
        console.log(tr + 'は読点で終わる');
        Detail[td][tr] = Detail[td][tr].slice(0, -1);
        document.getElementById('TDetail' + (td + 1) + '' + (tr + 1)).textContent = Detail[td][tr];
    }
}