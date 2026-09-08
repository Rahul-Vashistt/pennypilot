import express from "express";
import {
  handleAddTransaction,
  handleDeleteOneTransaction,
  handleDeleteTransactions,
  handleGetAllTransactions,
} from "../controllers/transaction.controller.js";

export const transactionRouter = express.Router();

transactionRouter
  .route("/")
  .post(handleAddTransaction)
  .get(handleGetAllTransactions)
  .delete(handleDeleteTransactions)

transactionRouter
  .route("/:transactionId")
  .delete(handleDeleteOneTransaction);
