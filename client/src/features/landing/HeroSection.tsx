import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden sm:translate-y-0 -translate-y-10">
      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mt-35 flex flex-col items-center justify-center gap-12">
          {/* Headline */}
          <div className="flex flex-col items-center md:gap-4 gap-2 font-bold dark:text-white lg:text-6xl md:text-5xl text-4xl">
            <h1>Your Money.</h1>
            <h1 className="bg-linear-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-blue-500">
              Under Control.
            </h1>
            <h1>Every Day.</h1>
          </div>

          {/* Hero description */}
          <p className="max-w-[95%] md:max-w-[72%] text-center font-sans text-lg md:text-2xl leading-normal text-black/70 dark:text-white/70">
            Experience precise clarity for your personal finances. PennyPilot
            is the modern, transparent, and effortlessly simple way to track
            spending and build wealth.
          </p>

          {/* Primary actions */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-5 ">
            <Link
              to="/sign-up"
              className="group flex justify-center cursor-pointer items-center gap-2 rounded-full bg-emerald-700 px-8 py-5 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-emerald-700/40 active:scale-96 dark:hover:shadow-emerald-700/40"
            >
              <span className="text-lg font-semibold">Get Started</span>
              <span className="material-symbols-rounded transition-transform duration-200 group-hover:translate-x-2">
                arrow_forward
              </span>
            </Link>

            <a
              href="https://github.com/Rahul-Vashistt/pennypilot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/70 px-8 py-5 text-slate-900 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl active:scale-95 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800/50"
            >
              {/* GitHub logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current transition-transform duration-200 group-hover:rotate-6"
              >
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.69.08-.69 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.73 0-1.27.45-2.31 1.2-3.13-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.21-1.51 3.19-1.2 3.19-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.86 1.2 3.13 0 4.45-2.7 5.44-5.27 5.72.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
              </svg>

              <span className="text-lg font-semibold">
                View on GitHub
              </span>
            </a>
          </div>

          {/* Feature highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-emerald-600 dark:text-emerald-500">
                analytics
              </span>
              <span className="font-medium">Analytics</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-emerald-600 dark:text-emerald-500">
                account_balance_wallet
              </span>
              <span className="font-medium">Budgets</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-blue-600 dark:text-blue-500">
                monitoring
              </span>
              <span className="font-medium">Insights</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-blue-600 dark:text-blue-500">
                lock
              </span>
              <span className="font-medium">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}