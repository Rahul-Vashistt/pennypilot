import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    return (
        <header
            className="fixed top-0 z-50 w-full border-b border-slate-200
                       bg-slate-50/50 shadow-sm backdrop-blur-xl
                       hover:bg-slate-100/50 transition-all duration-300"
        >
            <div className="mx-auto max-w-[1600px] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Application Logo"
                        className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                    />

                    <h3 className="text-xl font-semibold leading-none tracking-tight sm:text-2xl lg:text-3xl">
                        PennyPilot
                    </h3>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        aria-label="Toggle theme"
                        className="group relative flex h-9 w-16 cursor-pointer items-center
                                   rounded-full border border-slate-300 bg-slate-100
                                   transition-all duration-300
                                   hover:border-emerald-500 hover:bg-emerald-50
                                   focus-visible:outline-none
                                   focus-visible:ring-2
                                   focus-visible:ring-emerald-500
                                   focus-visible:ring-offset-2"
                    >
                        <span
                            className={`absolute flex h-7 w-7 items-center justify-center
                                        rounded-full bg-white shadow-md
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
                                    className="text-emerald-700 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
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
                    <button
                        className="hidden md:block
                                   rounded-xl bg-emerald-700
                                   px-3 py-2 text-sm font-semibold text-white
                                   shadow-lg transition-all duration-200
                                   hover:-translate-y-0.5
                                   hover:shadow-emerald-700/40
                                   active:scale-97
                                   md:px-4 md:py-2.5 md:text-base
                                   lg:px-5 lg:py-3
                                   focus-visible:outline-none
                                   focus-visible:ring-2
                                   focus-visible:ring-emerald-500
                                   focus-visible:ring-offset-2
                                   cursor-pointer"
                    >
                        <span>Get Started</span>
                    </button>
                </div>
            </div>
        </header>
    );
}