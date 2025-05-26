"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeaderLinkType } from "@/lib/types";
export default function useHeader() {
  const links: HeaderLinkType[] = [
    {
      label: "Home",
      url: "/",
      subLink: [],
    },
    {
      label: "About",
      url: "/about",
      subLink: [],
    },
    {
      label: "Treatments",
      url: "/treatments",
      subLink: [
        {
          label: "Acne Treatment",
          url: "treatments/acne-solution-1",
        },
        {
          label: "Anti-Aging Treatment",
          url: "treatments/anti-aging-solution-1",
        },
        {
          label: "Laser Hair Removal",
          url: "treatments/laser-hair-removal-1",
        },
        {
          label: "PRP Treatment",
          url: "treatments/prp-solution-1",
        },
        {
          label: "Acne Treatment",
          url: "treatments/acne-solution-1",
        },
        {
          label: "Anti-Aging Treatment",
          url: "treatments/anti-aging-solution-1",
        },
        {
          label: "Laser Hair Removal",
          url: "treatments/laser-hair-removal-1",
        },
        {
          label: "PRP Treatment",
          url: "treatments/prp-solution-1",
        },
        {
          label: "Laser Hair Removal",
          url: "treatments/laser-hair-removal-1",
        },
        {
          label: "PRP Treatment",
          url: "treatments/prp-solution-1",
        },
        {
          label: "Acne Treatment",
          url: "treatments/acne-solution-1",
        },
        {
          label: "Anti-Aging Treatment",
          url: "treatments/anti-aging-solution-1",
        },
        {
          label: "Laser Hair Removal",
          url: "treatments/laser-hair-removal-1",
        },
        {
          label: "PRP Treatment",
          url: "treatments/prp-solution-1",
        },
      ],
    },
    {
      label: "Blog",
      url: "/blog",
      subLink: [],
    },
    {
      label: "Location",
      url: "/location",
      subLink: [],
    },
    {
      label: "FAQs",
      url: "/faqs",
      subLink: [],
    },
  ];
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
