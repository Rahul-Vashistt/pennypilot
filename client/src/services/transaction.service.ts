import api from "../api/axios";
import type { CreateTransaction, Transaction } from "../types/Transaction";


export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await api.get("/transactions");

  return res.data.allTransactions ?? []; 
};

export const createTransaction = async (data: CreateTransaction) => {
  const res = await api.post("/transactions", data)

  return res.data;
}

export const deleteTransaction = async (id: string) => {
  await api.delete(`/transactions/${id}`);
};