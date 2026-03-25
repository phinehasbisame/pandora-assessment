import useMainContext from "@/hooks/useMainContext";
import { PaginationProps } from "@/interfaces";
import { FC } from "react";

const Pagination: FC<PaginationProps> = ({ totalSize, pageSize = 10 }) => {
  const { currentPage, handleCurrentPage } = useMainContext();
  const totalPages = Math.ceil(totalSize / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-5 mt-4 text-sm">
      {/* Prev */}
      <button
        onClick={() => handleCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-white rounded disabled:opacity-50 bg-[#D9B899] cursor-pointer"
      >
        Prev
      </button>

      {/* Next */}
      <button
        onClick={() => handleCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-white rounded disabled:opacity-50 bg-[#D9B899] cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
