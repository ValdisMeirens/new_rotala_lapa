import classes from "./DesktopMainContainer.module.css";
import DesktopFindUs from "./DesktopFindUs";
import DesktopCalendarContainer from "./DesktopCalendarContainer";
import DesktopNewsContainer from "./DesktopNewsContainer";
import DesktopContacts from "@/components/footer/desktop/DesktopContacts";
import DesktopSocialNetworkContainer from "./DesktopSocialNetworkContainer";
import DesktopFollowUs from "@/components/footer/desktop/DesktopFollowUs";

const DesktopMainContainer = ({ news, calendar }) => {
  return (
    <div className={classes.container}>
      <DesktopNewsContainer news={news} />
      <DesktopCalendarContainer calendar={calendar} />
      <div className={classes.bottomcontainer}>
        <div className={classes.bottom}>
          <DesktopFindUs />
        </div>
        <div className={classes.bottom}>
          <DesktopContacts />
        </div>
        <div className={classes.bottom}>
          <DesktopSocialNetworkContainer />
        </div>
      </div>
    </div>
  );
};

export default DesktopMainContainer;
