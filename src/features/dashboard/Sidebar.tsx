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

export default function Sidebar() {
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-72 bg-green-50 dark:bg-slate-900 border-r border-zinc-200 dark:border-slate-700 flex-col py-8 z-50">
        {/* Logo */}
        <div className="px-8 mb-10 flex items-center gap-3">
          <PlaneTakeoff className="text-emerald-500" size={32} />

          <span className="text-2xl font-bold text-zinc-800 dark:text-white tracking-tight">
            PennyPilot
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 text-zinc-700 dark:text-zinc-300 font-medium">
          {/* Dashboard */}
          <a
            aria-current="page"
            className="flex items-center px-4 py-3 rounded-xl bg-emerald-500 dark:bg-slate-500 transition-all text-emerald-950 dark:text-white"
            href="#"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </a>

          {/* Transactions */}
          <a
            className="flex items-center px-4 py-3 rounded-xl hover:bg-green-100 dark:hover:bg-slate-800 hover:text-zinc-900 dark:hover:text-white transition-all"
            href="#"
          >
            <Receipt className="mr-3 h-5 w-5" />
            Transactions
          </a>

          {/* Budgets */}
          <a
            className="flex items-center px-4 py-3 rounded-xl hover:bg-green-100 dark:hover:bg-slate-800 hover:text-zinc-900 dark:hover:text-white transition-all"
            href="#"
          >
            <Wallet className="mr-3 h-5 w-5" />
            Budgets
          </a>

          {/* Analytics */}
          <a
            className="flex items-center px-4 py-3 rounded-xl hover:bg-green-100 dark:hover:bg-slate-800 hover:text-zinc-900 dark:hover:text-white transition-all"
            href="#"
          >
            <ChartNoAxesCombined className="mr-3 h-5 w-5" />
            Analytics
          </a>

          {/* Divider */}
          <div className="h-px bg-zinc-200 dark:bg-slate-700 my-4 mx-4"></div>

          {/* Settings */}
          <a
            className="flex items-center px-4 py-3 rounded-xl hover:bg-green-100 dark:hover:bg-slate-800 hover:text-zinc-900 dark:hover:text-white transition-all"
            href="#"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </a>
        </nav>

        {/* User Profile */}
        <div className="px-4 mt-auto">
          <div className="flex items-center p-3 rounded-xl bg-green-100/50 dark:bg-slate-800/50 hover:bg-green-100 dark:hover:bg-slate-800 cursor-pointer transition-colors group">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <User className="text-white" size={20} />
            </div>

            {/* User Details */}
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-zinc-800 dark:text-white truncate">
                Rahul
              </p>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                rahul@example.com
              </p>
            </div>

            {/* Dropdown */}
            <ChevronDown
              className="ml-auto text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
              size={20}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
