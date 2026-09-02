import TransactionModel from "../models/transaction.model.js";
import type { CreateTransactionInput, Transaction } from "../types/transaction.js";

export async function addTransaction(data: CreateTransactionInput) {
  await TransactionModel.create(data);
}

export async function getAllTransactions(): Promise<Transaction[]> {
  return TransactionModel.find({});
}