console.log(Lname[0]);
console.log(number[0]);
if (number[1] > 199 || number[1] < 77) {
    AddStopping(Jrapid, '札幌', '白石');
}
if(Lname[0]=='特急おおぞら'){
    if(number[0]==9){
        AddStopping(oozora,'新得','十勝清水');
        AddStopping(oozora,'十勝清水','芽室');
        AddStopping(oozora,'池田','浦幌');
    }else if(number[0]==5){
        DeleteStopping(oozora,'新夕張');
        DeleteStopping(oozora,'追分');
    }else if(number[0]==3){
        AddStopping(oozora,'新夕張','占冠');
    }else if(number[0]==1){
        DeleteStopping(oozora,'白糠');
    }
}