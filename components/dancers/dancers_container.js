import Image from "next/image";
import styles from "./dancers_container.module.css";

const DancersContainer = ({ dancers }) => {
  const items = dancers.map((item) => {
    const src = `/dancers/${item.dejotaji_foto}`;
    let text = "";
    if (item.rotalnieks === 1) {
      if (item.dejotaji_dz === "virs") {
        text = "Rotaļnieks";
      } else {
        text = "Rotaļniece";
      }
    } else {
      if (item.dejotaji_dz === "virs") {
        text = "Topošais Rotaļnieks";
      } else {
        text = "Topošā Rotaļniece";
      }
    }

    return (
      <div key={item.dejotaji_id} className={styles.imagecontainer}>
        <Image
          src={src}
          className={styles.img}
          fill
          alt={item.dejotaji_id}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className={styles.overlay}>
          <div className={styles.name}>
            {item.dejotaji_name} {item.dejotaji_surname}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.items_container}>{items}</div>
    </div>
  );
};

export default DancersContainer;
