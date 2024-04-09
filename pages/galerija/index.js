import GalleryHeader from "@/components/gallery/gallery_header";
import styles from "./gallery.module.css";
import GalleryContainer from "@/components/gallery/gallery_container";
import Footer from "@/components/footer/footer";
import { server } from "@/components/config/constants";
export default function Gallery({ data }) {
  return (
    <div className={styles.container}>
      <GalleryHeader />
      <GalleryContainer data={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/gallery_headers`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
