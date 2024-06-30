import React, { useState } from "react";
import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { logo, menu, close } from "../assets";

const NavList = ({ containerStyle, itemStyle, active, setActive }) => {
  const activeHandler = (id) => setActive(id);

  return (
    <ul className={`${containerStyle}`}>
      {navigationLinks.map((link, idx) => (
        <li
          key={idx}
          className={`font-montserrat text-[16px] text-white text-nowrap text-center cursor-pointer transition-all duration-500 ${itemStyle} ${
            link.id === active ? "text-[#898787]" : "text-white"
          }`}
          onClick={() => activeHandler(link.id)}
        >
          <a href={`#${link.id}`}> {link.title}</a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");
  const menuToggleHandler = () => setToggleNav((prev) => !prev);

  return (
    <div className={`w-full ${styles.flexBetween}`}>
      <a href="#home">
        <img
          width={140}
          height={38}
          src={logo}
          alt="logo"
          className="w-[100px] h-[auto] cursor-pointer sm:w-[140px] sm:h-[auto]"
        />
      </a>

      <NavList
        containerStyle={"sm:flex sm:gap-[20px] hidden"}
        itemStyle={"hover:text-[#898787]"}
        active={active}
        setActive={setActive}
      />

      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <button
          type="button"
          className="p-[10px] bg-lightBlue rounded-[8px]"
          onClick={menuToggleHandler}
        >
          <img
            width={30}
            height={30}
            src={toggleNav ? close : menu}
            alt="nav icon"
            className="w-[30px] h-[30px]"
          />
        </button>

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          }  absolute top-[80px] right-0 left-0 my-2 w-full bg-black-gradient sidebar`}
        >
          <NavList
            containerStyle={"flex gap-[0px] flex-col w-full"}
            itemStyle={"w-full hover:bg-[#1e1c1c60] py-[20px]"}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
