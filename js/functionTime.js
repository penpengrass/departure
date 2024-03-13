function Delay(MMinute){
    if(L_min-MMinute<0){
        L_hour-=1;
        L_min+=60;
    }
    L_min=L_min-MMinute;
    console.log(L_hour+':'+L_min);
}
function BackTime(){
    L_min=min;
    L_hour=hour;
}