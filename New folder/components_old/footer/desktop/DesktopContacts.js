import DesktopContactUsInfoSection from "./DesktopContactUsInfoSection";
import classes from "./DesktopContacts.module.css";

const DesktopContacts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>KONTAKTI</div>
      <DesktopContactUsInfoSection
        name="Diāna Gavare"
        email="gavarediana@gmail.com"
      />
      <DesktopContactUsInfoSection
        name="Līva Burmistre"
        email="liva.burmistre@gmail.com"
      />
    </div>
  );
};

export default DesktopContacts;
