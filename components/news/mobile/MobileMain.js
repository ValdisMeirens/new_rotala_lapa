import classes from "./MobileMain.module.css";
import MobileMainDiv from "./MobileMainContainer";

// const animationVariant = {
//   hidden: {
//     opacity: 0,
//   },
//   visiable: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

const MobileMain = (props) => {
  // console.log(props.news.data.news);
  // const newsArray = props.news.data.news.map((news) => (
  //   <motion.div
  //     variants={animationVariant}
  //     key={news.ID}
  //     initial="hidden"
  //     animate="visiable"
  //     exit="exit"
  //     className={classes.test}
  //   >
  //     <Image
  //       src={`/news/${news.image}`}
  //       alt="TDA Rotaļa jaunumi"
  //       className={classes.image}
  //       width={2000}
  //       height={2000}
  //     />
  //     <motion.div className={classes.newsContainer}>
  //       <motion.div className={classes.latestNews}>JAUNUMI</motion.div>
  //       <motion.div className={classes.newsTitle}>
  //         <motion.div>{news.title}</motion.div>
  //       </motion.div>
  //       <motion.p className={classes.smallText}>{news.info}</motion.p>
  //       <Link
  //         href={`/zinas-par-mums-ko-nezinajat/${news.ID}`}
  //         className={classes.readMore}
  //       >
  //         LASĪT VAIRĀK
  //       </Link>
  //     </motion.div>
  //   </motion.div>
  // ));

  // const [currentImage, setCurrentImage] = useCycle(...newsArray);

  // useEffect(() => {
  //   const timeout = setInterval(setCurrentImage, 2000);

  //   return () => clearInterval(timeout);
  // }, [setCurrentImage, currentImage]);

  return (
    <div className={classes.mobileContainer}>
      <MobileMainDiv data={props} />
    </div>
  );
};

export default MobileMain;
