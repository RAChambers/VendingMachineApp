var moneyInserted = 0;
var change = 0;

totalPaid = 0;

const currency_one = 1;
const currency_five = 5;
const currency_nickel = 0.05;
const currency_dime = 0.10;
const currency_quarter = 0.25;

function getTotal() {
    var currency_ones = Number(document.getElementById("ones").value);
    var currency_fives = Number(document.getElementById("fives").value);
    var currency_nickels = Number(document.getElementById("nickles").value);
    var currency_dimes = Number(document.getElementById("dimes").value);
    var currency_quarters = Number(document.getElementById("quarters").value);
    

if (currency_ones > 0){
    currency_ones = currency_ones * currency_one;
}
if (currency_fives > 0){
    currency_fives = currency_fives * currency_five;
}
if (currency_nickels > 0){
    currency_nickels = currency_nickels * currency_nickel;
}
if (currency_dimes > 0){
    currency_dimes = currency_dimes * currency_dime;
}
if (currency_quarters > 0){
    currency_quarters = currency_quarters * currency_quarter;
}

totalPaid = currency_ones + 
            currency_fives + 
            currency_dimes + 
            currency_nickels + 
            currency_quarters;

   return totalPaid.toFixed(2);
}

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearTally(){
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearForm(){
    document.getElementById("ones").value = 0;
    document.getElementById("fives").value = 0;
    document.getElementById("nickles").value = 0;
    document.getElementById("dimes").value = 0;
    document.getElementById("quarters").value = 0;

}
function cancel(){
    clearForm();
    clearTally();
   
}


