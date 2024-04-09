import styles from "./album_container.module.css";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import back from "@/public/svg/back.svg";
import forward from "@/public/svg/forward.svg";
import close from "@/public/svg/close.svg";

const AlbumContainer = ({ gallery }) => {
  const [showPicture, setShowPicture] = useState(false);
  const [overlayPicture, setOverlayPicture] = useState("");
  const [pictureID, setPictureID] = useState(null);

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    800: 2,
  };

  const closeHandler = (e) => {
    document.querySelector("body").classList.remove("dark");
    setShowPicture(false);
  };

  const onClickHandler = (e, id) => {
    document.querySelector("body").classList.add("dark");
    setPictureID(id);
    setOverlayPicture(map1.get(id));
    setShowPicture(true);
  };

  const onChangeForwardPictureHandler = (e) => {
    if (pictureID !== lastMapKey) {
      setOverlayPicture(map1.get(pictureID + 1));
      setPictureID(pictureID + 1);
    } else {
      setOverlayPicture(map1.get(0));
      setPictureID(0);
    }
  };

  const onChangeBackPictureHandler = (e) => {
    if (pictureID !== firstMapKey) {
      setOverlayPicture(map1.get(pictureID - 1));
      setPictureID(pictureID - 1);
    } else {
      setOverlayPicture(map1.get(lastMapKey));
      setPictureID(lastMapKey);
    }
  };

  const map1 = new Map();

  gallery.map(({ IMAGE_PATH }, index) => {
    const picture = IMAGE_PATH;
    map1.set(index, picture);
  });

  const sortedMap = new Map([...map1].sort((a, b) => a[0] - b[0]));
  const [firstMapKey, firstMapValue] = [...sortedMap][0];
  const [lastMapKey, lastMapValue] = [...sortedMap][sortedMap.size - 1];

  const items = gallery.map(({ ID, IMAGE_PATH }, index) => {
    return (
      <div
        className={styles.imagecontainer}
        key={ID}
        onClick={(e) => {
          onClickHandler(e, index);
        }}
      >
        <div className={styles.imageparanetcontainer}>
          <Image
            src={IMAGE_PATH}
            alt="Galerija"
            width={400}
            height={400}
            className={styles.img}
          />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {showPicture && (
        <div className={styles.fullpicturecontainer}>
          <div>
            <div onClick={closeHandler} className={styles.close}>
              <Image src={close} alt="Close SVG" className={styles.closesvg} />
            </div>
          </div>
          <div className={styles.overlaycontainer}>
            <div
              className={styles.navigator}
              onClick={onChangeBackPictureHandler}
            >
              <Image
                src={back}
                alt="Back SVG"
                className={styles.backsvg}
                sizes="10vw"
                quality={10}
              />
            </div>
            <div className={styles.overlaypicturecontainer}>
              <Image
                src={overlayPicture}
                alt="Galerija"
                width={2000}
                height={2000}
                className={styles.overlayImage}
              />
            </div>
            <div
              className={styles.navigator}
              onClick={onChangeForwardPictureHandler}
            >
              <Image
                src={forward}
                alt="Back SVG"
                className={styles.forwardsvg}
                sizes="10vw"
                quality={10}
              />
            </div>
          </div>
        </div>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.row}
        columnClassName={styles.rowcolumn}
      >
        {items}
      </Masonry>
    </div>
  );
};

export default AlbumContainer;
