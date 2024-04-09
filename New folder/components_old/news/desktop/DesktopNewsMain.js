import classes from "./DesktopNewsMain.module.css";
import Image from "next/image";

const DesktopNewsMain = (props) => {
  return (
    <div className={classes.desktopContainer}>
      <Image
        src={`/news/${props.news.image}`}
        alt={props.news.title}
        className={classes.image}
        width={2000}
        height={2000}
        sizes="100vw"
      />
      <div className={classes.container}>
        <h1 className={classes.title}>{props.news.title}</h1>
        <p className={classes.text}>{props.news.info}</p>
      </div>
    </div>
  );
};

export default DesktopNewsMain;
