
let money,time;
function start(){
   money = prompt("Ваш бюджет на месяц?","денег нет" )
   time = prompt("Введите дату в формате YYYY-MM-DD?","2000-00-00" )
   while(isNaN(money) || money=="" || money == null){
    money = prompt("Ваш бюджет на месяц?","денег нет" );
   }
}

start();

var appData={
    budjet: money,
    timeData: time,
    Savings:true,
    income: [],
    expenses :{},
    optionalExpenses :{}
}
/*
function choseExpenses(){
 for(let i=0;i<2;i++){
     var firstcveshen = prompt("Введите обязательную статью расходов","_" ),secondcveshen=prompt("Введите стоимость","$" );
     if((typeof(firstcveshen)==="string")  && typeof(firstcveshen)!= null && typeof(secondcveshen)!=null && firstcveshen!=" " && secondcveshen!=" " && firstcveshen.length<30){
        console.log("[+]");
        appData.expenses[firstcveshen]=secondcveshen;
     }else{
         alert("[-]");
        i--;
}
 }
}
choseExpenses();

appData.moneyPerDay=((appData.budjet/30).toFixed(1));
console.log(appData.moneyPerDay);
if(parseInt(appData.moneyPerDay)<100){
    console.log("No Money No Funny")
}else if(parseInt(appData.moneyPerDay)>100 && parseInt(appData.moneyPerDay)<2000){
    console.log("No Money , But Funny")
}else if(parseInt(appData.moneyPerDay)>2000){
    console.log("Have Money , And Funny")
}else{
    console.log("[-]")
}

*/
function CheckSavings(){
    if(appData.Savings==true){
        var save = +prompt("Ваши накопления?","денег нет" ) ; 
        var persent = +prompt("Какой процент?");
    }
    appData.monthIncome=save/100/12*persent;
    alert("Доход в месяц с депозита="+appData.monthIncome);
}
CheckSavings()


