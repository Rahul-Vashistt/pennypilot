import express from "express";
import {
  handleAddTransaction,
  handleDeleteOneTransaction,
  handleGetAllTransactions,
} from "../controllers/transaction.controller.js";

export const transactionRouter = express.Router();

transactionRouter
  .route("/")
  .post(handleAddTransaction)
  .get(handleGetAllTransactions)

transactionRouter
  .route("/:transactionId")
  .delete(handleDeleteOneTransaction);
