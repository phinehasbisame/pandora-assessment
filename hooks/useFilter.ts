"use client";
import { Filter } from "@/interfaces";
import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState<Filter>({
    searchByName: "",
    startDate: "",
    endDate: "",
  });

  console.log(filter);

  return {
    filter,
    setFilter,
  };
};

export default useFilter;
