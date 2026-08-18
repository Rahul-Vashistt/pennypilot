import {
  ArrowRight,
  Coffee,
  Home,
  ShoppingCart,
  Train,
  BriefcaseBusiness,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link } from "react-router-dom";

interface Transaction {
  merchant: string;
  category: string;
  date: string;
  amount: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  amountColor?: string;
}

const transactions: Transaction[] = [
  {
    merchant: "Starbucks",
    category: "Food & Dining",
    date: "Today, 09:41 AM",
    amount: "-₹320",
    icon: Coffee,
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-700 dark:text-amber-400",
    amountColor: "text-zinc-900 dark:text-zinc-100",
  },
  {
    merchant: "Metro Recharge",
    category: "Transport",
    date: "Yesterday, 06:30 PM",
    amount: "-₹60",
    icon: Train,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-700 dark:text-blue-400",
    amountColor: "text-zinc-900 dark:text-zinc-100",
  },
  {
    merchant: "Upwork Escrow Inc.",
    category: "Income",
    date: "Oct 24, 11:20 AM",
    amount: "+₹18,000",
    icon: BriefcaseBusiness,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-700 dark:text-emerald-400",
    amountColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    merchant: "Blinkit Grocery",
    category: "Shopping",
    date: "Oct 23, 08:15 PM",
    amount: "-₹2,450",
    icon: ShoppingCart,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-700 dark:text-violet-400",
    amountColor: "text-zinc-900 dark:text-zinc-100",
  },
  {
    merchant: "Monthly Rent",
    category: "Housing",
    date: "Oct 01, 10:00 AM",
    amount: "-₹15,000",
    icon: Home,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-700 dark:text-red-400",
    amountColor: "text-zinc-900 dark:text-zinc-100",
  },
];

export default function RecentTransactions() {
  return (
    <section className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-lg mb-10 dark:border-slate-800/70 dark:bg-slate-900 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Recent Transactions
        </h2>

        <Link
          to={"/transactions"}
          type="button"
          className="group flex items-center justify-between gap-1 text-xs sm:text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 cursor-pointer"
        >
          View all
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200 sm:translate-y-px" />
        </Link>
     </div>

      <div className="flex flex-col gap-2">
        {transactions.map((transaction, index) => {
          const Icon = transaction.icon;

          return (
            <div
              key={index}
              className="group flex items-center justify-between rounded-2xl p-4 transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-slate-800/60"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all group-hover:shadow-md ${transaction.iconBg}`}
                >
                  <Icon size={20} className={transaction.iconColor} />
                </div>

                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-medium text-zinc-950 dark:text-zinc-50">
                    {transaction.merchant}
                  </span>

                  <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                    {transaction.category} • {transaction.date}
                  </span>
                </div>
              </div>

              <span
                className={`ml-4 shrink-0 text-sm font-semibold tracking-tight ${transaction.amountColor}`}
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