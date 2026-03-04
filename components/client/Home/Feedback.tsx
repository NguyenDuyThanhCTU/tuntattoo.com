"use client";
import { useStateProvider } from "@context/StateProvider";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";

import Image from "next/image";
import { Drawer, Rate } from "antd";
import Link from "next/link";
import FeedbackForm from "./Feedback/FeedbackForm";
import { FeedbackProps, SocialMediaProps } from "@assets/props/PropsConfig";

const Feedback = ({
  Data,
  Config,
}: {
  Data: FeedbackProps[];
  Config: Array<any>;
}) => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const { setFormData } = useStateProvider();
  const SocialMedia: SocialMediaProps = Config?.find(
    (item) => item.id === "SocialMedia"
  );
  return (
    <div className="py-10 flex flex-col items-center bg-gray-100">
      <div className="font-BriemHand uppercase font-semibold text-[22px]">
        Đánh giá của khách hàng
      </div>
      <div className="h-[2px] bg-red-500 w-40 mt-2"></div>
      <div className="mt-5 d:w-[1200px] p:w-[100vw]">
        <div className="py-10 d:block p:hidden">
          <Swiper
            loop={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            centeredSlidesBounds={true}
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, FreeMode]}
            className="mySwiper "
          >
            <div className="">
              {Data?.map((item, index) => {
                const star = parseFloat(item.star);

                return (
                  <SwiperSlide key={index} className="mb-10">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className=" rounded-full">
                          <Image
                            src={
                              item.image
                                ? item.image
                                : "https://firebasestorage.googleapis.com/v0/b/garagebinh-46c14.appspot.com/o/avt.png?alt=media&token=37ccd5c9-f04d-437f-921a-9bee82e98d71"
                            }
                            alt="avatar"
                            width={50}
                            height={50}
                            className="w-[50px] h-[50px] object-cover object-center  rounded-full"
                          />
                        </div>
                        <div className="">
                          <p className="text-[18px] font-normal text-mainRedHover">
                            {" "}
                            {item.name}
                          </p>
                          <p className="text-[14px] italic text-gray-400">
                            {item.date}
                          </p>
                        </div>
                      </div>

                      <div className="mt-1">
                        <Rate disabled allowHalf defaultValue={star} />
                      </div>
                      <div className="mt-2">"{item.feedback}"</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="py-10 d:hidden p:block px-2">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            centerInsufficientSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={30}
            slidesPerGroup={1}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, FreeMode]}
            className="mySwiper "
          >
            <div className="">
              {Data?.map((item: any, index: number) => {
                const star = parseFloat(item.star);

                return (
                  <SwiperSlide key={index} className="mb-10">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className=" rounded-full">
                          <Image
                            src={
                              item.image
                                ? item.image
                                : "https://firebasestorage.googleapis.com/v0/b/garagebinh-46c14.appspot.com/o/avt.png?alt=media&token=37ccd5c9-f04d-437f-921a-9bee82e98d71"
                            }
                            alt="avatar"
                            width={50}
                            height={50}
                            className="w-[50px] h-[50px] object-cover object-center  rounded-full"
                          />
                        </div>
                        <div className="">
                          <p className="text-[18px] font-normal text-mainRedHover">
                            {" "}
                            {item.name}
                          </p>
                          <p className="text-[14px] italic text-gray-400">
                            {item.date}
                          </p>
                        </div>
                      </div>

                      <div className="mt-1">
                        <Rate disabled allowHalf defaultValue={star} />
                      </div>
                      <div className="mt-2">"{item.feedback}"</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>

        {/* <div className="  flex cursor-pointer gap-5 justify-center text-white">
          <div
            className="py-3 px-7 bg-blue-500 hover:bg-blue-700  uppercase font-bold duration-300"
            onClick={() => setIsOpenModel(true)}
          >
            Viết bài đánh giá
          </div>
          <Link
            href={
              SocialMedia?.facebook
                ? SocialMedia.facebook
                : "https://www.facebook.com/profile.php?id=61557240230155"
            }
            target="_blank"
            className="py-3 px-7 border-main border text-main hover:text-white hover:bg-mainRed duration-300 uppercase font-bold"
          >
            Xem Thêm
          </Link>
        </div>
        <>
          <Drawer
            footer={null}
            title="Đánh giá của bạn"
            placement="bottom"
            open={isOpenModel}
            height={700}
            onClose={() => {
              setIsOpenModel(false);
              setFormData({});
            }}
            destroyOnClose={true}
          >
            <FeedbackForm setIsOpen={setIsOpenModel} />
          </Drawer>
        </> */}
      </div>
    </div>
  );
};

export default Feedback;
