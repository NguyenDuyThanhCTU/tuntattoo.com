"use client";
import { PostProps } from "@assets/props/PropsPost";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { SwiperNavButtons } from "@components/items/SwiperNavButtons";
import Link from "next/link";

const HomeGALLERY = ({ Data }: { Data: PostProps[] }) => {
  const GalleryData = Data?.filter((item) => item.level0 === "gallery");
  return (
    <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 py-10">
      <div className="text-center">
        <h2 className="font-bold text-[30px]">BỘ SƯU TẬP</h2>
        <p>
          Tất cả hình ảnh đều là những hình xăm do <strong>Tun Tattoo</strong>{" "}
          thực hiện tại cửa hàng của chúng tôi. <br /> Vui lòng chọn phong cách
          hình xăm mà bạn muốn xem.
        </p>
      </div>
      <div className="mt-10 d:block p:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination, EffectFade, Autoplay]}
          className="custom-pagination relative"
        >
          {GalleryData.map((item, idx) => (
            <SwiperSlide className="" key={idx}>
              <Link href={item.url}>
                <div className="hover:bg-slate-200 duration-300">
                  <div className="">
                    <Image
                      src={item.image}
                      alt="banner"
                      width={2000}
                      height={1000}
                      className="w-full h-full object-cover object-center "
                    />
                  </div>
                  <div className="text-center py-5 font-semibold text-[18px] uppercase">
                    {item.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div>
            <SwiperNavButtons />
          </div>
        </Swiper>
      </div>
      <div className="mt-10 d:hidden p:block">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination, EffectFade, Autoplay]}
          className="custom-pagination relative"
        >
          {GalleryData.map((item, idx) => (
            <SwiperSlide className="" key={idx}>
              <Link href={item.url}>
                <div className="hover:bg-slate-200 duration-300">
                  <div className="">
                    <Image
                      src={item.image}
                      alt="banner"
                      width={2000}
                      height={1000}
                      className="w-full h-full object-cover object-center "
                    />
                  </div>
                  <div className="text-center py-5 font-semibold text-[18px] uppercase">
                    {item.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div>
            <SwiperNavButtons />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeGALLERY;
