"use client";
import { LocalFindById } from "@components/items/Handle";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMailSend, BiSolidSend } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import slugify from "slugify";
import { useTypingEffect } from "@components/items/ClientHandle";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { HeaderItems } from "../Header";

interface MenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Menu = ({ setIsOpen }: MenuProps) => {
  const [isOpenMenu, setOpenMenu] = useState({
    lv1: "",
    lv2: "",
  });

  const { isGlobal } = useStateProvider();

  const ContactData: ContactProps = LocalFindById(isGlobal?.Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(
    isGlobal?.Config,
    "SocialMedia"
  );

  const texts = ["Bạn cần tư vấn?", "Nhập địa chỉ email của bạn..."];

  const SocialItems = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.webp?alt=media&token=2b491511-e084-4c3a-9100-b56e765415eb",
      link: SocialMedia?.facebook ? SocialMedia?.facebook : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.webp?alt=media&token=617e6e75-c600-4d32-a764-f0026d42b63e",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.webp?alt=media&token=dd0a7105-47c9-4852-ae3b-9dcd0c80841e",
      link: SocialMedia?.Youtube ? SocialMedia?.Youtube : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/z5851627838739_4a80404aef3cea1f5a9d6ed52df04917.png?alt=media&token=69e862a4-4aee-411e-9c65-858ed2adb892",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "",
    },
  ];

  return (
    <div className="font-Nunito h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between px-5 text-[24px] items-center py-2 border-b">
          <h3 className="font-normal">Menu</h3>
          <div onClick={() => setIsOpen(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 text-[13px]">
          {HeaderItems.map((item, idx) => {
            const subItems = isGlobal?.ProductCategory?.find(
              (Pitem) =>
                slugify(Pitem.level0, { lower: true, locale: "vi" }) ===
                slugify(item.label, { lower: true, locale: "vi" })
            );

            return (
              <div key={idx}>
                <div className="flex justify-between w-full items-center">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={`/${item.value}`}
                    className={`${
                      isOpenMenu.lv1 === item.value && "text-main "
                    } font-semibold`}
                  >
                    {item.label}
                  </Link>

                  {subItems && (
                    <IoMdArrowDropright
                      className={`${
                        isOpenMenu.lv1 === item.value &&
                        "rotate-90 duration-300 text-mainRed"
                      }`}
                      onClick={() => {
                        if (isOpenMenu.lv1 === item.value) {
                          setOpenMenu({ ...isOpenMenu, lv1: "" });
                        } else {
                          setOpenMenu({ ...isOpenMenu, lv1: item.value });
                        }
                      }}
                    />
                  )}
                </div>
                {subItems && (
                  <div
                    className={`animate__animated ${
                      isOpenMenu.lv1 === item.value
                        ? " block animate__fadeIn"
                        : "hidden"
                    } flex flex-col mt-4 gap-4 ml-6`}
                  >
                    {subItems?.level1?.map((LV1item, LV1idx) => {
                      const LV1Slug = slugify(LV1item, {
                        locale: "vi",
                        lower: true,
                      });

                      return (
                        <div key={LV1idx}>
                          <div className="flex justify-between w-full items-center">
                            <Link
                              onClick={() => setIsOpen(false)}
                              href={`        /${item.value}/${LV1Slug}`}
                              className={`${
                                isOpenMenu.lv2 === LV1item &&
                                "text-mainOrange font-normal"
                              }`}
                            >
                              {LV1item}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-2 font-normal flex flex-col gap-2">
        <h3 className="text-red-600 text-[18px] uppercase font-semibold">
          Hỗ trợ 24/7
        </h3>
        <p className="text-gray-500">
          Đừng ngần ngại liên hệ chúng tôi, hổ trợ 24/7 từ thứ 2 - thứ 7.
          <br /> Hotline:{" "}
          <Link
            onClick={() => setIsOpen(false)}
            className="text-blink hover:underline"
            href={`tel:${ContactData?.Hotline}`}
          >
            {ContactData?.Hotline}
          </Link>
        </p>
        <div className="border ">
          <div className="w-full flex justify-between p-1">
            <input
              type="text"
              className="w-full outline-none text-[17px] px-2 font-light text-black "
              placeholder={useTypingEffect(texts, 50)}
            />
            <div className="text-[23px] px-2">
              <GrSend className="" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {SocialItems.map((item, idx) => (
            <Link
              href={item.link}
              target="_blank"
              key={idx}
              className="w-7 h-7 rounded-full"
            >
              <Image
                src={item.icon}
                alt="social"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
