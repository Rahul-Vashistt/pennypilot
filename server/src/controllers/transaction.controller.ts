import type { Request, Response } from "express";
import {
  addTransaction,
  getAllTransactions,
} from "../services/transaction.service.js";

export async function handleAddTransaction(req: Request, res: Response) {
  const {
    description,
    category,
    paymentMethod,
    transactionType,
    amount,
    transactionDate,
  } = req.body;

  try {
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
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong. Please try again",
    });
  }
}

export async function handleGetAllTransactions(req: Request, res: Response) {
  try {
    const transactions = await getAllTransactions();

    return res.status(200).json({
      allTransactions: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong. Please try again",
    });
  }
}
