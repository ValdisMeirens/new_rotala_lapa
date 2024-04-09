import classes from "./MobileGallery.module.css";
import Image from "next/image";
import MobileGalleryHeader from "./MobileGalleryHeader";
import { useState } from "react";
import back from "../../../public/svg/back.svg";
import forward from "../../../public/svg/forward.svg";
import close from "../../../public/svg/close.svg";

const MobileGallery = (props) => {
  const [showPicture, setShowPicture] = useState(false);
  const [overlayPicture, setOverlayPicture] = useState("");
  const [pictureID, setPictureID] = useState(null);

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
          <div className={classes.container}>
            <Image
              src={`${FOLDER_NAME}/${IMAGE_PATH}`}
              alt="Galerija"
              width={400}
              height={400}
              className={classes.image}
              sizes="75vw"
            />
          </div>
        </div>
      );
    }
  );

  const headerImage = `${props.items[props.items.length - 1].FOLDER_NAME}/${
    props.items[props.items.length - 1].IMAGE_PATH
  }`;
  const headerText = props.items[1].NAME;

  return (
    <div className={classes.row}>
      {showPicture && (
        <div className={classes.fullpicturecontainer}>
          <div>
            <div onClick={closeHandler} className={classes.close}>
              <Image
                src={close}
                alt="Close SVG"
                className={classes.closesvg}
                sizes="10vw"
                quality={10}
              />
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
                width={600}
                height={600}
                className={classes.overlayImage}
                sizes="75vw"
              />
            </div>
            <div
              className={classes.navigator}
              onClick={onChangeForwardPictureHandler}
            >
              <Image
                src={forward}
                alt="Forward SVG"
                className={classes.forwardsvg}
                sizes="10vw"
                quality={10}
              />
            </div>
          </div>
        </div>
      )}

      <MobileGalleryHeader
        backgroundImage={headerImage}
        backgroundImageText="Galerija"
        imageText={headerText}
      />
      {items}
    </div>
  );
};

export default MobileGallery;
