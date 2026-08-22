import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "../../utils/formatText";

type Period = "Week" | "Month" | "Year";

interface ChartData {
  label: string;
  income: number;
  expenses: number;
}

const chartData: Record<Period, ChartData[]> = {
  Week: [
    { label: "Mon", income: 3200, expenses: 1800 },
    { label: "Tue", income: 4100, expenses: 2200 },
    { label: "Wed", income: 2800, expenses: 1900 },
    { label: "Thu", income: 5200, expenses: 3100 },
    { label: "Fri", income: 4600, expenses: 2500 },
    { label: "Sat", income: 3800, expenses: 2900 },
    { label: "Sun", income: 6100, expenses: 3400 },
  ],

  Month: [
    { label: "Week 1", income: 18200, expenses: 9200 },
    { label: "Week 2", income: 24100, expenses: 13400 },
    { label: "Week 3", income: 19800, expenses: 10800 },
    { label: "Week 4", income: 32400, expenses: 16850 },
  ],

  Year: [
    { label: "Jan", income: 82000, expenses: 42000 },
    { label: "Feb", income: 91000, expenses: 48000 },
    { label: "Mar", income: 76000, expenses: 39000 },
    { label: "Apr", income: 108000, expenses: 52000 },
    { label: "May", income: 116000, expenses: 61000 },
    { label: "Jun", income: 102000, expenses: 55000 },
    { label: "Jul", income: 124500, expenses: 40250 },
    { label: "Aug", income: 118000, expenses: 47000 },
    { label: "Sep", income: 132000, expenses: 59000 },
    { label: "Oct", income: 126000, expenses: 51000 },
    { label: "Nov", income: 141000, expenses: 63000 },
    { label: "Dec", income: 154000, expenses: 68000 },
  ],
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </p>

      {payload.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between gap-8 text-sm"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />

            <span className="text-zinc-600 dark:text-zinc-300">
              {item.name}
            </span>
          </div>

          <span className="font-semibold text-zinc-950 dark:text-zinc-50">
            {formatCurrency(item.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

export function SpendingOverview() {
  const [period, setPeriod] = useState<Period>("Month");

  const data = chartData[period];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-xl sm:p-8 dark:border-slate-800/70 dark:bg-slate-900">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-hanken text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Spending Overview
          </h2>

          <p className="mt-1 font-hanken text-sm text-zinc-500 dark:text-zinc-400">
            Income vs Expenses for {period === "Week"
              ? "Current Week"
              : period === "Month"
                ? "Current Month"
                : "Current Year"}
          </p>
        </div>

        {/* Period selector */}
        <div className="flex w-fit rounded-xl bg-zinc-100 p-1 dark:bg-slate-800">
          {(["Week", "Month", "Year"] as Period[]).map((item) => (
            <button
              key={item}
              onClick={() => setPeriod(item)}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                period === item
                  ? "bg-white text-zinc-950 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative z-10 h-40 lg:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%" >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="incomeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient
                id="expenseGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ef4444"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#ef4444"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              className="stroke-zinc-200 dark:stroke-slate-700"
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
              }}
              className="fill-zinc-500 dark:fill-zinc-400"
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={60}
              tick={{
                fontSize: 11,
              }}
              className="fill-zinc-500 dark:fill-zinc-400"
              tickFormatter={(value) => {
                if (value >= 100000) {
                  return `₹${(value / 1000).toFixed(0)}k`;
                }

                if (value >= 1000) {
                  return `₹${(value / 1000).toFixed(0)}k`;
                }

                return `₹${value}`;
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#94a3b8",
                strokeDasharray: "4 4",
              }}
            />

            {/* Income */}
            <Area
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#incomeGradient)"
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: "#fff",
              }}
              animationDuration={800}
            />

            {/* Expenses */}
            <Area
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#expenseGradient)"
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: "#fff",
              }}
              animationDuration={800}
              animationBegin={100}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="relative z-10 mt-5 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          <span className="font-hanken text-sm text-zinc-600 dark:text-zinc-400">
            Income
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="font-hanken text-sm text-zinc-600 dark:text-zinc-400">
            Expenses
          </span>
        </div>
      </div>
    </div>
  );
}