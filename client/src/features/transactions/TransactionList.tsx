import {
  Banknote,
  Check,
  CreditCard,
  MoreHorizontal,
  Pencil,
  Trash2,
  WalletCards,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Toolbar from "./Toolbar";

import {
  categories,
  type Category,
  type Transaction,
} from "../../types/Transaction";

interface TransactionListProps {
  transactions?: Transaction[];
  onTransactionsCountChange?: (count: number) => void;
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
  onDeleteMany?: (transactionIds: string[]) => void;
}

type TransactionFilter = "All" | "Income" | "Expense";

type DateFilter = "This Month" | "Last Month" | "All Time";

export default function TransactionList({
  transactions = [],
  onTransactionsCountChange,
  onEdit,
  onDelete,
  onDeleteMany,
}: TransactionListProps) {
  const [search, setSearch] = useState("");
  const [transactionType, setTransactionType] =
    useState<TransactionFilter>("All");
  const [category, setCategory] = useState("All");
  const [dateFilter, setDateFilter] = useState<DateFilter>("This Month");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const transactionCount = transactions?.length ?? 0;

  const allCategories = useMemo(() => {
    return Array.from(
      new Set([...(categories?.Income ?? []), ...(categories?.Expense ?? [])]),
    ) as Category[];
  }, []);

  const filteredTransactions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return (
      transactions?.filter((transaction) => {
        if (!transaction) return false;

        const description = transaction.description?.toLowerCase() ?? "";

        const transactionCategory = transaction.category?.toLowerCase() ?? "";

        const paymentMethod = transaction.paymentMethod?.toLowerCase() ?? "";

        const matchesSearch =
          !normalizedSearch ||
          description.includes(normalizedSearch) ||
          transactionCategory.includes(normalizedSearch) ||
          paymentMethod.includes(normalizedSearch);

        const matchesType =
          transactionType === "All" ||
          transaction.transactionType === transactionType;

        const matchesCategory =
          category === "All" || transaction.category === category;

        const transactionDate = transaction.transactionDate
          ? new Date(transaction.transactionDate)
          : null;

        const validDate =
          transactionDate && !Number.isNaN(transactionDate.getTime());

        const now = new Date();

        let matchesDate = true;

        if (dateFilter === "This Month") {
          if (!validDate) {
            matchesDate = false;
          } else {
            matchesDate =
              transactionDate.getMonth() === now.getMonth() &&
              transactionDate.getFullYear() === now.getFullYear();
          }
        }

        if (dateFilter === "Last Month") {
          if (!validDate) {
            matchesDate = false;
          } else {
            const lastMonth = new Date(
              now.getFullYear(),
              now.getMonth() - 1,
              1,
            );

            matchesDate =
              transactionDate.getMonth() === lastMonth.getMonth() &&
              transactionDate.getFullYear() === lastMonth.getFullYear();
          }
        }

        return matchesSearch && matchesType && matchesCategory && matchesDate;
      }) ?? []
    );
  }, [transactions, search, transactionType, category, dateFilter]);

  useEffect(() => {
    onTransactionsCountChange?.(transactionCount);
  }, [transactionCount, onTransactionsCountChange]);

  useEffect(() => {
    const transactionIds = new Set(
      transactions?.map((transaction) => transaction?._id).filter(Boolean) ??
        [],
    );

    setSelectedIds((current) => {
      const next = new Set([...current].filter((id) => transactionIds.has(id)));

      return next.size === current.size ? current : next;
    });
  }, [transactions]);

  useEffect(() => {
    if (
      openMenuId &&
      !transactions?.some((transaction) => transaction?._id === openMenuId)
    ) {
      setOpenMenuId(null);
    }
  }, [transactions, openMenuId]);

  const selectedCount = selectedIds.size;

  const allVisibleSelected =
    filteredTransactions.length > 0 &&
    filteredTransactions.every((transaction) =>
      selectedIds.has(transaction?._id),
    );

  const toggleTransaction = (id?: string) => {
    if (!id) return;

    setSelectedIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelectedIds((current) => {
      const next = new Set(current);

      if (allVisibleSelected) {
        filteredTransactions.forEach((transaction) => {
          if (transaction?._id) {
            next.delete(transaction._id);
          }
        });
      } else {
        filteredTransactions.forEach((transaction) => {
          if (transaction?._id) {
            next.add(transaction._id);
          }
        });
      }

      return next;
    });
  };

  const handleDeleteSelected = () => {
    if (selectedIds.size === 0) return;

    const ids = Array.from(selectedIds);

    const confirmed = window.confirm(
      `Delete ${ids.length} selected transaction${
        ids.length === 1 ? "" : "s"
      }?`,
    );

    if (!confirmed) return;

    onDeleteMany?.(ids);
    setSelectedIds(new Set());
  };

  const handleDelete = (transaction: Transaction) => {
    if (!transaction?._id) return;

    const confirmed = window.confirm(
      `Delete "${transaction.description ?? "this transaction"}"?`,
    );

    if (!confirmed) return;

    onDelete?.(transaction._id);

    setSelectedIds((current) => {
      const next = new Set(current);
      next.delete(transaction._id);
      return next;
    });

    setOpenMenuId(null);
  };

  const formatAmount = (transaction: Transaction) => {
    const amount = Number(transaction?.amount ?? 0);

    const formattedAmount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

    return transaction?.transactionType === "Income"
      ? `+${formattedAmount}`
      : `-${formattedAmount}`;
  };

  const formatDate = (date?: string) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(parsedDate);
  };

  const PaymentIcon = ({
    paymentMethod,
  }: {
    paymentMethod?: Transaction["paymentMethod"];
  }) => {
    const value = paymentMethod?.toLowerCase() ?? "";

    if (
      value.includes("card") ||
      value.includes("credit") ||
      value.includes("debit")
    ) {
      return <CreditCard size={15} />;
    }

    if (value.includes("cash") || value.includes("wallet")) {
      return <WalletCards size={15} />;
    }

    return <Banknote size={15} />;
  };

  const hasFilters =
    Boolean(search) ||
    transactionType !== "All" ||
    category !== "All" ||
    dateFilter !== "All Time";

  return (
    <section className="w-full">
      <Toolbar
        search={search}
        onSearchChange={setSearch}
        transactionType={transactionType}
        onTransactionTypeChange={setTransactionType}
        category={category}
        onCategoryChange={setCategory}
        categories={allCategories}
        dateFilter={dateFilter}
        onDateFilterChange={setDateFilter}
        selectedCount={selectedCount}
        onDeleteSelected={handleDeleteSelected}
        onClearSelection={() => setSelectedIds(new Set())}
      />

      <div className="mt-5 flex items-center justify-between px-4 lg:px-8">
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
            Transactions
          </h2>

          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
            {filteredTransactions.length} of {transactionCount} transaction
            {transactionCount === 1 ? "" : "s"}
          </p>
        </div>

        {selectedCount > 0 && (
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {selectedCount} selected
          </p>
        )}
      </div>

      <div className="mt-4 hidden overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-950/50">
                <th className="w-12 px-5 py-4">
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    aria-label="Select all transactions"
                    className={`
                      flex h-5 w-5 items-center justify-center
                      rounded-md border transition-colors
                      ${
                        allVisibleSelected
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                      }
                    `}
                  >
                    {allVisibleSelected && <Check size={13} strokeWidth={3} />}
                  </button>
                </th>

                <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Description
                </th>

                <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Category
                </th>

                <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Payment Method
                </th>

                <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Type
                </th>

                <th className="px-4 py-4 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Amount
                </th>

                <th className="px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Date
                </th>

                <th className="w-14 px-4 py-4" />
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((transaction) => {
                const selected = selectedIds.has(transaction?._id);

                const menuOpen = openMenuId === transaction?._id;

                return (
                  <tr
                    key={transaction?._id}
                    className={`
                        border-b border-zinc-100 last:border-b-0
                        transition-colors dark:border-zinc-800
                        ${
                          selected
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20"
                            : "hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40"
                        }
                      `}
                  >
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => toggleTransaction(transaction?._id)}
                        aria-label={`Select ${
                          transaction?.description ?? "transaction"
                        }`}
                        className={`
                            flex h-5 w-5 items-center justify-center
                            rounded-md border transition-colors
                            ${
                              selected
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                            }
                          `}
                      >
                        {selected && <Check size={13} strokeWidth={3} />}
                      </button>
                    </td>

                    <td className="px-4 py-4">
                      <p className="max-w-52 truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {transaction?.description ?? "—"}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {transaction?.category ?? "—"}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                          <PaymentIcon
                            paymentMethod={transaction?.paymentMethod}
                          />
                        </span>

                        {transaction?.paymentMethod ?? "—"}
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`
                            inline-flex rounded-full px-3 py-1
                            text-xs font-semibold
                            ${
                              transaction?.transactionType === "Income"
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                                : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400"
                            }
                          `}
                      >
                        {transaction?.transactionType ?? "—"}
                      </span>
                    </td>

                    <td
                      className={`
                          px-4 py-4 text-right text-sm font-bold
                          ${
                            transaction?.transactionType === "Income"
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-red-600 dark:text-red-400"
                          }
                        `}
                    >
                      {formatAmount(transaction)}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {formatDate(transaction?.transactionDate)}
                    </td>

                    <td className="relative px-4 py-4">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenuId(
                            menuOpen ? null : (transaction?._id ?? null),
                          )
                        }
                        aria-label="Transaction actions"
                        className="
                            flex h-8 w-8 items-center justify-center
                            rounded-lg text-zinc-500 transition-colors
                            hover:bg-zinc-100 hover:text-zinc-900
                            dark:text-zinc-400 dark:hover:bg-zinc-800
                            dark:hover:text-zinc-100
                          "
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {menuOpen && (
                        <div
                          className="
                              absolute right-4 top-12 z-30 w-36
                              overflow-hidden rounded-xl border
                              border-zinc-200 bg-white p-1
                              shadow-xl dark:border-zinc-700
                              dark:bg-zinc-900
                            "
                        >
                          <button
                            type="button"
                            onClick={() => {
                              onEdit?.(transaction);
                              setOpenMenuId(null);
                            }}
                            className="
                                flex w-full items-center gap-2
                                rounded-lg px-3 py-2 text-left
                                text-xs font-medium text-zinc-700
                                hover:bg-zinc-100
                                dark:text-zinc-200
                                dark:hover:bg-zinc-800
                              "
                          >
                            <Pencil size={15} />
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(transaction)}
                            className="
                                flex w-full items-center gap-2
                                rounded-lg px-3 py-2 text-left
                                text-xs font-medium text-red-600
                                hover:bg-red-50
                                dark:text-red-400
                                dark:hover:bg-red-950/30
                              "
                          >
                            <Trash2 size={15} />
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <EmptyState hasFilters={hasFilters} />
        )}
      </div>

      <div className="mt-4 space-y-3 px-4 md:hidden">
        {filteredTransactions.length > 0 && (
          <button
            type="button"
            onClick={toggleSelectAll}
            className="
              flex w-full items-center gap-3 rounded-2xl
              border border-zinc-200 bg-white px-4 py-3
              text-left shadow-sm dark:border-zinc-800
              dark:bg-zinc-900
            "
          >
            <span
              className={`
                flex h-5 w-5 shrink-0 items-center justify-center
                rounded-md border
                ${
                  allVisibleSelected
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-zinc-300 dark:border-zinc-700"
                }
              `}
            >
              {allVisibleSelected && <Check size={13} strokeWidth={3} />}
            </span>

            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              {allVisibleSelected ? "Deselect all" : "Select all"}
            </span>
          </button>
        )}

        {filteredTransactions.map((transaction) => {
          const selected = selectedIds.has(transaction?._id);

          const menuOpen = openMenuId === transaction?._id;

          return (
            <div
              key={transaction?._id}
              className={`
                  relative rounded-2xl border bg-white p-4
                  shadow-sm transition-colors
                  dark:border-zinc-800 dark:bg-zinc-900
                  ${
                    selected
                      ? "border-emerald-300 bg-emerald-50/40 dark:border-emerald-800 dark:bg-emerald-950/20"
                      : "border-zinc-200"
                  }
                `}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleTransaction(transaction?._id)}
                  aria-label={`Select ${
                    transaction?.description ?? "transaction"
                  }`}
                  className={`
                      mt-1 flex h-5 w-5 shrink-0 items-center
                      justify-center rounded-md border
                      ${
                        selected
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-zinc-300 dark:border-zinc-700"
                      }
                    `}
                >
                  {selected && <Check size={13} strokeWidth={3} />}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {transaction?.description ?? "—"}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        {transaction?.category ?? "—"}
                      </p>
                    </div>

                    <p
                      className={`
                          shrink-0 text-sm font-bold
                          ${
                            transaction?.transactionType === "Income"
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-red-600 dark:text-red-400"
                          }
                        `}
                    >
                      {formatAmount(transaction)}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span
                      className={`
                          rounded-full px-2.5 py-1 text-[10px]
                          font-semibold
                          ${
                            transaction?.transactionType === "Income"
                              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                              : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400"
                          }
                        `}
                    >
                      {transaction?.transactionType ?? "—"}
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      <PaymentIcon paymentMethod={transaction?.paymentMethod} />
                      {transaction?.paymentMethod ?? "—"}
                    </span>

                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {formatDate(transaction?.transactionDate)}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenuId(
                        menuOpen ? null : (transaction?._id ?? null),
                      )
                    }
                    aria-label="Transaction actions"
                    className="
                        flex h-8 w-8 items-center justify-center
                        rounded-lg text-zinc-500
                        hover:bg-zinc-100
                        dark:text-zinc-400
                        dark:hover:bg-zinc-800
                      "
                  >
                    <MoreHorizontal size={18} />
                  </button>

                  {menuOpen && (
                    <div
                      className="
                          absolute right-0 top-9 z-30 w-32
                          overflow-hidden rounded-xl border
                          border-zinc-200 bg-white p-1
                          shadow-xl dark:border-zinc-700
                          dark:bg-zinc-900
                        "
                    >
                      <button
                        type="button"
                        onClick={() => {
                          onEdit?.(transaction);
                          setOpenMenuId(null);
                        }}
                        className="
                            flex w-full items-center gap-2
                            rounded-lg px-3 py-2 text-left
                            text-xs font-medium text-zinc-700
                            hover:bg-zinc-100
                            dark:text-zinc-200
                            dark:hover:bg-zinc-800
                          "
                      >
                        <Pencil size={14} />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(transaction)}
                        className="
                            flex w-full items-center gap-2
                            rounded-lg px-3 py-2 text-left
                            text-xs font-medium text-red-600
                            hover:bg-red-50
                            dark:text-red-400
                            dark:hover:bg-red-950/30
                          "
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filteredTransactions.length === 0 && (
          <EmptyState hasFilters={hasFilters} />
        )}
      </div>
    </section>
  );
}

function EmptyState({ hasFilters }: { hasFilters: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
        <WalletCards size={22} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {hasFilters ? "No matching transactions" : "No transactions yet"}
      </h3>

      <p className="mt-1 max-w-sm text-xs text-zinc-500 dark:text-zinc-400">
        {hasFilters
          ? "Try changing your search or filters."
          : "Your transactions will appear here once you add them."}
      </p>
    </div>
  );
}
