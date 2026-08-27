export const categories = {
  Income: [
    "Salary",
    "Freelance",
    "Business",
    "Investments",
    "Gifts",
    "Other Income",
  ],

  Expense: [
    "Food & Dining",
    "Entertainment",
    "Housing",
    "Utilities & Bills",
    "Transport",
    "Shopping",
    "Health & Medical",
    "Education",
    "Travel",
    "Gifts & Donations",
    "Personal Care",
    "Savings & Investments",
    "Debt & EMIs",
    "Other",
  ],
} as const;

export const PAYMENT_METHODS = [
  "Cash",
  "Bank Account",
  "Credit Card",
  "Debit Card",
  "UPI / Digital Wallet",
  "Net Banking",
  "Other",
] as const;

export const TRANSACTION_TYPES = ["Income", "Expense"] as const;

export type TransactionType = (typeof TRANSACTION_TYPES)[number];

export type IncomeCategory = (typeof categories.Income)[number];

export type ExpenseCategory = (typeof categories.Expense)[number];

export type Category = IncomeCategory | ExpenseCategory;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export interface Transaction {
  description: string;
  category: Category;
  paymentMethod: PaymentMethod;
  transactionType: TransactionType;
  amount: number;
}

export interface CreateTransactionInput {
  description: string;
  category: Category;
  paymentMethod: PaymentMethod;
  transactionType: TransactionType;
  amount: number;
}