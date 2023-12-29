import classes from "./DesktopNewsContent.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const DesktopNewsContent = (props) => {
  const titleUpperCase = props.title.toUpperCase();

  return (
    <motion.div className={classes.container}>
      <motion.div className={classes.title}>{titleUpperCase}</motion.div>
      <motion.div className={classes.smallText}>{props.smalltext}</motion.div>
      <motion.div className={classes.text}>{props.text}</motion.div>

      <motion.div className={classes.readMoreContainer}>
        <Link href={`/jaunumi/${props.newsid}`}>
          <div className={classes.readmore}>LASĪT VAIRĀK</div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DesktopNewsContent;
