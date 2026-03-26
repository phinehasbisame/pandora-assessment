import { AdditionalTableProps, TableProps } from "@/interfaces";
import { formatDate } from "@/utils/format-date";
import { FC } from "react";

const TableBody: FC<TableProps & AdditionalTableProps> = ({
  paymentHistories,
  currentPage,
  onOpenModal,
  onPayment,
}) => {
  const lastPage = currentPage * 10;
  const firstPage = lastPage - 10;

  return (
    <>
      <tbody>
        {paymentHistories
          ?.slice(firstPage, lastPage)
          .map((paymentHistory, key: number) => (
            <tr
              key={key}
              className="border border-gray-200  text-xs md:text-sm font-light text-left"
            >
              {/* <td className="p-2 border">{paymentHistory.CustomerId}</td> */}
              <td className="p-2 border border-gray-200">
                {paymentHistory.Customer}
              </td>
              {/* <td className="p-2 border">{paymentHistory.PaymentId}</td> */}
              {/* <td className="p-2 border">{paymentHistory.PaymentNumber}</td> */}
              <td className="p-2 border border-gray-200">
                {paymentHistory.Amount.toLocaleString()}
              </td>
              <td className="p-2 border border-gray-200">
                {formatDate(paymentHistory.PaymentDate)}
              </td>
              <td
                onClick={() => {
                  onOpenModal();
                  onPayment(paymentHistory.PaymentId);
                }}
                className="p-2 text-green-900 underline cursor-pointer"
              >
                View
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
