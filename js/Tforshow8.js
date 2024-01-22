JRNameDevide();
Bansenshow();
if (station == '新函館北斗駅') {
    for (var tr = 1; tr < 3; tr++) {
        if(Type[0][tr-1]!=''){
            document.getElementById('TExplain1'+tr).textContent='10両編成';
        }
    }
}