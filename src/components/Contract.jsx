import React from "react";
import { card } from "../assets";
import { Button } from "./";
import { layout, styles } from "../util/style";

function Contract() {
  return (
    <section id="product" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Bir necha oson qadamda <br className="sm:block hidden" />
          kontrakt tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] w-full mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          necessitatibus, commodi illum itaque harum cupiditate consequuntur
          odit ipsum magni debitis.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImage}`}>
        <img
          width={710}
          height={622}
          src={card}
          alt="card img"
          className="w-[100%] h-[100%]"
        />
        <div className="absolute z-[3] w-[50%] h-[50%] top-0 right-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-0 right-1/2  rounded-full pink__gradient"></div>
      </div>
    </section>
  );
}

export default Contract;
