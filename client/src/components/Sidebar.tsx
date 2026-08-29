import {
  PlaneTakeoff,
  LayoutDashboard,
  Receipt,
  Wallet,
  ChartNoAxesCombined,
  Settings,
  User,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
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
    to: "/analytics",
    icon: ChartNoAxesCombined,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-full w-72 flex-col border-r border-zinc-200 bg-green-50 py-8 dark:border-slate-700 dark:bg-slate-900 xl:flex">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-8">
        <PlaneTakeoff className="text-emerald-500" size={32} />

        <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-white">
          PennyPilot
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 font-medium text-zinc-700 dark:text-zinc-300">
        {navigation.map(({ name, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex items-center rounded-xl px-4 py-3 transition-all",
                isActive
                  ? "bg-emerald-500 text-emerald-950 shadow-sm dark:bg-emerald-500 dark:text-white"
                  : "hover:bg-green-100 hover:text-zinc-900 dark:hover:bg-slate-800 dark:hover:text-white",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`mr-3 h-5 w-5 ${
                    isActive
                      ? "text-emerald-950 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                />

                {name}
              </>
            )}
          </NavLink>
        ))}

        {/* Divider */}
        <div className="mx-4 my-4 h-px bg-zinc-200 dark:bg-slate-700" />

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            [
              "flex items-center rounded-xl px-4 py-3 transition-all",
              isActive
                ? "bg-emerald-500 text-emerald-950 shadow-sm dark:bg-emerald-500 dark:text-white"
                : "hover:bg-green-100 hover:text-zinc-900 dark:hover:bg-slate-800 dark:hover:text-white",
            ].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              <Settings
                className={`mr-3 h-5 w-5 ${
                  isActive
                    ? "text-emerald-950 dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              />
              Settings
            </>
          )}
        </NavLink>
      </nav>

      {/* User Profile */}
      <div className="mt-auto px-4">
        <div className="group flex cursor-pointer items-center rounded-xl bg-green-100/50 p-3 transition-colors hover:bg-green-100 dark:bg-slate-800/50 dark:hover:bg-slate-800">
          {/* Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <User className="text-white" size={20} />
          </div>

          {/* User Details */}
          <div className="ml-3 overflow-hidden">
            <p className="truncate text-sm font-medium text-zinc-800 dark:text-white">
              Rahul
            </p>

            <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
              rahul@example.com
            </p>
          </div>

          {/* Dropdown */}
          <ChevronDown
            className="ml-auto text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white"
            size={20}
          />
        </div>
      </div>
    </aside>
  );
}
