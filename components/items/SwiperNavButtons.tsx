import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";

import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <div
        className={`flex absolute top-0 duration-300 h-full items-center z-50 left-0 p-1 cursor-pointer`}
      >
        <div
          className="text-[25px] bg-white text-black rounded-full p-1"
          onClick={() => swiper?.slidePrev()}
        >
          <BiChevronLeftCircle />
        </div>
      </div>
      <div
        className={` flex absolute top-0  h-full items-center right-0 z-50  p-1 cursor-pointer`}
      >
        <div
          className="text-[25px] bg-white text-black rounded-full p-1 rotate-180"
          onClick={() => swiper?.slideNext()}
        >
          <BiChevronLeftCircle />
        </div>
      </div>
    </div>
  );
};
