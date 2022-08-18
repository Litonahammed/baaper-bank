




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