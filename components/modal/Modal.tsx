"use client";

import useFetchById from "@/hooks/useFetchById";
import ModalContent from "./ModalContent";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";

export default function Modal({
  paymentId,
  onCloseModal,
}: {
  paymentId: string;
  onCloseModal: () => void;
}) {
  const { data: paymentDetail, isLoading } = useFetchById(paymentId);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 ">
        <div className="w-full h-full md:h-2/3 md:w-1/3 border z-9999 border-[#D9B899] md:rounded-2xl bg-gray-50">
          {/* Heder part */}
          <div className="h-16 flex items-center justify-between px-5 md:rounded-t-2xl bg-[#D9B899] font-light border-b border-gray-200">
            <h2 className="font-light">Payment Details</h2>
            <MdOutlineClose
              size={20}
              className="cursor-pointer"
              onClick={onCloseModal}
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <AiOutlineLoading
              size={25}
              className="animate-spin text-[#D9B899]"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!paymentDetail) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 ">
        <div className="w-full h-full md:h-2/3 md:w-1/3 border z-9999 border-[#D9B899] md:rounded-2xl bg-gray-50">
          {/* Heder part */}
          <div className="h-16 flex items-center justify-between px-5 md:rounded-t-2xl bg-[#D9B899] font-light border-b border-gray-200">
            <h2 className="font-light">Payment Details</h2>
            <MdOutlineClose
              size={20}
              className="cursor-pointer"
              onClick={onCloseModal}
            />
          </div>
          Not Found
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 ">
      <ModalContent onClose={onCloseModal} paymentDetail={paymentDetail} />
    </div>
  );
}
