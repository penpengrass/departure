//リスト7-2
document.addEventListener('DOMContentLoaded', function(){
    var timer=window.setInterval(
        function(){
            var dat=new Date();
            document.getElementById('TTime').textContent=dat.toLocaleTimeString();
        }, 100);
        //ボタンクリック時にタイマーを止める
        /*document.getElementById('btn').addEventListener('click',function(){

        },false);*/
},false);