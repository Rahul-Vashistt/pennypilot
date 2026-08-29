import { PlaneTakeoff, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  return (
    <header className="fixed top-0 z-40 flex justify-between h-16 w-full items-center border-b border-zinc-200 bg-green-50/90 px-6 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80 xl:hidden">
      <div className="flex items-center gap-2">
        <PlaneTakeoff className="text-emerald-500" size={26} />

        <span className="text-lg font-bold tracking-tight text-zinc-800 dark:text-white">
          PennyPilot
        </span>
      </div>

      <NavLink
        to={"/settings"}
        className={({ isActive }) => 
            isActive ? "text-emerald-500" : "text-zinc-500 dark:text-zinc-400"
        }
      >
        <Settings size={22} />
      </NavLink>
    </header>
  );
}