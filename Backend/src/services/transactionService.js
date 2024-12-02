const { v4: uuidv4 } = require('uuid');

// In-memory array to store transactions
let transactions = [
    {
      id: uuidv4(),
      title: 'Grocery Shopping',
      amount: 50.0,
      type: 'expense',
    },
    {
      id: uuidv4(),
      title: 'Freelance Income',
      amount: 300.0,
      type: 'income',
    },
  ];

// Service to get all transactions
const getTransactionsService = () => {
  try {
    return { success: true, transactions };
  } catch (error) {
    return { success: false, message: 'Failed to fetch transactions' };
  }
};

// Service to add a new transaction
const addTransactionService = (title, amount, type) => {
  try {
    if (!title || !amount || !type) {
      return { success: false, message: 'All fields are required' };
    }

    const id = uuidv4(); // Generate unique ID for transaction
    const newTransaction = { id, title, amount, type };

    transactions.push(newTransaction); // Add the new transaction to the array
    return { success: true, message: 'Transaction added successfully', transaction: newTransaction };
  } catch (error) {
    return { success: false, message: 'Failed to add transaction' };
  }
};

// Service to delete a transaction
const deleteTransactionService = (id) => {
  try {
    const transactionIndex = transactions.findIndex(transaction => transaction.id === id);
    
    if (transactionIndex === -1) {
      return { success: false, message: 'Transaction not found' };
    }

    transactions.splice(transactionIndex, 1); // Remove the transaction from the array
    return { success: true, message: 'Successfully deleted the transaction' };
  } catch (error) {
    return { success: false, message: 'Failed to delete transaction' };
  }
};

module.exports = {
  getTransactionsService,
  addTransactionService,
  deleteTransactionService,
};
