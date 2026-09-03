import { CalendarDays, ChevronDown, Search, Trash2, X } from "lucide-react";

import type { Category } from "../../types/Transaction";

type TransactionFilter = "All" | "Income" | "Expense";

type DateFilter = "This Month" | "Last Month" | "All Time";

interface ToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  transactionType: TransactionFilter;
  onTransactionTypeChange: (value: TransactionFilter) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: Category[];
  dateFilter: DateFilter;
  onDateFilterChange: (value: DateFilter) => void;
  selectedCount: number;
  onDeleteSelected: () => void;
  onClearSelection: () => void;
}

export default function Toolbar({
  search,
  onSearchChange,
  transactionType,
  onTransactionTypeChange,
  category,
  onCategoryChange,
  categories,
  dateFilter,
  onDateFilterChange,
  selectedCount,
  onDeleteSelected,
  onClearSelection,
}: ToolbarProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 px-4 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search transactions..."
              className="
                h-10 w-full rounded-xl border border-zinc-200
                bg-white pl-10 pr-9 text-sm text-zinc-900
                outline-none transition
                placeholder:text-zinc-400
                focus:border-emerald-500 focus:ring-2
                focus:ring-emerald-500/10
                dark:border-zinc-800 dark:bg-zinc-900
                dark:text-zinc-100 dark:placeholder:text-zinc-500
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="
                  absolute right-3 top-1/2 flex -translate-y-1/2
                  items-center justify-center rounded-md
                  text-zinc-400 hover:text-zinc-700
                  dark:text-zinc-500 dark:hover:text-zinc-200
                "
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex w-full overflow-x-auto rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900 lg:w-auto">
            {(["All", "Income", "Expense"] as TransactionFilter[]).map(
              (type) => {
                const active = transactionType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => onTransactionTypeChange(type)}
                    className={`
                      min-w-18 rounded-lg px-3 py-2 text-xs
                      font-semibold transition-colors
                      ${
                        active
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                      }
                    `}
                  >
                    {type}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <select
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="
                  h-9 appearance-none rounded-lg border
                  border-zinc-200 bg-white pl-3 pr-8 text-xs
                  font-medium text-zinc-700 outline-none
                  focus:border-emerald-500
                  dark:border-zinc-800 dark:bg-zinc-900
                  dark:text-zinc-300
                "
              >
                <option value="All">All Categories</option>

                {categories?.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="
                  pointer-events-none absolute right-2.5
                  top-1/2 -translate-y-1/2
                  text-zinc-400
                "
              />
            </div>

            <div className="relative">
              <CalendarDays
                size={14}
                className="
                  pointer-events-none absolute left-3
                  top-1/2 -translate-y-1/2
                  text-zinc-400
                "
              />

              <select
                value={dateFilter}
                onChange={(e) =>
                  onDateFilterChange(e.target.value as DateFilter)
                }
                className="
                  h-9 appearance-none rounded-lg border
                  border-zinc-200 bg-white pl-8 pr-8 text-xs
                  font-medium text-zinc-700 outline-none
                  focus:border-emerald-500
                  dark:border-zinc-800 dark:bg-zinc-900
                  dark:text-zinc-300
                "
              >
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
                <option value="All Time">All Time</option>
              </select>

              <ChevronDown
                size={14}
                className="
                  pointer-events-none absolute right-2.5
                  top-1/2 -translate-y-1/2
                  text-zinc-400
                "
              />
            </div>
          </div>

          {selectedCount > 0 && (
            <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-2 dark:border-emerald-900/60 dark:bg-emerald-950/30 sm:justify-end">
              <span className="px-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                {selectedCount} selected
              </span>

              <button
                type="button"
                onClick={onClearSelection}
                className="
                  rounded-lg px-2.5 py-1.5 text-xs font-medium
                  text-zinc-600 hover:bg-white hover:text-zinc-900
                  dark:text-zinc-400 dark:hover:bg-zinc-900
                  dark:hover:text-zinc-100
                "
              >
                Clear
              </button>

              <button
                type="button"
                onClick={onDeleteSelected}
                className="
                  flex items-center gap-1.5 rounded-lg
                  bg-red-600 px-2.5 py-1.5 text-xs
                  font-semibold text-white transition-colors
                  hover:bg-red-700
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
}
