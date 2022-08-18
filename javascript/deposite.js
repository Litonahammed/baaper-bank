// step-1
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step-2
    const depositeField = document.getElementById('deposite-Field');
    const newdepositeAmountString = depositeField.value;
    const newdepositeAmount = parseFloat(newdepositeAmountString);

    // step-3
    depositeField.value = '';
    // step-4
    const depositeTotalElement = document.getElementById('deposite-tota');
    const previouseDepositeTotalString = depositeTotalElement.innerText;
    const previouseDepositeTotal = parseFloat(previouseDepositeTotalString);
}) 