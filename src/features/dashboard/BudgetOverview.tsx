import {
  Clapperboard,
  ShoppingBag,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { formatCurrency } from "../../utils/formatText";
import { Link } from "react-router-dom";

interface SpendingBudget {
  budgetName: string;
  spentAmount: number;
  totalAmount: number;
  icon: LucideIcon;
}

const spendingBudgets: SpendingBudget[] = [
  {
    budgetName: "Food",
    spentAmount: 3800,
    totalAmount: 10000,
    icon: Utensils,
  },
  {
    budgetName: "Shopping",
    spentAmount: 4200,
    totalAmount: 5000,
    icon: ShoppingBag,
  },
  {
    budgetName: "Entertainment",
    spentAmount: 2100,
    totalAmount: 5000,
    icon: Clapperboard,
  },
];

function getBudgetStatus(percentage: number) {
  if (percentage < 40) {
    return {
      label: "On track",
      color: "text-green-600",
      barColor: "bg-green-500",
    };
  }

  if (percentage < 60) {
    return {
      label: "Moderate spending",
      color: "text-yellow-600",
      barColor: "bg-yellow-500",
    };
  }

  if (percentage < 90) {
    return {
      label: "Approaching limit",
      color: "text-orange-600",
      barColor: "bg-orange-500",
    };
  }

  if (percentage < 100) {
    return {
      label: "Near limit",
      color: "text-orange-700",
      barColor: "bg-orange-600",
    };
  }

  return {
    label: "Over budget",
    color: "text-red-600",
    barColor: "bg-red-500",
  };
}

export default function BudgetOverview() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-3">
        <h2 className="py-3 text-lg font-bold tracking-wide text-zinc-950 dark:text-zinc-50">
          Budget Overview
        </h2>

        <Link
          to={"/budgets"}
          className="py-3 font-medium cursor-pointer text-sm tracking-wide text-emerald-500 transition-colors hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-400"
        >
          View all
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {spendingBudgets.map((budget) => {
          const Icon = budget.icon;

          const percentage = Math.round(
            (budget.spentAmount / budget.totalAmount) * 100,
          );

          const status = getBudgetStatus(percentage);

          return (
            <div key={budget.budgetName}>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400"
                  />

                  <span className="font-medium text-zinc-950 dark:text-zinc-50">
                    {budget.budgetName}
                  </span>
                </div>

                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {formatCurrency(budget.spentAmount)} /{" "}
                  {formatCurrency(budget.totalAmount)}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-slate-700">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${status.barColor}`}
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                  }}
                />
              </div>

              {/* Status */}
              <div
                className={`mt-1 flex items-center justify-between text-xs font-medium ${status.color}`}
              >
                <span>{status.label}</span>
                <span>{percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
