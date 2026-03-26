import { PaymentDetails } from "@/interfaces";
import { apiClient } from "@/libs/axios";
import { API_ENDPOINTS } from "@/utils/api-endpoints";
import toast from "react-hot-toast";
import useSWR from "swr";

const useFetchById = (paymentId: string) => {
  const paymentFetcher = async (
    url: string,
  ): Promise<PaymentDetails | null> => {
    const response = await apiClient.get(url);
    if (!response.data) {
      toast.error("Failed to fetch data");
    }

    return response.data as PaymentDetails;
  };

  const apiUrl = API_ENDPOINTS.payment.paymentById.replace(
    "{paymentId}",
    paymentId,
  );


  const { data, isLoading } = useSWR(apiUrl, paymentFetcher, {
    revalidateIfStale: false,
    shouldRetryOnError: true,
    errorRetryCount: 3,
  });
  return { data, isLoading };
};

export default useFetchById;
