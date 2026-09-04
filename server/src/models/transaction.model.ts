import mongoose, { Schema } from "mongoose";
import {
  categories,
  PAYMENT_METHODS,
  TRANSACTION_TYPES,
  type Transaction,
} from "../types/transaction.js";

const transactionSchema = new Schema<Transaction>({
  description: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
    enum: [...categories.Income, ...categories.Expense],
    default: "Other",
  },

  paymentMethod: {
    type: String,
    required: true,
    enum: PAYMENT_METHODS,
    default: "Other",
  },

  transactionType: {
    type: String,
    required: true,
    enum: TRANSACTION_TYPES,
  },

  amount: {
    type: Number,
    required: true,
    min: 0,
  },

  transactionDate: {
    type: String
  }
});

const TransactionModel = mongoose.model<Transaction>(
  "Transaction",
  transactionSchema,
);

export default TransactionModel;