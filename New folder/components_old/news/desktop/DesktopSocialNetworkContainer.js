import classes from "./DesktopSocialNetworkContainer.module.css";
import Image from "next/image";
import instawhite from "../../../public/svg/instagramsvgrepocom.svg";
import facebookwhite from "../../../public/svg/facebooksvgrepocom.svg";
import youtubewhite from "../../../public/svg/youtubesvgrepocom.svg";
import instagreen from "../../../public/svg/instagramsvgrepocomgreen.svg";
import facebookgreen from "../../../public/svg/facebooksvgrepocomgreen.svg";
import youtubegreen from "../../../public/svg/youtubesvgrepocomgreen.svg";
import DesktopNewSocialNetwork from "./DesktopNewSocialNetwork";

const DesktopSocialNetworkContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imagecontainer}>
        <DesktopNewSocialNetwork
          src={instagreen}
          srcwhite={instawhite}
          alt="Instagram"
          url="https://instagram.com/tdarotala"
        />
        <DesktopNewSocialNetwork
          src={facebookgreen}
          srcwhite={facebookwhite}
          alt="Facebook"
          url="https://instagram.com/tdarotala"
        />
        <DesktopNewSocialNetwork
          src={youtubegreen}
          srcwhite={youtubewhite}
          alt="Youtube"
          url="https://instagram.com/tdarotala"
        />
      </div>
    </div>
  );
};

export default DesktopSocialNetworkContainer;
