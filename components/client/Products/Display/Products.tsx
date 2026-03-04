import { ProductProps } from "@assets/props/PropsProduct";
import React from "react";
import ProductCard from "../ProductCard";

const Products = ({ Data }: { Data: ProductProps[] }) => {
  return (
    <div className="grid d:grid-cols-3 gap-5 p:grid-cols-2">
      {Data?.map((item, idx) => (
        <div key={idx}>
          <ProductCard Data={item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
