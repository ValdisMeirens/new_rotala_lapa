import classes from "./MobileMainGallery.module.css";
import Link from "next/link";
import InfoMobile from "../../header/common/InfoMobile";
import galerijaTitulbilde from "../../../public/gallery_header/galerijas_titulbilde.webp";
// import galerija from "../../../public/header/GALERIJA.png";
import { motion } from "framer-motion";

import Image from "next/image";

const cardVariants = {
  hidden: { x: "-300px" },
  visible: {
    x: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.3 },
  },
};

function TitleFadeIn({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className={classes.textcontainer}
    >
      {children}
    </motion.div>
  );
}

const MobileMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(
    ({ ID, NAME, IMAGE_NAME, AUTHOR, PLACE, DATE_TIME }) => {
      return (
        <Link key={ID} href={`/albumi/galerija/${ID}`}>
          <div className={classes.container}>
            <Image
              src={`/gallery_header/${IMAGE_NAME}`}
              alt={NAME}
              className={classes.image}
              width={600}
              height={600}
              sizes="75vw"
            />

            <TitleFadeIn>
              <div className={classes.title}>{NAME}</div>
              <div className={classes.place}>{PLACE}</div>
              <div className={classes.datetime}>{DATE_TIME}</div>
              <div className={classes.author}>{AUTHOR}</div>
            </TitleFadeIn>
          </div>
        </Link>
      );
    }
  );

  return (
    <div className={classes.galleryContainer}>
      <InfoMobile
        backgroundImage={galerijaTitulbilde}
        backgroundImageText="Galerija"
        // image={galerija}
        // imageText="Galerija Teksts"
        text="GALERIJA"
      />
      {galleryItems}
    </div>
  );
};

export default MobileMainGallery;
