'use strict';
//日付，時，分をそれぞれ取得する
const now = new Date();
//const hour=(now.getHours()+12)%24;
//export const hour = 19;
//export const min = 30;
export const hour = now.getHours();
export const min = now.getMinutes();
const sec = now.getSeconds();
window.L_hour = hour;
window.L_min = min;
const output = `${hour}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
//document.getElementById('Nowtime').textContent=output;

//var firTime = `${hour}:${String(min).padStart(2,"0")}`;
/*document.getElementById('hoursetting').textContent=hour;
console.log(document.getElementById('hoursetting'));
document.getElementById('minutesetting').textContent=min;
console.log(document.getElementById('minutesetting'));*/
