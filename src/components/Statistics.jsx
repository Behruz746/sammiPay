import React from "react";
import { styles } from "../util/style";
import { statisticsData } from "../util/constants";

function Statistics() {
  return (
    <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statisticsData.map((state) => (
        <div
          key={state.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          <h4 className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {state.value}
          </h4>
          <p className="font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3">
            {state.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Statistics;
