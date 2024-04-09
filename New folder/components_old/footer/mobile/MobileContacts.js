import MobileContactUsInfoSection from "./MobileContactUsInfoSection";
import classes from "./MobileContacts.module.css";
import MobileFollowUs from "./MobileFollowUs";
import Image from "next/image";

const MobileContacts = () => {
  return (
    // <div className={classes.contactsContainer}>
    //   <h3 className={classes.contactTitle}>SAZINIES AR MUMS</h3>
    //   <div className={classes.contactparagraph}>
    //     <div className={classes.contactfirstside}>
    //       <div>DIĀNA GAVARE</div>
    //       <div>Mākslinieciskā vadītāja</div>
    //       <div>gavarediana@gmail.com</div>
    //     </div>
    //     <div className={classes.contactsecondside}>
    //       <div>LĪVA BURMISTRE</div>
    //       <div>Rotaļas prezidente</div>
    //       <div>liva.burmistre@gmail.com</div>
    //     </div>
    //   </div>
    //   <MobileFollowUs />
    // </div>

    <div className={classes.container}>
      <div className={classes.title}>KONTAKTI</div>
      <MobileContactUsInfoSection
        name="Diāna Gavare"
        email="gavarediana@gmail.com"
      />
      <MobileContactUsInfoSection
        name="Līva Burmistre"
        email="liva.burmistre@gmail.com"
      />
      {/* <div>DIĀNA GAVARE</div>
      <div>Mākslinieciskā vadītāja</div>
      <div>gavarediana@gmail.com</div>
      <div>LĪVA BURMISTRE</div>
      <div>Rotaļas prezidente</div>
      <div>liva.burmistre@gmail.com</div> */}
    </div>
  );
};

export default MobileContacts;
