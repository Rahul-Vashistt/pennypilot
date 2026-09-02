import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Plus,
  ChartNoAxesCombined,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    to: "/transactions",
    icon: Receipt,
  },
  {
    name: "Budgets",
    to: "/budgets",
    icon: Wallet,
  },
  {
    name: "Analytics",
    to: "/settings",
    icon: ChartNoAxesCombined,
  },
];

export default function MobileNav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-t border-zinc-200 bg-green-50/90 px-6 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl dark:border-slate-700 dark:bg-slate-900/90 xl:hidden">
      {/* First two navigation items */}
      <div className="flex flex-1 items-center justify-around">
        {navigation.slice(0, 2).map(({ name, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex flex-col items-center gap-1 transition-colors",
                isActive
                  ? "text-emerald-500"
                  : "text-zinc-500 dark:text-zinc-400",
              ].join(" ")
            }
          >
            <Icon size={22} />

            <span className="text-[10px] font-medium">
              {name}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Center Add Transaction Button */}
      <div className="flex w-20 shrink-0 items-center justify-center">
        <button
          type="button"
          onClick={() => navigate("/transactions/new")}
          className="-mt-15 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg transition-transform active:scale-95"
          aria-label="Add transaction"
        >
          <Plus size={28} />
        </button>
      </div>

      {/* Last two navigation items */}
      <div className="flex flex-1 items-center justify-around">
        {navigation.slice(2).map(({ name, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex flex-col items-center gap-1 transition-colors",
                isActive
                  ? "text-emerald-500"
                  : "text-zinc-500 dark:text-zinc-400",
              ].join(" ")
            }
          >
            <Icon size={22} />

            <span className="text-[10px] font-medium">
              {name}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}