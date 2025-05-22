//Exercise: Transaction analysis

const transactions = [
    {id: 1, description: 'Grocery shopping', amount: -50},
    {id: 2, description: 'Salary deposit', amount: 2000},
    {id: 3, description: 'Utility Bill Payment', amount: -100},
    {id: 4, description: 'Online Purcharse', amount: -30}
]

//1. calculate total balance

const totalBalance = transactions.reduce((acc, transactions) => acc + transactions.amount, 0)
console.log('Total Balance: ',totalBalance);

//2. Find the largest Transaction (Income or Expense)

const LargestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])

console.log('Largest Transaction',LargestTransaction);

//3. Filter Purcharse Transaction

const purcharseTransaction = transactions.filter(transactions => transactions.amount < 0)
console.log('Purcharse Transaction: ',purcharseTransaction);