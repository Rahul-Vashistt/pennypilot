import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TransactionList from "../features/transactions/TransactionList";
import TransactionLoading from "../components/loading/TransactionLoading";
import { useTransactions } from "../hooks/transactions/useTransactions";
import { useDeleteTransaction } from "../hooks/transactions/useDeleteTransaction";

export default function TransactionsPage() {
  const [transactionCount, setTransactionCount] = useState(5);

  const { data: transactions, isLoading, isError, error } = useTransactions();
  const { mutate: deleteTransaction } = useDeleteTransaction();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Sidebar />

        <section className="flex h-full w-full flex-col gap-5 px-5 pt-10">
          <TransactionLoading count={transactionCount} />
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Sidebar />

        <section className="flex h-full w-full items-center justify-center px-5 pt-10">
          <p className="text-sm text-red-600 dark:text-red-400">
            {error?.message ?? "Something went wrong"}
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Sidebar />

      <section className="flex h-full w-full flex-col gap-5 px-5 pt-10">
        <TransactionList
          transactions={transactions}
          onTransactionsCountChange={setTransactionCount}
          onDelete={deleteTransaction}
        />
      </section>
    </main>
  );
}
