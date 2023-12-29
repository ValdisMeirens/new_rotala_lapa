import classes from "./MobileMainContainer.module.css";

import MobileFindUs from "./MobileFindUs";
import MobileCalendarContainer from "./MobileCalendarContainer";
import MobileNewsContainer from "./MobileNewsContainer";
import MobileContacts from "@/components/footer/mobile/MobileContacts";
import MobileFollowUs from "@/components/footer/mobile/MobileFollowUs";

const MobileMainContainer = ({ news, calendar }) => {
  return (
    <div className={classes.container}>
      <MobileNewsContainer news={news} />
      <MobileCalendarContainer calendar={calendar} />
      <MobileFindUs />
      <MobileContacts />
      <MobileFollowUs />
    </div>
  );
};

export default MobileMainContainer;
