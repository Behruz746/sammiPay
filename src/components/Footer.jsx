import React from "react";
import { FooterLink, SocialLink } from "./";
import { styles } from "../util/style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../util/constants";

function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            width={250}
            height={72}
            src={logo}
            alt="logo"
            className="w-[250px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            To'lovlarni oson, ishonchli va xafsiz qilishing usuli.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link, idx) => (
            <FooterLink link={link} key={idx} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3y45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright 2024 SammiPay. All Right Reserved
        </p>

        <div className="flex flex-row md:mt-0 mt-6 gap-6">
          {socialMedia.map((link, idx) => (
            <SocialLink link={link} key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
