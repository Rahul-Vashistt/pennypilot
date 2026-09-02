import MobileHeader from "./MobileHeader";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

export default function AppLayout() {
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <AddTransaction
        isOpen={isAddingTransaction}
        onClose={() => setIsAddingTransaction(false)}
        onOpen={() => setIsAddingTransaction(true)}
      />

      <Sidebar />

      <MobileHeader />

      <MobileNav onAddTransaction={() => setIsAddingTransaction(true)} />

      <main className="min-h-screen pt-16 pb-24 xl:ml-72 xl:pt-0 xl:pb-0">
        <Outlet />
      </main>
    </div>
  );
}
