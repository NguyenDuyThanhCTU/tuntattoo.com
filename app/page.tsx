import { SEOProps } from "@assets/props/PropsConfig";
import Feedback from "@components/client/Home/Feedback";
import HomeGALLERY from "@components/client/Home/HomeGALLERY";
import HomeIntro from "@components/client/Home/HomeIntro";
import HomeSlide from "@components/client/Home/HomeSlide";

import { LocalFindById } from "@components/items/Handle";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const Config = await find("Config");
  const SEOmetaTag: SEOProps = LocalFindById(Config, "SEOconfig");
  return {
    description: SEOmetaTag?.Description,
    keywords: SEOmetaTag?.Keyword,
    title: SEOmetaTag?.Title,
  };
}

const HomePage = async () => {
  const Slides = await find("Slides");
  const Config = await find("Config");
  const Posts = await find("Posts");
  const Products = await find("Products");
  const ProductCategory = await find("ProductCategory");
  const FeedBacks = await find("FeedBacks");

  return (
    <div className="">
      <HomeSlide Config={Config} Data={Slides} />
      <HomeGALLERY Data={Posts} />
      <HomeIntro Config={Config} />
      <Feedback Config={Config} Data={FeedBacks} />
    </div>
  );
};

export default HomePage;
