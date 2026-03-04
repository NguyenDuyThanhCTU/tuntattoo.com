"use client";
import React, { useState } from "react";
import { Image as AntImage } from "antd";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoShareSocialOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useStateProvider } from "@context/StateProvider";
import slugify from "slugify";

import { LocalFindById } from "@components/items/Handle";
import { ProductProps } from "@assets/props/PropsProduct";
import { CategoryProps } from "@assets/props/Props";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import SimilarProducts from "./SimilarProduct";

interface ProductDetailProps {
  Data: ProductProps;
  Products: ProductProps[];
  Config: Array<any>;
  Category: CategoryProps[];
}

const ProductDetail = ({
  Data,
  Products,
  Config,
  Category,
}: ProductDetailProps) => {
  const ContactData: ContactProps = Config?.find(
    (item: any) => item.id === "contact"
  );
  const socialData: SocialMediaProps = LocalFindById(Config, "SocialMedia");
  const [isDisplay, setDisplay] = useState(Data?.image);
  const { isGlobal, setOpenModal, isOpenModal } = useStateProvider();

  let ProductCategory: CategoryProps[] = isGlobal?.ProductCategory;

  const isGroup: any = isGlobal?.ProductCategory?.find(
    (item) => item.level0 === "Nhóm sản phẩm"
  );

  return (
    <>
      <div className="grid p:grid-cols-1 d:grid-cols-2 gap-5">
        <div className="w-full flex justify-center flex-col">
          <div className="">
            <AntImage
              className="w-full"
              src={isDisplay}
              style={{ width: "100%" }}
            />
          </div>
          {Data?.subimage && (
            <div className="flex  overflow-hidden  mt-2 items-center">
              <Swiper
                spaceBetween={30}
                slidesPerView={5}
                slidesPerGroup={1}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                style={{ paddingBottom: "50px", width: "100%" }}
                className="custom-pagination"
              >
                {Data?.subimage?.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className=" m-2 h-[84px] overflow-hidden"
                  >
                    <AntImage
                      className="p-2 h-full border-2 object-cover hover:scale-110 duration-500 max-w-[84px] max-h-[84px]"
                      src={item.url}
                      alt="sub image"
                      width={100}
                      height={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between w-full items-center">
            <h3 className="text-[35px] text-mainBold  font-bold">
              {Data?.title}
            </h3>
            <div className="border rounded-full p-2 text-[20px] border-slate-400 shadow-xl">
              <IoShareSocialOutline />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 font-LexendDeca text-black">
            <div className="flex items-center gap-1 font-normal">
              <GoDotFill className="text-[10px] text-mainOrange" />
              <span className="">
                <strong>Mã sản phẩm</strong>:{" "}
                {Data?.pId ? Data?.pId : "Đang cập nhật"}
              </span>
            </div>
            <div className="flex items-center gap-1 font-normal">
              <GoDotFill className="text-[10px] text-mainOrange" />
              <span className="">
                <strong>Nhu cầu</strong>:{" "}
                {Data?.grouplv1
                  ? `${isGroup?.level1.find(
                      (item: string) =>
                        slugify(item, { lower: true, locale: "vi" }) ===
                        Data?.grouplv1
                    )}`
                  : "Đang cập nhật"}
              </span>
            </div>
            <div className="flex items-center gap-1 font-normal">
              <GoDotFill className="text-[10px] text-mainOrange" />
              <span className="">
                <strong>Thương hiệu</strong>:{" "}
                {Data?.branches ? Data?.branches : "Đang cập nhật"}
              </span>
            </div>
            <div className="flex items-center gap-1 font-normal">
              <GoDotFill className="text-[10px] text-mainOrange" />
              <span className="">
                <strong>Dòng sản phẩm</strong>:{" "}
                {Data?.level0
                  ? `${
                      ProductCategory.find(
                        (item) =>
                          slugify(item.level0, {
                            locale: "vi",
                            lower: true,
                          }) === Data?.level0
                      )?.level0
                    }`
                  : "Đang cập nhật"}
              </span>
            </div>
          </div>

          <div className="d:text-[30px] p:text-[14px]">
            {Data?.price ? (
              <>
                {Data?.discount ? (
                  <div className="   font-bold flex gap-3  items-center text-red-500">
                    <span className="line-through text-gray-400  font-normal">
                      {Data?.price}₫
                    </span>
                    <span className=" ">{Data?.newPrice}₫</span>

                    <span className="text-white font-normal   bg-red500text-red-500 rounded-md px-4 py-1">
                      Tiết kiệm {Data?.discount}%
                    </span>
                  </div>
                ) : (
                  <span className="text-red-500 font-bold  ">
                    {Data?.price}₫
                  </span>
                )}
              </>
            ) : (
              <span className="text-red-500 font-bold    ">
                Giá đang cập nhật
              </span>
            )}
          </div>

          <div className=" font-LexendDeca">
            <div className="p-3 flex flex-col gap-2 text-[14px] font-light">
              <div className="grid grid-cols-5 py-1 border-b ">
                <div className="col-span-2 font-normal">Khuyến mãi:</div>
                <div className="col-span-3 italic ">
                  <p>* Đang cập nhật</p>
                </div>
              </div>
              <div className="grid grid-cols-5 py-1 border-b ">
                <div className="col-span-2 ">Thông số sản phẩm:</div>
                <div
                  className="col-span-3 italic ck-content"
                  dangerouslySetInnerHTML={
                    Data?.detail
                      ? { __html: Data?.detail }
                      : { __html: "<p>Đang cập nhật</p>" }
                  }
                ></div>
              </div>
              <div className="grid grid-cols-5 py-1  ">
                <div className="col-span-2 font-normal">Đơn giá trên:</div>
                <div className="col-span-3 italic ">
                  <p> Đang cập nhật </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="font-LexendDeca">
            <div className="flex  flex-col text-center border font-bold py-2 hover:border-mainOrange duration-300 cursor-pointer border-gray-400">
              <Link
                href={`tel:${ContactData?.Hotline}`}
                className="uppercase text-[13px]"
              >
                Mua ngay
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Link
                className="flex flex-col text-center border font-bold py-2 hover:border-mainOrange duration-300 cursor-pointer border-gray-400"
                href={
                  socialData?.facebook
                    ? socialData?.facebook
                    : "https://www.facebook.com/NhuThanhGcoop"
                }
                target="_blank"
              >
                <span className="uppercase text-[13px]">Tư vấn</span>
                <span className="text-[11px] d:block p:hidden">
                  Tư vấn sản phẩm phù hợp với bạn
                </span>
              </Link>
              <Link
                className="flex flex-col text-center border font-bold py-2 border-red-500 hover:bg-red-500 text-red-500  duration-300 cursor-pointer hover:text-white "
                href={`${socialData?.zalo}`}
                target="_blank"
              >
                <span className="uppercase text-[13px]">Liên hệ</span>
                <span className="text-[11px] d:block p:hidden">
                  Chúng tôi luôn bên bạn 24/7
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-gray-300 rounded-lg  mt-5 overflow-hidden">
        <div className="p-4">
          <h2 className="text-[22px] font-semibold text-mainColorHover uppercase text-mainYellow  border-b-2 w-full pb-1 border-mainYellow">
            Thông tin chi tiết
          </h2>
          <div
            className="mt-2 font-light ck-content min-h-[50vh] p-3 "
            dangerouslySetInnerHTML={
              Data?.describe
                ? { __html: Data?.describe }
                : { __html: "Đang cập nhật" }
            }
          ></div>
          <div>
            <p className="text-[20px] tracking-[2px] ">
              <>
                Nếu quý khách muốn nhận tư vấn miễn phí, vui lòng liên hệ:{" "}
                <Link
                  href={`${
                    ContactData ? `tel:${ContactData.Hotline}` : "tel:"
                  }`}
                  className="font-bold"
                >
                  {ContactData?.Hotline}
                </Link>{" "}
                chúng tôi sẽ liên hệ và tư vấn miễn phí cho quý khách.
              </>
            </p>
          </div>
        </div>
      </div>
      <SimilarProducts
        Type={Data?.level1}
        Data={Products}
        Category={Category}
      />
    </>
  );
};

export default ProductDetail;
