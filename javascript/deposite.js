// 1. add event listener to the deposite button
// 2. get deposite amount fromthe input field
// 2.5: convert string deposite amount to a number type.
// 3. clear the deposite input feild after getting the value.
// 4. get the previouse deposite  total.
// 5. calaculate new deposite total and set the value. ]
// 6. get the current balance total.  
// 7. calculate the new balane and set it to the balance total amount





// step-1

document.getElementById('btn-deposite').addEventListener('click', function () {

    //     // step-2
    const depositeField = document.getElementById('deposite-Field');
    const newDepositeAmountString = depositeField.value;
    // console.log(newDepositeAmountString);
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    //     // step-3
    depositeField.value = '';
    //     // step-4
    const depositeTotalElement = document.getElementById('deposite-total');
    const previouseDepositeTotalString = depositeTotalElement.innerText;
    const previouseDepositeTotal = parseFloat(previouseDepositeTotalString);

    //  step-5
    const newDepositeTotal = previouseDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;
    // step-6
    const balaceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositeAmount;
    balaceTotalElement.innerText = newBalanceTotal;
}) 