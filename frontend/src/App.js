// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import TransactionForm from "./components/TransactionForm";
// import TransactionList from "./components/TransactionList";
// import Summary from "./components/Summary";

// const App = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   // Fetch all transactions
//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/transactions");
//       setTransactions(response.data);
//     } catch (error) {
//       console.error("There was an error fetching the transactions!", error);
//     }
//   };

//   // Add new transaction
//   const addTransaction = async (transaction) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/transactions", transaction);
//       setTransactions([...transactions, response.data]);
//     } catch (error) {
//       console.error("There was an error adding the transaction!", error);
//     }
//   };

//   // Delete a transaction
//   const deleteTransaction = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/transactions/${id}`);
//       setTransactions(transactions.filter((transaction) => transaction.id !== id));
//     } catch (error) {
//       console.error("There was an error deleting the transaction!", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center p-6">
//       <div className="w-full max-w-3xl p-8">
//         <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">Budget Tracker</h1>
//         <TransactionForm addTransaction={addTransaction} />
//         <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
//         <Summary transactions={transactions} />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("There was an error fetching the transactions!", error);
    }
  };

  // Add new transaction
  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post("http://localhost:5000/api/transactions", transaction);
      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error("There was an error adding the transaction!", error);
    }
  };

  // Delete a transaction by ID
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/transactions/${id}`);
      setTransactions(transactions.filter((transaction) => transaction.id !== id));
    } catch (error) {
      console.error("There was an error deleting the transaction!", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-3xl p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">Budget Tracker</h1>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <Summary transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
