import DashboardHeader from "../features/dashboard/DashboardHeader";
import Sidebar from "../components/Sidebar";

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
      
      <Sidebar />
      

      <div className="flex flex-col gap-5 px-5 pt-10 h-full w-full">
          <DashboardHeader />
          <Stats />
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-12 py-10">
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
