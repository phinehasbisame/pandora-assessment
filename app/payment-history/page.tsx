"use client";
import FilterTable from "@/components/filter/FilterTable";
import Table from "@/components/table/Table";
import useFetch from "@/hooks/useFetch";
import useFilter from "@/hooks/useFilter";
import { PaymentHistory } from "@/interfaces";
import filterAll from "@/utils/filter-all";
import { AiOutlineLoading } from "react-icons/ai";

export default function PaymentHistoryPage() {
  const { filter, setFilter } = useFilter();
  const { data: paymentHistories, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <div className="w-screen h-[80vh] flex items-center justify-center">
        <AiOutlineLoading size={25} className="animate-spin text-[#D9B899]" />
      </div>
    );
  }

  return (
    <div className="py-3 px-3 md:px-[10%] space-y-3">
      <h2 className="text-sm">Payment History</h2>
      <FilterTable filter={filter} onFilter={setFilter} />
      <Table
        error={error}
        paymentHistories={
          filterAll(
            filter,
            paymentHistories as PaymentHistory[],
          ) as PaymentHistory[]
        }
      />
    </div>
  );
}
