"use client";
import { useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, ServiceCard, ServiceItem } from "@/lib/types";
import { use, useState } from "react";

const useServices = () => {
  const [data, setData] = useState<ServiceItem[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<ServiceCard[]>([]);
  const [activeLink, setActiveLink] = useState<string>("");
  const fetchServices = async () => {
    try {
      const res: ApiResponse<ServiceItem[]> = await apiClient.get(
        ENDPOINTS.SERVICES
      );
      const data = res.data;
      setData(data);
      setLinks(data.map((item) => item.name));
      setSelectedImages(data[0].images);
      setActiveLink(data[0].name);
    } catch (error) {
      console.log("Error while fetching services: ", error);
      return [];
    }
  };

  const onLinkClick = (link: string) => {
    const filteredData = data.filter((item) => item.name === link);
    setActiveLink(link);
    setSelectedImages(filteredData[0].images);
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return { links, selectedImages, onLinkClick, activeLink };
};

export default useServices;
