import React from "react";

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="bg-lime-100 p-8 rounded-xl shadow-lg mt-5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Income</span>
          <span className="font-semibold text-lg text-green-600">
            ${totalIncome.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Expenses</span>
          <span className="font-semibold text-lg text-red-600">
            ${totalExpense.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Remaining Balance</span>
          <span
            className={`font-semibold text-lg ${
              balance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ${balance.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
