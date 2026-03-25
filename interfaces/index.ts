import { Dispatch, SetStateAction } from "react";

export interface PaymentHistory {
  PaymentId: string;
  PaymentNumber: string;
  CustomerId: string;
  Customer: string;
  Amount: number;
  PaymentDate: string;
}

export interface TableProps {
  paymentHistories: PaymentHistory[];
}

export interface AdditionalTableProps {
  currentPage: number;
  onOpenModal: () => void;
  onPayment: (paymentId: string) => void;
}

export interface PaymentDetails {
  Id: string;
  PaymentNumber: string;
  AmountPaid: number;
  Outstanding: number;
  PaymentDate: Date;
  CustomerId: string;
  UserId: string;
  Customer: string;
  Remarks: string;
  onAccount: number;
  CreatedAt: Date;
  Status: number;
  ModeOfPayments: [
    {
      ModeOfPayment: string;
      Amount: number;
      AccountId: string;
      BankId: string;
      Account: string;
      Bank: string;
      Reference: string;
    },
  ];
  invoices: [
    {
      Id: string;
      InvoiceNumber: string;
      TotalAmount: number;
      Outstanding: number;
      InvoiceDate: Date;
      InvoiceStatus: string;
    },
  ];
  Payee: {
    FullName: string;
    Phone: string;
    Email: string;
    Address: string;
  };
}

export interface HeaderContenctProps {
  title: string;
  content: string;
}

export type FilterKeys = "searchName" | "startDate" | "endDate";

export interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  className: string;
  type: string;
  onChange: Dispatch<SetStateAction<Filter>>;
}

export interface Filter {
  searchByName: string;
  startDate: string;
  endDate: string;
}

export interface PaginationProps {
  page?: number;
  pageSize?: number;
  totalSize: number
}

export interface ContextProps {
  currentPage: number;
  handleCurrentPage: (page: number) => void;
  handleIncrementCurrentPage: () => void;
  handleDecrementCurrentPage: () => void;
}
