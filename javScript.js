
var appData={
    budjet: 0,
    timeData: "not",
    Savings:false
}
var expenses ={}
var optionalExpenses ={}
let arr=["1","2"]
var money = prompt("Ваш бюджет на месяц?","денег нет" )
var time = prompt("Введите дату в формате YYYY-MM-DD?","2000-00-00" )


appData.budjet=money
appData.timeData=time

var firstcveshen = prompt("Введите обязательную статью расходов","_" )
expenses[firstcveshen] = prompt("Введите стоимость","$" )

var Secondcveshen = prompt("Введите обязательную статью расходов","_" )
expenses[Secondcveshen] = prompt("Введите стоимость","$" )


console.log(expenses);
console.log(appData);
//console.log(parseInt(appData.timeData[0]));
alert(money/30);
