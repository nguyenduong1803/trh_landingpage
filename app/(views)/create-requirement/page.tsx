"use client";
import React, { useState } from "react";
import BannerCustom from "@/app/components/BannerCustom";
import Image from "next/image";
import send from "@/assets/svgs/send.svg";
import refresh from "@/assets/svgs/refresh.svg";
import cancel from "@/assets/svgs/cancel.svg";

import channel from "@/assets/svgs/channel.svg";
import attach from "@/assets/svgs/attach.svg";
import note from "@/assets/svgs/note.svg";
import SelectCustoms from "@/app/components/SelectCustoms/SelectCustoms";
import typeService from "@/assets/svgs/typeof-service.svg";
import request from "@/assets/svgs/request.svg";
import location from "@/assets/svgs/location.svg";
import host from "@/assets/svgs/host.svg";
import quantity from "@/assets/svgs/quantity.svg";
import quantity2 from "@/assets/svgs/quantity2.svg";
import time from "@/assets/svgs/time.svg";
import childService from "@/assets/svgs/childService.svg";
import detailService from "@/assets/svgs/detailService.svg";
import receivingDepartment from "@/assets/svgs/receiving-department.svg";
import suportTeam from "@/assets/svgs/suportTeam.svg";
import suporter from "@/assets/svgs/suporter.svg";
import tagName from "@/assets/svgs/tag-name.svg";

const options = [
  { title: "CNTT / Đặt lịch họp", value: "datphonghop" },
  { title: "CNTT / Đặt văn phòng phẩm", value: "datvpp" },
  { title: "CNTT / Báo hỗ trợ dịch vụ CNTT", value: "dvcntt" },
];
const questionsList = [
  {
    id: 1,
    tag: "Mô tả",
    content: `Hi phòng CNTT!

Máy tính của tôi bị lỗi WIN, nhờ anh/chị cài lại giúp

Trân trọng`,
  },
  {
    id: 2,
    tag: "Giải pháp/Khắc phục",
    content: `WIN bị lỗi

    Giải pháp: cài lại win`,
  },
  {
    id: 3,
    tag: "Đánh giá của khách hàng",
    content: `Rất tốt`,
  },
];
const locations = [
  { title: "Trung tâm hội nghị Quốc gia", value: "tthnqg" },
  { title: "Phòng họp 1", value: "ph1" },
  { title: "Phòng họp 2", value: "ph2" },
];

const processingDepartment = {
  channel: [
    {
      title: "Kênh 1",
      value: "kenh1",
    },
    {
      title: "Kênh 2",
      value: "kenh2",
    },
    {
      title: "Kênh 3",
      value: "kenh3",
    },
  ],
  typeOfService: [
    {
      title: "Sửa chữa thiết bị",
      value: "suachuathietbi",
    },
    {
      title: "Cài đặt phần mềm",
      value: "caidatphanmem",
    },
    {
      title: "Cấp thiết bị",
      value: "capthietbi",
    },
  ],
  childService: [
    {
      title: "Sửa chữa laptop",
      value: "sualaptop",
    },
    {
      title: "Sửa máy in",
      value: "suamayin",
    },
    {
      title: "Cấp màn hình rời",
      value: "capmanhinh",
    },
  ],
  detailService: [
    {
      title: "Sửa chữa laptop",
      value: "sualaptop",
    },
    {
      title: "Sửa máy in",
      value: "suamayin",
    },
    {
      title: "Cấp màn hình rời",
      value: "capmanhinh",
    },
  ],
  receivingDepartment: [
    {
      title: "Bộ phận hạ tầng",
      value: "infrastructure",
    },
    {
      title: "Bộ phận lập trình",
      value: "development",
    },
  ],
  supportTeam: [
    {
      title: "Team helpdesk",
      value: "helpdesk",
    },
    {
      title: "Team Frontend",
      value: "frontend",
    },
    {
      title: "Team Backend",
      value: "backend",
    },
  ],
  handler: [
    {
      title: "Đức Hoằng",
      value: "handler1",
    },
    {
      title: "Văn Thắng",
      value: "handler2",
    },
    {
      title: "Nguyễn Quân",
      value: "handler3",
    },
  ],
};

