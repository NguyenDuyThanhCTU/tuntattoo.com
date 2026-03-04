import { PostProps } from "@assets/props/PropsPost";
import { ProductProps } from "@assets/props/PropsProduct";
import PageH1 from "@components/items/PageH1";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

type SearchProps = {
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  searchParams,
}: SearchProps): Promise<Metadata> {
  const keyword = searchParams["q"];
  return {
    title: `Kết quả tìm kiếm "${keyword}" - Tun Tattoo`,
  };
}

const SearchPage = async ({ searchParams }: SearchProps) => {
  const Products = await find("Products");
  const Posts = await find("Posts");

  const keyword = searchParams["q"];

  let products: ProductProps[] = [];
  let posts: PostProps[] = [];

  const sortProducts = Products?.filter((product: any) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const sortPosts = Products?.filter((product: any) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  );
  if (sortProducts && keyword) {
    products = sortProducts;
  }
  if (sortPosts && keyword) {
    posts = sortPosts;
  }

  return (
    <div className="font-LexendDeca">
      <PageH1 Content={`Kết quả tìm kiếm "${keyword}" - Tun Tattoo`} />
      <div className="bg-bgcontent py-10 ">
        <div className="d:w-default d:mx-auto p:w-auto p:mx-2">
          <h2 className="py-10 border-b text-center text-mainBold text-[25px]  font-bold">
            <span className="uppercase">Kết quả tìm kiếm cho</span> "{keyword}":
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
