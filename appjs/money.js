document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const totalIncome = parseFloat(incomeInput.value);
    /* const balanceInput = document.getElementById('balance');
    const previousBalance = parseFloat(balanceInput.innerText);
    const mainBalance = totalIncome - totalExpense; */
    const foodExpense = document.getElementById('food-expense').value;
    const rentExpense = document.getElementById('rent-expense').value;
    const clothExpense = document.getElementById('cloth-expense').value;
    const totalExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense);
    const expense = document.getElementById('total-expense');
    const allExpense = expense.innerText;
    expense.innerText = totalExpense;
    const balanceInput = document.getElementById('balance');
    const previousBalance = balanceInput.innerText;
    const mainBalance = totalIncome - totalExpense;
    balanceInput.innerText = mainBalance;
})