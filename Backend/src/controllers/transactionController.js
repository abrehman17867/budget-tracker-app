const { getTransactionsService, addTransactionService, deleteTransactionService } = require('../services/transactionService');

// Get all transactions
const getAllTransactions = (req, res) => {
  try {
    const result = getTransactionsService();
    if (result.success) {
      return res.json(result.transactions);
    } else {
      return res.status(500).json({ error: result.message });
    }
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching transactions' });
  }
};

// Add a new transaction
const addTransaction = (req, res) => {
  const { title, amount, type } = req.body;

  if (!title || !amount || !type) {
    return res.status(400).json({ error: 'Title, amount, and type are required' });
  }

  try {
    const result = addTransactionService(title, amount, type);

    if (result.success) {
      return res.status(201).json(result.transaction);
    } else {
      return res.status(400).json({ error: result.message });
    }
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while adding the transaction' });
  }
};

// Delete a transaction by ID
const deleteTransaction = (req, res) => {
  const { id } = req.params;

  try {
    const result = deleteTransactionService(id);

    if (result.success) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ error: result.message });
    }
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while deleting the transaction' });
  }
};

module.exports = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
};