function CreateRequirement() {
  const [tabActive, setTabActive] = useState(1);
  const [quesActive, setQuesActive] = useState(questionsList[0].id);
  const [pickOption, setPickOption] = useState("");
  const [paramOption, setParamOption] = useState("");
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

  const [iValue, setIValue] = useState("");

  return (
    <div className="mb-20">
      <BannerCustom pageName="Create Requirement" breadcrumbs={breadcrumbs} />
      <div className="container-app p-[180px_24px_220px]">
        <h2 className="font-poppins bg-[#0755d1] p-[25px] text-[28px] text-[#fff] font-semibold text-center uppercase">
          Tạo yêu cầu mới
        </h2>
        <div className="w-full max-w-[700px] mx-auto">
          <div className="w-full flex m-[50px_0_100px]">
            <SelectCustoms
              options={options}
              iValue={iValue}
              setIValue={setIValue}
              icon={request}
              placeholder="Chọn một chủ đề"
              setPickOption={setPickOption}
            />
          </div>
        </div>
        <hr className="divide"></hr>
        <form action={""} className="mt-[50px] w-full max-w-[700px] mx-auto ">
          {pickOption === "datphonghop" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="flex">
                <SelectCustoms
                  options={locations}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={location}
                  placeholder="Vị trí phòng họp"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={time}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Bắt đầu"
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={time}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Kết thúc"
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={quantity}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Người tham gia"
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={host}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Người chủ trì"
                  required
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={host}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Yêu cầu thêm"
                  required
                />
              </div>
              <div className="relative flex">
                <Image
                  src={note}
                  alt=""
                  className="absolute top-5 left-[28px] max-w-[16px] max-h-[16px]"
                />
                <textarea
                  name=""
                  id=""
                  className="common-textarea"
                  placeholder="Nội dung cuộc họp"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <SelectCustoms
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={attach}
                  placeholder="Đính kèm tài liệu, văn bản"
                  setPickOption={setParamOption}
                />
              </div>
            </div>
          ) : pickOption === "datvpp" ? (
            <div className="flex flex-col gap-5 m-[30px_0_30px]">
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={tagName}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="text"
                  className="common-input"
                  placeholder="Tên sản phẩm"
                />
              </div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-[28px] w-[16px] flex justify-center">
                  <Image
                    src={quantity2}
                    alt=""
                    className="max-w-[16px] max-h-[16px]"
                  />
                </div>
                <input
                  type="number"
                  className="common-input"
                  placeholder="Số lượng"
                />
              </div>
              <div className="w-full">
                <SelectCustoms
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={receivingDepartment}
                  placeholder="Bộ phận tiếp nhận"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustoms
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={suporter}
                  placeholder="Người xử lý"
                  setPickOption={setParamOption}
                />
              </div>
              <div className="w-full">
                <SelectCustoms
                  options={processingDepartment.typeOfService}
                  iValue={iValue}
                  setIValue={setIValue}
                  icon={attach}
                  placeholder="Đính kèm tài liệu, văn bản"
                  setPickOption={setParamOption}
                />
              </div>
            </div>
          ) : (
            pickOption === "dvcntt" ? (
              <div className="flex flex-col gap-5 m-[30px_0_30px]">
                <div className="w-full flex items-center gap-6">
                  <div className="w-full flex">
                    <SelectCustoms
                      options={processingDepartment.channel}
                      iValue={iValue}
                      setIValue={setIValue}
                      icon={channel}
                      placeholder="Kênh"
                      setPickOption={setParamOption}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={typeService}
                    placeholder="Loại dịch vụ"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={childService}
                    placeholder="Dịch vụ con"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={detailService}
                    placeholder="Dịch vụ chi tiết"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={receivingDepartment}
                    placeholder="Bộ phận tiếp nhận"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={suportTeam}
                    placeholder="Đội ngũ hỗ trợ"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={suporter}
                    placeholder="Người xử lý"
                    setPickOption={setParamOption}
                  />
                </div>
                <div className="w-full">
                  <SelectCustoms
                    options={processingDepartment.typeOfService}
                    iValue={iValue}
                    setIValue={setIValue}
                    icon={attach}
                    placeholder="Đính kèm tài liệu, văn bản"
                    setPickOption={setParamOption}
                  />
                </div>
              </div>
            ) : <div className="h-[100px]"></div>
          )}

          {/* <div className="bg-[#fff]">
            <div className="">
              <ul className="flex flex-col md:flex-row">
                {questionsList.map((tab) => {
                  return (
                    <li key={tab.id} className="">
                      <button
                        onClick={() => setTabActive(tab.id)}
                        className={`${
                          tabActive === tab.id
                            ? "bg-[#0755d1] text-[#fff] hover:opacity-90"
                            : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#0755d1]"
                        } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] text-xs font-medium leading-5 tracking-[2.4px] uppercase`}
                      >
                        {tab.tag}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <pre className="font-poppins text-sm text-[#1d2024]">
                  {questionsList[tabActive - 1].content}
                </pre>
              </div>
            </div>
          </div> */}

          <div className="flex justify-center gap-4 mt-[50px]">
            <a
              href="/create-requirement/process"
              className="btn-common btn-send"
            >
              <Image src={send} alt="" />
              Gửi đi
            </a>
            <button className="btn-common btn-success btn-refresh">
              <Image src={refresh} alt="" />
              Làm mới
            </button>
            <button className="btn-common btn-danger btn-cancel">
              <Image src={cancel} alt="" />
              Hủy bỏ
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CreateRequirement;
