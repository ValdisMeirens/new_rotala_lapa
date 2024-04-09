import classes from "./MobileNewsContent.module.css";
import Link from "next/link";

const MobileNewsContent = (props) => {
  const titleUpperCase = props.title.toUpperCase();

  return (
    <div className={classes.container}>
      <div className={classes.newsTitle}>
        <h4>{titleUpperCase}</h4>
      </div>
      <p className={classes.smallText}>{props.smalltext}</p>
      <p className={classes.smallText}>{props.text}</p>
      <Link href={`/jaunumi/${props.newsid}`} className={classes.readMore}>
        LASĪT VAIRĀK
      </Link>
    </div>
  );
};

export default MobileNewsContent;
