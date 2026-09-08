import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransactions } from "../../services/transaction.service";

export const useDeleteTransactions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ids: string[]) => deleteTransactions(ids),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
  });
};