"use client";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import MobileUI from "./Mobile/MobileUI";
import { CategoryProps } from "@assets/props/Props";
import { IoMdMenu } from "react-icons/io";
import { Drawer, Modal } from "antd";
import Menu from "./Mobile/Menu";
import { IoLanguage } from "react-icons/io5";
import Translate from "./Header/Translate";

export const HeaderItems = [
  {
    label: "Home",
    value: "",
  },
  {
    label: "About Us",
    value: "about-us",
  },
  {
    label: "Gallery",
    value: "gallery",
  },
  {
    label: "TattooFlash",
    value: "blogs/tattooflash",
  },
  {
    label: "Contact Us",
    value: "contact-us",
  },
];

const Header = ({
  Config,
  ProductCategory,
}: {
  Config: Array<any>;
  ProductCategory: CategoryProps[];
}) => {
  const [isLanguage, setLanguage] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  return (
    <>
      <div className="bg-black text-white d:block p:hidden z-50 relative">
        <div className="w-default mx-auto flex flex-col">
          <div className="flex items-center gap-4 py-2 justify-between">
            <div
              className="flex items-center gap-1 text-gray-400 hover:text-white duration-300 cursor-pointer"
              onClick={() => setOpenMenu(true)}
            >
              <IoMdMenu className="text-[25px]" />
              <span className="font-semibold">MENU</span>
            </div>
            <Link href={`/`}>
              <div className="w-[100px] h-[100px] ">
                <Image
                  src={ContactData?.LogoWebsite}
                  alt="logo"
                  width={400}
                  height={400}
                  className="p-1"
                />
              </div>
            </Link>
            <div className="flex items-center gap-5 relative">
              <div
                className="border-2 border-gray-400 py-2 px-4 uppercase text-gray-400 font-bold hover:border-white hover:text-white"
                onClick={() => setLanguage(!isLanguage)}
              >
                <IoLanguage />
              </div>
              <div>
                <Link
                  href={`tel:${ContactData?.Hotline}`}
                  className="border-2 border-gray-400 py-2 px-4 uppercase text-gray-400 font-bold hover:border-white hover:text-white"
                >
                  Đặt lịch hẹn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block">
        <MobileUI ContactData={ContactData} setIsLanguage={setLanguage} />
      </div>

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

      <Modal
        footer={null}
        open={isLanguage}
        onCancel={() => setLanguage(false)}
      >
        <>
          <h3 className="text-center font-bold text-[22px] ">Chọn ngôn ngữ</h3>
          <div className="w-full h-[35px] mt-5">
            <Translate />
          </div>
        </>
        br
      </Modal>
    </>
  );
};

export default Header;
