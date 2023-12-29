import classes from "./DancersContainer.module.css";
import Image from "next/image";
import { cloneElement, useState } from "react";
import fallbackSrc from "../../public/dejotaji/logo.webp";

import dancers from "../../public/dejotaji/titulbilde.webp";
// import dancerstext from "../../public/header/par-mums.png";
import InfoDesktop from "../header/common/InfoDesktop";

// import santaOverlay from "../../public/dejotaji/annija_blazevica_overlay.jpg";

const DancersContainer = ({ collective }) => {
  // console.log(collective);
  const collectiveArray = collective.map((collective) => {
    let image = `/dejotaji/${collective.dejotaji_foto}`;
    let rotalnieks =
      collective.dejotaji_dz == "virs"
        ? "Topošais Rotaļnieks"
        : "Topošā Rotaļniece";
    let gads = "";
    const [imageError, setImageError] = useState(false);

    if (collective.rotalnieks == 1) {
      rotalnieks =
        collective.dejotaji_dz == "virs" ? "Rotaļnieks" : "Rotaļniece";
      gads = collective.rotalnieks_year;
    }

    return (
      <div key={collective.dejotaji_id} className={classes.imagecontainer}>
        <Image
          src={imageError ? fallbackSrc : image}
          width={450}
          height={450}
          alt={collective.dejotaji_id}
          onError={() => setImageError(true)}
          className={classes.image}
          sizes="(max-width: 900px) 100vw,
          (max-width: 1200px) 35vw,
          (max-width: 1600px) 30vw,
          25vw"
        />

        <div className={classes.imagechangeoverlaytext}>
          {collective.dejotaji_name} {collective.dejotaji_surname}
          <br /> {rotalnieks} {gads}
        </div>

        {/* <div className={classes.name}>
          {collective.dejotaji_name} {collective.dejotaji_surname}
          {rotalnieks}
        </div> */}
      </div>
    );
  });

  return (
    <div>
      <InfoDesktop
        backgroundImage={dancers}
        backgroundImageText="Dejotāji"
        // image={dancerstext}
        // imageText="Dejotāji"
        text="DEJOTĀJI"
      />
      <div className={classes.container}>
        {/* <div className={classes.imagecontainer}>
          <Image
            src={"/dejotaji/annija_blazevica.jpg"}
            width={450}
            height={450}
            alt="test"
            onError={() => setImageError(true)}
            className={classes.imagechange}
            sizes="(max-width: 900px) 100vw,
            (max-width: 1200px) 35vw,
            (max-width: 1600px) 30vw,
            25vw"
          />

          <Image
            src={santaOverlay}
            width={450}
            height={450}
            alt="test"
            onError={() => setImageError(true)}
            className={classes.imagechange2}
            sizes="(max-width: 900px) 100vw,
            (max-width: 1200px) 35vw,
            (max-width: 1600px) 30vw,
            25vw"
          />

          <div className={classes.name}>Annija Blazevica</div>
        </div> */}
        {/* 
        <div className={classes.imagecontainer}>
          <Image
            src={"/dejotaji/annija_blazevica.jpg"}
            width={450}
            height={450}
            alt="test"
            onError={() => setImageError(true)}
            className={classes.imagechangeoverlay}
            sizes="(max-width: 650vw) 100vw,
            (max-width: 900vw) 50vw,
            (max-width: 1200px) 35vw,
            (max-width: 1600px) 30vw,
            25vw"
          />

          <div className={classes.imagechangeoverlaytext}>
            Annija Blazevica
            <br /> Rotaļniece 2023
          </div>
        </div> */}

        {collectiveArray}
      </div>
    </div>
  );
};

export default DancersContainer;
