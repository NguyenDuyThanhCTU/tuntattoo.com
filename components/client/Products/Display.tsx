"use client";
import React, { useState } from "react";
import Category from "./Display/Category";
import Products from "./Display/Products";
import { ProductProps } from "@assets/props/PropsProduct";
import { CategoryProps } from "@assets/props/Props";
import PageTitle from "./PageTitle";
import { PostProps } from "@assets/props/PropsPost";
interface DisplayProps {
  Data: ProductProps[];
  Slug: string;
  ProductCategory: CategoryProps[];
  Posts: PostProps[];
}
const Display = ({ Data, Posts, Slug, ProductCategory }: DisplayProps) => {
  const [DataShow, setDataShow] = useState<ProductProps[]>(Data);
  return (
    <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 mt-5">
      {/* <PageTitle
        Slug={Slug}
        ProductCategory={ProductCategory}
        Products={DataShow}
      /> */}
      <div className="grid p:grid-cols-1 d:grid-cols-5 gap-5">
        <div>
          <Category Products={Data} Posts={Posts} />
        </div>
        <div className="col-span-4">
          <Products Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default Display;
