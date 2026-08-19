import { ResponsiveContainer, PieChart, Pie, Tooltip, Sector } from "recharts";
import { formatCurrency } from "../../utils/formatText";

interface SpendingCategory {
  category: string;
  amount: number;
  color: string;
}

const spendingCategories: SpendingCategory[] = [
  {
    category: "Food & Dining",
    amount: 16100,
    color: "#f97316",
  },
  {
    category: "Housing",
    amount: 12075,
    color: "#22c55e",
  },
  {
    category: "Shopping",
    amount: 8050,
    color: "#3b82f6",
  },
  {
    category: "Other",
    amount: 4025,
    color: "#71717a",
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      category: string;
      amount: number;
      percentage: number;
      color: string;
    };
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: item.color,
          }}
        />

        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {item.category}
        </span>
      </div>

      <p className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        {formatCurrency(item.amount)}
      </p>

      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        {item.percentage}% of total spending
      </p>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-slate-700">
        <div
          className="h-full rounded-full"
          style={{
            width: `${item.percentage}%`,
            backgroundColor: item.color,
          }}
        />
      </div>
    </div>
  );
}

export default function WhereYourMoneyGoes() {
  const totalSpent = spendingCategories.reduce(
    (total, item) => total + item.amount,
    0,
  );

  const data = spendingCategories.map((item) => ({
    ...item,
    percentage: Math.round((item.amount / totalSpent) * 100),
  }));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200/50 bg-white shadow-xl p-6 sm:p-8 dark:border-slate-800/70 dark:bg-slate-900 mb-5">
      <h2 className="relative z-10 text-zinc-950 dark:text-zinc-50 font-manrope font-semibold text-xl mb-10">
        Where Your Money Goes
      </h2>

      <div className="relative z-10 w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              outerRadius="82%"
              innerRadius="64%"
              paddingAngle={3}
              cornerRadius={6}
              data={data}
              dataKey="amount"
              nameKey="category"
              shape={(props) => (
                <Sector 
                    {...props} 
                    fill={props.payload.color}
                    fillOpacity={props.isActive ? 0 : 1}
                    stroke={props.isActive ? props.payload.color : "none"}
                    strokeWidth={props.isActive ? 2 : 0} 
                />
              )}
            />

            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-zinc-950 text-2xl font-semibold dark:fill-zinc-50"
            >
              {formatCurrency(totalSpent)}
            </text>

            <text
              x="50%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-zinc-500 text-xs font-medium dark:fill-zinc-400"
            >
              Total Spent
            </text>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        {data.map((item) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {formatCurrency(item.amount)}
              </span>

              <span className="w-10 text-right text-sm font-semibold text-zinc-500">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
