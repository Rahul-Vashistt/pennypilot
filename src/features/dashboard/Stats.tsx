import {
  ArrowDown,
  ArrowUp,
  TrendingDown,
  TrendingUp,
  Wallet,
  PiggyBank,
  HandCoins,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  amount: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trendIcon?: LucideIcon;
  trend?: string;
  trendColor?: string;
}

const stats: Stat[] = [
  {
    label: "Total Balance",
    amount: "₹84,250",
    icon: Wallet,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-700 dark:text-emerald-400",
    trendIcon: TrendingUp,
    trend: "Steady growth",
    trendColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    label: "Total Income",
    amount: "₹1,24,500",
    icon: ArrowDown,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-700 dark:text-blue-400",
    trendIcon: TrendingUp,
    trend: "+12% vs last month",
    trendColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    label: "Total Expenses",
    amount: "₹40,250",
    icon: ArrowUp,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-700 dark:text-red-400",
    trendIcon: TrendingDown,
    trend: "-5% vs last month",
    trendColor: "text-red-700 dark:text-red-400",
  },
  {
    label: "Savings",
    amount: "₹44,000",
    icon: PiggyBank,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-700 dark:text-violet-400",
    trendIcon: HandCoins,
    trend: "35% savings rate",
    trendColor: "text-zinc-600 dark:text-zinc-400",
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trendIcon;

        return (
          <div
            key={stat.label}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/50 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800/70 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="text-md font-hanken font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </span>

              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${stat.iconBg}`}
              >
                <Icon size={20} strokeWidth={2} className={stat.iconColor} />
              </div>
            </div>

            <span className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {stat.amount}
            </span>

            {stat.trend && (
              <div
                className={`mt-4 flex items-center gap-1.5 text-sm font-medium ${stat.trendColor ?? ""}`}
              >
                {TrendIcon && <TrendIcon size={16} />}
                <span>{stat.trend}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
