import { FC } from "react";
import Content from "./HeaderContent";
import { MdOutlineClose } from "react-icons/md";
import { PaymentDetails } from "@/interfaces";
import { formatDate } from "@/utils/format-date";

const ModalContent: FC<{
  paymentDetail: PaymentDetails;
  onClose: () => void;
}> = ({ paymentDetail, onClose }) => {
  return (
    <div className="w-3/4 h-3/4 md:h-2/3 md:w-1/3 border border-gray-200 rounded-2xl bg-gray-50">
      {/* Heder part */}
      <div className="h-16 flex items-center justify-between px-5 rounded-t-2xl bg-gray-50 border-b border-gray-200">
        <h2 className="font-semibold">Payment Details</h2>
        <MdOutlineClose
          size={20}
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Payment Details body */}
      <div className="p-5 space-y-5">
        {/* Customer Details */}
        <div>
          <h2 className="text-xs mb-1 text-gray-400">Customer Details</h2>
          <div>
            <Content
              title="Customer"
              content={paymentDetail.Customer as string}
            />
            {/* <Content title="Customer ID" content={paymentDetail.CustomerId} /> */}
          </div>
        </div>
        {/* Test if payee content is always empty */}
        {(paymentDetail.Payee.FullName != "" ||
          paymentDetail.Payee.Phone != "" ||
          paymentDetail.Payee.Phone != "") && <span>Yes</span>}

        {/* Payment Details */}
        <div>
          <h2 className="text-xs mb-1 text-gray-400">Payment Details</h2>
          <div className="grid grid-cols-2 gap-3">
            <Content
              title="Payment number"
              content={paymentDetail.PaymentNumber}
            />
            <Content
              title="Payment amount"
              content={`GH₵ ${paymentDetail.AmountPaid.toLocaleString() as unknown as string}`}
            />
            <Content
              title="Paid Date"
              content={formatDate(paymentDetail.PaymentDate)}
            />
            <Content
              title="Payment Mode"
              content={`GH₵ ${paymentDetail.Outstanding as unknown as string}`}
            />
          </div>
        </div>

        {/* Mode of Payment */}
        <div>
          <h2 className="text-xs mb-1 text-gray-400">Mode of Payment</h2>
          <div>
            {paymentDetail.ModeOfPayments.map(
              (modeOfPayment, index: number) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  {/* for cases where bank isn't empty */}
                  {modeOfPayment.Bank && (
                    <h2 className="text-gray-700 text-sm">
                      Bank:{" "}
                      <span className="text-black font-medium">
                        {modeOfPayment.Bank}
                      </span>
                    </h2>
                  )}

                  {/* for cases where bank id isn't empty*/}
                  {modeOfPayment.BankId && (
                    <h2 className="text-gray-700 text-sm">
                      Bank Id:{" "}
                      <span className="text-black font-medium">
                        {modeOfPayment.BankId}
                      </span>
                    </h2>
                  )}

                  <h2 className="text-gray-700 text-sm">
                    Account:{" "}
                    <span className="text-black font-medium">
                      {modeOfPayment.Account}
                    </span>
                  </h2>

                  <h2 className="text-gray-700 text-sm">
                    Account Id:{" "}
                    <span className="text-black font-medium">
                      {modeOfPayment.AccountId}
                    </span>
                  </h2>
                  <h2 className="text-gray-700 text-sm">
                    Reference ID:{" "}
                    <span className="text-black font-medium">
                      {modeOfPayment.Reference}
                    </span>
                  </h2>
                  <h2 className="text-gray-700 text-sm">
                    Amount:{" "}
                    <span className="text-black font-medium">{`GH₵ ${modeOfPayment.Amount.toLocaleString()}`}</span>
                  </h2>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Invoice Details */}
        {paymentDetail.invoices.length > 0 && (
          <div>
            <h2 className="text-xs mb-1 text-gray-400">Invoice Details</h2>
            <div>
              {paymentDetail.invoices.map((invoice, index: number) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <h2 className="text-gray-700 text-sm">
                    Invoice Number:{" "}
                    <span className="text-black font-medium">
                      {invoice.InvoiceNumber}
                    </span>
                  </h2>

                  <h2 className="text-gray-700 text-sm">
                    Invoice Date:{" "}
                    <span className="text-black font-medium">
                      {formatDate(invoice.InvoiceDate)}
                    </span>
                  </h2>
                  <h2 className="text-gray-700 text-sm">
                    Invoice Status:{" "}
                    <span className="text-black font-medium">
                      {invoice.InvoiceStatus}
                    </span>
                  </h2>
                  <h2 className="text-gray-700 text-sm">
                    Total Amount:{" "}
                    <span className="text-black font-medium">{`GH₵ ${invoice.TotalAmount.toLocaleString()}`}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}

        <Content title="Remarks" content={paymentDetail.Remarks} />
      </div>
    </div>
  );
};

export default ModalContent;
