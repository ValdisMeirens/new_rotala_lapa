import styles from "./aboutus_container.module.css";
import Image from "next/image";
import valdis from "@/public/aboutus/1.png";

const AboutUsContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src={valdis}
          fill
          alt="valdis"
          className={styles.img}
          sizes="50vw"
        />
      </div>
    </section>
  );
};

export default AboutUsContainer;
