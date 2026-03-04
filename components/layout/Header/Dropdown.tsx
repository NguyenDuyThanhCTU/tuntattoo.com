import { CategoryProps } from "@assets/props/Props";
import Link from "next/link";

import slugify from "slugify";

export const Dropdown = ({
  Parent,
  ServiceItem,
}: {
  Parent: string;
  ServiceItem: CategoryProps;
}) => {
  return (
    <div className="flex flex-col top-5 absolute  left-0   ">
      <div className="bg-none w-full h-3 "></div>
      <div className="group-hover:opacity-100 group-hover:visible group-hover:transform-none  dropdown border border-gray-300  border-t-[4px] border-t-mainOrange  relative bg-white min-w-[200px] h-0">
        <div className="absolute w-2 h-2 bg-mainOrange rotate-45  -top-2 left-[20%] -z-10"></div>
        <div className=" flex flex-col w-full bg-white ">
          {ServiceItem?.level1?.map((LV1Item: string, LV1idx: number) => {
            const LV1Slug = slugify(LV1Item, { locale: "vi", lower: true });
            return (
              <div
                className=" w-full group/submenu relative text-black "
                key={LV1idx}
              >
                <Link
                  href={`
                  /${Parent}/${LV1Slug}`}
                  className="duration-300   hover:bg-main  flex items-center justify-between hover:text-white p-2 "
                >
                  {LV1Item}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
