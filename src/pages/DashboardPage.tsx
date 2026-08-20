import Header from "../components/Header";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import Sidebar from "../features/dashboard/Sidebar";

import { Plus } from "lucide-react";
import { SpendingOverview } from "../features/dashboard/SpendingOverview";
import RecentTransactions from "../features/dashboard/RecentTransactions";
import { Stats } from "../features/dashboard/Stats";
import BudgetOverview from "../features/dashboard/BudgetOverview";
import SpendingBreakdown from "../features/dashboard/SpendingBreakdown";
import SmartInsight from "../features/dashboard/SmartInsight";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-green-50 dark:bg-slate-950">
      <button
        className="
                fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10
                group
                h-16 w-16 hover:w-56
                rounded-full
                bg-emerald-700
                text-slate-200 hover:text-white
                font-bold font-hanken
                flex items-center
                overflow-hidden
                shadow-xl hover:shadow-2xl
                cursor-pointer
                transition-all duration-300
                active:scale-95
            "
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center">
          <Plus
            size={28}
            strokeWidth={2.5}
            className="
                    transition-transform duration-300 delay-75  
                    group-hover:-rotate-90
                "
          />
        </span>

        <span
          className="
                whitespace-nowrap
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-200
                delay-75
                uppercase tracking-wider
                -translate-x-2.5
                "
        >
          Add Transaction
        </span>
      </button>
      
      <Sidebar />
      

      <div className="flex flex-col gap-5 xl:pl-82 px-5 pt-10 h-full w-full">
          <DashboardHeader />
          <Stats />
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-12 py-10 xl:pl-72">
        <section className="px-5 h-full w-full flex flex-col gap-4 2xl:col-span-9">
          <SpendingOverview />
          <RecentTransactions/>
        </section>
        <section className="2xl:col-span-3 px-5">
          <SmartInsight />
          <SpendingBreakdown />
          <BudgetOverview />
        </section>
      </div>
    </main>
  );
}
