import React from "react";
import { features } from "../util/constants";
import { Button, FeatureCard } from "./";
import { layout, styles } from "../util/style";

function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantiring <br className="sm:block hidden" />
          pulni halqilamiz.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
          amet repellendus nisi similique exercitationem blanditiis vero esse
          voluptate cupiditate.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col gap-6`}>
        {features.map((feature, idx) => (
          <FeatureCard {...feature} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Business;
