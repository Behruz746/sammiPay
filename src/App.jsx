import React from "react";
// birhil classlarni kop takrorlamaslik uchun util filega obj qilib olish tafsiya etiladi
import { styles } from "./util/style";
import {
  Navbar,
  Home,
  Statistics,
  Contract,
  Billing,
  Business,
  Testimonials,
  CTA,
  Clients,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full">
      <div className={`${styles.padding} ${styles.flexStart}`}>
        <div className={`${styles.constainer}`}>
          <Navbar />
        </div>
      </div>
      <main>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.constainer}`}>
            <Home />
          </div>
        </div>
        <div className={`bg-primary ${styles.padding} ${styles.flexStart}`}>
          <div className={`${styles.constainer}`}>
            <Statistics />
            <Contract />
            <Billing />
            <Business />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
