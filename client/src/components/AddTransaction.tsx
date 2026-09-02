import {
  FileText,
  IndianRupee,
  ListSortDescending,
  Plus,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import {
  categories,
  PAYMENT_METHODS,
  type Category,
  type CreateTransaction,
  type PaymentMethod,
  type TransactionType,
} from "../types/Transaction";

export default function AddTransaction() {
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);

  const [isExpense, setIsExpense] = useLocalStorage("isExpense", true);

  const incomeCategories = categories.Income;
  const expenseCategories = categories.Expense;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState<Category>(expenseCategories[0]);

  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PAYMENT_METHODS[0],
  );

  const transactionType: TransactionType = isExpense ? "Expense" : "Income";

  const handleTransactionTypeChange = (expense: boolean) => {
    setIsExpense(expense);

    setCategory(expense ? expenseCategories[0] : incomeCategories[0]);
  };

  const handleClose = () => {
    setIsAddingTransaction(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const transaction: CreateTransaction = {
      description: description.trim(),
      amount: Number(amount),
      category,
      paymentMethod,
      transactionType,
      transactionDate,
    };

    console.log(transaction);

    // TODO:
    // Send transaction to your backend here.

    // Reset form
    setDescription("");
    setAmount("");
    setCategory(isExpense ? expenseCategories[0] : incomeCategories[0]);
    setPaymentMethod(PAYMENT_METHODS[0]);
    setTransactionDate(new Date().toISOString().split("T")[0]);

    // Close modal
    setIsAddingTransaction(false);
  };

  return (
    <>
      {/* Floating Add Transaction Button */}
      <button
        type="button"
        onClick={() => setIsAddingTransaction(true)}
        className={`
          fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10
          group
          hidden xl:flex
          h-16 w-16 hover:w-56
          items-center
          overflow-hidden
          rounded-full
          bg-emerald-700
          text-slate-200 hover:text-white
          font-bold font-hanken
          shadow-xl hover:shadow-2xl
          cursor-pointer
          transition-all duration-300
          active:scale-95

          ${
            isAddingTransaction
              ? "pointer-events-none opacity-0"
              : "opacity-100"
          }
        `}
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center">
          <Plus
            size={28}
            strokeWidth={2.5}
            className="
              transition-transform duration-300 delay-75
              group-hover:-rotate-90
            "
          />
        </span>

        <span
          className="
            whitespace-nowrap
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-200
            delay-75
            uppercase tracking-wider
            -translate-x-2.5
          "
        >
          Add Transaction
        </span>
      </button>

      {/* Transaction Modal */}
      {isAddingTransaction && (
        <section className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-xl"
          />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 w-full max-w-lg"
          >
            <div className="flex flex-col gap-5 px-5 py-5 bg-white border border-zinc-200 dark:bg-slate-700 dark:border-zinc-500 shadow-2xl rounded-3xl">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl text-black dark:text-white font-semibold tracking-tight">
                    New Transaction
                  </h2>

                  <p className="text-sm text-zinc-500 dark:text-zinc-300">
                    Add a new income or expense
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-slate-600 transition-all"
                  aria-label="Close transaction form"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Transaction Type */}
              <div className="w-full flex bg-slate-100 dark:bg-slate-500 rounded-2xl p-1.5">
                <button
                  type="button"
                  onClick={() => handleTransactionTypeChange(true)}
                  className={`
                    font-hanken font-semibold leading-relaxed
                    py-3 px-4 w-1/2 cursor-pointer select-none
                    transition-all duration-200
                    ${
                      isExpense
                        ? "bg-emerald-700 dark:bg-emerald-600 rounded-xl text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-300"
                    }
                  `}
                >
                  Expense
                </button>

                <button
                  type="button"
                  onClick={() => handleTransactionTypeChange(false)}
                  className={`
                    font-hanken font-semibold leading-relaxed
                    py-3 px-4 w-1/2 cursor-pointer select-none
                    transition-all duration-200
                    ${
                      !isExpense
                        ? "bg-emerald-700 dark:bg-emerald-600 rounded-xl text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-300"
                    }
                  `}
                >
                  Income
                </button>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionDesc"
                  className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                >
                  Description
                </label>

                <div className="flex items-center relative px-3 py-4 bg-slate-100/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <FileText
                    size={24}
                    className="absolute left-3 text-zinc-500 dark:text-zinc-300 pointer-events-none"
                  />

                  <input
                    type="text"
                    id="transactionDesc"
                    name="description"
                    placeholder={isExpense ? "Lunch at Cafe" : "Salary"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full bg-transparent pl-10 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-500 outline-none rounded-lg"
                  />
                </div>
              </div>

              {/* Amount */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionAmt"
                  className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                >
                  Amount
                </label>

                <div className="flex items-center relative px-3 py-4 bg-slate-100/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <IndianRupee
                    size={24}
                    className="absolute left-3 text-zinc-500 dark:text-zinc-300 pointer-events-none"
                  />

                  <input
                    type="number"
                    id="transactionAmt"
                    name="amount"
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full bg-transparent pl-10 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-500 outline-none rounded-lg"
                  />
                </div>
              </div>

              {/* Category + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="transactionCateg"
                    className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                  >
                    Category
                  </label>

                  <div className="flex items-center relative px-3 py-4 bg-slate-100/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                    <ListSortDescending
                      size={24}
                      className="absolute left-3 text-zinc-500 dark:text-zinc-300 pointer-events-none"
                    />

                    <select
                      id="transactionCateg"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Category)}
                      className="w-full bg-transparent pl-10 text-zinc-800 dark:text-zinc-200 outline-none"
                    >
                      {(isExpense ? expenseCategories : incomeCategories).map(
                        (cat) => (
                          <option
                            key={cat}
                            value={cat}
                            className="text-zinc-800"
                          >
                            {cat}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="transactionDate"
                    className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                  >
                    Date
                  </label>

                  <div className="px-3 py-4 bg-slate-100/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                    <input
                      type="date"
                      id="transactionDate"
                      name="transactionDate"
                      value={transactionDate}
                      onChange={(e) => setTransactionDate(e.target.value)}
                      required
                      className="w-full bg-transparent text-zinc-800 dark:text-zinc-200 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionPaymentMethod"
                  className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                >
                  Payment Method
                </label>

                <div className="flex items-center relative px-3 py-4 bg-slate-100/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <WalletCards
                    size={24}
                    className="absolute left-3 text-zinc-500 dark:text-zinc-300 pointer-events-none"
                  />

                  <select
                    id="transactionPaymentMethod"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value as PaymentMethod)
                    }
                    className="w-full bg-transparent pl-10 text-zinc-800 dark:text-zinc-200 outline-none"
                  >
                    {PAYMENT_METHODS.map((method) => (
                      <option
                        key={method}
                        value={method}
                        className="text-zinc-800"
                      >
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="
                  w-full py-4
                  bg-emerald-700 dark:bg-emerald-600
                  rounded-2xl
                  text-white
                  font-semibold font-manrope
                  hover:bg-emerald-800
                  dark:hover:bg-emerald-500
                  active:scale-[0.98]
                  cursor-pointer
                  transition-all duration-200
                "
              >
                Save Transaction
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
