// 1. add event handler with the withdraw Button.
// 2. get the withdraw amount 
// 3. clear the withdraw amount field 
// 4. get previous withdraw withdraw Total.
// 5. calculate total withdraw amount and it to the withdraw total Element.
// 6. get previous balance
// 7. calculate new balance and set it to the balance total amount.






// step-1:add event handler with the withdraw Button.
document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-2: get the withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:clear the withdraw amount fiel
    withdrawField.value = '';

    // step-4: get previous withdraw withdraw Total.
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouseWithdrawTotalstring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previouseWithdrawTotalstring);
    // step-5 : calculate total withdraw amount and it to the withdraw total Element.
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // step-6: get previous balance
    const balanceElement = document.getElementById('balance-total');
    const previouseBalanceTotalstring = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previouseBalanceTotalstring);
    //  step-7: calculate new balance and set it to the balance total amount.

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;

})