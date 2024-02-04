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