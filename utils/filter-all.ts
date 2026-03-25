import { Filter, PaymentHistory } from "@/interfaces";
import { filterName } from "./filter-by-name";
import { filterByDate } from "./filter-by-date";

const filterAll = (filter: Filter, paymentHistories: PaymentHistory[]) => {
  let filteredData = paymentHistories;
  const searchByName = filter.searchByName;
  const startDate = filter.startDate;
  const endDate = filter.endDate;

  if (searchByName) {
    filteredData = filterName(filter.searchByName, filteredData);
  }

  if (startDate || endDate) {
    filteredData = filterByDate(startDate, endDate, filteredData);
  }

  return filteredData;
};

export default filterAll;
