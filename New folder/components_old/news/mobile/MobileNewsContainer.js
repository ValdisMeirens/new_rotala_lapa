import classes from "./MobileNewsContainer.module.css";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Fragment, useEffect } from "react";
import MobileNewsContent from "./MobileNewsContent";

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
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

const MobileNewsContainer = ({ news }) => {
  //console.log(news);

  const newsImageArray = news.map((news) => (
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
        width={1000}
        height={1000}
        sizes="100vw"
      />

      <MobileNewsContent
        title={news.title}
        smalltext={news.smalltext}
        text={news.text}
        newsid={news.ID}
        key={news.ID}
      />
    </motion.div>
  ));

  // const newsArray = news.map((news) => (
  //   <MobileNewsContent
  //     title={news.title}
  //     smalltext={news.smalltext}
  //     text={news.text}
  //     newsid={news.ID}
  //     key={news.ID}
  //   />
  // ));

  const [currentImage, setCurrentImage] = useCycle(...newsImageArray);
  // const [currentNews, setCurrentNews] = useCycle(...newsArray);

  useEffect(() => {
    const timeout = setInterval(setCurrentImage, 3000);

    return () => clearInterval(timeout);
  }, [setCurrentImage, currentImage]);

  // useEffect(() => {
  //   const timeout = setInterval(setCurrentNews, 5000);

  //   return () => clearInterval(timeout);
  // }, [setCurrentNews, currentNews]);

  return (
    <>
      <div className={classes.container}>
        <AnimatePresence>{currentImage}</AnimatePresence>
        {/* <div className={classes.textContainer}>{currentNews}</div> */}
      </div>
      {/* <div className={classes.textContainer}>{currentNews}</div> */}
    </>
  );
};

export default MobileNewsContainer;
