"use client";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { useEffect, useState } from "react";
import { FaqItem, FaqCategory, ApiResponse, ResultSection } from "@/lib/types";

const useResult = (id: number | undefined) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<ResultSection>();
  useEffect(() => {
    const fetchedCategories = async () => {
      try {
        setLoading(true);
        const res: ApiResponse<ResultSection> = await apiClient.get(
          `${ENDPOINTS.GETRESULTDELIVERED}${id}`
        );
        console.log("this is res", res);
        setResult(res.data);
      } catch (error) {
        console.log("this is error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchedCategories();
  }, []);

  return {
    result,
    loading,
  };
};

export default useResult;
