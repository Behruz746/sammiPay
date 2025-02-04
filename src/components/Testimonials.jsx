import React from "react";
import { FeedbackCard } from "./";
import { styles } from "../util/style";
import { feedbacks } from "../util/constants";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      <div className="absolute z-0 w-[60%] h-[60%] right-[0%] rounded-full blue__gradient bottom-40 opacity-[0.1]" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Odamlar biz haqimizda qanday fikrda</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            minima, iusto praesentium non fugiat placeat nobis.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] md:gap-10 sm:gap-5 gap-0">
        {feedbacks.map((feedback, idx) => (
          <FeedbackCard {...feedback} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
