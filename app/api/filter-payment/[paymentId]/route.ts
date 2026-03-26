import { apiClient } from "@/libs/axios";
import { API_ENDPOINTS } from "@/utils/api-endpoints";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ paymentId: string }> },
) {
  const { paymentId } = await params;
  const endpoints = API_ENDPOINTS.payment.paymentById.replace(
    "{paymentId}",
    paymentId,
  );

  const res = await apiClient.get(endpoints);
  return Response.json(res.data);
}
