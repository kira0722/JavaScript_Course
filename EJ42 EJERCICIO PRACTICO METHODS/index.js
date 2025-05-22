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

//4. Find a Transaction by Description

const specificTransaction = transactions.find(transactions => transactions.description === 'Online Purcharse')
console.log('specific Transaction: ',specificTransaction);

//5. find the index of a Transaction by Amount

const indexTransactionAmount = transactions.findIndex(transactions => transactions.amount === -100)
console.log('Index Transaction: ', indexTransactionAmount);

//6. Update Transacion Descriptions

transactions.forEach(transactions => {
    if(transactions.amount < 0){
        transactions.description = `Expense: ${transactions.description}`
    } else {
        transactions.description = `Income: ${transactions.description}`
    }
})

console.log('update Transactions: ', transactions);