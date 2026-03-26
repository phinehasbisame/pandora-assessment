import { API_ENDPOINTS } from "@/utils/api-endpoints";
import axios from "axios";

export async function GET() {
  const endpoints = API_ENDPOINTS.payment.allPayments;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}${endpoints}`

  const res = await axios.get(apiUrl);
  return Response.json(res.data);
}
