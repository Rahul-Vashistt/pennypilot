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

interface AddTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function AddTransaction({
  isOpen,
  onClose,
  onOpen,
}: AddTransactionProps) {
  const [isExpense, setIsExpense] = useLocalStorage("isExpense", true);

  const incomeCategories = categories.Income;
  const expenseCategories = categories.Expense;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState<Category>(
    expenseCategories[0]
  );

  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PAYMENT_METHODS[0]
  );

  const transactionType: TransactionType = isExpense
    ? "Expense"
    : "Income";

  const handleTransactionTypeChange = (expense: boolean) => {
    setIsExpense(expense);
    setCategory(
      expense
        ? expenseCategories[0]
        : incomeCategories[0]
    );
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

    setDescription("");
    setAmount("");
    setCategory(
      isExpense
        ? expenseCategories[0]
        : incomeCategories[0]
    );
    setPaymentMethod(PAYMENT_METHODS[0]);
    setTransactionDate(new Date().toISOString().split("T")[0]);

    onClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className={`
          fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center
          overflow-hidden rounded-full bg-emerald-700 text-slate-200
          shadow-xl transition-all duration-300 hover:w-56 hover:text-white
          hover:shadow-2xl active:scale-95 xl:flex
          ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}
        `}
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center">
          <Plus
            size={28}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:-rotate-90"
          />
        </span>

        <span className="whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Add Transaction
        </span>
      </button>

      {isOpen && (
        <section
          className="
            fixed inset-0 z-60 flex items-end justify-center
            sm:items-center sm:p-4
          "
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close transaction form"
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm"
          />

          <form
            onSubmit={handleSubmit}
            className="
              relative z-10 flex w-full flex-col
              rounded-t-3xl bg-white shadow-2xl
              dark:bg-slate-700
              sm:max-h-[90vh] sm:max-w-lg sm:rounded-3xl
              md:max-w-xl
            "
          >
            <div
              className="
                flex items-center justify-between border-b
                border-zinc-100 px-4 py-4
                dark:border-slate-600
                sm:px-6
              "
            >
              <div className="min-w-0">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                  New Transaction
                </h2>

                <p className="text-xs text-zinc-500 dark:text-zinc-300 sm:text-sm">
                  Add a new income or expense
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  ml-4 flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-xl text-zinc-500 transition-all
                  hover:bg-zinc-100 hover:text-zinc-900
                  active:scale-95
                  dark:text-zinc-300 dark:hover:bg-slate-600 dark:hover:text-white
                "
                aria-label="Close transaction form"
              >
                <X size={22} />
              </button>
            </div>

            <div
              className="
                flex flex-col gap-4 overflow-y-auto px-4 py-4
                pb-[calc(1rem+env(safe-area-inset-bottom))]
                sm:max-h-[calc(90vh-73px)] sm:px-6 sm:py-5
              "
            >
              <div className="flex w-full rounded-2xl bg-slate-100 p-1.5 dark:bg-slate-600">
                <button
                  type="button"
                  onClick={() => handleTransactionTypeChange(true)}
                  className={`
                    w-1/2 rounded-xl px-4 py-3 text-sm font-semibold
                    transition-all duration-200
                    ${
                      isExpense
                        ? "bg-emerald-700 text-white shadow-sm dark:bg-emerald-600"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    }
                  `}
                >
                  Expense
                </button>

                <button
                  type="button"
                  onClick={() => handleTransactionTypeChange(false)}
                  className={`
                    w-1/2 rounded-xl px-4 py-3 text-sm font-semibold
                    transition-all duration-200
                    ${
                      !isExpense
                        ? "bg-emerald-700 text-white shadow-sm dark:bg-emerald-600"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    }
                  `}
                >
                  Income
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionDesc"
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                >
                  Description
                </label>

                <div className="relative flex items-center rounded-2xl border border-slate-200/70 bg-slate-100/50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                  <FileText
                    size={22}
                    className="pointer-events-none absolute left-3 text-zinc-500 dark:text-zinc-300"
                  />

                  <input
                    type="text"
                    id="transactionDesc"
                    name="description"
                    placeholder={isExpense ? "Lunch at Cafe" : "Salary"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="
                      w-full min-w-0 bg-transparent pl-9 text-sm
                      text-zinc-800 outline-none
                      placeholder:text-zinc-500
                      dark:text-zinc-200
                    "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionAmt"
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                >
                  Amount
                </label>

                <div className="relative flex items-center rounded-2xl border border-slate-200/70 bg-slate-100/50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                  <IndianRupee
                    size={22}
                    className="pointer-events-none absolute left-3 text-zinc-500 dark:text-zinc-300"
                  />

                  <input
                    type="number"
                    id="transactionAmt"
                    name="amount"
                    min="0.01"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="
                      w-full min-w-0 bg-transparent pl-9 text-sm
                      text-zinc-800 outline-none
                      placeholder:text-zinc-500
                      dark:text-zinc-200
                    "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex min-w-0 flex-col gap-2">
                  <label
                    htmlFor="transactionCateg"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Category
                  </label>

                  <div className="relative flex items-center rounded-2xl border border-slate-200/70 bg-slate-100/50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                    <ListSortDescending
                      size={22}
                      className="pointer-events-none absolute left-3 text-zinc-500 dark:text-zinc-300"
                    />

                    <select
                      id="transactionCateg"
                      name="category"
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value as Category)
                      }
                      className="
                        w-full min-w-0 appearance-none bg-transparent
                        pl-9 pr-1 text-sm text-zinc-800 outline-none
                        dark:text-zinc-200
                      "
                    >
                      {(isExpense
                        ? expenseCategories
                        : incomeCategories
                      ).map((cat) => (
                        <option
                          key={cat}
                          value={cat}
                          className="text-zinc-900"
                        >
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                  <label
                    htmlFor="transactionDate"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Date
                  </label>

                  <div className="rounded-2xl border border-slate-200/70 bg-slate-100/50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                    <input
                      type="date"
                      id="transactionDate"
                      name="transactionDate"
                      value={transactionDate}
                      onChange={(e) =>
                        setTransactionDate(e.target.value)
                      }
                      required
                      className="
                        w-full min-w-0 bg-transparent text-sm
                        text-zinc-800 outline-none
                        dark:text-zinc-200
                      "
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="transactionPaymentMethod"
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                >
                  Payment Method
                </label>

                <div className="relative flex items-center rounded-2xl border border-slate-200/70 bg-slate-100/50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/50">
                  <WalletCards
                    size={22}
                    className="pointer-events-none absolute left-3 text-zinc-500 dark:text-zinc-300"
                  />

                  <select
                    id="transactionPaymentMethod"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value as PaymentMethod
                      )
                    }
                    className="
                      w-full min-w-0 appearance-none bg-transparent
                      pl-9 pr-1 text-sm text-zinc-800 outline-none
                      dark:text-zinc-200
                    "
                  >
                    {PAYMENT_METHODS.map((method) => (
                      <option
                        key={method}
                        value={method}
                        className="text-zinc-900"
                      >
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="
                  mt-1 w-full rounded-2xl bg-emerald-700 py-3.5
                  text-sm font-semibold text-white shadow-sm
                  transition-all duration-200
                  hover:bg-emerald-800
                  active:scale-[0.98]
                  dark:bg-emerald-600 dark:hover:bg-emerald-500
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