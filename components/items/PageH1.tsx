import Image from "next/image";
import React from "react";
const PageH1 = ({ Content }: { Content: String }) => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/xedienmientay-cb391.appspot.com/o/z6504249484031_7144b2bb7ddc2b808b863b86bc586306.jpg?alt=media&token=da57a519-191b-4569-b9c4-ac808cfc534a)] bg-cover bg-center bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.58)] h-[300px] flex items-center justify-center ">
        <h1 className="text-center text-[30px] uppercase text-white font-bold ">
          {Content}
        </h1>
      </div>
    </div>
  );
};

export default PageH1;
