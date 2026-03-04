import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import { PostProps } from "@assets/props/PropsPost";
import { LocalFindById } from "@components/items/Handle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaPhone,
  FaPhoneAlt,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosStar, IoMdMail } from "react-icons/io";
import {
  IoChatboxEllipsesOutline,
  IoHomeSharp,
  IoLocation,
} from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { SiZalo } from "react-icons/si";

interface FooterProps {
  Config: Array<any>;
  Posts: PostProps[];
}

const Footer = ({ Config, Posts }: FooterProps) => {
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");
  const Policy = Posts?.filter((item) => item.level0 === "dieu-khoan-su-dung");

  const ContactItems = [
    {
      label: "Tun Tattoo Studio",
      value: ContactData?.CompanyAddress,
      link: ContactData?.direct,
      icon: <CiLocationOn />,
    },
    {
      label: "Phone",
      value: ContactData?.Hotline,
      link: `tel:${ContactData?.Hotline}`,
      icon: <MdOutlinePhoneInTalk />,
    },
    {
      label: "E-mails",
      value: ContactData?.Email,
      link: `mailto:${ContactData?.Email}`,
      icon: <CiMail />,
    },
    {
      label: "Chat",
      value: "https://zalo.me/0964364536",
      link: "https://zalo.me/0964364536",
      icon: <IoChatboxEllipsesOutline />,
    },
  ];

  return (
    <div>
      <div className="bg-[rgb(52,58,64)] ">
        <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 grid d:grid-cols-4 p:grid-cols-1 d:gap-0 p:gap-5 justify-between text-white py-10">
          {ContactItems?.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 justify-center  ">
              <div className="text-[35px]">{item.icon}</div>
              <div className="flex flex-col font-light text-[14px]">
                <div>{item.label}</div>
                <Link href={item.link}>{item.value}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[rgb(73,80,87)]">
        <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 flex flex-col items-center py-10 gap-5">
          <div>
            <Image
              src={ContactData?.LogoWebsite}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <p className="text-white font-light text-[14px] text-center">
            Bọn mình tự hào là tiệm xăm được đánh giá cao nhất tại Đà Nẵng và
            nằm trong top những tiệm xăm chất lượng nhất Việt Nam. Đội ngũ thân
            thiện của tụi mình luôn nỗ lực vượt mong đợi, để bạn rời tiệm với
            một nụ cười trên môi và một tác phẩm nghệ thuật trên làn da. Khi bạn
            mang đến một ý tưởng mới, các artist đầy sáng tạo và tay nghề cao
            của tụi mình sẽ đưa ra những tư vấn chuyên sâu, rồi biến ý tưởng đó
            thành một hình xăm đẹp như bạn mong muốn. Mọi quy trình đều được
            thực hiện nghiêm ngặt trong môi trường sạch sẽ, vô trùng và an toàn
            tuyệt đối.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
