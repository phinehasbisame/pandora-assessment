"use client";
import { PaymentHistory } from "@/interfaces";
import { apiClient } from "@/libs/axios";
import { API_ENDPOINTS } from "@/utils/api-endpoints";
import axios from "axios";
import toast from "react-hot-toast";
import useSWR from "swr";

const useFetch = () => {
  const paymentFetcher = async (
    url: string,
  ): Promise<PaymentHistory[] | null> => {
    const response = await axios.get(url);
    if (!response.data) {
      toast.error("Failed to fetch data");
    }

    return response.data as PaymentHistory[];
  };

  const apiUrl = API_ENDPOINTS.payment.allPayments;

  const { data, isLoading, error } = useSWR("/api/payment-history", paymentFetcher, {
    revalidateIfStale: false,
    shouldRetryOnError: true,
    errorRetryCount: 3,
  });
  return { data, isLoading, error };
};

export default useFetch;
