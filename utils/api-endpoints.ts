
const PAYMENT_ENDPOINTS = {
  allPayments: "/api/Payments",
  paymentById: "/api/Payments/{paymentId}",
} as const;

export const API_ENDPOINTS = {
  payment: PAYMENT_ENDPOINTS,
};
