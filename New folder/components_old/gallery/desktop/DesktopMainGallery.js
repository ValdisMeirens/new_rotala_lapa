import classes from "./DesktopMainGallery.module.css";
import Link from "next/link";
import InfoDesktop from "../../header/common/InfoDesktop";
import Image from "next/image";
import galleryTitlePicture from "../../../public/gallery_header/galerijas_titulbilde.webp";
// import imageAboutUs from "../../../public/header/GALERIJA.png";

const DesktopMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(
    ({ ID, NAME, IMAGE_NAME, AUTHOR, PLACE, DATE_TIME }) => {
      return (
        <Link key={ID} href={`/albumi/galerija/${ID}`}>
          <div className={classes.container}>
            <Image
              src={`/gallery_header/${IMAGE_NAME}`}
              alt={NAME}
              className={classes.image}
              width={2000}
              height={2000}
              sizes="100vw"
            />
            <div className={classes.textcontainer}>
              <div className={classes.title}>{NAME}</div>
              <div className={classes.place}>{PLACE}</div>
              <div className={classes.datetime}>{DATE_TIME}</div>
              <div className={classes.author}>{AUTHOR}</div>
            </div>
          </div>
        </Link>
      );
    }
  );

  return (
    <div className={classes.galleryContainer}>
      <InfoDesktop
        backgroundImage={galleryTitlePicture}
        backgroundImageText="Galerija"
        // image={imageAboutUs}
        // imageText="Galerija teksts"
        text="GALERIJA"
      />
      {galleryItems}
    </div>
  );
};

export default DesktopMainGallery;
