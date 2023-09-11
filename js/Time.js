'use strict';
//日付，時，分をそれぞれ取得する
    const now=new Date();
    //const hour=22;
    const hour=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();

    console.log(hour);
    const output=`${hour}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
        //document.getElementById('Nowtime').textContent=output;

    //var firTime = `${hour}:${String(min).padStart(2,"0")}`;