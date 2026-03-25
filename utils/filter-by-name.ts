import { PaymentHistory } from "@/interfaces";

export const filterName = (
  search: string,
  paymentHistories: PaymentHistory[],
): PaymentHistory[] => {
  const searchByName = paymentHistories.filter((paymentHistory) =>
    paymentHistory.Customer.startsWith(search.toUpperCase()),
  );

  return searchByName;
};
