import {
  MoreVertical,
  Utensils,
  BriefcaseBusiness,
  Clapperboard,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "Aug 25, 2023",
    mobileDate: "Aug 25",
    description: "Lunch at Cafe",
    account: "HDFC Checking",
    category: "Food",
    method: "UPI",
    amount: "-₹450",
    type: "expense",
    icon: Utensils,
    iconColor:
      "text-orange-600 dark:text-orange-400",
    iconBg:
      "bg-orange-100 dark:bg-orange-500/10",
  },
  {
    id: 2,
    date: "Aug 24, 2023",
    mobileDate: "Aug 24",
    description: "Salary",
    account: "Direct Deposit",
    category: "Income",
    method: "Bank Transfer",
    amount: "+₹75,000",
    type: "income",
    icon: BriefcaseBusiness,
    iconColor:
      "text-emerald-600 dark:text-emerald-400",
    iconBg:
      "bg-emerald-100 dark:bg-emerald-500/10",
  },
  {
    id: 3,
    date: "Aug 23, 2023",
    mobileDate: "Aug 23",
    description: "Netflix",
    account: "Credit Card",
    category: "Entertainment",
    method: "Card",
    amount: "-₹649",
    type: "expense",
    icon: Clapperboard,
    iconColor:
      "text-violet-600 dark:text-violet-400",
    iconBg:
      "bg-violet-100 dark:bg-violet-500/10",
  },
];

export default function TransactionList() {
  return (
    <section className="mt-6 flex-1 px-4 lg:px-8">
      {/* Skeleton Loader */}
      <div className="hidden w-full flex-col gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-16 w-full animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          />
        ))}
      </div>

      {/* Desktop Table */}
      <div className="mb-8 hidden w-full overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-zinc-900 lg:flex lg:flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 bg-zinc-50/80 px-6 py-4 dark:bg-zinc-800/50">
          <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Date
          </div>

          <div className="col-span-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Description
          </div>

          <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Category
          </div>

          <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Method
          </div>

          <div className="col-span-1 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Amount
          </div>

          <div className="col-span-1" />
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {transactions.map((transaction, index) => {
            const Icon = transaction.icon;

            return (
              <div key={transaction.id}>
                <div className="group grid grid-cols-12 items-center gap-4 px-6 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                  {/* Date */}
                  <div className="col-span-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {transaction.date}
                  </div>

                  {/* Description */}
                  <div className="col-span-4 flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${transaction.iconBg}`}
                    >
                      <Icon
                        size={19}
                        className={transaction.iconColor}
                      />
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <span className="truncate text-base font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                        {transaction.description}
                      </span>

                      <span className="truncate text-xs leading-4 text-zinc-500 dark:text-zinc-400">
                        {transaction.account}
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 text-sm text-zinc-900 dark:text-zinc-100">
                    {transaction.category}
                  </div>

                  {/* Method */}
                  <div className="col-span-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {transaction.method}
                  </div>

                  {/* Amount */}
                  <div
                    className={`col-span-1 text-right text-base font-semibold leading-6 ${
                      transaction.type === "income"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}
                  >
                    {transaction.amount}
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex justify-end">
                    <button
                      type="button"
                      aria-label={`More options for ${transaction.description}`}
                      className="rounded-full p-2 text-zinc-500 opacity-0 transition-all hover:bg-zinc-100 hover:text-zinc-900 group-hover:opacity-100 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                {/* Divider */}
                {index < transactions.length - 1 && (
                  <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Card View */}
      <div className="mb-8 flex flex-col gap-3 lg:hidden">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/80"
            >
              {/* Left Side */}
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${transaction.iconBg}`}
                >
                  <Icon
                    size={21}
                    className={transaction.iconColor}
                  />
                </div>

                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-base font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                    {transaction.description}
                  </span>

                  <span className="truncate text-xs leading-4 text-zinc-500 dark:text-zinc-400">
                    {transaction.category} • {transaction.mobileDate}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <span
                className={`shrink-0 text-base font-semibold leading-6 ${
                  transaction.type === "income"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                {transaction.amount}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}