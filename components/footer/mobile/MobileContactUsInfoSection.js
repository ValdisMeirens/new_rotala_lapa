import React from "react";
import personsvg from "../../../public/svg/smilebaby4svgrepocom.svg";
import atsvg from "../../../public/svg/attherateicon.svg";
import classes from "./MobileContactUsInfoSection.module.css";
import Image from "next/image";

function MobileContactUsInfoSection({ name, email }) {
  return (
    <div className={classes.container}>
      <div className={classes.sectioncontainer}>
        <div className={classes.svgcontainer}>
          <Image
            src={personsvg}
            alt="Person SVG"
            className={classes.svg}
            as="image"
          />
        </div>
        <div className={classes.text}>{name}</div>
      </div>
      <div className={classes.sectioncontainer}>
        <div className={classes.svgcontainer}>
          <Image
            src={atsvg}
            alt="Mail SVG"
            className={classes.svg}
            as="image"
          />
        </div>
        <div className={classes.text}>{email}</div>
      </div>
    </div>
  );
}

export default MobileContactUsInfoSection;
