"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiHeartThin, PiShoppingCartThin, PiUserThin } from "react-icons/pi";
import { IoMenuOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import { Badge, Drawer } from "antd";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import { useTypingEffect } from "@components/items/ClientHandle";
import { useStateProvider } from "@context/StateProvider";
import { CategoryProps } from "@assets/props/Props";
import { IoIosMenu } from "react-icons/io";
import { ContactProps } from "@assets/props/PropsConfig";
import { IoLanguage } from "react-icons/io5";
import Menu from "./Menu";
import Translate from "../Header/Translate";

interface MobileProps {
  ContactData: ContactProps;
  setIsLanguage: (isOpen: boolean) => void;
}

const Mobile = ({ ContactData, setIsLanguage }: MobileProps) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpenSearch, setOpenSearch] = useState(false);

  const texts = [
    "Bạn cần tìm gì ...?",
    "Nhập tên sản phẩm cần tìm ...",
    "Tìm kiếm sản phẩm ...",
  ];

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollTop: any =
    typeof window !== "undefined" &&
    (window?.pageYOffset || document.documentElement.scrollTop);

  const handleScroll = () => {
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.addEventListener("scroll", handleScroll);
      return () => {
        window?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollTop]);

  return (
    <div className={`top-0 duration-300 fixed w-full  d:hidden p:block z-50`}>
      <div className="px-4 w-full flex justify-between items-center h-full bg-black text-white">
        <div className="text-[40px] p-2" onClick={() => setOpenMenu(true)}>
          <IoIosMenu />
        </div>
        <Link href={`/`} className="">
          <div className="w-[100px] h-[100px] p-2">
            <Image
              src={ContactData?.LogoWebsite}
              width={200}
              height={200}
              alt="Logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <div className="text-[22px] p-2" onClick={() => setIsLanguage(true)}>
          <IoLanguage />
        </div>
      </div>

      <div
        className={`${
          isOpenSearch
            ? " pullup h-[35px]"
            : " opacity-0 transform-none invisible h-0"
        }  bg-white w-full flex justify-between mt-[10px]  items-center shadow-xl gap-1  `}
      >
        {/* <div className="w-full h-[35px] rounded-full p:block d:hidden ">
          <Translate />
        </div> */}
      </div>
      <>
        <Drawer
          onClose={() => setOpenMenu(false)}
          closeIcon={null}
          width={320}
          open={isOpenMenu}
          placement="left"
          className="reset_Drawer"
        >
          <Menu setIsOpen={setOpenMenu} />
        </Drawer>
      </>
    </div>
  );
};

export default Mobile;
