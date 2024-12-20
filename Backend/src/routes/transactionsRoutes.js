const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Routes
router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.addTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
