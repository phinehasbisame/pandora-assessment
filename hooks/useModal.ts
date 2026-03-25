"use client";
import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<string>("");

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handlePaymentId = (payId: string) => {
    setPaymentId(payId);
  };

  return {
    openModal,
    handleOpenModal,

    // payment id
    paymentId,
    handlePaymentId,
  };
};

export default useModal;
