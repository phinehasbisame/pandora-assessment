export const formatDate = (date: Date | string) => {
  const paymentDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return paymentDate;
};
