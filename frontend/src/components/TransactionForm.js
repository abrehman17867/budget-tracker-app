import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title || !amount || !type) {
      setError("Please fill in all the fields.");
      return;
    }

    
    if (parseFloat(amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }

    const newTransaction = {
      title,
      amount: parseFloat(amount),
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("income");
    setError(""); 
    setSuccessMessage("Successfully added transaction!");
    setTimeout(() => setSuccessMessage(""), 3000); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-100 p-8 rounded-xl shadow-xl space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New Transaction</h2>

      {error && <div className="text-red-500 text-center">{error}</div>}
      {successMessage && <div className="text-green-500 text-center">{successMessage}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter transaction title"
          />
        </div>

        <div className="w-full">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="income"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={() => setType("income")}
              className="h-5 w-5 text-blue-500"
            />
            <label htmlFor="income" className="ml-2 text-sm text-gray-600">Income</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="expense"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
              className="h-5 w-5 text-red-500"
            />
            <label htmlFor="expense" className="ml-2 text-sm text-gray-600">Expense</label>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="w-full sm:w-[12rem] py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
