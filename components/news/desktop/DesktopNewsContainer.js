import classes from "./DesktopNewsContainer.module.css";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useEffect } from "react";
import DesktopNewsContent from "./DesktopNewsContent";

// const animationVariant = {
//   hidden: {
//     opacity: 0,
//   },
//   visiable: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const animationVariant = {
  hidden: {
    x: "100vw",
  },
  visiable: {
    x: 0,
    transition: {
      duration: 0.65,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.65,
    },
  },
};

const DesktopNewsContainer = ({ news }) => {
  const newsArray = news.map((news) => {
    return (
      <motion.div
        variants={animationVariant}
        key={news.ID}
        initial="hidden"
        animate="visiable"
        exit="exit"
      >
        <Image
          src={`/news/${news.image}`}
          alt="TDA Rotaļa jaunumi"
          className={classes.image}
          width={2560}
          height={2000}
          sizes="100vw"
        />
        <DesktopNewsContent
          title={news.title}
          smalltext={news.smalltext}
          newsid={news.ID}
          text={news.text}
        />
      </motion.div>
    );
  });

  const [currentImage, setCurrentImage] = useCycle(...newsArray);

  useEffect(() => {
    const timeout = setInterval(setCurrentImage, 5000);

    return () => clearInterval(timeout);
  }, [setCurrentImage, currentImage]);

  return (
    <div className={classes.container}>
      <AnimatePresence>{currentImage}</AnimatePresence>
    </div>
  );
};

export default DesktopNewsContainer;
