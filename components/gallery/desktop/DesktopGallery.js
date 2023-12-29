import classes from "./DesktopGallery.module.css";
import Image from "next/image";
import { useState } from "react";
import back from "../../../public/svg/back.svg";
import forward from "../../../public/svg/forward.svg";
import close from "../../../public/svg/close.svg";
import Masonry from "react-masonry-css";

const DesktopGallery = (props) => {
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

  props.items.map(({ ID, FOLDER_NAME, IMAGE_PATH }, index) => {
    const picture = `${FOLDER_NAME}/${IMAGE_PATH}`;
    map1.set(index, picture);
  });
  const sortedMap = new Map([...map1].sort((a, b) => a[0] - b[0]));
  const [firstMapKey, firstMapValue] = [...sortedMap][0];
  const [lastMapKey, lastMapValue] = [...sortedMap][sortedMap.size - 1];

  const items = props.items.map(
    ({ ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID }, index) => {
      return (
        <div
          className={classes.imageContainer}
          key={ID}
          onClick={(e) => {
            onClickHandler(e, index);
          }}
        >
          <div className={classes.imageparanetcontainer}>
            <Image
              src={`${FOLDER_NAME}/${IMAGE_PATH}`}
              alt="Galerija"
              width={400}
              height={400}
              className={classes.image}
              sizes="20vw"
            />
          </div>
        </div>
      );
    }
  );

  return (
    <div className={classes.container}>
      {showPicture && (
        <div className={classes.fullpicturecontainer}>
          <div>
            <div onClick={closeHandler} className={classes.close}>
              <Image src={close} alt="Close SVG" className={classes.closesvg} />
            </div>
          </div>
          <div className={classes.overlaycontainer}>
            <div
              className={classes.navigator}
              onClick={onChangeBackPictureHandler}
            >
              <Image
                src={back}
                alt="Back SVG"
                className={classes.backsvg}
                sizes="10vw"
                quality={10}
              />
            </div>
            <div>
              <Image
                src={overlayPicture}
                alt="Galerija"
                width={2000}
                height={2000}
                className={classes.overlayImage}
                sizes="10vw"
              />
            </div>
            <div
              className={classes.navigator}
              onClick={onChangeForwardPictureHandler}
            >
              <Image
                src={forward}
                alt="Back SVG"
                className={classes.forwardsvg}
                sizes="10vw"
                quality={10}
              />
            </div>
          </div>
        </div>
      )}
      {/* <div className={classes.row}>{items}</div> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.row}
        columnClassName={classes.rowcolumn}
      >
        {items}
      </Masonry>
    </div>
  );
};

export default DesktopGallery;
