import { Filter, PaymentHistory } from "@/interfaces";
import { filterName } from "./filter-by-name";
import { filterByDate } from "./filter-by-date";

const filterAll = (filter: Filter, paymentHistories: PaymentHistory[]) => {
  let filteredData: PaymentHistory[] | null = paymentHistories;
  const searchByName = filter.searchByName;
  const startDate = filter.startDate;
  const endDate = filter.endDate;

  if (!paymentHistories) filteredData = null;

  if (searchByName) {
    filteredData = filterName(
      filter.searchByName,
      filteredData as PaymentHistory[],
    );
  }

  if (startDate || endDate) {
    filteredData = filterByDate(
      startDate,
      endDate,
      filteredData as PaymentHistory[],
    );
  }

  return filteredData;
};

export default filterAll;
