import { PaymentHistory } from "@/interfaces";

export const filterByDate = (
  startDate: Date | string,
  endDate: Date | string,
  paymentHistories: PaymentHistory[],
): PaymentHistory[] => {
  const startTime = new Date(startDate).getTime();

  // update to date if start date is selected
  const presentDate = new Date(Date.now()).getTime()
  const endTime = new Date(endDate).getDate();
  const finalTime = isNaN(endTime) ? presentDate : endTime;

  const filterHistoriesByDate = paymentHistories.filter(({ PaymentDate }) => {
    const paymentTime = new Date(PaymentDate).getTime();

    //const presentDate = new Date(Date.now()).getTime();

    if (isNaN(paymentTime)) return false;

    if (startTime && paymentTime < startTime) return false;

    if (finalTime && paymentTime > finalTime) return false;

    return true;
  });

  return filterHistoriesByDate;
};
