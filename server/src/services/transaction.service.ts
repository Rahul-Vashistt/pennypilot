import mongoose from "mongoose";
import TransactionModel from "../models/transaction.model.js";

import type {
  CreateTransactionInput,
  Transaction,
} from "../types/transaction.js";
import { AppError } from "../utils/AppError.js";

export async function addTransaction(
  data: CreateTransactionInput,
): Promise<Transaction> {
  const transaction = await TransactionModel.create(data);

  return transaction;
}

export async function getAllTransactions(): Promise<Transaction[]> {
  return TransactionModel.find({}).sort({ createdAt: -1 });
}

export async function deleteTransactionById(id: string) {
  if (!mongoose.isValidObjectId(id)) {
    throw new AppError("Invalid transaction ID", 400);
  }

  const result = await TransactionModel.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    throw new AppError("Transaction not found", 404);
  }
}

export async function deleteTransactionsByIds(ids: string[]) {
  const invalidIds = ids.filter((id) => !mongoose.isValidObjectId(id));

  if (invalidIds.length > 0) {
    throw new AppError("One or more invalid transaction IDs", 400);
  }

  const result = await TransactionModel.deleteMany({
    _id: { $in: ids },
  });

  if (result.deletedCount === 0) {
    throw new AppError("Transactions not found", 404);
  }

  return result.deletedCount;
}
