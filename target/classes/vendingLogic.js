var moneyInserted = 0;
var change = 0;
var msg = "";
var message = document.getElementById("message");

var items = ["Coke", "Dr Pepper", "Sprite", "Orange Fanta", "Lemonade","Spring Water", "Doritos", "BBQ Fritos", "Takis", "Cheetos","Lay's Original Chips"];
const price = 1.5;

var totalPaid = 0;


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
    getTotal();

    if(totalPaid > 0){
        msg = "Transaction cancelled. $" + totalPaid.toFixed(2) + " has been returned.";
    
    clearForm();
    clearTally();

    message.innerHTML = msg;
   
}else if (totalPaid == 0){

    msg = "Insert money. Select a product";

    message.innerHTML = msg;
    }
}

function calculateChange(){

    var changeEntered = 0;

    if(getTotal != 0){
        return (changeEntered = (getTotal() - price).toFixed(2));
    }
    return changeEntered.toFixed(2);

}function dispenseItem(item) {
    message.innerHTML = "";
    change = 0;

    var selectedItem = items[item];

    change = calculateChange();

    if (change < 0){
        msg = "You have not inserted enough money. $" + totalPaid.toFixed(2) + " has been returned. Check the coin return."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        message.innerHTML = msg;
    } else if (change > 0){
        msg = selectedItem + " has been dispensed. $" + change + " has been returned."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        message.innerHTML = msg;
    }
}


