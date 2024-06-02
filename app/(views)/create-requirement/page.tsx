"use client";
import React, { useState } from "react";
import Banner from "@/app/components/banner";
import SvgMail from "@/assets/svgs/SvgMail";
import SvgPalette from "@/assets/svgs/SvgPalette";
import SvgPhone from "@/assets/svgs/SvgPhone";
import SvgUser from "@/assets/svgs/SvgUser";
import Input from "@/core/components/Input";
import Select from "@/core/components/Select";
import Image from "next/image";
import plus from "@/assets/svgs/plus.svg";
import minus from "@/assets/svgs/minus.svg";

function CreateRequirement() {
  const options = [
    { title: "-- Chọn một chủ đề --", value: 0 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
    { title: "CNTT./ Đăng kí tạo dự án trên hệt thống", value: 1 },
  ];
  const questionsList = [
    {
      id: 1,
      tag: "User Interface",
      questions: [
        {
          id: 101,
          title: "Ex ratione and consectetur laborum suscipit?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.mi.",
        },
        {
          id: 102,
          title: "Molestiae suscipit Exercitation si or laudantium?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam.",
        },
        {
          id: 103,
          title: "Veniam magna for ut or adipisci veritatis dicta?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat.",
        },
        {
          id: 104,
          title: "Culpa aspernatur nisi adipisicing yet laudantium?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
        },
      ],
    },
    {
      id: 2,
      tag: "Payment Method",
      questions: [
        {
          id: 201,
          title: "Ex ratione and consectetur laborum suscipit?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste.iae, yet consequatur. Quisque ligula massa.",
        },
        {
          id: 202,
          title: "Molestiae suscipit ipsum non eos so autem dolores?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat, luctus a mi.",
        },
        {
          id: 203,
          title: "Veniam magna for ut or adipisci veritatis?",
          content:
            "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat.",
        },
      ],
    },
  ];
  const [tabActive, setTabActive] = useState(1);
  const [quesActive, setQuesActive] = useState(
    questionsList[0].questions[0].id
  );
  const breadcrumbs = [
    {
      title: "Home page",
      path: "/",
    },
    {
      title: "Create requirement",
      path: "/create-requirement",
    },
  ];
  return (
    <div className="mb-20">
      <Banner pageName="Create Requirement" breadcrumbs={breadcrumbs} />
      <div className="container-app">
        <h2 className="bg-secondary heading px-3 py-1">Tạo yêu cầu mới</h2>
        <p className="text-xs pt-2 pb-8">
          Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.
        </p>
        {/* <h3 className="text-2xl">Thông tin liên lạc</h3> */}
        <hr className="divide"></hr>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-[#fff]">
            <div className="p-[15px]">
              <ul className="flex flex-col md:flex-row">
                {questionsList.map((tab) => {
                  return (
                    <li key={tab.id} className="">
                      <button
                        onClick={() => setTabActive(tab.id)}
                        className={`${
                          tabActive === tab.id
                            ? "bg-[#218392] text-[#fff] hover:opacity-90"
                            : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#218392]"
                        } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] text-xs font-medium leading-5 tracking-[2.4px] uppercase`}
                      >
                        {tab.tag}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                {questionsList[tabActive - 1].questions.map((ques) => {
                  return (
                    <li key={ques.id} className="mb-4">
                      <button
                        onClick={() => {
                          if (quesActive === ques.id) {
                            setQuesActive(0);
                          } else {
                            setQuesActive(ques.id);
                          }
                        }}
                        className="flex gap-2 cursor-pointer py-[5px]"
                      >
                        <div className="shrink-0 w-4 h-4 md:w-5 md:h-5 pt-1 md:pt-0">
                          {quesActive !== ques.id ? (
                            <Image src={plus} alt="" />
                          ) : (
                            <Image src={minus} alt="" />
                          )}
                        </div>
                        <p className="text-sm lg:text-base text-[#4c4c4c] font-medium tracking-[0.72px] text-left">
                          {ques.title}
                        </p>
                      </button>
                      <div
                        className={`${
                          quesActive === ques.id
                            ? "max-h-[150px] md:max-h-[72px] opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        } p-[0_28px] transition-all duration-300`}
                      >
                        <p className="text-sm lg:text-base text-[#808080] font-light">
                          {ques.content}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <form>
            <div className="flex  mb-4">
              <Input
                id="email"
                icon={SvgMail}
                type="text"
                className="input-app"
                placeholder="E-mail"
              />
            </div>
            {/* Họ tên */}
            <div className="flex  mb-4">
              <Input
                id="fullname"
                type="text"
                icon={SvgUser}
                className="input-app"
                placeholder="Họ tên"
              />
            </div>
            {/* Số điện thoại */}
            <div className="flex mb-4">
              <div className="flex w-full gap-6">
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app flex-1"
                  placeholder="Số điện thoại"
                />
                <Input
                  id="phone"
                  type="text"
                  icon={SvgPhone}
                  className="input-app"
                  placeholder="Số máy lẻ"
                />
              </div>
            </div>
            <hr className="divide"></hr>
            {/* Chủ đề */}
            <div className="flex  mb-4">
              <Select option={options} icon={SvgPalette} />
            </div>
            <div className="flex gap-2">
              <button className="btn-app">Gửi đi</button>
              <button className="btn-success">Làm mới</button>
              <button className="btn-danger">Hủy bỏ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRequirement;
