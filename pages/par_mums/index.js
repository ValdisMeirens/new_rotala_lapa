import AboutUsHeader from "@/components/aboutus/aboutus_header";

import styles from "./aboutus.module.css";
import Footer from "@/components/footer/footer";
import { server } from "@/components/config/constants";
import AboutUsContainer from "@/components/aboutus/aboutus_container";

export default function Dancers() {
  return (
    <div className={styles.container}>
      <AboutUsHeader />
      <AboutUsContainer />
      <Footer />
    </div>
  );
}
