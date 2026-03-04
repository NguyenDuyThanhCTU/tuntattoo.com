"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

import Link from "next/link";
import { ContactProps } from "@assets/props/PropsConfig";
import { SlideProps } from "@assets/props/Props";
import { SwiperNavButtons } from "@components/items/SwiperNavButtons";

interface HomeSlideProps {
  Data: SlideProps[];
  Config: Array<any>;
}

const HomeSlide = ({ Data, Config }: HomeSlideProps) => {
  const mobile = Data?.filter((item) => item.platform === "mobile");
  const desktop = Data?.filter((item) => item.platform === "desktop");

  const ContactData: ContactProps = Config?.find(
    (item) => item.id === "contact"
  );

  return (
    <div>
      <div className="">
        <Swiper
          effect={"fade"}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination, EffectFade, Autoplay]}
          className="custom-pagination relative"
        >
          {Data.map((item, idx) => (
            <SwiperSlide className="" key={idx}>
              <div className="w-full d:h-[80vh] p:h-[30vh]">
                <Image
                  src={item.image}
                  alt="banner"
                  width={2000}
                  height={1000}
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <div>
                <SwiperNavButtons />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlide;
