"use client";

import useFetchById from "@/hooks/useFetchById";
import { LuLoaderCircle } from "react-icons/lu";
import ModalContent from "./ModalContent";

export default function Modal({
  paymentId,
  onCloseModal,
}: {
  paymentId: string;
  onCloseModal: () => void;
}) {
  const { data: paymentDetail, isLoading } = useFetchById(paymentId);

  console.log(paymentDetail);

  // if (isLoading) {
  //   return (
  //         <div className="fixed inset-0 flex items-center justify-center bg-black/40 ">
  //       <div className="w-3/4 h-3/4 md:h-1/2 md:w-1/3 border border-gray-200 rounded-3xl bg-gray-50">
  //         <LuLoaderCircle color="orange" className="animate-spin" />
  //       </div>
  //     </div>
  //   );
  // }

  if (!paymentDetail) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 ">
        <div className="w-3/4 h-3/4 md:h-1/2 md:w-1/3 border border-gray-200 rounded-3xl bg-gray-50">
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
