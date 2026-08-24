import { Moon, Sun, UserRound } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/useAuth";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const initials =
    user?.fullName
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "";

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-slate-200/80 dark:border-slate-700/80
        bg-slate-50/70 dark:bg-slate-900/70
        shadow-sm backdrop-blur-xl
        transition-all duration-300
      "
    >
      <div
        className="
          mx-auto flex h-16 max-w-[1600px]
          items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex items-center gap-2
            transition-opacity duration-200
            hover:opacity-80
          "
        >
          <img
            src="/logo.png"
            alt="PennyPilot Logo"
            className="h-11 w-auto object-contain sm:h-12 lg:h-14"
          />

          <h3
            className="
              text-xl font-semibold leading-none tracking-tight
              text-slate-900 dark:text-slate-100
              sm:text-2xl
            "
          >
            PennyPilot
          </h3>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              group relative flex h-9 w-16 cursor-pointer
              items-center rounded-full
              border border-slate-300 dark:border-slate-600
              bg-slate-100 dark:bg-slate-800
              transition-all duration-300
              hover:border-emerald-500
              hover:bg-emerald-50 dark:hover:bg-emerald-800/30
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500
              focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-slate-900
            "
          >
            <span
              className={`
                absolute flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-white dark:bg-slate-700
                shadow-md
                transition-all duration-300
                group-hover:shadow-lg
                ${isDark ? "translate-x-1" : "translate-x-8"}
              `}
            >
              {isDark ? (
                <Moon
                  size={15}
                  className="
                    text-slate-100
                    transition-transform duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                />
              ) : (
                <Sun
                  size={15}
                  className="
                    text-amber-500
                    transition-transform duration-300
                    group-hover:rotate-45
                    group-hover:scale-110
                  "
                />
              )}
            </span>
          </button>

          {/* Desktop navigation */}
          <div>
            {!isAuthenticated ? (
              <div className="hidden md:flex gap-2 items-center">
                {/* Sign In */}
                <Link
                  to="/sign-in"
                  className="
                    rounded-xl
                    px-4 py-2.5
                    text-sm font-semibold
                    text-slate-700 dark:text-slate-200
                    transition-all duration-200
                    hover:bg-slate-200/70
                    hover:text-emerald-700
                    dark:hover:bg-slate-800
                    dark:hover:text-emerald-400
                    active:scale-95
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-500
                  "
                >
                  Sign in
                </Link>

                {/* Get Started */}
                <Link
                  to="/sign-up"
                  className="
                    rounded-xl
                    bg-emerald-700
                    px-4 py-2.5
                    text-sm font-semibold text-white
                    shadow-lg
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-emerald-800
                    hover:shadow-emerald-700/40
                    dark:hover:bg-emerald-600
                    dark:hover:shadow-emerald-500/40
                    active:scale-95
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-500
                  "
                >
                  Get Started
                </Link>
              </div>
            ) : (
              /* Logged-in profile */
              <Link
                to="/dashboard"
                title={user?.fullName || "Dashboard"}
                aria-label="Open dashboard"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-emerald-700
                  text-sm font-semibold text-white
                  shadow-md
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-emerald-800
                  hover:shadow-lg
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                  focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-slate-900
                "
              >
                {initials || <UserRound size={18} />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}