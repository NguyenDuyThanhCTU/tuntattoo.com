import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";
import { ProductProps } from "@assets/props/PropsProduct";
import Display from "@components/client/Products/Display";

import PageTitle from "@components/client/Products/PageTitle";
import PageH1 from "@components/items/PageH1";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import slugify from "slugify";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");

  let TitlePage;
  if (params.slug === "cua-hang") {
    TitlePage = "Cửa Hàng";
  } else {
    TitlePage = ProductCategory?.find(
      (item) =>
        slugify(item.level0, { lower: true, locale: "vi" }) === params.slug
    )?.level0;
  }
  return {
    title: `${TitlePage} -  Tun Tattoo`,
  };
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const Products: ProductProps[] = await find("Products");
  const Posts: PostProps[] = await find("Posts");

  let TitlePage: any;
  let Data: ProductProps[] = [];
  if (params.slug === "cua-hang") {
    Data = Products;
  } else {
    Data = Products?.filter((item) => item.level0 === params.slug);
    TitlePage = ProductCategory?.find(
      (item) =>
        slugify(item.level0, { lower: true, locale: "vi" }) === params.slug
    )?.level0;
  }

  return (
    <>
      <PageH1 Content={TitlePage} />
      <div className="bg-bgcontent  min-h-screen">
        <div className="d:w-default d:mx-auto p:w-auto p:mx-2">
          <h2 className="py-10 border-b text-center text-mainBold text-[25px]  font-bold">
            <span className="uppercase">{TitlePage}</span>
          </h2>
        </div>
        <Display
          Data={Data}
          Posts={Posts}
          ProductCategory={ProductCategory}
          Slug={params.slug}
        />
      </div>
    </>
  );
};

export default ProductPage;
