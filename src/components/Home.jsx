import React from "react";
import { Button } from "./";
import { styles } from "../util/style";
import { discount, robot } from "../assets";

function Home() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} items-center`}
    >
      <div
        className={`w-full flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row item-center gap-2 py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img
            width={32}
            height={32}
            src={discount}
            alt="discount icon"
            className="w-[32px] height-[32px]"
          />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Chegirma
            <span className="text-white">1 Oylik</span> hisob uchun
          </p>
        </div>
        <div className="w-full ">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />
            <span className="text-gradient"> To'lov Usuli</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[550px] w-full mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
          dignissimos accusantium veritatis doloremque deserunt quis iste illo
          deleniti maxime!
        </p>

        <Button styles={"mt-5"} />
      </div>
      {/* Animation img */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
        <img
          width={696}
          height={696}
          src={robot}
          alt="robot image"
          className="w-[100%] h-[100%] relative z-10  rounded-sm"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "></div>
      </div>
    </section>
  );
}

export default Home;
