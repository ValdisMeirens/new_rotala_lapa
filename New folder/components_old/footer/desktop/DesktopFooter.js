import MobileFollowUs from "../mobile/MobileFollowUs";
import DesktopContacts from "./DesktopContacts";
import DesktopFollowUs from "./DesktopFollowUs";
import classes from "./DesktopFooter.module.css";

const DesktopFooter = () => {
  return (
    <div className={classes.desktopContainer}>
      {/* <DesktopContacts /> */}
      {/* <MobileFollowUs /> */}
      <DesktopFollowUs />
    </div>
  );
};

export default DesktopFooter;
