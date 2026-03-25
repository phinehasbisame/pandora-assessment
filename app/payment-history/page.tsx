"use client";
import FilterTable from "@/components/FilterTable";
import Table from "@/components/Table";
import useFetch from "@/hooks/useFetch";
import useFilter from "@/hooks/useFilter";
import { PaymentHistory } from "@/interfaces";
import filterAll from "@/utils/filter-all";
import { AiOutlineLoading } from "react-icons/ai";

export default function PaymentHistoryPage() {
  const { filter, setFilter } = useFilter();
  const { data: paymentHistories, isLoading } = useFetch();

  if (isLoading) {
    return (
      <div className="w-screen h-[80vh] flex items-center justify-center">
        <AiOutlineLoading size={40} color="orange" className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-3 px-3 md:px-[10%] space-y-3">
      <h2 className="text-sm">Payment History</h2>
      <FilterTable filter={filter} onFilter={setFilter} />
      <Table
        paymentHistories={filterAll(
          filter,
          paymentHistories as PaymentHistory[],
        )}
      />
    </div>
  );
}
