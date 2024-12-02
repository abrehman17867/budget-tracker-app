import React from "react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="bg-yellow-100 p-6 rounded-xl shadow-lg mt-5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Transaction List</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <div className="mb-4 md:mb-0">
              <div className="font-semibold text-lg">{transaction.title}</div>
              <div className="text-sm text-gray-600">{transaction.type}</div>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800 mr-4">
                ${transaction.amount.toFixed(2)}
              </span>
              <button
                onClick={() => {
                  console.log("Deleting transaction with ID:", transaction.id);
                  deleteTransaction(transaction.id); 
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
