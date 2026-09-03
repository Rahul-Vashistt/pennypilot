import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction } from "../../services/transaction.service";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTransaction,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
  });
};
