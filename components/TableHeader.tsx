import { tableHeader } from "@/const";

const TableHeader = () => {
  return (
    <thead>
      <tr className="border border-[#D9B899]  bg-[#D9B899] text-[#4A3E31] text-left p-2 text-xs md:text-sm">
        {tableHeader.map((header) => (
          <th key={header} className="p-2 font-light md:min-w-40">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
