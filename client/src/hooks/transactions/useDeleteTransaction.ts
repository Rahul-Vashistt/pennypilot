import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction } from "../../services/transaction.service";

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTransaction(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
  });
};
