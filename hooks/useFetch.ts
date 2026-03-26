"use client";
import { PaymentHistory } from "@/interfaces";
import { apiClient } from "@/libs/axios";
import { API_ENDPOINTS } from "@/utils/api-endpoints";
import toast from "react-hot-toast";
import useSWR from "swr";

const useFetch = () => {
  const paymentFetcher = async (
    url: string,
  ): Promise<PaymentHistory[] | null> => {
    const response = await apiClient.get(url);
    if (!response.data) {
      toast.error("Failed to fetch data");
    }

    return response.data as PaymentHistory[];
  };

  const apiUrl = API_ENDPOINTS.payment.allPayments;
  console.log(apiUrl);

  const { data, isLoading, error } = useSWR(apiUrl, paymentFetcher, {
    revalidateIfStale: false,
    shouldRetryOnError: true,
    errorRetryCount: 3,
  });
  return { data, isLoading, error };
};

export default useFetch;
