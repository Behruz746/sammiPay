import React from "react";
import { ClientCard } from "./";
import { styles } from "../util/style";
import { clients } from "../util/constants";

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, idx) => (
          <ClientCard logo={client.logo} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Clients;
