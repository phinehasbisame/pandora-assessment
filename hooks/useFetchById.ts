import { PaymentDetails } from "@/interfaces";
import axios from "axios";
import toast from "react-hot-toast";
import useSWR from "swr";

const useFetchById = (paymentId: string) => {
  const paymentFetcher = async (
    url: string,
  ): Promise<PaymentDetails | null> => {
    const response = await axios.get(url);
    if (!response.data) {
      toast.error("Failed to fetch data");
    }
    return response.data as PaymentDetails;
  };

  const { data, isLoading } = useSWR(
    `/api/filter-payment/${paymentId}`,
    paymentFetcher,
    {
      revalidateIfStale: false,
      shouldRetryOnError: true,
      errorRetryCount: 3,
    },
  );
  return { data, isLoading };
};

export default useFetchById;
