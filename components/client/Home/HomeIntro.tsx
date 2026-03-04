import { ContactProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeIntro = ({ Config }: { Config: Array<any> }) => {
  const IntroItems = [
    {
      subLabel: "XĂM HÌNH TỰ TIN",
      label: "Vì sao nên chọn Tun Tattoo?",
      value:
        "Khi quyết định xăm hình, ai cũng mong muốn tìm được một nơi uy tín, an toàn và thật sự hiểu được ý nghĩa của từng nét mực. Tun Tattoo chính là lựa chọn lý tưởng cho những ai yêu thích sự chỉn chu và tinh tế. <br/> Với nhiều năm kinh nghiệm, Tun Tattoo tự hào sở hữu đội ngũ thợ xăm tay nghề cao, luôn lắng nghe và tôn trọng mong muốn của khách hàng. Mỗi tác phẩm tại Tun Tattoo không chỉ đẹp về hình thức mà còn chứa đựng những câu chuyện, cảm xúc riêng biệt.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/xedienmientay-cb391.appspot.com/o/Banner%201.jpg?alt=media&token=e074f47b-add1-487d-a8e5-2a51c4a7ffae",
    },
    {
      subLabel: "",
      label: "Tun Tattoo xăm được những phong cách nào?",
      value:
        "Tun Tattoo tự hào mang đến đa dạng phong cách xăm để bạn thoả sức thể hiện cá tính. Từ xăm mini nhỏ nhắn, xăm chữ tinh tế, đến xăm hình nghệ thuật như Realism (hình thật), Blackwork (đen trắng) hay Watercolor (mực nước) – tất cả đều được thực hiện tỉ mỉ và chuyên nghiệp. <br/> Dù bạn yêu thích sự đơn giản hay phức tạp, Tun Tattoo luôn sẵn sàng tư vấn và biến ý tưởng của bạn thành tác phẩm ưng ý nhất.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/xedienmientay-cb391.appspot.com/o/Banner%202.jpg?alt=media&token=e3558fb2-a148-4cc1-bd8c-ce6c72c89e21",
    },
    {
      subLabel: "AN TOÀN TUYỆT ĐỐI",
      label: "Xăm ở đây có an toàn không?",
      value:
        "Tun Tattoo luôn đặt an toàn của khách hàng lên hàng đầu. Toàn bộ dụng cụ đều được vô trùng kỹ lưỡng, kim và mực sử dụng đều là loại cao cấp, có nguồn gốc rõ ràng. Không gian tiệm sạch sẽ, quy trình xăm được thực hiện đúng chuẩn vệ sinh. Khi xăm tại Tun Tattoo, bạn hoàn toàn có thể yên tâm về chất lượng và sự an toàn cho sức khỏe.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/xedienmientay-cb391.appspot.com/o/Banner%203.jpg?alt=media&token=6aba4d95-320f-4d71-9e17-689e0448e940",
    },
  ];

  const ContactData: ContactProps = LocalFindById(Config, "contact");
  return (
    <div>
      {IntroItems?.map((item, idx) => (
        <div key={idx} className={idx % 2 === 0 ? "bg-gray-200" : "bg-white"}>
          <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2 py-20">
            {idx % 2 === 0 ? (
              <div className="grid gap-10 p:grid-cols-1 d:grid-cols-2 items-center ">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt="image"
                    width={600}
                    height={600}
                    className="w-full h-full hover:scale-105 duration-300 object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-light uppercase">{item.subLabel}</span>
                  <h3 className="uppercase font-bold text-[30px]">
                    {item.label}
                  </h3>
                  <div
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  ></div>
                  <div className="flex">
                    <Link
                      href={`tel:${ContactData?.Hotline}`}
                      className="uppercase font-bold text-[22px] rounded-full border-2 border-black px-4 py-2 hover:bg-black hover:text-white duration-300"
                    >
                      Đặt lịch hẹn
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-10 p:grid-cols-1 d:grid-cols-2 items-center ">
                <div className="flex flex-col gap-5">
                  <span className="font-light uppercase">{item.subLabel}</span>
                  <h3 className="uppercase font-bold text-[30px]">
                    {item.label}
                  </h3>
                  <p className="font-light">{item.value}</p>
                  <div className="flex">
                    <Link
                      href={`tel:${ContactData?.Hotline}`}
                      className="uppercase font-bold text-[22px] rounded-full border-2 border-black px-4 py-2 hover:bg-black hover:text-white duration-300"
                    >
                      Đặt lịch hẹn
                    </Link>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt="image"
                    width={600}
                    height={600}
                    className="w-full h-full hover:scale-105 duration-300"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeIntro;
