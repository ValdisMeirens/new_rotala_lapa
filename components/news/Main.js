import DesktopMainContainer from "./desktop/DesktopMainContainer";
import MobileMainContainer from "./mobile/MobileMainContainer";
import classes from "./Main.module.css";

const Main = ({ news, calendar, calendarMobile }) => {
  return (
    <div className={classes.container}>
      <MobileMainContainer news={news} calendar={calendarMobile} />
      <DesktopMainContainer news={news} calendar={calendar} />
    </div>
  );
};

export default Main;
