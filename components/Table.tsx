"use client";

import { TableProps } from "@/interfaces";
import { FC } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Modal from "./Modal";
import useModal from "@/hooks/useModal";
import Pagination from "./Pagination";
import useMainContext from "@/hooks/useMainContext";

const Table: FC<TableProps> = ({ paymentHistories }) => {
  const { openModal, paymentId, handleOpenModal, handlePaymentId } = useModal();
  const { currentPage } = useMainContext();
  return (
    <section className="my-2 w-full">
      <table className="w-full">
        <TableHeader />

        <TableBody
          currentPage={currentPage}
          onOpenModal={handleOpenModal}
          onPayment={handlePaymentId}
          paymentHistories={paymentHistories}
        />
      </table>
      {paymentHistories?.length === 0 && (
        <div className="w-full h-[50vh] text-[#D9B899] border border-gray-100 flex items-center justify-center">
          Not found
        </div>
      )}
      {openModal && (
        <Modal paymentId={paymentId} onCloseModal={handleOpenModal} />
      )}
      <Pagination totalSize={paymentHistories?.length} />
    </section>
  );
};

export default Table;
