import classes from "./DesktopMain.module.css";
import DesktopMainDiv from "./DesktopMainDiv.js";

const DesktopMain = ({ news, calendar }) => {
  return (
    <div className={classes.desktopContainer}>
      <DesktopMainDiv news={news} calendar={calendar} />
    </div>
  );
};

export default DesktopMain;
