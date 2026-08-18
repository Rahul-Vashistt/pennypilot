import { Bell, CalendarDays } from "lucide-react";

export default function DashboardHeader() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <header className="flex flex-col gap-6 rounded-2xl border border-zinc-200/60 bg-green-50/10 px-6 py-5 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-green-950/10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Greeting */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight text-green-950 dark:text-green-50 sm:text-4xl lg:text-5xl">
                    Good morning,
                    <span className="ml-2 font-bold text-emerald-700 dark:text-emerald-500">
                        Rahul.
                    </span>
                </h1>

                <p className="max-w-xl text-base font-medium text-green-950/70 dark:text-green-50/70 sm:text-lg">
                    Here's what's happening with your money today.
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                {/* Date */}
                <div className="flex items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-white/70 px-4 py-2.5 text-sm font-semibold text-green-950 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-green-50">
                    <CalendarDays
                        size={19}
                        strokeWidth={2}
                        className="text-emerald-700 dark:text-emerald-500"
                    />

                    <span className="cursor-default">{currentDate}</span>
                </div>

                {/* Notifications */}
                <button
                    type="button"
                    aria-label="View notifications"
                    className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200/60 bg-white/70 text-green-950 shadow-sm transition-all hover:bg-white hover:shadow-md active:scale-95 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-green-50 dark:hover:bg-slate-900"
                >
                    <Bell size={19} strokeWidth={2} />

                    {/* Notification indicator */}
                    <span
                        aria-hidden="true"
                        className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900"
                    />
                </button>
            </div>
        </header>
    );
}