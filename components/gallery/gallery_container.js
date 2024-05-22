import Image from "next/image";
import styles from "./gallery_container.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const GalleryContainer = ({ data }) => {
  const section_array = data.map((item) => {
    const src = item.image_name;

    return (
      <section className={styles.container} key={item.id}>
        <Image src={src} fill className={styles.img} alt={item.name} />
        <Link href={`/galerija/albums/${item.id}`}>
          <div className={styles.text_container}>
            <motion.div
              initial={{ x: "50vw" }}
              whileInView={{ x: "0vw" }}
              transition={{ duration: 1.5, type: "spring", delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              {item.name.toUpperCase()}
            </motion.div>
            <motion.div
              initial={{ x: "-50vw" }}
              whileInView={{ x: "0vw" }}
              transition={{ duration: 1, type: "tween", delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.place}
            >
              {item.place}
            </motion.div>
            <motion.div
              initial={{ x: "50vw" }}
              whileInView={{ x: "0vw" }}
              transition={{ duration: 1, type: "tween", delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.date}
            >
              {item.date_time}
            </motion.div>
          </div>
        </Link>
      </section>
    );
  });

  return <>{section_array}</>;
};

export default GalleryContainer;
