import type { Request, Response } from "express";
import {
  addTransaction,
  deleteTransactionById,
  deleteTransactionsByIds,
  getAllTransactions,
} from "../services/transaction.service.js";
import { AppError } from "../utils/AppError.js";

export async function handleAddTransaction(req: Request, res: Response) {
  const {
    description,
    category,
    paymentMethod,
    transactionType,
    amount,
    transactionDate,
  } = req.body;

  if (!description) {
    throw new AppError("Description cannot be blank", 400);
  }

  if (!category) {
    throw new AppError("Category cannot be blank", 400);
  }

  if (!paymentMethod) {
    throw new AppError("Payment method cannot be blank", 400);
  }

  if (!transactionType) {
    throw new AppError("Transaction type cannot be blank", 400);
  }

  if (amount === undefined || amount === null) {
    throw new AppError("Amount cannot be blank", 400);
  }

  if (!transactionDate) {
    throw new AppError("Transaction date cannot be blank", 400);
  }

  const transaction = await addTransaction({
    description,
    category,
    paymentMethod,
    transactionType,
    amount,
    transactionDate,
  });

  return res.status(201).json({
    transaction,
  });
}

export async function handleGetAllTransactions(req: Request, res: Response) {
  const transactions = await getAllTransactions();

  return res.status(200).json({
    allTransactions: transactions.reverse(),
  });
}

export async function handleDeleteOneTransaction(req: Request, res: Response) {
  const { transactionId } = req.params;

  if (!transactionId) {
    throw new AppError("Invalid transaction", 400);
  }

  await deleteTransactionById(transactionId as string);

  return res.status(204).send();
}

export async function handleDeleteTransactions(req: Request, res: Response) {
  const { ids } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw new AppError("Invalid transactions", 400);
  }

  const deletedCount = await deleteTransactionsByIds(ids);

  return res.status(200).json({
    deletedCount,
  });
}
