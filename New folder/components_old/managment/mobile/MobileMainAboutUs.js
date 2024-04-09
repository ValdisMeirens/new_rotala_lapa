import MobileAboutUsInfo from "./MobileAboutUsInfo";
import classes from "./MobileMainAboutUs.module.css";
import InfoMobile from "../../header/common/InfoMobile";
import Diana from "../../../public/aboutus/Diana.png";
import Donats from "../../../public/aboutus/Donats.png";
import aboutUsMainImage from "../../../public/aboutus/par_mums_titulbilde.png";
// import aboutUsText from "../../../public/header/par-mums.png";
import Anta from "../../../public/aboutus/Anta.jpg";
import Valentina from "../../../public/aboutus/Valentina.jpg";
import Roze from "../../../public/aboutus/Roze.jpg";

const MobileMainAboutUs = (props) => {
  return (
    <div className={classes.aboutUsContainer}>
      <InfoMobile
        backgroundImage={aboutUsMainImage}
        backgroundImageText="Par Mums"
        // image={aboutUsText}
        // imageText="Par Mums teksts"
        text="VADĪBA"
      />

      <MobileAboutUsInfo
        picture={Diana}
        pictureText="Diana"
        name="Diāna Gavare"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītāja"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
      <MobileAboutUsInfo
        picture={Donats}
        pictureText="Donats"
        name="Donats Rudzits"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod"
      />
      <MobileAboutUsInfo
        picture={Anta}
        pictureText="Anta"
        name="Anta Grinvalde"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod"
      />
      <MobileAboutUsInfo
        picture={Valentina}
        pictureText="Valentīna"
        name="Valentīna Popova"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod"
      />
      <MobileAboutUsInfo
        picture={Roze}
        pictureText="Roze"
        name="Roze Kupča"
        role="TDA Rotaļa sirds"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod"
      />
    </div>
  );
};

export default MobileMainAboutUs;
