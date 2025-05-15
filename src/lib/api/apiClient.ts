import { fetcher } from "./fetcher";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiClient = {
  get: <T>(endpoint: string) => fetcher<T>(`${BASE_URL}${endpoint}`),
  post: <T>(endpoint: string, data: any) =>
    fetcher<T>(`${BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
