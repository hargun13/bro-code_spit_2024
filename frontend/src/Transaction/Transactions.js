import React from "react";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  return (
    <div className="w-full p-10 overflow-y-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-semibold">Your Transactions</h1>
        <form className="w-1/3 relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-[#72e485]"
            placeholder="Search Transactions..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-[#72e485] text-white font-medium rounded-r-lg px-6 py-3 focus:ring-4 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default Transactions;
