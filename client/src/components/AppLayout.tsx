import MobileHeader from "./MobileHeader";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Sidebar />

      <MobileHeader />

      <MobileNav />

      <main className="min-h-screen pt-16 pb-24 xl:ml-72 xl:pt-0 xl:pb-0">
        <Outlet />
      </main>
    </div>
  );
}
