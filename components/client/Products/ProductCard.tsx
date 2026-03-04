import { ProductProps } from "@assets/props/PropsProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ Data }: { Data: ProductProps }) => {
  return (
    <div>
      <div className="w-full aspect-square border-2 border-mainYellow rounded-t-md relative ">
        <Link href={`/product/${Data?.url}`}>
          <div className="overflow-hidden aspect-square">
            <Image
              src={Data?.image}
              alt="product"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-t-md hover:scale-105 duration-300"
            />
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-b-md">
        <div className="text-center w-full d:text-[22px] p:text-[16px] tracking-[2px] text-mainYellow py-2 px-4">
          <Link
            href={`/product/${Data?.url}`}
            className="hover:text-mainBold font-semibold truncate2 h-[63px] text-black "
          >
            {" "}
            {Data?.title}
          </Link>
        </div>
        <div className="flex">
          <div className="bg-lime-500 px-3 py-1 rounded-bl-md rounded-tr-md text-white font-semibold">
            {Data?.price ? `${Data?.price}₫` : "Đang cập nhật"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
