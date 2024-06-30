import React from "react";
import { apple, bill, google } from "../assets";
import { Button } from "./";
import { layout, styles } from "../util/style";

function Billing() {
  return (
    <section id="features" className={`${layout.sectionRevers}`}>
      <div className={`${layout.sectionImage} relative`}>
        <img
          width={710}
          height={658}
          src={bill}
          alt="bill img"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] w-[50%] h-[50%] top-0 -left-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-0 -left-1/2  rounded-full pink__gradient"></div>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Hisob-kitob va fakturial <br className="sm:block hidden" />
          osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] w-full mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          necessitatibus, commodi illum itaque harum cupiditate consequuntur
          odit ipsum magni debitis.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-[10px]">
          <img
            width={129}
            height={42}
            src={google}
            alt="google logo"
            className="w-[129px] h-[44px] object-contain cursor-pointer"
          />
          <img
            width={129}
            height={42}
            src={apple}
            alt="google logo"
            className="w-[129px] h-[42px] object-contain cursor-pointer"
          />
        </div>
        <Button styles={`mt-10`} />
      </div>
    </section>
  );
}

export default Billing;
