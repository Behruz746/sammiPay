import React from "react";

function FooterLink({ link }) {
  return (
    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
      <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
        {link.title}
      </h4>
      <ul className="mt-4 flex flex-col gap-4">
        {link.links.map((item, idx) => (
          <li
            key={idx}
            className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLink;
