import axios, { AxiosInstance } from "axios";

// const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY as string;
const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_URL as string;
const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY as string;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
