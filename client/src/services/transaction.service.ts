import api from "../api/axios";
import type { Transaction } from "../types/Transaction";

export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await api.get("/transactions");

  return response.data;
};
