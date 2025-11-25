//表の1番下に文章を入れる
function BottomBanner(tag, td, tr, colspan, contents) {
    let element = document.getElementById(tag + td + tr);
    //console.log(element);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    element.innerHTML = '<td id="TBanner' + td + '' + tr + '" colspan="' + colspan + '"><p2 id="TDetail' + td + '' + tr + '" class="news-banner__content">ここに詳細表示</p3></td>';
    document.getElementById('TBanner' + td + '' + tr).style.overflow = 'hidden';
    document.getElementById('TDetail' + td + '' + tr).innerHTML = contents;
    if (Indexfile == 'index4.php') {
        Tablenums[td]--;
    }
}
function BottomBanner_Reverse(tag, td, tr) {
    let element = document.getElementById(tag + td + tr);
    //console.log(element);
    //console.log(element.innerHTML);
    element.innerHTML = '<td class="shubetu" id="TType' + td + tr + '"><span id="WType' + td + tr + '"></span></td>\
        <td class="name" id="TName' + td + tr + '"><span id="WName' + td + tr + '"></span></td>\
        <td class="Ctime" id="TTime' + td + tr + '"><p2 id="THour' + td + tr + '"></p2>:<p2 id="TMin' + td + tr + '"></p2></td>\
        <td class="Destination" id="TDes' + td + tr + '"><span id="WDes' + td + tr + '"></span></td>\
        <td class="railnumber" id="TNum' + td + tr + '"></td>';
    //console.log(Type[0][2]);
    document.getElementById('TType' + td + tr).textContent = Type[td - 1][tr - 1];
    document.getElementById('TTime' + td + tr).textContent = TableHour[td - 1][tr - 1] + ':' + TableMin[td - 1][tr - 1];
    document.getElementById('TDes' + td + tr).textContent = Des[td - 1][tr - 1];
    document.getElementById('TNum' + td + tr).textContent = doBNumber[td - 1][tr - 1].textContent;
    document.getElementById('TName' + td + tr).textContent = Ex_Name[td - 1][tr - 1];
    if (Ex_Name[td - 1][tr - 1].includes('から快速')) {
        document.getElementById('TName' + td + tr).innerHTML = '<span class="PartRapid">' + Ex_Name[td - 1][tr - 1] + '</span>'
        //document.getElementById('TName' + td + tr).style.fontSize = '1.5em';
        document.getElementById('TName' + td + tr).style.textAlign = 'left';
    }
    JTypeColor(Type[td - 1][orderNum - 1], TType[td - 1][orderNum - 1], JRobj);
    JRWTrainNameColor(td - 1, tr - 1, 'orange', 'orange', 'red');
    TwoLetterDistance(td - 1, tr - 1, Des, TDes, 1, 0.9);
    DesMiddle(td - 1, tr - 1, '方面');
    //Cell.innerText = '<td class="shubetu" id="TType' + td + '' + tr + '"><span id="WType' + td + '' + tr + '"></span></td>'
    //console.log(element);
}