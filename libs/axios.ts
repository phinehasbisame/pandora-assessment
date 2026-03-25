import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = baseUrl) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get(url: string, config?: AxiosRequestConfig<unknown> | undefined){
    return await this.client.get(url, config)
  }

  public async post(){}
}

export const apiClient = new ApiClient()
