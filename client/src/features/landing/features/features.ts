export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Track Every Expense",
    description:
      "Log expenses in seconds, organize them into categories, and keep your spending history accurate and searchable.",
    icon: "receipt_long",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 2,
    title: "Monthly Budgets",
    description:
      "Create spending limits for every category and instantly see how much budget you have left before overspending.",
    icon: "account_balance_wallet",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-700 dark:text-blue-400",
  },
  {
    id: 3,
    title: "Income Management",
    description:
      "Record multiple income sources and understand exactly how money flows in and out each month.",
    icon: "payments",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 4,
    title: "Interactive Dashboard",
    description:
      "Get a complete overview of balances, recent transactions, budgets, and financial activity the moment you sign in.",
    icon: "dashboard",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-700 dark:text-blue-400",
  },
  {
    id: 5,
    title: "Charts & Analytics",
    description:
      "Beautiful visual reports help you discover spending habits, compare monthly trends, and make smarter financial decisions.",
    icon: "monitoring",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 6,
    title: "Secure Personal Account",
    description:
      "Your financial information stays private with secure authentication and encrypted storage built into every account.",
    icon: "lock",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    iconColor: "text-slate-700 dark:text-slate-300",
  },
];