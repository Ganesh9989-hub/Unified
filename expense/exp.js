document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');

    let expenses = [];

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        const expense = {
            description,
            amount
        };

        expenses.push(expense);
        updateExpenses();
        expenseForm.reset();
    });

    function updateExpenses() {
        expenseList.innerHTML = '';
        let total = 0;
        expenses.forEach((expense, index) => {
            total += expense.amount;
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.description} - $${expense.amount.toFixed(2)}
                <button onclick="removeExpense(${index})">Remove</button>
            `;
            expenseList.appendChild(li);
        });
        totalAmount.textContent = total.toFixed(2);
    }

    window.removeExpense = (index) => {
        expenses.splice(index, 1);
        updateExpenses();
    };
});
