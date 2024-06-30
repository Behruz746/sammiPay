import React from "react";
import { quotes } from "../../assets";

function FeedbackCard({ content, title, name }) {
  // get name's first string function
  let nameArr = (name) => {
    let newName = "";
    let arr = name.split(" ");
    arr.forEach((item) => {
      newName += item.slice(0, 1);
    });
    return newName;
  };
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 feature-card">
      <img
        width={42}
        height={27}
        src={quotes}
        alt="quotes img"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-dark-gradient rounded-full">
          <p className="text-[22px] font-semibold font-montserrat text-gradient">
            {nameArr(name)}
          </p>
        </div>
        <div className="flex  flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
