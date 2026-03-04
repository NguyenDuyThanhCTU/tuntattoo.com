import { find } from "@config/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery - Tun Tattoo",
};

const GalleryPage = async () => {
  const Posts = await find("Posts");
  const GalleryData = Posts?.filter((item) => item.level0 === "gallery");

  return (
    <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 py-10">
      <div className="text-center">
        <h2 className="font-bold text-[30px]">GALLERY</h2>
        <p>
          All the images are <strong>Tun Tattoo</strong> which were made at our
          tattoo shop. Please select the style of tattoo that you are looking
          for more images.
        </p>
      </div>
      <div className="mt-10 grid d:grid-cols-4 p:grid-cols-2 gap-5">
        {GalleryData.map((item, idx) => (
          <div className="" key={idx}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
