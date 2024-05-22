import styles from "./aboutus_container.module.css";
import Image from "next/image";
import valdis from "@/public/aboutus/valdis.jpg";

const AboutUsContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textcontainer}>
        TE ŠOBRĪD NEKĀ NAV, TĀPĒC TEV IR IESPĒJA APSKATĪT VALDIS MEIRĒNS BILDI.
        ES NEVĒLOS LIELĪTIES, BET VIŅŠ NOSKRĒJA 21KM{" "}
      </div>
      <div className={styles.imagecontainer}>
        <Image src={valdis} fill alt="valdis" className={styles.img} />
      </div>
    </section>
  );
};

export default AboutUsContainer;
