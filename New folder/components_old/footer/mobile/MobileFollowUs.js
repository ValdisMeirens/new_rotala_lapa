import classes from "./MobileFollowUs.module.css";
import MobileSocialNetwork from "./MobileSocialNetwork";

import instagrey from "../../../public/svg/instagramsvgrepocomgrey.svg";
import facebookgrey from "../../../public/svg/facebooksvgrepocomgrey.svg";
import youtubegrey from "../../../public/svg/youtubesvgrepocomgrey.svg";
import instawhite from "../../../public/svg/instagramsvgrepocom.svg";
import facebookwhite from "../../../public/svg/facebooksvgrepocom.svg";
import youtubewhite from "../../../public/svg/youtubesvgrepocom.svg";

const MobileFollowUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sectioncontainer}>
        <div className={classes.socialNetworkContainer}>
          <MobileSocialNetwork
            src={instagrey}
            srcwhite={instawhite}
            alt="Instagram"
            url="https://instagram.com/tdarotala"
          />
          <MobileSocialNetwork
            src={facebookgrey}
            srcwhite={facebookwhite}
            alt="Facebook"
            url="https://www.facebook.com/TdaRotala"
          />
          <MobileSocialNetwork
            src={youtubegrey}
            srcwhite={youtubewhite}
            alt="Youtube"
            url="https://www.youtube.com/user/tdaRotala"
          />
        </div>
        <div className={classes.rotala}>TDA Rotaļa</div>
      </div>
    </div>
  );
};

export default MobileFollowUs;
