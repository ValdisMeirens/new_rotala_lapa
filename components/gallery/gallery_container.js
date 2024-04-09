import Image from "next/image";
import styles from "./gallery_container.module.css";
import Link from "next/link";

const GalleryContainer = ({ data }) => {
  const section_array = data.map((item) => {
    const src = item.image_name;

    return (
      <section className={styles.container}>
        <Image src={src} fill className={styles.img} />
        <Link href={`/galerija/albums/${item.id}`}>
          <div className={styles.text_container}>
            <div className={styles.title}>{item.name.toUpperCase()}</div>
            <div className={styles.place}>{item.place}</div>
            <div className={styles.date}>{item.date_time}</div>
          </div>
        </Link>
      </section>
    );
  });

  return <>{section_array}</>;
};

export default GalleryContainer;
