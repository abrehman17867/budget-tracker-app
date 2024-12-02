const express = require('express');
const cors = require('cors');
const app = express();
const transactionRoutes = require('./routes/transactionsRoutes');

app.use(cors()); 

app.use(express.json());

// API Routes
app.use('/api/transactions', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
