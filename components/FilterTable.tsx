"use client";
import { Dispatch, FC, SetStateAction } from "react";
import Input from "./common/Input";
import { Filter } from "@/interfaces";

const FilterTable: FC<{
  filter: Filter;
  onFilter: Dispatch<SetStateAction<Filter>>;
}> = ({ filter, onFilter }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end justify-between">
      <Input
        name="searchByName"
        value={filter.searchByName}
        type={`text`}
        placeholder={`Search by name...`}
        onChange={onFilter}
        className="border border-gray-200 text-sm px-3 py-1 rounded-md w-60 h-auto"
      />

      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="start-date" className="text-xs text-gray-400">Start Date</label>
          <Input
            name="startDate"
            value={filter.startDate}
            type={`date`}
            onChange={onFilter}
            className="border border-gray-200 text-sm px-3 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="end-date" className="text-xs text-gray-400">End Date</label>
          <Input
            name="endDate"
            value={filter.endDate}
            type={`date`}
            onChange={onFilter}
            className="border border-gray-200 text-sm px-3 py-1 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
