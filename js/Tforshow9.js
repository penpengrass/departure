
TypeColorChange(2, 0, '特急', 'red');
TypeColorChange(2, 1, '特急', 'red');
DetailShow(JRSobj, "、");
console.log(Detail);
for (var tr = 0; tr < Detail.length; tr++) {
    console.log(Detail[tr][0].slice(-1));
    if (Detail[tr][0].slice(-1) == '、') {
        console.log(tr + 'は読点で終わる');
        Detail[tr][0] = Detail[tr][0].slice(0, -1);
        Detail[tr][0] += 'に停車します';
        document.getElementById('TDetail' + (tr + 1) + '' + 1).textContent = Detail[tr][0];
    }
}
//JRLimitedDevide(1);
//JRLimitedDevide(3);
/*for(var td=0;td<Tablenum;td++){
    for(var tr=0;tr<2;tr++){
        
        if(Type[td][tr]=='各駅停車'){
            document.getElementById('TName'+(td+1)+(tr+1)).textContent='各駅停車';
            document.getElementById('TType'+(td+1)+(tr+1)).textContent='';
            document.getElementById('TName'+(td+1)+(tr+1)).style.textAlign='left';
        }else if(Type[td][tr].startsWith('快速')){
            document.getElementById('TName'+(td+1)+(tr+1)).textContent='各駅停車';
            document.getElementById('TType'+(td+1)+(tr+1)).textContent='';
            document.getElementById('TName'+(td+1)+(tr+1)).style.textAlign='left';
        }
    }
}*/