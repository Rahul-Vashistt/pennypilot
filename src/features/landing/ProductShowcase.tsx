export default function ProductShowcase() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="group mx-auto max-w-6xl [perspective:2000px]">
        <div
          className="
            overflow-hidden rounded-2xl border border-slate-200
            bg-slate-100/60 shadow-2xl
            transition-transform duration-700 ease-out
            transform-3d
            group-hover:transform-[rotateX(4deg)_rotateY(-5deg)_skewX(-1deg)_translateY(-4px)]
            dark:border-slate-800 dark:bg-slate-900/50
          "
        >

          {/* Browser Header */}
          <div className="flex h-12 items-center px-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="flex flex-1 justify-center px-4">
              <div className="max-w-xs truncate rounded-full bg-white px-6 py-1 text-sm text-slate-500 shadow dark:bg-slate-800 dark:text-slate-300">
                app.pennypilot.com
              </div>
            </div>
          </div>

          {/* App */}
          <div className="bg-slate-50/90 relative  dark:bg-slate-950">

            {/* Balance */}
            <div className="flex items-center gap-4 p-5 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                <span className="material-symbols-rounded text-white">
                  account_balance_wallet
                </span>
              </div>

              <div>
                <p className="font-hanken text-md font-semibold text-slate-500 dark:text-slate-400">
                  Total Balance
                </p>

                <h1 className="font-manrope text-3xl font-bold sm:text-4xl dark:text-white">
                  ₹1,24,500
                </h1>
              </div>
            </div>

            {/* Income & Expense */}
            <div className="grid grid-cols-1 gap-4 px-5 pb-5 sm:grid-cols-2 sm:px-7">

              <div className="rounded-2xl bg-red-50 border border-red-700/10 p-5 dark:bg-red-500/10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="material-symbols-rounded text-red-600 dark:text-red-500">
                    trending_down
                  </span>

                  <span className="font-hanken font-medium text-red-600 dark:text-red-500">
                    Expenses
                  </span>
                </div>

                <h2 className="font-manrope text-3xl font-bold sm:text-4xl dark:text-white">
                  ₹42,300
                </h2>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-700/10 p-5 dark:bg-emerald-500/10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="material-symbols-rounded text-emerald-600 dark:text-emerald-500">
                    trending_up
                  </span>

                  <span className="font-hanken font-medium text-emerald-600 dark:text-emerald-500">
                    Income
                  </span>
                </div>

                <h2 className="font-manrope text-3xl font-bold sm:text-4xl dark:text-white">
                  ₹85,000
                </h2>
              </div>

            </div>

            {/* Spending Overview */}
              <div className="mx-4 mt-6 rounded-2xl bg-slate-100 border border-slate-200 dark:border-transparent p-5 dark:bg-slate-900">
                  <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-hanken font-semibold text-slate-700 dark:text-slate-300">
                          Spending Overview
                      </h3>

                      <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                          This Month
                      </span>
                  </div>

                  {/* Chart */}
                  <div className="relative h-52 w-full">
                      <svg
                          className="absolute inset-0 h-full w-full"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                      >
                          {/* Grid */}
                          <line
                              x1="0"
                              y1="25"
                              x2="100"
                              y2="25"
                              stroke="currentColor"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              className="text-slate-300 dark:text-slate-700"
                          />

                          <line
                              x1="0"
                              y1="50"
                              x2="100"
                              y2="50"
                              stroke="currentColor"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              className="text-slate-300 dark:text-slate-700"
                          />

                          <line
                              x1="0"
                              y1="75"
                              x2="100"
                              y2="75"
                              stroke="currentColor"
                              strokeWidth="0.5"
                              strokeDasharray="2,2"
                              className="text-slate-300 dark:text-slate-700"
                          />

                          {/* Area */}
                          <path
                              d="M0,100 L0,60 Q20,30 40,50 T80,20 L100,40 L100,100 Z"
                              fill="url(#chart-gradient)"
                          />

                          {/* Line */}
                          <path
                              d="M0,60 Q20,30 40,50 T80,20 L100,40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              className="text-emerald-600 dark:text-emerald-500"
                          />

                          <defs>
                              <linearGradient
                              id="chart-gradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                              >
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                              </linearGradient>
                          </defs>
                      </svg>

                      {/* Data points */}
                      <div className="absolute left-[40%] top-[48%] h-3 w-3 rounded-full border-2 border-emerald-600 bg-white shadow dark:bg-slate-900" />

                      <div className="absolute left-[80%] top-[18%] h-3 w-3 rounded-full border-2 border-emerald-600 bg-white shadow dark:bg-slate-900" />

                      {/* Tooltip */}
                      <div className="absolute left-[72%] top-[4%] rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg dark:bg-white dark:text-slate-900">
                          <span className="font-manrope font-semibold">₹1,240</span>
                          <span className="ml-1 text-emerald-400 dark:text-emerald-600">
                              Mar 15
                          </span>
                      </div>
                  </div>
              </div>

            {/* Recent Activity */}
            <div className="px-5 pb-6 pt-7 sm:px-7">

              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-hanken text-lg font-semibold dark:text-white">
                  Recent Activity
                </h2>

                <button className="font-hanken text-sm font-medium text-emerald-600 transition hover:text-emerald-500">
                  View All
                </button>
              </div>

              <div className="space-y-3 dark:text-white">

                {/* Grocery */}
                <div className="flex items-center justify-between rounded-2xl p-4 transition hover:bg-slate-100 dark:hover:bg-slate-900">

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15">
                      <span className="material-symbols-rounded text-blue-600">
                        shopping_cart
                      </span>
                    </div>

                    <div>
                      <p className="font-hanken font-semibold">
                        Grocery Store
                      </p>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Today, 2:45 PM
                      </p>
                    </div>

                  </div>

                  <span className="font-manrope text-base font-semibold sm:text-lg">
                    -₹3,240
                  </span>

                </div>

                {/* Netflix */}
                <div className="flex items-center justify-between rounded-2xl p-4 transition hover:bg-slate-100 dark:hover:bg-slate-900">

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15">
                      <span className="material-symbols-rounded text-red-500">
                        live_tv
                      </span>
                    </div>

                    <div>
                      <p className="font-hanken font-semibold">
                        Netflix
                      </p>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Yesterday, 9:12 PM
                      </p>
                    </div>

                  </div>

                  <span className="font-manrope text-base font-semibold sm:text-lg">
                    -₹799
                  </span>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}