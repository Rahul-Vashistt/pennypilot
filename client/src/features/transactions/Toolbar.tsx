import { Search, ChevronDown } from "lucide-react";

export default function Toolbar() {
    return (
        <section className="relative z-20 mt-6 flex flex-col justify-between gap-4 px-4 lg:flex-row lg:items-center lg:px-8">
            {/* Search */}
            <div className="relative flex w-full items-center rounded-full bg-white px-4 py-3 shadow-sm transition-shadow focus-within:shadow-md dark:bg-zinc-900 lg:w-120">
                <Search
                    size={20}
                    strokeWidth={2}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 shrink-0 text-zinc-500 dark:text-zinc-400"
                />

                <input
                    type="text"
                    placeholder="Search transactions..."
                    className="w-full bg-transparent pl-7 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-400"
                />
            </div>

            {/* Filters */}
            <div className="hide-scrollbar flex items-center gap-2 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
                {/* Transaction Type */}
                <div className="mr-2 flex shrink-0 rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
                    <button className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-zinc-950 shadow-sm transition-colors dark:bg-zinc-700 dark:text-zinc-100">
                        All
                    </button>

                    <button className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                        Income
                    </button>

                    <button className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                        Expense
                    </button>
                </div>

                {/* Category */}
                <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
                    <span>Category</span>

                    <ChevronDown
                        size={16}
                        className="text-zinc-500 dark:text-zinc-400"
                    />
                </button>

                {/* Date */}
                <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
                    <span>This Month</span>

                    <ChevronDown
                        size={16}
                        className="text-zinc-500 dark:text-zinc-400"
                    />
                </button>
            </div>
        </section>
    );
}