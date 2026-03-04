"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const AboutUs = () => {
  const [isOpen, setOpen] = useState("");
  const QuestionItems = [
    {
      Question: "LÀM THẾ NÀO ĐỂ TÔI CÓ THỂ ĐẶT LỊCH?",
      Answer:
        '<p><span style="font-weight:400;">Bạn có thể liên hệ với chúng tôi để đặt lịch hẹn theo những cách sau:</span></p><ul><li><span style="font-weight:400;">Gọi điện thoại cho chúng tôi theo số </span><a href="tel:0964 364 536"><span style="font-weight:400;">0964 364 536</span></a></li><li><span style="font-weight:400;">Gửi thư điện tử cho chúng tôi: </span><a href="mailto:tuanluongtattoo@gmail.com"><span style="font-weight:400;">tuanluongtattoo@gmail.com</span></a></li><li>Liên hệ qua Instagram cho chúng tôi tại <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tuntats"><span style="color:hsl(240,75%,60%);"><strong>Đây</strong></span></a></li><li>Liên hệ qua facebook của chúng tôi tại <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tuntattoostudio"><span style="color:hsl(240,75%,60%);"><strong>Đây</strong></span></a></li><li>Liên hệ qua whatsapp tại <a target="_blank" rel="noopener noreferrer" href="https://wa.me/0964364536"><span style="color:hsl(240,75%,60%);"><strong>Đây</strong></span></a></li><li>Liên hệ qua Zalo của chúng tôi tại <span style="color:hsl(240,75%,60%);"><strong>Đây</strong></span></li></ul><h2><span style="color:hsl(0,0%,0%);"><strong>Hoặc có thể đến trực tiếp Tun Tattoo Studio để được tư vấn:</strong></span></h2><ul><li>Địa chỉ Studio 1: 46/1 đường 2/9, Hải Châu, Đà Nẵng&nbsp;</li></ul><div class="flex items-center gap-2 justify-center "><ul><li><div class="text-[35px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg></div></li></ul></div><ul><li>Địa chỉ Studio 2: <span style="background-color:rgb(255,255,255);color:rgb(8,27,58);font-family:SegoeuiPc, &quot;Segoe UI&quot;, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;Lucida Grande&quot;, Roboto, Ubuntu, Tahoma, &quot;Microsoft Sans Serif&quot;, Arial, sans-serif;font-size:15px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:0.2px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">59 quang trung, Nam Phước</span></span></li></ul><p><span style="font-weight:400;">Xin vui lòng cho chúng tôi biết mong muốn của bạn về thiết kế hình xăm, gửi cho chúng tôi một số hình minh họa về ý tưởng của bạn và cho chúng tôi biết ngày bạn muốn đặt lịch. Điều này sẽ giúp chúng tôi xử lý yêu cầu của bạn một cách nhanh nhất và hiệu quả nhất.</span></p>',
    },
    {
      Question: "QUY TRÌNH ĐẶT LỊCH VÀ THỰC HIỆN HÌNH XĂM NHƯ THẾ NÀO?",
      Answer:
        "Để có được hình xăm ưng ý, bạn có thể đến trực tiếp cửa hàng của chúng tôi để gặp gỡ và trao đổi với các nhân viên. Chúng tôi có đội ngũ trợ lý và thợ xăm chuyên nghiệp, sẵn sàng lắng nghe ý kiến và tư vấn cho bạn. Bạn không nhất thiết phải hẹn trước khi đến, nhưng nếu bạn hẹn trước thì sẽ không phải đợi lâu. Sau khi nói chuyện với các nhân viên của chúng tôi, bạn có thể xếp lịch để làm hình xăm hoặc xem bản thiết kế mà bạn yêu cầu (nếu có). Đôi khi, chúng tôi cần phải đo đạc hoặc kiểm tra vùng da bạn muốn xăm. Quá trình này hoàn toàn miễn phí, nhưng bạn phải đặt cọc nếu muốn giữ chỗ để làm hình xăm hoặc để chúng tôi bắt đầu thiết kế cho bạn.",
    },
    {
      Question: "BAO NHIÊU TUỔI THÌ TÔI CÓ THỂ THỰC HIỆN HÌNH XĂM?",
      Answer:
        "Bạn phải đủ 18 tuổi và có giấy tờ tùy thân hợp lệ để được xăm hình tại Tun Tattoo Studio. Chúng tôi không xăm hình cho trẻ vị thành niên, trừ khi có sự đồng ý của cha mẹ.",
    },
    {
      Question: "CHI PHÍ CHO MỘT HÌNH XĂM ĐƯỢC TÍNH NHƯ THẾ NÀO?",
      Answer:
        "Chi phí xăm hình phụ thuộc vào kích cỡ, độ phức tạp và vị trí đặt hình xăm của bạn. Chúng tôi có mức phí tối thiểu là 500.000 vnd và có thể cao hơn tùy theo yêu cầu. Tun Tattoo Studio không phải là nơi xăm hình giá rẻ, nhưng chúng tôi là shop xăm uy tín và chất lượng nhất. Hãy nhớ rằng, bạn chỉ có một lần để xăm hình lên vị trí nào đó trên cơ thể. Hãy lựa chọn sáng suốt!",
    },
    {
      Question: "LÀM THẾ NÀO ĐỂ TÔI CÓ THỂ BIẾT ĐƯỢC MỨC GIÁ KHOẢNG?",
      Answer: `Bạn có thể gửi một email/tin nhắn Facebook hoặc instagram cho chúng tôi, mô tả rõ ràng ý tưởng của bạn kèm theo hình minh họa và vị trí xăm trên cơ thể cũng như kích thước đo bằng centimet. Chúng tôi sẽ báo giá khoảng cho bạn. <br/>

 

Nếu bạn có ý tưởng khó thực hiện và muốn biết được giá của hình xăm chính xác nhất, bạn nên đến cửa hàng gặp gỡ trực tiếp để nhận được tư vấn (miễn phí) bởi các nghệ sĩ xăm hình của chúng tôi. Đội ngũ Tun Tattoo Studio luôn sẵn sàng hỗ trợ và cung cấp bất cứ thông tin bạn cần.  <br/>

Nếu ý tưởng của bạn khá phức tạp, chúng tôi cũng rất chào đón bạn tới cửa hàng và nói chuyện với một trong những trợ lý hoặc nghệ sĩ của chúng tôi, nếu họ có mặt. 12 thợ xăm, của chúng tôi luôn sẵn lòng giúp bạn cung cấp thông tin bạn cần.`,
    },
    {
      Question:
        "TÔI CÓ CẦN THIẾT PHẢI ĐẶT CỌC NẾU TÔI QUYẾT ĐỊNH ĐẶT LỊCH THỰC HIỆN HÌNH XĂM KHÔNG?",
      Answer:
        "Câu trả lời là có. Tiền đặt cọc là điều kiện tiên quyết để có thể đặt lịch thực hiện hình xăm. Tiền đặt cọc sẽ được hoàn lại một nửa khi cuộc hẹn bị hủy bỏ hoặc sẽ được trừ vào giá cuối cùng khi bạn thực hiện hình xăm.",
    },
    {
      Question: "TÔI NÊN CHUẨN BỊ NHỮNG GÌ CHO BUỔI XĂM HÌNH CỦA MÌNH?",
      Answer: `Chúng tôi khuyên bạn nên ăn uống đầy đủ trước khi tới và nhớ đừng để cơ thể rơi vào tình trạng mất nước. Nếu bạn bắt đầu cảm thấy chóng mặt, hãy uống soda. Đường sẽ là “bạn” của chúng ta trong tình huống này. Đi bộ quanh Hà Nội/Hội An vào những ngày mùa hè, không uống nước và sau đó tới thực hiện hình xăm với một dạ dày trống rỗng hoàn toàn không tốt chút nào. <br/>

Bạn cũng được khuyến khích không nên tham gia các buổi tiệc tùng vào tối hôm trước bởi vì cồn có thể làm tăng khả năng chảy máu kéo dài tới 24 giờ. Máu cũng làm loãng sắc tố da của chúng ta, ảnh hưởng đến cả sự xuất hiện của hình xăm cũng như quá trình lành hình. Hãy sạc đầy điện thoại hoặc máy tính bảng của bạn và không mang theo 50 người bạn thân của bạn (chỉ nên mang theo 1-2 người bạn thân nhất), giữ cho tâm trạng bình tĩnh và thoải mái nhất. Không có gì phải căng thẳng – đó chỉ là một hình xăm thôi mà!`,
    },
    {
      Question: "XĂM CÓ ĐAU KHÔNG?",
      Answer:
        "Việc xăm hình có thể gây ra cảm giác đau đớn. Xăm là một hình thức ghi dấu bằng mực, từ đó làm thay đổi sắc tố dưới lớp đầu tiên của làn da của bạn. Hình xăm càng lớn thì càng mất nhiều thời gian để thực hiện, vì vậy hình xăm nhỏ sẽ ít đau hơn hình xăm lớn! Nhưng đó là một loại đau đớn tốt. Não bộ của bạn tạo ra endorphin khi bạn cảm thấy đau và cơ thể bạn thích endorphin, vì vậy, điều đó thật đau đớn, nhưng bạn sẽ thích thú.",
    },
    {
      Question: "TÔI CÓ THỂ SỬ DỤNG KEM LÀM TÊ CHỨ?",
      Answer:
        "Bất kỳ loại kem làm tê nào cũng đều không được khuyến khích vì chúng tôi sẽ làm thay đổi chất da của bạn. Các loại kem làm tê thông thường chỉ kéo dài khoảng một tiếng cân bằng, điều đó thực sự không quá lâu.",
    },
    {
      Question: "SẼ MẤT BAO LÂU ĐỂ HÌNH XĂM CÓ THỂ BÌNH PHỤC HOÀN TOÀN?",
      Answer:
        "Phải mất từ hai đến bốn tuần để hình xăm “lành” bề mặt, nhưng phải mất hàng tháng để da tái sinh hoàn toàn.",
    },
    {
      Question: "TÔI CẦN CHĂM SÓC HÌNH XĂM MỚI NHƯ THẾ NÀO?",
      Answer: `<div class="elementor-tab-content elementor-clearfix elementor-active" style="display:block;" id="elementor-tab-content-23911" data-tab="11" role="region" aria-labelledby="elementor-tab-title-23911"><p><span style="font-weight:400;">Cách chăm sóc hình xăm có thể khác nhau tùy theo từng cửa hàng. Bạn sẽ được hướng dẫn cụ thể sau khi xăm xong. Để hình xăm đẹp và bền, xin vui lòng thực hiện theo các bước chăm sóc đơn giản sau đây của chúng tôi.</span></p><p><span style="font-weight:400;">HƯỚNG DẪN CHĂM SÓC HÌNH SAU XĂM</span></p><p><span style="font-weight:400;">Hãy để lớp bọc ngoài trong khoảng 30 phút rồi tháo ra, nhẹ nhàng rửa sạch hình xăm bằng nước ấm và xà bông kháng khuẩn dạng lỏng . Không dùng xà phòng hoặc khăn ướt.</span></p><p><span style="font-weight:400;">Nhẹ nhàng lau khô hình xăm bằng khăn giấy sạch. Không chà sát hay lau mạnh.</span></p><p><span style="font-weight:400;">Hãy rửa tay sạch trước khi chạm vào hình xăm. Không bọc lại hình xăm bằng gì cả.</span></p><p><span style="font-weight:400;">Sau 3 ngày, hãy thoa một lớp thật mỏng thuốc mỡ Vitamin A &amp; D lên hình xăm. Tiếp tục thoa 1-2 lần mỗi ngày cho đến khi hình xăm lành hoàn toàn.</span></p><p><span style="font-weight:400;">Hình xăm cần oxy để phục hồi nên hãy để nó thoáng khí, vảy là một phần bình thường của quá trình lành hình xăm. Đừng bao giờ cọ hay gãi hình xăm khi nó đang lành – điều này sẽ làm hỏng nó.</span></p><p><span style="font-weight:400;">Bạn không nên bơi ở bể bơi, tắm biển hoặc ngâm nước nóng trong khoảng 2 tuần.</span></p><p><span style="font-weight:400;">Tránh ánh nắng trực tiếp chiếu vào hình xăm. Sau khi hình xăm lành hoàn toàn, bạn có thể thoa kem chống nắng lên hình xăm khi phải ra nắng lâu. Không thoa kem chống nắng lên hình xăm khi chúng chưa lành hoàn toàn.</span></p><p><span style="font-weight:400;">Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với Tun Tattoo Studio của chúng tôi để được giải đáp. Chúc bạn sở hữu một hình xăm đẹp.</span></p></div>`,
    },
    {
      Question: "ĐIỀU GÌ LÀM MỜ HÌNH XĂM?",
      Answer:
        "Hình xăm có thể bị mờ dần vì nhiều lý do. Phổ biến nhất là tiếp xúc trực tiếp với ánh nắng mặt trời trong thời gian dài. Các yếu tố khác là sắc thái, chất lượng và kỹ thuật của mực và hình xăm. Đây là một số nguyên nhân chính gây phai màu, màu sáng thường phai nhanh hơn. Bên cạnh đó cũng có những nguyên nhân khác như chăm sóc da tổng thể kém, vị trí đặt hình xăm…",
    },
    {
      Question: "BAO LÂU TÔI CÓ THỂ CẠO LÔNG VÙNG HÌNH XĂM LẠI?",
      Answer:
        "Đừng cạo lông ở vị trí hình xăm cho đến khi nó lành hoàn toàn. Việc cạo lông có thể làm hỏng hình xăm của bạn và gây ra sẹo hoặc nhiễm trùng. Bạn hãy đợi cho đến khi vảy bong hết và không còn cảm thấy ngứa hoặc sưng tấy trên hình xăm (thường là 2-3 tuần).",
    },
    {
      Question: "HÌNH THỨC THANH TOÁN NÀO SẼ ĐƯỢC SỬ DỤNG?",
      Answer:
        "Bạn có thể thanh toán bằng tiền mặt / chuyển khoản / quẹt thẻ. Đối với những hình xăm quá lớn, bạn hãy liên hệ với trợ lý của chúng tôi để trao đổi về hình thức thanh toán.",
    },
    {
      Question: "TÔI CẦN TỚI ĐỊA CHỈ NÀO ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP?",
      Answer: `<p><span style="font-weight:400;">Bạn có thể tới một trong những địa chỉ Studio của chúng tôi tại:</span></p><ul><li><span style="font-weight:400;">Địa chỉ Studio 1: 46/1 đường 2/9, Hải Châu, Đà Nẵng </span></li><li>Địa chỉ Studio 2:<strong> </strong><span style="background-color:rgb(255,255,255);color:rgb(8,27,58);font-family:SegoeuiPc, &quot;Segoe UI&quot;, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;Lucida Grande&quot;, Roboto, Ubuntu, Tahoma, &quot;Microsoft Sans Serif&quot;, Arial, sans-serif;font-size:15px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:0.2px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">59 quang trung, Nam Phước</span></span></li></ul><p><span style="font-weight:400;">Chúng tôi mở cửa 7 ngày mỗi tuần, từ 9 giờ sáng đến 9 giờ tối.</span></p>`,
    },
    {
      Question: "THỜI GIAN MỞ CỬA LÀ KHI NÀO?",
      Answer:
        "Chúng tôi luôn sẵn sàng phục vụ bạn từ 9 giờ sáng đến 9 giờ tối, 7 ngày một tuần. Chúng tôi rất sẵn lòng được làm việc cùng bạn.",
    },
    {
      Question: "TÔI CÓ NÊN TIP CHO NGHỆ SĨ CỦA MÌNH KHÔNG?",
      Answer:
        "Tiền tip cho nghệ sĩ xăm hình là một cách thể hiện sự đánh giá cao của bạn đối với tác phẩm mà họ thực hiện cho bạn. Nếu bạn hài lòng với dịch vụ nhận được, bạn nên tip cho nghệ sĩ của mình.",
    },
  ];
  return (
    <div className="d:w-[900px] p:w-auto d:mx-auto p:mx-2 font-Oswald py-20">
      <h2 className="text-center d:text-[45px] font-bold p:text-[20px]  py-10">
        Hỏi đáp về Xăm
      </h2>
      {QuestionItems.map((item, idx) => (
        <div key={idx} className="">
          <div
            className="w-full flex justify-between items-center pt-4 pb-2 border-b  text-gray-700 cursor-pointer"
            onClick={() => {
              if (isOpen === item.Question) {
                setOpen("");
              } else {
                setOpen(item.Question);
              }
            }}
          >
            <div className="font-bold text-[20px]">{item.Question}</div>
            <div
              className={`text-[25px] ${
                isOpen === item.Question && "rotate-90 duration-300"
              }`}
            >
              <FaChevronRight />
            </div>
          </div>
          {isOpen === item.Question && (
            <div
              className={`${
                isOpen === item.Question ? "h-max " : "h-0 "
              }  font-LexendDeca py-5 duration-300`}
              dangerouslySetInnerHTML={{ __html: item.Answer }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
