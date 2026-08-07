export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            How PennyPilot Works
          </h2>

          <p className="mt-4 font-hanken text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">
            Three simple steps to take control of your finances.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector */}
          <div className="absolute left-20 right-20 top-8 hidden h-px bg-slate-300 dark:bg-slate-700 md:block" />

          {/* Mobile connector */}
          <div className="absolute bottom-10 left-8 top-8 w-px bg-slate-300 dark:bg-slate-700 md:hidden" />

          <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-10">
            {/* Step 1 */}
            <div className="relative z-10 flex items-start gap-5 md:w-1/3 md:flex-col md:items-center md:text-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-xl font-bold text-emerald-700 shadow-md transition-all duration-300 group-hover:border-emerald-500 dark:border-black dark:bg-black dark:text-emerald-500">
                1
              </div>

              <div>
                <h3 className="font-manrope text-xl font-semibold text-slate-900 dark:text-white">
                  Sign Up
                </h3>

                <p className="mt-2 font-hanken text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  Create your account and access your personal dashboard.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex items-start gap-5 md:w-1/3 md:flex-col md:items-center md:text-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-xl font-bold text-emerald-700 shadow-md transition-all duration-300 group-hover:border-emerald-500 dark:border-black dark:bg-black dark:text-emerald-500">
                2
              </div>

              <div>
                <h3 className="font-manrope text-xl font-semibold text-slate-900 dark:text-white">
                  Track Finances
                </h3>

                <p className="mt-2 font-hanken text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  Add income, expenses, and budgets in just a few clicks.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex items-start gap-5 md:w-1/3 md:flex-col md:items-center md:text-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-xl font-bold text-emerald-700 shadow-md transition-all duration-300 group-hover:border-emerald-500 dark:border-black dark:bg-black dark:text-emerald-500">
                3
              </div>

              <div>
                <h3 className="font-manrope text-xl font-semibold text-slate-900 dark:text-white">
                  Gain Insights
                </h3>

                <p className="mt-2 font-hanken text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  View charts and reports to understand your spending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}