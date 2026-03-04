import { ProductProps } from "@assets/props/PropsProduct";
import ProductDetail from "@components/client/Products/ProductDetail";
import PageH1 from "@components/items/PageH1";

import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import slugify from "slugify";
type ProductDetailProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const Products: ProductProps[] = await find("Products");
  const Data: any = Products.find(
    (item) => item.url.split("?poid")[0] === params.slug
  );
  return {
    title: Data?.title,
    description: Data?.description,
  };
}
export async function generateStaticParams() {
  const res: ProductProps[] = await find("Products");
  return res?.map((product) => ({
    slug: product.url,
  }));
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
  const Products: ProductProps[] = await find("Products");
  const Data: any = Products.find(
    (item) => item.url.split("?poid")[0] === params.slug
  );

  const ProductCategory = await find("ProductCategory");
  const Config = await find("Config");
  return (
    <>
      <PageH1 Content={Data?.title} />
      <div className="bg-bgcontent  min-h-screen">
        <div className="d:w-[1370px] d:mx-auto p:w-auto p:mx-2 py-5">
          <ProductDetail
            Data={Data}
            Products={Products}
            Config={Config}
            Category={ProductCategory}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
