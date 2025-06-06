"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ApiResponse, HeaderLinkType, HeaderSubLinkType } from "@/lib/types";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
export default function useHeader() {
  const [links, setLinks] = useState<HeaderLinkType[]>([
    {
      label: "Home",
      url: "/",
      subLink: [],
    },
    {
      label: "Treatments",
      url: "/treatments",
      subLink: [
        {
          label: "Acne Cleanup",
          url: "/treatments/acne-cleanup-4",
        },
        {
          label: "Bridal Skin Treatment",
          url: "/treatments/bridal-skin-treatment-5",
        },
        {
          label: "Carbon Laser",
          url: "/treatments/carbon-laser-6",
        },
        {
          label: "Facial Fillers",
          url: "/treatments/facial-filler-7",
        },
        {
          label: "Androgenic Alopecia",
          url: "/treatments/androgenic-alopecia-8",
        },
        {
          label: "Anti-Dandruff",
          url: "/treatments/anti-dandruff-9",
        },
        {
          label: "Hair Fall",
          url: "/treatments/hair-fall-10",
        },
        {
          label: "Hair PRP",
          url: "/treatments/hair-prp-11",
        },
        {
          label: "Tattoo Removal",
          url: "/treatments/tattoo-removal-15",
        },
        {
          label: "Laser Hair Removal",
          url: "/treatments/hair-removal-14",
        },
        {
          label: "Accidental Scar",
          url: "/treatments/accidental-scar-12",
        },
        {
          label: "Birthmark Removal",
          url: "/treatments/birthmark-removal-13",
        },
      ],
    },
    {
      label: "Location",
      url: "/location",
      subLink: [
        {
          label: "Mumbai",
          url: "/location/mumbai",
        },
        {
          label: "Gurgaon",
          url: "/location/gurugram",
        },
      ],
    },
    {
      label: "About",
      url: "/about",
      subLink: [],
    },
    {
      label: "Blog",
      url: "/blog",
      subLink: [],
    },
    {
      label: "FAQs",
      url: "/faqs",
      subLink: [],
    },
  ]);
  const pathname = usePathname();
  const isActive = (url: string) => pathname === url;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [hoverLink, setHoverLink] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoverLink(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoverLink(null);
    }, 200);
  };

  const closeSubLink = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoverLink(null);
    }, 200);
    setIsOpen(false);
  };

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (label: string) => {
    setActiveSubMenu((prev) => (prev === label ? null : label));
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchHeaderLink = async () => {
    try {
      const res: ApiResponse<HeaderSubLinkType[]> = await apiClient.get(
        ENDPOINTS.GETHEADERLINKS
      );
      const updatedLinks: HeaderLinkType[] = links.map((link) => {
        if (link.label === "Treatments") {
          return {
            ...link,
            subLink: res.data,
          };
        }
        return link;
      });
      setLinks(updatedLinks);
    } catch (error) {
      console.error("this is error: ", error);
    }
  };
  useEffect(() => {
    fetchHeaderLink();
  }, []);

  return {
    closeSubLink,
    links,
    isActive,
    isOpen,
    toggleMenu,
    closeMenu,
    hoverLink,
    handleMouseEnter,
    handleMouseLeave,
    isMobile,
    activeSubMenu,
    toggleSubMenu,
  };
}
