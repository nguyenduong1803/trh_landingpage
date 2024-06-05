"use client";

import { useState } from "react";
import Image from "next/image";
// import bg from "@/assets/imgs/Timeline/timeline_bg.jpg";
import chevron from "@/assets/svgs/chevron-white.svg";

const timelineData = [
  {
    id: 1,
    value: "Tiếp nhận yêu cầu",
    label: "Tiếp nhận yêu cầu",
  },
  {
    id: 2,
    value: "Phân tích yêu cầu",
    label: "Phân tích yêu cầu",
  },
  {
    id: 3,
    value: "Xử lý",
    label: "Xử lý",
  },
  {
    id: 4,
    value: "Khách hàng đánh giá/phản hồi ",
    label: "Khách hàng đánh giá/phản hồi ",
  },
  {
    id: 5,
    value: "Đóng yêu cầu",
    label: "Đóng yêu cầu",
  },
];

export default function Timeline() {
  const [nodeActive, setNodeActive] = useState(1);

  return (
    <div
      className="timeline-bg h-[609px] flex justify-center items-center"
      //   style={{ background: `no-repeat url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="w-full px-[30px]">
        <div>
          <p className="font-poppins text-xl sm:text-2xl text-[#fff] tracking-[3px] text-center">
            QUY TRÌNH HỖ TRỢ
          </p>
          <p className="font-poppins text-[24px] sm:text-[40px] text-[#fff] font-bold leading-[32px] sm:leading-[52px] tracking-[2px] text-center uppercase mt-2">
            DỊCH VỤ CÔNG NGHỆ THÔNG TIN
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 sm:mt-10">
            <button
              onClick={() => {
                if (nodeActive > 1) {
                  setNodeActive(nodeActive - 1);
                }
              }}
              className="p-2"
            >
              <Image src={chevron} width={11} alt="" className="rotate-180" />
            </button>
            <div className="w-full max-w-[700px] h-[60px] flex justify-center relative">
              {timelineData.map((item) => {
                return (
                  <p
                    key={item.id}
                    className={`absolute top-0 w-full h-full text-sm xsss:text-base sm:text-xl text-[#fff] font-extralight leading-[30px] text-center ${
                      nodeActive === item.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-3"
                    } transition-all duration-700`}
                  >
                    {item.value}
                  </p>
                );
              })}
            </div>
            <button
              onClick={() => {
                if (nodeActive < timelineData.length) {
                  setNodeActive(nodeActive + 1);
                }
              }}
              className="p-2"
            >
              <Image src={chevron} width={11} alt="" />
            </button>
          </div>
        </div>

        <div
          id="current-x"
          className="relative shrink-0 w-6 mx-auto mt-[135px] sm:mt-[105px]"
        >
          <div
            id="move-slide"
            className={`absolute w-[94vw] transition-all duration-[450ms] ${
              nodeActive === 1
                ? "translate-x-[0]"
                : nodeActive === 2
                ? "translate-x-[calc(-25%+6px)]"
                : nodeActive === 3
                ? "translate-x-[calc(-50%+12px)]"
                : nodeActive === 4
                ? "translate-x-[calc(-75%+18px)]"
                : nodeActive === 5 && "translate-x-[calc(-100%+24px)]"
            }`}
          >
            <ul className="relative w-full flex items-center justify-between">
              <div
                className="absolute w-[99%] left-[4px] h-[4px] bg-[rgb(255,255,255,.1)] flex justify-start items-center z-0"
                color="#6c757d"
              >
                <span
                  className={`${
                    nodeActive === 1
                      ? "w-0"
                      : `w-[${25*(nodeActive-1)+"%"}]`
                  } h-full bg-[#fff] z-0 transition-all duration-[450ms]`}
                ></span>
              </div>
              {timelineData.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setNodeActive(item.id);
                    }}
                    key={item.id}
                    className={`w-6 h-6 border-[3px] border-solid border-[#c5cddf] rounded-[100px] z-20 flex justify-center items-center cursor-pointer`}
                  >
                    <span className="font-poppins absolute top-[-35px] text-xs text-[#fff] font-medium leading-6 text-center whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="w-[18px] h-[18px] bg-[#0755d1] rounded-[100px] z-20 flex justify-center items-center">
                      {nodeActive !== item.id && nodeActive <= item.id && (
                        <div className="w-[12px] h-[12px] bg-[#c5cddf] rounded-[100px] flex justify-center items-center">
                          <span className="w-[6px] h-[6px] bg-[#0755d1] rounded-[100px] z-10"></span>
                        </div>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
