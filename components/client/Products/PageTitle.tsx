import { CategoryProps } from "@assets/props/Props";
import { ProductProps } from "@assets/props/PropsProduct";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

interface PageTitleProps {
  Slug: string;
  ProductCategory: CategoryProps[];
  Products: ProductProps[];
}

const PageTitle = ({ Slug, ProductCategory, Products }: PageTitleProps) => {
  let TitlePage;
  if (Slug === "cua-hang") {
    TitlePage = "Cửa Hàng";
  } else {
    TitlePage = ProductCategory?.find(
      (item) => slugify(item.level0, { lower: true, locale: "vi" }) === Slug
    )?.level0;
  }
  return (
    <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 flex justify-between items-center py-1 text-mainYellow text-[22px] d:flex-row p:flex-col">
      <div className=" flex items-center gap-2 ">
        <Link className="hover:text-white duration-300" href={`/`}>
          Trang Chủ
        </Link>
        <span>/</span>
        <span>{TitlePage}</span>
      </div>
      <div>
        <span>Hiển thị tất cả {Products?.length} kết quả</span>
      </div>
    </div>
  );
};

export default PageTitle;
