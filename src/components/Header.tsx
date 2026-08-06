import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header
            className="fixed top-0 z-50 w-full
                       border-b border-slate-200 dark:border-slate-700
                       bg-slate-50/50 dark:bg-slate-900/60
                       shadow-sm backdrop-blur-xl
                       hover:bg-slate-200/50 dark:hover:bg-slate-800/60
                       transition-all duration-300"
        >
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Application Logo"
                        className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                    />

                    <h3
                        className="text-xl font-semibold leading-none tracking-tight
                                   text-slate-900 dark:text-slate-100
                                   sm:text-2xl lg:text-3xl"
                    >
                        PennyPilot
                    </h3>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="group relative flex h-9 w-16 cursor-pointer items-center
                                   rounded-full
                                   border border-slate-300 dark:border-slate-600
                                   bg-slate-100 dark:bg-slate-800
                                   transition-all duration-300
                                   hover:border-emerald-500
                                   hover:bg-emerald-50 dark:hover:bg-emerald-800/30
                                   focus-visible:outline-none
                                   focus-visible:ring-2
                                   focus-visible:ring-emerald-500
                                   focus-visible:ring-offset-2
                                   dark:focus-visible:ring-offset-slate-900"
                    >
                        <span
                            className={`absolute flex h-7 w-7 items-center justify-center
                                        rounded-full
                                        bg-white dark:bg-slate-700
                                        shadow-md
                                        transition-all duration-300
                                        group-hover:shadow-lg
                                        ${
                                            isDark
                                                ? "translate-x-1"
                                                : "translate-x-8"
                                        }`}
                        >
                            {isDark ? (
                                <Moon
                                    size={15}
                                    className="text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                />
                            ) : (
                                <Sun
                                    size={15}
                                    className="text-amber-500 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                                />
                            )}
                        </span>
                    </button>

                    {/* CTA */}
                    <Link
                        to={"/"}
                        className="hidden cursor-pointer rounded-xl
                                   bg-emerald-700 dark:bg-emerald-600
                                   px-3 py-2 text-sm font-semibold text-white
                                   shadow-lg transition-all duration-200
                                   hover:-translate-y-0.5
                                   hover:shadow-emerald-700/40 dark:hover:shadow-emerald-500/40
                                   active:scale-95
                                   md:block
                                   md:px-4 md:py-2.5 md:text-base
                                   lg:px-5 lg:py-3
                                   focus-visible:outline-none
                                   focus-visible:ring-2
                                   focus-visible:ring-emerald-500
                                   focus-visible:ring-offset-2
                                   dark:focus-visible:ring-offset-slate-900"
                    >
                        <span>Get Started</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}