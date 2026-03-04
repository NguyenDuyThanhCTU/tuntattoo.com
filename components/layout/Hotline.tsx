"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaTiktok,
  FaFacebookMessenger,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import { MdOutlineGroups } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { useEffect, useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { LocalFindById } from "@components/items/Handle";
import Image from "next/image";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { CiFacebook } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

interface IconMappingType {
  [key: string]: IconType;
}
export const HotlineIconMapping: IconMappingType = {
  FaFacebookF: FaFacebookF,
  FaYoutube: FaYoutube,
  FaPhone: FaPhone,
  FaTiktok: FaTiktok,
  FaFacebookMessenger: FaFacebookMessenger,
  FaInstagram: FaInstagram,
  SiZalo: SiZalo,
  MdOutlineGroups: MdOutlineGroups,
};

function Hotline({ Config }: { Config: Array<any> }) {
  const Contact: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HotlineItems = [
    {
      icon: <SiZalo />,
      label: "Zalo",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "https://zalo.me",
    },
    {
      icon: <CiFacebook />,
      label: "Facebook",
      link: SocialMedia?.fanpage
        ? SocialMedia?.fanpage
        : "https://facebook.com",
    },
    {
      icon: <FaWhatsapp />,
      label: "Whatsapp",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "https://tiktok.com",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: SocialMedia?.instagram
        ? SocialMedia?.instagram
        : "https://Youtube.com",
    },
    {
      icon: <FiPhoneCall />,
      label: "Hỗ trợ 24/7",
      link: Contact?.Hotline ? ` tel:${Contact?.Hotline}` : "tel:",
    },
  ];

  return (
    <>
      <div className=" fixed right-0 top-[30%] z-50">
        {HotlineItems.map((item, idx) => (
          <Link href={item.link} key={idx} target="_blank">
            <div
              className={`${idx === 0 && "rounded-t-sm"} ${
                idx === HotlineItems.length - 1 && "rounded-b-sm border-none"
              } p:px-1 p:py-2 d:px-2 d:py-4 bg-[rgba(0,0,0,0.74)] border-b text-white border-white flex flex-col items-center gap-1 d:text-[16px] p:text-[14px]`}
            >
              <div className=" p:text-[16px] d:text-[25px]">{item.icon}</div>
              <div className="p:text-[10px] d:text-[12px]">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Hotline;
