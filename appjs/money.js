document.getElementById('calculate-btn').addEventListener('click', function () {
    let incomeInput = document.getElementById('income-input');
    let totalIncome = parseFloat(incomeInput.value);

    const foodExpense = document.getElementById('food-expense').value;

    const rentExpense = document.getElementById('rent-expense').value;

    const clothExpense = document.getElementById('cloth-expense').value;
    const totalExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense);
    const expense = document.getElementById('total-expense');
    const allExpense = expense.innerText;
    expense.innerText = totalExpense;
    if (totalIncome < totalExpense) {
        alert('you do not have sufficient money');
    }

    const balanceInput = document.getElementById('balance');
    const previousBalance = balanceInput.innerText;
    const mainBalance = totalIncome - totalExpense;
    balanceInput.innerText = mainBalance;


})


document.getElementById('save-btn').addEventListener('click', function () {
    const savings = document.getElementById('save');
    const savingValue = parseFloat(savings.value);
    let incomeInput = document.getElementById('income-input');
    let totalIncome = parseFloat(incomeInput.value);

    const totalDiscount = (totalIncome * savingValue) / 100;
    const savingMoney = document.getElementById('saving');
    const savingTotal = savingMoney.innerText;
    savingMoney.innerText = totalDiscount;
    const remainingBalance = document.getElementById('remaining-balance');
    let balanceInput = document.getElementById('balance');

    const remainingAmount = parseFloat(remainingBalance.innerText);

    const remainingMoney = mainBalance - totalDiscount;



})