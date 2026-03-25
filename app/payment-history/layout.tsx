import MainContext from "@/context/MainContext";
import React, { ReactNode } from "react";

const PaymentHistoryLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return <MainContext>{children}</MainContext>;
};

export default PaymentHistoryLayout;
